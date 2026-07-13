#!/usr/bin/env python3
"""Build the Literary Cosmos research corpus from the two editorial source files."""

from __future__ import annotations

import hashlib
import html
import json
import os
import re
import shutil
import sys
import urllib.parse
import urllib.request
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any, Iterable

from bs4 import BeautifulSoup
from docx import Document
from docx.document import Document as DocumentObject
from docx.oxml.ns import qn
from docx.oxml.table import CT_Tbl
from docx.oxml.text.paragraph import CT_P
from docx.table import Table
from docx.text.paragraph import Paragraph


ROOT = Path(__file__).resolve().parents[1]
DOCX_PATH = ROOT / "全球文学研究前沿_理论方法区域案例全景.docx"
HTML_PATH = ROOT / "全球文学研究前沿综述.dc (v5).html"
DATA_DIR = ROOT / "data"
RESEARCH_DIR = ROOT / "assets" / "research"
PORTRAIT_DIR = ROOT / "assets" / "portraits"


BOOKS: list[dict[str, Any]] = [
    {
        "id": "frontier-paradigm-shifts", "chapter": "1", "title": "范式转移", "titleEn": "Paradigm Shifts",
        "titleFr": "Mutations paradigmatiques", "era": "2020年代", "region": "全球", "lens": "证据组合体 · 分布式概念 · 可追责研究",
        "collection": "foundations", "palette": ["#d9edf2", "#4b8291", "#70e6ef"],
        "relations": ["frontier-methodology-map", "digital-humanities", "decolonial-global-south", "new-historicism"],
        "figures": [("Bruno Latour", "布鲁诺·拉图尔", "行动者网络与知识生产"), ("Donna Haraway", "唐娜·哈拉维", "位置知识与多物种思想"), ("Gayatri Chakravorty Spivak", "佳亚特里·斯皮瓦克", "知识位置与去殖民批评")],
        "works": [("《我们从未现代过》", "布鲁诺·拉图尔"), ("《情境知识》", "唐娜·哈拉维"), ("《后殖民理性批判》", "佳亚特里·斯皮瓦克")],
    },
    {
        "id": "frontier-methodology-map", "chapter": "2", "title": "方法论地图", "titleEn": "Methodological Atlas",
        "titleFr": "Atlas méthodologique", "era": "细读至计算", "region": "跨学科", "lens": "主张—证据契约 · 三角验证 · 可复现",
        "collection": "foundations", "palette": ["#dce8f5", "#566f9b", "#8fc7ff"],
        "relations": ["frontier-paradigm-shifts", "digital-humanities", "cognitive-empirical-aesthetics", "russian-formalism"],
        "figures": [("Franco Moretti", "弗兰科·莫莱蒂", "远读与文学史量化"), ("Ted Underwood", "特德·安德伍德", "计算文学史与模型审计"), ("Rita Felski", "丽塔·费尔斯基", "阅读方法与后批判")],
        "works": [("《远读》", "弗兰科·莫莱蒂"), ("Distant Horizons", "特德·安德伍德"), ("《批判的限度》", "丽塔·费尔斯基")],
    },
    {
        "id": "digital-humanities", "chapter": "3", "title": "数字人文与计算文学", "titleEn": "Digital Humanities",
        "titleFr": "Humanités numériques", "era": "1990年代至今", "region": "跨语数字基础设施", "lens": "语料 · 模型 · 基础设施批评",
        "collection": "frontiers", "palette": ["#d6f1f3", "#2e7e89", "#52e2ed"],
        "relations": ["frontier-methodology-map", "ai-literature", "institutions-data-visibility", "russian-formalism"],
        "figures": [("Franco Moretti", "弗兰科·莫莱蒂", "远读与文学实验室"), ("Ted Underwood", "特德·安德伍德", "计算文学史"), ("Lauren F. Klein", "劳伦·克莱因", "数据女性主义与档案批评")],
        "works": [("《图表、地图、树》", "弗兰科·莫莱蒂"), ("Distant Horizons", "特德·安德伍德"), ("Data Feminism", "劳伦·克莱因、凯瑟琳·迪格纳齐奥")],
    },
    {
        "id": "ai-literature", "chapter": "4", "title": "AI与文学", "titleEn": "AI and Literature",
        "titleFr": "IA et littérature", "era": "生成式人工智能时代", "region": "全球平台与创作现场", "lens": "生成 · 协作 · 贡献链",
        "collection": "frontiers", "palette": ["#dde6f4", "#536990", "#8fbfff"],
        "relations": ["digital-humanities", "sound-media-material-text", "contemporary-debates", "poststructuralism"],
        "figures": [("N. Katherine Hayles", "N. 凯瑟琳·海尔斯", "电子文学与后人类"), ("Kate Crawford", "凯特·克劳福德", "AI基础设施与权力"), ("Joanna Zylinska", "乔安娜·齐林斯卡", "非人类摄影与AI艺术")],
        "works": [("《我们如何成为后人类》", "N. 凯瑟琳·海尔斯"), ("Atlas of AI", "凯特·克劳福德"), ("AI Art", "乔安娜·齐林斯卡")],
    },
    {
        "id": "environmental-humanities", "chapter": "5", "title": "环境人文", "titleEn": "Environmental Humanities",
        "titleFr": "Humanités environnementales", "era": "人类世与气候危机", "region": "陆地、海洋与能源系统", "lens": "多于人类 · 慢暴力 · 差异化责任",
        "collection": "frontiers", "palette": ["#d9f1e7", "#477f72", "#6be0ba"],
        "relations": ["ecocriticism-world", "decolonial-global-south", "region-latin-america", "region-africa"],
        "figures": [("Dipesh Chakrabarty", "迪佩什·查克拉巴蒂", "气候史与行星尺度"), ("Rob Nixon", "罗布·尼克松", "慢暴力与环境正义"), ("Stacy Alaimo", "斯泰西·阿莱莫", "跨身体性与物质女性主义")],
        "works": [("The Climate of History", "迪佩什·查克拉巴蒂"), ("《缓慢的暴力》", "罗布·尼克松"), ("Bodily Natures", "斯泰西·阿莱莫")],
    },
    {
        "id": "decolonial-global-south", "chapter": "6", "title": "后殖民、去殖民与全球南方", "titleEn": "Postcolonial, Decolonial, and Global South Studies",
        "titleFr": "Décolonial et Suds globaux", "era": "殖民余波至当代", "region": "全球南方与离散网络", "lens": "知识主权 · 关系重分配 · 不可译性",
        "collection": "frontiers", "palette": ["#e1eee8", "#527d68", "#87e3ae"],
        "relations": ["postcolonial", "world-literature-translation", "crosscutting-frontiers", "region-africa"],
        "figures": [("Gayatri Chakravorty Spivak", "佳亚特里·斯皮瓦克", "底层、翻译与伦理"), ("Ngugi wa Thiong'o", "恩古吉·瓦·提安哥", "语言去殖民"), ("Walter Mignolo", "沃尔特·米尼奥罗", "殖民性与边界思维")],
        "works": [("《底层人能说话吗？》", "佳亚特里·斯皮瓦克"), ("《去殖民心灵》", "恩古吉·瓦·提安哥"), ("The Darker Side of Western Modernity", "沃尔特·米尼奥罗")],
    },
    {
        "id": "world-literature-translation", "chapter": "7", "title": "世界文学与翻译", "titleEn": "World Literature and Translation",
        "titleFr": "Littérature mondiale et traduction", "era": "歌德以来至平台时代", "region": "跨语流通网络", "lens": "流通 · 改写 · 文学资本",
        "collection": "frontiers", "palette": ["#dcebf2", "#557c90", "#78cfea"],
        "relations": ["postcolonial", "decolonial-global-south", "region-europe", "ecocriticism-world"],
        "figures": [("David Damrosch", "戴维·达姆罗什", "世界文学的流通与阅读"), ("Pascale Casanova", "帕斯卡尔·卡萨诺瓦", "世界文学共和国"), ("Emily Apter", "艾米莉·阿普特", "不可译性与翻译政治")],
        "works": [("What Is World Literature?", "戴维·达姆罗什"), ("《世界文学共和国》", "帕斯卡尔·卡萨诺瓦"), ("Against World Literature", "艾米莉·阿普特")],
    },
    {
        "id": "affect-postcritique", "chapter": "8", "title": "情动理论、阅读研究与后批判", "titleEn": "Affect, Reading Studies, and Postcritique",
        "titleFr": "Affect et postcritique", "era": "1990年代至今", "region": "阅读关系与公共情感", "lens": "依恋 · 修复性阅读 · 情感流通",
        "collection": "frontiers", "palette": ["#ece2ef", "#82648a", "#d7a9dd"],
        "relations": ["reader-response", "psychoanalysis", "feminism-queer", "contemporary-debates"],
        "figures": [("Eve Kosofsky Sedgwick", "伊芙·科索夫斯基·塞奇威克", "偏执与修复性阅读"), ("Rita Felski", "丽塔·费尔斯基", "后批判与依恋"), ("Lauren Berlant", "劳伦·贝兰特", "残酷乐观主义")],
        "works": [("Touching Feeling", "伊芙·科索夫斯基·塞奇威克"), ("《批判的限度》", "丽塔·费尔斯基"), ("Cruel Optimism", "劳伦·贝兰特")],
    },
    {
        "id": "cognitive-empirical-aesthetics", "chapter": "9", "title": "认知、实证与神经美学", "titleEn": "Cognitive and Empirical Aesthetics",
        "titleFr": "Esthétique cognitive et empirique", "era": "认知科学交叉时代", "region": "实验室与阅读现场", "lens": "具身认知 · 实验约束 · 解释三联",
        "collection": "frontiers", "palette": ["#d9eef2", "#4e7c87", "#72dce8"],
        "relations": ["reader-response", "frontier-methodology-map", "psychoanalysis", "contemporary-debates"],
        "figures": [("Lisa Zunshine", "丽莎·赞申", "心智理论与小说阅读"), ("Patrick Colm Hogan", "帕特里克·科尔姆·霍根", "认知文化研究"), ("Arthur M. Jacobs", "阿瑟·雅各布斯", "神经认知诗学")],
        "works": [("Why We Read Fiction", "丽莎·赞申"), ("Cognitive Science, Literature, and the Arts", "帕特里克·科尔姆·霍根"), ("Neurocognitive Poetics", "阿瑟·雅各布斯")],
    },
    {
        "id": "gender-queer-trans", "chapter": "10", "title": "酷儿、跨性别与反性别政治", "titleEn": "Queer, Trans, and Anti-Gender Politics",
        "titleFr": "Queer, trans et politiques anti-genre", "era": "表演性之后", "region": "身体、照护与制度", "lens": "关系 · 基础设施 · 生存时间",
        "collection": "frontiers", "palette": ["#eee2eb", "#8b657b", "#e0a4c2"],
        "relations": ["feminism-queer", "affect-postcritique", "medical-humanities-disability", "crosscutting-frontiers"],
        "figures": [("Judith Butler", "朱迪斯·巴特勒", "性别表演性与脆弱生命"), ("Susan Stryker", "苏珊·斯特赖克", "跨性别研究史"), ("Jack Halberstam", "杰克·哈尔伯斯坦", "酷儿时间与失败")],
        "works": [("《性别麻烦》", "朱迪斯·巴特勒"), ("Transgender History", "苏珊·斯特赖克"), ("The Queer Art of Failure", "杰克·哈尔伯斯坦")],
    },
    {
        "id": "memory-trauma-platform", "chapter": "11", "title": "记忆、创伤与平台", "titleEn": "Memory, Trauma, and Platforms",
        "titleFr": "Mémoire, trauma et plateformes", "era": "大屠杀记忆至平台记忆", "region": "跨代与跨媒介", "lens": "多向记忆 · 牵连主体 · 媒介重组",
        "collection": "frontiers", "palette": ["#e2e7f1", "#626e91", "#9eafe6"],
        "relations": ["new-historicism", "postcolonial", "sound-media-material-text", "region-eastern-europe"],
        "figures": [("Michael Rothberg", "迈克尔·罗斯伯格", "多向记忆与牵连主体"), ("Marianne Hirsch", "玛丽安娜·赫希", "后记忆"), ("Astrid Erll", "阿斯特丽德·埃尔", "文化记忆与媒介")],
        "works": [("Multidirectional Memory", "迈克尔·罗斯伯格"), ("The Generation of Postmemory", "玛丽安娜·赫希"), ("Memory in Culture", "阿斯特丽德·埃尔")],
    },
    {
        "id": "medical-humanities-disability", "chapter": "12", "title": "医学人文与残障研究", "titleEn": "Medical Humanities and Disability Studies",
        "titleFr": "Humanités médicales et études du handicap", "era": "叙事医学至批判健康人文", "region": "诊室、社会与照护网络", "lens": "叙事倾听 · 错配 · 可及性",
        "collection": "frontiers", "palette": ["#dff0ec", "#527f78", "#7fdcc7"],
        "relations": ["feminism-queer", "gender-queer-trans", "affect-postcritique", "reader-response"],
        "figures": [("Rita Charon", "丽塔·卡伦", "叙事医学"), ("Rosemarie Garland-Thomson", "罗斯玛丽·加兰-汤姆森", "残障文化与凝视"), ("Arthur W. Frank", "阿瑟·弗兰克", "疾病叙事")],
        "works": [("Narrative Medicine", "丽塔·卡伦"), ("Extraordinary Bodies", "罗斯玛丽·加兰-汤姆森"), ("The Wounded Storyteller", "阿瑟·弗兰克")],
    },
    {
        "id": "sound-media-material-text", "chapter": "13", "title": "声音、媒介与物质文本", "titleEn": "Sound, Media, and Material Text",
        "titleFr": "Son, médias et matérialité du texte", "era": "书籍史至平台媒介", "region": "口述、印刷与数字媒介", "lens": "媒介考古 · 聆听制度 · 物质链",
        "collection": "frontiers", "palette": ["#dce6ee", "#536d81", "#82b8d5"],
        "relations": ["modernism-symbolism", "digital-humanities", "ai-literature", "russian-formalism"],
        "figures": [("Friedrich Kittler", "弗里德里希·基特勒", "媒介技术与话语网络"), ("Lisa Gitelman", "丽莎·吉特尔曼", "媒介史与文档"), ("Jonathan Sterne", "乔纳森·斯特恩", "声音研究与听觉文化")],
        "works": [("Gramophone, Film, Typewriter", "弗里德里希·基特勒"), ("Paper Knowledge", "丽莎·吉特尔曼"), ("The Audible Past", "乔纳森·斯特恩")],
    },
    {
        "id": "crosscutting-frontiers", "chapter": "X", "title": "横断前沿", "titleEn": "Crosscutting Frontiers",
        "titleFr": "Frontières transversales", "era": "公共后果与知识治理", "region": "平台、课堂、社区与边界", "lens": "知识主权 · 文学劳动 · 公共人文",
        "collection": "frontiers", "palette": ["#e4edf0", "#647e85", "#91d7dc"],
        "relations": ["decolonial-global-south", "institutions-data-visibility", "digital-humanities", "gender-queer-trans"],
        "figures": [("Linda Tuhiwai Smith", "琳达·图希瓦·史密斯", "去殖民方法与原住民知识"), ("Henry Jenkins", "亨利·詹金斯", "参与式文化与跨媒介"), ("Kathleen Fitzpatrick", "凯瑟琳·菲茨帕特里克", "开放人文与学术共同体")],
        "works": [("Decolonizing Methodologies", "琳达·图希瓦·史密斯"), ("Convergence Culture", "亨利·詹金斯"), ("Generous Thinking", "凯瑟琳·菲茨帕特里克")],
    },
    {
        "id": "region-north-america", "chapter": "14", "title": "北美研究现场", "titleEn": "North American Research Field",
        "titleFr": "Champ de recherche nord-américain", "era": "危机中的方法重建", "region": "美国与加拿大", "lens": "实验室 · 黑人档案 · 公共健康",
        "collection": "regions", "palette": ["#dce8f0", "#516f82", "#75b9da"],
        "relations": ["digital-humanities", "medical-humanities-disability", "institutions-data-visibility", "region-europe"],
        "figures": [("Saidiya Hartman", "赛迪亚·哈特曼", "批判性虚构与黑人档案"), ("N. Katherine Hayles", "N. 凯瑟琳·海尔斯", "电子文学与认知媒介"), ("Toni Morrison", "托妮·莫里森", "种族记忆与小说形式")],
        "works": [("Wayward Lives, Beautiful Experiments", "赛迪亚·哈特曼"), ("Electronic Literature", "N. 凯瑟琳·海尔斯"), ("《宠儿》", "托妮·莫里森")],
    },
    {
        "id": "region-europe", "chapter": "15", "title": "欧洲研究现场", "titleEn": "European Research Field",
        "titleFr": "Champ de recherche européen", "era": "跨语基础设施时代", "region": "欧洲多语网络", "lens": "可比语料 · 激进协作 · 流通机制",
        "collection": "regions", "palette": ["#dce6f2", "#586f91", "#86ade9"],
        "relations": ["world-literature-translation", "digital-humanities", "region-north-america", "region-eastern-europe"],
        "figures": [("Franco Moretti", "弗兰科·莫莱蒂", "比较文学与远读"), ("Pascale Casanova", "帕斯卡尔·卡萨诺瓦", "文学世界体系"), ("Aleida Assmann", "阿莱达·阿斯曼", "文化记忆")],
        "works": [("《欧洲小说地图集》", "弗兰科·莫莱蒂"), ("《世界文学共和国》", "帕斯卡尔·卡萨诺瓦"), ("Cultural Memory and Western Civilization", "阿莱达·阿斯曼")],
    },
    {
        "id": "region-greater-china", "chapter": "16", "title": "中国大陆及港澳台", "titleEn": "Greater China Research Field",
        "titleFr": "Champ de recherche de la Chine élargie", "era": "网络文学与自主知识体系", "region": "中国大陆、香港、澳门、台湾", "lens": "数字故事 · 理论发生地 · 版本链",
        "collection": "regions", "palette": ["#dceee9", "#4f7e70", "#74d5b6"],
        "relations": ["chinese-poetics", "ai-literature", "digital-humanities", "region-japan-korea"],
        "figures": [("Jing Tsu", "石静远", "中文技术、文字与世界文学"), ("Wang Hui", "汪晖", "现代中国思想与文学"), ("Lu Xun", "鲁迅", "现代文学批判与叙事实践")],
        "works": [("Kingdom of Characters", "石静远"), ("《现代中国思想的兴起》", "汪晖"), ("《呐喊》", "鲁迅")],
    },
    {
        "id": "region-japan-korea", "chapter": "17", "title": "日本与韩国", "titleEn": "Japan and Korea Research Field",
        "titleFr": "Champ de recherche japonais et coréen", "era": "古典籍AI与灾难记忆", "region": "日本与朝鲜半岛", "lens": "崩字识别 · 灾难记忆 · 共同生存",
        "collection": "regions", "palette": ["#e2e8f1", "#63728c", "#9fb9e2"],
        "relations": ["memory-trauma-platform", "digital-humanities", "region-greater-china", "world-literature-translation"],
        "figures": [("Han Kang", "韩江", "创伤、身体与历史记忆"), ("Haruki Murakami", "村上春树", "世界化小说与媒介文化"), ("Kenzaburo Oe", "大江健三郎", "战后伦理与残障叙事")],
        "works": [("《少年来了》", "韩江"), ("《海边的卡夫卡》", "村上春树"), ("《个人的体验》", "大江健三郎")],
    },
    {
        "id": "region-south-southeast-asia", "chapter": "18", "title": "南亚与东南亚", "titleEn": "South and Southeast Asian Research Field",
        "titleFr": "Champ sud et sud-est asiatique", "era": "多语地方与版本网络", "region": "印度洋与东南亚", "lens": "版本网络 · 数字保存 · 知识行动主义",
        "collection": "regions", "palette": ["#e4ece5", "#687e69", "#9acb9c"],
        "relations": ["decolonial-global-south", "world-literature-translation", "region-africa", "postcolonial"],
        "figures": [("Rabindranath Tagore", "泰戈尔", "多语写作与世界文学"), ("Arundhati Roy", "阿兰达蒂·洛伊", "小说、生态与公共批评"), ("Pramoedya Ananta Toer", "普拉姆迪亚·阿南达·杜尔", "殖民记忆与印尼文学")],
        "works": [("《吉檀迦利》", "泰戈尔"), ("《微物之神》", "阿兰达蒂·洛伊"), ("《人世间》", "普拉姆迪亚·阿南达·杜尔")],
    },
    {
        "id": "region-latin-america", "chapter": "19", "title": "拉丁美洲", "titleEn": "Latin American Research Field",
        "titleFr": "Champ de recherche latino-américain", "era": "采掘、平台与去殖民实践", "region": "拉丁美洲与加勒比", "lens": "数字原生 · 身体—领土 · 装置批评",
        "collection": "regions", "palette": ["#e6ece0", "#6e7e5b", "#afd17e"],
        "relations": ["environmental-humanities", "decolonial-global-south", "digital-humanities", "region-africa"],
        "figures": [("Silvia Rivera Cusicanqui", "西尔维娅·里维拉·库西坎基", "安第斯去殖民思想"), ("Gabriel Garcia Marquez", "加西亚·马尔克斯", "记忆、暴力与魔幻现实主义"), ("Roberto Bolano", "罗贝托·波拉尼奥", "跨国文学与暴力档案")],
        "works": [("Ch'ixinakax utxiwa", "西尔维娅·里维拉·库西坎基"), ("《百年孤独》", "加西亚·马尔克斯"), ("《2666》", "罗贝托·波拉尼奥")],
    },
    {
        "id": "region-africa", "chapter": "20", "title": "非洲研究现场", "titleEn": "African Research Field",
        "titleFr": "Champ de recherche africain", "era": "水域理论与多语网络", "region": "非洲大陆与离散社群", "lens": "元素方法 · 去殖民元数据 · 语言实践",
        "collection": "regions", "palette": ["#e1eee8", "#577a6a", "#83cfa9"],
        "relations": ["decolonial-global-south", "environmental-humanities", "region-south-southeast-asia", "postcolonial"],
        "figures": [("Ngugi wa Thiong'o", "恩古吉·瓦·提安哥", "语言去殖民与非洲文学"), ("Achille Mbembe", "阿希尔·姆本贝", "后殖民权力与世界生成"), ("Wole Soyinka", "沃莱·索因卡", "戏剧、神话与公共批评")],
        "works": [("《去殖民心灵》", "恩古吉·瓦·提安哥"), ("On the Postcolony", "阿希尔·姆本贝"), ("《死亡与国王的侍从》", "沃莱·索因卡")],
    },
    {
        "id": "region-middle-east-arab", "chapter": "21", "title": "中东与阿拉伯世界", "titleEn": "Middle Eastern and Arab Research Field",
        "titleFr": "Champ moyen-oriental et arabe", "era": "可计算经典与数字见证", "region": "中东、北非与阿拉伯语世界", "lens": "文本复用 · 女性档案 · 见证边界",
        "collection": "regions", "palette": ["#e5e8ef", "#6b7084", "#adb7d4"],
        "relations": ["postcolonial", "memory-trauma-platform", "digital-humanities", "region-africa"],
        "figures": [("Edward Said", "爱德华·萨义德", "东方主义与流亡批评"), ("Naguib Mahfouz", "纳吉布·马哈福兹", "城市现代性与阿拉伯小说"), ("Hoda Barakat", "胡达·巴拉卡特", "战争、声音与离散")],
        "works": [("《东方学》", "爱德华·萨义德"), ("《宫间街》", "纳吉布·马哈福兹"), ("The Night Mail", "胡达·巴拉卡特")],
    },
    {
        "id": "region-eastern-europe", "chapter": "22", "title": "俄罗斯、乌克兰与中东欧", "titleEn": "Russia, Ukraine, and Eastern Europe",
        "titleFr": "Russie, Ukraine et Europe orientale", "era": "战争、记忆与去中心化", "region": "东欧多中心网络", "lens": "紧急数字人文 · 位置反思 · 多中心文学史",
        "collection": "regions", "palette": ["#e0e6ef", "#5d6982", "#94a8d2"],
        "relations": ["memory-trauma-platform", "region-europe", "digital-humanities", "postcolonial"],
        "figures": [("Svetlana Alexievich", "斯韦特兰娜·阿列克谢耶维奇", "复调见证与灾难记忆"), ("Olga Tokarczuk", "奥尔加·托卡尔丘克", "边界、迁移与星群叙事"), ("Serhiy Zhadan", "谢尔盖·扎丹", "乌克兰东部、战争与诗歌")],
        "works": [("《切尔诺贝利的悲鸣》", "斯韦特兰娜·阿列克谢耶维奇"), ("《云游》", "奥尔加·托卡尔丘克"), ("The Orphanage", "谢尔盖·扎丹")],
    },
    {
        "id": "institutions-data-visibility", "chapter": "23", "title": "数据、机构与可见性", "titleEn": "Data, Institutions, and Visibility",
        "titleFr": "Données, institutions et visibilité", "era": "平台化学术建制", "region": "期刊、实验室与基础设施", "lens": "可见性政治 · 数据不平等 · 透明协议",
        "collection": "synthesis", "palette": ["#dcecf0", "#4e7881", "#72cfda"],
        "relations": ["digital-humanities", "crosscutting-frontiers", "frontier-methodology-map", "marxism"],
        "figures": [("Pierre Bourdieu", "皮埃尔·布迪厄", "文学场与文化生产"), ("Wendy Hui Kyong Chun", "温迪·春", "软件、网络与控制"), ("Sarah Ahmed", "萨拉·艾哈迈德", "制度、情感与多样性劳动")],
        "works": [("《艺术的法则》", "皮埃尔·布迪厄"), ("Updating to Remain the Same", "温迪·春"), ("On Being Included", "萨拉·艾哈迈德")],
    },
    {
        "id": "contemporary-debates", "chapter": "24", "title": "六大论战", "titleEn": "Six Contemporary Debates",
        "titleFr": "Six controverses contemporaines", "era": "当代争鸣现场", "region": "跨理论公共领域", "lens": "计算与解释 · LLM作者性 · 修复性阅读",
        "collection": "synthesis", "palette": ["#e5e2ef", "#6e6788", "#b7a8e5"],
        "relations": ["frontier-methodology-map", "ai-literature", "affect-postcritique", "world-literature-translation"],
        "figures": [("Rita Felski", "丽塔·费尔斯基", "批判、依恋与后批判"), ("Franco Moretti", "弗兰科·莫莱蒂", "计算与解释尺度"), ("Gayatri Chakravorty Spivak", "佳亚特里·斯皮瓦克", "不可译性与全球批评")],
        "works": [("《批判的限度》", "丽塔·费尔斯基"), ("《远读》", "弗兰科·莫莱蒂"), ("Death of a Discipline", "佳亚特里·斯皮瓦克")],
    },
    {
        "id": "horizon-2026-2030", "chapter": "25", "title": "2026—2030研究地平线", "titleEn": "Research Horizon 2026–2030",
        "titleFr": "Horizon de recherche 2026–2030", "era": "未来五年", "region": "全球研究议程", "lens": "趋势 · 反证指标 · 课题设计",
        "collection": "synthesis", "palette": ["#d9edf3", "#447d8e", "#65d9ed"],
        "relations": ["contemporary-debates", "institutions-data-visibility", "ai-literature", "environmental-humanities"],
        "figures": [("N. Katherine Hayles", "N. 凯瑟琳·海尔斯", "技术、文学与后人类"), ("Ted Underwood", "特德·安德伍德", "计算文学史与预测边界"), ("Dipesh Chakrabarty", "迪佩什·查克拉巴蒂", "气候史与行星未来")],
        "works": [("Postprint", "N. 凯瑟琳·海尔斯"), ("Distant Horizons", "特德·安德伍德"), ("The Climate of History", "迪佩什·查克拉巴蒂")],
    },
]


