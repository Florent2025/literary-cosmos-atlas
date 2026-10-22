"""Theory-in-motion diagrams for the Literary Cosmos (Manim Community 0.19+).

Each scene explains one classical model from literary theory. Text is localised:

    LC_LANG=en manim -qm scenes.py PlotArc

``tools/manim/render_all.py`` renders every scene in zh/en/fr, re-encodes the
clips for the web and writes posters into ``assets/motion/``.
"""

import os
import random

from manim import (
    DL, DOWN, LEFT, RIGHT, UL, UP,
    Annulus, ArcBetweenPoints, Arrow, Circle, Create, CurvedArrow, DashedLine, Dot,
    Ellipse, FadeIn, FadeOut, Flash, GrowFromCenter, Indicate, LaggedStart, Line,
    MoveAlongPath, Rectangle, ReplacementTransform, RoundedRectangle, Scene, Text,
    VGroup, VMobject, Write, config, rate_functions, smooth,
)

LANG = os.environ.get("LC_LANG", "zh")

INK = "#060d18"
PAPER = "#edf3f8"
MUTED = "#9eb0c2"
BRASS = "#d6b76a"
CYAN = "#75f5ff"
VIOLET = "#9f8cff"
JADE = "#89f2c1"
CORAL = "#ff8d8d"

config.background_color = INK

SERIF = "Noto Serif SC" if LANG == "zh" else "Cormorant Garamond"
LABEL_FONT = "Noto Serif SC" if LANG == "zh" else "Cormorant Garamond"
MONO = "Space Grotesk"

