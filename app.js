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
  currentWorldId: null,
  language: "zh",
  sound: true,
  audioContext: null
};

let cosmosController = null;

const UI_COPY = {
  zh: {
    documentTitle: "文学理论宇宙 | The Literary Cosmos",
    documentDescription: "以书本、星图和滚动叙事构成的全球文学理论交互档案。",
    gateAria: "欧洲古典图书馆入口",
    gateCanvasAria: "可滚动开启的古典图书馆大门",
    gateTitle: "文学理论宇宙",
    gateLead: "滑动鼠标，推开古典图书馆的宏伟大门。",
    gateButton: "推开大门",
    gateScrollHint: "滑动开启图书馆",
    languageAria: "网页语言",
    brandAria: "回到开场",
    navAria: "页面导航",
    soundAria: "切换界面声效",
    cosmosAria: "旋转的文学星仪",
    clockAria: "星盘实时时钟",
    hotspotsAria: "图中理论书籍入口",
    hotspotClassical: "打开古典诗学",
    hotspotRealism: "打开现实主义",
    hotspotRomanticism: "打开浪漫主义",
    hotspotModernism: "打开现代主义",
    hotspotPoststructuralism: "打开后结构主义",
    brandTitle: "文学理论宇宙",
    brandSubtitle: "The Literary Cosmos",
    navLibrary: "书架轨道",
    navAtlas: "星图索引",
    navArchive: "思想档案",
    heroOverline: "GLOBAL LITERARY THEORY ATLAS",
    heroTitle: "每一本流派，都是一扇世界之门。",
    heroLead: "你已进入一座会呼吸的文学图书馆。真实地球缓慢旋转，十六本理论之书沿轨道漂移：近处的书脊放大成入口，远处的书影退入星尘。",
    heroPrimary: "进入书架轨道",
    heroSecondary: "打开今日之书",
    libraryOverline: "SCROLLING BOOKSHELF",
    libraryTitle: "滚动书架：每本书都是一个理论世界",
    atlasOverline: "CONSTELLATION INDEX",
    atlasTitle: "星图索引：理论如何彼此牵引",
    archiveOverline: "KNOWLEDGE ARCHIVE",
    archiveTitle: "思想档案：主要命题、读法与文本案例",
    railAria: "书架浏览状态",
    railPrev: "上一本文学理论书",
    railNext: "下一本文学理论书",
    theoryEntry: "理论入口",
    coreIdeas: "核心命题",
    method: "如何用它读文本",
    cases: "文本案例",
    figures: "思想家与作家肖像",
    works: "代表作品书封",
    relations: "关联流派",
    quizTitle: "理论测试题库",
    quizIntro: "完成全部题目后会自动核对答案，适合快速检查是否真正进入这本书的阅读方法。",
    quizSubmit: "提交核对",
    quizWaiting: "等待作答",
    researchDepth: "研究纵深",
    sourceDossier: "研究档案与开放资源",
    readRoute: "深读路线",
    fieldQuestions: "可追问的问题",
    sourceTrail: "开放来源",
    genealogy: "谱系位置",
    analysisFocus: "分析焦点",
    caseAdvance: "案例推进",
    relationPath: "关联路径",
    portraitAlt: "肖像",
    graphLegend: "理论关系图例",
    tooltipMoonTitle: "月球星战模拟舱",
    tooltipMoonSubtitle: "公转轨道上的隐藏游戏入口",
    tooltipMoonHint: "点击进入可玩战斗航道",
    tooltipLocationHint: "点击从地理现场进入理论世界",
    worldAria: "理论世界详情",
    worldClose: "关闭",
    worldCloseAria: "关闭理论世界",
    quizUnanswered: "这一题还没有作答。",
    quizCorrect: "答对了",
    quizReview: "需要再看一遍",
    quizPartial: "已答 {answered}/{total}，还差 {left} 题。",
    quizComplete: "核对完成：{correct}/{total} 题正确。{message}",
    quizPerfect: "你已经掌握这本书的主航道。",
    quizRetry: "建议回到核心命题和文本案例再扫一遍。",
    quizCoreQuestion: "{title}最核心的理论入口是什么？",
    quizMethodQuestion: "使用{title}读一部作品时，第一步更接近哪种做法？",
    quizCaseQuestion: "下列哪一项最适合作为{title}的文本案例？",
    quizRelationQuestion: "{title}在星图中最直接牵引到哪一类相邻理论？",
    quizWrongBio: "把作品意义完全还原为作者生平轶事。",
    quizWrongDate: "只比较作品出版年代，暂时不看文本内部。",
    quizWrongTransparent: "把文学作品当作没有历史和语言差异的透明故事。",
    quizWrongScore: "先为作品打分，再寻找支持分数的证据。",
    quizWrongTheme: "跳过语言细节，只提炼一个抽象主题。",
    quizWrongMetadata: "只查作者国籍和书名，避免进入段落结构。",
    quizWrongMarket: "把所有文学作品都简化为市场销量排行榜。",
    quizWrongCover: "只讨论封面颜色，不进入叙事和语言。",
    quizWrongContext: "完全删除时代语境，只保留人物姓名。",
    quizWrongNoRelation: "与任何理论都没有关系。",
    quizWrongScience: "只与自然科学实验方法相连。",
    quizRelationExplain: "{title}与{related}相连，可以帮助比较概念迁移、方法差异和历史连续性。",
    gameAria: "月球星战模拟舱",
    gameMountAria: "可游玩的月球星战小游戏",
    gameTitle: "月球远征舰队",
    gameSubtitle: "LUNAR SQUADRON · THREE WAVE CAMPAIGN",
    gameScoreLabel: "得分",
    gameWaveLabel: "波次",
    gameHullLabel: "舰体",
    gameEnergyLabel: "能量",
    gameComboLabel: "连击",
    gameSkillLabel: "技能",
    gameReady: "就绪",
    gameBack: "返回星图",
    gameBriefingTitle: "驾驶舱指令",
    gameKeyMove: "移动",
    gameKeyFire: "开火",
    gameKeyNova: "星环爆发",
    gameKeyLance: "离子光矛",
    gameKeyRift: "时间裂隙",
    gameKeyFocus: "精密闪避",
    gameBossCore: "核心",
    gameTouchAria: "移动端战机控制",
    touchFireAria: "开火",
    touchNovaAria: "释放星环爆发",
    touchLanceAria: "释放离子光矛",
    touchRiftAria: "释放时间裂隙",
    touchFire: "开火",
    touchNova: "星环",
    touchLance: "光矛",
    touchRift: "裂隙",
    gameStatusBoot: "舰队启动：月球航道正在校准。",
    gameWave1Label: "月面巡逻圈",
    gameWave1Objective: "击落 18 架侦察机，收集任意升级。",
    gameWave2Label: "碎星带突围",
    gameWave2Objective: "击落 26 架护卫机，避开陨石潮。",
    gameWave3Label: "轨道母舰决战",
    gameWave3Objective: "摧毁母舰核心，完成通关。",
    gameMissionPrefix: "任务 {wave}: {objective}",
    gameBossStatus: "母舰核心已进入轨道。Shift 星环清弹，E 离子光矛破盾，Q 时间裂隙减速弹幕。",
    gameWeaponStatus: "武器升级：书页激光已扩展。",
    gameRepairStatus: "修复完成：舰体装甲恢复。",
    gameOverdriveStatus: "过载启动：短时间双倍伤害。",
    gameNovaStatus: "星环爆发：清空弹幕并击穿近距离目标。",
    gameLanceStatus: "离子光矛：贯穿前方航道并削弱母舰核心。",
    gameRiftStatus: "时间裂隙：敌机和弹幕进入慢速区。",
    gameSkillNoEnergy: "能量不足，继续击落目标或收集升级。",
    gameSkillCooling: "技能仍在冷却。",
    gameMissionCompleteStatus: "通关完成：月球远征舰队已守住文学星图航道。按 R 可重新挑战。",
    gameMissionCompleteBanner: "MISSION COMPLETE\n月球航道已净空",
    gameFailedStatus: "舰体失守。按 R 重新部署，或返回星图。",
    gameFailedBanner: "MISSION FAILED\n按 R 重新挑战"
  },
  en: {
    documentTitle: "Literary Theory Cosmos | The Literary Cosmos",
    documentDescription: "An interactive global archive of literary theory built from books, star maps and scroll-driven storytelling.",
    gateAria: "European classical library entrance",
    gateCanvasAria: "Classical library gate opened by scrolling",
    gateTitle: "Literary Theory Cosmos",
    gateLead: "Scroll or swipe to open the monumental doors of the old library.",
    gateButton: "Open The Gate",
    gateScrollHint: "SCROLL TO OPEN THE LIBRARY",
    languageAria: "Website language",
    brandAria: "Return to opening scene",
    navAria: "Page navigation",
    soundAria: "Toggle interface sound",
    cosmosAria: "Rotating literary astrolabe",
    clockAria: "Real-time astrolabe chronometer",
    hotspotsAria: "Theory book entrances in the scene",
    hotspotClassical: "Open Classical Poetics",
    hotspotRealism: "Open Realism",
    hotspotRomanticism: "Open Romanticism",
    hotspotModernism: "Open Modernism",
    hotspotPoststructuralism: "Open Poststructuralism",
    brandTitle: "Literary Theory Cosmos",
    brandSubtitle: "The Literary Cosmos",
    navLibrary: "Book Orbit",
    navAtlas: "Theory Map",
    navArchive: "Archive",
    heroOverline: "GLOBAL LITERARY THEORY ATLAS",
    heroTitle: "Every movement is a book; every book opens a world.",
    heroLead: "Enter a breathing literary observatory. The real Earth turns slowly while sixteen theory volumes drift in orbit: near books swell into portals, distant spines recede into stardust.",
    heroPrimary: "Enter Book Orbit",
    heroSecondary: "Open Today’s Book",
    libraryOverline: "SCROLLING BOOKSHELF",
    libraryTitle: "Scrolling Bookshelf: Every Volume Is A Theory World",
    atlasOverline: "CONSTELLATION INDEX",
    atlasTitle: "Constellation Index: How Theories Pull On One Another",
    archiveOverline: "KNOWLEDGE ARCHIVE",
    archiveTitle: "Knowledge Archive: Claims, Methods And Textual Cases",
    railAria: "Bookshelf browsing status",
    railPrev: "Previous theory book",
    railNext: "Next theory book",
    theoryEntry: "Theory Gateway",
    coreIdeas: "Core Claims",
    method: "How To Read With It",
    cases: "Textual Cases",
    figures: "Thinkers And Writers",
    works: "Representative Works",
    relations: "Related Movements",
    quizTitle: "Theory Quiz Bank",
    quizIntro: "Answer all questions and the site checks them automatically, so you can test whether you have entered this book’s method.",
    quizSubmit: "Check Answers",
    quizWaiting: "Waiting for answers",
    researchDepth: "Research Depth",
    sourceDossier: "Research Dossier And Open Sources",
    readRoute: "Reading Route",
    fieldQuestions: "Questions To Pursue",
    sourceTrail: "Open Sources",
    genealogy: "Genealogical Position",
    analysisFocus: "Analytical Focus",
    caseAdvance: "Case Work",
    relationPath: "Linked Pathways",
    portraitAlt: "portrait",
    graphLegend: "Theory relation legend",
    tooltipMoonTitle: "Lunar Squadron Simulator",
    tooltipMoonSubtitle: "Hidden game entrance on the lunar orbit",
    tooltipMoonHint: "Click to enter the playable battle route",
    tooltipLocationHint: "Click to enter the theory world from its geographic scene",
    worldAria: "Theory world details",
    worldClose: "Close",
    worldCloseAria: "Close theory world",
    quizUnanswered: "This question has not been answered yet.",
    quizCorrect: "Correct",
    quizReview: "Review this",
    quizPartial: "{answered}/{total} answered; {left} remaining.",
    quizComplete: "Checked: {correct}/{total} correct. {message}",
    quizPerfect: "You have mastered the main route through this book.",
    quizRetry: "Return to the core claims and cases, then try again.",
    quizCoreQuestion: "What is the central gateway into {title}?",
    quizMethodQuestion: "When reading a work through {title}, which first move is strongest?",
    quizCaseQuestion: "Which option best works as a textual case for {title}?",
    quizRelationQuestion: "Which neighboring theory does {title} most directly pull toward?",
    quizWrongBio: "Reduce the work’s meaning entirely to biographical anecdotes.",
    quizWrongDate: "Compare only publication dates and avoid the text itself.",
    quizWrongTransparent: "Treat literary works as transparent stories without linguistic or historical difference.",
    quizWrongScore: "Score the work first, then hunt for evidence to justify the score.",
    quizWrongTheme: "Skip linguistic detail and extract a single abstract theme.",
    quizWrongMetadata: "Check only nationality and title, avoiding paragraph structure.",
    quizWrongMarket: "Reduce all literary works to a sales ranking.",
    quizWrongCover: "Discuss only the cover color without entering narration or language.",
    quizWrongContext: "Erase historical context and keep only character names.",
    quizWrongNoRelation: "It has no relation to any other theory.",
    quizWrongScience: "It connects only to natural-science experiment.",
    quizRelationExplain: "{title} links with {related}, helping compare conceptual migration, method difference and historical continuity.",
    gameAria: "Lunar squadron battle simulator",
    gameMountAria: "Playable lunar squadron mini-game",
    gameTitle: "Lunar Expedition Squadron",
    gameSubtitle: "LUNAR SQUADRON · THREE WAVE CAMPAIGN",
    gameScoreLabel: "Score",
    gameWaveLabel: "Wave",
    gameHullLabel: "Hull",
    gameEnergyLabel: "Energy",
    gameComboLabel: "Combo",
    gameSkillLabel: "Skills",
    gameReady: "Ready",
    gameBack: "Back To Star Map",
    gameBriefingTitle: "Cockpit Commands",
    gameKeyMove: "Move",
    gameKeyFire: "Fire",
    gameKeyNova: "Nova Ring",
    gameKeyLance: "Ion Lance",
    gameKeyRift: "Time Rift",
    gameKeyFocus: "Precision Dodge",
    gameBossCore: "CORE",
    gameTouchAria: "Mobile starfighter controls",
    touchFireAria: "Fire",
    touchNovaAria: "Cast Nova Ring",
    touchLanceAria: "Cast Ion Lance",
    touchRiftAria: "Cast Time Rift",
    touchFire: "Fire",
    touchNova: "Nova",
    touchLance: "Lance",
    touchRift: "Rift",
    gameStatusBoot: "Squadron launch: lunar route calibration in progress.",
    gameWave1Label: "Moon Patrol Ring",
    gameWave1Objective: "Destroy 18 scouts and collect any upgrade.",
    gameWave2Label: "Asteroid Belt Breakout",
    gameWave2Objective: "Destroy 26 escorts and survive the asteroid tide.",
    gameWave3Label: "Orbital Dreadnought Duel",
    gameWave3Objective: "Destroy the mothership core and clear the campaign.",
    gameMissionPrefix: "Mission {wave}: {objective}",
    gameBossStatus: "Mothership core entering orbit. Shift clears barrages, E pierces shields, Q slows bullets.",
    gameWeaponStatus: "Weapon upgrade: page lasers expanded.",
    gameRepairStatus: "Repair complete: hull armor restored.",
    gameOverdriveStatus: "Overdrive engaged: temporary double damage.",
    gameNovaStatus: "Nova Ring released: bullets cleared and nearby targets fractured.",
    gameLanceStatus: "Ion Lance fired: forward lane pierced and boss core weakened.",
    gameRiftStatus: "Time Rift opened: enemy craft and bullets slowed.",
    gameSkillNoEnergy: "Energy is low. Destroy targets or collect upgrades.",
    gameSkillCooling: "Skill still cooling down.",
    gameMissionCompleteStatus: "Campaign complete: the lunar squadron has secured the literary star map. Press R to replay.",
    gameMissionCompleteBanner: "MISSION COMPLETE\nLunar route cleared",
    gameFailedStatus: "Hull breached. Press R to redeploy, or return to the star map.",
    gameFailedBanner: "MISSION FAILED\nPress R to retry"
  },
  fr: {
    documentTitle: "Cosmos de la théorie littéraire | The Literary Cosmos",
    documentDescription: "Archive interactive mondiale de la théorie littéraire, composée de livres, de cartes stellaires et de récit au défilement.",
    gateAria: "Entrée de bibliothèque classique européenne",
    gateCanvasAria: "Grande porte de bibliothèque ouverte par le défilement",
    gateTitle: "Cosmos de la théorie littéraire",
    gateLead: "Faites défiler ou glissez pour ouvrir les grandes portes de l’ancienne bibliothèque.",
    gateButton: "Ouvrir la porte",
    gateScrollHint: "FAITES DÉFILER POUR OUVRIR",
    languageAria: "Langue du site",
    brandAria: "Revenir à la scène d’ouverture",
    navAria: "Navigation de page",
    soundAria: "Activer ou couper les sons",
    cosmosAria: "Astrolabe littéraire en rotation",
    clockAria: "Chronomètre astrolabe en temps réel",
    hotspotsAria: "Entrées des livres théoriques dans la scène",
    hotspotClassical: "Ouvrir la poétique classique",
    hotspotRealism: "Ouvrir le réalisme",
    hotspotRomanticism: "Ouvrir le romantisme",
    hotspotModernism: "Ouvrir le modernisme",
    hotspotPoststructuralism: "Ouvrir le poststructuralisme",
    brandTitle: "Cosmos de la théorie littéraire",
    brandSubtitle: "The Literary Cosmos",
    navLibrary: "Orbite des livres",
    navAtlas: "Carte théorique",
    navArchive: "Archive",
    heroOverline: "ATLAS MONDIAL DE LA THÉORIE LITTÉRAIRE",
    heroTitle: "Chaque courant est un livre; chaque livre ouvre un monde.",
    heroLead: "Entrez dans un observatoire littéraire vivant. La Terre réelle tourne lentement tandis que seize volumes théoriques dérivent en orbite: les livres proches deviennent des portails, les dos lointains se retirent dans la poussière d’étoiles.",
    heroPrimary: "Entrer dans l’orbite",
    heroSecondary: "Ouvrir le livre du jour",
    libraryOverline: "BIBLIOTHÈQUE DÉFILANTE",
    libraryTitle: "Bibliothèque défilante: chaque volume est un monde théorique",
    atlasOverline: "INDEX CONSTELLÉ",
    atlasTitle: "Index constellé: comment les théories s’attirent",
    archiveOverline: "ARCHIVE DU SAVOIR",
    archiveTitle: "Archive du savoir: thèses, méthodes et cas textuels",
    railAria: "État de navigation dans la bibliothèque",
    railPrev: "Livre théorique précédent",
    railNext: "Livre théorique suivant",
    theoryEntry: "Porte théorique",
    coreIdeas: "Thèses essentielles",
    method: "Lire avec cette théorie",
    cases: "Cas textuels",
    figures: "Penseurs et écrivains",
    works: "Œuvres représentatives",
    relations: "Courants associés",
    quizTitle: "Banque de quiz théoriques",
    quizIntro: "Répondez à toutes les questions; le site les corrige automatiquement pour vérifier votre entrée dans la méthode du livre.",
    quizSubmit: "Vérifier",
    quizWaiting: "En attente de réponses",
    researchDepth: "Profondeur de recherche",
    sourceDossier: "Dossier de recherche et sources ouvertes",
    readRoute: "Parcours de lecture",
    fieldQuestions: "Questions à poursuivre",
    sourceTrail: "Sources ouvertes",
    genealogy: "Position généalogique",
    analysisFocus: "Foyer d’analyse",
    caseAdvance: "Travail sur les cas",
    relationPath: "Passages liés",
    portraitAlt: "portrait",
    graphLegend: "Légende des relations théoriques",
    tooltipMoonTitle: "Simulateur d’escadron lunaire",
    tooltipMoonSubtitle: "Entrée de jeu cachée sur l’orbite lunaire",
    tooltipMoonHint: "Cliquez pour entrer dans la route de bataille jouable",
    tooltipLocationHint: "Cliquez pour entrer dans le monde théorique depuis son lieu",
    worldAria: "Détails du monde théorique",
    worldClose: "Fermer",
    worldCloseAria: "Fermer le monde théorique",
    quizUnanswered: "Cette question n’a pas encore de réponse.",
    quizCorrect: "Correct",
    quizReview: "À revoir",
    quizPartial: "{answered}/{total} réponses; {left} restantes.",
    quizComplete: "Correction terminée: {correct}/{total} correctes. {message}",
    quizPerfect: "Vous maîtrisez la route principale de ce livre.",
    quizRetry: "Revenez aux thèses et aux cas, puis réessayez.",
    quizCoreQuestion: "Quelle est la porte d’entrée centrale de {title}?",
    quizMethodQuestion: "Pour lire une œuvre avec {title}, quel premier geste est le plus juste?",
    quizCaseQuestion: "Quelle option constitue le meilleur cas textuel pour {title}?",
    quizRelationQuestion: "Vers quelle théorie voisine {title} attire-t-il le plus directement?",
    quizWrongBio: "Réduire le sens de l’œuvre à des anecdotes biographiques.",
    quizWrongDate: "Comparer seulement les dates de publication en évitant le texte.",
    quizWrongTransparent: "Traiter les œuvres comme des récits transparents sans différence linguistique ou historique.",
    quizWrongScore: "Noter l’œuvre d’abord, puis chercher des preuves pour justifier la note.",
    quizWrongTheme: "Sauter les détails linguistiques pour extraire un thème abstrait unique.",
    quizWrongMetadata: "Vérifier seulement la nationalité et le titre, sans entrer dans les paragraphes.",
    quizWrongMarket: "Réduire toutes les œuvres littéraires à un classement des ventes.",
    quizWrongCover: "Discuter seulement la couleur de couverture sans lire récit ni langue.",
    quizWrongContext: "Effacer le contexte historique et garder seulement les noms.",
    quizWrongNoRelation: "Il n’a aucun lien avec une autre théorie.",
    quizWrongScience: "Il ne se relie qu’à l’expérimentation scientifique.",
    quizRelationExplain: "{title} se relie à {related}, ce qui aide à comparer migration des concepts, différences de méthode et continuité historique.",
    gameAria: "Simulateur de bataille d’escadron lunaire",
    gameMountAria: "Mini-jeu jouable d’escadron lunaire",
    gameTitle: "Escadron d’expédition lunaire",
    gameSubtitle: "ESCADRON LUNAIRE · CAMPAGNE EN TROIS VAGUES",
    gameScoreLabel: "Score",
    gameWaveLabel: "Vague",
    gameHullLabel: "Coque",
    gameEnergyLabel: "Énergie",
    gameComboLabel: "Combo",
    gameSkillLabel: "Compétences",
    gameReady: "Prêt",
    gameBack: "Retour à la carte",
    gameBriefingTitle: "Commandes du cockpit",
    gameKeyMove: "Déplacer",
    gameKeyFire: "Tirer",
    gameKeyNova: "Anneau nova",
    gameKeyLance: "Lance ionique",
    gameKeyRift: "Faille temporelle",
    gameKeyFocus: "Esquive précise",
    gameBossCore: "CŒUR",
    gameTouchAria: "Contrôles mobiles du chasseur",
    touchFireAria: "Tirer",
    touchNovaAria: "Lancer l’anneau nova",
    touchLanceAria: "Lancer la lance ionique",
    touchRiftAria: "Ouvrir la faille temporelle",
    touchFire: "Tir",
    touchNova: "Nova",
    touchLance: "Lance",
    touchRift: "Faille",
    gameStatusBoot: "Lancement de l’escadron: calibration de la route lunaire.",
    gameWave1Label: "Anneau de patrouille lunaire",
    gameWave1Objective: "Détruisez 18 éclaireurs et collectez une amélioration.",
    gameWave2Label: "Percée de la ceinture d’astéroïdes",
    gameWave2Objective: "Détruisez 26 escortes et survivez à la marée d’astéroïdes.",
    gameWave3Label: "Duel du cuirassé orbital",
    gameWave3Objective: "Détruisez le cœur du vaisseau-mère et terminez la campagne.",
    gameMissionPrefix: "Mission {wave}: {objective}",
    gameBossStatus: "Le cœur du vaisseau-mère entre en orbite. Shift nettoie, E perce les boucliers, Q ralentit les tirs.",
    gameWeaponStatus: "Amélioration d’arme: lasers de pages étendus.",
    gameRepairStatus: "Réparation terminée: blindage restauré.",
    gameOverdriveStatus: "Surpuissance engagée: dégâts doublés temporairement.",
    gameNovaStatus: "Anneau nova libéré: tirs effacés et cibles proches fracturées.",
    gameLanceStatus: "Lance ionique tirée: couloir percé et cœur affaibli.",
    gameRiftStatus: "Faille temporelle ouverte: ennemis et projectiles ralentis.",
    gameSkillNoEnergy: "Énergie faible. Détruisez des cibles ou collectez des améliorations.",
    gameSkillCooling: "Compétence encore en recharge.",
    gameMissionCompleteStatus: "Campagne terminée: l’escadron lunaire sécurise la carte littéraire. Appuyez sur R pour rejouer.",
    gameMissionCompleteBanner: "MISSION ACCOMPLIE\nRoute lunaire nettoyée",
    gameFailedStatus: "Coque percée. Appuyez sur R pour redéployer, ou revenez à la carte.",
    gameFailedBanner: "MISSION ÉCHOUÉE\nAppuyez sur R"
  }
};