COLLECTION_LABELS = {
    "foundations": {"zh": "方法与范式", "en": "Methods & Paradigms", "fr": "Méthodes et paradigmes"},
    "frontiers": {"zh": "主题前沿", "en": "Thematic Frontiers", "fr": "Frontières thématiques"},
    "regions": {"zh": "区域星图", "en": "Regional Constellations", "fr": "Constellations régionales"},
    "synthesis": {"zh": "综合与展望", "en": "Synthesis & Horizons", "fr": "Synthèse et horizons"},
}

CLASSIC_TITLES = {
    "chinese-poetics": "中国古典诗学", "ecocriticism-world": "生态批评与世界文学",
    "feminism-queer": "女性主义与酷儿理论", "marxism": "马克思主义批评",
    "modernism-symbolism": "现代主义与象征主义", "new-historicism": "新历史主义",
    "postcolonial": "后殖民理论", "poststructuralism": "后结构主义",
    "psychoanalysis": "精神分析批评", "reader-response": "读者反应批评",
    "russian-formalism": "俄国形式主义",
}

SUPPLEMENTS = [
    {"id": "docx-frontmatter", "number": "导读", "title": "摘要、导读与报告范围"},
    {"id": "docx-structure", "number": "编次", "title": "全书编次与附录导航"},
    *[{"id": f"docx-appendix-{letter.lower()}", "number": f"附录{letter}", "title": title} for letter, title in [
        ("A", "核心术语中英对照与使用边界"), ("B", "方法选择与质量控制速查表"),
        ("C", "热点编码与趋势数据方法"), ("D", "代表学者—机构—成果索引"),
        ("E", "资料、复现与 AI 透明度声明"), ("F", "实体权威表与作品稳定链接总索引"),
    ]],
    {"id": "docx-references", "number": "文献", "title": "DOCX 参考文献"},
    {"id": "html-frontmatter", "number": "导读", "title": "HTML 摘要、编制说明与目录"},
    {"id": "html-glossary", "number": "术语", "title": "术语对照表"},
    {"id": "html-directory", "number": "名录", "title": "期刊与学会名录"},
    {"id": "html-resources", "number": "资源", "title": "数字资源与项目链接"},
    {"id": "html-references", "number": "文献", "title": "HTML 参考文献"},
    {"id": "html-other", "number": "补充", "title": "HTML 其他补充资料"},
]