STRINGS = {
    "zh": {
        "kicker": "文学理论宇宙 · 理论动画",
        # PlotArc
        "plot_title": "亚里士多德的情节结构",
        "begin": "开端", "middle": "中段", "end": "结局",
        "desis": "结 · desis（纠葛）",
        "peripeteia": "突转 · peripeteia",
        "anagnorisis": "发现 · anagnorisis",
        "lysis": "解 · lysis（解局）",
        "plot_note": "最佳的发现与突转同时发生",
        "plot_case": "例：《俄狄浦斯王》中报信人本欲解忧，却引出真相",
        "catharsis": "净化 · katharsis：怜悯与恐惧得到疏导",
        "plot_src": "亚里士多德《诗学》第7、11、18章",
        # FabulaSyuzhet
        "fs_title": "故事（fabula）与情节（syuzhet）",
        "fabula": "故事：事件的时间—因果顺序",
        "syuzhet": "情节：文本呈现事件的顺序",
        "events": ["犯罪", "逃逸", "发现尸体", "侦探到场", "线索", "揭晓"],
        "analepsis": "倒叙 · analepsis（热奈特）",
        "fs_note": "陌生化：重排顺序，让熟悉之物重新可感",
        "fs_src": "什克洛夫斯基《作为手法的艺术》（1917）；热奈特《叙事话语》（1972）",
        # JakobsonAxes
        "ja_title": "雅各布森：选择轴与组合轴",
        "combination": "组合轴 · 毗连 · 句段",
        "selection": "选择轴 · 相似 · 聚合",
        "nouns": ["孩子", "小孩", "娃娃", "幼儿"],
        "verbs": ["睡着了", "打盹", "瞌睡", "小憩"],
        "ja_quote": "诗性功能把对等原则从选择轴投射到组合轴",
        "ja_example": ("床前明月光，疑是地上霜", ["[4:5]", "[10:11]"]),
        "ja_rhyme": "押韵：对等在句段中重复出现",
        "ja_src": "雅各布森《语言学与诗学》（1960）",
        # SemioticSquare
        "sq_title": "格雷马斯符号矩阵",
        "s1": "生", "s2": "死", "ns2": "非死", "ns1": "非生",
        "contrary": "反对关系", "contradiction": "矛盾关系", "implication": "蕴含（互补）",
        "ns2_case": "幽灵、不死者", "ns1_case": "自动人偶、尸体",
        "sq_note": "叙事可读作在矩阵各位置之间的转换",
        "sq_src": "格雷马斯《结构语义学》（1966）；格雷马斯与拉斯捷（1968）",
        # SignifierChain
        "sc_title": "延异：能指链的滑动",
        "signifier": "能指", "signified": "所指",
        "chain": ["书", "成册的著作", "著作：写成的作品", "作品：创作的产物", "创作：书写的过程", "书写：痕迹……"],
        "differ": "差异（differ）", "defer": "延宕（defer）",
        "sc_note": "意义从未完全在场，只在差异与延宕中被暂时固定",
        "sc_src": "索绪尔《普通语言学教程》（1916）；德里达《论文字学》（1967）",
        # HermeneuticCircle
        "hc_title": "阐释学循环与视域融合",
        "part": "部分", "whole": "整体",
        "hc_circle": "理解整体需借助部分，理解部分又预设整体",
        "text_h": "文本的视域", "reader_h": "读者的视域",
        "fusion": "视域融合（伽达默尔，1960）",
        "expect": "期待视野（姚斯，1967）",
        "blanks": "空白由读者填补（伊瑟尔，1976）",
        "hc_src": "施莱尔马赫、狄尔泰；伽达默尔《真理与方法》；姚斯；伊瑟尔《阅读行为》",
        # ThreeHorizons
        "th_title": "詹明信：阐释的三个视域",
        "th_text": "文本",
        "h1": "政治史：文本作为象征行为",
        "h2": "社会：意识形态素与阶级话语",
        "h3": "历史：生产方式与形式的意识形态",
        "th_quote": "“永远历史化！”",
        "th_src": "詹明信《政治无意识》（1981）",
        # DistantReading
        "dr_title": "近读与远读",
        "close": "近读：一页文本里的细节、修辞与语气",
        "distant": "远读：在成千上万文本中寻找模式",
        "year": "出版年份", "feature": "文本特征（示意）",
        "dr_note": "示意数据：远读提出问题，近读检验解释",
        "dr_src": "莫莱蒂《世界文学猜想》（2000）；安德伍德《遥远的地平线》（2019）",
        # SlowViolence
        "sv_title": "缓慢的暴力",
        "time": "时间", "visibility": "媒体可见性阈值",
        "spectacle": "瞬时的景观性暴力",
        "slow": "累积、分散、迟滞的伤害",
        "sv_quote": "“一种逐渐发生、不为人所见的暴力”",
        "sv_task": "文学的任务：让缓慢之物可见、可感、可叙述",
        "sv_src": "罗布·尼克松《缓慢的暴力与穷人的环境主义》（2011）",
        # DreamWork
        "dw_title": "梦的工作：凝缩与移置",
        "latent": "隐梦思想", "manifest": "显梦内容",
        "elements": ["愿望", "记忆痕迹", "白日残余"],
        "condensation": "凝缩：多个元素合成一个意象",
        "displacement": "移置：情感重心转向次要细节",
        "detail": "细节",
        "dw_lacan": "拉康：凝缩＝隐喻，移置＝换喻",
        "dw_src": "弗洛伊德《梦的解析》（1900）；拉康《无意识中字母的动因》（1957）",
    },
    "en": {
        "kicker": "THE LITERARY COSMOS · THEORY IN MOTION",
        "plot_title": "Aristotle’s Structure of Plot",
        "begin": "Beginning", "middle": "Middle", "end": "End",
        "desis": "Complication · desis",
        "peripeteia": "Reversal · peripeteia",
        "anagnorisis": "Recognition · anagnorisis",
        "lysis": "Unravelling · lysis",
        "plot_note": "The finest recognition coincides with reversal",
        "plot_case": "e.g. Oedipus: the messenger who comes to cheer him reveals the truth",
        "catharsis": "Catharsis · pity and fear worked through",
        "plot_src": "Aristotle, Poetics, chapters 7, 11 and 18",
        "fs_title": "Fabula and Syuzhet",
        "fabula": "Fabula: events in chronological–causal order",
        "syuzhet": "Syuzhet: the order in which\nthe text presents them",
        "events": ["Crime", "Escape", "Body found", "Detective", "Clues", "Reveal"],
        "analepsis": "Flashback · analepsis (Genette)",
        "fs_note": "Estrangement: reordering makes the familiar perceptible again",
        "fs_src": "Shklovsky, “Art as Device” (1917); Genette, Narrative Discourse (1972)",
        "ja_title": "Jakobson: Axes of Selection and Combination",
        "combination": "Axis of combination · contiguity · syntagm",
        "selection": "Axis of selection · similarity · paradigm",
        "nouns": ["child", "kid", "youngster", "tot"],
        "verbs": ["sleeps", "dozes", "nods", "naps"],
        "ja_quote": "The poetic function projects the principle of equivalence\nfrom the axis of selection into the axis of combination",
        "ja_example": ("I like Ike", ["[3:6]", "[7:10]"]),
        "ja_rhyme": "Rhyme: equivalence recurs along the sequence",
        "ja_src": "Roman Jakobson, “Linguistics and Poetics” (1960)",
        "sq_title": "Greimas’s Semiotic Square",
        "s1": "life", "s2": "death", "ns2": "non-death", "ns1": "non-life",
        "contrary": "contrariety", "contradiction": "contradiction", "implication": "implication",
        "ns2_case": "ghosts, the undead", "ns1_case": "automata, corpses",
        "sq_note": "Narrative can be read as transformations across the positions",
        "sq_src": "A. J. Greimas, Structural Semantics (1966); Greimas & Rastier (1968)",
        "sc_title": "Différance: the Sliding Chain of Signifiers",
        "signifier": "signifier", "signified": "signified",
        "chain": ["book", "a bound written work", "work: a thing written", "written: set down in marks", "marks: traces of…", "traces…"],
        "differ": "to differ", "defer": "to defer",
        "sc_note": "Meaning is never fully present; it is fixed provisionally\nthrough difference and deferral",
        "sc_src": "Saussure, Course in General Linguistics (1916); Derrida, Of Grammatology (1967)",
        "hc_title": "The Hermeneutic Circle and the Fusion of Horizons",
        "part": "Part", "whole": "Whole",
        "hc_circle": "The whole is grasped through its parts, the parts through the whole",
        "text_h": "Horizon of the text", "reader_h": "Horizon of the reader",
        "fusion": "Fusion of horizons (Gadamer, 1960)",
        "expect": "Horizon of expectations (Jauss, 1967)",
        "blanks": "Blanks filled by the reader (Iser, 1976)",
        "hc_src": "Schleiermacher, Dilthey; Gadamer, Truth and Method; Jauss; Iser, The Act of Reading",
        "th_title": "Jameson: Three Horizons of Interpretation",
        "th_text": "text",
        "h1": "Political history: the text as symbolic act",
        "h2": "Society: the ideologeme and class discourse",
        "h3": "History: modes of production, ideology of form",
        "th_quote": "“Always historicize!”",
        "th_src": "Fredric Jameson, The Political Unconscious (1981)",
        "dr_title": "Close Reading and Distant Reading",
        "close": "Close reading: detail, figure and tone on a single page",
        "distant": "Distant reading: patterns across thousands of texts",
        "year": "Publication year", "feature": "Textual feature (schematic)",
        "dr_note": "Illustrative data: distance raises questions, close reading tests them",
        "dr_src": "Moretti, “Conjectures on World Literature” (2000); Underwood, Distant Horizons (2019)",
        "sv_title": "Slow Violence",
        "time": "time", "visibility": "threshold of media visibility",
        "spectacle": "spectacular, instantaneous violence",
        "slow": "attritional harm, dispersed and delayed",
        "sv_quote": "“a violence that occurs gradually and out of sight”",
        "sv_task": "Literature’s task: make the slow visible, sensible, narratable",
        "sv_src": "Rob Nixon, Slow Violence and the Environmentalism of the Poor (2011)",
        "dw_title": "The Dream-Work: Condensation and Displacement",
        "latent": "Latent dream-thoughts", "manifest": "Manifest content",
        "elements": ["wish", "memory trace", "day residue"],
        "condensation": "Condensation: several elements fuse into one image",
        "displacement": "Displacement: affect shifts to a minor detail",
        "detail": "detail",
        "dw_lacan": "Lacan: condensation = metaphor, displacement = metonymy",
        "dw_src": "Freud, The Interpretation of Dreams (1900); Lacan, “The Instance of the Letter” (1957)",
    },
    "fr": {
        "kicker": "LE COSMOS LITTÉRAIRE · LA THÉORIE EN MOUVEMENT",
        "plot_title": "La structure de l’intrigue selon Aristote",
        "begin": "Début", "middle": "Milieu", "end": "Fin",
        "desis": "Nœud · desis",
        "peripeteia": "Péripétie · peripeteia",
        "anagnorisis": "Reconnaissance · anagnorisis",
        "lysis": "Dénouement · lysis",
        "plot_note": "La plus belle reconnaissance coïncide avec la péripétie",
        "plot_case": "ex. Œdipe : le messager venu le rassurer révèle la vérité",
        "catharsis": "Catharsis · pitié et crainte apaisées",
        "plot_src": "Aristote, Poétique, chapitres 7, 11 et 18",
        "fs_title": "Fabula et sjužet",
        "fabula": "Fabula : les événements dans l’ordre chronologique et causal",
        "syuzhet": "Sjužet : l’ordre dans lequel\nle texte les présente",
        "events": ["Crime", "Fuite", "Corps trouvé", "Détective", "Indices", "Révélation"],
        "analepsis": "Retour en arrière · analepse (Genette)",
        "fs_note": "Défamiliarisation : réordonner rend le familier à nouveau perceptible",
        "fs_src": "Chklovski, « L’art comme procédé » (1917) ; Genette, Figures III (1972)",
        "ja_title": "Jakobson : axes de la sélection et de la combinaison",
        "combination": "Axe de la combinaison · contiguïté · syntagme",
        "selection": "Axe de la sélection · similarité · paradigme",
        "nouns": ["enfant", "gamin", "petit", "bambin"],
        "verbs": ["dort", "somnole", "sommeille", "s’assoupit"],
        "ja_quote": "La fonction poétique projette le principe d’équivalence\nde l’axe de la sélection sur l’axe de la combinaison",
        "ja_example": ("I like Ike", ["[3:6]", "[7:10]"]),
        "ja_rhyme": "Rime : l’équivalence revient le long de la séquence",
        "ja_src": "Roman Jakobson, « Linguistique et poétique » (1960)",
        "sq_title": "Le carré sémiotique de Greimas",
        "s1": "vie", "s2": "mort", "ns2": "non-mort", "ns1": "non-vie",
        "contrary": "contrariété", "contradiction": "contradiction", "implication": "complémentarité",
        "ns2_case": "fantômes, morts-vivants", "ns1_case": "automates, cadavres",
        "sq_note": "Le récit se lit comme transformation entre les positions",
        "sq_src": "A. J. Greimas, Sémantique structurale (1966) ; Greimas et Rastier (1968)",
        "sc_title": "La différance : glissement de la chaîne signifiante",
        "signifier": "signifiant", "signified": "signifié",
        "chain": ["livre", "ouvrage relié", "ouvrage : œuvre écrite", "écrite : tracée en signes", "signes : traces de…", "traces…"],
        "differ": "différer : être autre", "defer": "différer : remettre à plus tard",
        "sc_note": "Le sens n’est jamais pleinement présent ; il se fixe\nprovisoirement par différence et report",
        "sc_src": "Saussure, Cours de linguistique générale (1916) ; Derrida, De la grammatologie (1967)",
        "hc_title": "Cercle herméneutique et fusion des horizons",
        "part": "Partie", "whole": "Tout",
        "hc_circle": "On comprend le tout par les parties, et les parties par le tout",
        "text_h": "Horizon du texte", "reader_h": "Horizon du lecteur",
        "fusion": "Fusion des horizons (Gadamer, 1960)",
        "expect": "Horizon d’attente (Jauss, 1967)",
        "blanks": "Les blancs comblés par le lecteur (Iser, 1976)",
        "hc_src": "Schleiermacher, Dilthey ; Gadamer, Vérité et méthode ; Jauss ; Iser, L’Acte de lecture",
        "th_title": "Jameson : trois horizons de l’interprétation",
        "th_text": "texte",
        "h1": "Histoire politique : le texte comme acte symbolique",
        "h2": "Société : l’idéologème et le discours de classe",
        "h3": "Histoire : modes de production, idéologie de la forme",
        "th_quote": "« Toujours historiciser ! »",
        "th_src": "Fredric Jameson, L’Inconscient politique (1981)",
        "dr_title": "Lecture rapprochée et lecture distante",
        "close": "Lecture rapprochée : détail, figure et ton sur une seule page",
        "distant": "Lecture distante : des motifs à travers des milliers de textes",
        "year": "Année de publication", "feature": "Trait textuel (schématique)",
        "dr_note": "Données illustratives : la distance pose les questions, la proximité les vérifie",
        "dr_src": "Moretti, « Conjectures on World Literature » (2000) ; Underwood, Distant Horizons (2019)",
        "sv_title": "La violence lente",
        "time": "temps", "visibility": "seuil de visibilité médiatique",
        "spectacle": "violence spectaculaire et instantanée",
        "slow": "dommage d’usure, dispersé et différé",
        "sv_quote": "« une violence qui se produit graduellement et hors de vue »",
        "sv_task": "La tâche de la littérature : rendre le lent visible, sensible, racontable",
        "sv_src": "Rob Nixon, Slow Violence and the Environmentalism of the Poor (2011)",
        "dw_title": "Le travail du rêve : condensation et déplacement",
        "latent": "Pensées latentes", "manifest": "Contenu manifeste",
        "elements": ["désir", "trace mnésique", "reste diurne"],
        "condensation": "Condensation : plusieurs éléments fusionnent en une image",
        "displacement": "Déplacement : l’affect glisse vers un détail mineur",
        "detail": "détail",
        "dw_lacan": "Lacan : condensation = métaphore, déplacement = métonymie",
        "dw_src": "Freud, L’Interprétation du rêve (1900) ; Lacan, « L’instance de la lettre » (1957)",
    },
}

