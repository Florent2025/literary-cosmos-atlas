"""Model the Literary Cosmos 3D assets in Blender and export them for three.js.

Run with the Blender Python module (``pip install bpy``) or inside Blender:

    python tools/blender/build_models.py            # writes assets/models/*.json
    python tools/blender/build_models.py --render   # also renders a Cycles preview

Two assets are produced:

* ``book.json`` – a hardcover volume (beveled boards, rounded spine with raised
  head/tail bands, concave fore-edge page block). Its seven geometry groups
  follow the material order used by ``makeBookMaterials`` in app.js:
  0 fore-edge, 1 spine, 2 head, 3 tail, 4 front cover, 5 back cover, 6 board edges.
* ``armillary.json`` – a brass armillary sphere split into named parts so the
  page can animate each ring (meridian, horizon, equator, ecliptic, tropics,
  colure, polar axis, globe, stand).

Coordinates are authored directly in three.js space (Y up, metres-free units).
"""

import json
import math
import os
import sys
from collections import defaultdict

import bpy  # noqa: I001 - bpy must be imported before bmesh/mathutils
import bmesh
from mathutils import Matrix, Vector

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
OUT_DIR = os.path.join(ROOT, "assets", "models")

# Book dimensions mirror the BoxGeometry(0.72, 1.02, 0.22) it replaces.
W, H, D = 0.72, 1.02, 0.22
BOARD = 0.026
HINGE_X = -0.338
SPINE_RX = 0.046


def reset_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)


def link(name, bm, smooth=False):
    if smooth:
        for face in bm.faces:
            face.smooth = True
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    return obj


def box(bm, x0, x1, y0, y1, z0, z1):
    """Add an axis-aligned box to ``bm`` and return its new faces."""
    corners = [
        (x0, y0, z0), (x1, y0, z0), (x1, y1, z0), (x0, y1, z0),
        (x0, y0, z1), (x1, y0, z1), (x1, y1, z1), (x0, y1, z1),
    ]
    v = [bm.verts.new(c) for c in corners]
    quads = [(0, 3, 2, 1), (4, 5, 6, 7), (0, 1, 5, 4), (2, 3, 7, 6), (1, 2, 6, 5), (0, 4, 7, 3)]
    return [bm.faces.new([v[i] for i in quad]) for quad in quads]


def ensure_uv(bm):
    return bm.loops.layers.uv.get("UVMap") or bm.loops.layers.uv.new("UVMap")


# --------------------------------------------------------------------------- book

def build_board(z_outer, z_inner, cover_slot):
    bm = bmesh.new()
    zl, zh = sorted((z_outer, z_inner))
    box(bm, HINGE_X, W / 2, -H / 2, H / 2, zl, zh)
    bmesh.ops.bevel(bm, geom=list(bm.edges), offset=0.0045, segments=3, affect="EDGES", profile=0.5)
    uv = ensure_uv(bm)
    sign = 1 if z_outer > 0 else -1
    for face in bm.faces:
        n = face.normal
        centre = face.calc_center_median()
        is_cover = n.z * sign > 0.98 and abs(centre.z - z_outer) < 1e-4
        face.material_index = cover_slot if is_cover else 6
        for loop in face.loops:
            co = loop.vert.co
            u = (co.x - HINGE_X) / (W / 2 - HINGE_X)
            if sign < 0:
                u = 1 - u
            loop[uv].uv = (u, (co.y + H / 2) / H)
    return link("board_front" if sign > 0 else "board_back", bm)