LOCATIONS = {
    "frontier-paradigm-shifts": {"lat": 46.2, "lon": 6.1, "label": "日内瓦 · 全球知识治理"},
    "frontier-methodology-map": {"lat": 51.5, "lon": -0.1, "label": "伦敦 · 跨学科方法网络"},
    "digital-humanities": {"lat": 37.4, "lon": -122.1, "label": "斯坦福 · 文学实验室"},
    "ai-literature": {"lat": 37.8, "lon": -122.4, "label": "旧金山湾区 · 生成式文化"},
    "environmental-humanities": {"lat": -12.0, "lon": 133.0, "label": "环太平洋 · 环境人文"},
    "decolonial-global-south": {"lat": -26.2, "lon": 28.0, "label": "约翰内斯堡 · 全球南方"},
    "world-literature-translation": {"lat": 50.1, "lon": 8.7, "label": "法兰克福 · 跨语流通"},
    "affect-postcritique": {"lat": 41.9, "lon": -87.6, "label": "芝加哥 · 阅读与情感"},
    "cognitive-empirical-aesthetics": {"lat": 52.5, "lon": 13.4, "label": "柏林 · 实证美学"},
    "gender-queer-trans": {"lat": 40.7, "lon": -74.0, "label": "纽约 · 性别与酷儿研究"},
    "memory-trauma-platform": {"lat": 52.2, "lon": 21.0, "label": "华沙 · 记忆与见证"},
    "medical-humanities-disability": {"lat": 40.8, "lon": -73.9, "label": "纽约 · 叙事医学"},
    "sound-media-material-text": {"lat": 45.5, "lon": -73.6, "label": "蒙特利尔 · 声音与媒介"},
    "crosscutting-frontiers": {"lat": -41.3, "lon": 174.8, "label": "惠灵顿 · 原住民知识主权"},
    "region-north-america": {"lat": 43.7, "lon": -79.4, "label": "北美研究现场"},
    "region-europe": {"lat": 50.8, "lon": 4.4, "label": "欧洲跨语基础设施"},
    "region-greater-china": {"lat": 30.6, "lon": 114.3, "label": "中国大陆及港澳台"},
    "region-japan-korea": {"lat": 35.7, "lon": 139.7, "label": "日本与韩国"},
    "region-south-southeast-asia": {"lat": 13.8, "lon": 100.5, "label": "南亚与东南亚"},
    "region-latin-america": {"lat": -23.6, "lon": -46.6, "label": "拉丁美洲"},
    "region-africa": {"lat": 6.5, "lon": 3.4, "label": "非洲研究网络"},
    "region-middle-east-arab": {"lat": 30.0, "lon": 31.2, "label": "中东与阿拉伯世界"},
    "region-eastern-europe": {"lat": 50.4, "lon": 30.5, "label": "乌克兰与中东欧"},
    "institutions-data-visibility": {"lat": 50.9, "lon": 4.5, "label": "布鲁塞尔 · 学术基础设施"},
    "contemporary-debates": {"lat": 41.4, "lon": 2.2, "label": "巴塞罗那 · 全球理论论坛"},
    "horizon-2026-2030": {"lat": 1.3, "lon": 103.8, "label": "新加坡 · 未来研究地平线"},
}


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", value or "").strip()