S = STRINGS[LANG]


def txt(value, size=28, color=PAPER, font=None, weight="NORMAL"):
    return Text(value, font=font or SERIF, font_size=size, color=color, weight=weight)


def fit(mobject, max_width):
    if mobject.width > max_width:
        mobject.scale_to_fit_width(max_width)
    return mobject


class TheoryScene(Scene):
    """Shared title card and source line."""

    title_key = ""

    def header(self):
        kicker = fit(txt(S["kicker"], 15, BRASS, font=MONO), 9)
        title = fit(txt(S[self.title_key], 40, PAPER, weight="BOLD"), 12)
        group = VGroup(kicker, title).arrange(DOWN, buff=0.16, aligned_edge=LEFT).to_corner(UL, buff=0.5)
        rule = Line(LEFT, RIGHT, color=BRASS, stroke_width=1.2).set_width(group.width).next_to(group, DOWN, buff=0.14, aligned_edge=LEFT)
        self.play(FadeIn(kicker, shift=0.2 * DOWN), Write(title), run_time=1.2)
        self.play(Create(rule), run_time=0.5)
        return VGroup(kicker, title, rule)

    def source(self, key):
        line = fit(txt(S[key], 17, MUTED), 12.6).to_corner(DL, buff=0.38)
        self.play(FadeIn(line, shift=0.1 * UP), run_time=0.6)
        return line