const FIGURE_IMAGES = {
  "贺拉斯": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/%28contorniate_M%C3%A9daillon_Horace_Rome_%28...%29Horace_%280065-0008_btv1b11343890r_1_%28cropped%29.jpg/330px-%28contorniate_M%C3%A9daillon_Horace_Rome_%28...%29Horace_%280065-0008_btv1b11343890r_1_%28cropped%29.jpg",
  "索福克勒斯": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sophocles_pushkin.jpg/330px-Sophocles_pushkin.jpg",
  "王国维": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%E7%8E%8B%E5%9C%8B%E7%B6%AD.jpg/330px-%E7%8E%8B%E5%9C%8B%E7%B6%AD.jpg",
  "华兹华斯": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Wordsworth_on_Helvellyn_by_Benjamin_Robert_Haydon.jpg/330px-Wordsworth_on_Helvellyn_by_Benjamin_Robert_Haydon.jpg",
  "柯尔律治": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Samuel_Taylor_Coleridge_at_age_42.jpg/330px-Samuel_Taylor_Coleridge_at_age_42.jpg",
  "玛丽·雪莱": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mary_Wollstonecraft_Shelley_Rothwell.tif/lossy-page1-330px-Mary_Wollstonecraft_Shelley_Rothwell.tif.jpg",
  "巴尔扎克": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/%E5%A5%A5%C2%B7%E5%B7%B4%E5%B0%94%E6%89%8E%E5%85%8B.png/330px-%E5%A5%A5%C2%B7%E5%B7%B4%E5%B0%94%E6%89%8E%E5%85%8B.png",
  "左拉": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Nadar_%28atelier_de%29_-_Emile_Zola%2C_13-556535.jpg/330px-Nadar_%28atelier_de%29_-_Emile_Zola%2C_13-556535.jpg",
  "托尔斯泰": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Leo_Tolstoy_1908_Portrait_%283x4_cropped%29.jpg/330px-Leo_Tolstoy_1908_Portrait_%283x4_cropped%29.jpg",
  "罗曼·雅各布森": "https://commons.wikimedia.org/wiki/Special:FilePath/Roman_Jakobson.jpg?width=500",
  "雅克·拉康": "https://commons.wikimedia.org/wiki/Special:FilePath/Jacques_Lacan.jpg?width=500",
  "朱莉娅·克里斯蒂娃": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Julia_Kristeva_%C3%A0_Paris_en_2008.jpg/330px-Julia_Kristeva_%C3%A0_Paris_en_2008.jpg",
  "格奥尔格·卢卡奇": "https://commons.wikimedia.org/wiki/Special:FilePath/Luk%C3%A1cs_Gy%C3%B6rgy.jpg?width=500",
  "弗雷德里克·詹明信": "https://commons.wikimedia.org/wiki/Special:FilePath/Fredric_Jameson_2012.jpg?width=500",
  "热拉尔·热奈特": "https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%A9rard_Genette.jpg?width=500",
  "汉斯·罗伯特·姚斯": "https://commons.wikimedia.org/wiki/Special:FilePath/Hans_Robert_Jauss.jpg?width=500",
  "沃尔夫冈·伊瑟": "",
  "斯坦利·费什": "https://commons.wikimedia.org/wiki/Special:FilePath/Stanley_Fish.jpg?width=500",
  "斯蒂芬·格林布拉特": "https://commons.wikimedia.org/wiki/Special:FilePath/Stephen_Greenblatt_2004.jpg?width=500",
  "雷蒙德·威廉斯": "https://commons.wikimedia.org/wiki/Special:FilePath/Raymond_Williams.jpg?width=500",
  "让-弗朗索瓦·利奥塔": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jean-Francois_Lyotard_cropped.jpg/330px-Jean-Francois_Lyotard_cropped.jpg",
  "让·鲍德里亚": "https://upload.wikimedia.org/wikipedia/commons/e/ef/WikipediaBaudrillard20040612-cropped.png",
  "蕾切尔·卡森": "https://commons.wikimedia.org/wiki/Special:FilePath/Rachel-Carson.jpg?width=500",
  "劳伦斯·布尔": "https://commons.wikimedia.org/wiki/Special:FilePath/Lawrence_Buell.jpg?width=500",
  "蒂莫西·莫顿": "https://commons.wikimedia.org/wiki/Special:FilePath/Timothy_Morton.png?width=500",
  "拜伦": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Byron_1813_by_Phillips.jpg/330px-Byron_1813_by_Phillips.jpg",
  "狄更斯": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/330px-Dickens_Gurney_head.jpg",
  "艾略特": "https://commons.wikimedia.org/wiki/Special:FilePath/T._S._Eliot%2C_1923.JPG?width=500",
  "乔伊斯": "https://commons.wikimedia.org/wiki/Special:FilePath/James_Joyce_by_Alex_Ehrenzweig%2C_1915.jpg?width=500",
  "本雅明": "https://commons.wikimedia.org/wiki/Special:FilePath/Walter_Benjamin_1928.jpg?width=500",
  "列维-斯特劳斯": "https://commons.wikimedia.org/wiki/Special:FilePath/Levi-strauss_260.jpg?width=500",
  "沃尔特·惠特曼": "https://commons.wikimedia.org/wiki/Special:FilePath/Walt_Whitman_edit_2.jpg?width=500",
  "斯皮瓦克": "https://commons.wikimedia.org/wiki/Special:FilePath/Gayatri_Spivak_on_Subversive_Festival.jpg?width=500",
  "琳达·哈琴": "https://commons.wikimedia.org/wiki/Special:FilePath/Linda_Hutcheon.jpg?width=500",
  "梭罗": "https://commons.wikimedia.org/wiki/Special:FilePath/Henry_David_Thoreau.jpg?width=500"
};