def compact(value: str, limit: int) -> str:
    value = clean_text(value)
    if len(value) <= limit:
        return value
    cut = value[:limit].rsplit("。", 1)[0]
    return (cut if len(cut) > limit * 0.55 else value[:limit].rstrip("，；：,. ")) + "。"


def iter_docx_blocks(parent: DocumentObject) -> Iterable[Paragraph | Table]:
    body = parent.element.body
    for child in body.iterchildren():
        if isinstance(child, CT_P):
            yield Paragraph(child, parent)
        elif isinstance(child, CT_Tbl):
            yield Table(child, parent)


def chapter_id_from_heading(text: str) -> str | None:
    match = re.search(r"第(\d+)章", text)
    if match:
        number = match.group(1)
        for book in BOOKS:
            if book["chapter"] == number:
                return book["id"]
    if "横断前沿" in text:
        return "crosscutting-frontiers"
    appendix_match = re.match(r"附录\s*([A-F])", text, flags=re.IGNORECASE)
    if appendix_match:
        return f"docx-appendix-{appendix_match.group(1).lower()}"
    if text.startswith("参考文献"):
        return "docx-references"
    if any(term in text for term in ["摘要与导读", "目录"]):
        return "docx-frontmatter"
    if text.startswith(("第一编", "第二编", "第三编", "第四编", "附录")):
        return "docx-structure"
    return None