class PlotArc(TheoryScene):
    title_key = "plot_title"

    def construct(self):
        self.header()
        base_y = -2.0
        axis = Line([-5.6, base_y, 0], [5.6, base_y, 0], color=MUTED, stroke_width=1.5)
        labels = VGroup(*[txt(S[k], 22, MUTED) for k in ("begin", "middle", "end")])
        for label, x in zip(labels, (-4.6, 0.6, 4.7)):
            label.move_to([x, base_y - 0.38, 0])
        self.play(Create(axis), LaggedStart(*[FadeIn(l) for l in labels], lag_ratio=0.2), run_time=1)
        points = [[-5.4, base_y + 0.1, 0], [-3.2, base_y + 0.9, 0], [-0.8, base_y + 2.0, 0], [1.2, base_y + 2.95, 0],
                  [1.65, base_y + 2.7, 0], [3.2, base_y + 1.2, 0], [5.4, base_y + 0.45, 0]]
        curve = VMobject(color=BRASS, stroke_width=4).set_points_smoothly(points)
        rise = curve.copy().pointwise_become_partial(curve, 0, 0.55)
        self.play(Create(rise), run_time=2.2, rate_func=smooth)
        desis = txt(S["desis"], 24, CYAN).move_to([-2.6, base_y + 2.0, 0])
        self.play(FadeIn(desis, shift=0.2 * UP), run_time=0.6)
        peak = Dot([1.2, base_y + 2.95, 0], color=CORAL, radius=0.09)
        rev = txt(S["peripeteia"], 24, CORAL).next_to(peak, UP + LEFT * 0.3, buff=0.18)
        rec = txt(S["anagnorisis"], 24, VIOLET).next_to(peak, RIGHT, buff=0.35).shift(0.3 * UP)
        self.play(GrowFromCenter(peak), Flash(peak, color=CORAL, line_length=0.35, num_lines=14), run_time=0.8)
        self.play(FadeIn(rev, shift=0.2 * DOWN), FadeIn(rec, shift=0.2 * LEFT), run_time=0.8)
        note = fit(txt(S["plot_note"], 22, PAPER), 6).move_to([3.2, base_y + 3.95, 0])
        self.play(Write(note), run_time=1)
        fall = curve.copy().pointwise_become_partial(curve, 0.55, 1)
        self.play(Create(fall), run_time=1.6)
        lysis = txt(S["lysis"], 24, JADE).move_to([4.4, base_y + 1.5, 0])
        self.play(FadeIn(lysis, shift=0.2 * UP), run_time=0.6)
        case = fit(txt(S["plot_case"], 20, MUTED), 9).move_to([0, base_y - 0.95, 0])
        self.play(FadeIn(case), run_time=0.7)
        glow = VGroup(*[Circle(radius=r, color=JADE, stroke_width=2, stroke_opacity=0.7 - r * 0.5).move_to([5.4, base_y + 0.45, 0]) for r in (0.22, 0.46, 0.7)])
        cath = fit(txt(S["catharsis"], 22, JADE), 4.2).move_to([4.6, base_y + 2.78, 0])
        self.play(LaggedStart(*[GrowFromCenter(g) for g in glow], lag_ratio=0.3), FadeIn(cath, shift=0.15 * UP), run_time=1.4)
        self.source("plot_src")
        self.wait(2.2)


class FabulaSyuzhet(TheoryScene):
    title_key = "fs_title"

    def construct(self):
        self.header()
        top_y, bottom_y = 1.0, -1.7
        fab = fit(txt(S["fabula"], 22, CYAN), 8).move_to([0, top_y + 0.85, 0]).align_to([-5.6, 0, 0], LEFT)
        syu = fit(txt(S["syuzhet"], 22, BRASS), 4.3).move_to([0, bottom_y + 0.85, 0]).align_to([-5.6, 0, 0], LEFT)
        xs = [-5 + i * 2 for i in range(6)]
        palette = [CORAL, CORAL, CYAN, CYAN, VIOLET, JADE]
        nodes = VGroup()
        for i, x in enumerate(xs):
            circle = Circle(radius=0.32, color=palette[i], stroke_width=3).move_to([x, top_y, 0])
            number = txt(str(i + 1), 24, PAPER, font=MONO).move_to(circle)
            label = fit(txt(S["events"][i], 18, MUTED), 1.85).next_to(circle, DOWN, buff=0.12)
            nodes.add(VGroup(circle, number, label))
        line = Line([-5.6, top_y, 0], [5.6, top_y, 0], color=MUTED, stroke_width=1).set_z_index(-1)
        self.play(FadeIn(fab), Create(line), run_time=0.7)
        self.play(LaggedStart(*[GrowFromCenter(n) for n in nodes], lag_ratio=0.15), run_time=1.6)
        order = [2, 3, 4, 0, 1, 5]
        line2 = Line([-5.6, bottom_y, 0], [5.6, bottom_y, 0], color=MUTED, stroke_width=1).set_z_index(-1)
        self.play(FadeIn(syu), Create(line2), run_time=0.7)
        moves, copies = [], VGroup()
        for slot, event_index in enumerate(order):
            copy = nodes[event_index].copy()
            target = [xs[slot], bottom_y, 0]
            path = ArcBetweenPoints(nodes[event_index][0].get_center(), target, angle=-0.6 if xs[slot] >= xs[event_index] else 0.6)
            moves.append(MoveAlongPath(copy, path))
            copies.add(copy)
        self.play(LaggedStart(*moves, lag_ratio=0.25), run_time=3.2, rate_func=smooth)
        arc = CurvedArrow(copies[2][0].get_top() + 0.05 * UP, copies[3][0].get_top() + 0.05 * UP, angle=-1.2, color=CORAL, stroke_width=3)
        flash = fit(txt(S["analepsis"], 22, CORAL), 6).move_to([1.0, bottom_y - 0.9, 0])
        self.play(Create(arc), FadeIn(flash, shift=0.2 * UP), run_time=1)
        self.play(Indicate(copies[3], color=CORAL), Indicate(copies[4], color=CORAL), run_time=1)
        note = fit(txt(S["fs_note"], 22, PAPER), 11).move_to([0, -3.05, 0])
        self.play(Write(note), run_time=1.1)
        self.source("fs_src")
        self.wait(2.2)