def build_page_block():
    bm = bmesh.new()
    x0, x1 = HINGE_X - 0.004, W / 2 - 0.012
    y0, y1 = -H / 2 + 0.014, H / 2 - 0.014
    z0, z1 = -D / 2 + BOARD, D / 2 - BOARD
    box(bm, x0, x1, y0, y1, z0, z1)
    # Subdivide across the thickness so the fore-edge can be shaped concave.
    bmesh.ops.subdivide_edges(
        bm,
        edges=[e for e in bm.edges if abs(e.verts[0].co.z - e.verts[1].co.z) > 1e-6],
        cuts=9,
        use_grid_fill=True,
    )
    for vert in bm.verts:
        if vert.co.x > x1 - 1e-6:
            t = vert.co.z / z1
            vert.co.x -= 0.011 * (1 - t * t)
    bm.normal_update()
    uv = ensure_uv(bm)
    for face in bm.faces:
        n = face.normal
        if n.y > 0.7:
            slot = 2
        elif n.y < -0.7:
            slot = 3
        else:
            slot = 0
        face.material_index = slot
        for loop in face.loops:
            co = loop.vert.co
            if slot == 2:
                loop[uv].uv = ((co.x + W / 2) / W, (D / 2 - co.z) / D)
            elif slot == 3:
                loop[uv].uv = ((co.x + W / 2) / W, (co.z + D / 2) / D)
            else:
                loop[uv].uv = ((D / 2 - co.z) / D, (co.y + H / 2) / H)
    return link("page_block", bm)


def spine_section(rx, rz, steps=24):
    """Half-ellipse from back board (z<0) round the -x side to the front board."""
    points = []
    for i in range(steps + 1):
        theta = -math.pi / 2 + math.pi * i / steps
        points.append((HINGE_X - rx * math.cos(theta), rz * math.sin(theta)))
    return points


def build_spine():
    bm = bmesh.new()
    uv = ensure_uv(bm)
    outer = spine_section(SPINE_RX, D / 2)
    inner = spine_section(SPINE_RX - BOARD * 0.8, D / 2 - BOARD)
    rows = [-H / 2, -H / 2 + 0.06, 0.0, H / 2 - 0.06, H / 2]
    out_rows = [[bm.verts.new((x, y, z)) for x, z in outer] for y in rows]
    in_rows = [[bm.verts.new((x, y, z)) for x, z in inner] for y in rows]
    for r in range(len(rows) - 1):
        for i in range(len(outer) - 1):
            f = bm.faces.new((out_rows[r][i], out_rows[r][i + 1], out_rows[r + 1][i + 1], out_rows[r + 1][i]))
            f.material_index = 1
            f.smooth = True
            g = bm.faces.new((in_rows[r][i + 1], in_rows[r][i], in_rows[r + 1][i], in_rows[r + 1][i + 1]))
            g.material_index = 6
            g.smooth = True
    for row, flip in ((0, True), (len(rows) - 1, False)):
        for i in range(len(outer) - 1):
            quad = (out_rows[row][i], in_rows[row][i], in_rows[row][i + 1], out_rows[row][i + 1])
            f = bm.faces.new(quad if flip else tuple(reversed(quad)))
            f.material_index = 6
    bm.normal_update()
    for face in bm.faces:
        for loop in face.loops:
            co = loop.vert.co
            loop[uv].uv = ((co.z + D / 2) / D, (co.y + H / 2) / H)
    # Raised head and tail bands sit on the gilt bars painted into the spine texture.
    for v_centre in (0.925, 0.1):
        y_centre = -H / 2 + v_centre * H
        band_rows = []
        for k, (dy, lift) in enumerate(((-0.009, 0.0), (-0.004, 0.0055), (0.004, 0.0055), (0.009, 0.0))):
            sect = spine_section(SPINE_RX + 0.0008 + lift, D / 2 + 0.0008 + lift * 0.4)
            band_rows.append([bm.verts.new((x, y_centre + dy, z)) for x, z in sect])
        for r in range(len(band_rows) - 1):
            for i in range(len(band_rows[r]) - 1):
                f = bm.faces.new((band_rows[r][i], band_rows[r][i + 1], band_rows[r + 1][i + 1], band_rows[r + 1][i]))
                f.material_index = 1
                f.smooth = True
                for loop in f.loops:
                    co = loop.vert.co
                    loop[uv].uv = ((co.z + D / 2) / D, v_centre)
    bm.normal_update()
    return link("spine", bm)


def build_book():
    parts = [
        build_board(D / 2, D / 2 - BOARD, 4),
        build_board(-D / 2, -D / 2 + BOARD, 5),
        build_page_block(),
        build_spine(),
    ]
    return parts