def copy_docx_image(document: DocumentObject, rel_id: str, index: int, copied: dict[str, str]) -> str | None:
    relationship = document.part.rels.get(rel_id)
    if not relationship or not hasattr(relationship, "target_part"):
        return None
    part = relationship.target_part
    key = str(part.partname)
    if key in copied:
        return copied[key]
    suffix = Path(key).suffix.lower() or ".png"
    digest = hashlib.sha1(part.blob).hexdigest()[:10]
    filename = f"source-figure-{index:02d}-{digest}{suffix}"
    target = RESEARCH_DIR / filename
    target.write_bytes(part.blob)
    rel_path = f"assets/research/{filename}"
    copied[key] = rel_path
    return rel_path


def extract_docx() -> dict[str, Any]:
    document = Document(DOCX_PATH)
    blocks: list[dict[str, Any]] = []
    copied: dict[str, str] = {}
    current_chapter = "docx-frontmatter"
    image_index = 0

    for item in iter_docx_blocks(document):
        if isinstance(item, Paragraph):
            style = item.style.name if item.style else ""
            text = clean_text(item.text or "".join(item._p.itertext()))
            heading_match = re.match(r"Heading\s+(\d+)", style)
            if heading_match:
                level = int(heading_match.group(1))
                if level == 1:
                    current_chapter = chapter_id_from_heading(text) or "docx-structure"
                if text:
                    blocks.append({"type": "heading", "level": level, "text": text, "chapter": current_chapter})
            elif text:
                if style.startswith("List Bullet"):
                    blocks.append({"type": "list-item", "ordered": False, "text": text, "chapter": current_chapter})
                elif style.startswith("List Number"):
                    blocks.append({"type": "list-item", "ordered": True, "text": text, "chapter": current_chapter})
                else:
                    block = {"type": "paragraph", "text": text, "chapter": current_chapter}
                    if style and style != "Normal":
                        block["style"] = style
                    blocks.append(block)

            for blip in item._p.xpath(".//a:blip"):
                rel_id = blip.get(qn("r:embed"))
                if not rel_id:
                    continue
                image_index += 1
                source = copy_docx_image(document, rel_id, image_index, copied)
                if source:
                    blocks.append({"type": "image", "src": source, "alt": text or f"研究图表 {image_index}", "chapter": current_chapter})
        else:
            rows = [[clean_text(cell.text) for cell in row.cells] for row in item.rows]
            if any(any(cell for cell in row) for row in rows):
                blocks.append({"type": "table", "rows": rows, "chapter": current_chapter})

    for index, block in enumerate(blocks):
        block["sourceIndex"] = index

    return {
        "id": "panorama-docx",
        "title": "全球文学研究前沿：理论、方法、区域、案例全景",
        "kind": "完整研究报告",
        "language": "zh-CN",
        "filename": DOCX_PATH.name,
        "blocks": blocks,
    }


def sanitize_figure(node: Any) -> str:
    fragment = BeautifulSoup(str(node), "html.parser")
    for tag in fragment.find_all(["script", "iframe", "object", "embed", "link", "meta"]):
        tag.decompose()
    for tag in fragment.find_all(True):
        for attr in list(tag.attrs):
            if attr.lower().startswith("on"):
                del tag.attrs[attr]
        if tag.name == "a":
            href = str(tag.get("href", ""))
            if href and not href.startswith(("https://", "http://", "#")):
                tag.attrs.pop("href", None)
    return str(fragment.find("figure") or fragment)


def html_heading_chapter(text: str) -> str | None:
    punctuation = r"[\s:：,，、.．;；/\-—\"“”'()（）]+"
    normalized = re.sub(punctuation, "", text).lower()
    aliases = {
        "frontier-paradigm-shifts": ["范式转移"], "frontier-methodology-map": ["方法论地图"],
        "digital-humanities": ["数字人文与计算文学"], "ai-literature": ["ai与文学"],
        "environmental-humanities": ["环境人文"], "decolonial-global-south": ["后殖民去殖民与全球南方"],
        "world-literature-translation": ["世界文学与翻译"], "affect-postcritique": ["情动理论阅读研究与后批判"],
        "cognitive-empirical-aesthetics": ["认知文学研究实证美学与神经美学"],
        "gender-queer-trans": ["性别研究前沿"], "memory-trauma-platform": ["记忆与创伤研究"],
        "medical-humanities-disability": ["医学人文叙事医学与残障研究"],
        "sound-media-material-text": ["声音媒介与物质文本"], "region-north-america": ["北美"],
        "region-europe": ["欧洲"], "region-greater-china": ["中国大陆与港澳台"],
        "region-japan-korea": ["日本与韩国"], "region-south-southeast-asia": ["南亚与东南亚"],
        "region-latin-america": ["拉丁美洲"], "region-africa": ["非洲"],
        "region-middle-east-arab": ["中东与阿拉伯世界"], "region-eastern-europe": ["俄罗斯乌克兰与中东欧"],
        "institutions-data-visibility": ["数据透视"], "contemporary-debates": ["六大论战"],
        "horizon-2026-2030": ["趋势展望"],
    }
    for chapter_id, terms in aliases.items():
        if any(re.sub(punctuation, "", term).lower() in normalized for term in terms):
            return chapter_id
    supplement_aliases = {
        "html-frontmatter": ["摘要", "编制说明", "目录"],
        "html-glossary": ["术语对照表"],
        "html-directory": ["期刊与学会名录"],
        "html-resources": ["数字资源与项目链接"],
        "html-references": ["参考文献"],
    }
    for chapter_id, terms in supplement_aliases.items():
        if any(re.sub(punctuation, "", term).lower() in normalized for term in terms):
            return chapter_id
    return None