class JakobsonAxes(TheoryScene):
    title_key = "ja_title"

    def construct(self):
        self.header()
        origin = [-2.2, -0.6, 0]
        h_axis = Arrow([-5.6, -0.6, 0], [4.8, -0.6, 0], color=CYAN, stroke_width=3, buff=0, max_tip_length_to_length_ratio=0.03)
        v_axis = Arrow([-2.2, -1.05, 0], [-2.2, 2.0, 0], color=BRASS, stroke_width=3, buff=0, max_tip_length_to_length_ratio=0.06)
        h_label = fit(txt(S["combination"], 20, CYAN), 6).next_to(h_axis, DOWN, buff=0.12).align_to(h_axis, RIGHT)
        v_label = fit(txt(S["selection"], 20, BRASS), 5.2).next_to(v_axis.get_end(), RIGHT, buff=0.2).shift(0.12 * DOWN)
        self.play(Create(h_axis), Create(v_axis), run_time=1)
        self.play(FadeIn(h_label), FadeIn(v_label), run_time=0.7)
        nouns = VGroup(*[txt(w, 30 if i == 0 else 24, PAPER if i == 0 else MUTED) for i, w in enumerate(S["nouns"])])
        verbs = VGroup(*[txt(w, 30 if i == 0 else 24, PAPER if i == 0 else MUTED) for i, w in enumerate(S["verbs"])])
        nouns.arrange(UP, buff=0.32).move_to([origin[0], 0.55, 0])
        verbs.arrange(UP, buff=0.32).move_to([1.0, 0.55, 0])
        for column in (nouns, verbs):
            column.shift((-0.6 - column[0].get_center()[1]) * UP)
        bg = VGroup(*[RoundedRectangle(corner_radius=0.08, width=w.width + 0.3, height=w.height + 0.22, color=INK, fill_color=INK, fill_opacity=1, stroke_width=0).move_to(w) for w in (*nouns, *verbs)])
        self.add(bg)
        self.play(LaggedStart(*[FadeIn(w, shift=0.15 * DOWN) for w in nouns], lag_ratio=0.15), run_time=1.2)
        self.play(LaggedStart(*[FadeIn(w, shift=0.15 * DOWN) for w in verbs], lag_ratio=0.15), run_time=1.2)
        self.play(Indicate(nouns[0], color=CYAN), Indicate(verbs[0], color=CYAN), run_time=0.9)
        quote = fit(txt(S["ja_quote"], 24, PAPER), 11.8).move_to([0.4, -1.85, 0])
        self.play(Write(quote), run_time=2)
        line_text, rhymes = S["ja_example"]
        example = Text(line_text, font=SERIF, font_size=36, color=PAPER, t2c={r: CORAL for r in rhymes})
        example.move_to([0.4, -1.75, 0])
        self.play(FadeOut(quote, shift=0.2 * UP), FadeIn(example, shift=0.2 * UP), run_time=0.9)
        rhyme = fit(txt(S["ja_rhyme"], 20, CORAL), 9).next_to(example, DOWN, buff=0.3)
        self.play(Indicate(example, color=CORAL, scale_factor=1.08), FadeIn(rhyme), run_time=1.2)
        self.source("ja_src")
        self.wait(2)


class SemioticSquare(TheoryScene):
    title_key = "sq_title"

    def construct(self):
        self.header()
        pos = {"s1": [-2.6, 1.0, 0], "s2": [2.6, 1.0, 0], "ns2": [-2.6, -1.75, 0], "ns1": [2.6, -1.75, 0]}
        colours = {"s1": JADE, "s2": CORAL, "ns2": VIOLET, "ns1": BRASS}
        nodes = {}
        for key, p in pos.items():
            label = txt(S[key], 34, colours[key], weight="BOLD").move_to(p)
            ring = RoundedRectangle(corner_radius=0.3, width=label.width + 0.7, height=label.height + 0.5, color=colours[key], stroke_width=2).move_to(p)
            nodes[key] = VGroup(ring, label)
        self.play(GrowFromCenter(nodes["s1"]), GrowFromCenter(nodes["s2"]), run_time=0.8)
        top = DashedLine(nodes["s1"].get_right(), nodes["s2"].get_left(), color=PAPER, dash_length=0.12)
        top_l = txt(S["contrary"], 20, PAPER).next_to(top, UP, buff=0.12)
        self.play(Create(top), FadeIn(top_l), run_time=0.8)
        self.play(GrowFromCenter(nodes["ns2"]), GrowFromCenter(nodes["ns1"]), run_time=0.8)
        d1 = Line(nodes["s1"].get_bottom() + 0.1 * RIGHT, nodes["ns1"].get_top() + 0.1 * LEFT, color=CORAL, stroke_width=3)
        d2 = Line(nodes["s2"].get_bottom() + 0.1 * LEFT, nodes["ns2"].get_top() + 0.1 * RIGHT, color=CORAL, stroke_width=3)
        d_l = txt(S["contradiction"], 20, CORAL).move_to([0, -0.42, 0])
        d_bg = RoundedRectangle(corner_radius=0.08, width=d_l.width + 0.3, height=d_l.height + 0.2, fill_color=INK, fill_opacity=1, stroke_width=0).move_to(d_l)
        self.play(Create(d1), Create(d2), run_time=1)
        self.play(FadeIn(d_bg), FadeIn(d_l), run_time=0.5)
        bottom = DashedLine(nodes["ns2"].get_right(), nodes["ns1"].get_left(), color=MUTED, dash_length=0.08)
        self.play(Create(bottom), run_time=0.6)
        imp1 = Arrow(nodes["ns2"].get_top(), nodes["s1"].get_bottom(), color=JADE, buff=0.05, stroke_width=3)
        imp2 = Arrow(nodes["ns1"].get_top(), nodes["s2"].get_bottom(), color=JADE, buff=0.05, stroke_width=3)
        imp_l = txt(S["implication"], 18, JADE).next_to(imp1, LEFT, buff=0.12)
        self.play(GrowFromCenter(imp1), GrowFromCenter(imp2), FadeIn(imp_l), run_time=0.9)
        c2 = fit(txt(S["ns2_case"], 20, VIOLET), 3.2).next_to(nodes["ns2"], DOWN, buff=0.14)
        c1 = fit(txt(S["ns1_case"], 20, BRASS), 3.2).next_to(nodes["ns1"], DOWN, buff=0.14)
        self.play(FadeIn(c2, shift=0.1 * UP), FadeIn(c1, shift=0.1 * UP), run_time=0.8)
        tour = VMobject(color=CYAN, stroke_width=4).set_points_as_corners([pos["s1"], pos["ns1"], pos["s2"], pos["ns2"], pos["s1"]])
        traveller = Dot(pos["s1"], color=CYAN, radius=0.1)
        note = fit(txt(S["sq_note"], 22, CYAN), 6).to_edge(RIGHT, buff=0.4).shift(2.55 * UP)
        self.play(FadeIn(traveller), Write(note), run_time=0.8)
        self.play(MoveAlongPath(traveller, tour), run_time=3, rate_func=smooth)
        self.play(FadeOut(traveller), run_time=0.4)
        self.source("sq_src")
        self.wait(2)


