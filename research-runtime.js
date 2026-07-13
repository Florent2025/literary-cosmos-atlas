(() => {
  const DATA_URL = "./data/research-atlas.json";
  const CHUNK_SIZE = 56;
  let atlasPromise = null;
  let historyNavigation = false;

  const copy = {
    zh: {
      loading: "正在展开研究档案…", source: "来源版本", all: "完整章节", figures: "图表", tables: "表格片段", cases: "案例",
      search: "在本章中检索", loadMore: "继续展开", noResults: "没有匹配的资料块", toc: "章节导航", original: "中文原典",
      fullCorpus: "完整资料库", allDocuments: "全书", blocks: "资料块", questions: "测试题", documents: "来源文档",
      classics: "经典理论", foundations: "方法与范式", frontiers: "主题前沿", regions: "区域星图", synthesis: "综合与展望",
      archiveCount: "显示 {visible} / {total} 本", readerNotice: "以下内容来自用户提供的研究原典，保留原始中文表述与图表结构。"
    },
    en: {
      loading: "Opening the research archive…", source: "Source edition", all: "Full chapter", figures: "Figures", tables: "Table fragments", cases: "Cases",
      search: "Search this chapter", loadMore: "Reveal more", noResults: "No matching research blocks", toc: "Chapter map", original: "Chinese primary text",
      fullCorpus: "Complete research corpus", allDocuments: "Whole document", blocks: "blocks", questions: "questions", documents: "source documents",
      classics: "Classic Theory", foundations: "Methods & Paradigms", frontiers: "Thematic Frontiers", regions: "Regional Constellations", synthesis: "Synthesis & Horizons",
      archiveCount: "Showing {visible} of {total}", readerNotice: "The source archive remains in its original Chinese, preserving its tables and figure structure."
    },
    fr: {
      loading: "Ouverture des archives…", source: "Édition source", all: "Chapitre intégral", figures: "Figures", tables: "Fragments de tableaux", cases: "Cas",
      search: "Rechercher dans ce chapitre", loadMore: "Déployer la suite", noResults: "Aucun bloc correspondant", toc: "Carte du chapitre", original: "Texte source chinois",
      fullCorpus: "Corpus de recherche complet", allDocuments: "Document entier", blocks: "blocs", questions: "questions", documents: "documents sources",
      classics: "Théories classiques", foundations: "Méthodes et paradigmes", frontiers: "Frontières thématiques", regions: "Constellations régionales", synthesis: "Synthèse et horizons",
      archiveCount: "{visible} sur {total} volumes", readerNotice: "Les sources restent en chinois afin de préserver les tableaux et la structure des figures."
    }
  };

  const lang = () => (typeof state !== "undefined" && state.language) || "zh";
  const tx = (key) => copy[lang()]?.[key] || copy.zh[key] || key;
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  const format = (template, values) => String(template).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
  const blockText = (block) => block.text || (block.rows ? block.rows.flat().join(" ") : "");

  function loadAtlas() {
    if (!atlasPromise) {
      atlasPromise = fetch(DATA_URL, { cache: "force-cache" }).then((response) => {
        if (!response.ok) throw new Error(`Research archive HTTP ${response.status}`);
        return response.json();
      });
    }
    return atlasPromise;
  }

  function buildQuiz(movement) {
    if (!movement?.sourceChapter) return null;
    const source = window.LITERARY_QUIZ_BANK?.[movement.id];
    return source?.map((question) => ({ ...question, options: [...question.options] })) || null;
  }

  function modeMatches(block, mode) {
    if (mode === "all") return true;
    if (mode === "figures") return ["image", "figure"].includes(block.type);
    if (mode === "tables") return block.type === "table";
    if (mode === "cases") return /案例|case|课题|项目|实证/i.test(blockText(block));
    return true;
  }

  function filteredBlocks(blocks, mode, query) {
    const needle = query.trim().toLocaleLowerCase();
    return blocks.filter((block) => {
      if (!modeMatches(block, mode)) return false;
      return !needle || blockText(block).toLocaleLowerCase().includes(needle);
    });
  }

  function renderBlocks(blocks) {
    const output = [];
    let listType = null;
    const closeList = () => {
      if (!listType) return;
      output.push(`</${listType}>`);
      listType = null;
    };

    blocks.forEach((block, index) => {
      if (block.type === "list-item") {
        const nextType = block.ordered ? "ol" : "ul";
        if (listType !== nextType) {
          closeList();
          listType = nextType;
          output.push(`<${listType} class="source-list">`);
        }
        output.push(`<li>${escapeHtml(block.text)}</li>`);
        return;
      }
      closeList();
      if (block.type === "heading") {
        const level = Math.min(6, Math.max(3, Number(block.level || 3) + 2));
        output.push(`<h${level} class="source-heading source-heading--${block.level || 3}" id="source-heading-${index}">${escapeHtml(block.text)}</h${level}>`);
      } else if (block.type === "paragraph") {
        const reference = block.style === "Reference" ? " source-paragraph--reference" : "";
        output.push(`<p class="source-paragraph${reference}">${escapeHtml(block.text)}</p>`);
      } else if (block.type === "image") {
        output.push(`<figure class="source-image"><img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt)}" loading="lazy"><figcaption>${escapeHtml(block.alt)}</figcaption></figure>`);
      } else if (block.type === "figure") {
        output.push(`<div class="source-figure" data-source-figure>${block.html}</div>`);
      } else if (block.type === "table") {
        const rows = block.rows || [];
        output.push(`
          <div class="source-table-wrap" tabindex="0" aria-label="研究资料表格">
            <table class="source-table">
              ${rows.map((row, rowIndex) => `<tr>${row.map((cell) => `<${rowIndex === 0 ? "th" : "td"}>${escapeHtml(cell)}</${rowIndex === 0 ? "th" : "td"}>`).join("")}</tr>`).join("")}
            </table>
          </div>
        `);
      }
    });
    closeList();
    return output.join("");
  }

  function sourceForChapter(atlas, chapterId, sourceId) {
    const chapter = atlas.chapterIndex.find((item) => item.id === chapterId);
    const range = chapter?.sources.find((item) => item.source === sourceId);
    const source = atlas.sources.find((item) => item.id === sourceId);
    if (!source || !range) return { source, blocks: [] };
    return { source, blocks: source.blocks.slice(range.start, range.end) };
  }

  function readerTabs(sources, activeId) {
    return sources.map((source) => `
      <button type="button" class="research-source-tab${source.id === activeId ? " is-active" : ""}" data-reader-source="${source.id}" aria-pressed="${source.id === activeId}">
        <span>${escapeHtml(source.kind)}</span><strong>${escapeHtml(source.title)}</strong>
      </button>
    `).join("");
  }

  function mountChapterReader(shell, movement, atlas) {
    const chapter = atlas.chapterIndex.find((item) => item.id === movement.id);
    if (!chapter) {
      shell.remove();
      return;
    }
    const availableSources = chapter.sources.map((range) => atlas.sources.find((source) => source.id === range.source)).filter(Boolean);
    const view = { sourceId: availableSources[0]?.id, mode: "all", query: "", limit: CHUNK_SIZE };

    shell.innerHTML = `
      <div class="research-reader__head">
        <div>
          <span class="research-reader__eyebrow">RESEARCH DOSSIER · ${escapeHtml(movement.sourceChapter)}</span>
          <h3>${tx("fullCorpus")}</h3>
          <p>${tx("readerNotice")}</p>
        </div>
        <div class="research-reader__metrics">
          <span><strong>${movement.sourceStats?.docxBlocks || 0}</strong>${tx("blocks")}</span>
          <span><strong>${window.LITERARY_QUIZ_BANK?.[movement.id]?.length || 0}</strong>${tx("questions")}</span>
        </div>
      </div>
      <div class="research-source-tabs" role="group" aria-label="${tx("source")}">${readerTabs(availableSources, view.sourceId)}</div>
      <div class="research-reader__toolbar">
        <div class="research-mode-tabs" role="group">
          ${["all", "figures", "tables", "cases"].map((mode) => `<button type="button" data-reader-mode="${mode}" class="${mode === "all" ? "is-active" : ""}" aria-pressed="${mode === "all"}">${tx(mode)}</button>`).join("")}
        </div>
        <label class="research-search"><span>${tx("search")}</span><input type="search" data-reader-search autocomplete="off"></label>
      </div>
      <div class="research-reader__layout">
        <nav class="research-reader__toc" data-reader-toc aria-label="${tx("toc")}"></nav>
        <div class="research-reader__document" data-reader-document></div>
      </div>
    `;

    const render = () => {
      const { source, blocks } = sourceForChapter(atlas, movement.id, view.sourceId);
      const matches = filteredBlocks(blocks, view.mode, view.query);
      const visible = matches.slice(0, view.limit);
      const documentRoot = shell.querySelector("[data-reader-document]");
      const headingBlocks = blocks.filter((block) => block.type === "heading" && Number(block.level) <= 3);
      shell.querySelector("[data-reader-toc]").innerHTML = `
        <strong>${tx("toc")}</strong>
        ${headingBlocks.slice(0, 18).map((heading) => `<button type="button" data-toc-text="${escapeHtml(heading.text)}">${escapeHtml(heading.text.replace(/^\d+(?:\.\d+)*\s*/, ""))}</button>`).join("")}
      `;
      documentRoot.innerHTML = matches.length ? `
        <header class="source-document-title"><span>${tx("original")}</span><strong>${escapeHtml(source?.title || "")}</strong><em>${matches.length} ${tx("blocks")}</em></header>
        <div class="source-blocks">${renderBlocks(visible)}</div>
        ${matches.length > visible.length ? `<button type="button" class="research-load-more" data-reader-more>${tx("loadMore")} <span>${visible.length}/${matches.length}</span></button>` : ""}
      ` : `<p class="research-empty">${tx("noResults")}</p>`;
      shell.querySelectorAll("[data-toc-text]").forEach((button) => button.addEventListener("click", () => {
        const target = Array.from(documentRoot.querySelectorAll(".source-heading")).find((heading) => heading.textContent === button.dataset.tocText);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }));
      shell.querySelector("[data-reader-more]")?.addEventListener("click", () => {
        view.limit += CHUNK_SIZE;
        render();
      });
    };

    shell.querySelectorAll("[data-reader-source]").forEach((button) => button.addEventListener("click", () => {
      view.sourceId = button.dataset.readerSource;
      view.limit = CHUNK_SIZE;
      shell.querySelectorAll("[data-reader-source]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      render();
    }));
    shell.querySelectorAll("[data-reader-mode]").forEach((button) => button.addEventListener("click", () => {
      view.mode = button.dataset.readerMode;
      view.limit = CHUNK_SIZE;
      shell.querySelectorAll("[data-reader-mode]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      render();
    }));
    shell.querySelector("[data-reader-search]").addEventListener("input", (event) => {
      view.query = event.target.value;
      view.limit = CHUNK_SIZE;
      render();
    });
    render();
  }

  async function enhanceWorld(content, movement) {
    onWorldOpen(movement.id);
    const shell = content.querySelector("[data-research-reader]");
    if (!shell) return;
    shell.innerHTML = `<div class="research-loading"><span></span><p>${tx("loading")}</p></div>`;
    try {
      const atlas = await loadAtlas();
      if (!shell.isConnected || state.currentWorldId !== movement.id) return;
      mountChapterReader(shell, movement, atlas);
    } catch (error) {
      shell.innerHTML = `<p class="research-empty">${escapeHtml(error.message)}</p>`;
    }
  }

  function collectionName(key) {
    return tx(key);
  }

  function initCollectionNav() {
    const root = document.querySelector("#collectionNav");
    if (!root) return;
    const collections = ["classics", "foundations", "frontiers", "regions", "synthesis"];
    const render = () => {
      root.innerHTML = collections.map((key) => {
        const count = MOVEMENTS.filter((movement) => movement.collection === key).length;
        return `<button type="button" data-jump-collection="${key}"><span>${collectionName(key)}</span><strong>${String(count).padStart(2, "0")}</strong></button>`;
      }).join("");
      root.querySelectorAll("[data-jump-collection]").forEach((button) => button.addEventListener("click", () => {
        const index = MOVEMENTS.findIndex((movement) => movement.collection === button.dataset.jumpCollection);
        if (index < 0) return;
        const rail = document.querySelector("#bookRail");
        const book = document.querySelectorAll("#bookTrack .book")[index];
        if (window.matchMedia("(max-width: 720px)").matches) {
          book?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        } else if (window.ScrollTrigger) {
          const trigger = ScrollTrigger.getAll().find((item) => item.trigger?.classList?.contains("library"));
          if (trigger) window.scrollTo({ top: trigger.start + (trigger.end - trigger.start) * (index / Math.max(1, MOVEMENTS.length - 1)), behavior: "smooth" });
        } else {
          rail?.scrollTo({ left: book?.offsetLeft || 0, behavior: "smooth" });
        }
        setActiveBook(index);
      }));
    };
    render();
    document.addEventListener("literary-language-change", render);
  }

  function initArchiveFilters() {
    const grid = document.querySelector("#archiveGrid");
    const filters = document.querySelector("#archiveFilters");
    const search = document.querySelector("#archiveSearch");
    const count = document.querySelector("#archiveResultCount");
    if (!grid || !filters || !search || !count) return;
    const view = { collection: "all", query: "" };
    const keys = ["all", "classics", "foundations", "frontiers", "regions", "synthesis"];

    const renderButtons = () => {
      filters.innerHTML = keys.map((key) => `<button type="button" data-archive-filter="${key}" class="${key === view.collection ? "is-active" : ""}" aria-pressed="${key === view.collection}">${key === "all" ? tx("allDocuments") : collectionName(key)}</button>`).join("");
      filters.querySelectorAll("[data-archive-filter]").forEach((button) => button.addEventListener("click", () => {
        view.collection = button.dataset.archiveFilter;
        renderButtons();
        apply();
      }));
    };
    const apply = () => {
      const query = view.query.trim().toLocaleLowerCase();
      let visible = 0;
      grid.querySelectorAll(".archive-card").forEach((card) => {
        const collectionMatch = view.collection === "all" || card.dataset.collection === view.collection;
        const textMatch = !query || `${card.dataset.search || ""} ${card.textContent}`.toLocaleLowerCase().includes(query);
        const show = collectionMatch && textMatch;
        card.hidden = !show;
        if (show) visible += 1;
      });
      count.textContent = format(tx("archiveCount"), { visible, total: MOVEMENTS.length });
    };
    renderButtons();
    search.addEventListener("input", (event) => {
      view.query = event.target.value;
      apply();
    });
    new MutationObserver(apply).observe(grid, { childList: true });
    apply();
  }

  function initMobileAtlas() {
    const root = document.querySelector("#atlasMobileList");
    if (!root) return;
    const render = () => {
      const groups = ["classics", "foundations", "frontiers", "regions", "synthesis"];
      root.innerHTML = groups.map((key) => `
        <details ${key === "frontiers" ? "open" : ""}>
          <summary><span>${collectionName(key)}</span><strong>${MOVEMENTS.filter((movement) => movement.collection === key).length}</strong></summary>
          <div>${MOVEMENTS.filter((movement) => movement.collection === key).map((movement) => {
            const local = localizedMovement(movement);
            return `<button type="button" data-open="${movement.id}"><span>${escapeHtml(local.title)}</span><em>${escapeHtml(local.lens)}</em></button>`;
          }).join("")}</div>
        </details>
      `).join("");
    };
    render();
    document.addEventListener("literary-language-change", render);
  }

  function sourceSlice(atlas, sourceId, chapterId) {
    const source = atlas.sources.find((item) => item.id === sourceId);
    if (!source) return { source: null, blocks: [] };
    if (!chapterId) return { source, blocks: source.blocks };
    return { source, blocks: source.blocks.filter((block) => block.chapter === chapterId) };
  }

  function mountSourceExplorer(root, atlas) {
    const view = { sourceId: atlas.sources[0].id, chapterId: "", mode: "all", query: "", limit: CHUNK_SIZE };
    root.innerHTML = `
      <div class="source-explorer__controls">
        <div class="source-explorer__documents" data-explorer-documents></div>
        <label><span>${tx("toc")}</span><select data-explorer-chapter></select></label>
        <label><span>${tx("search")}</span><input type="search" data-explorer-search autocomplete="off"></label>
        <div class="research-mode-tabs" data-explorer-modes>
          ${["all", "figures", "tables", "cases"].map((mode) => `<button type="button" data-explorer-mode="${mode}" class="${mode === "all" ? "is-active" : ""}">${tx(mode)}</button>`).join("")}
        </div>
      </div>
      <div class="source-explorer__document" data-explorer-document></div>
    `;

    const docRoot = root.querySelector("[data-explorer-documents]");
    const chapterSelect = root.querySelector("[data-explorer-chapter]");
    const documentRoot = root.querySelector("[data-explorer-document]");
    const renderDocuments = () => {
      docRoot.innerHTML = atlas.sources.map((source) => `<button type="button" data-explorer-source="${source.id}" class="${source.id === view.sourceId ? "is-active" : ""}"><span>${escapeHtml(source.kind)}</span><strong>${escapeHtml(source.title)}</strong></button>`).join("");
      docRoot.querySelectorAll("[data-explorer-source]").forEach((button) => button.addEventListener("click", () => {
        view.sourceId = button.dataset.explorerSource;
        view.chapterId = "";
        view.limit = CHUNK_SIZE;
        renderDocuments();
        renderChapters();
        renderDocument();
      }));
    };
    const renderChapters = () => {
      chapterSelect.innerHTML = `<option value="">${tx("allDocuments")}</option>${atlas.chapterIndex.filter((chapter) => chapter.sources.some((source) => source.source === view.sourceId)).map((chapter) => `<option value="${chapter.id}" ${chapter.id === view.chapterId ? "selected" : ""}>${escapeHtml(chapter.number)} · ${escapeHtml(chapter.title)}</option>`).join("")}`;
    };
    const renderDocument = () => {
      const { source, blocks } = sourceSlice(atlas, view.sourceId, view.chapterId);
      const matches = filteredBlocks(blocks, view.mode, view.query);
      const visible = matches.slice(0, view.limit);
      documentRoot.innerHTML = `
        <header><span>${escapeHtml(source?.kind || "")}</span><h3>${escapeHtml(source?.title || "")}</h3><p>${matches.length} ${tx("blocks")}</p></header>
        ${matches.length ? `<div class="source-blocks">${renderBlocks(visible)}</div>` : `<p class="research-empty">${tx("noResults")}</p>`}
        ${matches.length > visible.length ? `<button type="button" class="research-load-more" data-explorer-more>${tx("loadMore")} <span>${visible.length}/${matches.length}</span></button>` : ""}
      `;
      documentRoot.querySelector("[data-explorer-more]")?.addEventListener("click", () => {
        view.limit += CHUNK_SIZE;
        renderDocument();
      });
    };
    chapterSelect.addEventListener("change", () => {
      view.chapterId = chapterSelect.value;
      view.limit = CHUNK_SIZE;
      renderDocument();
    });
    root.querySelector("[data-explorer-search]").addEventListener("input", (event) => {
      view.query = event.target.value;
      view.limit = CHUNK_SIZE;
      renderDocument();
    });
    root.querySelectorAll("[data-explorer-mode]").forEach((button) => button.addEventListener("click", () => {
      view.mode = button.dataset.explorerMode;
      view.limit = CHUNK_SIZE;
      root.querySelectorAll("[data-explorer-mode]").forEach((item) => item.classList.toggle("is-active", item === button));
      renderDocument();
    }));
    renderDocuments();
    renderChapters();
    renderDocument();
  }

  async function initResearchLibrary() {
    const ledger = document.querySelector("#researchLedger");
    const explorer = document.querySelector("#sourceExplorer");
    if (!ledger || !explorer) return;
    ledger.innerHTML = `<div class="research-loading"><span></span><p>${tx("loading")}</p></div>`;
    explorer.innerHTML = `<div class="research-loading"><span></span><p>${tx("loading")}</p></div>`;
    try {
      const atlas = await loadAtlas();
      ledger.innerHTML = `
        <span><strong>${atlas.stats.documents}</strong>${tx("documents")}</span>
        <span><strong>${atlas.stats.blocks.toLocaleString()}</strong>${tx("blocks")}</span>
        <span><strong>${atlas.stats.tableFragments ?? atlas.stats.tables}</strong>${tx("tables")}</span>
        <span><strong>${atlas.stats.figures}</strong>${tx("figures")}</span>
        <span><strong>${atlas.stats.questions}</strong>${tx("questions")}</span>
        <p class="research-ledger__notice">${escapeHtml(atlas.sourceNotice || "")}</p>
      `;
      mountSourceExplorer(explorer, atlas);
    } catch (error) {
      explorer.innerHTML = `<p class="research-empty">${escapeHtml(error.message)}</p>`;
    }
  }

  function initNav() {
    const toggle = document.querySelector("#navToggle");
    if (!toggle) return;
    const close = () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = !document.body.classList.contains("nav-open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", close));
  }

  function onWorldOpen(id) {
    if (!historyNavigation && location.hash !== `#theory/${id}`) history.pushState({ theory: id }, "", `#theory/${id}`);
  }

  function onWorldClosed() {
    if (!historyNavigation && location.hash.startsWith("#theory/")) history.pushState({}, "", `${location.pathname}${location.search}#archive`);
  }

  function handleHistory() {
    const match = location.hash.match(/^#theory\/([^/?#]+)/);
    historyNavigation = true;
    if (match) {
      const id = decodeURIComponent(match[1]);
      if (MOVEMENTS.some((movement) => movement.id === id)) {
        const gate = document.querySelector("#libraryGate");
        if (gate) document.querySelector("#startButton")?.click();
        window.setTimeout(() => openWorld(id), gate ? 760 : 0);
      }
    } else if (state.worldOpen) {
      closeWorld();
    }
    window.setTimeout(() => { historyNavigation = false; }, 50);
  }

  window.ResearchAtlas = { load: loadAtlas, buildQuiz, enhanceWorld, onWorldOpen, onWorldClosed };
  window.addEventListener("popstate", handleHistory);

  document.addEventListener("DOMContentLoaded", () => {
    initCollectionNav();
    initArchiveFilters();
    initMobileAtlas();
    initResearchLibrary();
    initNav();
    window.setTimeout(handleHistory, 0);
  });
})();