def extract_html() -> dict[str, Any]:
    soup = BeautifulSoup(HTML_PATH.read_text(encoding="utf-8"), "html.parser")
    blocks: list[dict[str, Any]] = []
    current_chapter = "html-frontmatter"
    candidates = soup.find_all(["h1", "h2", "h3", "h4", "p", "ul", "ol", "table", "figure"])
    for node in candidates:
        if node.find_parent(["table", "figure", "ul", "ol"]):
            continue
        name = node.name.lower()
        text = clean_text(node.get_text(" ", strip=True))
        if name in {"h1", "h2", "h3", "h4"}:
            if name == "h2":
                current_chapter = html_heading_chapter(text) or "html-other"
            blocks.append({"type": "heading", "level": int(name[1]), "text": text, "chapter": current_chapter})
        elif name == "p" and text:
            blocks.append({"type": "paragraph", "text": text, "chapter": current_chapter})
        elif name in {"ul", "ol"}:
            for li in node.find_all("li", recursive=False):
                item_text = clean_text(li.get_text(" ", strip=True))
                if item_text:
                    blocks.append({"type": "list-item", "ordered": name == "ol", "text": item_text, "chapter": current_chapter})
        elif name == "table":
            rows = []
            for row in node.find_all("tr"):
                cells = [clean_text(cell.get_text(" ", strip=True)) for cell in row.find_all(["th", "td"], recursive=False)]
                if cells:
                    rows.append(cells)
            if rows:
                blocks.append({"type": "table", "rows": rows, "chapter": current_chapter})
        elif name == "figure":
            blocks.append({"type": "figure", "html": sanitize_figure(node), "text": text, "chapter": current_chapter})

    for index, block in enumerate(blocks):
        block["sourceIndex"] = index

    return {
        "id": "frontier-review-html",
        "title": "全球文学研究前沿综述",
        "kind": "交互图表综述",
        "language": "zh-CN",
        "filename": HTML_PATH.name,
        "blocks": blocks,
    }


def source_chapter_stats(source: dict[str, Any]) -> dict[str, dict[str, int]]:
    stats: dict[str, Counter[str]] = defaultdict(Counter)
    for block in source["blocks"]:
        chapter = block.get("chapter")
        if chapter:
            stats[chapter][block["type"]] += 1
    return {chapter: dict(counter) for chapter, counter in stats.items()}


def chapter_blocks(source: dict[str, Any], chapter_id: str) -> list[dict[str, Any]]:
    return [block for block in source["blocks"] if block.get("chapter") == chapter_id]


def select_content(blocks: list[dict[str, Any]], block_type: str, minimum: int = 28) -> list[str]:
    values = []
    for block in blocks:
        if block["type"] != block_type:
            continue
        value = clean_text(block.get("text", ""))
        if len(value) >= minimum and value not in values:
            values.append(value)
    return values


def nearest_headings(blocks: list[dict[str, Any]], level: int | None = None) -> list[str]:
    values = []
    for block in blocks:
        if block["type"] != "heading" or (level and block.get("level") != level):
            continue
        value = re.sub(r"^(?:\d+(?:\.\d+)*|X\.\d+)\s*", "", block["text"]).strip(" ：:")
        if value and value not in values:
            values.append(value)
    return values


def evidence_record(block: dict[str, Any], text: str | None = None, row_index: int | None = None) -> dict[str, Any]:
    record = {
        "text": clean_text(text if text is not None else block.get("text", "")),
        "blockIndex": int(block.get("sourceIndex", -1)),
        "blockType": block["type"],
    }
    if row_index is not None:
        record["rowIndex"] = row_index
    return record


def meaningful_table_records(blocks: list[dict[str, Any]]) -> list[dict[str, Any]]:
    records: list[dict[str, Any]] = []
    for block in blocks:
        if block["type"] != "table":
            continue
        for row_index, row in enumerate(block.get("rows", [])):
            cells = [clean_text(cell) for cell in row if clean_text(cell)]
            joined = "｜".join(cells)
            if len(joined) < 18 or not re.search(r"[A-Za-z\u3400-\u9fff]", joined):
                continue
            if all(re.fullmatch(r"[\d\s.%％+\-—/]+", cell) for cell in cells):
                continue
            records.append(evidence_record(block, compact(joined, 170), row_index))
    return records


def section_content(blocks: list[dict[str, Any]], terms: list[str], limit: int = 8) -> list[str]:
    values: list[str] = []
    for index, block in enumerate(blocks):
        if block["type"] != "heading" or not any(term in block.get("text", "") for term in terms):
            continue
        base_level = int(block.get("level", 6))
        for candidate in blocks[index + 1:]:
            if candidate["type"] == "heading" and int(candidate.get("level", 6)) <= base_level:
                break
            if candidate["type"] not in {"heading", "list-item", "paragraph"}:
                continue
            value = clean_text(candidate.get("text", ""))
            if candidate["type"] == "heading":
                value = re.sub(r"^(?:\d+(?:\.\d+)*|X\.\d+)\s*", "", value).strip(" ：:")
            if len(value) >= 18 and value not in values:
                values.append(compact(value, 190))
            if len(values) >= limit:
                return values
    return values


def content_type_for(book: dict[str, Any]) -> str:
    if book["id"] == "frontier-paradigm-shifts":
        return "paradigm"
    if book["id"] == "frontier-methodology-map":
        return "method"
    if book["collection"] == "regions":
        return "regional-study"
    if book["collection"] == "synthesis":
        return "synthesis"
    if book["id"] == "crosscutting-frontiers":
        return "crosscutting"
    return "thematic-study"


