const MOVEMENTS = [
  {
    id: "classical-poetics",
    title: "古典诗学",
    era: "古希腊至古罗马",
    region: "地中海",
    lens: "摹仿 · 净化 · 文类",
    palette: ["#e9f3f6", "#8fb7c7", "#75f5ff"],
    intro: "古典诗学把文学理解为对行动、伦理与秩序的摹仿。它关心悲剧为什么能打动观众、史诗如何组织英雄行动、文类怎样产生恰当的风格。",
    door: "打开这本书，你会进入戏剧、史诗和修辞构成的第一座理论剧场。",
    deepDive: [
      "亚里士多德的《诗学》并不是简单地说文学要复制现实，而是强调文学通过情节组织展示“可能发生之事”。因此，悲剧的核心不在人物性格的孤立展示，而在行动链条怎样引出恐惧、怜悯与净化。",
      "贺拉斯的“寓教于乐”把审美快感与伦理教化连接起来，形成后世古典主义对规范、比例、风格等级的长期迷恋。古典诗学也让文学研究获得了基本问题：文类是什么，情节如何运作，语言怎样产生说服力。"
    ],
    coreIdeas: [
      "摹仿不是机械复制，而是对行动结构和可能性的重新组织。",
      "悲剧效果来自情节的因果连贯、突转、发现与情感净化。",
      "文类有各自的体裁规则、风格尺度和接受期待。"
    ],
    method: [
      "先观察作品的文类契约：悲剧、史诗、讽刺、抒情各自要求怎样的节奏。",
      "再分析情节行动链：冲突如何被安排，突转和发现是否改变伦理判断。",
      "最后回到接受效果：文本让读者产生何种情感、判断和共同体想象。"
    ],
    cases: [
      "《俄狄浦斯王》：知识追寻最终变成自我揭示，突转与发现合一，悲剧力量来自行动逻辑的不可逆。",
      "《伊利亚特》：史诗不是事件堆叠，而是围绕愤怒、荣誉、死亡组织英雄世界的价值秩序。",
      "中国戏曲中的“大团圆”也可反向说明文类期待如何塑造情感出口。"
    ],
    figures: [
      { name: "亚里士多德", role: "《诗学》；摹仿、情节、净化", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Aristotle_Altemps_Inv8575.jpg?width=500" },
      { name: "贺拉斯", role: "《诗艺》；寓教于乐、风格适宜", image: "" },
      { name: "索福克勒斯", role: "悲剧实践的经典案例", image: "" }
    ],
    works: [
      { title: "《诗学》", author: "亚里士多德", why: "文学理论最早的系统文本之一。" },
      { title: "《诗艺》", author: "贺拉斯", why: "确立诗歌规范与审美教化的传统。" },
      { title: "《俄狄浦斯王》", author: "索福克勒斯", why: "悲剧情节分析的典范案例。" }
    ],
    keywords: ["mimesis", "catharsis", "mythos", "hamartia", "decorum"],
    relations: ["realism-naturalism", "chinese-poetics", "new-historicism"]
  },
  {
    id: "chinese-poetics",
    title: "中国诗学",
    era: "先秦至明清",
    region: "东亚",
    lens: "言志 · 意境 · 神韵",
    palette: ["#dcecf1", "#87cdbf", "#89f2c1"],
    intro: "中国诗学重视诗与心、气、景、境之间的生成关系。它不是只问文本模仿什么，而是问语言如何把情志、风骨、兴象与历史经验凝结成可感的境界。",
    door: "打开这本书，你会看到诗、画、史、人格修养之间的复杂回路。",
    deepDive: [
      "“诗言志”“兴观群怨”把文学放在伦理、政治和共同体情感之中；刘勰《文心雕龙》则以“文心”统摄体制、声律、风骨、神思，说明写作不是灵感偶然，而是才、气、学、识的组织。",
      "唐宋以后，意境、神韵、格调、性灵等范畴不断变化：王国维以“境界”重写传统诗学，让作品的价值取决于主体情感与世界景象是否互相照亮。"
    ],
    coreIdeas: [
      "文学不是孤立技巧，而是情志、人格、历史位置与语言声律的综合呈现。",
      "“意境”强调主客交融：景物不是装饰，而是情感结构的外化。",
      "传统诗学范畴常以隐喻方式运作，需要在文本细读中转换成可分析的问题。"
    ],
    method: [
      "观察作品的兴象：物象如何引发情感和历史联想。",
      "分析声律、句法、留白和典故如何共同制造“境”。",
      "把诗歌放回士人身份、政治处境、文体传统与阅读共同体中。"
    ],
    cases: [
      "杜甫《春望》：破碎山河与私人离愁并置，家国之痛通过景物密度而不是直接议论呈现。",
      "李清照词：日常物象、声律转折和女性主体经验共同构成细密的情感空间。",
      "鲁迅小说可与传统“文以载道”对读：启蒙叙事改变了文学承担公共批判的方式。"
    ],
    figures: [
      { name: "刘勰", role: "《文心雕龙》；风骨、神思、体性", image: "" },
      { name: "王国维", role: "《人间词话》；境界说", image: "" },
      { name: "鲁迅", role: "现代文学批判与叙事实践", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/LuXun1930.jpg/500px-LuXun1930.jpg" }
    ],
    works: [
      { title: "《文心雕龙》", author: "刘勰", why: "中国文论中体系性极强的经典。" },
      { title: "《人间词话》", author: "王国维", why: "以境界重构传统词学价值。" },
      { title: "《呐喊》", author: "鲁迅", why: "现代叙事与启蒙批判的核心文本。" }
    ],
    keywords: ["诗言志", "兴观群怨", "风骨", "意境", "神韵"],
    relations: ["classical-poetics", "romanticism", "modernism-symbolism"]
  },
  {
    id: "romanticism",
    title: "浪漫主义",
    era: "18世纪末至19世纪",
    region: "欧洲与美洲",
    lens: "想象力 · 崇高 · 主体",
    palette: ["#e9e9ff", "#9f8cff", "#9f8cff"],
    intro: "浪漫主义把文学推向主体、自然、想象力与反叛激情。它反对机械理性和僵化规则，强调诗人不是工匠，而是能重新感知世界的创造性心灵。",
    door: "打开这本书，你会进入风暴、废墟、山脉和自我意识交织的精神景观。",
    deepDive: [
      "浪漫主义不是单纯的多愁善感，而是现代主体在工业化、革命和世俗化时代重新寻找意义的文学运动。华兹华斯把普通生活提升为诗的对象，柯尔律治则强调想象力能综合感性经验与精神秩序。",
      "浪漫主义也制造了现代作家形象：孤独天才、反叛者、流亡者、自然的倾听者。它的遗产延伸到民族文学、哥特叙事、现代主义和生态批评。"
    ],
    coreIdeas: [
      "想象力不是逃避现实，而是重组现实经验的认识能力。",
      "崇高经验让主体面对超出理性把握的自然、死亡和无限。",
      "诗歌把个人情感转化为具有普遍共鸣的形式。"
    ],
    method: [
      "寻找作品中自然景象与主体内在状态的互文关系。",
      "分析叙述者如何把孤独、流亡、反叛变成审美姿态。",
      "注意作品如何批判工业化、功利主义和僵化社会秩序。"
    ],
    cases: [
      "《抒情歌谣集》：普通人物和日常语言被提升为诗的中心，改变了诗歌题材等级。",
      "《弗兰肯斯坦》：科学创造、责任伦理和孤独怪物共同构成浪漫主义对现代性的阴影想象。",
      "拜伦式英雄：反叛、罪感、魅力和自我毁灭成为现代文学人物原型。"
    ],
    figures: [
      { name: "华兹华斯", role: "自然、记忆与普通生活的诗学", image: "" },
      { name: "柯尔律治", role: "想象力理论与有机形式", image: "" },
      { name: "玛丽·雪莱", role: "哥特、科学伦理与现代神话", image: "" }
    ],
    works: [
      { title: "《抒情歌谣集》", author: "华兹华斯/柯尔律治", why: "英国浪漫主义宣言式文本。" },
      { title: "《弗兰肯斯坦》", author: "玛丽·雪莱", why: "科学现代性与怪物叙事的源头。" },
      { title: "《唐璜》", author: "拜伦", why: "反英雄、讽刺与浪漫主体的复杂结合。" }
    ],
    keywords: ["imagination", "sublime", "genius", "nature", "organic form"],
    relations: ["modernism-symbolism", "ecocriticism-world", "chinese-poetics"]
  },
  {
    id: "realism-naturalism",
    title: "现实主义",
    era: "19世纪",
    region: "全球现代小说",
    lens: "社会全景 · 典型 · 决定论",
    palette: ["#dbe7f0", "#7c95ad", "#75f5ff"],
    intro: "现实主义与自然主义把文学转向社会结构、阶级位置、历史环境和日常生活。小说成为观察现代社会的复杂仪器。",
    door: "打开这本书，你会进入城市、家庭、市场和欲望共同编织的社会剖面图。",
    deepDive: [
      "现实主义追求可置信的社会世界：人物不是抽象道德符号，而是被阶级、金钱、家庭、制度和欲望塑造的行动者。巴尔扎克、托尔斯泰、狄更斯等人的小说把社会关系变成叙事动力。",
      "自然主义进一步强调遗传、环境和社会条件对人的决定作用。左拉把小说比作实验室，试图观察人在压力系统中的行为。现实主义后来也被马克思主义批评吸收，用于讨论典型人物、总体性和历史矛盾。"
    ],
    coreIdeas: [
      "小说通过细节、场景和人物关系建构社会整体感。",
      "典型人物不是平均人，而是能集中显示历史矛盾的人物。",
      "自然主义强调环境、身体和制度对个体命运的压力。"
    ],
    method: [
      "绘制人物关系与资本、身份、制度之间的联系。",
      "分析叙述视角如何制造客观性、讽刺或道德距离。",
      "关注细节：物品、空间、职业和语言如何暴露社会结构。"
    ],
    cases: [
      "《高老头》：公寓空间浓缩巴黎社会等级，金钱逻辑侵入亲情伦理。",
      "《安娜·卡列尼娜》：婚姻、贵族秩序、农业改革和个人欲望构成多层现实。",
      "《萌芽》：矿工身体、劳动条件和阶级冲突展示自然主义的环境决定论。"
    ],
    figures: [
      { name: "巴尔扎克", role: "社会全景与人物谱系", image: "" },
      { name: "左拉", role: "自然主义实验小说", image: "" },
      { name: "托尔斯泰", role: "历史、伦理与家庭叙事", image: "" }
    ],
    works: [
      { title: "《高老头》", author: "巴尔扎克", why: "资本社会的人情与阶层剖面。" },
      { title: "《安娜·卡列尼娜》", author: "托尔斯泰", why: "现实主义复调结构的典范。" },
      { title: "《萌芽》", author: "左拉", why: "自然主义与劳动政治的代表作。" }
    ],
    keywords: ["typicality", "totality", "social detail", "environment", "determinism"],
    relations: ["marxism", "classical-poetics", "new-historicism"]
  },
  {
    id: "modernism-symbolism",
    title: "现代主义",
    era: "19世纪末至20世纪",
    region: "跨大西洋与全球现代性",
    lens: "断裂 · 意识流 · 象征",
    palette: ["#f0f2ff", "#aab1df", "#9f8cff"],
    intro: "现代主义面对都市化、战争、技术和信仰危机，以碎片、象征、意识流和形式实验重写经验。作品不再假装世界完整，而是让断裂本身成为形式。",
    door: "打开这本书，你会进入破碎时间、内心独白与隐秘象征构成的迷宫。",
    deepDive: [
      "象征主义认为语言不是透明窗口，而是暗示、音乐性和联想网络。现代主义继承这种不透明性，在乔伊斯、伍尔夫、艾略特、卡夫卡等人那里，叙事时间、主体边界和城市经验被彻底重组。",
      "现代主义的难读并非炫技，而是形式对现代经验的回应：战争让历史断裂，都市让感知加速，精神分析让自我变得不稳定，殖民现代性也让语言和身份发生错位。"
    ],
    coreIdeas: [
      "形式实验是现代经验的症状和诊断，而不是装饰。",
      "意识流和内心独白让主体时间取代线性情节。",
      "神话、典故和象征为破碎现代性提供临时秩序。"
    ],
    method: [
      "追踪时间结构：作品如何打乱顺序、记忆和当下。",
      "分析语言密度：重复、意象、典故和沉默如何生产意义。",
      "把形式实验放入战争、都市、性别和殖民现代性的背景。"
    ],
    cases: [
      "《到灯塔去》：家庭事件被意识流改写成时间、记忆与感知的波纹。",
      "《荒原》：碎片化引文把欧洲文明危机转化为文本拼贴。",
      "《变形记》：荒诞事件以冷静叙述呈现，现代劳动和家庭压力变成身体寓言。"
    ],
    figures: [
      { name: "弗吉尼亚·伍尔夫", role: "意识流、女性现代主义、时间感", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Virginia_Woolf_1927.jpg?width=500" },
      { name: "卡夫卡", role: "现代官僚制与荒诞寓言", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Kafka1906_cropped.jpg" },
      { name: "博尔赫斯", role: "迷宫、无限书写、元小说", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg?width=500" }
    ],
    works: [
      { title: "《到灯塔去》", author: "伍尔夫", why: "意识流与时间结构的典范。" },
      { title: "《荒原》", author: "艾略特", why: "现代主义碎片化诗学的高峰。" },
      { title: "《变形记》", author: "卡夫卡", why: "现代主体异化的核心寓言。" }
    ],
    keywords: ["fragment", "stream of consciousness", "symbol", "mythic method", "defamiliar time"],
    relations: ["romanticism", "psychoanalysis", "postmodernism"]
  },
  {
    id: "russian-formalism",
    title: "俄国形式主义",
    era: "1910s-1930s",
    region: "俄罗斯",
    lens: "陌生化 · 文学性 · 叙事结构",
    palette: ["#d8f6ff", "#4aa8c0", "#75f5ff"],
    intro: "俄国形式主义把文学研究从作者传记和思想内容中拉回形式本身：文学之所以是文学，在于它让语言变得可感、让日常经验重新陌生。",
    door: "打开这本书，你会进入由声音、节奏、装置和叙事程序构成的文学机械室。",
    deepDive: [
      "什克洛夫斯基提出“陌生化”：艺术通过延缓感知、扭曲熟悉事物，使我们重新看见世界。雅各布森则把文学性定义为语言功能的突出，使文本不只是传递信息，而是让语言自身成为事件。",
      "形式主义并不否认历史，而是先建立分析文学装置的工具：情节与故事、动机、节奏、声音、叙述视角。这些工具后来影响结构主义、叙事学和电影理论。"
    ],
    coreIdeas: [
      "文学性来自形式装置，而不只是主题或作者意图。",
      "陌生化让自动化感知重新变慢、变难、变清晰。",
      "故事是事件材料，情节是艺术组织方式。"
    ],
    method: [
      "找出文本中让语言异常显眼的地方：重复、押韵、断裂、变形。",
      "区分故事顺序和叙事呈现顺序。",
      "分析形式装置如何改变读者的感知速度。"
    ],
    cases: [
      "托尔斯泰描写战争时常用细节延迟英雄叙事，使宏大历史变成陌生的身体经验。",
      "侦探小说通过延迟信息重排故事与情节，让阅读变成推理机器。",
      "现代诗的断句和声音组织让语言不再透明。"
    ],
    figures: [
      { name: "维克托·什克洛夫斯基", role: "陌生化、艺术作为手法", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Viktor_Shklovsky.jpg" },
      { name: "罗曼·雅各布森", role: "文学性与语言功能", image: "" },
      { name: "米哈伊尔·巴赫金", role: "复调、对话性、狂欢化", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mikhail_bakhtin.jpg/500px-Mikhail_bakhtin.jpg" }
    ],
    works: [
      { title: "《作为手法的艺术》", author: "什克洛夫斯基", why: "陌生化理论的核心文本。" },
      { title: "《文学理论》", author: "埃亨鲍姆等", why: "形式主义方法的集合。" },
      { title: "《陀思妥耶夫斯基诗学问题》", author: "巴赫金", why: "复调小说理论的重要文本。" }
    ],
    keywords: ["ostranenie", "literariness", "fabula", "sjuzhet", "device"],
    relations: ["structuralism", "modernism-symbolism", "reader-response"]
  },
  {
    id: "psychoanalysis",
    title: "精神分析批评",
    era: "20世纪",
    region: "欧洲至全球",
    lens: "无意识 · 欲望 · 梦",
    palette: ["#ece7ff", "#8d77d8", "#9f8cff"],
    intro: "精神分析批评把文学视为欲望、压抑、梦、创伤和象征替代的场域。文本不只说它表面说的，还在裂缝中暴露无意识的逻辑。",
    door: "打开这本书，你会进入梦的剧场、家庭罗曼史和语言欲望的回声室。",
    deepDive: [
      "弗洛伊德为文学批评提供了梦的工作、俄狄浦斯情结、压抑、移置、凝缩等概念。文学作品可以被看作愿望满足，也可以被看作症状：它隐藏某些东西，同时又让被隐藏之物以变形方式返回。",
      "拉康把无意识结构化为语言，强调主体被能指链塑造。由此，精神分析批评不只是寻找作者童年，而是分析叙事、隐喻、重复和缺席如何围绕欲望组织文本。"
    ],
    coreIdeas: [
      "无意识通过梦、失误、重复和象征替代显现。",
      "文学人物的欲望常围绕缺失、禁忌和认同结构运作。",
      "文本自身也会“压抑”意义，并在细节处让意义返回。"
    ],
    method: [
      "追踪反复出现的意象、物件、场景和语误。",
      "分析欲望三角：主体想要什么，阻碍来自哪里，替代物是什么。",
      "区分作者心理传记、人物心理和文本无意识三种层面。"
    ],
    cases: [
      "《哈姆雷特》：延宕行动可被读作欲望、父权命令与罪感之间的冲突。",
      "哥特小说中的幽灵常是被压抑历史或家族秘密的回返。",
      "《到灯塔去》中母亲形象和时间断裂可进入创伤、记忆与欲望结构分析。"
    ],
    figures: [
      { name: "西格蒙德·弗洛伊德", role: "梦、无意识、俄狄浦斯结构", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sigmund_Freud_LIFE.jpg?width=500" },
      { name: "雅克·拉康", role: "能指链、镜像阶段、欲望", image: "" },
      { name: "朱莉娅·克里斯蒂娃", role: "卑贱、互文性、符号界", image: "" }
    ],
    works: [
      { title: "《梦的解析》", author: "弗洛伊德", why: "无意识阐释模型的源头。" },
      { title: "《精神分析四个基本概念》", author: "拉康", why: "语言化无意识的理论入口。" },
      { title: "《哈姆雷特》", author: "莎士比亚", why: "精神分析批评的经典案例场。" }
    ],
    keywords: ["unconscious", "repression", "desire", "dream-work", "symbolic"],
    relations: ["modernism-symbolism", "feminism-queer", "poststructuralism"]
  },
  {
    id: "marxism",
    title: "马克思主义批评",
    era: "19世纪至今",
    region: "全球",
    lens: "阶级 · 意识形态 · 总体性",
    palette: ["#e4eef2", "#7aa0a8", "#89f2c1"],
    intro: "马克思主义批评把文学放入生产方式、阶级关系、意识形态和历史矛盾中理解。文学不是现实之外的纯审美，而是社会关系的复杂折射与斗争场。",
    door: "打开这本书，你会进入资本、阶级、商品和叙事形式交错的历史机器。",
    deepDive: [
      "从马克思、恩格斯到卢卡奇、本雅明、阿尔都塞、詹明信，马克思主义批评不断更新文学与社会的关系。它既关注作品如何反映社会矛盾，也关注形式如何生产意识形态效果。",
      "卢卡奇强调现实主义能把个体命运放回社会总体；本雅明关注机械复制时代的艺术政治；詹明信则把形式视作历史无意识，主张“永远历史化”。"
    ],
    coreIdeas: [
      "文学形式与社会结构并非外在关系，形式本身包含历史压力。",
      "意识形态不是简单谎言，而是人们经验现实的想象结构。",
      "总体性要求把人物、叙事和风格放入资本与历史矛盾中。"
    ],
    method: [
      "识别文本中的劳动、阶级、商品、财产和制度关系。",
      "分析叙事如何自然化或暴露某种社会秩序。",
      "比较作品形式与历史阶段之间的对应、错位和抵抗。"
    ],
    cases: [
      "《雾都孤儿》：慈善叙事与贫困制度之间存在张力，儿童形象既揭露又调和社会矛盾。",
      "《高老头》：金钱作为社会关系的真实媒介，重写亲情、婚姻和身份。",
      "科幻小说常把资本主义扩张投射到星际、赛博空间或未来劳动体制中。"
    ],
    figures: [
      { name: "卡尔·马克思", role: "历史唯物主义、资本与意识形态", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx_001.jpg?width=500" },
      { name: "格奥尔格·卢卡奇", role: "总体性、典型、现实主义", image: "" },
      { name: "弗雷德里克·詹明信", role: "政治无意识、后现代主义", image: "" }
    ],
    works: [
      { title: "《政治无意识》", author: "詹明信", why: "把叙事形式读作历史符码。" },
      { title: "《历史与阶级意识》", author: "卢卡奇", why: "总体性理论的重要源头。" },
      { title: "《共产党宣言》", author: "马克思/恩格斯", why: "现代阶级叙事的理论底本。" }
    ],
    keywords: ["ideology", "class", "totality", "commodity", "historicism"],
    relations: ["realism-naturalism", "postcolonial", "new-historicism"]
  },
  {
    id: "structuralism",
    title: "结构主义",
    era: "1950s-1970s",
    region: "法国与全球理论",
    lens: "符号 · 差异 · 结构",
    palette: ["#e6f7fb", "#5fc7d5", "#75f5ff"],
    intro: "结构主义把文学视作符号系统的一部分。意义不是来自孤立词语或作者意图，而来自差异关系、叙事结构、文化代码和深层规则。",
    door: "打开这本书，你会进入由符号、神话、叙事功能和文化编码组成的蓝色机器。",
    deepDive: [
      "索绪尔语言学提出能指/所指、语言/言语、差异系统，为结构主义提供基础。列维-斯特劳斯将神话视为结构关系，巴特分析日常文化神话，托多罗夫、热奈特等人发展叙事学。",
      "结构主义的力量在于把个人作品放入系统中：民间故事、神话、小说、服装、广告都能被分析为符号关系。它的问题也在于容易低估历史变化和主体经验。"
    ],
    coreIdeas: [
      "意义来自符号之间的差异，而不是符号天然携带意义。",
      "文本表层变化背后可能存在稳定的叙事或文化结构。",
      "文学研究可以像语言学一样分析规则、关系和系统。"
    ],
    method: [
      "提取二元对立：自然/文化、男/女、中心/边缘、秩序/混乱。",
      "区分叙事层次、时间顺序、叙述频率和视角。",
      "寻找重复代码：角色功能、空间结构、文化神话。"
    ],
    cases: [
      "童话可被拆解为禁令、违禁、试炼、奖赏等功能序列。",
      "《神话学》把摔角、广告、食品等日常对象读作意识形态符号。",
      "侦探小说的谜题结构依赖信息延迟、线索编码和读者解码。"
    ],
    figures: [
      { name: "费迪南·德·索绪尔", role: "语言系统、能指与差异", image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Ferdinand_de_Saussure.jpg" },
      { name: "罗兰·巴特", role: "神话学、作者之死、文本性", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Roland_Barthes_1969.jpg/500px-Roland_Barthes_1969.jpg" },
      { name: "热拉尔·热奈特", role: "叙事时间、语态与聚焦", image: "" }
    ],
    works: [
      { title: "《普通语言学教程》", author: "索绪尔", why: "结构主义语言观的源头。" },
      { title: "《神话学》", author: "巴特", why: "文化符号分析的经典。" },
      { title: "《叙事话语》", author: "热奈特", why: "叙事学工具箱的重要文本。" }
    ],
    keywords: ["signifier", "code", "binary opposition", "narratology", "myth"],
    relations: ["russian-formalism", "poststructuralism", "reader-response"]
  },
  {
    id: "poststructuralism",
    title: "后结构主义",
    era: "1960s以后",
    region: "法国理论与全球人文",
    lens: "差延 · 权力 · 解构",
    palette: ["#e9e6ff", "#7564bf", "#9f8cff"],
    intro: "后结构主义继承结构主义的符号敏感，却反对结构的封闭稳定。意义不断延异，主体由话语塑造，文本内部总有无法被完全控制的裂缝。",
    door: "打开这本书，你会进入会自我拆解的迷宫：每条通道都通向另一个能指。",
    deepDive: [
      "德里达的解构不是随意破坏文本，而是阅读文本如何依赖它同时排斥的东西：中心依赖边缘，言说依赖书写，稳定意义依赖差异和延迟。福柯则把知识与权力联系起来，研究话语如何生产主体、正常性和制度边界。",
      "后结构主义改变了文学批评的问题：不再只问作品“真正意思”是什么，而问意义如何被生产、谁有权解释、哪些声音被排除、文本如何在自身逻辑中出现矛盾。"
    ],
    coreIdeas: [
      "意义不是抵达终点，而是在差异链中不断延迟。",
      "主体不是纯粹自主中心，而是在话语、制度和欲望中形成。",
      "解构阅读寻找文本维持自身秩序时无法消除的矛盾。"
    ],
    method: [
      "寻找文本中的等级对立：中心/边缘、原本/复制、理性/疯狂。",
      "观察被压低的一项如何支撑被抬高的一项。",
      "追踪话语规则：谁能说话，什么被视为真理，什么被排除。"
    ],
    cases: [
      "殖民文本中的“文明/野蛮”对立常暴露文明话语自身的暴力。",
      "疯癫、疾病、犯罪等形象可通过福柯式话语分析进入制度史。",
      "现代小说中的不可靠叙述者会让意义中心不断滑动。"
    ],
    figures: [
      { name: "雅克·德里达", role: "解构、差延、书写", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Derrida-by-Pablo-Secca.jpg" },
      { name: "米歇尔·福柯", role: "话语、权力、主体化", image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Michel_Foucault_1974_Brasil.jpg" },
      { name: "罗兰·巴特", role: "作者之死、可写文本", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Roland_Barthes_1969.jpg/500px-Roland_Barthes_1969.jpg" }
    ],
    works: [
      { title: "《论文字学》", author: "德里达", why: "解构与书写问题的核心文本。" },
      { title: "《规训与惩罚》", author: "福柯", why: "权力、身体与制度分析范本。" },
      { title: "《作者之死》", author: "巴特", why: "文本意义从作者中心移向阅读与语言。" }
    ],
    keywords: ["différance", "deconstruction", "discourse", "power", "subject"],
    relations: ["structuralism", "feminism-queer", "postcolonial"]
  },
  {
    id: "reader-response",
    title: "接受美学",
    era: "1960s-1980s",
    region: "德国、美国与全球阅读理论",
    lens: "读者 · 期待视野 · 空白",
    palette: ["#edf3f8", "#99b8d2", "#75f5ff"],
    intro: "接受美学和读者反应批评把意义从作者或文本内部移向阅读事件。作品不是静止物，而是在读者期待、空白填补和历史接受中不断生成。",
    door: "打开这本书，你会进入由读者目光点亮的文本星座。",
    deepDive: [
      "姚斯提出“期待视野”：作品进入文学史不是因为它孤立存在，而是因为它与某一时代读者的审美经验发生距离、冲击或更新。伊瑟强调文本空白，读者在阅读中不断补足、修正和重组意义。",
      "读者反应批评提醒我们：同一文本在不同时代、阶层、性别、文化中的意义会变化。文学史因此也是接受史、阐释共同体史和阅读制度史。"
    ],
    coreIdeas: [
      "意义发生在文本结构与读者活动之间。",
      "期待视野决定读者如何判断新作品的陌生与创新。",
      "文本空白不是缺陷，而是召唤读者参与的机制。"
    ],
    method: [
      "分析文本在哪里留下信息缺口、视角缺口和伦理判断缺口。",
      "比较作品初始接受与后世经典化过程。",
      "观察特定阐释共同体如何规范“正确阅读”。"
    ],
    cases: [
      "《红楼梦》的索隐、考证、女性主义、叙事学读法构成多重接受史。",
      "现代主义作品最初常被视为难懂，后来却成为审美创新的标志。",
      "网络文学的追更机制让读者反馈直接进入文本生产节奏。"
    ],
    figures: [
      { name: "汉斯·罗伯特·姚斯", role: "期待视野、接受史", image: "" },
      { name: "沃尔夫冈·伊瑟", role: "隐含读者、文本空白", image: "" },
      { name: "斯坦利·费什", role: "阐释共同体", image: "" }
    ],
    works: [
      { title: "《走向接受美学》", author: "姚斯", why: "接受史理论的入口。" },
      { title: "《阅读行为》", author: "伊瑟", why: "文本空白与隐含读者模型。" },
      { title: "《这班里有文本吗》", author: "费什", why: "阐释共同体的重要讨论。" }
    ],
    keywords: ["horizon of expectation", "implied reader", "gap", "interpretive community", "reception"],
    relations: ["structuralism", "russian-formalism", "new-historicism"]
  },
  {
    id: "feminism-queer",
    title: "女性主义",
    era: "20世纪至今",
    region: "全球",
    lens: "性别 · 身体 · 表演性",
    palette: ["#f0eaff", "#ba9fe8", "#9f8cff"],
    intro: "女性主义与酷儿理论追问文学如何生产性别、欲望、身体和规范。它不仅补回被排除的女性与少数主体，也重写“经典”“作者”“主体”的定义。",
    door: "打开这本书，你会进入被沉默者重新发声的文本空间。",
    deepDive: [
      "从伍尔夫的“自己的房间”到波伏瓦的“女人不是天生的”，女性主义批评揭示文学制度、教育资源和家庭结构如何塑造写作可能。后来的黑人女性主义、第三世界女性主义和交叉性理论进一步挑战单一女性经验。",
      "酷儿理论受福柯、巴特勒、塞奇威克影响，强调性别和性欲并非自然固定，而是在语言、制度、身体实践中被反复表演和规范化。文学因此成为规范与越界交锋的现场。"
    ],
    coreIdeas: [
      "性别是历史和制度生产的结构，不是自然事实的简单反映。",
      "经典文学史需要重新审视谁被纳入、谁被排除、谁被误读。",
      "表演性说明身份在重复实践中形成，也可在重复中被扰乱。"
    ],
    method: [
      "分析叙事声音、空间分配和身体描写中的性别权力。",
      "追踪女性写作、少数欲望和非规范亲密关系如何被编码。",
      "使用交叉性视角同时考察性别、阶级、种族、殖民和语言。"
    ],
    cases: [
      "《一间自己的房间》把写作能力与经济、空间、教育制度联系起来。",
      "《宠儿》把母职、奴隶制创伤和身体记忆交织，显示黑人女性主义批评的复杂性。",
      "《奥兰多》通过跨性别和跨时代叙事扰动稳定身份。"
    ],
    figures: [
      { name: "西蒙娜·德·波伏瓦", role: "第二性、性别建构", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Simone_de_Beauvoir2.png?width=500" },
      { name: "朱迪斯·巴特勒", role: "性别表演性、规范批判", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/JudithButler2013.jpg/500px-JudithButler2013.jpg" },
      { name: "托妮·莫里森", role: "种族、性别、记忆与叙事", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Toni_Morrison_2008-2.jpg?width=500" }
    ],
    works: [
      { title: "《第二性》", author: "波伏瓦", why: "现代女性主义理论经典。" },
      { title: "《性别麻烦》", author: "巴特勒", why: "酷儿理论和表演性理论核心文本。" },
      { title: "《宠儿》", author: "莫里森", why: "创伤、母职、种族和鬼魂叙事的复合案例。" }
    ],
    keywords: ["gender", "performativity", "body", "intersectionality", "normativity"],
    relations: ["poststructuralism", "psychoanalysis", "postcolonial"]
  },
  {
    id: "postcolonial",
    title: "后殖民批评",
    era: "1970s至今",
    region: "全球南方与帝国史",
    lens: "东方主义 · 混杂 · 底层",
    palette: ["#e8f5ee", "#76b69a", "#89f2c1"],
    intro: "后殖民批评研究帝国、殖民知识、语言、身份和抵抗如何进入文学。它追问谁被看见，谁被代表，谁有权讲述世界。",
    door: "打开这本书，你会进入帝国地图背后的声音、翻译和裂缝。",
    deepDive: [
      "赛义德的《东方学》揭示西方如何通过知识、艺术和文学制造“东方”形象，使其成为可被管理、凝视和支配的对象。斯皮瓦克追问底层能否发声，警惕知识分子替被压迫者说话时再度消音。",
      "霍米·巴巴提出混杂、拟态和第三空间，说明殖民关系不是单向压制，而是充满误读、重复、滑移和抵抗。后殖民文学常在语言转换、历史创伤和身份错位中写作。"
    ],
    coreIdeas: [
      "殖民不是过去事件，而是持续影响知识、语言和文化等级的结构。",
      "代表既是发声，也是权力：谁代表谁，如何代表，后果是什么。",
      "混杂身份能扰乱帝国中心的纯粹性神话。"
    ],
    method: [
      "分析文本如何建构他者：异域风景、身体、语言和宗教如何被编码。",
      "关注叙述权：谁讲故事，谁被翻译，谁被沉默。",
      "把文学与帝国档案、民族国家、移民和全球资本联系起来。"
    ],
    cases: [
      "《黑暗的心》既揭露帝国暴力，也可能继续把非洲作为欧洲自我危机的背景。",
      "《藻海无边》重写《简·爱》中被沉默的伯莎，让殖民女性主体进入中心。",
      "《瓦解》以伊博社会内部视角回应殖民叙事的单向凝视。"
    ],
    figures: [
      { name: "爱德华·赛义德", role: "东方主义、帝国文化", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Edward_Said.jpg/500px-Edward_Said.jpg" },
      { name: "霍米·巴巴", role: "混杂、拟态、第三空间", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Homi_K._Bhabha-cropd.jpg/500px-Homi_K._Bhabha-cropd.jpg" },
      { name: "奇努阿·阿切贝", role: "非洲小说与殖民叙事反写", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chinua_Achebe_-_Buffalo_25Sep2008_crop.jpg?width=500" }
    ],
    works: [
      { title: "《东方学》", author: "赛义德", why: "后殖民批评的奠基文本。" },
      { title: "《底层能说话吗？》", author: "斯皮瓦克", why: "代表与消音问题的关键文本。" },
      { title: "《瓦解》", author: "阿切贝", why: "殖民叙事反写的经典小说。" }
    ],
    keywords: ["Orientalism", "hybridity", "mimicry", "subaltern", "empire"],
    relations: ["marxism", "feminism-queer", "ecocriticism-world"]
  },
  {
    id: "new-historicism",
    title: "新历史主义",
    era: "1980s以后",
    region: "英美批评",
    lens: "权力 · 档案 · 文化能量",
    palette: ["#e4edf8", "#6d87a7", "#75f5ff"],
    intro: "新历史主义把文学与非文学文本放在同一文化网络中阅读。作品不是历史背景的装饰品，而是权力、欲望和社会能量流通的节点。",
    door: "打开这本书，你会进入档案、舞台、宫廷、殖民记录和流言共同构成的历史剧场。",
    deepDive: [
      "格林布拉特强调“社会能量的流通”：文学文本吸收、转换并重新释放一个时代的权力关系、仪式、恐惧和欲望。新历史主义受福柯影响，反对把历史当作稳定背景。",
      "它常通过轶事开场，把边缘档案、旅行记录、法律文件、医学文本与经典作品并读。这样做不是削弱文学，而是显示文学如何参与文化生产。"
    ],
    coreIdeas: [
      "历史不是客观背景，而是由话语、档案和权力关系构成。",
      "文学文本与法律、宗教、医学、旅行、戏剧等文本共同运作。",
      "经典作品既可能巩固权力，也可能暴露权力的裂缝。"
    ],
    method: [
      "选择一个与作品同代的非文学文本并置阅读。",
      "分析文本如何处理权力、身体、仪式、禁忌和他者。",
      "警惕把历史简化为因果解释，关注文化流通的复杂回路。"
    ],
    cases: [
      "莎士比亚戏剧可与王权仪式、殖民旅行记、魔法审判档案并读。",
      "文艺复兴自我塑造显示个人身份如何被宫廷、宗教和殖民话语生产。",
      "晚清小说可与报刊、法律改革和翻译制度并读，观察现代主体生成。"
    ],
    figures: [
      { name: "斯蒂芬·格林布拉特", role: "社会能量、文艺复兴自我塑造", image: "" },
      { name: "雷蒙德·威廉斯", role: "文化唯物主义、感觉结构", image: "" },
      { name: "米歇尔·福柯", role: "话语与权力史方法", image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Michel_Foucault_1974_Brasil.jpg" }
    ],
    works: [
      { title: "《文艺复兴自我塑造》", author: "格林布拉特", why: "新历史主义代表作。" },
      { title: "《莎士比亚的协商》", author: "格林布拉特", why: "社会能量概念的重要展开。" },
      { title: "《文化与社会》", author: "威廉斯", why: "文化唯物主义传统入口。" }
    ],
    keywords: ["archive", "discourse", "power", "cultural poetics", "social energy"],
    relations: ["marxism", "poststructuralism", "reader-response"]
  },
  {
    id: "postmodernism",
    title: "后现代主义",
    era: "1960s以后",
    region: "全球文化",
    lens: "元叙事 · 拼贴 · 拟像",
    palette: ["#ececff", "#7e8bd8", "#9f8cff"],
    intro: "后现代主义怀疑宏大叙事，偏爱拼贴、戏仿、互文、元小说和拟像。它把真实、复制、历史和消费文化之间的边界变得不稳定。",
    door: "打开这本书，你会进入镜子互相反射的图书馆：每本书都知道自己是一本书。",
    deepDive: [
      "利奥塔提出对宏大叙事的不信任，鲍德里亚讨论拟像和超真实，詹明信把后现代主义理解为晚期资本主义的文化逻辑。文学上，后现代文本常主动暴露自身建构过程。",
      "后现代主义不是简单玩梗，它把历史书写、真实性、作者权威和消费社会经验变成问题。元小说让叙事机器显形，拼贴让文化碎片共同发声，也可能暴露意义贫困。"
    ],
    coreIdeas: [
      "宏大叙事失去稳定权威，局部叙事和碎片经验上升。",
      "戏仿、拼贴和互文让文本成为文化碎片的再组合。",
      "拟像与超真实挑战原本/复制、真实/表演的区分。"
    ],
    method: [
      "观察文本如何暴露叙事规则、引用来源和作者位置。",
      "分析拼贴材料之间的冲突，而不是急于寻找统一主题。",
      "把形式游戏与消费文化、媒体环境和历史记忆联系起来。"
    ],
    cases: [
      "《如果在冬夜，一个旅人》让读者成为小说结构的一部分。",
      "博尔赫斯的虚构书评和无限图书馆把知识系统变成迷宫。",
      "品钦小说把阴谋、技术、战争和流行文化混合成后现代总体感。"
    ],
    figures: [
      { name: "让-弗朗索瓦·利奥塔", role: "宏大叙事的不信任", image: "" },
      { name: "让·鲍德里亚", role: "拟像、超真实", image: "" },
      { name: "博尔赫斯", role: "迷宫、元文本、无限书写", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg?width=500" }
    ],
    works: [
      { title: "《后现代状况》", author: "利奥塔", why: "后现代知识条件的理论文本。" },
      { title: "《拟像与仿真》", author: "鲍德里亚", why: "超真实和符号消费的关键文本。" },
      { title: "《小径分岔的花园》", author: "博尔赫斯", why: "元小说和无限叙事的经典。" }
    ],
    keywords: ["metanarrative", "pastiche", "simulacrum", "metafiction", "intertextuality"],
    relations: ["modernism-symbolism", "poststructuralism", "marxism"]
  },
  {
    id: "ecocriticism-world",
    title: "生态批评",
    era: "1990s至今",
    region: "全球环境人文",
    lens: "非人类 · 地方 · 人类世",
    palette: ["#e3f6ee", "#6fb69d", "#89f2c1"],
    intro: "生态批评把文学放入生命世界、环境正义、地方经验和人类世危机中理解。它追问文学如何想象人与非人类、地方与全球、灾难与未来。",
    door: "打开这本书，你会进入由河流、森林、城市污染和星球尺度时间组成的生态档案。",
    deepDive: [
      "早期生态批评关注自然书写和地方感，后来转向环境正义、后人类、物质生态批评、人类世叙事和世界文学中的气候想象。它把文学从人类中心主义中移开，重新分配叙事注意力。",
      "生态批评并不是让文学只歌颂自然，而是分析污染、殖民、资本、种族和物种关系如何进入文本。罗布·尼克松的“慢暴力”尤其适合读那些不以爆炸形式出现、却长期摧毁生活世界的灾难。"
    ],
    coreIdeas: [
      "非人类不是背景，而是与人类共同构成叙事世界的行动者。",
      "环境危机常以慢暴力形式发生，文学能让不可见的长期伤害可感。",
      "地方书写必须连接全球资本、殖民史和气候系统。"
    ],
    method: [
      "观察文本如何分配人类与非人类的叙事注意力。",
      "分析地方、气候、物质、污染和物种如何参与情节。",
      "把生态问题与阶级、殖民、性别和环境正义一起阅读。"
    ],
    cases: [
      "梭罗自然书写可与美国个人主义、地方感和生态伦理一起读。",
      "《寂静的春天》用文学性科学写作改变公共环境意识。",
      "气候小说通过未来灾难想象让读者感受地质尺度和政治责任。"
    ],
    figures: [
      { name: "蕾切尔·卡森", role: "环境写作与公共科学叙事", image: "" },
      { name: "劳伦斯·布尔", role: "环境想象、地方和自然书写", image: "" },
      { name: "蒂莫西·莫顿", role: "超物体、黑暗生态学", image: "" }
    ],
    works: [
      { title: "《寂静的春天》", author: "蕾切尔·卡森", why: "环境写作改变公共意识的经典。" },
      { title: "《环境想象》", author: "劳伦斯·布尔", why: "生态批评的重要理论入口。" },
      { title: "《缓慢的暴力》", author: "罗布·尼克松", why: "环境正义与全球南方视角。" }
    ],
    keywords: ["Anthropocene", "nonhuman", "place", "slow violence", "environmental justice"],
    relations: ["romanticism", "postcolonial", "marxism"]
  }
];

const state = {
  activeIndex: 0,
  worldOpen: false,
  sound: false
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function cssVarsFor(movement) {
  return `--book-a:${movement.palette[0]};--book-b:${movement.palette[1]};--book-glow:${movement.palette[2]};`;
}

function movementById(id) {
  return MOVEMENTS.find((item) => item.id === id) || MOVEMENTS[0];
}

function renderBooks() {
  const track = $("#bookTrack");
  track.innerHTML = MOVEMENTS.map((movement, index) => `
    <button class="book tilt-target${index === 0 ? " is-active" : ""}" type="button" data-open="${movement.id}" style="${cssVarsFor(movement)}">
      <p class="book__kicker">${String(index + 1).padStart(2, "0")} · ${movement.era}</p>
      <h3>${movement.title}</h3>
      <div class="book__footer">
        ${movement.keywords.slice(0, 3).map((keyword) => `<span>${keyword}</span>`).join("")}
      </div>
    </button>
  `).join("");
}

function renderArchive() {
  $("#archiveGrid").innerHTML = MOVEMENTS.map((movement) => `
    <button class="archive-card magnetic" type="button" data-open="${movement.id}" style="${cssVarsFor(movement)}">
      <span class="archive-card__meta">${movement.era} · ${movement.region}</span>
      <h3>${movement.title}</h3>
      <p>${movement.intro}</p>
    </button>
  `).join("");
}

function renderOrbitMap() {
  const map = $("#orbitMap");
  const center = { x: 50, y: 55 };
  const nodes = MOVEMENTS.map((movement, index) => {
    const angle = -Math.PI / 2 + index * (Math.PI * 2 / MOVEMENTS.length);
    const radiusX = index % 2 ? 33 : 39;
    const radiusY = index % 2 ? 26 : 33;
    return {
      movement,
      x: center.x + Math.cos(angle) * radiusX,
      y: center.y + Math.sin(angle) * radiusY
    };
  });

  const lineMarkup = nodes.map((node) => {
    const dx = node.x - center.x;
    const dy = node.y - center.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    return `<span class="orbit-line" style="left:${center.x}%;top:${center.y}%;width:${length}%;transform:rotate(${angle}deg)"></span>`;
  }).join("");

  const nodeMarkup = nodes.map(({ movement, x, y }) => `
    <button class="orbit-node magnetic" type="button" data-open="${movement.id}" style="left:${x}%;top:${y}%;${cssVarsFor(movement)}">${movement.title}</button>
  `).join("");

  map.innerHTML = `${lineMarkup}${nodeMarkup}`;
}

function setActiveBook(index) {
  const bounded = Math.max(0, Math.min(MOVEMENTS.length - 1, index));
  if (state.activeIndex === bounded) return;
  state.activeIndex = bounded;
  const active = MOVEMENTS[bounded];
  $("#activeIndex").textContent = String(bounded + 1).padStart(2, "0");
  $("#activeTitle").textContent = active.title;
  $("#activeMeta").textContent = active.lens;
  $$(".book").forEach((book, i) => book.classList.toggle("is-active", i === bounded));
}

function figureMarkup(figure) {
  const initial = figure.name.slice(0, 1);
  const image = figure.image
    ? `<img src="${figure.image}" alt="${figure.name} 肖像" loading="lazy" onerror="this.parentElement.classList.add('portrait-card--noimage');this.remove()">`
    : "";
  return `
    <div class="portrait-card tilt-target${figure.image ? "" : " portrait-card--noimage"}" data-initial="${initial}">
      ${image}
      <div class="portrait-card__body">
        <strong>${figure.name}</strong>
        <span>${figure.role}</span>
      </div>
    </div>
  `;
}

function openWorld(id) {
  const movement = movementById(id);
  const world = $("#world");
  const content = $("#worldContent");
  world.style.setProperty("--book-a", movement.palette[0]);
  world.style.setProperty("--book-b", movement.palette[1]);
  world.style.setProperty("--book-glow", movement.palette[2]);
  content.innerHTML = `
    <div class="world-hero">
      <div class="world-book-cover tilt-target" style="${cssVarsFor(movement)}">
        <p class="world-kicker">${movement.era} · ${movement.region}</p>
        <h2 id="worldTitle">${movement.title}</h2>
        <p>${movement.door}</p>
        <div class="world-tag-row">
          ${movement.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}
        </div>
      </div>
      <div class="world-pages">
        <section class="world-section">
          <h3>理论入口</h3>
          <p>${movement.intro}</p>
          ${movement.deepDive.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </section>
        <section class="world-section">
          <h3>核心命题</h3>
          <ul class="idea-list">${movement.coreIdeas.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="world-section">
          <h3>如何用它读文本</h3>
          <ol class="method-list">${movement.method.map((item) => `<li>${item}</li>`).join("")}</ol>
        </section>
        <section class="world-section">
          <h3>文本案例</h3>
          <ul class="case-list">${movement.cases.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="world-section">
          <h3>思想家与作家肖像</h3>
          <div class="portrait-grid">${movement.figures.map(figureMarkup).join("")}</div>
        </section>
        <section class="world-section">
          <h3>代表作品书封</h3>
          <div class="works-grid">
            ${movement.works.map((work) => `
              <div class="work-cover tilt-target" style="${cssVarsFor(movement)}">
                <small>${work.author}</small>
                <strong>${work.title}</strong>
                <span>${work.why}</span>
              </div>
            `).join("")}
          </div>
        </section>
        <section class="world-section">
          <h3>关联流派</h3>
          <div class="relation-row">
            ${movement.relations.map((relation) => {
              const target = movementById(relation);
              return `<button type="button" data-open="${target.id}">${target.title}</button>`;
            }).join("")}
          </div>
        </section>
      </div>
    </div>
  `;

  world.classList.add("is-open");
  world.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  state.worldOpen = true;

  if (window.gsap) {
    gsap.killTweensOf([".world__scrim", ".world__gate", ".world__panel"]);
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.set(".world__scrim", { autoAlpha: 0 })
      .set(".world__gate", { scaleX: 0, xPercent: 0 })
      .set(".world__panel", { autoAlpha: 0, y: 34, scale: 0.96 })
      .to(".world__scrim", { autoAlpha: 1, duration: 0.22 })
      .to(".world__gate", { scaleX: 1, duration: 0.48, stagger: 0.04 }, "<")
      .to(".world__gate--left", { xPercent: -100, duration: 0.62 }, "+=0.05")
      .to(".world__gate--right", { xPercent: 100, duration: 0.62 }, "<")
      .to(".world__panel", { autoAlpha: 1, y: 0, scale: 1, duration: 0.48 }, "-=0.34")
      .from(".world-section", { y: 24, autoAlpha: 0, stagger: 0.07, duration: 0.42, ease: "power2.out" }, "-=0.2");
  } else {
    $(".world__scrim").style.opacity = "1";
    $(".world__panel").style.opacity = "1";
  }

  setupTilt();
  setupOpenButtons(content);
}

function closeWorld() {
  const world = $("#world");
  if (!state.worldOpen) return;
  state.worldOpen = false;
  document.body.style.overflow = "";
  if (window.gsap) {
    gsap.to(".world__panel", { autoAlpha: 0, y: 28, scale: 0.98, duration: 0.22, ease: "power2.in" });
    gsap.to(".world__scrim", {
      autoAlpha: 0,
      duration: 0.24,
      delay: 0.12,
      onComplete: () => {
        world.classList.remove("is-open");
        world.setAttribute("aria-hidden", "true");
      }
    });
  } else {
    world.classList.remove("is-open");
    world.setAttribute("aria-hidden", "true");
  }
}

function setupOpenButtons(root = document) {
  $$("[data-open]", root).forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openWorld(button.dataset.open);
      if (window.anime) {
        anime({
          targets: button,
          scale: [1, 0.96, 1.04, 1],
          duration: 540,
          easing: "easeOutElastic(1, .5)"
        });
      }
    });
  });
}

function setupTilt(root = document) {
  $$(".tilt-target", root).forEach((card) => {
    if (card.dataset.tiltReady) return;
    card.dataset.tiltReady = "true";
    const image = $("img", card);
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      if (window.gsap) {
        gsap.to(card, {
          rotationY: x * 14,
          rotationX: y * -12,
          z: 18,
          transformPerspective: 900,
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto"
        });
        if (image) {
          gsap.to(image, { x: x * 12, y: y * 10, duration: 0.3, ease: "power2.out", overwrite: "auto" });
        }
      }
    });
    card.addEventListener("mouseleave", () => {
      if (window.gsap) {
        gsap.to(card, { rotationX: 0, rotationY: 0, z: 0, duration: 0.5, ease: "elastic.out(1, .45)" });
        if (image) gsap.to(image, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, .45)" });
      }
    });
  });
}

function setupMagnetic() {
  $$(".magnetic").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (!window.anime) return;
      anime.remove(el);
      anime({ targets: el, scale: [1, 1.045, 1], duration: 620, easing: "easeOutElastic(1, .45)" });
    });
  });
}

function initStars() {
  const canvas = $("#starCanvas");
  const ctx = canvas.getContext("2d");
  let stars = [];
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: Math.round(window.innerWidth / 7) }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.2,
      p: Math.random() * Math.PI * 2,
      s: Math.random() * 0.9 + 0.2
    }));
  };
  const draw = (time = 0) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach((star) => {
      const alpha = 0.25 + Math.sin(time / 1000 * star.s + star.p) * 0.25;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(210, 238, 255, ${Math.max(0.08, alpha)})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };
  resize();
  draw();
  window.addEventListener("resize", resize);
}

function initThreeCosmos() {
  const canvas = $("#cosmosCanvas");
  const stage = $("#heroStage");
  if (!canvas || !window.THREE) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
  if (THREE.ACESFilmicToneMapping) {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.78;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.4, 8);

  const group = new THREE.Group();
  scene.add(group);

  const ambient = new THREE.AmbientLight(0x91b8da, 0.58);
  const sun = new THREE.DirectionalLight(0xddefff, 1.28);
  sun.position.set(-4.8, 1.5, 3.1);
  const rim = new THREE.PointLight(0x75f5ff, 1.25, 20);
  rim.position.set(2.4, 2.5, 4.8);
  scene.add(ambient, sun, rim);

  const textureLoader = new THREE.TextureLoader();
  const loadTexture = (src) => {
    const texture = textureLoader.load(src);
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
    if (THREE.sRGBEncoding && !src.includes("specular")) texture.encoding = THREE.sRGBEncoding;
    return texture;
  };
  const earthDay = loadTexture("./assets/earth-day.jpg");
  const earthNight = loadTexture("./assets/earth-night.jpg");
  const earthClouds = loadTexture("./assets/earth-clouds.png");
  const earthSpecular = loadTexture("./assets/earth-specular.jpg");

  const sphereGeometry = new THREE.SphereGeometry(1.58, 96, 96);
  const earthMaterial = new THREE.MeshPhongMaterial({
    map: earthDay,
    specularMap: earthSpecular,
    shininess: 8,
    specular: new THREE.Color(0x1d4e63),
    emissive: new THREE.Color(0x061321),
    emissiveIntensity: 0.035
  });
  const globe = new THREE.Mesh(sphereGeometry, earthMaterial);
  globe.rotation.y = -0.45;
  group.add(globe);

  const nightMaterial = new THREE.MeshBasicMaterial({
    map: earthNight,
    transparent: true,
    opacity: 0.16,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const nightLights = new THREE.Mesh(sphereGeometry, nightMaterial);
  nightLights.scale.setScalar(1.006);
  nightLights.rotation.y = globe.rotation.y;
  group.add(nightLights);

  const cloudMaterial = new THREE.MeshPhongMaterial({
    map: earthClouds,
    transparent: true,
    opacity: 0.26,
    depthWrite: false
  });
  const clouds = new THREE.Mesh(sphereGeometry, cloudMaterial);
  clouds.scale.setScalar(1.018);
  clouds.rotation.y = globe.rotation.y + 0.18;
  group.add(clouds);

  const atmosphereMaterial = new THREE.ShaderMaterial({
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    uniforms: {
      glowColor: { value: new THREE.Color(0x75f5ff) },
      intensity: { value: 0.55 }
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      uniform float intensity;
      varying vec3 vNormal;
      void main() {
        float rim = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(glowColor, rim * intensity);
      }
    `
  });
  const atmosphere = new THREE.Mesh(sphereGeometry, atmosphereMaterial);
  atmosphere.scale.setScalar(1.13);
  group.add(atmosphere);

  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x9f8cff, transparent: true, opacity: 0.5 });
  const ringOne = new THREE.Mesh(new THREE.TorusGeometry(2.08, 0.012, 16, 180), ringMaterial);
  ringOne.rotation.x = Math.PI / 2.8;
  const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(2.45, 0.01, 16, 180), ringMaterial.clone());
  ringTwo.rotation.x = Math.PI / 2;
  ringTwo.rotation.y = Math.PI / 5;
  group.add(ringOne, ringTwo);

  const bookMaterial = new THREE.MeshStandardMaterial({ color: 0xeaf4f8, roughness: 0.5, metalness: 0.08 });
  const accentMaterial = new THREE.MeshStandardMaterial({ color: 0x75f5ff, roughness: 0.4, metalness: 0.15, emissive: 0x0d4d58, emissiveIntensity: 0.4 });
  const satellites = new THREE.Group();
  for (let i = 0; i < 13; i += 1) {
    const book = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.5, 0.07), i % 3 === 0 ? accentMaterial : bookMaterial);
    const angle = i / 13 * Math.PI * 2;
    book.position.set(Math.cos(angle) * 2.7, Math.sin(angle) * 1.18, Math.sin(angle) * 0.5);
    book.rotation.set(Math.sin(angle), angle, Math.cos(angle));
    satellites.add(book);
  }
  group.add(satellites);

  const starGeometry = new THREE.BufferGeometry();
  const starPositions = [];
  for (let i = 0; i < 420; i += 1) {
    starPositions.push((Math.random() - 0.5) * 11, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8);
  }
  starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));
  const starPoints = new THREE.Points(
    starGeometry,
    new THREE.PointsMaterial({ color: 0xdff8ff, size: 0.018, transparent: true, opacity: 0.75 })
  );
  scene.add(starPoints);

  let lit = false;
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  };

  const animate = () => {
    requestAnimationFrame(animate);
    group.rotation.y += lit ? 0.006 : 0.0025;
    group.rotation.x = Math.sin(performance.now() / 2300) * 0.08;
    globe.rotation.y += lit ? 0.0065 : 0.0028;
    nightLights.rotation.y = globe.rotation.y;
    clouds.rotation.y += lit ? 0.008 : 0.0038;
    atmosphere.rotation.y = globe.rotation.y;
    satellites.rotation.z -= lit ? 0.012 : 0.006;
    starPoints.rotation.y += 0.0009;
    rim.intensity += ((lit ? 3.35 : 1.25) - rim.intensity) * 0.06;
    nightMaterial.opacity += ((lit ? 0.44 : 0.16) - nightMaterial.opacity) * 0.06;
    cloudMaterial.opacity += ((lit ? 0.42 : 0.26) - cloudMaterial.opacity) * 0.05;
    atmosphereMaterial.uniforms.intensity.value += ((lit ? 1.12 : 0.55) - atmosphereMaterial.uniforms.intensity.value) * 0.06;
    ringMaterial.opacity += ((lit ? 0.92 : 0.5) - ringMaterial.opacity) * 0.06;
    renderer.render(scene, camera);
  };

  const sparkle = (event) => {
    const rect = stage.getBoundingClientRect();
    const dot = document.createElement("i");
    dot.className = "spark";
    dot.style.left = `${event.clientX - rect.left}px`;
    dot.style.top = `${event.clientY - rect.top}px`;
    stage.appendChild(dot);
    if (window.anime) {
      anime({
        targets: dot,
        translateX: () => anime.random(-34, 34),
        translateY: () => anime.random(-34, 34),
        scale: [0.2, 1.2, 0],
        opacity: [0, 1, 0],
        duration: 900,
        easing: "easeOutQuart",
        complete: () => dot.remove()
      });
    } else {
      setTimeout(() => dot.remove(), 900);
    }
  };

  let lastSpark = 0;
  stage.addEventListener("pointerenter", () => {
    lit = true;
    stage.classList.add("is-lit");
  });
  stage.addEventListener("pointerleave", () => {
    lit = false;
    stage.classList.remove("is-lit");
  });
  stage.addEventListener("pointermove", (event) => {
    const now = performance.now();
    if (now - lastSpark > 80) {
      lastSpark = now;
      sparkle(event);
    }
  });

  resize();
  animate();
  window.addEventListener("resize", resize);
}

function initScrollAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power2.out", duration: 0.6 });

  const mm = gsap.matchMedia();
  mm.add({
    isDesktop: "(min-width: 721px)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }, (context) => {
    const { reduceMotion } = context.conditions;
    if (reduceMotion) return;

    gsap.from(".hero__copy > *", {
      y: 28,
      autoAlpha: 0,
      stagger: 0.08,
      duration: 0.82,
      ease: "power3.out"
    });
    gsap.from(".hero-book", {
      y: 38,
      rotation: 0,
      autoAlpha: 0,
      stagger: 0.12,
      duration: 1,
      ease: "elastic.out(1, .55)"
    });

    const track = $("#bookTrack");
    const scrollDistance = () => Math.max(1200, track.scrollWidth - window.innerWidth + 420);
    const scrollTween = gsap.to(track, {
      x: () => -Math.max(0, track.scrollWidth - window.innerWidth + 120),
      ease: "none",
      scrollTrigger: {
        trigger: ".library",
        pin: ".library__pin",
        start: "top top",
        end: () => `+=${scrollDistance()}`,
        scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (MOVEMENTS.length - 1));
          setActiveBook(index);
        }
      }
    });

    gsap.to(".hero__stage", {
      y: -80,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    ScrollTrigger.batch(".archive-card", {
      start: "top 82%",
      onEnter: (batch) => gsap.fromTo(batch, { y: 34, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.55 }),
      once: true
    });

    ScrollTrigger.create({
      trigger: ".atlas",
      start: "top 65%",
      onEnter: () => {
        gsap.from(".orbit-node", { scale: 0.2, autoAlpha: 0, stagger: { each: 0.035, from: "center" }, duration: 0.8, ease: "elastic.out(1, .6)" });
        gsap.from(".orbit-line", { scaleX: 0, autoAlpha: 0, stagger: 0.012, duration: 0.65, transformOrigin: "left center" });
      },
      once: true
    });

    return () => {
      scrollTween.kill();
    };
  });

  ScrollTrigger.create({
    start: 80,
    end: "max",
    onUpdate: (self) => $("#siteHeader").classList.toggle("is-compact", self.scroll() > 80)
  });
}

function bindGlobalEvents() {
  $("#startButton").addEventListener("click", () => {
    const preloader = $("#preloader");
    if (window.gsap) {
      gsap.timeline({
        onComplete: () => {
          preloader.remove();
        }
      })
        .to(".preloader__aperture", { scale: 5.8, opacity: 0.32, duration: 0.9, ease: "power4.inOut" })
        .to(".preloader__mark", { y: -70, autoAlpha: 0, duration: 0.32 }, "<")
        .to(".start-button", { y: 40, autoAlpha: 0, duration: 0.28 }, "<")
        .to(preloader, { autoAlpha: 0, duration: 0.45 }, "-=0.1");
    } else {
      preloader.remove();
    }
  });

  $("#openFeatured").addEventListener("click", () => openWorld("modernism-symbolism"));
  $$("[data-close-world]").forEach((el) => el.addEventListener("click", closeWorld));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeWorld();
  });
  $("#soundToggle").addEventListener("click", () => {
    state.sound = !state.sound;
    $("#soundToggle").classList.toggle("is-on", state.sound);
    if (window.anime) {
      anime({ targets: "#soundToggle", rotate: [0, 8, -8, 0], duration: 420, easing: "easeOutElastic(1, .5)" });
    }
  });
}

function init() {
  renderBooks();
  renderArchive();
  renderOrbitMap();
  setupOpenButtons();
  setupTilt();
  setupMagnetic();
  initStars();
  initThreeCosmos();
  bindGlobalEvents();
  initScrollAnimations();
}

document.addEventListener("DOMContentLoaded", init);