class SignifierChain(TheoryScene):
    title_key = "sc_title"

    def construct(self):
        self.header()
        oval = Ellipse(width=3.2, height=2.2, color=BRASS, stroke_width=3).move_to([-4.2, 0.2, 0])
        bar = Line(oval.get_left() + 0.2 * RIGHT, oval.get_right() + 0.2 * LEFT, color=BRASS)
        sig = txt(S["signifier"], 24, CYAN).move_to(oval.get_center() + 0.5 * UP)
        sigd = txt(S["signified"], 24, VIOLET).move_to(oval.get_center() + 0.5 * DOWN)
        self.play(Create(oval), Create(bar), FadeIn(sig), FadeIn(sigd), run_time=1.2)
        words = S["chain"]
        boxes = VGroup()
        for i, w in enumerate(words):
            label = fit(txt(w, 24, PAPER if i == 0 else MUTED), 2.6)
            box = RoundedRectangle(corner_radius=0.12, width=max(label.width + 0.4, 1.4), height=0.75, color=CYAN if i % 2 == 0 else VIOLET, stroke_width=2)
            boxes.add(VGroup(box, label))
        boxes.arrange(RIGHT, buff=0.55).move_to([2.6, -1.7, 0]).align_to([-6.2, 0, 0], LEFT)
        arrows = VGroup(*[Arrow(boxes[i].get_right(), boxes[i + 1].get_left(), buff=0.05, color=MUTED, stroke_width=2, max_tip_length_to_length_ratio=0.25) for i in range(len(boxes) - 1)])
        self.play(FadeIn(boxes[0], shift=0.2 * UP), run_time=0.6)
        for i in range(1, 4):
            self.play(GrowFromCenter(arrows[i - 1]), FadeIn(boxes[i], shift=0.2 * LEFT), run_time=0.55)
        chain = VGroup(boxes, arrows)
        presence = Dot([6.2, -0.55, 0], color=BRASS, radius=0.12)
        halo = Circle(radius=0.3, color=BRASS, stroke_width=2).move_to(presence)
        self.play(FadeIn(presence), Create(halo), run_time=0.5)
        self.play(chain.animate.shift(4.2 * LEFT), FadeIn(arrows[3:]), FadeIn(boxes[4:]), presence.animate.shift(0.4 * RIGHT), halo.animate.shift(0.4 * RIGHT), run_time=2.6, rate_func=smooth)
        differ = txt(S["differ"], 26, CYAN).move_to([1.4, 1.35, 0])
        defer = txt(S["defer"], 26, VIOLET).next_to(differ, DOWN, buff=0.28)
        self.play(Write(differ), run_time=0.8)
        self.play(Write(defer), run_time=0.8)
        note = fit(txt(S["sc_note"], 22, PAPER), 11).move_to([0, -2.95, 0])
        self.play(FadeIn(note, shift=0.1 * UP), presence.animate.set_opacity(0.3), halo.animate.scale(1.6).set_opacity(0.2), run_time=1.2)
        self.source("sc_src")
        self.wait(2)


class HermeneuticCircle(TheoryScene):
    title_key = "hc_title"

    def construct(self):
        self.header()
        centre = [-3.4, -0.3, 0]
        ring = Circle(radius=1.6, color=BRASS, stroke_width=2).move_to(centre)
        part = txt(S["part"], 28, CYAN).move_to(ring.point_at_angle(3.4))
        whole = txt(S["whole"], 28, VIOLET).move_to(ring.point_at_angle(0.2))
        a1 = CurvedArrow(ring.point_at_angle(2.6), ring.point_at_angle(0.9), angle=-1.4, color=CYAN)
        a2 = CurvedArrow(ring.point_at_angle(-0.5), ring.point_at_angle(-2.4), angle=-1.4, color=VIOLET)
        self.play(Create(ring), FadeIn(part), FadeIn(whole), run_time=1)
        self.play(Create(a1), Create(a2), run_time=1.2)
        cap = fit(txt(S["hc_circle"], 20, PAPER), 6.0).next_to(ring, DOWN, buff=0.45)
        self.play(FadeIn(cap), run_time=0.7)
        dot = Dot(ring.point_at_angle(0), color=CORAL)
        self.play(MoveAlongPath(dot, ring), run_time=2, rate_func=smooth)
        t_h = Circle(radius=1.5, color=CYAN, stroke_width=3, fill_color=CYAN, fill_opacity=0.08).move_to([1.5, 0.1, 0])
        r_h = Circle(radius=1.5, color=VIOLET, stroke_width=3, fill_color=VIOLET, fill_opacity=0.08).move_to([5.2, 0.1, 0])
        t_l = fit(txt(S["text_h"], 22, CYAN), 2.8).next_to(t_h, UP, buff=0.15)
        r_l = fit(txt(S["reader_h"], 22, VIOLET), 2.8).next_to(r_h, UP, buff=0.15)
        self.play(Create(t_h), Create(r_h), FadeIn(t_l), FadeIn(r_l), run_time=1)
        expect = fit(txt(S["expect"], 18, MUTED), 3.4).next_to(r_h, DOWN, buff=0.18)
        self.play(FadeIn(expect), run_time=0.6)
        self.play(t_h.animate.shift(1.2 * RIGHT), t_l.animate.shift(0.6 * RIGHT + 0.0 * UP), r_h.animate.shift(1.0 * LEFT), r_l.animate.shift(0.6 * RIGHT), expect.animate.shift(1.0 * LEFT), run_time=1.8, rate_func=smooth)
        fusion = fit(txt(S["fusion"], 22, BRASS, weight="BOLD"), 4.6).move_to([3.5, -2.35, 0])
        glow = Circle(radius=0.55, color=BRASS, stroke_width=2).move_to([3.45, 0.1, 0])
        self.play(GrowFromCenter(glow), Write(fusion), Flash(glow, color=BRASS), run_time=1.2)
        blanks = fit(txt(S["blanks"], 18, JADE), 6).next_to(cap, DOWN, buff=0.2)
        self.play(FadeIn(blanks), run_time=0.6)
        self.source("hc_src")
        self.wait(2)