def build_quiz(book: dict[str, Any], blocks: list[dict[str, Any]], all_books: list[dict[str, Any]]) -> list[dict[str, Any]]:
    headings = [evidence_record(block, re.sub(r"^(?:\d+(?:\.\d+)*|X\.\d+)\s*", "", block.get("text", "")).strip(" ：:"))
                for block in blocks if block["type"] == "heading" and int(block.get("level", 6)) >= 2]
    paragraphs = [evidence_record(block, compact(block.get("text", ""), 165))
                  for block in blocks if block["type"] == "paragraph" and len(clean_text(block.get("text", ""))) >= 45]
    list_items = [evidence_record(block, compact(block.get("text", ""), 165))
                  for block in blocks if block["type"] == "list-item" and len(clean_text(block.get("text", ""))) >= 20]
    tables = meaningful_table_records(blocks)
    fallback = headings or paragraphs or list_items
    if not fallback:
        raise ValueError(f"No traceable quiz evidence for {book['id']}")

    def choose(records: list[dict[str, Any]], terms: list[str] | None = None, offset: int = 0) -> dict[str, Any]:
        candidates = [record for record in records if not terms or any(term in record["text"] for term in terms)]
        return (candidates or records or fallback)[offset % len(candidates or records or fallback)]

    other_books = [candidate for candidate in all_books if candidate["id"] != book["id"]]
    other_lenses = [f"{candidate['title']}：{candidate['lens']}" for candidate in other_books]
    other_works = [work[0] for candidate in other_books for work in candidate["works"]]
    evidence = [
        choose(headings),
        choose(headings, ["方法", "工作流", "工具链", "规范", "协议", "研究设计"], 1),
        choose(paragraphs, offset=0),
        choose(headings, ["案例", "课题", "争论", "论战", "深描"], 2),
        choose(tables or list_items or paragraphs, offset=1),
        choose(list_items or paragraphs, offset=2),
        choose(headings, ["边界", "争论", "盲点", "不对称", "责任", "反证", "限制", "伦理"], 3),
        choose(paragraphs, offset=-1),
    ]
    prompts = [
        f"查阅《{book['title']}》的章节结构，哪一项是原典明确列出的核心议题？",
        f"在《{book['title']}》中，哪项方法、流程或报告规范被原典单列？",
        f"《{book['title']}》的论证材料直接支持下列哪项陈述？",
        f"《{book['title']}》把哪一项明确设为案例、课题或争论入口？",
        f"《{book['title']}》的表格或资料清单中实际出现了哪一组信息？",
        f"若按《{book['title']}》的原典要求开展研究，哪项证据动作可直接追溯？",
        f"《{book['title']}》在哪一处明确提示了边界、争论或责任问题？",
        f"《{book['title']}》结尾或综合段落最直接支持哪项判断？",
    ]
    distractors = [
        other_lenses[:3],
        ["先锁定结论，再删除不一致材料", "只保留模型得分，不记录语料版本", "把相关性直接改写成普遍因果律"],
        ["所有语言与地区天然共享同一证据制度", "作品销量可以替代文本与制度分析", "算法输出无需注明模型、日期或误差"],
        other_works[:3],
        ["封面颜色｜奖项数量｜作者星座", "销量排名｜影视热度｜情节梗概", "单一关键词｜无来源摘要｜确定性结论"],
        ["隐藏失败步骤以维持论证整齐", "删除反例并忽略材料取得方式", "用自动摘要替代原始文本核验"],
        ["本章认为任何方法都没有适用边界", "本章主张区域差异可以完全忽略", "本章允许把推测写成已证实事实"],
        ["文学研究只需追踪市场热度", "所有解释都可脱离媒介与制度", "单一案例足以证明全球普遍规律"],
    ]
    rationales = [
        "该条目是本章的显式结构标题，界定了核心问题。",
        "该条目可在本章的方法、流程或规范部分逐块复核。",
        "正确选项来自本章论证段落，而非站外概括。",
        "原典把该条目标记为可继续查证的案例、课题或争论节点。",
        "该信息来自本章实际表格片段或资料清单。",
        "该证据动作直接来自对应章节的步骤或材料要求。",
        "该条目明确限定了本章的解释边界与研究责任。",
        "该判断由章节后部的综合论证直接支持。",
    ]
    answer_targets = [value for _, value in sorted(
        enumerate([0, 0, 1, 1, 2, 2, 3, 3]),
        key=lambda item: hashlib.sha256(f"{book['id']}:answer-order:{item[0]}".encode("utf-8")).hexdigest(),
    )]

    questions: list[dict[str, Any]] = []
    for index, (prompt, record) in enumerate(zip(prompts, evidence)):
        correct = compact(record["text"], 170)
        options = [correct]
        for candidate in distractors[index]:
            candidate = compact(candidate, 170)
            if candidate and candidate not in options:
                options.append(candidate)
            if len(options) == 4:
                break
        while len(options) < 4:
            options.append(f"与《{book['title']}》原典无直接对应的概括 {len(options)}")
        wrong_options = sorted(options[1:], key=lambda option: hashlib.sha256(f"{book['id']}:{index}:{option}".encode("utf-8")).hexdigest())
        answer = answer_targets[index]
        options = wrong_options
        options.insert(answer, correct)
        source = {
            "sourceId": "panorama-docx", "chapterId": book["id"],
            "blockIndex": record["blockIndex"], "blockType": record["blockType"],
            "excerpt": correct,
        }
        if "rowIndex" in record:
            source["rowIndex"] = record["rowIndex"]
        questions.append({
            "question": prompt, "options": options, "answer": answer,
            "explain": f"{rationales[index]} 原典资料块 #{record['blockIndex'] + 1}：{correct}",
            "source": source, "rationale": rationales[index],
        })
    return questions


def fetch_portrait(query: str, filename: str) -> tuple[str, str] | None:
    target = PORTRAIT_DIR / filename
    meta_target = target.with_suffix(target.suffix + ".source")
    if target.exists() and target.stat().st_size > 1000:
        return f"assets/portraits/{target.name}", meta_target.read_text(encoding="utf-8") if meta_target.exists() else ""
    if os.environ.get("LITERARY_SKIP_PORTRAITS") == "1":
        return None
    endpoint = "https://en.wikipedia.org/api/rest_v1/page/summary/" + urllib.parse.quote(query.replace(" ", "_"))
    request = urllib.request.Request(endpoint, headers={"User-Agent": "LiteraryCosmosAtlas/1.0 (educational static archive)"})
    try:
        with urllib.request.urlopen(request, timeout=9) as response:
            payload = json.load(response)
        source = payload.get("thumbnail", {}).get("source") or payload.get("originalimage", {}).get("source")
        page = payload.get("content_urls", {}).get("desktop", {}).get("page", endpoint)
        if not source or "/wikipedia/commons/" not in source:
            return None
        image_request = urllib.request.Request(source, headers={"User-Agent": "LiteraryCosmosAtlas/1.0"})
        with urllib.request.urlopen(image_request, timeout=12) as response:
            target.write_bytes(response.read())
        meta_target.write_text(page, encoding="utf-8")
        return f"assets/portraits/{target.name}", page
    except Exception as exc:  # Network portraits are an enhancement; the catalog remains valid without them.
        print(f"portrait skipped: {query}: {exc}", file=sys.stderr)
        return None


def build_catalog(docx_source: dict[str, Any], html_source: dict[str, Any]) -> tuple[list[dict[str, Any]], dict[str, list[dict[str, Any]]]]:
    catalog = []
    question_bank: dict[str, list[dict[str, Any]]] = {}
    for index, seed in enumerate(BOOKS):
        blocks = chapter_blocks(docx_source, seed["id"])
        paragraphs = select_content(blocks, "paragraph", 48)
        list_items = select_content(blocks, "list-item", 24)
        headings = nearest_headings(blocks, 2)
        intro = compact((paragraphs or [f"本卷以{seed['lens']}为罗盘，重建{seed['title']}的研究问题、证据边界与案例路径。"])[0], 260)
        deep_dive = [compact(value, 430) for value in paragraphs[1:4]]
        while len(deep_dive) < 3:
            deep_dive.append(f"《{seed['title']}》把{seed['lens']}连接到具体材料、制度条件与区域差异，并要求研究者说明证据如何支持主张。")
        core_ideas = [compact(value, 190) for value in (list_items[:4] or headings[:4])]
        while len(core_ideas) < 4:
            core_ideas.append(f"把{seed['lens'].split(' · ')[len(core_ideas) % 3]}转化为可观察、可质疑的分析维度。")
        method_candidates = section_content(
            blocks,
            ["方法", "工作流", "工具链", "规范", "协议", "研究设计", "透明度", "复现", "伦理"],
            10,
        )
        operational_terms = ["材料", "语料", "样本", "步骤", "记录", "验证", "编码", "比较", "细读", "分析", "建模", "测量", "审计", "版本", "档案", "访谈", "实验", "复现", "标注", "追踪", "检验", "协作"]
        method_candidates = [value for value in method_candidates if any(term in value for term in operational_terms)]
        methods = [compact(value, 190) for value in method_candidates[:4]]
        defaults = ["说明研究问题、位置与材料取得方式。", "在细读、计算或实验之间建立尺度对应。", "用案例、反例与三角验证约束解释。", "公开不确定性、伦理边界与复现路径。"]
        methods.extend(defaults[len(methods):])
        if seed["id"] == "contemporary-debates":
            case_headings = [
                re.sub(r"^24\.\d+\s*", "", block["text"]).strip(" ：:")
                for block in blocks
                if block["type"] == "heading" and re.match(r"^24\.[1-6]\s", block.get("text", ""))
            ]
        else:
            case_headings = [
                re.sub(r"^(?:\d+(?:\.\d+)*|X\.\d+)\s*", "", block["text"]).strip(" ：:")
                for block in blocks
                if block["type"] == "heading" and (
                    re.search(r"案例\s*(?:[A-Z]{1,3}(?:-[A-Z])?|[：:])", block.get("text", ""), re.IGNORECASE)
                    or re.search(r"课题\s*\d+", block.get("text", ""))
                )
            ]
        cases = [compact(value, 210) for value in case_headings[:4]]
        if len(cases) < 4:
            table_rows = [record["text"] for record in meaningful_table_records(blocks) if record.get("rowIndex", 0) > 0]
            for value in table_rows:
                if value not in cases:
                    cases.append(value)
                if len(cases) == 4:
                    break
        while len(cases) < 4:
            work = seed["works"][len(cases) % len(seed["works"])]
            cases.append(f"以{work[0]}为材料，检验{seed['lens']}如何改变文本、媒介与制度之间的解释关系。")

        figures = []
        for figure_index, (query, name, role) in enumerate(seed["figures"]):
            slug = re.sub(r"[^a-z0-9]+", "-", query.lower()).strip("-")[:48]
            portrait = fetch_portrait(query, f"{slug}.jpg")
            figures.append({"name": name, "role": role, "image": portrait[0] if portrait else "", "source": portrait[1] if portrait else ""})

        works = [{"title": title, "author": author, "why": f"作为《{seed['title']}》的核心阅读入口，用来检验{seed['lens']}。"} for title, author in seed["works"]]
        html_count = len(chapter_blocks(html_source, seed["id"]))
        book = {
            "id": seed["id"], "title": seed["title"], "era": seed["era"], "region": seed["region"],
            "lens": seed["lens"], "palette": seed["palette"], "intro": intro,
            "door": f"打开这本书，你将进入《{seed['title']}》的证据星图：完整章节、图表、区域案例与可自动核对的研究测试在此展开。",
            "deepDive": deep_dive, "coreIdeas": core_ideas[:4], "method": methods[:4], "cases": cases[:4],
            "figures": figures, "works": works, "keywords": [term.strip() for term in seed["lens"].split("·")],
            "relations": seed["relations"], "collection": seed["collection"], "contentType": content_type_for(seed),
            "sourceChapter": seed["chapter"],
            "location": LOCATIONS.get(seed["id"]),
            "sourceStats": {"docxBlocks": len(blocks), "htmlBlocks": html_count},
            "i18n": {
                "en": {
                    "title": seed["titleEn"], "era": seed["era"], "region": seed["region"], "lens": seed["lens"],
                    "intro": f"A source-led atlas of {seed['titleEn']}, preserving the complete Chinese research chapter while mapping its evidence, methods, debates, and regional cases.",
                    "door": f"Open this volume to enter the evidence world of {seed['titleEn']}.",
                },
                "fr": {
                    "title": seed["titleFr"], "era": seed["era"], "region": seed["region"], "lens": seed["lens"],
                    "intro": f"Un atlas documentaire de {seed['titleFr']}, qui conserve le chapitre chinois intégral et cartographie ses preuves, méthodes, débats et cas régionaux.",
                    "door": f"Ouvrez ce volume pour entrer dans le monde documentaire de {seed['titleFr']}.",
                },
            },
        }
        catalog.append(book)
        question_bank[book["id"]] = build_quiz(book, blocks, BOOKS)
    return catalog, question_bank