# ---------------------------------------------------------------------- armillary

def band_ring(radius, width, thickness, segments=96, bevel=0.006):
    """Flat brass band ring lying in the XZ plane (axis +Y)."""
    bm = bmesh.new()
    profile = [
        (radius - thickness / 2, -width / 2),
        (radius + thickness / 2, -width / 2),
        (radius + thickness / 2, width / 2),
        (radius - thickness / 2, width / 2),
    ]
    rings = []
    for s in range(segments):
        a = 2 * math.pi * s / segments
        ca, sa = math.cos(a), math.sin(a)
        rings.append([bm.verts.new((r * ca, y, r * sa)) for r, y in profile])
    for s in range(segments):
        a, b = rings[s], rings[(s + 1) % segments]
        for i in range(4):
            j = (i + 1) % 4
            bm.faces.new((a[i], a[j], b[j], b[i]))
    bm.normal_update()
    longitudinal = [e for e in bm.edges if abs((e.verts[0].co - e.verts[1].co).length) < 2 * math.pi * radius / segments * 1.5
                    and abs(e.verts[0].co.y - e.verts[1].co.y) < 1e-7
                    and abs(Vector((e.verts[0].co.x, e.verts[0].co.z)).length - Vector((e.verts[1].co.x, e.verts[1].co.z)).length) < 1e-7]
    bmesh.ops.bevel(bm, geom=longitudinal, offset=bevel, segments=2, affect="EDGES", profile=0.5)
    return bm


def add_ticks(bm, radius, y, count, long_every, size=(0.012, 0.012, 0.05)):
    for i in range(count):
        a = 2 * math.pi * i / count
        length = size[2] * (1.7 if i % long_every == 0 else 1)
        geom = bmesh.ops.create_cube(bm, size=1.0)
        verts = geom["verts"]
        bmesh.ops.scale(bm, vec=(length, size[1], size[0]), verts=verts)
        bmesh.ops.translate(bm, vec=(radius, y, 0), verts=verts)
        bmesh.ops.rotate(bm, cent=(0, 0, 0), matrix=Matrix.Rotation(-a, 3, "Y"), verts=verts)


def rotated(bm, angle, axis):
    bmesh.ops.rotate(bm, cent=(0, 0, 0), matrix=Matrix.Rotation(angle, 3, axis), verts=bm.verts)
    return bm


def build_stand():
    bm = bmesh.new()
    # Profile (radius, height) of a turned baluster pedestal, spun around +Y.
    profile = [
        (0.0, -1.86), (0.52, -1.86), (0.54, -1.82), (0.5, -1.78), (0.36, -1.74),
        (0.3, -1.66), (0.34, -1.6), (0.2, -1.52), (0.12, -1.42), (0.1, -1.3),
        (0.15, -1.24), (0.08, -1.18), (0.07, -1.12), (0.0, -1.12),
    ]
    verts = [bm.verts.new((r, y, 0)) for r, y in profile]
    edges = [bm.edges.new((verts[i], verts[i + 1])) for i in range(len(verts) - 1)]
    bmesh.ops.spin(bm, geom=verts + edges, cent=(0, 0, 0), axis=(0, 1, 0), angle=2 * math.pi, steps=72, use_merge=True)
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-5)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    # Half-ring cradle that carries the meridian.
    cradle = band_ring(1.08, 0.05, 0.04, segments=96)
    rotated(cradle, math.pi / 2, "X")
    mesh = bpy.data.meshes.new("tmp_cradle")
    cradle.to_mesh(mesh)
    cradle.free()
    bm_cradle = bmesh.new()
    bm_cradle.from_mesh(mesh)
    bmesh.ops.delete(bm_cradle, geom=[v for v in bm_cradle.verts if v.co.y > -0.25], context="VERTS")
    bm_cradle.to_mesh(mesh)
    bm_cradle.free()
    bm.from_mesh(mesh)
    bpy.data.meshes.remove(mesh)
    return link("stand", bm, smooth=True)