class ThreeHorizons(TheoryScene):
    title_key = "th_title"

    def construct(self):
        self.header()
        centre = [-3.2, -0.55, 0]
        book = VGroup(
            Rectangle(width=0.7, height=0.9, color=PAPER, stroke_width=2),
            *[Line([-0.22, y, 0], [0.22, y, 0], color=MUTED, stroke_width=1) for y in (0.22, 0.08, -0.06, -0.2)],
        ).move_to(centre)
        label = txt(S["th_text"], 18, PAPER).next_to(book, DOWN, buff=0.08)
        self.play(FadeIn(book), FadeIn(label), run_time=0.7)
        rings = [
            (1.05, CYAN, "h1"),
            (1.75, VIOLET, "h2"),
            (2.45, BRASS, "h3"),
        ]
        anchors_y = [1.15, 0.0, -1.15]
        for (radius, colour, key), y in zip(rings, anchors_y):
            ring = Annulus(inner_radius=radius - 0.04, outer_radius=radius, color=colour, fill_opacity=0.9).move_to(centre)
            text = fit(txt(S[key], 22, colour), 6.0).move_to([2.9, y, 0]).align_to([0.2, 0, 0], LEFT)
            anchor = ring.get_center() + radius * (UP * (y + 0.55) / 2.6 + RIGHT * 0.9)
            anchor = centre + (anchor - centre) / ((anchor - centre) ** 2).sum() ** 0.5 * radius
            leader = Line(anchor, text.get_left() + 0.1 * LEFT, color=colour, stroke_width=1.5)
            self.play(GrowFromCenter(ring), run_time=0.8)
            self.play(Create(leader), FadeIn(text, shift=0.2 * RIGHT), run_time=0.8)
        quote = txt(S["th_quote"], 32, PAPER, weight="BOLD").move_to([3.6, -2.45, 0])
        self.play(Write(quote), run_time=1)
        self.play(Indicate(quote, color=BRASS), run_time=0.8)
        self.source("th_src")
        self.wait(2)


class DistantReading(TheoryScene):
    title_key = "dr_title"

    def construct(self):
        self.header()
        rng = random.Random(7)
        page = Rectangle(width=2.6, height=3.4, color=PAPER, stroke_width=2).move_to([-3.6, -0.8, 0])
        lines = VGroup(*[Line([-1.05, 0, 0], [-1.05 + rng.uniform(1.4, 2.1), 0, 0], color=MUTED, stroke_width=2).shift((1.2 - i * 0.24) * UP) for i in range(11)]).move_to(page)
        highlight = Line(lines[4].get_left(), lines[4].get_left() + 1.0 * RIGHT, color=CORAL, stroke_width=6, stroke_opacity=0.8)
        close = fit(txt(S["close"], 22, CYAN), 6.2).next_to(page, RIGHT, buff=0.5).shift(0.9 * UP)
        self.play(Create(page), LaggedStart(*[Create(l) for l in lines], lag_ratio=0.05), run_time=1.4)
        lens = Circle(radius=0.55, color=CYAN, stroke_width=3).move_to(lines[4].get_left() + 0.5 * RIGHT)
        handle = Line(lens.point_at_angle(-0.8), lens.point_at_angle(-0.8) + 0.6 * (RIGHT + DOWN), color=CYAN, stroke_width=5)
        self.play(Create(highlight), GrowFromCenter(lens), Create(handle), FadeIn(close), run_time=1.1)
        self.wait(0.5)
        everything = VGroup(page, lines, highlight, lens, handle)
        self.play(everything.animate.scale(0.06).move_to([-5.6, 1.4, 0]), FadeOut(close), run_time=1.4)
        grid = VGroup()
        for row in range(14):
            for col in range(36):
                tone = rng.random()
                colour = CYAN if tone > 0.66 else (VIOLET if tone > 0.33 else BRASS)
                grid.add(Rectangle(width=0.18, height=0.14, stroke_width=0, fill_color=colour, fill_opacity=0.55).move_to([-5.4 + col * 0.3, 1.4 - row * 0.27, 0]))
        self.play(LaggedStart(*[FadeIn(r) for r in grid], lag_ratio=0.002), run_time=1.8)
        distant = fit(txt(S["distant"], 22, BRASS), 9).move_to([0, 2.05, 0]).align_to([-5.6, 0, 0], LEFT)
        distant.next_to(grid, UP, buff=0.12).align_to(grid, LEFT)
        self.play(FadeIn(distant), FadeOut(everything), run_time=0.7)
        x_axis = Arrow([-5.2, -2.4, 0], [5.4, -2.4, 0], buff=0, color=MUTED, stroke_width=2, max_tip_length_to_length_ratio=0.02)
        y_axis = Arrow([-5.2, -2.4, 0], [-5.2, 1.6, 0], buff=0, color=MUTED, stroke_width=2, max_tip_length_to_length_ratio=0.04)
        xl = txt(S["year"], 18, MUTED).next_to(x_axis, DOWN, buff=0.08).align_to(x_axis, RIGHT)
        yl = fit(txt(S["feature"], 18, MUTED), 4).next_to(y_axis.get_end(), RIGHT, buff=0.15)
        targets = []
        for i, rect in enumerate(grid):
            x = -5.0 + (i / len(grid)) * 10.0 + rng.uniform(-0.12, 0.12)
            trend = -1.9 + 2.6 * max(0.0, (x + 5) / 10) ** 1.4
            y = trend + rng.gauss(0, 0.35)
            targets.append(Dot([x, max(-2.3, min(1.5, y)), 0], radius=0.035, color=rect.get_fill_color(), fill_opacity=0.8))
        dots = VGroup(*targets)
        self.play(Create(x_axis), Create(y_axis), FadeIn(xl), FadeIn(yl), FadeOut(distant), ReplacementTransform(grid, dots), run_time=2.4)
        trend_curve = VMobject(color=CORAL, stroke_width=4).set_points_smoothly([[x, -1.9 + 2.6 * ((x + 5) / 10) ** 1.4, 0] for x in [-5 + i * 0.5 for i in range(21)]])
        self.play(Create(trend_curve), run_time=1.4)
        note = fit(txt(S["dr_note"], 20, PAPER), 9).move_to([0.6, -2.95, 0])
        self.play(FadeIn(note), run_time=0.6)
        self.source("dr_src")
        self.wait(2)