def build_chapter_index(sources: list[dict[str, Any]], catalog: list[dict[str, Any]]) -> list[dict[str, Any]]:
    result = []
    records = [
        {"id": book["id"], "number": book["sourceChapter"], "title": book["title"],
         "collection": book["collection"], "contentType": book["contentType"]}
        for book in catalog
    ] + [
        {**supplement, "collection": "supplement", "contentType": "supplement"}
        for supplement in SUPPLEMENTS
    ]
    for record in records:
        source_ranges = []
        for source in sources:
            indices = [index for index, block in enumerate(source["blocks"]) if block.get("chapter") == record["id"]]
            if indices:
                source_ranges.append({"source": source["id"], "start": min(indices), "end": max(indices) + 1, "count": len(indices)})
        if source_ranges:
            result.append({**record, "sources": source_ranges})
    return result


def write_catalog_js(catalog: list[dict[str, Any]], question_bank: dict[str, list[dict[str, Any]]]) -> None:
    payload = json.dumps(catalog, ensure_ascii=False, separators=(",", ":"))
    labels = json.dumps(COLLECTION_LABELS, ensure_ascii=False, separators=(",", ":"))
    quizzes = json.dumps(question_bank, ensure_ascii=False, separators=(",", ":"))
    content = (
        "/* Generated by tools/build_research_atlas.py. */\n"
        f"window.LITERARY_FRONTIER_CATALOG={payload};\n"
        f"window.LITERARY_COLLECTION_LABELS={labels};\n"
        f"window.LITERARY_QUIZ_BANK={quizzes};\n"
    )
    (ROOT / "frontier-catalog.js").write_text(content, encoding="utf-8")


def validate_output(sources: list[dict[str, Any]], catalog: list[dict[str, Any]], question_bank: dict[str, list[dict[str, Any]]]) -> None:
    source_by_id = {source["id"]: source for source in sources}
    known_chapters = {book["id"] for book in catalog} | {supplement["id"] for supplement in SUPPLEMENTS}
    for source in sources:
        unmapped = [block["sourceIndex"] for block in source["blocks"] if block.get("chapter") not in known_chapters]
        if unmapped:
            raise ValueError(f"{source['id']} has unmapped blocks: {unmapped[:12]}")

    html_source = source_by_id["frontier-review-html"]
    for book in BOOKS:
        if book["chapter"] == "X":
            continue
        indices = [block["sourceIndex"] for block in html_source["blocks"] if block.get("chapter") == book["id"]]
        if not indices:
            raise ValueError(f"HTML chapter did not map: {book['id']}")
        if indices != list(range(min(indices), max(indices) + 1)):
            raise ValueError(f"HTML chapter is not contiguous: {book['id']}")

    docx_source = source_by_id["panorama-docx"]
    prompts: set[str] = set()
    answer_positions: Counter[int] = Counter()
    for book in catalog:
        questions = question_bank.get(book["id"], [])
        if len(questions) != 8:
            raise ValueError(f"{book['id']} does not have eight questions")
        per_book_positions = set()
        for question in questions:
            if question["question"] in prompts:
                raise ValueError(f"Duplicate quiz prompt: {question['question']}")
            prompts.add(question["question"])
            answer = int(question["answer"])
            if not 0 <= answer < len(question["options"]):
                raise ValueError(f"Invalid quiz answer: {book['id']}")
            per_book_positions.add(answer)
            answer_positions[answer] += 1
            citation = question.get("source", {})
            block_index = int(citation.get("blockIndex", -1))
            if citation.get("sourceId") != "panorama-docx" or not 0 <= block_index < len(docx_source["blocks"]):
                raise ValueError(f"Invalid quiz citation: {book['id']}")
            if docx_source["blocks"][block_index].get("chapter") != book["id"]:
                raise ValueError(f"Quiz citation chapter mismatch: {book['id']} #{block_index}")
        if len(per_book_positions) < 3:
            raise ValueError(f"Quiz answer positions are too predictable: {book['id']}")
    if set(answer_positions) != {0, 1, 2, 3}:
        raise ValueError(f"Quiz answer distribution incomplete: {dict(answer_positions)}")


def main() -> None:
    if not DOCX_PATH.exists() or not HTML_PATH.exists():
        raise SystemExit("Both editorial source files must be present in the project root.")
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    RESEARCH_DIR.mkdir(parents=True, exist_ok=True)
    PORTRAIT_DIR.mkdir(parents=True, exist_ok=True)

    for stale in RESEARCH_DIR.glob("source-figure-*"):
        stale.unlink()

    docx_source = extract_docx()
    html_source = extract_html()
    catalog, question_bank = build_catalog(docx_source, html_source)
    sources = [docx_source, html_source]
    validate_output(sources, catalog, question_bank)
    table_fragments = sum(sum(1 for block in source["blocks"] if block["type"] == "table") for source in sources)
    atlas = {
        "schemaVersion": 1,
        "title": "全球文学研究前沿资料星图",
        "sourceNotice": "本资料库完整保留两份用户提供的中文研究文档；二十六本研究卷连接对应章节，导读、附录、名录、数字资源与参考文献则作为独立补充节点开放。",
        "stats": {
            "books": len(catalog),
            "documents": len(sources),
            "blocks": sum(len(source["blocks"]) for source in sources),
            "paragraphs": sum(sum(1 for block in source["blocks"] if block["type"] == "paragraph") for source in sources),
            "tableFragments": table_fragments,
            "figures": sum(sum(1 for block in source["blocks"] if block["type"] in {"image", "figure"}) for source in sources),
            "questions": sum(len(items) for items in question_bank.values()),
        },
        "chapterIndex": build_chapter_index(sources, catalog),
        "sourceChapterStats": {source["id"]: source_chapter_stats(source) for source in sources},
        "questionBank": question_bank,
        "sources": sources,
    }
    (DATA_DIR / "research-atlas.json").write_text(json.dumps(atlas, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    write_catalog_js(catalog, question_bank)
    print(json.dumps(atlas["stats"], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