def build_armillary():
    tilt = math.radians(23.44)
    parts = {}
    parts["meridian"] = link("meridian", rotated(band_ring(1.0, 0.075, 0.03), math.pi / 2, "X"), smooth=True)
    horizon = band_ring(1.12, 0.09, 0.03)
    add_ticks(horizon, 1.12, 0.05, 72, 6)
    parts["horizon"] = link("horizon", horizon, smooth=True)
    equator = band_ring(0.92, 0.06, 0.024)
    add_ticks(equator, 0.92, 0.0, 24, 6, size=(0.01, 0.068, 0.02))
    parts["equator"] = link("equator", equator, smooth=True)
    ecliptic = band_ring(0.92, 0.1, 0.022)
    add_ticks(ecliptic, 0.92, 0.0, 12, 1, size=(0.012, 0.11, 0.026))
    parts["ecliptic"] = link("ecliptic", rotated(ecliptic, tilt, "X"), smooth=True)
    tropic_r = 0.92 * math.cos(tilt)
    tropic_y = 0.92 * math.sin(tilt)
    for name, y in (("tropicNorth", tropic_y), ("tropicSouth", -tropic_y)):
        bm = band_ring(tropic_r, 0.035, 0.018)
        bmesh.ops.translate(bm, vec=(0, y, 0), verts=bm.verts)
        parts[name] = link(name, bm, smooth=True)
    parts["colure"] = link("colure", rotated(band_ring(0.95, 0.05, 0.022), math.pi / 2, "Z"), smooth=True)
    axis = bmesh.new()
    bmesh.ops.create_cone(axis, cap_ends=True, segments=24, radius1=0.016, radius2=0.016, depth=2.36)
    rotated(axis, math.pi / 2, "X")
    for y in (1.2, -1.2):
        geom = bmesh.ops.create_uvsphere(axis, u_segments=24, v_segments=12, radius=0.042)
        bmesh.ops.translate(axis, vec=(0, y, 0), verts=geom["verts"])
    parts["axis"] = link("axis", axis, smooth=True)
    globe = bmesh.new()
    bmesh.ops.create_uvsphere(globe, u_segments=48, v_segments=24, radius=0.2)
    parts["globe"] = link("globe", globe, smooth=True)
    parts["stand"] = build_stand()
    return parts


# ------------------------------------------------------------------------- export

def mesh_arrays(objects, with_uv):
    depsgraph = bpy.context.evaluated_depsgraph_get()
    lookup = {}
    positions, normals, uvs = [], [], []
    groups = defaultdict(list)
    for obj in objects:
        evaluated = obj.evaluated_get(depsgraph)
        mesh = evaluated.to_mesh()
        mesh.calc_loop_triangles()
        corner_normals = mesh.corner_normals
        uv_data = mesh.uv_layers.active.data if with_uv and mesh.uv_layers.active else None
        for tri in mesh.loop_triangles:
            corners = []
            for loop_index, vert_index in zip(tri.loops, tri.vertices):
                co = mesh.vertices[vert_index].co
                n = corner_normals[loop_index].vector
                t = uv_data[loop_index].uv if uv_data else (0.0, 0.0)
                key = (round(co.x, 4), round(co.y, 4), round(co.z, 4),
                       round(n.x, 3), round(n.y, 3), round(n.z, 3),
                       round(t[0], 4), round(t[1], 4))
                if key not in lookup:
                    lookup[key] = len(positions) // 3
                    positions.extend(key[0:3])
                    normals.extend(key[3:6])
                    uvs.extend(key[6:8])
                corners.append(lookup[key])
            groups[tri.material_index].append(corners)
        evaluated.to_mesh_clear()
    index, out_groups = [], []
    for material_index in sorted(groups):
        start = len(index)
        for corners in groups[material_index]:
            index.extend(corners)
        out_groups.append({"start": start, "count": len(index) - start, "materialIndex": material_index})
    data = {"position": positions, "normal": normals, "index": index, "groups": out_groups}
    if with_uv:
        data["uv"] = uvs
    return data