const SUPPLEMENTAL_FIGURES = {
  "classical-poetics": [
    { name: "柏拉图", role: "诗与真理、理念论和城邦教育的古典问题", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Plato_Silanion_Musei_Capitolini_MC1377.jpg?width=500" }
  ],
  "chinese-poetics": [
    { name: "杜甫", role: "诗史、沉郁顿挫与家国经验的典型案例", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Du_Fu.jpg?width=500" },
    { name: "李清照", role: "词体、女性经验与日常物象的精密组织", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Li_Qingzhao.jpg?width=500" }
  ],
  "romanticism": [
    { name: "拜伦", role: "拜伦式英雄、流亡主体与讽刺长诗", image: FIGURE_IMAGES["拜伦"] }
  ],
  "realism-naturalism": [
    { name: "狄更斯", role: "城市贫困、儿童经验与维多利亚社会批判", image: FIGURE_IMAGES["狄更斯"] }
  ],
  "modernism-symbolism": [
    { name: "艾略特", role: "神话方法、引文拼贴与文明危机", image: FIGURE_IMAGES["艾略特"] },
    { name: "乔伊斯", role: "意识流、都柏林日常与语言实验", image: FIGURE_IMAGES["乔伊斯"] }
  ],
  "russian-formalism": [
    { name: "托尔斯泰", role: "陌生化细读中的叙事案例", image: FIGURE_IMAGES["托尔斯泰"] }
  ],
  "marxism": [
    { name: "本雅明", role: "机械复制、灵韵与现代媒介经验", image: FIGURE_IMAGES["本雅明"] }
  ],
  "structuralism": [
    { name: "列维-斯特劳斯", role: "神话结构、二元对立与人类学叙事", image: FIGURE_IMAGES["列维-斯特劳斯"] }
  ],
  "reader-response": [
    { name: "沃尔特·惠特曼", role: "开放读者位置与民主诗歌声音的案例", image: FIGURE_IMAGES["沃尔特·惠特曼"] }
  ],
  "postcolonial": [
    { name: "斯皮瓦克", role: "底层、代表与知识分子伦理", image: FIGURE_IMAGES["斯皮瓦克"] }
  ],
  "postmodernism": [
    { name: "琳达·哈琴", role: "后现代戏仿、史学元小说与互文性", image: FIGURE_IMAGES["琳达·哈琴"] }
  ],
  "ecocriticism-world": [
    { name: "梭罗", role: "自然书写、地方感与现代生态想象", image: FIGURE_IMAGES["梭罗"] }
  ]
};

function hydrateMovementMedia() {
  MOVEMENTS.forEach((movement) => {
    movement.figures.forEach((figure) => {
      if (!figure.image && FIGURE_IMAGES[figure.name]) {
        figure.image = FIGURE_IMAGES[figure.name];
      }
    });
    const existing = new Set(movement.figures.map((figure) => figure.name));
    (SUPPLEMENTAL_FIGURES[movement.id] || []).forEach((figure) => {
      if (!existing.has(figure.name)) movement.figures.push(figure);
    });
  });
}

hydrateMovementMedia();

const MOVEMENT_TRANSLATIONS = {
  en: {
    "classical-poetics": { title: "Classical Poetics", era: "Ancient Greece to Rome", region: "Mediterranean", lens: "Mimesis · Catharsis · Genre" },
    "chinese-poetics": { title: "Chinese Poetics", era: "Pre-Qin to Ming-Qing", region: "East Asia", lens: "Expressing Intent · Yijing · Resonance" },
    "romanticism": { title: "Romanticism", era: "Late 18th to 19th century", region: "Europe and the Americas", lens: "Imagination · Sublime · Subject" },
    "realism-naturalism": { title: "Realism", era: "19th century", region: "Global modern novel", lens: "Social totality · Typicality · Determinism" },
    "modernism-symbolism": { title: "Modernism", era: "Late 19th to 20th century", region: "Transatlantic modernity", lens: "Rupture · Stream of consciousness · Symbol" },
    "russian-formalism": { title: "Russian Formalism", era: "1910s-1930s", region: "Russia", lens: "Defamiliarization · Literariness · Device" },
    "psychoanalysis": { title: "Psychoanalytic Criticism", era: "20th century", region: "Vienna, Paris and beyond", lens: "Desire · Unconscious · Symptom" },
    "marxism": { title: "Marxist Criticism", era: "19th to 20th century", region: "Europe and the world", lens: "Class · Ideology · Totality" },
    "structuralism": { title: "Structuralism", era: "1950s-1970s", region: "Paris and Geneva", lens: "Sign · Structure · System" },
    "poststructuralism": { title: "Poststructuralism", era: "1960s onward", region: "France and global theory", lens: "Différance · Power · Textuality" },
    "reader-response": { title: "Reception Aesthetics", era: "1960s-1980s", region: "Konstanz and the US", lens: "Reader · Horizon · Interpretation" },
    "feminism-queer": { title: "Feminist Theory", era: "20th century onward", region: "Global gender politics", lens: "Gender · Body · Voice" },
    "postcolonial": { title: "Postcolonial Criticism", era: "20th century onward", region: "Global South and diaspora", lens: "Empire · Subaltern · Hybridity" },
    "new-historicism": { title: "New Historicism", era: "1980s onward", region: "US and UK", lens: "Power · Anecdote · Cultural poetics" },
    "postmodernism": { title: "Postmodernism", era: "Late 20th century", region: "Global media culture", lens: "Simulation · Pastiche · Metafiction" },
    "ecocriticism-world": { title: "Ecocriticism", era: "Late 20th century onward", region: "Planetary humanities", lens: "Anthropocene · Nonhuman · Environmental justice" }
  },
  fr: {
    "classical-poetics": { title: "Poétique classique", era: "Grèce antique à Rome", region: "Méditerranée", lens: "Mimèsis · Catharsis · Genre" },
    "chinese-poetics": { title: "Poétique chinoise", era: "Des Qin anciens aux Ming-Qing", region: "Asie de l’Est", lens: "Intention · Yijing · Résonance" },
    "romanticism": { title: "Romantisme", era: "Fin XVIIIe-XIXe siècle", region: "Europe et Amériques", lens: "Imagination · Sublime · Sujet" },
    "realism-naturalism": { title: "Réalisme", era: "XIXe siècle", region: "Roman moderne mondial", lens: "Totalité sociale · Typicité · Déterminisme" },
    "modernism-symbolism": { title: "Modernisme", era: "Fin XIXe-XXe siècle", region: "Modernité transatlantique", lens: "Rupture · Flux de conscience · Symbole" },
    "russian-formalism": { title: "Formalisme russe", era: "Années 1910-1930", region: "Russie", lens: "Défamiliarisation · Littérarité · Procédé" },
    "psychoanalysis": { title: "Critique psychanalytique", era: "XXe siècle", region: "Vienne, Paris et au-delà", lens: "Désir · Inconscient · Symptôme" },
    "marxism": { title: "Critique marxiste", era: "XIXe-XXe siècle", region: "Europe et monde", lens: "Classe · Idéologie · Totalité" },
    "structuralism": { title: "Structuralisme", era: "Années 1950-1970", region: "Paris et Genève", lens: "Signe · Structure · Système" },
    "poststructuralism": { title: "Poststructuralisme", era: "Depuis les années 1960", region: "France et théorie mondiale", lens: "Différance · Pouvoir · Textualité" },
    "reader-response": { title: "Esthétique de la réception", era: "Années 1960-1980", region: "Constance et États-Unis", lens: "Lecteur · Horizon · Interprétation" },
    "feminism-queer": { title: "Théorie féministe", era: "Depuis le XXe siècle", region: "Politiques mondiales du genre", lens: "Genre · Corps · Voix" },
    "postcolonial": { title: "Critique postcoloniale", era: "Depuis le XXe siècle", region: "Sud global et diaspora", lens: "Empire · Subalterne · Hybridité" },
    "new-historicism": { title: "Nouveau historicisme", era: "Depuis les années 1980", region: "États-Unis et Royaume-Uni", lens: "Pouvoir · Anecdote · Poétique culturelle" },
    "postmodernism": { title: "Postmodernisme", era: "Fin du XXe siècle", region: "Culture médiatique mondiale", lens: "Simulation · Pastiche · Métafiction" },
    "ecocriticism-world": { title: "Écocritique", era: "Depuis la fin du XXe siècle", region: "Humanités planétaires", lens: "Anthropocène · Non-humain · Justice environnementale" }
  }
};

const PERSON_TRANSLATIONS = {
  "亚里士多德": { en: "Aristotle", fr: "Aristote" },
  "贺拉斯": { en: "Horace", fr: "Horace" },
  "索福克勒斯": { en: "Sophocles", fr: "Sophocle" },
  "刘勰": { en: "Liu Xie", fr: "Liu Xie" },
  "王国维": { en: "Wang Guowei", fr: "Wang Guowei" },
  "鲁迅": { en: "Lu Xun", fr: "Lu Xun" },
  "华兹华斯": { en: "William Wordsworth", fr: "William Wordsworth" },
  "柯尔律治": { en: "Samuel Taylor Coleridge", fr: "Samuel Taylor Coleridge" },
  "玛丽·雪莱": { en: "Mary Shelley", fr: "Mary Shelley" },
  "巴尔扎克": { en: "Honoré de Balzac", fr: "Honoré de Balzac" },
  "左拉": { en: "Émile Zola", fr: "Émile Zola" },
  "托尔斯泰": { en: "Leo Tolstoy", fr: "Léon Tolstoï" },
  "弗吉尼亚·伍尔夫": { en: "Virginia Woolf", fr: "Virginia Woolf" },
  "卡夫卡": { en: "Franz Kafka", fr: "Franz Kafka" },
  "博尔赫斯": { en: "Jorge Luis Borges", fr: "Jorge Luis Borges" },
  "维克托·什克洛夫斯基": { en: "Viktor Shklovsky", fr: "Viktor Chklovski" },
  "罗曼·雅各布森": { en: "Roman Jakobson", fr: "Roman Jakobson" },
  "米哈伊尔·巴赫金": { en: "Mikhail Bakhtin", fr: "Mikhaïl Bakhtine" },
  "西格蒙德·弗洛伊德": { en: "Sigmund Freud", fr: "Sigmund Freud" },
  "雅克·拉康": { en: "Jacques Lacan", fr: "Jacques Lacan" },
  "朱莉娅·克里斯蒂娃": { en: "Julia Kristeva", fr: "Julia Kristeva" },
  "卡尔·马克思": { en: "Karl Marx", fr: "Karl Marx" },
  "格奥尔格·卢卡奇": { en: "Georg Lukács", fr: "Georg Lukács" },
  "弗雷德里克·詹明信": { en: "Fredric Jameson", fr: "Fredric Jameson" },
  "费迪南·德·索绪尔": { en: "Ferdinand de Saussure", fr: "Ferdinand de Saussure" },
  "罗兰·巴特": { en: "Roland Barthes", fr: "Roland Barthes" },
  "热拉尔·热奈特": { en: "Gérard Genette", fr: "Gérard Genette" },
  "雅克·德里达": { en: "Jacques Derrida", fr: "Jacques Derrida" },
  "米歇尔·福柯": { en: "Michel Foucault", fr: "Michel Foucault" },
  "汉斯·罗伯特·姚斯": { en: "Hans Robert Jauss", fr: "Hans Robert Jauss" },
  "沃尔夫冈·伊瑟": { en: "Wolfgang Iser", fr: "Wolfgang Iser" },
  "斯坦利·费什": { en: "Stanley Fish", fr: "Stanley Fish" },
  "西蒙娜·德·波伏瓦": { en: "Simone de Beauvoir", fr: "Simone de Beauvoir" },
  "朱迪斯·巴特勒": { en: "Judith Butler", fr: "Judith Butler" },
  "托妮·莫里森": { en: "Toni Morrison", fr: "Toni Morrison" },
  "爱德华·赛义德": { en: "Edward Said", fr: "Edward Said" },
  "霍米·巴巴": { en: "Homi K. Bhabha", fr: "Homi K. Bhabha" },
  "奇努阿·阿切贝": { en: "Chinua Achebe", fr: "Chinua Achebe" },
  "斯蒂芬·格林布拉特": { en: "Stephen Greenblatt", fr: "Stephen Greenblatt" },
  "雷蒙德·威廉斯": { en: "Raymond Williams", fr: "Raymond Williams" },
  "让-弗朗索瓦·利奥塔": { en: "Jean-François Lyotard", fr: "Jean-François Lyotard" },
  "让·鲍德里亚": { en: "Jean Baudrillard", fr: "Jean Baudrillard" },
  "蕾切尔·卡森": { en: "Rachel Carson", fr: "Rachel Carson" },
  "劳伦斯·布尔": { en: "Lawrence Buell", fr: "Lawrence Buell" },
  "蒂莫西·莫顿": { en: "Timothy Morton", fr: "Timothy Morton" },
  "柏拉图": { en: "Plato", fr: "Platon" },
  "杜甫": { en: "Du Fu", fr: "Du Fu" },
  "李清照": { en: "Li Qingzhao", fr: "Li Qingzhao" },
  "拜伦": { en: "Lord Byron", fr: "Lord Byron" },
  "狄更斯": { en: "Charles Dickens", fr: "Charles Dickens" },
  "艾略特": { en: "T. S. Eliot", fr: "T. S. Eliot" },
  "乔伊斯": { en: "James Joyce", fr: "James Joyce" },
  "本雅明": { en: "Walter Benjamin", fr: "Walter Benjamin" },
  "列维-斯特劳斯": { en: "Claude Lévi-Strauss", fr: "Claude Lévi-Strauss" },
  "沃尔特·惠特曼": { en: "Walt Whitman", fr: "Walt Whitman" },
  "斯皮瓦克": { en: "Gayatri Spivak", fr: "Gayatri Spivak" },
  "琳达·哈琴": { en: "Linda Hutcheon", fr: "Linda Hutcheon" },
  "梭罗": { en: "Henry David Thoreau", fr: "Henry David Thoreau" },
  "华兹华斯/柯尔律治": { en: "Wordsworth / Coleridge", fr: "Wordsworth / Coleridge" },
  "伍尔夫": { en: "Virginia Woolf", fr: "Virginia Woolf" },
  "什克洛夫斯基": { en: "Viktor Shklovsky", fr: "Viktor Chklovski" },
  "埃亨鲍姆等": { en: "Eichenbaum et al.", fr: "Eichenbaum et al." },
  "巴赫金": { en: "Mikhail Bakhtin", fr: "Mikhaïl Bakhtine" },
  "弗洛伊德": { en: "Sigmund Freud", fr: "Sigmund Freud" },
  "拉康": { en: "Jacques Lacan", fr: "Jacques Lacan" },
  "莎士比亚": { en: "William Shakespeare", fr: "William Shakespeare" },
  "詹明信": { en: "Fredric Jameson", fr: "Fredric Jameson" },
  "卢卡奇": { en: "Georg Lukács", fr: "Georg Lukács" },
  "马克思/恩格斯": { en: "Marx / Engels", fr: "Marx / Engels" },
  "索绪尔": { en: "Ferdinand de Saussure", fr: "Ferdinand de Saussure" },
  "巴特": { en: "Roland Barthes", fr: "Roland Barthes" },
  "热奈特": { en: "Gérard Genette", fr: "Gérard Genette" },
  "德里达": { en: "Jacques Derrida", fr: "Jacques Derrida" },
  "福柯": { en: "Michel Foucault", fr: "Michel Foucault" },
  "姚斯": { en: "Hans Robert Jauss", fr: "Hans Robert Jauss" },
  "伊瑟": { en: "Wolfgang Iser", fr: "Wolfgang Iser" },
  "费什": { en: "Stanley Fish", fr: "Stanley Fish" },
  "波伏瓦": { en: "Simone de Beauvoir", fr: "Simone de Beauvoir" },
  "巴特勒": { en: "Judith Butler", fr: "Judith Butler" },
  "莫里森": { en: "Toni Morrison", fr: "Toni Morrison" },
  "赛义德": { en: "Edward Said", fr: "Edward Said" },
  "阿切贝": { en: "Chinua Achebe", fr: "Chinua Achebe" },
  "格林布拉特": { en: "Stephen Greenblatt", fr: "Stephen Greenblatt" },
  "威廉斯": { en: "Raymond Williams", fr: "Raymond Williams" },
  "利奥塔": { en: "Jean-François Lyotard", fr: "Jean-François Lyotard" },
  "鲍德里亚": { en: "Jean Baudrillard", fr: "Jean Baudrillard" },
  "罗布·尼克松": { en: "Rob Nixon", fr: "Rob Nixon" }
};

const WORK_TRANSLATIONS = {
  "《诗学》": { en: "Poetics", fr: "Poétique" },
  "《诗艺》": { en: "Ars Poetica", fr: "Art poétique" },
  "《俄狄浦斯王》": { en: "Oedipus Rex", fr: "Œdipe roi" },
  "《文心雕龙》": { en: "The Literary Mind and the Carving of Dragons", fr: "L’Esprit littéraire et la sculpture des dragons" },
  "《人间词话》": { en: "Poetic Remarks in the Human World", fr: "Notes poétiques du monde humain" },
  "《呐喊》": { en: "Call to Arms", fr: "Cris" },
  "《抒情歌谣集》": { en: "Lyrical Ballads", fr: "Ballades lyriques" },
  "《弗兰肯斯坦》": { en: "Frankenstein", fr: "Frankenstein" },
  "《唐璜》": { en: "Don Juan", fr: "Don Juan" },
  "《高老头》": { en: "Le Père Goriot", fr: "Le Père Goriot" },
  "《安娜·卡列尼娜》": { en: "Anna Karenina", fr: "Anna Karénine" },
  "《萌芽》": { en: "Germinal", fr: "Germinal" },
  "《到灯塔去》": { en: "To the Lighthouse", fr: "Vers le phare" },
  "《荒原》": { en: "The Waste Land", fr: "La Terre vaine" },
  "《变形记》": { en: "The Metamorphosis", fr: "La Métamorphose" },
  "《作为手法的艺术》": { en: "Art as Technique", fr: "L’art comme procédé" },
  "《文学理论》": { en: "Theory of Literature", fr: "Théorie de la littérature" },
  "《陀思妥耶夫斯基诗学问题》": { en: "Problems of Dostoevsky’s Poetics", fr: "Problèmes de la poétique de Dostoïevski" },
  "《梦的解析》": { en: "The Interpretation of Dreams", fr: "L’Interprétation du rêve" },
  "《精神分析四个基本概念》": { en: "The Four Fundamental Concepts of Psychoanalysis", fr: "Les quatre concepts fondamentaux de la psychanalyse" },
  "《哈姆雷特》": { en: "Hamlet", fr: "Hamlet" },
  "《政治无意识》": { en: "The Political Unconscious", fr: "L’Inconscient politique" },
  "《历史与阶级意识》": { en: "History and Class Consciousness", fr: "Histoire et conscience de classe" },
  "《共产党宣言》": { en: "The Communist Manifesto", fr: "Le Manifeste du parti communiste" },
  "《普通语言学教程》": { en: "Course in General Linguistics", fr: "Cours de linguistique générale" },
  "《神话学》": { en: "Mythologies", fr: "Mythologies" },
  "《叙事话语》": { en: "Narrative Discourse", fr: "Discours du récit" },
  "《论文字学》": { en: "Of Grammatology", fr: "De la grammatologie" },
  "《规训与惩罚》": { en: "Discipline and Punish", fr: "Surveiller et punir" },
  "《作者之死》": { en: "The Death of the Author", fr: "La mort de l’auteur" },
  "《走向接受美学》": { en: "Toward an Aesthetic of Reception", fr: "Pour une esthétique de la réception" },
  "《阅读行为》": { en: "The Act of Reading", fr: "L’acte de lecture" },
  "《这班里有文本吗》": { en: "Is There a Text in This Class?", fr: "Y a-t-il un texte dans cette classe?" },
  "《第二性》": { en: "The Second Sex", fr: "Le Deuxième Sexe" },
  "《性别麻烦》": { en: "Gender Trouble", fr: "Trouble dans le genre" },
  "《宠儿》": { en: "Beloved", fr: "Beloved" },
  "《东方学》": { en: "Orientalism", fr: "L’Orientalisme" },
  "《底层能说话吗？》": { en: "Can the Subaltern Speak?", fr: "Les subalternes peuvent-elles parler?" },
  "《瓦解》": { en: "Things Fall Apart", fr: "Le Monde s’effondre" },
  "《文艺复兴自我塑造》": { en: "Renaissance Self-Fashioning", fr: "Renaissance Self-Fashioning" },
  "《莎士比亚的协商》": { en: "Shakespearean Negotiations", fr: "Shakespearean Negotiations" },
  "《文化与社会》": { en: "Culture and Society", fr: "Culture and Society" },
  "《后现代状况》": { en: "The Postmodern Condition", fr: "La Condition postmoderne" },
  "《拟像与仿真》": { en: "Simulacra and Simulation", fr: "Simulacres et simulation" },
  "《小径分岔的花园》": { en: "The Garden of Forking Paths", fr: "Le Jardin aux sentiers qui bifurquent" },
  "《寂静的春天》": { en: "Silent Spring", fr: "Printemps silencieux" },
  "《环境想象》": { en: "The Environmental Imagination", fr: "L’imagination environnementale" },
  "《缓慢的暴力》": { en: "Slow Violence", fr: "La violence lente" }
};

const KEYWORD_TRANSLATIONS = {
  "诗言志": { en: "poetry expresses intent", fr: "la poésie exprime l’intention" },
  "兴观群怨": { en: "affect, observation and critique", fr: "émotion, observation et critique" },
  "风骨": { en: "force and bone", fr: "force et ossature" },
  "意境": { en: "yijing", fr: "yijing" },
  "神韵": { en: "spiritual resonance", fr: "résonance spirituelle" }
};

const CONTENT_PROFILES = {
  en: {
    "classical-poetics": { scene: "the first theatre of genre, action and rhetorical judgment", focus: "mimesis, plot causality and cathartic effect", exemplar: "Oedipus Rex", caseNote: "the search for knowledge becomes self-recognition, so reversal and discovery fuse into tragic necessity", stakes: "why literary form can educate emotion without becoming simple moral instruction" },
    "chinese-poetics": { scene: "a corridor of poetry, painting, history and self-cultivation", focus: "intent, scene, resonance and the moral pressure of poetic language", exemplar: "Du Fu’s Spring View", caseNote: "private grief and national rupture are compressed into dense images rather than abstract statement", stakes: "how yijing turns landscape into an ethical and affective field" },
    "romanticism": { scene: "storms, ruins, mountains and self-conscious imagination", focus: "creative imagination, sublime experience and rebellious subjectivity", exemplar: "Frankenstein", caseNote: "scientific creation becomes a fable of responsibility, loneliness and modern alienation", stakes: "how personal feeling becomes a public form of historical dissent" },
    "realism-naturalism": { scene: "cities, markets, households and desire mapped as social anatomy", focus: "social totality, typical characters and environmental pressure", exemplar: "Le Père Goriot", caseNote: "a boarding house condenses Parisian class hierarchy and the invasion of money into family feeling", stakes: "how details of space, object and profession expose invisible social structures" },
    "modernism-symbolism": { scene: "broken time, interior monologue and hidden symbolic systems", focus: "formal rupture, stream of consciousness and mythic ordering", exemplar: "The Waste Land", caseNote: "fragments of quotation convert civilizational crisis into textual montage", stakes: "why difficult form can be an ethical answer to modern dislocation" },
    "russian-formalism": { scene: "a workshop of devices, estrangement and narrative mechanics", focus: "literariness, defamiliarization and the autonomy of form", exemplar: "Art as Technique", caseNote: "habitual perception is interrupted so objects become newly visible", stakes: "how technique changes perception before it communicates doctrine" },
    "psychoanalysis": { scene: "dream chambers, symptoms and divided voices", focus: "unconscious desire, repression and symbolic substitution", exemplar: "Hamlet", caseNote: "delay, mourning and speech acts become symptoms rather than mere plot devices", stakes: "how literature stages what a culture cannot directly say" },
    "marxism": { scene: "factory, market, class conflict and ideological theatre", focus: "class struggle, ideology and historical totality", exemplar: "The Political Unconscious", caseNote: "narrative form becomes a socially symbolic act that resolves contradictions in imaginary form", stakes: "how texts register material history even when they appear private or aesthetic" },
    "structuralism": { scene: "a language observatory of signs, codes and narrative grammar", focus: "systems of difference, signification and structural relation", exemplar: "Course in General Linguistics", caseNote: "meaning arises from difference inside a system rather than from isolated words", stakes: "how hidden codes make individual texts intelligible" },
    "poststructuralism": { scene: "a shifting archive where authorship, power and language destabilize one another", focus: "différance, discourse, power and textual instability", exemplar: "Of Grammatology", caseNote: "writing reveals that presence is already mediated by traces and substitutions", stakes: "how interpretation becomes alert to exclusions, margins and unstable authority" },
    "reader-response": { scene: "a reading room where meaning happens between page and horizon", focus: "readerly activity, interpretive communities and expectation", exemplar: "The Act of Reading", caseNote: "gaps in the text invite readers to assemble continuity and test assumptions", stakes: "why meaning is produced in use, not stored unchanged inside the work" },
    "feminism-queer": { scene: "a public forum of bodies, voices, gender norms and counter-memory", focus: "gendered power, embodied narration and performativity", exemplar: "Gender Trouble", caseNote: "gender appears as repeated performance rather than a natural essence", stakes: "how literature can reveal, resist and remake social scripts of identity" },
    "postcolonial": { scene: "ports, colonies, archives and diasporic languages", focus: "empire, subaltern voice, hybridity and cultural translation", exemplar: "Things Fall Apart", caseNote: "colonial encounter is read through both local narrative worlds and imperial disruption", stakes: "who gets to speak, translate and define the world in literary history" },
    "new-historicism": { scene: "a cabinet of anecdotes, rituals, documents and staged power", focus: "cultural poetics, circulation of power and archival detail", exemplar: "Renaissance Self-Fashioning", caseNote: "identity is shaped through courtly, religious and theatrical systems rather than pure interiority", stakes: "how literary texts exchange energy with non-literary practices" },
    "postmodernism": { scene: "mirrors, media loops, pastiche and labyrinthine fictions", focus: "simulation, metafiction, parody and the collapse of grand narratives", exemplar: "The Garden of Forking Paths", caseNote: "plot becomes a model of branching time, textual games and unstable reality", stakes: "how late media culture changes truth, memory and historical narration" },
    "ecocriticism-world": { scene: "planetary weather, forests, toxins and nonhuman agencies", focus: "Anthropocene scale, environmental justice and more-than-human worlds", exemplar: "Silent Spring", caseNote: "scientific evidence is shaped into public narrative that changes environmental consciousness", stakes: "how literature teaches readers to sense slow violence and planetary interdependence" }
  },
  fr: {
    "classical-poetics": { scene: "le premier théâtre du genre, de l’action et du jugement rhétorique", focus: "la mimèsis, la causalité de l’intrigue et l’effet cathartique", exemplar: "Œdipe roi", caseNote: "la quête du savoir devient reconnaissance de soi, faisant fusionner péripétie et découverte", stakes: "pourquoi la forme littéraire peut éduquer l’émotion sans devenir simple morale" },
    "chinese-poetics": { scene: "un couloir de poésie, peinture, histoire et cultivation de soi", focus: "l’intention, la scène, la résonance et la pression morale du langage poétique", exemplar: "Vue de printemps de Du Fu", caseNote: "deuil privé et ruine nationale se condensent dans des images denses", stakes: "comment le yijing transforme le paysage en champ éthique et affectif" },
    "romanticism": { scene: "tempêtes, ruines, montagnes et imagination de soi", focus: "l’imagination créatrice, le sublime et la subjectivité rebelle", exemplar: "Frankenstein", caseNote: "la création scientifique devient fable de responsabilité, solitude et aliénation moderne", stakes: "comment le sentiment individuel devient forme publique de dissidence historique" },
    "realism-naturalism": { scene: "villes, marchés, familles et désirs comme anatomie sociale", focus: "la totalité sociale, les personnages typiques et la pression du milieu", exemplar: "Le Père Goriot", caseNote: "la pension condense la hiérarchie parisienne et l’invasion de l’argent dans l’affect familial", stakes: "comment objets, espaces et métiers exposent des structures sociales invisibles" },
    "modernism-symbolism": { scene: "temps brisé, monologue intérieur et systèmes symboliques cachés", focus: "la rupture formelle, le flux de conscience et l’ordre mythique", exemplar: "La Terre vaine", caseNote: "les fragments de citation transforment la crise de civilisation en montage textuel", stakes: "pourquoi la difficulté formelle peut répondre éthiquement à la dislocation moderne" },
    "russian-formalism": { scene: "un atelier de procédés, d’étrangeté et de mécanique narrative", focus: "la littérarité, la défamiliarisation et l’autonomie de la forme", exemplar: "L’art comme procédé", caseNote: "la perception habituelle est interrompue afin que les objets redeviennent visibles", stakes: "comment la technique modifie la perception avant de transmettre une doctrine" },
    "psychoanalysis": { scene: "chambres de rêves, symptômes et voix divisées", focus: "le désir inconscient, le refoulement et la substitution symbolique", exemplar: "Hamlet", caseNote: "retard, deuil et parole deviennent symptômes plutôt que simples moteurs d’intrigue", stakes: "comment la littérature met en scène ce qu’une culture ne peut dire directement" },
    "marxism": { scene: "usine, marché, conflit de classes et théâtre idéologique", focus: "lutte de classes, idéologie et totalité historique", exemplar: "L’Inconscient politique", caseNote: "la forme narrative agit comme acte symbolique social résolvant imaginairement des contradictions", stakes: "comment les textes enregistrent l’histoire matérielle sous l’apparence de l’intime ou de l’esthétique" },
    "structuralism": { scene: "un observatoire des signes, codes et grammaires narratives", focus: "les systèmes de différence, la signification et la relation structurale", exemplar: "Cours de linguistique générale", caseNote: "le sens naît des différences dans un système plutôt que des mots isolés", stakes: "comment les codes cachés rendent les textes singuliers intelligibles" },
    "poststructuralism": { scene: "une archive mouvante où auteur, pouvoir et langue se déstabilisent", focus: "différance, discours, pouvoir et instabilité textuelle", exemplar: "De la grammatologie", caseNote: "l’écriture montre que la présence est déjà médiatisée par traces et substitutions", stakes: "comment l’interprétation devient attentive aux exclusions, marges et autorités instables" },
    "reader-response": { scene: "une salle de lecture où le sens advient entre page et horizon", focus: "l’activité du lecteur, les communautés interprétatives et l’attente", exemplar: "L’acte de lecture", caseNote: "les blancs du texte invitent le lecteur à construire continuité et hypothèses", stakes: "pourquoi le sens se produit dans l’usage, et non comme contenu immobile" },
    "feminism-queer": { scene: "un forum de corps, voix, normes de genre et contre-mémoires", focus: "le pouvoir genré, le récit incarné et la performativité", exemplar: "Trouble dans le genre", caseNote: "le genre apparaît comme performance répétée plutôt que comme essence naturelle", stakes: "comment la littérature révèle, conteste et refait les scripts sociaux de l’identité" },
    "postcolonial": { scene: "ports, colonies, archives et langues diasporiques", focus: "empire, voix subalterne, hybridité et traduction culturelle", exemplar: "Le Monde s’effondre", caseNote: "la rencontre coloniale se lit à travers un monde narratif local et sa rupture impériale", stakes: "qui peut parler, traduire et définir le monde dans l’histoire littéraire" },
    "new-historicism": { scene: "un cabinet d’anecdotes, rituels, documents et pouvoir mis en scène", focus: "poétique culturelle, circulation du pouvoir et détail d’archive", exemplar: "Renaissance Self-Fashioning", caseNote: "l’identité se façonne par les systèmes de cour, religion et théâtre", stakes: "comment les textes échangent de l’énergie avec des pratiques non littéraires" },
    "postmodernism": { scene: "miroirs, boucles médiatiques, pastiche et fictions labyrinthiques", focus: "simulation, métafiction, parodie et effondrement des grands récits", exemplar: "Le Jardin aux sentiers qui bifurquent", caseNote: "l’intrigue devient modèle de temps ramifié, jeu textuel et réalité instable", stakes: "comment la culture médiatique tardive transforme vérité, mémoire et récit historique" },
    "ecocriticism-world": { scene: "météo planétaire, forêts, toxines et agents non humains", focus: "l’échelle de l’Anthropocène, la justice environnementale et les mondes plus-qu’humains", exemplar: "Printemps silencieux", caseNote: "la preuve scientifique devient récit public capable de transformer la conscience écologique", stakes: "comment la littérature apprend à sentir la violence lente et l’interdépendance planétaire" }
  }
};

const MOVEMENT_LOCATIONS = {
  "classical-poetics": { lat: 37.98, lon: 23.72, label: "雅典 / 地中海诗学源头" },
  "chinese-poetics": { lat: 34.34, lon: 108.94, label: "长安 / 中国诗学传统" },
  "romanticism": { lat: 54.46, lon: -3.09, label: "英格兰湖区 / 浪漫主义自然" },
  "realism-naturalism": { lat: 48.86, lon: 2.35, label: "巴黎 / 现实主义城市" },
  "modernism-symbolism": { lat: 51.51, lon: -0.13, label: "伦敦-巴黎 / 现代主义轴线" },
  "russian-formalism": { lat: 59.93, lon: 30.33, label: "彼得格勒 / 形式主义社群" },
  "psychoanalysis": { lat: 48.21, lon: 16.37, label: "维也纳 / 精神分析现场" },
  "marxism": { lat: 51.51, lon: -0.13, label: "伦敦 / 历史唯物主义语境" },
  "structuralism": { lat: 46.2, lon: 6.14, label: "日内瓦-巴黎 / 结构主义语言学" },
  "poststructuralism": { lat: 48.86, lon: 2.35, label: "巴黎 / 后结构主义争辩" },
  "reader-response": { lat: 47.66, lon: 9.18, label: "康斯坦茨 / 接受美学" },
  "feminism-queer": { lat: 40.71, lon: -74.01, label: "纽约 / 性别理论公共场" },
  "postcolonial": { lat: 22.57, lon: 88.36, label: "加尔各答 / 后殖民知识现场" },
  "new-historicism": { lat: 37.87, lon: -122.27, label: "伯克利 / 新历史主义" },
  "postmodernism": { lat: 40.71, lon: -74.01, label: "纽约-巴黎 / 后现代文化" },
  "ecocriticism-world": { lat: 42.44, lon: -71.34, label: "瓦尔登湖 / 生态批评源流" }
};

const LOCATION_TRANSLATIONS = {
  en: {
    "classical-poetics": "Athens / Mediterranean poetics",
    "chinese-poetics": "Chang’an / Chinese poetic tradition",
    "romanticism": "English Lake District / Romantic nature",
    "realism-naturalism": "Paris / Realist city",
    "modernism-symbolism": "London-Paris / Modernist axis",
    "russian-formalism": "Petrograd / Formalist circles",
    "psychoanalysis": "Vienna / Psychoanalytic scene",
    "marxism": "London / Historical-materialist context",
    "structuralism": "Geneva-Paris / Structural linguistics",
    "poststructuralism": "Paris / Poststructuralist debates",
    "reader-response": "Konstanz / Reception aesthetics",
    "feminism-queer": "New York / Public scene of gender theory",
    "postcolonial": "Kolkata / Postcolonial knowledge site",
    "new-historicism": "Berkeley / New Historicism",
    "postmodernism": "New York-Paris / Postmodern culture",
    "ecocriticism-world": "Walden Pond / Ecocritical lineage"
  },
  fr: {
    "classical-poetics": "Athènes / poétique méditerranéenne",
    "chinese-poetics": "Chang’an / tradition poétique chinoise",
    "romanticism": "Lake District anglais / nature romantique",
    "realism-naturalism": "Paris / ville réaliste",
    "modernism-symbolism": "Londres-Paris / axe moderniste",
    "russian-formalism": "Petrograd / cercles formalistes",
    "psychoanalysis": "Vienne / scène psychanalytique",
    "marxism": "Londres / contexte matérialiste historique",
    "structuralism": "Genève-Paris / linguistique structurale",
    "poststructuralism": "Paris / débats poststructuralistes",
    "reader-response": "Constance / esthétique de la réception",
    "feminism-queer": "New York / scène publique des théories du genre",
    "postcolonial": "Calcutta / site du savoir postcolonial",
    "new-historicism": "Berkeley / nouveau historicisme",
    "postmodernism": "New York-Paris / culture postmoderne",
    "ecocriticism-world": "Walden Pond / lignée écocritique"
  }
};

const SOURCE_READING_LIBRARY = {
  global: [
    { label: "Open Yale Courses · Introduction to Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" },
    { label: "Internet Encyclopedia of Philosophy · Literary Theory", url: "https://iep.utm.edu/literary/" },
    { label: "Purdue OWL · Writing in Literature", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/index.html" },
    { label: "Purdue OWL · Literary Terms", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/literary_terms/index.html" }
  ],
  "classical-poetics": [
    { label: "Perseus Digital Library · Aristotle, Poetics", url: "https://www.perseus.tufts.edu/hopper/text?doc=Aristot.%20Poet." },
    { label: "Purdue OWL · Stasis Theory", url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/stasis_theory/index.html" },
    { label: "Open Yale Courses · Introduction to Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" }
  ],
  "chinese-poetics": [
    { label: "Chinese Text Project · Wen Xin Diao Long", url: "https://ctext.org/wen-xin-diao-long" },
    { label: "Chinese Text Project · Book of Songs", url: "https://ctext.org/book-of-poetry" },
    { label: "Purdue OWL · Writing in Literature", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/index.html" }
  ],
  "romanticism": [
    { label: "British Library · The Romantics", url: "https://www.bl.uk/romantics-and-victorians/articles/the-romantics" },
    { label: "Open Yale Courses · Introduction to Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" },
    { label: "Purdue OWL · Writing About Poetry", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_about_poetry.html" }
  ],
  "realism-naturalism": [
    { label: "EBSCO Research Starters · Realism Literary Period", url: "https://www.ebsco.com/research-starters/literature-and-writing/realism-literary-period" },
    { label: "NOVA Open Publishing · Realism", url: "https://pressbooks.nvcc.edu/eng255/part/realism/" },
    { label: "Purdue OWL · Reading Criticism", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_in_literature_detailed_discussion/reading_criticism.html" }
  ],
  "modernism-symbolism": [
    { label: "Modernist Journals Project", url: "https://modjourn.org/" },
    { label: "Open Yale Courses · Introduction to Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" },
    { label: "Purdue OWL · Literary Terms", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/literary_terms/index.html" }
  ],
  "russian-formalism": [
    { label: "Marxists Internet Archive · Shklovsky, Art as Technique", url: "https://www.marxists.org/subject/art/lit_crit/works/shklovsky.htm" },
    { label: "Open Yale Courses · Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" },
    { label: "Purdue OWL · Literary Terms", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/literary_terms/index.html" }
  ],
  "psychoanalysis": [
    { label: "Open Yale Courses · Theory, Freud, Nietzsche, Marx", url: "https://oyc.yale.edu/english/engl-300/lecture-1" },
    { label: "Internet Encyclopedia of Philosophy · Literary Theory", url: "https://iep.utm.edu/literary/" },
    { label: "Purdue OWL · Reading Criticism", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_in_literature_detailed_discussion/reading_criticism.html" }
  ],
  "marxism": [
    { label: "Open Yale Courses · Introduction to Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" },
    { label: "Marxists Internet Archive · Literary Criticism", url: "https://www.marxists.org/subject/art/lit_crit/" },
    { label: "Internet Encyclopedia of Philosophy · Literary Theory", url: "https://iep.utm.edu/literary/" }
  ],
  "structuralism": [
    { label: "Poetry Foundation · Structuralism", url: "https://www.poetryfoundation.org/education/glossary/structuralism" },
    { label: "EBSCO Research Starters · Structuralist and Poststructuralist Criticism", url: "https://www.ebsco.com/research-starters/literature-and-writing/structuralist-and-poststructuralist-criticism" },
    { label: "Open Yale Courses · Introduction to Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" }
  ],
  "poststructuralism": [
    { label: "Internet Encyclopedia of Philosophy · Derrida", url: "https://iep.utm.edu/derrida/" },
    { label: "Open Yale Courses · Deconstruction II", url: "https://oyc.yale.edu/english/engl-300/lecture-11" },
    { label: "EBSCO Research Starters · Structuralist and Poststructuralist Criticism", url: "https://www.ebsco.com/research-starters/literature-and-writing/structuralist-and-poststructuralist-criticism" }
  ],
  "reader-response": [
    { label: "Critical Worlds · What Is Reader Response?", url: "https://cwi.pressbooks.pub/lit-crit/chapter/what-is-reader-response/" },
    { label: "Purdue OWL · Reading Criticism", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_in_literature_detailed_discussion/reading_criticism.html" },
    { label: "Open Yale Courses · Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" }
  ],
  "feminism-queer": [
    { label: "Internet Encyclopedia of Philosophy · Feminist Standpoint Theory", url: "https://iep.utm.edu/fem-stan/" },
    { label: "Purdue OWL · Writing in Literature", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/index.html" },
    { label: "Internet Encyclopedia of Philosophy · Literary Theory", url: "https://iep.utm.edu/literary/" }
  ],
  "postcolonial": [
    { label: "Internet Encyclopedia of Philosophy · Literary Theory", url: "https://iep.utm.edu/literary/" },
    { label: "Open Yale Courses · Introduction to Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" },
    { label: "Purdue OWL · Reading Criticism", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_in_literature_detailed_discussion/reading_criticism.html" }
  ],
  "new-historicism": [
    { label: "Purdue OWL · Reading Criticism", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_in_literature_detailed_discussion/reading_criticism.html" },
    { label: "Open Yale Courses · Introduction to Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" },
    { label: "Internet Encyclopedia of Philosophy · Literary Theory", url: "https://iep.utm.edu/literary/" }
  ],
  "postmodernism": [
    { label: "Internet Encyclopedia of Philosophy · Postmodernism", url: "https://iep.utm.edu/postmod/" },
    { label: "Internet Encyclopedia of Philosophy · Deleuze", url: "https://iep.utm.edu/deleuze/" },
    { label: "Open Yale Courses · Introduction to Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" }
  ],
  "ecocriticism-world": [
    { label: "ASLE · Explore Our Field", url: "https://www.asle.org/explore-our-field/" },
    { label: "Internet Encyclopedia of Philosophy · Literary Theory", url: "https://iep.utm.edu/literary/" },
    { label: "Open Yale Courses · Introduction to Theory of Literature", url: "https://oyc.yale.edu/english/engl-300" }
  ]
};

const GRAPH_GROUPS = [
  { key: "poetics", label: "诗学源流", x: 18, y: 21, color: "#75f5ff" },
  { key: "form", label: "形式与语言", x: 52, y: 20, color: "#8fd3ff" },
  { key: "subject", label: "主体与欲望", x: 80, y: 25, color: "#b99cff" },
  { key: "history", label: "历史与权力", x: 31, y: 67, color: "#89f2c1" },
  { key: "world", label: "世界与生态", x: 70, y: 69, color: "#f2d88f" }
];

const GRAPH_GROUP_TRANSLATIONS = {
  en: {
    poetics: "Poetic Lineages",
    form: "Form And Language",
    subject: "Subject And Desire",
    history: "History And Power",
    world: "World And Ecology"
  },
  fr: {
    poetics: "Lignées poétiques",
    form: "Forme et langue",
    subject: "Sujet et désir",
    history: "Histoire et pouvoir",
    world: "Monde et écologie"
  }
};

const GRAPH_POSITIONS = {
  "classical-poetics": { x: 16, y: 33, group: "poetics" },
  "chinese-poetics": { x: 28, y: 28, group: "poetics" },
  "romanticism": { x: 21, y: 51, group: "poetics" },
  "russian-formalism": { x: 45, y: 30, group: "form" },
  "structuralism": { x: 58, y: 34, group: "form" },
  "modernism-symbolism": { x: 48, y: 52, group: "form" },
  "poststructuralism": { x: 69, y: 42, group: "subject" },
  "psychoanalysis": { x: 83, y: 37, group: "subject" },
  "feminism-queer": { x: 81, y: 55, group: "subject" },
  "reader-response": { x: 57, y: 64, group: "form" },
  "realism-naturalism": { x: 26, y: 71, group: "history" },
  "marxism": { x: 39, y: 75, group: "history" },
  "new-historicism": { x: 50, y: 82, group: "history" },
  "postcolonial": { x: 67, y: 78, group: "world" },
  "postmodernism": { x: 73, y: 63, group: "world" },
  "ecocriticism-world": { x: 84, y: 76, group: "world" }
};

const GRAPH_EDGE_TYPES = {
  poetics: { label: "诗学源流", color: "#75f5ff" },
  form: { label: "形式语言", color: "#8fd3ff" },
  subject: { label: "主体欲望", color: "#b99cff" },
  history: { label: "历史权力", color: "#89f2c1" },
  world: { label: "世界生态", color: "#f2d88f" }
};

const GRAPH_EDGE_TRANSLATIONS = {
  en: {
    poetics: "poetic lineage",
    form: "formal language",
    subject: "subject and desire",
    history: "history and power",
    world: "world ecology"
  },
  fr: {
    poetics: "lignée poétique",
    form: "langage formel",
    subject: "sujet et désir",
    history: "histoire et pouvoir",
    world: "écologie du monde"
  }
};

function graphEdgeType(source, target) {
  const ids = [source.id, target.id];
  if (ids.some((id) => ["marxism", "new-historicism", "postcolonial"].includes(id))) return "history";
  if (ids.some((id) => ["psychoanalysis", "feminism-queer", "poststructuralism"].includes(id))) return "subject";
  if (ids.some((id) => ["structuralism", "russian-formalism", "reader-response"].includes(id))) return "form";
  if (ids.some((id) => ["ecocriticism-world", "postmodernism"].includes(id))) return "world";
  return "poetics";
}

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function t(key) {
  return UI_COPY[state.language]?.[key] || UI_COPY.zh[key] || key;
}

function fmt(template, values = {}) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function baseMovementText(movement, key, language = state.language) {
  return MOVEMENT_TRANSLATIONS[language]?.[movement.id]?.[key] || movement[key];
}

function translatePerson(name) {
  return PERSON_TRANSLATIONS[name]?.[state.language] || name;
}

function translateWorkTitle(title) {
  return WORK_TRANSLATIONS[title]?.[state.language] || title;
}

function translateKeywords(movement) {
  if (state.language === "zh") return movement.keywords;
  return movement.keywords.map((keyword) => KEYWORD_TRANSLATIONS[keyword]?.[state.language] || keyword);
}

function localizedLocationLabel(movement) {
  return LOCATION_TRANSLATIONS[state.language]?.[movement.id] || MOVEMENT_LOCATIONS[movement.id]?.label || baseMovementText(movement, "region");
}

function localizedGraphGroup(group) {
  return GRAPH_GROUP_TRANSLATIONS[state.language]?.[group.key] || group.label;
}

function graphEdgeMeta(type) {
  const meta = GRAPH_EDGE_TYPES[type] || GRAPH_EDGE_TYPES.poetics;
  return {
    ...meta,
    label: GRAPH_EDGE_TRANSLATIONS[state.language]?.[type] || meta.label
  };
}

function zhExpandedContent(movement) {
  const title = baseMovementText(movement, "title", "zh");
  const relationNames = movement.relations.slice(0, 3).map((id) => baseMovementText(movementById(id), "title", "zh")).join("、");
  const keywords = movement.keywords.slice(0, 4).join("、");
  return {
    intro: movement.intro,
    door: movement.door,
    deepDive: [
      ...movement.deepDive,
      `进一步阅读${title}时，最好把它看成一组问题工具，而不是一个固定答案：它会要求读者反复追问文本怎样组织感知、历史、身份和权力。`,
      `高级运用时，可以把${keywords}作为观察线索，和${relationNames}交叉比较：这样能看到同一部作品在不同理论镜头下呈现出的层次差异。`
    ],
    coreIdeas: [
      ...movement.coreIdeas,
      "理论的价值不在替文本贴标签，而在把看似自然的叙事、语言和阅读习惯重新变得可分析。",
      "任何理论都有盲区：它强调的维度越清晰，越需要与相邻理论互相校正。"
    ],
    method: [
      ...movement.method,
      "把关键段落拆成叙述位置、语言形式、历史压力、读者预期四个层面分别标注。",
      "最后写一个反例：找出这套理论解释力不足的文本瞬间，反而能更准确理解它的边界。"
    ],
    cases: [
      ...movement.cases,
      `对比阅读：把${movement.works[0]?.title || "核心作品"}与${movement.works[1]?.title || "另一部作品"}并置，观察同一概念在不同文体中的变形。`,
      "课堂/研究案例：选取一个短段落，先做无理论细读，再引入本理论重读，比较新增的证据和删减的盲点。"
    ]
  };
}

function localizedMovement(movement) {
  if (state.language === "zh") {
    const expanded = zhExpandedContent(movement);
    return {
      ...movement,
      ...expanded,
      title: baseMovementText(movement, "title", "zh"),
      era: baseMovementText(movement, "era", "zh"),
      region: baseMovementText(movement, "region", "zh"),
      lens: baseMovementText(movement, "lens", "zh"),
      keywords: translateKeywords(movement),
      figures: movement.figures.map((figure) => ({ ...figure })),
      works: movement.works.map((work) => ({ ...work }))
    };
  }

  const language = state.language;
  const profile = CONTENT_PROFILES[language]?.[movement.id] || CONTENT_PROFILES.en[movement.id];
  const title = baseMovementText(movement, "title", language);
  const era = baseMovementText(movement, "era", language);
  const region = baseMovementText(movement, "region", language);
  const lens = baseMovementText(movement, "lens", language);
  const keywords = translateKeywords(movement);
  const related = movement.relations.slice(0, 3).map((id) => baseMovementText(movementById(id), "title", language)).join(language === "fr" ? " / " : " / ");
  const works = movement.works.map((work, index) => ({
    ...work,
    title: translateWorkTitle(work.title),
    author: translatePerson(work.author),
    why: language === "fr"
      ? `${index === 0 ? "Point d’entrée canonique" : "Contrepoint utile"} pour observer ${profile.focus}.`
      : `${index === 0 ? "Canonical entry point" : "Useful counterpoint"} for observing ${profile.focus}.`
  }));
  const figures = movement.figures.map((figure) => ({
    ...figure,
    name: translatePerson(figure.name),
    role: language === "fr"
      ? `Figure clé pour ${title}: ${profile.focus}.`
      : `Key figure for ${title}: ${profile.focus}.`
  }));

  if (language === "fr") {
    return {
      ...movement,
      title,
      era,
      region,
      lens,
      keywords,
      intro: `${title} étudie ${profile.focus}. Né dans ${era}, ce courant transforme ${region} en méthode de lecture capable d’entrer dans les formes, les voix, les archives et les conflits du texte.`,
      door: `Ouvrir ce livre, c’est entrer dans ${profile.scene}.`,
      deepDive: [
        `${title} ne fonctionne pas comme une étiquette décorative. Il propose un protocole: repérer les opérations textuelles, les replacer dans leurs conditions historiques, puis vérifier ce que cette lecture rend visible ou laisse dans l’ombre.`,
        `Son exemple d’entrée est ${profile.exemplar}: ${profile.caseNote}. Le cas permet de passer de la notion abstraite à une preuve lisible dans la scène, l’image, la voix ou le montage.`,
        `L’enjeu est ${profile.stakes}. Une lecture avancée compare ensuite ${title} avec ${related}, afin de mesurer ce que chaque théorie gagne et perd.`
      ],
      coreIdeas: [
        `${lens.split("·")[0].trim()} devient une opération textuelle observable, et non un simple thème.`,
        `La méthode demande de suivre ensemble forme, histoire, sujet et lecteur.`,
        `Le texte est lu comme une machine de relations: scènes, voix, genres, institutions et affects y circulent.`,
        `La force de ${title} apparaît surtout lorsqu’on teste aussi ses limites par un contre-exemple.`
      ],
      method: [
        `Choisir une scène dense et y marquer les indices de ${keywords.slice(0, 3).join(", ")}.`,
        "Distinguer ce qui relève de la forme, de l’histoire, de l’idéologie, du corps, de la voix et de l’espace.",
        `Comparer le résultat avec ${related}; les écarts révèlent la portée réelle de la méthode.`,
        "Formuler ensuite une interprétation courte qui cite des preuves textuelles précises plutôt que des slogans théoriques."
      ],
      cases: [
        `${profile.exemplar}: ${profile.caseNote}.`,
        `${works[0]?.title || title}: lire une scène comme laboratoire de ${profile.focus}.`,
        `Contre-exemple conseillé: utiliser ${works[1]?.title || "une œuvre voisine"} pour tester les zones d’ombre de la théorie.`,
        "Exercice: refaire la lecture en changeant de narrateur, de lecteur ou d’archive; noter ce qui devient visible."
      ],
      figures,
      works
    };
  }

  return {
    ...movement,
    title,
    era,
    region,
    lens,
    keywords,
    intro: `${title} studies ${profile.focus}. Emerging across ${era}, it turns the literary practices of ${region} into a reading method for entering form, voice, archive and conflict.`,
    door: `Open this volume to enter ${profile.scene}.`,
    deepDive: [
      `${title} is not a decorative label. It is a protocol: identify textual operations, place them inside historical conditions, then ask what the reading newly reveals or obscures.`,
      `A strong entry case is ${profile.exemplar}: ${profile.caseNote}. The example moves theory from abstraction into evidence visible in scene, image, voice or montage.`,
      `The stakes are ${profile.stakes}. Advanced reading compares ${title} with ${related}, because neighboring theories expose both the power and the blind spots of the method.`
    ],
    coreIdeas: [
      `${lens.split("·")[0].trim()} is treated as an observable textual operation, not merely a theme.`,
      "The method reads form, history, subject and reader together instead of isolating one layer.",
      "The text becomes a machine of relations: scenes, voices, genres, institutions and affects circulate through it.",
      `${title} becomes strongest when its limits are tested through counter-examples.`
    ],
    method: [
      `Choose a dense scene and mark traces of ${keywords.slice(0, 3).join(", ")}.`,
      "Separate evidence into form, history, ideology, body, voice and space.",
      `Compare the result with ${related}; the differences reveal the method’s real range.`,
      "Write a concise interpretation that cites specific textual evidence rather than theoretical slogans."
    ],
    cases: [
      `${profile.exemplar}: ${profile.caseNote}.`,
      `${works[0]?.title || title}: read one scene as a laboratory for ${profile.focus}.`,
      `Counter-example: use ${works[1]?.title || "a neighboring work"} to test where the theory stops explaining.`,
      "Exercise: rerun the reading by changing narrator, reader or archive; note what becomes newly visible."
    ],
    figures,
    works
  };
}

function movementText(movement, key) {
  return localizedMovement(movement)[key] ?? baseMovementText(movement, key);
}

function cssVarsFor(movement) {
  return `--book-a:${movement.palette[0]};--book-b:${movement.palette[1]};--book-glow:${movement.palette[2]};`;
}

function movementById(id) {
  return MOVEMENTS.find((item) => item.id === id) || MOVEMENTS[0];
}

function renderBooks() {
  const track = $("#bookTrack");
  track.innerHTML = MOVEMENTS.map((movement, index) => {
    const local = localizedMovement(movement);
    return `
    <button class="book tilt-target${index === 0 ? " is-active" : ""}" type="button" data-open="${movement.id}" style="${cssVarsFor(movement)}">
      <p class="book__kicker">${String(index + 1).padStart(2, "0")} · ${local.era}</p>
      <h3>${local.title}</h3>
      <div class="book__footer">
        ${local.keywords.slice(0, 3).map((keyword) => `<span>${keyword}</span>`).join("")}
      </div>
    </button>
  `;
  }).join("");
}

function renderArchive() {
  $("#archiveGrid").innerHTML = MOVEMENTS.map((movement) => `
    <button class="archive-card magnetic" type="button" data-open="${movement.id}" style="${cssVarsFor(movement)}">
      <span class="archive-card__meta">${localizedMovement(movement).era} · ${localizedMovement(movement).region}</span>
      <h3>${localizedMovement(movement).title}</h3>
      <p>${localizedMovement(movement).intro}</p>
    </button>
  `).join("");
}

function renderOrbitMap() {
  const map = $("#orbitMap");
  const nodes = MOVEMENTS.map((movement) => ({
    movement,
    ...(GRAPH_POSITIONS[movement.id] || { x: 50, y: 50, group: "form" })
  }));
  const nodeById = Object.fromEntries(nodes.map((node) => [node.movement.id, node]));
  const seen = new Set();
  const edges = [];
  MOVEMENTS.forEach((source) => {
    source.relations.forEach((targetId) => {
      const target = movementById(targetId);
      if (!target || target.id === source.id) return;
      const key = [source.id, target.id].sort().join("|");
      if (seen.has(key)) return;
      seen.add(key);
      edges.push({
        from: nodeById[source.id],
        to: nodeById[target.id],
        type: graphEdgeType(source, target)
      });
    });
  });

  const edgeMarkup = edges.map((edge) => {
    const meta = graphEdgeMeta(edge.type);
    const midX = (edge.from.x + edge.to.x) / 2;
    const midY = (edge.from.y + edge.to.y) / 2;
    return `
      <g class="graph-edge graph-edge--${edge.type}">
        <line class="orbit-line" x1="${edge.from.x}" y1="${edge.from.y}" x2="${edge.to.x}" y2="${edge.to.y}" style="--edge-color:${meta.color}"></line>
        <circle cx="${midX}" cy="${midY}" r="0.42" style="fill:${meta.color}"></circle>
      </g>
    `;
  }).join("");

  const groupMarkup = GRAPH_GROUPS.map((group) => `
    <span class="graph-cluster graph-cluster--${group.key}" style="left:${group.x}%;top:${group.y}%;--cluster-color:${group.color}">
      ${localizedGraphGroup(group)}
    </span>
  `).join("");

  const nodeMarkup = nodes.map(({ movement, x, y, group }) => {
    const local = localizedMovement(movement);
    return `
    <button class="orbit-node magnetic orbit-node--${group}" type="button" data-open="${movement.id}" style="left:${x}%;top:${y}%;${cssVarsFor(movement)}">
      <span>${local.title}</span>
      <em>${local.lens.split("·")[0].trim()}</em>
    </button>
  `;
  }).join("");

  const legendMarkup = `
    <div class="graph-legend" aria-label="${t("graphLegend")}">
      ${Object.entries(GRAPH_EDGE_TYPES).map(([key, meta]) => `
        <span style="--edge-color:${meta.color}"><i></i>${graphEdgeMeta(key).label}</span>
      `).join("")}
    </div>
  `;

  map.innerHTML = `
    <svg class="graph-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${edgeMarkup}</svg>
    ${groupMarkup}
    ${nodeMarkup}
    ${legendMarkup}
  `;
}

function setActiveBook(index) {
  const bounded = Math.max(0, Math.min(MOVEMENTS.length - 1, index));
  state.activeIndex = bounded;
  const active = MOVEMENTS[bounded];
  $("#activeIndex").textContent = String(bounded + 1).padStart(2, "0");
  $("#activeTitle").textContent = movementText(active, "title");
  $("#activeMeta").textContent = movementText(active, "lens");
  const railCount = $("#railCount");
  const railProgress = $("#railProgress");
  if (railCount) railCount.textContent = `${String(bounded + 1).padStart(2, "0")}/${String(MOVEMENTS.length).padStart(2, "0")}`;
  if (railProgress) railProgress.style.width = `${((bounded + 1) / MOVEMENTS.length) * 100}%`;
  $$(".book").forEach((book, i) => book.classList.toggle("is-active", i === bounded));
}

function setupBookRail() {
  const rail = $("#bookRail");
  const track = $("#bookTrack");
  if (!rail || !track) return;

  let scrollTimer = 0;
  const nearestIndex = () => {
    const books = $$(".book", track);
    if (!books.length) return 0;
    const railRect = rail.getBoundingClientRect();
    const center = railRect.left + railRect.width / 2;
    let bestIndex = 0;
    let bestDistance = Infinity;
    books.forEach((book, index) => {
      const rect = book.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - center);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });
    return bestIndex;
  };

  const updateFromScroll = () => {
    setActiveBook(nearestIndex());
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => rail.classList.remove("is-dragging"), 180);
  };

  const scrollToBook = (index) => {
    const books = $$(".book", track);
    const target = books[Math.max(0, Math.min(books.length - 1, index))];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveBook(index);
    playSound("select");
  };

  rail.addEventListener("scroll", updateFromScroll, { passive: true });
  rail.addEventListener("pointerdown", () => rail.classList.add("is-dragging"));
  rail.addEventListener("pointerup", () => window.setTimeout(updateFromScroll, 80));
  rail.addEventListener("pointercancel", () => rail.classList.remove("is-dragging"));
  $("#railPrev")?.addEventListener("click", () => scrollToBook(state.activeIndex - 1));
  $("#railNext")?.addEventListener("click", () => scrollToBook(state.activeIndex + 1));
  window.addEventListener("resize", () => window.setTimeout(updateFromScroll, 120));
  setActiveBook(0);
}

function applyLanguage(language) {
  state.language = UI_COPY[language] ? language : "zh";
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : (state.language === "fr" ? "fr" : "en");
  document.title = t("documentTitle");
  document.querySelector("meta[name='description']")?.setAttribute("content", t("documentDescription"));
  document.documentElement.style.setProperty("--gate-scroll-copy", `"${t("gateScrollHint")}"`);
  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  $$("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });
  $$("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.language);
  });
  renderBooks();
  renderArchive();
  renderOrbitMap();
  setActiveBook(state.activeIndex);
  setupTilt();
  setupMagnetic();
  cosmosController?.refreshLabels?.();
  spaceGameController?.refreshCopy?.();
  if (state.worldOpen && state.currentWorldId) openWorld(state.currentWorldId);
}

function setupLanguageSwitcher() {
  if (setupLanguageSwitcher.bound) return;
  setupLanguageSwitcher.bound = true;
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang]");
    if (!button || button.dataset.lang === state.language) return;
    applyLanguage(button.dataset.lang);
    playSound("select");
  });
  applyLanguage(state.language);
}

function figureMarkup(figure) {
  const initial = figure.name.slice(0, 1);
  const image = figure.image
    ? `<img src="${figure.image}" alt="${figure.name} ${t("portraitAlt")}" loading="lazy" onerror="this.parentElement.classList.add('portrait-card--noimage');this.remove()">`
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

const SOUND_PATTERNS = {
  open: [
    { freq: 196, delay: 0, duration: 0.12, volume: 0.12, type: "sine" },
    { freq: 392, delay: 0.08, duration: 0.16, volume: 0.1, type: "triangle" },
    { freq: 659, delay: 0.17, duration: 0.2, volume: 0.08, type: "sine" }
  ],
  book: [
    { freq: 146, delay: 0, duration: 0.09, volume: 0.1, type: "triangle" },
    { freq: 329, delay: 0.05, duration: 0.13, volume: 0.08, type: "sine" }
  ],
  moon: [
    { freq: 110, delay: 0, duration: 0.16, volume: 0.08, type: "sine" },
    { freq: 220, delay: 0.09, duration: 0.2, volume: 0.07, type: "triangle" },
    { freq: 440, delay: 0.18, duration: 0.18, volume: 0.05, type: "sine" }
  ],
  laser: [
    { freq: 1180, delay: 0, duration: 0.04, volume: 0.045, type: "sawtooth" },
    { freq: 520, delay: 0.03, duration: 0.07, volume: 0.035, type: "triangle" }
  ],
  blast: [
    { freq: 86, delay: 0, duration: 0.14, volume: 0.08, type: "sawtooth" },
    { freq: 180, delay: 0.05, duration: 0.12, volume: 0.05, type: "triangle" }
  ],
  hover: [
    { freq: 880, delay: 0, duration: 0.06, volume: 0.035, type: "sine" }
  ],
  select: [
    { freq: 523, delay: 0, duration: 0.08, volume: 0.06, type: "triangle" }
  ],
  success: [
    { freq: 523, delay: 0, duration: 0.08, volume: 0.08, type: "sine" },
    { freq: 659, delay: 0.08, duration: 0.09, volume: 0.07, type: "sine" },
    { freq: 784, delay: 0.16, duration: 0.14, volume: 0.06, type: "triangle" }
  ],
  close: [
    { freq: 392, delay: 0, duration: 0.08, volume: 0.06, type: "triangle" },
    { freq: 220, delay: 0.06, duration: 0.12, volume: 0.05, type: "sine" }
  ]
};

function getAudioContext() {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) return null;
  if (!state.audioContext) state.audioContext = new AudioContextCtor();
  if (state.audioContext.state === "suspended") state.audioContext.resume();
  return state.audioContext;
}

function playSound(type = "select") {
  try {
    if (!state.sound) return;
    const context = getAudioContext();
    if (!context) return;
    const pattern = SOUND_PATTERNS[type] || SOUND_PATTERNS.select;
    const now = context.currentTime;
    pattern.forEach((tone) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = tone.type;
      oscillator.frequency.setValueAtTime(tone.freq, now + tone.delay);
      gain.gain.setValueAtTime(0.0001, now + tone.delay);
      gain.gain.exponentialRampToValueAtTime(tone.volume, now + tone.delay + 0.016);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + tone.delay + tone.duration);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start(now + tone.delay);
      oscillator.stop(now + tone.delay + tone.duration + 0.04);
    });
  } catch (error) {
    console.warn("Interface sound unavailable.", error);
  }
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function researchMarkup(movement) {
  const local = localizedMovement(movement);
  const title = local.title;
  const lens = local.lens;
  const era = local.era;
  const region = local.region;
  const relations = movement.relations.map((id) => movementText(movementById(id), "title")).join(state.language === "zh" ? "、" : " / ");
  const focusText = local.keywords.slice(0, 3).join(state.language === "zh" ? "、" : ", ");
  const caseText = local.cases[0];
  const cards = state.language === "zh"
    ? [
      { label: t("genealogy"), body: `${title}位于“${lens}”这条问题链中：它从${era}的历史经验出发，把${region}的文学实践转化为可迁移的阅读方法。` },
      { label: t("analysisFocus"), body: `进入文本时，优先观察${focusText}如何改变叙事、语言、主体或历史关系，而不是只把理论当作概念标签。` },
      { label: t("caseAdvance"), body: `${caseText} 这个案例适合当作入门样本，再与作品的文类、时代制度和读者接受互相参照。` },
      { label: t("relationPath"), body: `它与${relations}形成可连续阅读的理论通道：一条通道追问形式，一条通道追问权力，另一条通道追问主体经验如何被文本组织。` }
    ]
    : (state.language === "fr"
      ? [
        { label: t("genealogy"), body: `${title} se situe dans la chaîne de problèmes « ${lens} »: il part de ${era} et convertit les pratiques de ${region} en méthode de lecture transférable.` },
        { label: t("analysisFocus"), body: `Dans le texte, observez d’abord comment ${focusText} transforme narration, langue, sujet ou rapports historiques.` },
        { label: t("caseAdvance"), body: `${caseText} Ce cas sert d’entrée avant de le comparer aux genres, institutions et réceptions.` },
        { label: t("relationPath"), body: `Il dialogue avec ${relations}: une voie suit la forme, une autre le pouvoir, une troisième l’expérience subjective organisée par le texte.` }
      ]
      : [
        { label: t("genealogy"), body: `${title} sits inside the problem chain of “${lens}”: it begins from ${era} and turns the literary practice of ${region} into a transferable reading method.` },
        { label: t("analysisFocus"), body: `When entering a text, first observe how ${focusText} changes narration, language, subject position or historical relation.` },
        { label: t("caseAdvance"), body: `${caseText} This case works as an entry sample before comparison with genre, institutions and reception.` },
        { label: t("relationPath"), body: `It forms continuous pathways with ${relations}: one follows form, another power, and another the ways subject experience is organized by text.` }
      ]);
  return `
    <section class="world-section world-section--deep">
      <h3>${t("researchDepth")}</h3>
      <div class="insight-grid">
        ${cards.map((card) => `<article><span>${card.label}</span><p>${card.body}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function dossierLines(movement) {
  const local = localizedMovement(movement);
  const title = local.title;
  const firstWork = local.works[0];
  const secondWork = local.works[1] || local.works[0];
  const related = movement.relations.slice(0, 2).map((id) => movementText(movementById(id), "title")).join(" / ");
  const keyTerms = local.keywords.slice(0, 4).join(" · ");

  if (state.language === "en") {
    return {
      route: [
        `Begin with ${firstWork.title} (${firstWork.author}) and write down how ${keyTerms} appear as textual operations rather than decorative labels.`,
        `Read one scene or poem twice: first for narrative surface, then for form, power, voice, and historical pressure.`,
        `Compare the result with ${related}; the contrast makes the method’s blind spots and strengths visible.`
      ],
      questions: [
        `What kind of reader does ${title} train: a formal analyst, a historical critic, an interpreter of desire, or a witness to world systems?`,
        `Which element carries the argument most strongly: plot, metaphor, genre, voice, archive, body, space, or ecology?`,
        `How would the interpretation change if ${secondWork.title} became the counter-example?`
      ]
    };
  }

  if (state.language === "fr") {
    return {
      route: [
        `Commencez par ${firstWork.title} (${firstWork.author}) et notez comment ${keyTerms} fonctionnent comme opérations textuelles.`,
        `Relisez une scène ou un poème deux fois: d’abord pour la surface narrative, puis pour la forme, le pouvoir, la voix et la pression historique.`,
        `Comparez avec ${related}; l’écart rend visibles les forces et les limites de la méthode.`
      ],
      questions: [
        `Quel type de lecteur ${title} forme-t-il: analyste des formes, critique historique, interprète du désir ou témoin des systèmes-monde?`,
        `Quel élément porte le plus l’argument: intrigue, métaphore, genre, voix, archive, corps, espace ou écologie?`,
        `Comment l’interprétation changerait-elle si ${secondWork.title} devenait le contre-exemple?`
      ]
    };
  }

  return {
    route: [
      `先从${firstWork.title}（${firstWork.author}）进入，把${keyTerms}写成可观察的文本操作，而不是停留在概念口号。`,
      "同一段文字至少读两遍：第一遍看情节与主题，第二遍追踪形式、权力、声音、历史压力与阅读位置。",
      `再与${related}对照，比较它们分别强调什么、遮蔽什么，理论的边界会更清楚。`
    ],
    questions: [
      `${title}训练的读者是谁：形式分析者、历史批评者、欲望阐释者，还是世界系统的观察者？`,
      "文本中最能承载论证的元素是什么：情节、隐喻、文类、声音、档案、身体、空间还是生态关系？",
      `如果把${secondWork.title}当作反例，原先的解释会在哪些地方需要重写？`
    ]
  };
}

function sourceDossierMarkup(movement) {
  const lines = dossierLines(movement);
  const sources = [
    ...(SOURCE_READING_LIBRARY[movement.id] || []),
    ...SOURCE_READING_LIBRARY.global.slice(0, 2)
  ];
  const uniqueSources = sources.filter((source, index, list) => (
    list.findIndex((item) => item.url === source.url) === index
  )).slice(0, 5);

  return `
    <section class="world-section world-section--sources">
      <h3>${t("sourceDossier")}</h3>
      <div class="dossier-grid">
        <article>
          <h4>${t("readRoute")}</h4>
          <ol>${lines.route.map((line) => `<li>${line}</li>`).join("")}</ol>
        </article>
        <article>
          <h4>${t("fieldQuestions")}</h4>
          <ul>${lines.questions.map((line) => `<li>${line}</li>`).join("")}</ul>
        </article>
      </div>
      <div class="source-strip" aria-label="${t("sourceTrail")}">
        ${uniqueSources.map((source) => `
          <a href="${source.url}" target="_blank" rel="noreferrer">
            <span>${t("sourceTrail")}</span>
            <strong>${source.label}</strong>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function buildQuiz(movement) {
  const local = localizedMovement(movement);
  const related = movementById(movement.relations[0]);
  const unrelated = MOVEMENTS.find((item) => item.id !== movement.id && !movement.relations.includes(item.id)) || MOVEMENTS[0];
  const relatedLocal = localizedMovement(related);
  const unrelatedLocal = localizedMovement(unrelated);
  const raw = [
    {
      question: fmt(t("quizCoreQuestion"), { title: local.title }),
      options: [
        local.coreIdeas[0],
        t("quizWrongBio"),
        t("quizWrongDate"),
        t("quizWrongTransparent")
      ],
      answer: 0,
      explain: local.coreIdeas[0]
    },
    {
      question: fmt(t("quizMethodQuestion"), { title: local.title }),
      options: [
        local.method[0],
        t("quizWrongScore"),
        t("quizWrongTheme"),
        t("quizWrongMetadata")
      ],
      answer: 0,
      explain: local.method[0]
    },
    {
      question: fmt(t("quizCaseQuestion"), { title: local.title }),
      options: [
        local.cases[0],
        t("quizWrongMarket"),
        t("quizWrongCover"),
        t("quizWrongContext")
      ],
      answer: 0,
      explain: local.cases[0]
    },
    {
      question: fmt(t("quizRelationQuestion"), { title: local.title }),
      options: [
        relatedLocal.title,
        unrelatedLocal.title,
        t("quizWrongNoRelation"),
        t("quizWrongScience")
      ],
      answer: 0,
      explain: fmt(t("quizRelationExplain"), { title: local.title, related: relatedLocal.title })
    }
  ];

  return raw.map((item, index) => {
    const offset = index % item.options.length;
    const options = item.options.slice(offset).concat(item.options.slice(0, offset));
    return {
      ...item,
      options,
      answer: (item.answer - offset + item.options.length) % item.options.length
    };
  });
}

function quizMarkup(movement) {
  const questions = buildQuiz(movement);
  return `
    <section class="world-section quiz-section" data-quiz>
      <div class="quiz-section__head">
        <div>
          <h3>${t("quizTitle")}</h3>
          <p>${t("quizIntro")}</p>
        </div>
        <button class="quiz-check magnetic" type="button">${t("quizSubmit")}</button>
      </div>
      <div class="quiz-list">
        ${questions.map((item, questionIndex) => `
          <fieldset class="quiz-question" data-answer="${item.answer}" data-explain="${escapeAttribute(item.explain)}">
            <legend>${questionIndex + 1}. ${item.question}</legend>
            <div class="quiz-options">
              ${item.options.map((option, optionIndex) => `
                <label class="quiz-option">
                  <input type="radio" name="quiz-${movement.id}-${questionIndex}" value="${optionIndex}">
                  <span>${option}</span>
                </label>
              `).join("")}
            </div>
            <p class="quiz-feedback" aria-live="polite"></p>
          </fieldset>
        `).join("")}
      </div>
      <div class="quiz-result" aria-live="polite">${t("quizWaiting")}</div>
    </section>
  `;
}

function setupQuiz(root) {
  const section = $("[data-quiz]", root);
  if (!section) return;
  const questions = $$(".quiz-question", section);
  const result = $(".quiz-result", section);

  const grade = () => {
    let answered = 0;
    let correct = 0;
    questions.forEach((question) => {
      const answer = Number(question.dataset.answer);
      const selected = $("input:checked", question);
      $$(".quiz-option", question).forEach((option) => option.classList.remove("is-correct", "is-wrong"));
      if (!selected) {
        $(".quiz-feedback", question).textContent = t("quizUnanswered");
        return;
      }
      answered += 1;
      const selectedOption = selected.closest(".quiz-option");
      const isCorrect = Number(selected.value) === answer;
      if (isCorrect) correct += 1;
      selectedOption.classList.add(isCorrect ? "is-correct" : "is-wrong");
      const rightOption = $(`input[value="${answer}"]`, question)?.closest(".quiz-option");
      if (rightOption) rightOption.classList.add("is-correct");
      $(".quiz-feedback", question).textContent = `${isCorrect ? t("quizCorrect") : t("quizReview")}: ${question.dataset.explain}`;
    });

    if (answered < questions.length) {
      result.textContent = fmt(t("quizPartial"), { answered, total: questions.length, left: questions.length - answered });
      playSound("select");
      return;
    }

    result.textContent = fmt(t("quizComplete"), {
      correct,
      total: questions.length,
      message: correct === questions.length ? t("quizPerfect") : t("quizRetry")
    });
    playSound(correct === questions.length ? "success" : "book");
  };

  section.addEventListener("change", (event) => {
    if (!event.target.matches("input[type='radio']")) return;
    playSound("select");
    const allAnswered = questions.every((question) => Boolean($("input:checked", question)));
    if (allAnswered) window.setTimeout(grade, 120);
  });

  $(".quiz-check", section).addEventListener("click", grade);
}

function openWorld(id) {
  const movement = movementById(id);
  const local = localizedMovement(movement);
  state.currentWorldId = movement.id;
  const world = $("#world");
  const content = $("#worldContent");
  world.style.setProperty("--book-a", movement.palette[0]);
  world.style.setProperty("--book-b", movement.palette[1]);
  world.style.setProperty("--book-glow", movement.palette[2]);
  content.innerHTML = `
    <div class="world-hero">
      <div class="world-book-cover tilt-target" style="${cssVarsFor(movement)}">
        <p class="world-kicker">${local.era} · ${local.region}</p>
        <h2 id="worldTitle">${local.title}</h2>
        <p>${local.door}</p>
        <div class="world-tag-row">
          ${local.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}
        </div>
      </div>
      <div class="world-pages">
        <section class="world-section">
          <h3>${t("theoryEntry")}</h3>
          <p>${local.intro}</p>
          ${local.deepDive.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </section>
        <section class="world-section">
          <h3>${t("coreIdeas")}</h3>
          <ul class="idea-list">${local.coreIdeas.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="world-section">
          <h3>${t("method")}</h3>
          <ol class="method-list">${local.method.map((item) => `<li>${item}</li>`).join("")}</ol>
        </section>
        <section class="world-section">
          <h3>${t("cases")}</h3>
          <ul class="case-list">${local.cases.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        ${researchMarkup(movement)}
        ${sourceDossierMarkup(movement)}
        <section class="world-section">
          <h3>${t("figures")}</h3>
          <div class="portrait-grid">${local.figures.map(figureMarkup).join("")}</div>
        </section>
        <section class="world-section">
          <h3>${t("works")}</h3>
          <div class="works-grid">
            ${local.works.map((work) => `
              <div class="work-cover tilt-target" style="${cssVarsFor(movement)}">
                <small>${work.author}</small>
                <strong>${work.title}</strong>
                <span>${work.why}</span>
              </div>
            `).join("")}
          </div>
        </section>
        ${quizMarkup(movement)}
        <section class="world-section">
          <h3>${t("relations")}</h3>
          <div class="relation-row">
            ${movement.relations.map((relation) => {
              const target = movementById(relation);
              return `<button type="button" data-open="${target.id}">${localizedMovement(target).title}</button>`;
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
  playSound("book");

  if (window.gsap) {
    gsap.killTweensOf([".world__scrim", ".world__gate", ".world__panel"]);
    gsap.set(".world__scrim", { clearProps: "opacity,visibility" });
    gsap.set(".world__panel", { clearProps: "opacity,visibility,transform" });
    gsap.set(".world__gate", { clearProps: "transform,opacity,visibility" });
  } else {
    $(".world__scrim").style.opacity = "1";
    $(".world__panel").style.opacity = "1";
  }

  setupTilt();
  setupOpenButtons(content);
  setupQuiz(content);
}

function closeWorld() {
  const world = $("#world");
  if (!state.worldOpen) return;
  state.worldOpen = false;
  state.currentWorldId = null;
  playSound("close");
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

function setupOpenButtons() {
  if (setupOpenButtons.bound) return;
  setupOpenButtons.bound = true;
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open]");
    if (!button) return;
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
    if (el.dataset.magneticReady) return;
    el.dataset.magneticReady = "true";
    el.addEventListener("mouseenter", () => {
      const now = performance.now();
      if (!setupMagnetic.lastSound || now - setupMagnetic.lastSound > 260) {
        setupMagnetic.lastSound = now;
        playSound("hover");
      }
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

function initLibraryGate() {
  const gate = $("#libraryGate");
  const canvas = $("#libraryCanvas");
  const startButton = $("#startButton");
  if (!gate) return;

  const gateState = {
    entered: false,
    progress: 0,
    target: 0,
    pointerX: 0,
    pointerY: 0,
    touchY: null
  };

  const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
  const setTarget = (value) => {
    gateState.target = clamp(value);
    gate.style.setProperty("--gate-progress", gateState.target.toFixed(3));
  };

  const revealSite = () => {
    if (gateState.entered) return;
    gateState.entered = true;
    playSound("open");
    setTarget(1);
    gate.classList.add("is-opening");
    document.body.classList.add("has-entered");
    document.body.classList.remove("entry-locked");
    gate.style.pointerEvents = "none";
    window.scrollTo(0, 0);
    const removeGate = () => {
      if (gate.isConnected) gate.remove();
      document.body.classList.remove("entry-locked");
      const timepiece = $(".timepiece");
      if (timepiece) {
        timepiece.style.opacity = "1";
        timepiece.style.visibility = "visible";
        timepiece.style.transform = "";
      }
      window.scrollTo(0, 0);
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    };
    window.setTimeout(removeGate, 1700);

    if (window.gsap) {
      gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: removeGate
      })
        .to(gate, { autoAlpha: 0, scale: 1.045, duration: 0.92, delay: 0.46 })
        .fromTo(".hero__copy > *", { y: 38, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.72, ease: "power3.out" }, "-=0.55")
        .fromTo(".timepiece", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.46 }, "-=0.38");
    } else {
      removeGate();
    }
  };

  startButton?.addEventListener("click", revealSite);
  gate.addEventListener("wheel", (event) => {
    if (gateState.entered) return;
    event.preventDefault();
    setTarget(gateState.target + Math.abs(event.deltaY) * 0.0015);
    if (gateState.target >= 0.98) revealSite();
  }, { passive: false });
  gate.addEventListener("touchstart", (event) => {
    gateState.touchY = event.touches[0]?.clientY ?? null;
  }, { passive: true });
  gate.addEventListener("touchmove", (event) => {
    if (gateState.entered || gateState.touchY === null) return;
    const nextY = event.touches[0]?.clientY ?? gateState.touchY;
    const distance = Math.abs(gateState.touchY - nextY);
    setTarget(gateState.target + distance * 0.0035);
    gateState.touchY = nextY;
    if (gateState.target >= 0.98) revealSite();
  }, { passive: true });
  gate.addEventListener("pointermove", (event) => {
    const rect = gate.getBoundingClientRect();
    gateState.pointerX = (event.clientX - rect.left) / rect.width - 0.5;
    gateState.pointerY = (event.clientY - rect.top) / rect.height - 0.5;
  });

  if (!canvas || !window.THREE) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (error) {
    console.warn("Library gate WebGL unavailable; using CSS entrance fallback.", error);
    canvas.style.display = "none";
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
  if (THREE.ACESFilmicToneMapping) {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.88;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
  camera.position.set(0, 1.25, 7.6);

  const root = new THREE.Group();
  scene.add(root);

  const stone = new THREE.MeshStandardMaterial({ color: 0x9fb0c8, roughness: 0.78, metalness: 0.04, transparent: true, opacity: 0.22 });
  const darkStone = new THREE.MeshStandardMaterial({ color: 0x32435e, roughness: 0.86, metalness: 0.02, transparent: true, opacity: 0.2 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xf0c66f, roughness: 0.42, metalness: 0.55, emissive: 0x281700, emissiveIntensity: 0.12 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x6a371c, roughness: 0.62, metalness: 0.05, transparent: true, opacity: 0.78 });
  const glow = new THREE.MeshBasicMaterial({ color: 0x75f5ff, transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending });
  const warmGlow = new THREE.MeshBasicMaterial({ color: 0xf4ce7a, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending });

  const addBox = (w, h, d, x, y, z, material) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z);
    root.add(mesh);
    return mesh;
  };

  addBox(7.4, 0.32, 0.62, 0, -1.28, -0.2, darkStone);
  addBox(6.6, 4.3, 0.34, 0, 0.85, -0.55, stone);
  addBox(3.25, 3.42, 0.42, 0, 0.58, -0.2, darkStone);
  addBox(4.1, 0.32, 0.52, 0, 2.28, -0.14, stone);
  addBox(4.7, 0.28, 0.58, 0, 2.57, -0.18, stone);
  addBox(1.7, 0.28, 0.5, 0, 2.92, -0.18, stone).rotation.z = Math.PI / 4;
  addBox(1.7, 0.28, 0.5, 0, 2.92, -0.18, stone).rotation.z = -Math.PI / 4;

  [-2.95, -2.15, 2.15, 2.95].forEach((x) => {
    const column = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 3.42, 36), stone);
    column.position.set(x, 0.38, 0.05);
    root.add(column);
    addBox(0.56, 0.18, 0.52, x, 2.16, 0.06, stone);
    addBox(0.62, 0.2, 0.54, x, -1.38, 0.06, stone);
  });

  for (let i = 0; i < 7; i += 1) {
    const shelf = addBox(0.22, 2.4, 0.12, -1.55 + i * 0.52, 0.34, -0.02, warmGlow);
    shelf.scale.y = i % 2 ? 0.8 : 1;
  }

  const leftDoor = new THREE.Group();
  const rightDoor = new THREE.Group();
  leftDoor.position.set(-0.04, 0.2, 0.18);
  rightDoor.position.set(0.04, 0.2, 0.18);
  root.add(leftDoor, rightDoor);
  const leftPanel = new THREE.Mesh(new THREE.BoxGeometry(1.3, 3.02, 0.18), wood);
  leftPanel.position.set(-0.65, 0, 0);
  const rightPanel = new THREE.Mesh(new THREE.BoxGeometry(1.3, 3.02, 0.18), wood);
  rightPanel.position.set(0.65, 0, 0);
  leftDoor.add(leftPanel);
  rightDoor.add(rightPanel);
  const brassKnobGeometry = new THREE.SphereGeometry(0.055, 24, 12);
  const leftKnob = new THREE.Mesh(brassKnobGeometry, gold);
  leftKnob.position.set(-0.12, -0.04, 0.12);
  const rightKnob = new THREE.Mesh(brassKnobGeometry, gold);
  rightKnob.position.set(0.12, -0.04, 0.12);
  leftDoor.add(leftKnob);
  rightDoor.add(rightKnob);

  for (let i = 0; i < 3; i += 1) {
    const ray = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.03), glow);
    ray.position.set(-1.1 + i * 1.1, 2.2 - i * 0.46, 0.45);
    ray.rotation.z = -0.74;
    root.add(ray);
  }

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(11, 8), new THREE.MeshStandardMaterial({ color: 0x162236, roughness: 0.72, metalness: 0.08 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, -1.48, 1.85);
  root.add(floor);

  scene.add(new THREE.AmbientLight(0x9fb8d9, 0.7));
  const moon = new THREE.DirectionalLight(0xd8eeff, 1.5);
  moon.position.set(-3.6, 5, 4);
  const lantern = new THREE.PointLight(0xf4ce7a, 1.8, 10);
  lantern.position.set(0, 1.2, 2.3);
  const cyan = new THREE.PointLight(0x75f5ff, 1.1, 9);
  cyan.position.set(2.9, 0.6, 2.4);
  scene.add(moon, lantern, cyan);

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  };

  const animate = () => {
    requestAnimationFrame(animate);
    gateState.progress += (gateState.target - gateState.progress) * 0.08;
    gate.style.setProperty("--gate-progress", gateState.progress.toFixed(3));
    canvas.style.opacity = String(0.16 + gateState.progress * 0.48);
    leftDoor.rotation.y = -gateState.progress * 1.32;
    rightDoor.rotation.y = gateState.progress * 1.32;
    root.rotation.y += (gateState.pointerX * 0.08 - root.rotation.y) * 0.035;
    root.rotation.x += (-gateState.pointerY * 0.045 - root.rotation.x) * 0.035;
    camera.position.z += ((7.6 - gateState.progress * 2.1) - camera.position.z) * 0.05;
    camera.position.y += ((1.25 + gateState.progress * 0.28) - camera.position.y) * 0.05;
    lantern.intensity += ((1.8 + gateState.progress * 2.8) - lantern.intensity) * 0.05;
    renderer.render(scene, camera);
  };

  resize();
  animate();
  window.addEventListener("resize", resize);
}

function finishCanvasTexture(texture) {
  if (THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
  if (THREE.sRGBEncoding) texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

const ANTIQUE_BOOK_COLORS = [
  0x182943,
  0x50311f,
  0x302748,
  0x1f3a32,
  0x472436,
  0x263446,
  0x5a3a23,
  0x243838,
  0x3d2b24,
  0x20253c,
  0x3b402d,
  0x412b48,
  0x24404a,
  0x4a2d2a,
  0x2d3351,
  0x31402e
];

function movementIndex(movement) {
  return Math.max(0, MOVEMENTS.findIndex((item) => item.id === movement.id));
}

function leatherColor(movement, amount = 0.34, index = movementIndex(movement)) {
  const antique = new THREE.Color(ANTIQUE_BOOK_COLORS[index % ANTIQUE_BOOK_COLORS.length]);
  const accent = new THREE.Color(movement.palette[1]);
  return antique.lerp(accent, 0.11).lerp(new THREE.Color(0x120f0d), amount);
}

function paintBookGrain(ctx, width, height, density = 18) {
  const points = Math.round((width * height) / density);
  for (let i = 0; i < points; i += 1) {
    const alpha = 0.025 + Math.random() * 0.055;
    ctx.fillStyle = Math.random() > 0.5
      ? `rgba(255, 255, 255, ${alpha})`
      : `rgba(0, 0, 0, ${alpha})`;
    ctx.fillRect(Math.random() * width, Math.random() * height, 1.2, 1.2);
  }
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const letters = Array.from(String(text));
  const lines = [];
  let current = "";
  letters.forEach((letter) => {
    const next = current + letter;
    if (ctx.measureText(next).width > maxWidth && current) {
      lines.push(current);
      current = letter;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  const trimmed = lines.slice(0, maxLines);
  const startY = y - ((trimmed.length - 1) * lineHeight) / 2;
  trimmed.forEach((line, lineIndex) => ctx.fillText(line, x, startY + lineIndex * lineHeight));
}

function paintOrnateCorner(ctx, x, y, sx, sy, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(sx, sy);
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1, size * 0.055);
  ctx.beginPath();
  ctx.moveTo(0, size * 0.78);
  ctx.quadraticCurveTo(size * 0.18, size * 0.35, size * 0.5, size * 0.25);
  ctx.quadraticCurveTo(size * 0.77, size * 0.17, size, 0);
  ctx.moveTo(size * 0.12, size);
  ctx.quadraticCurveTo(size * 0.2, size * 0.64, size * 0.52, size * 0.52);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(size * 0.45, size * 0.44, size * 0.11, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function paintCompassMedallion(ctx, x, y, radius, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = Math.max(1, radius * 0.045);
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.58, 0, Math.PI * 2);
  ctx.stroke();
  for (let i = 0; i < 16; i += 1) {
    const angle = i / 16 * Math.PI * 2;
    const inner = i % 2 === 0 ? radius * 0.22 : radius * 0.42;
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * inner, Math.sin(angle) * inner);
    ctx.lineTo(Math.cos(angle) * radius * 0.88, Math.sin(angle) * radius * 0.88);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(0, -radius * 0.74);
  ctx.lineTo(radius * 0.13, 0);
  ctx.lineTo(0, radius * 0.74);
  ctx.lineTo(-radius * 0.13, 0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function makeBookTexture(movement, index) {
  const local = localizedMovement(movement);
  const canvas = document.createElement("canvas");
  canvas.width = 420;
  canvas.height = 596;
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const base = leatherColor(movement, 0.18, index);
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, `#${base.clone().offsetHSL(0, -0.03, 0.07).getHexString()}`);
  gradient.addColorStop(0.42, `#${base.getHexString()}`);
  gradient.addColorStop(1, `#${base.clone().offsetHSL(0, 0.03, -0.16).getHexString()}`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  paintBookGrain(ctx, width, height, 13);

  ctx.globalAlpha = 0.18;
  for (let y = 0; y < height; y += 11) {
    ctx.fillStyle = y % 22 === 0 ? "#fff4c4" : "#050407";
    ctx.fillRect(0, y + Math.sin((y + index * 9) * 0.2) * 2, width, 1);
  }
  ctx.globalAlpha = 1;

  const sheen = ctx.createLinearGradient(0, 0, width, height * 0.55);
  sheen.addColorStop(0, "rgba(255,240,190,0.16)");
  sheen.addColorStop(0.28, "rgba(255,255,255,0.035)");
  sheen.addColorStop(0.62, "rgba(0,0,0,0.08)");
  sheen.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = sheen;
  ctx.fillRect(0, 0, width, height);

  const vignette = ctx.createRadialGradient(width / 2, height / 2, height * 0.12, width / 2, height / 2, height * 0.78);
  vignette.addColorStop(0, "rgba(0,0,0,0)");
  vignette.addColorStop(0.72, "rgba(0,0,0,0.2)");
  vignette.addColorStop(1, "rgba(0,0,0,0.6)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);

  const gutter = width * 0.15;
  const gutterGradient = ctx.createLinearGradient(0, 0, gutter * 1.7, 0);
  gutterGradient.addColorStop(0, "rgba(0, 0, 0, 0.42)");
  gutterGradient.addColorStop(0.62, "rgba(0, 0, 0, 0.16)");
  gutterGradient.addColorStop(1, "rgba(255, 224, 154, 0.11)");
  ctx.fillStyle = gutterGradient;
  ctx.fillRect(0, 0, gutter, height);
  ctx.fillStyle = "rgba(226, 183, 101, 0.36)";
  ctx.fillRect(gutter + width * 0.006, height * 0.035, width * 0.008, height * 0.93);
  ctx.fillStyle = "rgba(255, 246, 211, 0.11)";
  ctx.fillRect(width * 0.98, height * 0.03, width * 0.012, height * 0.94);

  const margin = width * 0.065;
  const gold = "rgba(239,207,128,0.94)";
  const softGold = "rgba(226,183,101,0.48)";
  const tarnishedGold = "rgba(116,78,34,0.72)";
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.46)";
  ctx.shadowBlur = 9;
  ctx.shadowOffsetY = 5;
  ctx.strokeStyle = gold;
  ctx.lineWidth = Math.max(1, width * 0.01);
  ctx.strokeRect(margin, margin, width - margin * 2, height - margin * 2);
  ctx.restore();
  ctx.strokeStyle = softGold;
  ctx.lineWidth = Math.max(0.5, width * 0.004);
  ctx.strokeRect(margin + width * 0.02, margin + width * 0.02, width - (margin + width * 0.02) * 2, height - (margin + width * 0.02) * 2);
  ctx.strokeStyle = "rgba(255, 239, 184, 0.2)";
  ctx.lineWidth = 1;
  ctx.strokeRect(margin + width * 0.035, margin + width * 0.035, width - (margin + width * 0.035) * 2, height - (margin + width * 0.035) * 2);

  ctx.strokeStyle = tarnishedGold;
  ctx.lineWidth = Math.max(1, width * 0.006);
  for (let i = 0; i < 5; i += 1) {
    const y = height * (0.18 + i * 0.14);
    ctx.beginPath();
    ctx.moveTo(gutter * 0.34, y);
    ctx.bezierCurveTo(gutter * 0.78, y - 12, gutter * 0.78, y + 12, gutter * 0.34, y);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(239,207,128,0.54)";
  [0.22, 0.78].forEach((x) => {
    [0.19, 0.81].forEach((y) => {
      ctx.beginPath();
      ctx.arc(width * x, height * y, width * 0.018, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(23,14,8,0.42)";
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  });

  const corner = width * 0.16;
  paintOrnateCorner(ctx, margin + 5, margin + 5, 1, 1, corner, softGold);
  paintOrnateCorner(ctx, width - margin - 5, margin + 5, -1, 1, corner, softGold);
  paintOrnateCorner(ctx, margin + 5, height - margin - 5, 1, -1, corner, softGold);
  paintOrnateCorner(ctx, width - margin - 5, height - margin - 5, -1, -1, corner, softGold);

  ctx.strokeStyle = "rgba(226,183,101,0.5)";
  ctx.lineWidth = Math.max(1, width * 0.006);
  ctx.beginPath();
  ctx.moveTo(width * 0.28, height * 0.24);
  ctx.lineTo(width * 0.76, height * 0.24);
  ctx.moveTo(width * 0.28, height * 0.72);
  ctx.lineTo(width * 0.76, height * 0.72);
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.055)";
  ctx.beginPath();
  ctx.ellipse(width * 0.58, height * 0.58, width * 0.28, height * 0.11, -0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(239,207,128,0.26)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 3; i += 1) {
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * (0.5 + i * 0.012), width * (0.18 + i * 0.065), height * (0.07 + i * 0.026), 0.16, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#F2D79A";
  ctx.font = `800 ${Math.max(14, width * 0.04)}px Cinzel, 'Space Grotesk', serif`;
  ctx.fillText(String(index + 1).padStart(2, "0"), width / 2, height * 0.16);

  ctx.fillStyle = "#FBF3DD";
  ctx.shadowColor = "rgba(0,0,0,0.58)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 3;
  ctx.font = `900 ${Math.max(34, width * 0.118)}px 'Noto Serif SC', Cinzel, serif`;
  wrapCanvasText(ctx, local.title, width / 2, height * 0.47, width * 0.68, width * 0.128, 3);
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  ctx.fillStyle = "rgba(246, 234, 200, 0.86)";
  ctx.font = `800 ${Math.max(13, width * 0.04)}px 'Noto Sans SC', sans-serif`;
  wrapCanvasText(ctx, local.era, width / 2, height * 0.79, width * 0.68, width * 0.054, 2);

  paintCompassMedallion(ctx, width / 2, height * 0.87, width * 0.07, "rgba(226,183,101,0.86)");

  return finishCanvasTexture(new THREE.CanvasTexture(canvas));
}

function makeBookSpineTexture(movement, index = movementIndex(movement)) {
  const local = localizedMovement(movement);
  const canvas = document.createElement("canvas");
  canvas.width = 84;
  canvas.height = 430;
  const ctx = canvas.getContext("2d");
  const base = leatherColor(movement, 0.26, index);
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, `#${base.clone().offsetHSL(0, 0, -0.32).getHexString()}`);
  gradient.addColorStop(0.42, `#${base.clone().offsetHSL(0, 0, 0.04).getHexString()}`);
  gradient.addColorStop(1, `#${base.clone().offsetHSL(0, 0, -0.24).getHexString()}`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  paintBookGrain(ctx, canvas.width, canvas.height, 12);
  ctx.fillStyle = "rgba(226,183,101,0.66)";
  ctx.fillRect(0, canvas.height * 0.075, canvas.width, canvas.height * 0.018);
  ctx.fillRect(0, canvas.height * 0.9, canvas.width, canvas.height * 0.018);
  ctx.fillStyle = "rgba(239,207,128,0.5)";
  for (let y = 0.19; y <= 0.78; y += 0.15) {
    ctx.fillRect(canvas.width * 0.1, canvas.height * y, canvas.width * 0.8, 3);
  }
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, canvas.width * 0.16, canvas.height);
  ctx.fillStyle = "rgba(255,244,199,0.08)";
  ctx.fillRect(canvas.width * 0.78, 0, canvas.width * 0.12, canvas.height);
  ctx.strokeStyle = "rgba(239,207,128,0.58)";
  ctx.lineWidth = 2;
  ctx.strokeRect(8, 18, canvas.width - 16, canvas.height - 36);
  ctx.strokeStyle = "rgba(0,0,0,0.34)";
  ctx.lineWidth = 1;
  ctx.strokeRect(12, 24, canvas.width - 24, canvas.height - 48);
  paintCompassMedallion(ctx, canvas.width / 2, canvas.height * 0.18, 16, "rgba(226,183,101,0.7)");
  ctx.save();
  ctx.translate(canvas.width * 0.62, canvas.height * 0.78);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "#F6EAC8";
  ctx.font = "900 19px 'Noto Serif SC', Cinzel, serif";
  ctx.textAlign = "left";
  ctx.fillText(local.title, 0, 0);
  ctx.restore();
  return finishCanvasTexture(new THREE.CanvasTexture(canvas));
}

function makeBookBackTexture(movement, index = movementIndex(movement)) {
  const canvas = document.createElement("canvas");
  canvas.width = 180;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  const base = leatherColor(movement, 0.34, index);
  ctx.fillStyle = `#${base.clone().offsetHSL(0, 0, -0.22).getHexString()}`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  paintBookGrain(ctx, canvas.width, canvas.height, 14);
  ctx.strokeStyle = "rgba(226,183,101,0.45)";
  ctx.lineWidth = 3;
  ctx.strokeRect(13, 13, canvas.width - 26, canvas.height - 26);
  paintCompassMedallion(ctx, canvas.width / 2, canvas.height / 2, 23, "rgba(226,183,101,0.52)");
  return finishCanvasTexture(new THREE.CanvasTexture(canvas));
}

function makePageTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 96;
  canvas.height = 96;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#efe8d2";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(87, 68, 43, 0.26)";
  ctx.lineWidth = 1;
  for (let y = 5; y < canvas.height; y += 7) {
    ctx.beginPath();
    ctx.moveTo(0, y + Math.sin(y) * 0.8);
    ctx.lineTo(canvas.width, y + Math.cos(y) * 0.8);
    ctx.stroke();
  }
  const texture = finishCanvasTexture(new THREE.CanvasTexture(canvas));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function makeBookGlowTexture(movement) {
  const canvas = document.createElement("canvas");
  canvas.width = 320;
  canvas.height = 460;
  const ctx = canvas.getContext("2d");
  const glow = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.height * 0.62);
  glow.addColorStop(0, "#ffffff");
  glow.addColorStop(0.25, movement.palette[2]);
  glow.addColorStop(0.58, movement.palette[1]);
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return finishCanvasTexture(new THREE.CanvasTexture(canvas));
}

function makeBookMaterials(movement, index) {
  const coverTexture = makeBookTexture(movement, index);
  const spineTexture = makeBookSpineTexture(movement, index);
  const backTexture = makeBookBackTexture(movement, index);
  const pageTexture = makePageTexture();
  const sideColor = leatherColor(movement, 0.22, index);
  const pageMaterial = new THREE.MeshStandardMaterial({ map: pageTexture, roughness: 0.92, metalness: 0.02, transparent: true });
  const spineMaterial = new THREE.MeshStandardMaterial({ map: spineTexture, roughness: 0.8, metalness: 0.12, transparent: true });
  const coverMaterial = new THREE.MeshStandardMaterial({
    map: coverTexture,
    roughness: 0.74,
    metalness: 0.1,
    emissive: new THREE.Color(movement.palette[2]),
    emissiveIntensity: 0.018,
    transparent: true
  });
  const backMaterial = new THREE.MeshStandardMaterial({ map: backTexture, roughness: 0.82, metalness: 0.08, transparent: true });
  const edgeMaterial = new THREE.MeshStandardMaterial({
    color: sideColor,
    roughness: 0.8,
    metalness: 0.08,
    emissive: new THREE.Color(movement.palette[2]),
    emissiveIntensity: 0.012,
    transparent: true
  });
  return {
    coverTexture,
    glowTexture: makeBookGlowTexture(movement),
    materials: [pageMaterial, spineMaterial, pageMaterial.clone(), pageMaterial.clone(), coverMaterial, backMaterial],
    edgeMaterial
  };
}

function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lon + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function initThreeCosmos() {
  const canvas = $("#cosmosCanvas");
  const stage = $("#heroStage");
  if (!canvas || !window.THREE) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (error) {
    console.warn("Cosmos WebGL unavailable; keeping content interface available.", error);
    canvas.style.display = "none";
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
  if (THREE.ACESFilmicToneMapping) {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.78;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.2, 8.05);

  const group = new THREE.Group();
  group.position.set(-0.16, 0.04, 0);
  group.scale.setScalar(0.98);
  scene.add(group);

  const ambient = new THREE.AmbientLight(0x91b8da, 0.58);
  const sun = new THREE.DirectionalLight(0xddefff, 1.28);
  sun.position.set(-4.8, 1.5, 3.1);
  const rim = new THREE.PointLight(0x75f5ff, 1.25, 20);
  rim.position.set(2.4, 2.5, 4.8);
  scene.add(ambient, sun, rim);

  const textureLoader = new THREE.TextureLoader();
  textureLoader.crossOrigin = "anonymous";
  const assetBase = window.location.protocol === "file:"
    ? "https://literary-cosmos-atlas.vercel.app/assets/"
    : "./assets/";
  const loadTexture = (src) => {
    const texture = textureLoader.load(src);
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
    if (THREE.sRGBEncoding && !src.includes("specular")) texture.encoding = THREE.sRGBEncoding;
    return texture;
  };
  const earthDay = loadTexture(`${assetBase}earth-day.jpg`);
  const earthNight = loadTexture(`${assetBase}earth-night.jpg`);
  const earthClouds = loadTexture(`${assetBase}earth-clouds.png`);
  const earthSpecular = loadTexture(`${assetBase}earth-specular.jpg`);
  const moonTexture = loadTexture(`${assetBase}moon.jpg`);

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

  const locationMarkers = new THREE.Group();
  const locationPickers = [];
  MOVEMENTS.forEach((movement) => {
    const loc = MOVEMENT_LOCATIONS[movement.id];
    if (!loc) return;
    const marker = new THREE.Group();
    const pos = latLonToVector3(loc.lat, loc.lon, 1.665);
    marker.position.copy(pos);
    marker.lookAt(new THREE.Vector3(0, 0, 0));
    const markerColor = new THREE.Color(movement.palette[2]);
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 18, 12),
      new THREE.MeshBasicMaterial({
        color: markerColor,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    const halo = new THREE.Mesh(
      new THREE.RingGeometry(0.062, 0.092, 36),
      new THREE.MeshBasicMaterial({
        color: markerColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.68,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    const plume = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeBookGlowTexture(movement),
      color: markerColor,
      transparent: true,
      opacity: 0.26,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
    plume.scale.set(0.22, 0.32, 1);
    plume.position.set(0, 0, 0.075);
    marker.add(plume, halo, dot);
    const local = localizedMovement(movement);
    dot.userData = {
      type: "location",
      movementId: movement.id,
      title: local.title,
      location: localizedLocationLabel(movement)
    };
    halo.userData = dot.userData;
    locationPickers.push(dot, halo);
    locationMarkers.add(marker);
  });
  globe.add(locationMarkers);

  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xa994ff, transparent: true, opacity: 0.48 });
  const ringOne = new THREE.Mesh(new THREE.TorusGeometry(2.08, 0.012, 16, 180), ringMaterial);
  ringOne.rotation.x = Math.PI / 2.8;
  const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(2.45, 0.01, 16, 180), ringMaterial.clone());
  ringTwo.rotation.x = Math.PI / 2;
  ringTwo.rotation.y = Math.PI / 5;
  group.add(ringOne, ringTwo);

  const moonOrbitMaterial = new THREE.MeshBasicMaterial({
    color: 0xd8eeff,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending
  });
  const moonOrbitPath = new THREE.Mesh(new THREE.TorusGeometry(4.35, 0.004, 10, 240), moonOrbitMaterial);
  moonOrbitPath.scale.z = 0.56;
  moonOrbitPath.position.y = 0.72;
  moonOrbitPath.rotation.x = Math.PI / 2.28;
  moonOrbitPath.rotation.y = -0.42;
  group.add(moonOrbitPath);

  const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture,
    color: new THREE.Color(0xdedbd2),
    roughness: 0.88,
    metalness: 0,
    emissive: new THREE.Color(0x050607),
    emissiveIntensity: 0.06
  });
  const moon = new THREE.Mesh(new THREE.SphereGeometry(0.26, 48, 48), moonMaterial);
  moon.castShadow = false;
  moon.userData = { type: "moon", hovered: false };
  group.add(moon);
  const moonPicker = new THREE.Mesh(
    new THREE.SphereGeometry(0.46, 32, 16),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
  );
  moonPicker.userData = moon.userData;
  group.add(moonPicker);

  const satellites = new THREE.Group();
  const bookGeometry = new THREE.BoxGeometry(0.72, 1.02, 0.22);
  const orbitLanes = [
    { radiusX: 3.78, radiusZ: 2.22, baseY: -0.46, phase: 0.18, speed: 0.128 },
    { radiusX: 4.16, radiusZ: 2.64, baseY: -0.15, phase: Math.PI * 0.52, speed: 0.118 },
    { radiusX: 4.55, radiusZ: 3.04, baseY: 0.16, phase: Math.PI * 1.05, speed: 0.108 },
    { radiusX: 4.92, radiusZ: 3.42, baseY: 0.47, phase: Math.PI * 1.58, speed: 0.098 }
  ];
  const laneSlots = Math.ceil(MOVEMENTS.length / orbitLanes.length);
  for (let i = 0; i < MOVEMENTS.length; i += 1) {
    const movement = MOVEMENTS[i];
    const bookKit = makeBookMaterials(movement, i);
    const book = new THREE.Mesh(bookGeometry, bookKit.materials);
    const laneIndex = i % orbitLanes.length;
    const lane = orbitLanes[laneIndex];
    const slotIndex = Math.floor(i / orbitLanes.length);
    const angle = (slotIndex / laneSlots) * Math.PI * 2 + lane.phase;
    book.userData = {
      movementId: movement.id,
      title: localizedMovement(movement).title,
      movement,
      angle,
      laneIndex,
      slotIndex,
      speed: lane.speed + (slotIndex % 2) * 0.006,
      radiusX: lane.radiusX,
      radiusZ: lane.radiusZ,
      baseY: lane.baseY,
      bob: 0.1 + laneIndex * 0.018,
      tilt: (i % 2 ? -1 : 1) * (0.06 + laneIndex * 0.026),
      depthTwist: (i % 2 ? -1 : 1) * (0.1 + laneIndex * 0.034),
      hovered: false,
      opening: false,
      portalHidden: false,
      materials: bookKit.materials,
      coverTexture: bookKit.coverTexture,
      glowTexture: bookKit.glowTexture,
      coverPivot: null
    };
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

  const refreshLabels = () => {
    satellites.children.forEach((book, index) => {
      const data = book.userData;
      if (!data?.movement || data.opening) return;
      const kit = makeBookMaterials(data.movement, index);
      data.materials?.forEach((material) => {
        if (material?.map) material.map.dispose?.();
        material?.dispose?.();
      });
      data.glowTexture?.dispose?.();
      book.material = kit.materials;
      data.materials = kit.materials;
      data.coverTexture = kit.coverTexture;
      data.glowTexture = kit.glowTexture;
      data.title = localizedMovement(data.movement).title;
    });
    locationPickers.forEach((picker) => {
      const movement = movementById(picker.userData.movementId);
      picker.userData.title = localizedMovement(movement).title;
      picker.userData.location = localizedLocationLabel(movement);
    });
  };
  cosmosController = { refreshLabels };

  let lit = false;
  let hoveredBook = null;
  let hoveredMarker = null;
  let hoveredMoon = false;
  let earthHovered = false;
  let openingBook = false;
  let lastHoverSound = 0;
  let lastMeteorPoint = null;
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const tooltip = document.createElement("div");
  tooltip.className = "cosmos-tooltip";
  tooltip.setAttribute("aria-hidden", "true");
  stage.appendChild(tooltip);

  const setTooltip = (event, target) => {
    if (!target) {
      tooltip.classList.remove("is-visible");
      tooltip.setAttribute("aria-hidden", "true");
      return;
    }
    const rect = stage.getBoundingClientRect();
    tooltip.style.left = `${event.clientX - rect.left}px`;
    tooltip.style.top = `${event.clientY - rect.top}px`;
    if (target.type === "book") {
      const local = localizedMovement(target.book.userData.movement);
      tooltip.innerHTML = `<strong>${local.title}</strong><span>${local.lens}</span><em>${localizedLocationLabel(target.book.userData.movement)}</em>`;
    } else if (target.type === "moon") {
      tooltip.innerHTML = `<strong>${t("tooltipMoonTitle")}</strong><span>${t("tooltipMoonSubtitle")}</span><em>${t("tooltipMoonHint")}</em>`;
    } else {
      tooltip.innerHTML = `<strong>${target.marker.userData.title}</strong><span>${target.marker.userData.location}</span><em>${t("tooltipLocationHint")}</em>`;
    }
    tooltip.classList.add("is-visible");
    tooltip.setAttribute("aria-hidden", "false");
  };

  const updateHeroHit = (event) => {
    if (openingBook) return null;
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects([...satellites.children, moonPicker, moon, ...locationPickers, globe], false);
    let nextBook = null;
    let nextMarker = null;
    let nextMoon = false;
    let nextEarth = false;
    for (const hit of hits) {
      if (satellites.children.includes(hit.object)) {
        nextBook = hit.object;
        break;
      }
      if (hit.object === moonPicker || hit.object === moon) {
        nextMoon = true;
        break;
      }
      if (locationPickers.includes(hit.object)) {
        nextMarker = hit.object;
        break;
      }
      if (hit.object === globe) {
        nextEarth = true;
        break;
      }
    }
    if (hoveredBook && hoveredBook !== nextBook) hoveredBook.userData.hovered = false;
    hoveredBook = nextBook;
    hoveredMarker = nextMarker;
    hoveredMoon = nextMoon;
    earthHovered = nextEarth;
    if (hoveredBook) hoveredBook.userData.hovered = true;
    moon.userData.hovered = hoveredMoon;
    if (hoveredBook || hoveredMarker || hoveredMoon) {
      const now = performance.now();
      if (now - lastHoverSound > 240) {
        lastHoverSound = now;
        playSound("hover");
      }
    }
    const target = hoveredBook
      ? { type: "book", book: hoveredBook }
      : (hoveredMoon ? { type: "moon", moon } : (hoveredMarker ? { type: "location", marker: hoveredMarker } : null));
    canvas.style.cursor = target ? "pointer" : "default";
    setTooltip(event, target);
    return target;
  };

  const fadeBookMaterials = (book, opacity, duration = 420) => {
    book.userData.materials.forEach((material) => {
      material.transparent = true;
      if (window.anime) {
        anime.remove(material);
        anime({ targets: material, opacity, duration, easing: "easeOutQuad" });
      } else {
        material.opacity = opacity;
      }
    });
  };

  const resetBookField = (selectedBook) => {
    satellites.children.forEach((book) => {
      book.userData.portalHidden = false;
      fadeBookMaterials(book, 1, 360);
    });
    if (selectedBook) {
      const data = selectedBook.userData;
      data.opening = false;
      selectedBook.material[4].map = data.coverTexture;
      selectedBook.material[4].emissiveIntensity = 0.018;
      selectedBook.material[4].needsUpdate = true;
      if (data.coverPivot) {
        selectedBook.remove(data.coverPivot);
        data.coverPivot = null;
      }
    }
    openingBook = false;
  };

  const showPortal = (movement, onComplete) => {
    const portal = document.createElement("div");
    portal.className = "book-portal";
    portal.style.setProperty("--portal-a", movement.palette[2]);
    portal.style.setProperty("--portal-b", movement.palette[1]);
    stage.appendChild(portal);
    if (window.anime) {
      anime({
        targets: portal,
        opacity: [0, 1],
        scale: [0.24, 1.7],
        duration: 520,
        easing: "easeInCubic",
        complete: () => {
          onComplete();
          anime({
            targets: portal,
            opacity: [1, 0],
            scale: [1.7, 2.12],
            duration: 620,
            easing: "easeOutQuad",
            complete: () => portal.remove()
          });
        }
      });
    } else {
      onComplete();
      setTimeout(() => portal.remove(), 520);
    }
  };

  const finishBookTransition = (book) => {
    const movement = book.userData.movement;
    showPortal(movement, () => {
      openWorld(movement.id);
      window.setTimeout(() => resetBookField(book), 520);
    });
  };

  const openBookTransition = (book) => {
    if (openingBook || !book) return;
    openingBook = true;
    playSound("book");
    setTooltip(null, null);
    book.userData.opening = true;
    book.userData.hovered = false;
    hoveredBook = null;
    hoveredMarker = null;
    canvas.style.cursor = "default";
    satellites.children.forEach((other) => {
      if (other !== book) {
        other.userData.portalHidden = true;
        fadeBookMaterials(other, 0.08, 500);
      }
    });
    const targetScale = Math.max(1.66, book.scale.x * 1.95);
    if (window.anime) {
      anime.remove(book.position);
      anime.remove(book.scale);
      anime({
        targets: book.position,
        x: 0,
        y: 0.1,
        z: 3.18,
        duration: 820,
        easing: "easeInOutCubic"
      });
      anime({
        targets: book.scale,
        x: targetScale,
        y: targetScale,
        z: targetScale,
        duration: 820,
        easing: "easeInOutCubic"
      });
    } else {
      book.position.set(0, 0.1, 3.18);
      book.scale.setScalar(targetScale);
    }
    window.setTimeout(() => {
      const data = book.userData;
      const coverGeo = new THREE.BoxGeometry(0.64, 0.92, 0.03);
      const inner = new THREE.MeshStandardMaterial({ color: 0xefe3c3, roughness: 0.88, metalness: 0.02, transparent: true });
      const rimMat = new THREE.MeshStandardMaterial({ color: 0x211622, roughness: 0.86, metalness: 0.06, transparent: true });
      const coverMat = new THREE.MeshStandardMaterial({
        map: data.coverTexture,
        roughness: 0.72,
        metalness: 0.1,
        emissive: new THREE.Color(data.movement.palette[2]),
        emissiveIntensity: 0.18,
        transparent: true
      });
      const coverMesh = new THREE.Mesh(coverGeo, [rimMat, rimMat, rimMat, rimMat, coverMat, inner]);
      coverMesh.position.set(0.27, 0, 0.07);
      const pivot = new THREE.Group();
      pivot.position.set(-0.27, 0, 0.062);
      pivot.add(coverMesh);
      book.add(pivot);
      data.coverPivot = pivot;
      book.material[4].map = data.glowTexture;
      book.material[4].needsUpdate = true;
      if (window.anime) {
        anime({
          targets: book.material[4],
          emissiveIntensity: [0.018, 1.45],
          duration: 560,
          easing: "easeInQuad"
        });
        anime({
          targets: pivot.rotation,
          y: -2.28,
          duration: 760,
          easing: "easeInOutCubic",
          complete: () => finishBookTransition(book)
        });
      } else {
        pivot.rotation.y = -2.28;
        finishBookTransition(book);
      }
    }, window.anime ? 760 : 0);
  };

  const openLocationTransition = (marker) => {
    if (openingBook || !marker?.userData?.movementId) return;
    openingBook = true;
    hoveredMarker = null;
    canvas.style.cursor = "default";
    const movement = movementById(marker.userData.movementId);
    playSound("success");
    setTooltip(null, null);
    showPortal(movement, () => {
      openWorld(movement.id);
      openingBook = false;
    });
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    const isMobile = rect.width < 720;
    const isTablet = rect.width >= 720 && rect.width < 1080;
    camera.position.z = isMobile ? 10.9 : (isTablet ? 8.75 : 8.05);
    camera.position.y = isMobile ? 0.34 : (isTablet ? 0.24 : 0.2);
    group.scale.setScalar(isMobile ? 0.72 : (isTablet ? 0.88 : 0.98));
    group.position.set(isMobile ? -0.04 : (isTablet ? -0.1 : -0.16), isMobile ? 0.08 : 0.04, 0);
    camera.updateProjectionMatrix();
  };

  const animate = () => {
    requestAnimationFrame(animate);
    const time = performance.now() / 1000;
    group.rotation.y += lit ? 0.0028 : 0.001;
    group.rotation.x = Math.sin(performance.now() / 2300) * 0.08;
    globe.rotation.y += lit ? 0.0065 : 0.0028;
    nightLights.rotation.y = globe.rotation.y;
    clouds.rotation.y += lit ? 0.008 : 0.0038;
    atmosphere.rotation.y = globe.rotation.y;
    locationMarkers.children.forEach((marker, index) => {
      const pulse = 1 + Math.sin(time * 2.4 + index * 0.7) * 0.16;
      marker.scale.setScalar(pulse);
      const halo = marker.children[1];
      if (halo?.material) halo.material.opacity = 0.48 + (pulse - 0.84) * 0.42;
    });
    const moonAngle = time * (lit ? 0.36 : 0.22) - 0.14;
    const moonDepth = Math.sin(moonAngle);
    const moonPerspective = 0.74 + (moonDepth + 1) * 0.14;
    moon.position.set(
      Math.cos(moonAngle) * 4.6,
      Math.sin(moonAngle * 0.72) * 0.5 + 2.08,
      moonDepth * 2.5
    );
    moon.scale.setScalar(moonPerspective * (hoveredMoon ? 1.18 : 1));
    moonPicker.position.copy(moon.position);
    moonPicker.scale.copy(moon.scale);
    moon.rotation.y += lit ? 0.012 : 0.006;
    moon.rotation.x = Math.sin(time * 0.45) * 0.12;
    moonMaterial.emissiveIntensity += ((hoveredMoon ? 0.3 : 0.06) - moonMaterial.emissiveIntensity) * 0.08;
    moonOrbitMaterial.opacity += ((hoveredMoon ? 0.52 : 0.18) - moonOrbitMaterial.opacity) * 0.06;
    moonOrbitPath.rotation.z += lit ? 0.0014 : 0.0007;
    satellites.children.forEach((book) => {
      const data = book.userData;
      if (data.opening) {
        book.lookAt(camera.position);
        data.materials.forEach((material) => {
          material.opacity += (1 - material.opacity) * 0.18;
          material.depthWrite = true;
        });
        return;
      }
      const angle = data.angle + time * data.speed * (lit ? 1.7 : 1);
      const depth = Math.sin(angle);
      const nearFactor = (depth + 1) / 2;
      const scale = 0.26 + Math.pow(nearFactor, 1.55) * 0.9;
      const hoverLift = data.hovered ? 0.24 : 0;
      book.position.set(
        Math.cos(angle) * data.radiusX,
        Math.sin(angle * 1.7 + data.laneIndex * 0.72) * data.bob + data.baseY + hoverLift,
        depth * data.radiusZ
      );
      book.scale.setScalar(scale * (data.hovered ? 1.14 : 1));
      book.lookAt(camera.position);
      book.rotateY(data.depthTwist + (data.hovered ? data.depthTwist * 0.32 : 0));
      book.rotateZ(data.tilt + (data.hovered ? Math.sin(time * 5 + data.angle) * 0.07 : 0));
      book.renderOrder = Math.round((book.position.z + 6) * 100);
      const targetOpacity = data.portalHidden ? 0.07 : 1;
      data.materials.forEach((material) => {
        material.opacity += (targetOpacity - material.opacity) * 0.12;
        material.depthWrite = material.opacity > 0.35;
        material.depthTest = true;
      });
      const coverMaterial = book.material[4];
      if (coverMaterial?.emissiveIntensity !== undefined) {
        coverMaterial.emissiveIntensity += ((data.hovered ? 0.42 : 0.018) - coverMaterial.emissiveIntensity) * 0.12;
      }
    });
    starPoints.rotation.y += 0.0009;
    const globeAwake = earthHovered || lit;
    rim.intensity += (((earthHovered ? 4.2 : (lit ? 3.35 : 1.25))) - rim.intensity) * 0.06;
    nightMaterial.opacity += (((earthHovered ? 0.58 : (lit ? 0.44 : 0.16))) - nightMaterial.opacity) * 0.06;
    cloudMaterial.opacity += (((earthHovered ? 0.5 : (lit ? 0.42 : 0.26))) - cloudMaterial.opacity) * 0.05;
    earthMaterial.emissiveIntensity += (((earthHovered ? 0.19 : (lit ? 0.07 : 0.035))) - earthMaterial.emissiveIntensity) * 0.06;
    atmosphereMaterial.uniforms.intensity.value += (((earthHovered ? 1.58 : (globeAwake ? 1.12 : 0.55))) - atmosphereMaterial.uniforms.intensity.value) * 0.06;
    ringMaterial.opacity += ((lit ? 0.92 : 0.5) - ringMaterial.opacity) * 0.06;
    renderer.render(scene, camera);
  };

  const sparkle = (event) => {
    const rect = stage.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const previous = lastMeteorPoint || { x: x - 24, y };
    const angle = Math.atan2(y - previous.y, x - previous.x) * 180 / Math.PI;
    lastMeteorPoint = { x, y };
    const trail = document.createElement("i");
    trail.className = "meteor-trail";
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    trail.style.setProperty("--trail-angle", `${Number.isFinite(angle) ? angle : 0}deg`);
    stage.appendChild(trail);
    if (window.gsap) {
      gsap.fromTo(trail, {
        autoAlpha: 0,
        "--trail-scale": 0.24
      }, {
        autoAlpha: 1,
        "--trail-scale": 1,
        duration: 0.12,
        ease: "power2.out",
        overwrite: true
      });
      gsap.to(trail, {
        autoAlpha: 0,
        "--trail-scale": 0.18,
        duration: 0.62,
        delay: 0.05,
        ease: "power3.out",
        onComplete: () => trail.remove()
      });
    } else if (window.anime) {
      anime({
        targets: trail,
        opacity: [0, 1, 0],
        duration: 720,
        easing: "easeOutQuart",
        complete: () => trail.remove()
      });
    } else {
      setTimeout(() => trail.remove(), 720);
    }
  };

  const spawnAmbientMeteor = () => {
    if (!stage.isConnected) return;
    if (!document.body.classList.contains("has-entered") || document.body.classList.contains("game-open")) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
    const rect = stage.getBoundingClientRect();
    if (rect.width < 100 || rect.height < 100) return;
    const direction = Math.random() > 0.28 ? 1 : -1;
    const startX = direction > 0
      ? Math.random() * rect.width * 0.58
      : rect.width * (0.44 + Math.random() * 0.52);
    const startY = rect.height * (0.05 + Math.random() * 0.44);
    const travelX = direction * (rect.width * (0.16 + Math.random() * 0.18));
    const travelY = rect.height * (0.07 + Math.random() * 0.1);
    const angle = direction > 0
      ? 18 + Math.random() * 16
      : 164 + Math.random() * 14;
    const duration = 1.05 + Math.random() * 0.5;
    const meteor = document.createElement("i");
    meteor.className = "meteor-trail meteor-trail--ambient";
    meteor.style.left = `${startX}px`;
    meteor.style.top = `${startY}px`;
    meteor.style.setProperty("--trail-angle", `${angle}deg`);
    meteor.style.setProperty("--trail-scale", `${1.05 + Math.random() * 0.58}`);
    meteor.style.setProperty("--travel-x", `${travelX}px`);
    meteor.style.setProperty("--travel-y", `${travelY}px`);
    meteor.style.setProperty("--ambient-duration", `${duration}s`);
    stage.appendChild(meteor);
    window.setTimeout(() => meteor.remove(), duration * 1000 + 180);
  };

  const scheduleAmbientMeteor = () => {
    window.setTimeout(() => {
      spawnAmbientMeteor();
      if (stage.isConnected) scheduleAmbientMeteor();
    }, document.body.classList.contains("has-entered")
      ? 1200 + Math.random() * 2800
      : 700 + Math.random() * 1100);
  };

  let lastSpark = 0;
  scheduleAmbientMeteor();
  stage.addEventListener("pointerenter", () => {
    lit = true;
    stage.classList.add("is-lit");
  });
  stage.addEventListener("pointerleave", () => {
    lit = false;
    if (hoveredBook) hoveredBook.userData.hovered = false;
    hoveredBook = null;
    hoveredMarker = null;
    hoveredMoon = false;
    earthHovered = false;
    moon.userData.hovered = false;
    lastMeteorPoint = null;
    canvas.style.cursor = "default";
    setTooltip(null, null);
    stage.classList.remove("is-lit");
  });
  stage.addEventListener("pointermove", (event) => {
    updateHeroHit(event);
    const now = performance.now();
    if (now - lastSpark > 80) {
      lastSpark = now;
      sparkle(event);
    }
  });
  canvas.addEventListener("click", (event) => {
    const target = updateHeroHit(event);
    if (!target) return;
    event.preventDefault();
    if (target.type === "book") openBookTransition(target.book);
    if (target.type === "location") openLocationTransition(target.marker);
    if (target.type === "moon") {
      playSound("moon");
      openSpaceGame();
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
        gsap.from(".graph-edge", { autoAlpha: 0, stagger: 0.018, duration: 0.72, ease: "power2.out" });
        gsap.from(".graph-cluster, .graph-legend", { y: 12, autoAlpha: 0, stagger: 0.05, duration: 0.5 }, "-=0.42");
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

function initClock() {
  const timepiece = $("#timepiece");
  const hourHand = $("#clockHour");
  const minuteHand = $("#clockMinute");
  const secondHand = $("#clockSecond");
  const timeText = $("#clockTime");
  const dateText = $("#clockDate");
  const moonPhase = $("#clockMoonPhase");
  if (!hourHand || !minuteHand || !secondHand || !timeText || !dateText) return;

  const clockLocale = () => state.language === "zh" ? "zh-CN" : (state.language === "fr" ? "fr-FR" : "en-US");
  const formatDate = (date) => new Intl.DateTimeFormat(clockLocale(), {
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(date);
  const newMoonEpoch = Date.UTC(2000, 0, 6, 18, 14, 0);
  const lunarCycleMs = 29.530588853 * 24 * 60 * 60 * 1000;
  let networkOffsetMs = 0;
  const syncNetworkTime = async () => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4200);
    const requestedAt = Date.now();
    try {
      let serverMs = Number.NaN;
      if (window.location.protocol !== "file:") {
        const url = new URL(window.location.href);
        url.hash = "";
        url.searchParams.set("_clock", String(Date.now()));
        const head = await fetch(url.toString(), {
          method: "HEAD",
          cache: "no-store",
          signal: controller.signal
        });
        const dateHeader = head.headers.get("date");
        serverMs = Date.parse(dateHeader || "");
      }
      if (!Number.isFinite(serverMs)) {
        const response = await fetch("https://worldtimeapi.org/api/ip", {
          cache: "no-store",
          signal: controller.signal
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        serverMs = typeof data.unixtime === "number"
          ? data.unixtime * 1000
          : Date.parse(data.datetime);
      }
      const receivedAt = Date.now();
      if (Number.isFinite(serverMs)) {
        const estimatedTransit = (receivedAt - requestedAt) / 2;
        networkOffsetMs = serverMs + estimatedTransit - receivedAt;
        timepiece?.classList.add("is-synced");
      }
    } catch (error) {
      timepiece?.classList.remove("is-synced");
    } finally {
      window.clearTimeout(timeout);
    }
  };
  const update = () => {
    const now = new Date(Date.now() + networkOffsetMs);
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;
    hourHand.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
    timeText.textContent = now.toLocaleTimeString(clockLocale(), { hour12: false });
    dateText.textContent = formatDate(now);
    if (timepiece && moonPhase) {
      const phase = (((now.getTime() - newMoonEpoch) % lunarCycleMs) + lunarCycleMs) % lunarCycleMs / lunarCycleMs;
      timepiece.style.setProperty("--moon-angle", `${Math.round(phase * 360)}deg`);
    }
  };
  update();
  window.setInterval(update, 1000);
  syncNetworkTime();
  window.setInterval(syncNetworkTime, 10 * 60 * 1000);

  if (!timepiece) return;
  const resetInstrument = () => {
    timepiece.classList.remove("is-awake");
    if (window.gsap) {
      gsap.to(timepiece, {
        "--clock-rx": "14deg",
        "--clock-ry": "-12deg",
        "--chrono-glow": 0,
        "--clock-scale": window.matchMedia("(max-width: 720px)").matches ? 0.78 : (window.matchMedia("(max-width: 1080px)").matches ? 0.86 : 0.92),
        duration: 0.55,
        ease: "power3.out",
        overwrite: "auto"
      });
    }
  };

  timepiece.addEventListener("pointerenter", () => {
    timepiece.classList.add("is-awake");
    playSound("hover");
    if (window.gsap) {
      gsap.to(timepiece, {
        "--chrono-glow": 1,
        "--clock-scale": window.matchMedia("(max-width: 720px)").matches ? 0.82 : (window.matchMedia("(max-width: 1080px)").matches ? 0.9 : 0.96),
        duration: 0.42,
        ease: "power3.out",
        overwrite: "auto"
      });
      gsap.fromTo(".timepiece__orbit--outer, .timepiece__orbit--inner", { autoAlpha: 0.52 }, { autoAlpha: 1, duration: 0.46, stagger: 0.06, overwrite: "auto" });
    }
  });

  timepiece.addEventListener("pointermove", (event) => {
    const rect = timepiece.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    if (window.gsap) {
      gsap.to(timepiece, {
        "--clock-rx": `${14 - y * 7}deg`,
        "--clock-ry": `${-12 + x * 10}deg`,
        duration: 0.32,
        ease: "power2.out",
        overwrite: "auto"
      });
    } else {
      timepiece.style.setProperty("--clock-rx", `${14 - y * 7}deg`);
      timepiece.style.setProperty("--clock-ry", `${-12 + x * 10}deg`);
    }
  });

  timepiece.addEventListener("pointerleave", resetInstrument);
}

let spaceGameController = null;

function openSpaceGame() {
  if (spaceGameController) spaceGameController.open();
}

function initSpaceGame() {
  const overlay = $("#spaceGame");
  const mount = $("#spaceGameMount");
  const closeButton = $("#closeSpaceGame");
  const scoreText = $("#gameScore");
  const waveText = $("#gameWave");
  const hullText = $("#gameHull");
  const energyText = $("#gameEnergy");
  const comboText = $("#gameCombo");
  const skillText = $("#gameSkill");
  const hullFill = $("#gameHullFill");
  const energyFill = $("#gameEnergyFill");
  const bossMeter = $("#gameBossMeter");
  const bossFill = $("#gameBossFill");
  const statusText = $("#gameStatus");
  const touchFire = $("#touchFire");
  const touchSkill = $("#touchSkill");
  const touchLance = $("#touchLance");
  const touchRift = $("#touchRift");
  if (!overlay || !mount || !closeButton || !scoreText || !waveText || !hullText || !energyText || !comboText || !skillText || !statusText) return;

  const WAVE_CONFIGS = [
    { labelKey: "gameWave1Label", objectiveKey: "gameWave1Objective", target: 18, spawn: 760, speed: 1, boss: false },
    { labelKey: "gameWave2Label", objectiveKey: "gameWave2Objective", target: 26, spawn: 560, speed: 1.22, boss: false },
    { labelKey: "gameWave3Label", objectiveKey: "gameWave3Objective", target: 1, spawn: 720, speed: 1.34, boss: true }
  ];
  const SKILL_COSTS = { nova: 100, lance: 64, rift: 78 };
  const SKILL_COOLDOWNS = { nova: 9000, lance: 5600, rift: 7800 };

  let phaserGame = null;
  let activeScene = null;

  const setStatus = (text) => {
    statusText.textContent = text;
  };

  const updateHud = (state) => {
    scoreText.textContent = String(Math.max(0, Math.floor(state.score))).padStart(4, "0");
    waveText.textContent = `${Math.min(state.wave + 1, WAVE_CONFIGS.length)}/${WAVE_CONFIGS.length}`;
    hullText.textContent = String(Math.max(0, Math.ceil(state.hull)));
    energyText.textContent = String(Math.max(0, Math.floor(state.energy ?? 0)));
    comboText.textContent = `x${Math.max(1, Math.floor(state.combo || 1))}`;
    const cooldowns = state.cooldowns || { nova: 0, lance: 0, rift: 0 };
    const readyKeys = Object.keys(SKILL_COSTS).filter((key) => cooldowns[key] <= 0 && (state.energy ?? 0) >= SKILL_COSTS[key]);
    const waiting = Object.keys(SKILL_COSTS)
      .map((key) => cooldowns[key] > 0 ? cooldowns[key] : ((state.energy ?? 0) < SKILL_COSTS[key] ? (SKILL_COSTS[key] - (state.energy ?? 0)) * 85 : 0))
      .filter(Boolean);
    skillText.textContent = readyKeys.length ? `${readyKeys.length}/3 ${t("gameReady")}` : (waiting.length ? `${Math.ceil(Math.min(...waiting) / 1000)}s` : `${Math.floor(state.energy ?? 0)}%`);
    if (hullFill) hullFill.style.width = `${Math.max(0, Math.min(100, state.hull))}%`;
    if (energyFill) energyFill.style.width = `${Math.max(0, Math.min(100, state.energy ?? 0))}%`;
    if (bossMeter && bossFill) {
      const bossRatio = state.bossMax ? Math.max(0, Math.min(1, (state.bossHp || 0) / state.bossMax)) : 0;
      bossMeter.classList.toggle("is-visible", bossRatio > 0 && !state.missionComplete && !state.gameOver);
      bossFill.style.width = `${bossRatio * 100}%`;
    }
    touchSkill?.classList.toggle("is-ready", cooldowns.nova <= 0 && (state.energy ?? 0) >= SKILL_COSTS.nova);
    touchLance?.classList.toggle("is-ready", cooldowns.lance <= 0 && (state.energy ?? 0) >= SKILL_COSTS.lance);
    touchRift?.classList.toggle("is-ready", cooldowns.rift <= 0 && (state.energy ?? 0) >= SKILL_COSTS.rift);
  };

  class LunarSquadronScene extends Phaser.Scene {
    constructor() {
      super("LunarSquadronScene");
      this.state = {
        score: 0,
        wave: 0,
        kills: 0,
        hull: 100,
        energy: 100,
        combo: 1,
        weapon: 1,
        overdrive: 0,
        shield: 0,
        rift: 0,
        cooldowns: { nova: 0, lance: 0, rift: 0 },
        skillCooldown: 0,
        skillReady: true,
        bossHp: 0,
        bossMax: 0,
        missionComplete: false,
        gameOver: false
      };
    }

    create() {
      activeScene = this;
      this.input.mouse?.disableContextMenu();
      this.width = this.scale.width;
      this.height = this.scale.height;
      this.createTextures();
      this.createBackdrop();
      this.physics.world.setBounds(0, 0, this.width, this.height);
      this.player = this.physics.add.image(this.width * 0.5, this.height * 0.78, "ship");
      this.player.setCircle(8, 24, 28);
      this.player.setDepth(12);
      this.player.setDamping(true);
      this.player.setDrag(0.92);
      this.player.setMaxVelocity(620);
      this.player.target = new Phaser.Math.Vector2(this.player.x, this.player.y);
      this.playerGlow = this.add.image(this.player.x, this.player.y, "shipGlow").setBlendMode(Phaser.BlendModes.ADD).setAlpha(0.52).setDepth(11);
      this.hitCore = this.add.circle(this.player.x, this.player.y, 5, 0x75f5ff, 0.92)
        .setStrokeStyle(2, 0xfff8df, 0.82)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setDepth(13);

      this.bullets = this.physics.add.group({ classType: Phaser.Physics.Arcade.Image, maxSize: 90 });
      this.enemyBullets = this.physics.add.group({ classType: Phaser.Physics.Arcade.Image, maxSize: 120 });
      this.enemies = this.physics.add.group();
      this.asteroids = this.physics.add.group();
      this.powerups = this.physics.add.group();

      this.physics.add.overlap(this.bullets, this.enemies, this.hitEnemy, null, this);
      this.physics.add.overlap(this.bullets, this.asteroids, this.hitAsteroid, null, this);
      this.physics.add.overlap(this.player, this.enemies, this.damagePlayer, null, this);
      this.physics.add.overlap(this.player, this.asteroids, this.damagePlayer, null, this);
      this.physics.add.overlap(this.player, this.enemyBullets, this.damagePlayer, null, this);
      this.physics.add.overlap(this.player, this.powerups, this.collectPowerup, null, this);

      this.keys = this.input.keyboard.addKeys("W,A,S,D,UP,DOWN,LEFT,RIGHT,SPACE,SHIFT,E,Q,R");
      this.focusKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);
      this.input.on("pointermove", (pointer) => this.player.target.set(pointer.x, pointer.y));
      this.input.on("pointerdown", (pointer) => {
        if (pointer.rightButtonDown()) this.castSkill();
        else this.fire(true);
      });
      this.input.keyboard.on("keydown-SPACE", () => this.fire(true));
      this.input.keyboard.on("keydown-SHIFT", () => this.castSkill());
      this.input.keyboard.on("keydown-E", () => this.castIonLance());
      this.input.keyboard.on("keydown-Q", () => this.castTimeRift());
      this.input.keyboard.on("keydown-R", () => {
        if (this.state.gameOver || this.state.missionComplete) this.scene.restart();
      });
      this.scale.on("resize", this.resizeScene, this);
      this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => this.scale.off("resize", this.resizeScene, this));

      this.fireTimer = this.time.addEvent({ delay: 150, callback: () => this.fire(false), loop: true });
      this.spawnTimer = this.time.addEvent({ delay: WAVE_CONFIGS[0].spawn, callback: () => this.spawnEnemy(), loop: true });
      this.asteroidTimer = this.time.addEvent({ delay: 980, callback: () => this.spawnAsteroid(), loop: true });
      this.bossTimer = null;
      this.waveBanner = this.add.text(this.width / 2, this.height * 0.23, "", {
        fontFamily: "Noto Serif SC, serif",
        fontSize: this.bannerFontSize(),
        color: "#fff8df",
        align: "center",
        stroke: "#06131f",
        strokeThickness: 5
      }).setOrigin(0.5).setDepth(30).setAlpha(0);
      this.startWave(0);
      updateHud(this.state);
    }

    resizeScene(gameSize) {
      this.width = gameSize.width;
      this.height = gameSize.height;
      this.physics.world.setBounds(0, 0, this.width, this.height);
      if (this.waveBanner) {
        this.waveBanner
          .setStyle({ fontSize: this.bannerFontSize() })
          .setPosition(this.width / 2, this.bannerY());
      }
    }

    bannerFontSize() {
      return `${Math.round(Phaser.Math.Clamp(this.width * 0.052, 19, 42))}px`;
    }

    bannerY() {
      return this.height * (this.width < 520 ? 0.27 : 0.23);
    }

    createTextures() {
      const g = this.add.graphics();
      g.clear();
      g.fillStyle(0x0a1222, 1);
      g.fillTriangle(32, 2, 60, 70, 32, 56);
      g.fillTriangle(32, 2, 4, 70, 32, 56);
      g.fillStyle(0xeaf8ff, 0.92);
      g.fillTriangle(32, 4, 48, 62, 32, 52);
      g.fillTriangle(32, 4, 16, 62, 32, 52);
      g.fillStyle(0x75f5ff, 1);
      g.fillRoundedRect(27, 17, 10, 42, 4);
      g.fillStyle(0x14233a, 1);
      g.fillEllipse(32, 26, 13, 18);
      g.lineStyle(2, 0x75f5ff, 0.82);
      g.strokeEllipse(32, 26, 15, 20);
      g.lineStyle(3, 0xf5d287, 0.64);
      g.lineBetween(16, 58, 48, 58);
      g.fillStyle(0xf5d287, 1);
      g.fillEllipse(20, 70, 8, 20);
      g.fillEllipse(44, 70, 8, 20);
      g.fillStyle(0x75f5ff, 0.9);
      g.fillEllipse(32, 76, 10, 24);
      g.generateTexture("ship", 64, 82);
      g.clear();
      g.fillStyle(0x75f5ff, 0.44);
      g.fillCircle(42, 42, 38);
      g.generateTexture("shipGlow", 84, 84);
      g.clear();
      g.fillStyle(0x75f5ff, 1);
      g.fillRoundedRect(6, 0, 8, 34, 5);
      g.generateTexture("laser", 20, 36);
      g.clear();
      g.fillStyle(0x3c3156, 1);
      g.fillTriangle(0, 20, 42, 2, 36, 38);
      g.fillTriangle(84, 20, 42, 2, 48, 38);
      g.fillStyle(0xb99cff, 0.9);
      g.fillTriangle(7, 18, 42, 6, 39, 28);
      g.fillTriangle(77, 18, 42, 6, 45, 28);
      g.fillStyle(0x0b1724, 1);
      g.fillEllipse(42, 18, 25, 28);
      g.fillStyle(0xff8fa8, 0.88);
      g.fillCircle(42, 18, 6);
      g.lineStyle(3, 0x75f5ff, 1);
      g.strokeCircle(42, 18, 14);
      g.lineStyle(2, 0xf5d287, 0.52);
      g.lineBetween(18, 20, 66, 20);
      g.generateTexture("enemy", 84, 36);
      g.clear();
      g.fillStyle(0x071523, 1);
      g.fillTriangle(42, 0, 78, 34, 42, 28);
      g.fillTriangle(42, 0, 6, 34, 42, 28);
      g.fillStyle(0x75f5ff, 0.92);
      g.fillTriangle(42, 5, 62, 31, 42, 24);
      g.fillTriangle(42, 5, 22, 31, 42, 24);
      g.fillStyle(0xff8fa8, 0.9);
      g.fillCircle(42, 16, 5);
      g.lineStyle(2, 0xf5d287, 0.54);
      g.strokeCircle(42, 17, 12);
      g.generateTexture("enemyScout", 84, 42);
      g.clear();
      g.fillStyle(0x221629, 1);
      g.fillRoundedRect(0, 15, 122, 46, 20);
      g.fillStyle(0x554063, 1);
      g.fillTriangle(10, 38, 56, 0, 54, 76);
      g.fillTriangle(112, 38, 66, 0, 68, 76);
      g.lineStyle(3, 0xf5d287, 0.72);
      g.strokeRoundedRect(14, 11, 94, 54, 20);
      g.fillStyle(0xff8fa8, 0.94);
      g.fillCircle(61, 38, 12);
      g.fillStyle(0x75f5ff, 0.72);
      g.fillCircle(28, 38, 5);
      g.fillCircle(94, 38, 5);
      g.generateTexture("enemyBomber", 122, 78);
      g.clear();
      g.fillStyle(0xdec182, 1);
      g.beginPath();
      g.moveTo(31, 2);
      g.lineTo(52, 10);
      g.lineTo(58, 30);
      g.lineTo(45, 55);
      g.lineTo(19, 58);
      g.lineTo(4, 39);
      g.lineTo(8, 14);
      g.closePath();
      g.fillPath();
      g.fillStyle(0x7a5a38, 0.82);
      g.fillCircle(18, 19, 6);
      g.fillCircle(39, 34, 9);
      g.fillCircle(28, 47, 5);
      g.lineStyle(2, 0xf5d287, 0.62);
      g.strokeCircle(30, 30, 27);
      g.generateTexture("asteroid", 62, 62);
      g.clear();
      g.fillStyle(0xff8fa8, 1);
      g.fillCircle(8, 8, 7);
      g.generateTexture("enemyBullet", 16, 16);
      g.clear();
      g.fillStyle(0x89f2c1, 1);
      g.fillCircle(17, 17, 15);
      g.lineStyle(3, 0xfff8df, 1);
      g.strokeCircle(17, 17, 10);
      g.generateTexture("powerup", 34, 34);
      g.clear();
      g.fillStyle(0x070b14, 1);
      g.fillRoundedRect(0, 18, 260, 88, 22);
      g.fillStyle(0x15192d, 1);
      g.fillRoundedRect(16, 0, 228, 112, 26);
      g.fillStyle(0x242c45, 1);
      g.fillTriangle(0, 58, 62, 18, 62, 100);
      g.fillTriangle(260, 58, 198, 18, 198, 100);
      g.lineStyle(4, 0xf5d287, 0.9);
      g.strokeRoundedRect(18, 8, 224, 96, 22);
      g.lineStyle(2, 0x75f5ff, 0.5);
      g.strokeRoundedRect(34, 24, 192, 64, 16);
      g.fillStyle(0xff8fa8, 0.92);
      g.fillCircle(130, 56, 18);
      g.fillStyle(0x75f5ff, 0.64);
      g.fillCircle(72, 56, 8);
      g.fillCircle(188, 56, 8);
      g.generateTexture("boss", 260, 112);
      g.destroy();
    }

    createBackdrop() {
      this.starLayers = [];
      for (let layer = 0; layer < 3; layer += 1) {
        const graphics = this.add.graphics().setDepth(layer);
        const stars = Array.from({ length: layer === 0 ? 130 : (layer === 1 ? 96 : 72) }, () => ({
          x: Phaser.Math.Between(0, this.width),
          y: Phaser.Math.Between(0, this.height),
          r: Phaser.Math.FloatBetween(0.45, 1.65 + layer * 0.9),
          c: layer === 2 && Math.random() > 0.65 ? 0x75f5ff : 0xffffff
        }));
        this.starLayers.push({ graphics, stars, speed: 10 + layer * 30 });
      }
      this.orbits = this.add.graphics().setDepth(1).setAlpha(0.52);
      this.nebula = this.add.graphics().setDepth(0);
      this.meteorLayer = this.add.graphics().setDepth(2);
      this.distantPlanet = this.add.graphics().setDepth(1);
    }

    startWave(index) {
      this.state.wave = index;
      this.state.kills = 0;
      const config = WAVE_CONFIGS[index];
      this.spawnTimer.delay = config.spawn;
      this.asteroidTimer.paused = false;
      if (config.boss) {
        this.spawnTimer.paused = true;
        this.asteroidTimer.delay = 760;
        this.time.delayedCall(900, () => this.spawnBoss());
      } else {
        this.spawnTimer.paused = false;
        this.asteroidTimer.delay = index === 0 ? 1120 : 720;
      }
      const label = t(config.labelKey);
      const objective = t(config.objectiveKey);
      this.waveBanner.setText(`${label}\n${objective}`);
      this.waveBanner.setStyle({ fontSize: this.bannerFontSize() });
      this.tweens.add({ targets: this.waveBanner, alpha: 1, y: this.bannerY(), duration: 420, yoyo: true, hold: 1350, ease: "Sine.easeInOut" });
      setStatus(fmt(t("gameMissionPrefix"), { wave: index + 1, objective }));
      updateHud(this.state);
    }

    spawnEnemy() {
      if (this.state.gameOver || this.state.missionComplete) return;
      const config = WAVE_CONFIGS[this.state.wave];
      const x = Phaser.Math.Between(60, this.width - 60);
      const elite = this.state.wave > 0 && Math.random() > 0.74;
      const scout = !elite && Math.random() > 0.52;
      const texture = elite ? "enemyBomber" : (scout ? "enemyScout" : "enemy");
      const enemy = this.enemies.create(x, -40, texture);
      enemy.setCircle(elite ? 25 : 18, elite ? 36 : 24, elite ? 14 : 0);
      enemy.hp = elite ? 6 : (scout ? 1 : (this.state.wave === 0 ? 1 : 2));
      enemy.score = elite ? 420 + this.state.wave * 110 : (scout ? 150 : 120 + this.state.wave * 45);
      enemy.kind = elite ? "bomber" : (scout ? "scout" : "fighter");
      enemy.pattern = Math.random() > 0.5 ? "sine" : "dive";
      enemy.phase = Math.random() * Math.PI * 2;
      const riftFactor = this.state.rift > 0 ? 0.54 : 1;
      enemy.setVelocity(Phaser.Math.Between(-50, 50) * riftFactor, (118 + this.state.wave * 32) * config.speed * (scout ? 1.28 : 1) * riftFactor);
      enemy.setDepth(8);
      enemy.setScale(elite ? 1.08 : (scout ? 0.9 : 1));
      enemy.setTint(elite ? 0xf5d287 : (this.state.rift > 0 ? 0xb99cff : 0xffffff));
      if (this.state.wave > 0 && Math.random() > 0.56) {
        this.time.delayedCall(700, () => this.fireEnemy(enemy));
      }
      if (elite) {
        this.time.delayedCall(1180, () => this.fireEnemy(enemy));
        this.time.delayedCall(1540, () => this.fireEnemy(enemy));
      }
    }

    spawnBoss() {
      if (this.boss || this.state.gameOver) return;
      this.boss = this.enemies.create(this.width / 2, -80, "boss");
      this.boss.setSize(224, 84, true);
      this.boss.hp = 120;
      this.boss.score = 3600;
      this.boss.isBoss = true;
      this.boss.kind = "boss";
      this.state.bossHp = this.boss.hp;
      this.state.bossMax = this.boss.hp;
      this.boss.setDepth(9);
      this.tweens.add({ targets: this.boss, y: this.height * 0.2, duration: 900, ease: "Power2" });
      this.bossTimer = this.time.addEvent({ delay: 620, callback: () => this.fireBoss(), loop: true });
      setStatus(t("gameBossStatus"));
    }

    spawnAsteroid() {
      if (this.state.gameOver || this.state.missionComplete) return;
      const asteroid = this.asteroids.create(Phaser.Math.Between(40, this.width - 40), -40, "asteroid");
      const scale = Phaser.Math.FloatBetween(0.62, 1.28);
      asteroid.setScale(scale);
      asteroid.setCircle(24, 4, 4);
      asteroid.hp = Math.ceil(scale * 2);
      asteroid.score = 35;
      asteroid.kind = "asteroid";
      asteroid.setVelocity(Phaser.Math.Between(-45, 45), Phaser.Math.Between(92, 180) + this.state.wave * 18);
      asteroid.setAngularVelocity(Phaser.Math.Between(-70, 70));
      asteroid.setDepth(5);
    }

    fire(manual) {
      if (this.state.gameOver || this.state.missionComplete) return;
      if (!manual && !this.input.activePointer.isDown && !this.keys.SPACE.isDown && !this.touchFire) return;
      const count = this.state.weapon >= 3 ? 3 : (this.state.weapon >= 2 ? 2 : 1);
      const offsets = count === 3 ? [-22, 0, 22] : (count === 2 ? [-14, 14] : [0]);
      offsets.forEach((offset, index) => {
        const bullet = this.bullets.get(this.player.x + offset, this.player.y - 34, "laser");
        if (!bullet) return;
        bullet.setActive(true).setVisible(true).setDepth(10);
        bullet.body.enable = true;
        bullet.setVelocity((index - (offsets.length - 1) / 2) * 42, -720);
        bullet.damage = this.state.overdrive > 0 ? 2 : 1;
        bullet.setBlendMode(Phaser.BlendModes.ADD);
      });
      if (manual) playSound("laser");
    }

    fireEnemy(enemy) {
      if (!enemy?.active || this.state.gameOver) return;
      if (enemy.y < 16 || enemy.y > this.height - 42) return;
      const bullet = this.enemyBullets.get(enemy.x, enemy.y + 24, "enemyBullet");
      if (!bullet) return;
      bullet.setActive(true).setVisible(true).setDepth(7);
      bullet.body.enable = true;
      this.physics.moveToObject(bullet, this.player, (240 + this.state.wave * 32) * (this.state.rift > 0 ? 0.52 : 1));
    }

    fireBoss() {
      if (!this.boss?.active || this.state.gameOver) return;
      const mode = Math.floor(this.time.now / 1600) % 3;
      const count = mode === 0 ? 12 : (mode === 1 ? 18 : 7);
      const aim = Phaser.Math.RadToDeg(Phaser.Math.Angle.Between(this.boss.x, this.boss.y, this.player.x, this.player.y));
      for (let i = 0; i < count; i += 1) {
        const angle = mode === 0
          ? -168 + i * 28 + Math.sin(this.time.now / 380) * 8
          : (mode === 1
            ? 18 + i * 20 + this.time.now * 0.055
            : aim - 42 + i * 14);
        const bullet = this.enemyBullets.get(this.boss.x, this.boss.y + 38, "enemyBullet");
        if (!bullet) continue;
        bullet.setActive(true).setVisible(true).setDepth(7);
        bullet.body.enable = true;
        bullet.setBlendMode(Phaser.BlendModes.ADD);
        this.physics.velocityFromAngle(angle, (mode === 2 ? 260 : 210) * (this.state.rift > 0 ? 0.5 : 1), bullet.body.velocity);
      }
    }

    hitEnemy(bullet, enemy) {
      bullet.disableBody(true, true);
      enemy.hp -= bullet.damage || 1;
      if (enemy.isBoss) this.state.bossHp = Math.max(0, enemy.hp);
      this.flashAt(enemy.x, enemy.y, enemy.isBoss ? "#f5d287" : "#75f5ff", enemy.isBoss ? 22 : 12);
      if (enemy.hp > 0) return;
      const wasBoss = enemy.isBoss;
      const score = enemy.score || 100;
      enemy.disableBody(true, true);
      this.state.combo = Math.min(9, (this.state.combo || 1) + (wasBoss ? 2 : 1));
      this.state.energy = Math.min(100, (this.state.energy || 0) + (wasBoss ? 40 : 8));
      this.state.score += score * this.state.combo;
      this.state.kills += 1;
      if (Math.random() > (wasBoss ? 0.1 : 0.72)) this.dropPowerup(enemy.x, enemy.y);
      playSound(wasBoss ? "success" : "blast");
      if (wasBoss) this.completeMission();
      else this.checkWaveProgress();
      updateHud(this.state);
    }

    hitAsteroid(bullet, asteroid) {
      bullet.disableBody(true, true);
      asteroid.hp -= bullet.damage || 1;
      this.flashAt(bullet.x, bullet.y, "#f5d287", 8);
      if (asteroid.hp > 0) return;
      asteroid.disableBody(true, true);
      this.state.energy = Math.min(100, (this.state.energy || 0) + 3);
      this.state.score += asteroid.score * Math.max(1, this.state.combo || 1);
      if (Math.random() > 0.82) this.dropPowerup(asteroid.x, asteroid.y);
      updateHud(this.state);
    }

    damagePlayer(player, hazard) {
      if (!hazard.active || this.state.shield > 0 || this.state.gameOver || this.state.missionComplete) return;
      hazard.disableBody(true, true);
      this.state.hull -= hazard.isBoss ? 35 : 18;
      this.state.combo = 1;
      this.state.energy = Math.max(0, this.state.energy - 18);
      this.state.shield = 850;
      this.flashAt(player.x, player.y, "#ff8fa8", 26);
      this.cameras.main.shake(170, 0.007);
      playSound("blast");
      if (this.state.hull <= 0) this.endGame(false);
      updateHud(this.state);
    }

    collectPowerup(player, powerup) {
      const type = powerup.kind;
      powerup.disableBody(true, true);
      if (type === "weapon") {
        this.state.weapon = Math.min(3, this.state.weapon + 1);
        setStatus(t("gameWeaponStatus"));
      } else if (type === "repair") {
        this.state.hull = Math.min(100, this.state.hull + 24);
        setStatus(t("gameRepairStatus"));
      } else {
        this.state.overdrive = 8000;
        this.state.energy = Math.min(100, this.state.energy + 18);
        setStatus(t("gameOverdriveStatus"));
      }
      playSound("success");
      updateHud(this.state);
    }

    dropPowerup(x, y) {
      const types = ["weapon", "repair", "overdrive"];
      const powerup = this.powerups.create(x, y, "powerup");
      powerup.kind = types[Phaser.Math.Between(0, types.length - 1)];
      powerup.setCircle(15, 2, 2);
      powerup.setVelocity(Phaser.Math.Between(-30, 30), 92);
      powerup.setDepth(9);
      powerup.setTint(powerup.kind === "repair" ? 0x89f2c1 : (powerup.kind === "weapon" ? 0x75f5ff : 0xf5d287));
    }

    canUseSkill(key) {
      if (this.state.gameOver || this.state.missionComplete) return false;
      if ((this.state.energy ?? 0) < SKILL_COSTS[key]) {
        setStatus(t("gameSkillNoEnergy"));
        playSound("select");
        return false;
      }
      if ((this.state.cooldowns?.[key] || 0) > 0) {
        setStatus(t("gameSkillCooling"));
        playSound("select");
        return false;
      }
      return true;
    }

    beginSkill(key) {
      this.state.energy = Math.max(0, this.state.energy - SKILL_COSTS[key]);
      this.state.cooldowns[key] = SKILL_COOLDOWNS[key];
      this.state.skillCooldown = Math.min(...Object.values(this.state.cooldowns).filter(Boolean), SKILL_COOLDOWNS[key]);
      this.state.skillReady = false;
      this.state.shield = Math.max(this.state.shield, 820);
    }

    castSkill() {
      if (!this.canUseSkill("nova")) return;
      this.beginSkill("nova");
      this.state.shield = Math.max(this.state.shield, 1100);
      const ring = this.add.circle(this.player.x, this.player.y, 28, 0x75f5ff, 0.18).setStrokeStyle(3, 0xf5d287, 0.92).setDepth(20);
      this.tweens.add({ targets: ring, radius: 340, alpha: 0, duration: 520, ease: "Expo.easeOut", onComplete: () => ring.destroy() });
      [...this.enemies.getChildren(), ...this.asteroids.getChildren()].forEach((target) => {
        if (!target.active) return;
        const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, target.x, target.y);
        if (distance < 345) {
          target.hp -= target.isBoss ? 8 : 5;
          this.flashAt(target.x, target.y, "#fff8df", 12);
          if (target.hp <= 0) {
            if (target.kind === "asteroid") {
              target.disableBody(true, true);
              this.state.score += target.score || 35;
              if (Math.random() > 0.86) this.dropPowerup(target.x, target.y);
            } else {
              this.hitEnemy({ disableBody: () => {} }, target);
            }
          }
        }
      });
      this.enemyBullets.clear(true, true);
      setStatus(t("gameNovaStatus"));
      playSound("success");
      updateHud(this.state);
    }

    castIonLance() {
      if (!this.canUseSkill("lance")) return;
      this.beginSkill("lance");
      const beamWidth = this.width < 540 ? 34 : 46;
      const beam = this.add.rectangle(this.player.x, this.player.y * 0.5, beamWidth, this.player.y, 0x75f5ff, 0.18)
        .setStrokeStyle(2, 0xfff8df, 0.86)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setDepth(21);
      const core = this.add.rectangle(this.player.x, this.player.y * 0.5, Math.max(10, beamWidth * 0.34), this.player.y, 0xfff8df, 0.62)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setDepth(22);
      this.tweens.add({ targets: [beam, core], alpha: 0, scaleX: 2.4, duration: 360, ease: "Expo.easeOut", onComplete: () => { beam.destroy(); core.destroy(); } });
      const targets = [...this.enemies.getChildren(), ...this.asteroids.getChildren()];
      targets.forEach((target) => {
        if (!target.active || target.y > this.player.y + 12) return;
        if (Math.abs(target.x - this.player.x) > beamWidth * 1.4) return;
        target.hp -= target.isBoss ? 24 : 7;
        this.flashAt(target.x, target.y, target.isBoss ? "#f5d287" : "#75f5ff", target.isBoss ? 30 : 14);
        if (target.hp <= 0) {
          if (target.kind === "asteroid") {
            target.disableBody(true, true);
            this.state.score += target.score || 35;
          } else {
            this.hitEnemy({ disableBody: () => {} }, target);
          }
        }
      });
      this.cameras.main.flash(120, 117, 245, 255, false);
      setStatus(t("gameLanceStatus"));
      playSound("success");
      updateHud(this.state);
    }

    castTimeRift() {
      if (!this.canUseSkill("rift")) return;
      this.beginSkill("rift");
      this.state.rift = 4200;
      this.state.shield = Math.max(this.state.shield, 1500);
      const rift = this.add.circle(this.player.x, this.player.y - 120, 64, 0x9f8cff, 0.14)
        .setStrokeStyle(3, 0x75f5ff, 0.78)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setDepth(19);
      this.tweens.add({ targets: rift, radius: Math.min(this.width, this.height) * 0.58, alpha: 0, duration: 980, ease: "Expo.easeOut", onComplete: () => rift.destroy() });
      [...this.enemies.getChildren(), ...this.enemyBullets.getChildren(), ...this.asteroids.getChildren()].forEach((target) => {
        if (!target.active || !target.body) return;
        target.setTint?.(0xb99cff);
        target.body.velocity.x *= 0.42;
        target.body.velocity.y *= 0.42;
      });
      setStatus(t("gameRiftStatus"));
      playSound("success");
      updateHud(this.state);
    }

    checkWaveProgress() {
      const config = WAVE_CONFIGS[this.state.wave];
      if (config.boss || this.state.kills < config.target) return;
      const nextWave = this.state.wave + 1;
      if (nextWave < WAVE_CONFIGS.length) {
        this.spawnTimer.paused = true;
        this.time.delayedCall(1100, () => this.startWave(nextWave));
      }
    }

    completeMission() {
      if (this.state.missionComplete) return;
      this.state.missionComplete = true;
      this.state.bossHp = 0;
      this.spawnTimer.paused = true;
      this.asteroidTimer.paused = true;
      this.bossTimer?.remove(false);
      this.enemyBullets.clear(true, true);
      this.enemies.clear(true, true);
      this.asteroids.clear(true, true);
      setStatus(t("gameMissionCompleteStatus"));
      this.waveBanner.setText(t("gameMissionCompleteBanner")).setAlpha(1).setY(this.height * 0.32);
      this.tweens.add({ targets: this.waveBanner, scale: 1.06, yoyo: true, repeat: -1, duration: 820, ease: "Sine.easeInOut" });
      playSound("success");
    }

    endGame() {
      if (this.state.gameOver) return;
      this.state.gameOver = true;
      this.state.bossHp = 0;
      this.spawnTimer.paused = true;
      this.asteroidTimer.paused = true;
      this.bossTimer?.remove(false);
      setStatus(t("gameFailedStatus"));
      this.waveBanner.setText(t("gameFailedBanner")).setAlpha(1).setY(this.height * 0.32);
      this.cameras.main.shake(320, 0.012);
      playSound("close");
    }

    flashAt(x, y, color, size) {
      const flash = this.add.circle(x, y, size, Phaser.Display.Color.HexStringToColor(color).color, 0.72).setBlendMode(Phaser.BlendModes.ADD).setDepth(22);
      this.tweens.add({ targets: flash, scale: 3.2, alpha: 0, duration: 360, ease: "Power2", onComplete: () => flash.destroy() });
    }

    update(time, delta) {
      const dt = delta / 1000;
      this.drawBackdrop(dt, time);
      if (this.state.gameOver || this.state.missionComplete) return;

      const move = new Phaser.Math.Vector2(0, 0);
      if (this.keys.A.isDown || this.keys.LEFT.isDown) move.x -= 1;
      if (this.keys.D.isDown || this.keys.RIGHT.isDown) move.x += 1;
      if (this.keys.W.isDown || this.keys.UP.isDown) move.y -= 1;
      if (this.keys.S.isDown || this.keys.DOWN.isDown) move.y += 1;
      if (move.lengthSq() > 0) {
        move.normalize().scale(this.focusKey?.isDown ? 310 : 520);
        this.player.setAcceleration(move.x, move.y);
      } else {
        const pointer = this.input.activePointer;
        if (pointer.isDown || pointer.x !== 0 || pointer.y !== 0) {
          this.player.target.set(pointer.x, pointer.y);
        }
        const dx = this.player.target.x - this.player.x;
        const dy = this.player.target.y - this.player.y;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const focused = this.focusKey?.isDown;
        const speed = Phaser.Math.Clamp(distance * (focused ? 4.2 : 7.2), 0, focused ? 390 : 760);
        const desiredX = dx / distance * speed;
        const desiredY = dy / distance * speed;
        this.player.setAcceleration(0, 0);
        this.player.setVelocity(
          Phaser.Math.Linear(this.player.body.velocity.x, desiredX, 0.26),
          Phaser.Math.Linear(this.player.body.velocity.y, desiredY, 0.26)
        );
      }
      this.player.x = Phaser.Math.Clamp(this.player.x, 34, this.width - 34);
      this.player.y = Phaser.Math.Clamp(this.player.y, this.height * 0.34, this.height - 46);
      const roll = Phaser.Math.Clamp(this.player.body.velocity.x / 1180, -0.35, 0.35);
      this.player.setRotation(roll);
      this.playerGlow.setPosition(this.player.x, this.player.y).setRotation(roll).setAlpha(this.state.shield > 0 ? 0.9 : 0.42);
      this.hitCore
        .setPosition(this.player.x, this.player.y)
        .setScale(this.focusKey?.isDown ? 1.32 : 1)
        .setAlpha(this.state.shield > 0 ? 1 : 0.82);
      this.state.shield = Math.max(0, this.state.shield - delta);
      Object.keys(this.state.cooldowns).forEach((key) => {
        this.state.cooldowns[key] = Math.max(0, this.state.cooldowns[key] - delta);
      });
      const pendingCooldowns = Object.values(this.state.cooldowns).filter((value) => value > 0);
      this.state.skillCooldown = pendingCooldowns.length ? Math.min(...pendingCooldowns) : 0;
      this.state.skillReady = Object.values(this.state.cooldowns).every((value) => value <= 0);
      this.state.overdrive = Math.max(0, this.state.overdrive - delta);
      this.state.rift = Math.max(0, this.state.rift - delta);
      this.state.energy = Math.min(100, this.state.energy + dt * 2.4);
      if (this.boss?.active) this.state.bossHp = Math.max(0, this.boss.hp);
      this.cleanupOffscreen();
      updateHud(this.state);
    }

    drawBackdrop(dt, time) {
      this.nebula.clear();
      this.nebula.fillStyle(0x01030a, 1);
      this.nebula.fillRect(0, 0, this.width, this.height);
      this.nebula.fillStyle(0x061120, 0.64);
      this.nebula.fillCircle(this.width * 0.5, this.height * 0.7, Math.min(this.width, this.height) * 0.5);
      this.nebula.fillStyle(0x2a1738, 0.22);
      this.nebula.fillEllipse(this.width * 0.26, this.height * 0.22, this.width * 0.68, this.height * 0.36);
      this.nebula.fillStyle(0x0d3359, 0.18);
      this.nebula.fillEllipse(this.width * 0.74, this.height * 0.32, this.width * 0.76, this.height * 0.22);
      for (let i = 0; i < 18; i += 1) {
        const offset = i / 17;
        const x = this.width * (0.04 + offset * 0.92);
        const y = this.height * (0.2 + Math.sin(offset * Math.PI * 1.4 + time / 2600) * 0.16 + offset * 0.28);
        const alpha = 0.035 + Math.sin(time / 900 + i) * 0.018;
        this.nebula.fillStyle(i % 3 === 0 ? 0x75f5ff : (i % 3 === 1 ? 0xb99cff : 0xf5d287), Math.max(0.015, alpha));
        this.nebula.fillEllipse(x, y, this.width * (0.18 + offset * 0.12), this.height * 0.07);
      }
      this.distantPlanet.clear();
      this.distantPlanet.fillStyle(0x1c2940, 0.34);
      this.distantPlanet.fillCircle(this.width * 0.82, this.height * 0.18, Math.min(this.width, this.height) * 0.11);
      this.distantPlanet.fillStyle(0x75f5ff, 0.08);
      this.distantPlanet.fillEllipse(this.width * 0.82, this.height * 0.18, Math.min(this.width, this.height) * 0.28, Math.min(this.width, this.height) * 0.045);
      this.nebula.lineStyle(2, 0x75f5ff, 0.08);
      this.nebula.lineBetween(this.width * 0.08, this.height * 0.78, this.width * 0.92, this.height * 0.12);
      this.nebula.lineStyle(1, 0xb99cff, 0.08);
      this.nebula.lineBetween(this.width * 0.02, this.height * 0.64, this.width * 0.84, this.height * 0.04);
      this.nebula.lineStyle(1, 0x75f5ff, 0.1);
      for (let i = 0; i < 7; i += 1) {
        this.nebula.strokeEllipse(this.width * 0.52, this.height * 0.78, this.width * (0.36 + i * 0.1), this.height * (0.12 + i * 0.035));
      }
      this.orbits.clear();
      this.orbits.lineStyle(1, 0xf5d287, 0.12);
      this.orbits.strokeCircle(this.width * 0.52, this.height * 0.55, Math.min(this.width, this.height) * 0.28);
      this.starLayers.forEach((layer) => {
        layer.graphics.clear();
        layer.stars.forEach((star) => {
          star.y += layer.speed * dt;
          if (star.y > this.height + 8) {
            star.y = -8;
            star.x = Phaser.Math.Between(0, this.width);
          }
          layer.graphics.fillStyle(star.c, 0.38 + star.r * 0.18);
          layer.graphics.fillCircle(star.x, star.y, star.r);
        });
      });
      this.meteorLayer.clear();
      const sweep = (time * 0.08) % (this.width + this.height);
      if (sweep < this.width * 0.92) {
        this.meteorLayer.lineStyle(2, 0xfff8df, 0.28);
        this.meteorLayer.lineBetween(sweep, this.height * 0.14, sweep + 130, this.height * 0.14 + 62);
        this.meteorLayer.lineStyle(5, 0x75f5ff, 0.08);
        this.meteorLayer.lineBetween(sweep - 12, this.height * 0.14 - 5, sweep + 142, this.height * 0.14 + 67);
      }
    }

    cleanupOffscreen() {
      const kill = (child) => {
        if (child.active && (child.y < -120 || child.y > this.height + 130 || child.x < -160 || child.x > this.width + 160)) {
          child.disableBody(true, true);
        }
      };
      this.bullets.children.each(kill);
      this.enemyBullets.children.each(kill);
      this.enemies.children.each((enemy) => {
        if (!enemy.isBoss) kill(enemy);
        if (enemy.active && !enemy.isBoss && this.state.wave > 0 && Math.random() < 0.004) this.fireEnemy(enemy);
      });
      this.asteroids.children.each(kill);
      this.powerups.children.each(kill);
    }
  }

  const open = () => {
    if (phaserGame) return;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("game-open");
    mount.innerHTML = "";
    setStatus(t("gameStatusBoot"));
    updateHud({ score: 0, wave: 0, hull: 100, energy: 100, combo: 1, cooldowns: { nova: 0, lance: 0, rift: 0 }, skillReady: true, skillCooldown: 0, bossHp: 0, bossMax: 0 });
    phaserGame = new Phaser.Game({
      type: Phaser.AUTO,
      parent: mount,
      width: Math.max(360, mount.clientWidth),
      height: Math.max(360, mount.clientHeight),
      backgroundColor: "#01040a",
      physics: {
        default: "arcade",
        arcade: { debug: false }
      },
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      scene: LunarSquadronScene
    });
    playSound("moon");
    if (window.gsap) {
      gsap.killTweensOf(overlay);
      gsap.fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.42, ease: "power3.out", clearProps: "opacity,visibility" });
      gsap.fromTo(".space-game__hud, .space-game__status", { y: -14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.46, stagger: 0.05, ease: "power3.out" });
    }
  };

  const close = () => {
    activeScene = null;
    if (phaserGame) {
      phaserGame.destroy(true);
      phaserGame = null;
    }
    mount.innerHTML = "";
    document.body.classList.remove("game-open");
    playSound("close");
    const finalize = () => {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      if (window.gsap) gsap.set(overlay, { clearProps: "opacity,visibility" });
    };
    if (window.gsap) {
      gsap.killTweensOf(overlay);
      gsap.to(overlay, { autoAlpha: 0, duration: 0.24, ease: "power2.out", onComplete: finalize });
    } else {
      finalize();
    }
  };

  const setTouchFire = (enabled) => {
    touchFire?.classList.toggle("is-active", enabled);
    if (!activeScene) return;
    activeScene.touchFire = enabled;
    if (enabled) activeScene.fire(true);
  };

  touchFire?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    setTouchFire(true);
    playSound("laser");
  });
  ["pointerup", "pointerleave", "pointercancel"].forEach((type) => {
    touchFire?.addEventListener(type, () => setTouchFire(false));
  });
  touchSkill?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    activeScene?.castSkill();
  });
  touchLance?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    activeScene?.castIonLance();
  });
  touchRift?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    activeScene?.castTimeRift();
  });

  closeButton.addEventListener("click", close);
  window.addEventListener("resize", () => {
    if (phaserGame) phaserGame.scale.resize(Math.max(360, mount.clientWidth), Math.max(360, mount.clientHeight));
  });

  const refreshCopy = () => {
    if (!phaserGame) {
      setStatus(t("gameStatusBoot"));
      updateHud({ score: 0, wave: 0, hull: 100, energy: 100, combo: 1, cooldowns: { nova: 0, lance: 0, rift: 0 }, bossHp: 0, bossMax: 0 });
    }
  };

  spaceGameController = { open, close, refreshCopy };
}

function bindGlobalEvents() {
  $("#openFeatured").addEventListener("click", () => openWorld("modernism-symbolism"));
  $$("a[href^='#']").forEach((link) => link.addEventListener("click", () => playSound("select")));
  $$("[data-close-world]").forEach((el) => el.addEventListener("click", closeWorld));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeWorld();
  });
  $("#soundToggle").classList.toggle("is-on", state.sound);
  $("#soundToggle").addEventListener("click", () => {
    state.sound = !state.sound;
    $("#soundToggle").classList.toggle("is-on", state.sound);
    if (state.sound) playSound("success");
    if (window.anime) {
      anime({ targets: "#soundToggle", rotate: [0, 8, -8, 0], duration: 420, easing: "easeOutElastic(1, .5)" });
    }
  });
}

function init() {
  renderBooks();
  renderArchive();
  renderOrbitMap();
  setupBookRail();
  setupOpenButtons();
  setupLanguageSwitcher();
  setupTilt();
  setupMagnetic();
  initStars();
  initLibraryGate();
  initThreeCosmos();
  initClock();
  initSpaceGame();
  bindGlobalEvents();
  initScrollAnimations();
}

document.addEventListener("DOMContentLoaded", init);