class SlowViolence(TheoryScene):
    title_key = "sv_title"

    def construct(self):
        self.header()
        base = -2.2
        axis = Arrow([-5.8, base, 0], [5.8, base, 0], buff=0, color=MUTED, stroke_width=2, max_tip_length_to_length_ratio=0.02)
        tl = txt(S["time"], 20, MUTED).next_to(axis, DOWN, buff=0.08).align_to(axis, RIGHT)
        threshold = DashedLine([-5.8, 0.15, 0], [5.8, 0.15, 0], color=CYAN, dash_length=0.12, stroke_width=2)
        thl = fit(txt(S["visibility"], 18, CYAN), 4.6).next_to(threshold, UP, buff=0.08).align_to(threshold, RIGHT)
        self.play(Create(axis), FadeIn(tl), run_time=0.8)
        self.play(Create(threshold), FadeIn(thl), run_time=0.8)
        spike = VMobject(color=CORAL, stroke_width=4).set_points_as_corners([[-4.6, base, 0], [-4.2, base, 0], [-4.0, 1.7, 0], [-3.8, base, 0], [-3.4, base, 0]])
        spike_l = fit(txt(S["spectacle"], 20, CORAL), 4).move_to([-3.4, 2.1, 0])
        self.play(Create(spike), run_time=0.7)
        self.play(Flash([-4.0, 1.7, 0], color=CORAL, num_lines=16), FadeIn(spike_l), run_time=0.8)
        slow_pts = [[x, base + 0.05 + 2.1 * ((x + 3.4) / 9.2) ** 2.2, 0] for x in [-3.4 + i * 0.23 for i in range(41)]]
        slow = VMobject(color=JADE, stroke_width=5).set_points_smoothly(slow_pts)
        area = VMobject(fill_color=JADE, fill_opacity=0.18, stroke_width=0).set_points_as_corners(slow_pts + [[5.8, base, 0], [-3.4, base, 0]])
        self.play(Create(slow), FadeIn(area), run_time=3.4, rate_func=rate_functions.linear)
        slow_l = fit(txt(S["slow"], 20, JADE), 4.6).move_to([-0.2, -0.75, 0])
        self.play(FadeIn(slow_l, shift=0.1 * UP), run_time=0.6)
        quote = fit(txt(S["sv_quote"], 24, PAPER), 6.4).move_to([2.6, 1.3, 0])
        self.play(Write(quote), run_time=1.2)
        task = fit(txt(S["sv_task"], 20, BRASS), 11).move_to([0, -2.85, 0])
        self.play(threshold.animate.shift(2.2 * DOWN).set_color(BRASS), thl.animate.shift(2.2 * DOWN).set_color(BRASS), FadeIn(task), run_time=1.4)
        self.source("sv_src")
        self.wait(2)


class DreamWork(TheoryScene):
    title_key = "dw_title"

    def construct(self):
        self.header()
        left_x, right_x = -3.6, 3.4
        lt = txt(S["latent"], 24, VIOLET).move_to([left_x, 1.45, 0])
        rt = txt(S["manifest"], 24, CYAN).move_to([right_x, 1.45, 0])
        self.play(FadeIn(lt), FadeIn(rt), run_time=0.7)
        colours = [CORAL, BRASS, JADE]
        elems = VGroup()
        for i, (word, colour) in enumerate(zip(S["elements"], colours)):
            dot = Circle(radius=0.36, color=colour, fill_color=colour, fill_opacity=0.35).move_to([left_x - 1.2 + i * 1.2, 0.2 - (i % 2) * 0.7, 0])
            label = fit(txt(word, 18, colour), 1.6).next_to(dot, DOWN, buff=0.1)
            elems.add(VGroup(dot, label))
        self.play(LaggedStart(*[GrowFromCenter(e) for e in elems], lag_ratio=0.2), run_time=1.2)
        composite = VGroup(*[Circle(radius=0.5, color=c, stroke_width=4).move_to([right_x + dx, 0.0, 0]) for c, dx in zip(colours, (-0.22, 0, 0.22))])
        arrow = Arrow([left_x + 2.0, -0.1, 0], [right_x - 1.1, -0.1, 0], color=MUTED, stroke_width=2)
        cond = fit(txt(S["condensation"], 20, PAPER), 7.4).move_to([0.6, -1.5, 0])
        self.play(GrowFromCenter(arrow), run_time=0.5)
        self.play(*[ReplacementTransform(e[0].copy(), c) for e, c in zip(elems, composite)], FadeIn(cond), run_time=1.6)
        detail = Dot([right_x + 1.25, -0.6, 0], radius=0.07, color=PAPER)
        detail_l = txt(S["detail"], 16, MUTED).next_to(detail, DOWN, buff=0.08)
        self.play(FadeIn(detail), FadeIn(detail_l), run_time=0.5)
        glow = Circle(radius=0.8, color=BRASS, stroke_width=3).move_to(composite)
        self.play(Create(glow), run_time=0.5)
        disp = fit(txt(S["displacement"], 20, PAPER), 7.4).move_to([0.6, -2.0, 0])
        self.play(glow.animate.scale(0.32).move_to(detail), detail.animate.set_color(BRASS).scale(1.8), composite.animate.set_stroke(opacity=0.45), FadeIn(disp), run_time=1.6)
        lacan = fit(txt(S["dw_lacan"], 22, BRASS), 10).move_to([0.6, -2.65, 0])
        self.play(Write(lacan), run_time=1.1)
        self.source("dw_src")
        self.wait(2)