def write_json(name, payload):
    os.makedirs(OUT_DIR, exist_ok=True)
    path = os.path.join(OUT_DIR, name)
    with open(path, "w", encoding="utf-8") as handle:
        json.dump(payload, handle, separators=(",", ":"))
    print(f"wrote {os.path.relpath(path, ROOT)} ({os.path.getsize(path) / 1024:.1f} KiB)")


def render_preview(parts):
    """Cycles turntable still of the armillary, used as the no-WebGL fallback."""
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.device = "CPU"
    scene.cycles.samples = 48
    scene.render.resolution_x = 720
    scene.render.resolution_y = 720
    scene.render.film_transparent = True
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    brass = bpy.data.materials.new("brass")
    brass.use_nodes = True
    bsdf = brass.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (0.78, 0.6, 0.32, 1)
    bsdf.inputs["Metallic"].default_value = 1.0
    bsdf.inputs["Roughness"].default_value = 0.32
    glow = bpy.data.materials.new("glow")
    glow.use_nodes = True
    gbsdf = glow.node_tree.nodes["Principled BSDF"]
    gbsdf.inputs["Base Color"].default_value = (0.2, 0.55, 0.7, 1)
    gbsdf.inputs["Emission Color"].default_value = (0.45, 0.95, 1.0, 1)
    gbsdf.inputs["Emission Strength"].default_value = 1.4
    pivot = bpy.data.objects.new("pivot", None)
    bpy.context.collection.objects.link(pivot)
    for name, obj in parts.items():
        obj.data.materials.append(glow if name == "globe" else brass)
        # Blender is Z-up; the parts were authored Y-up for three.js.
        obj.parent = pivot
    pivot.rotation_euler = (math.pi / 2, 0, math.radians(-28))
    inner = ("equator", "ecliptic", "tropicNorth", "tropicSouth", "colure", "axis", "globe")
    for name in inner:
        parts[name].rotation_euler = (math.radians(-35), 0, 0)
    world = bpy.data.worlds.new("world")
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs["Color"].default_value = (0.02, 0.04, 0.08, 1)
    world.node_tree.nodes["Background"].inputs["Strength"].default_value = 0.6
    scene.world = world
    for location, energy, color in (((3, -4, 4), 900, (1, 0.9, 0.75)), ((-4, -2, 1), 300, (0.45, 0.85, 1)), ((0, 4, 3), 260, (0.7, 0.6, 1))):
        light_data = bpy.data.lights.new("key", type="AREA")
        light_data.energy = energy
        light_data.color = color
        light_data.size = 2.5
        light = bpy.data.objects.new("key", light_data)
        light.location = location
        light.rotation_euler = (Vector((0, 0, -0.3)) - Vector(location)).to_track_quat("-Z", "Y").to_euler()
        bpy.context.collection.objects.link(light)
    cam_data = bpy.data.cameras.new("cam")
    cam_data.lens = 58
    cam = bpy.data.objects.new("cam", cam_data)
    cam.location = (0, -6.4, 0.9)
    cam.rotation_euler = (Vector((0, 0, -0.34)) - Vector(cam.location)).to_track_quat("-Z", "Y").to_euler()
    bpy.context.collection.objects.link(cam)
    scene.camera = cam
    out = os.path.join(ROOT, "assets", "models", "armillary-render.png")
    scene.render.filepath = out
    bpy.ops.render.render(write_still=True)
    print(f"rendered {os.path.relpath(out, ROOT)}")


def main():
    reset_scene()
    book = build_book()
    payload = mesh_arrays(book, with_uv=True)
    payload["meta"] = {
        "source": "tools/blender/build_models.py",
        "blender": bpy.app.version_string,
        "materials": ["fore-edge", "spine", "head", "tail", "front cover", "back cover", "board edge"],
    }
    write_json("book.json", payload)

    reset_scene()
    parts = build_armillary()
    armillary = {"meta": {"source": "tools/blender/build_models.py", "blender": bpy.app.version_string}, "parts": {}}
    for name, obj in parts.items():
        data = mesh_arrays([obj], with_uv=False)
        data.pop("groups", None)
        armillary["parts"][name] = data
    write_json("armillary.json", armillary)
    if "--render" in sys.argv:
        render_preview(parts)


if __name__ == "__main__":
    main()
