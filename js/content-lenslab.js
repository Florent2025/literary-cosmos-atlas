/* Lens Lab: one passage, many theories.
 * Passages are public-domain originals; translations are the atlas's own.
 * Each lens marks exact substrings of the original text and offers a note and a guiding question. */
window.LC_LENSLAB = {
  passages: [
    {
      id: "chunwang", lang: "zh", year: "757",
      author: { zh: "杜甫", en: "Du Fu", fr: "Du Fu" },
      title: { zh: "《春望》", en: "“Spring View”", fr: "« Vue de printemps »" },
      text: "国破山河在，城春草木深。\n感时花溅泪，恨别鸟惊心。\n烽火连三月，家书抵万金。\n白头搔更短，浑欲不胜簪。",
      translation: {
        en: "The state is broken; mountains and rivers remain.\nSpring in the city: grass and trees grow deep.\nGrieving the times, flowers splash with tears;\nhating parting, birds startle the heart.\nBeacon fires have burned three months on end;\na letter from home is worth ten thousand in gold.\nI scratch my white head—the hair grows shorter,\nsoon too thin to hold a hairpin.",
        fr: "Le pays est brisé ; montagnes et fleuves demeurent.\nPrintemps sur la ville : herbes et arbres profonds.\nÉmues par le temps, les fleurs s’éclaboussent de larmes ;\nblessé par l’adieu, l’oiseau fait sursauter le cœur.\nLes feux d’alarme brûlent depuis trois mois ;\nune lettre des miens vaut dix mille pièces d’or.\nJe gratte ma tête blanche, les cheveux raccourcissent —\nbientôt trop rares pour tenir l’épingle."
      },
      lenses: [
        { volume: "chinese-poetics", marks: ["国破山河在", "城春草木深"],
          zh: ["情景交融的“境”", "首联以山河“在”反衬国家“破”，春天越繁茂，荒芜越触目：景物不是背景，而是情感结构本身。", "如果把“深”换成“绿”，意境会失去什么？"],
          en: ["Scene and feeling fused", "The mountains that “remain” sharpen the state that is “broken”; the lusher the spring, the starker the ruin. Scenery is the structure of feeling itself.", "What would the poem lose if “deep” became “green”?"],
          fr: ["Paysage et sentiment fondus", "Les monts qui « demeurent » aiguisent le pays « brisé » ; plus le printemps est riche, plus la ruine frappe. Le paysage est la structure même du sentiment.", "Que perdrait le poème si « profond » devenait « vert » ?"] },
        { volume: "russian-formalism", marks: ["感时花溅泪", "恨别鸟惊心", "烽火连三月", "家书抵万金"],
          zh: ["对仗作为手法", "颔联与颈联严格对仗：感时/恨别、花/鸟、溅泪/惊心。形式的平衡反而让失衡的世界更加刺目。", "对仗在这里是装饰，还是一种“陌生化”的阻滞？"],
          en: ["Parallelism as device", "The middle couplets are strictly parallel—grieving/hating, flowers/birds, tears/heart. Formal balance makes an unbalanced world more glaring.", "Is parallelism ornament here, or an estranging brake on perception?"],
          fr: ["Le parallélisme comme procédé", "Les distiques centraux sont strictement parallèles — peine/haine, fleurs/oiseaux, larmes/cœur. L’équilibre formel rend plus criant un monde déséquilibré.", "Le parallélisme est-il ornement, ou frein défamiliarisant ?"] },
        { volume: "reader-response", marks: ["花溅泪", "鸟惊心"],
          zh: ["歧义与读者的选择", "是花在“溅泪”，还是诗人见花而落泪？汉语省略主语，留下“空白”，不同时代的读者给出了不同的填补。", "你会把哪一种读法当作“正确”？依据是什么？"],
          en: ["Ambiguity and the reader’s choice", "Do the flowers shed tears, or does the poet weep at flowers? Classical Chinese omits the subject, leaving a blank that readers across centuries fill differently.", "Which reading would you call correct—and on what grounds?"],
          fr: ["Ambiguïté et choix du lecteur", "Les fleurs pleurent-elles, ou le poète pleure-t-il devant elles ? Le chinois classique omet le sujet et laisse un blanc que les lecteurs comblent différemment.", "Quelle lecture diriez-vous juste, et pourquoi ?"] },
        { volume: "new-historicism", marks: ["烽火连三月", "家书抵万金"],
          zh: ["战争、通信与价值", "安史之乱中长安陷落（756—757），书信成为稀缺之物：“抵万金”把情感价值写成经济价值。", "这首诗怎样记录了战时的信息流通？"],
          en: ["War, letters and value", "With Chang’an fallen during the An Lushan rebellion (756–757), letters became scarce; “worth ten thousand in gold” turns affective value into economic value.", "How does the poem record the circulation of news in wartime?"],
          fr: ["Guerre, lettres et valeur", "Chang’an tombée pendant la rébellion d’An Lushan (756–757), les lettres deviennent rares ; « dix mille pièces d’or » change la valeur affective en valeur économique.", "Comment le poème enregistre-t-il la circulation des nouvelles en temps de guerre ?"] },
        { volume: "ecocriticism-world", marks: ["山河在", "草木深"],
          zh: ["无动于衷的自然", "山河与草木在人类灾难之后依然生长。生态批评会追问：这是安慰，还是对人类中心叙事的提醒？", "如果从草木的时间尺度来读，这首诗讲述的是什么？"],
          en: ["Nature’s indifference", "Mountains, rivers and plants persist after human catastrophe. Ecocriticism asks: consolation, or a reminder against human-centred narrative?", "Read on the timescale of the grass, what is this poem about?"],
          fr: ["L’indifférence de la nature", "Montagnes, fleuves et plantes persistent après la catastrophe humaine. Consolation, ou rappel contre le récit anthropocentré ?", "Lu à l’échelle du temps des herbes, de quoi parle ce poème ?"] }
      ]
    },
    {
      id: "madman", lang: "zh", year: "1918",
      author: { zh: "鲁迅", en: "Lu Xun", fr: "Lu Xun" },
      title: { zh: "《狂人日记》（节选）", en: "“A Madman’s Diary” (excerpt)", fr: "« Le Journal d’un fou » (extrait)" },
      text: "我翻开历史一查，这历史没有年代，歪歪斜斜的每叶上都写着“仁义道德”几个字。我横竖睡不着，仔细看了半夜，才从字缝里看出字来，满本都写着两个字是“吃人”！",
      translation: {
        en: "I opened a history book to look it up. It had no dates, and across every crooked page were written the words “Benevolence, Righteousness, Virtue, Morality.” Unable to sleep, I studied it half the night, until I began to see words between the words: the whole book was filled with two words—“Eat people!”",
        fr: "J’ouvris un livre d’histoire pour vérifier. Il n’avait pas de dates, et sur chaque page de travers étaient écrits les mots « Bienveillance, Justice, Vertu, Morale ». Ne pouvant dormir, je l’examinai la moitié de la nuit, jusqu’à voir des mots entre les mots : tout le livre était rempli de deux mots — « Manger les hommes » !"
      },
      lenses: [
        { volume: "poststructuralism", marks: ["从字缝里看出字来", "仁义道德", "吃人"],
          zh: ["在字缝里阅读", "“仁义道德”的表面文字之下读出“吃人”：这是一种症候式、解构式的阅读——文本说出的与其压抑的互相依存。", "“字缝”在你读过的其他文本里存在吗？"],
          en: ["Reading between the words", "Under the surface words “Benevolence, Righteousness” lies “Eat people”: a symptomatic, deconstructive reading in which what a text says depends on what it represses.", "Where else have you found “words between the words”?"],
          fr: ["Lire entre les mots", "Sous « Bienveillance, Justice » surgit « Manger les hommes » : lecture symptomale et déconstructive où le dit dépend du refoulé.", "Où avez-vous trouvé d’autres « mots entre les mots » ?"] },
        { volume: "psychoanalysis", marks: ["我横竖睡不着", "仔细看了半夜"],
          zh: ["疯狂、失眠与真相", "叙述者的“迫害妄想”恰恰成为洞察的条件。精神分析会追问：疯癫在这里是症状，还是被压抑的真相的返回？", "如果叙述者不“疯”，这段话还成立吗？"],
          en: ["Madness, sleeplessness, truth", "The narrator’s paranoia becomes the condition of insight. Psychoanalysis asks: is madness a symptom, or the return of a repressed truth?", "Would the passage still work if the narrator were not “mad”?"],
          fr: ["Folie, insomnie, vérité", "La paranoïa du narrateur devient condition de lucidité. Symptôme, ou retour d’une vérité refoulée ?", "Le passage tiendrait-il si le narrateur n’était pas « fou » ?"] },
        { volume: "marxism", marks: ["这历史没有年代", "满本都写着两个字是“吃人”"],
          zh: ["意识形态批判", "“没有年代”的历史意味着被自然化的秩序；“吃人”把伦理话语还原为对弱者生命的剥夺。", "谁在这部“历史”中被吃？谁在书写它？"],
          en: ["Critique of ideology", "A history “with no dates” is an order naturalised; “eat people” reduces moral discourse to the consumption of the weak.", "Who is eaten in this “history”—and who writes it?"],
          fr: ["Critique de l’idéologie", "Une histoire « sans dates » est un ordre naturalisé ; « manger les hommes » ramène le discours moral à la consommation des faibles.", "Qui est mangé dans cette « histoire », et qui l’écrit ?"] },
        { volume: "russian-formalism", marks: ["歪歪斜斜的每叶上"],
          zh: ["日记体与陌生化", "小说以文言小序框住白话日记，让“正常”的叙述者与“疯狂”的日记形成反差；歪斜的书页把熟悉的经典变得陌生。", "文言小序与白话正文的并置产生了什么效果？"],
          en: ["Diary form and estrangement", "A classical-Chinese preface frames a vernacular diary; the “sane” editor and the “mad” diarist collide, and crooked pages make a familiar canon strange.", "What does the clash of classical preface and vernacular diary achieve?"],
          fr: ["Journal et défamiliarisation", "Une préface en chinois classique encadre un journal en langue vernaculaire ; les pages de travers rendent étrange un canon familier.", "Quel effet produit le heurt entre préface classique et journal vernaculaire ?"] },
        { volume: "postcolonial", marks: ["仁义道德"],
          zh: ["现代性的双重压力", "五四时期的“反传统”同时回应帝国主义的冲击：批判自身传统，也意味着在西方现代性面前重新定位民族文化。", "批判传统与抵抗殖民之间存在张力吗？"],
          en: ["Modernity’s double pressure", "May Fourth iconoclasm also answers imperial pressure: critiquing one’s own tradition repositions national culture before Western modernity.", "Is there tension between critiquing tradition and resisting empire?"],
          fr: ["La double pression de la modernité", "L’iconoclasme du 4 Mai répond aussi à la pression impériale : critiquer sa tradition repositionne la culture nationale face à la modernité occidentale.", "Y a-t-il tension entre critique de la tradition et résistance à l’empire ?"] }
      ]
    },
    {
      id: "hamlet", lang: "en", year: "c. 1600",
      author: { zh: "莎士比亚", en: "William Shakespeare", fr: "William Shakespeare" },
      title: { zh: "《哈姆雷特》第三幕第一场", en: "Hamlet, Act 3, Scene 1", fr: "Hamlet, acte III, scène 1" },
      text: "To be, or not to be, that is the question:\nWhether ’tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles,\nAnd by opposing end them.",
      translation: {
        zh: "存在，还是不存在，这就是问题：\n是在心中默默忍受\n暴虐命运的弹弓与箭矢更为高贵，\n还是拿起武器对抗苦难之海，\n以反抗将它们终结？",
        fr: "Être, ou ne pas être, telle est la question :\nest-il plus noble pour l’esprit de souffrir\nles frondes et les flèches de la fortune outrageante,\nou de prendre les armes contre une mer de tourments\net, en s’y opposant, d’y mettre fin ?"
      },
      lenses: [
        { volume: "structuralism", marks: ["To be, or not to be", "to suffer", "to take arms"],
          zh: ["二元对立的骨架", "存在/不存在、忍受/反抗：独白由一组组对立构成，意义在对立的张力中展开。", "这些对立能否被一个“第三项”打破？"],
          en: ["A skeleton of oppositions", "Being/not being, suffering/taking arms: the soliloquy is built from oppositions, and meaning unfolds in their tension.", "Could a third term break these binaries?"],
          fr: ["Une ossature d’oppositions", "Être/ne pas être, souffrir/prendre les armes : le monologue se construit d’oppositions dont la tension produit le sens.", "Un troisième terme pourrait-il rompre ces binarités ?"] },
        { volume: "russian-formalism", marks: ["take arms against a sea of troubles"],
          zh: ["混杂隐喻", "“对大海拿起武器”是著名的混杂隐喻：动作的荒谬恰恰呈现出思想的困境。", "这是修辞失误，还是有意的陌生化？"],
          en: ["A mixed metaphor", "“Take arms against a sea” is a famous mixed metaphor: the absurd action embodies a mind at an impasse.", "Rhetorical slip, or deliberate estrangement?"],
          fr: ["Une métaphore filée brisée", "« Prendre les armes contre une mer » : l’action absurde incarne une pensée dans l’impasse.", "Maladresse rhétorique, ou défamiliarisation voulue ?"] },
        { volume: "psychoanalysis", marks: ["nobler in the mind to suffer"],
          zh: ["延宕的心理", "弗洛伊德与琼斯把哈姆雷特的迟疑读作俄狄浦斯冲突；“忍受”与“终结”之间也回荡着死亡冲动。", "迟疑是性格缺陷，还是戏剧结构的需要？"],
          en: ["The psychology of delay", "Freud and Ernest Jones read Hamlet’s hesitation as Oedipal; between suffering and ending also echoes the death drive.", "Is delay a flaw of character, or a need of dramatic structure?"],
          fr: ["La psychologie du retard", "Freud et Ernest Jones lisent l’hésitation d’Hamlet comme œdipienne ; entre souffrir et finir résonne aussi la pulsion de mort.", "Le retard est-il un défaut de caractère, ou une nécessité dramatique ?"] },
        { volume: "new-historicism", marks: ["outrageous fortune"],
          zh: ["宗教改革与“命运”", "格林布拉特在《炼狱中的哈姆雷特》（2001）中指出，戏剧回应了新教废除炼狱后关于死者与记忆的焦虑。", "“命运”一词在16世纪末的宗教语境中意味着什么？"],
          en: ["Reformation and “fortune”", "Greenblatt’s Hamlet in Purgatory (2001) links the play to anxieties about the dead and memory after Protestantism abolished purgatory.", "What did “fortune” mean in late-sixteenth-century religious debate?"],
          fr: ["Réforme et « fortune »", "Dans Hamlet in Purgatory (2001), Greenblatt relie la pièce aux angoisses sur les morts et la mémoire après l’abolition du purgatoire.", "Que signifiait « fortune » dans les débats religieux de la fin du XVIe siècle ?"] },
        { volume: "reader-response", marks: ["that is the question"],
          zh: ["向观众提问", "独白把“问题”直接抛给观众：剧场中的每一次演出都重新生成答案。", "不同时代的演出会如何改变这句话的意义？"],
          en: ["A question to the audience", "The soliloquy hands “the question” to the audience; each performance generates the answer anew.", "How do different eras of performance change the line?"],
          fr: ["Une question au public", "Le monologue tend « la question » au public ; chaque représentation en produit une nouvelle réponse.", "Comment les époques de mise en scène changent-elles ce vers ?"] }
      ]
    },
    {
      id: "dalloway", lang: "en", year: "1925",
      author: { zh: "弗吉尼亚·伍尔夫", en: "Virginia Woolf", fr: "Virginia Woolf" },
      title: { zh: "《达洛维夫人》开篇", en: "Mrs Dalloway, opening", fr: "Mrs Dalloway, incipit" },
      text: "Mrs. Dalloway said she would buy the flowers herself.\nFor Lucy had her work cut out for her. The doors would be taken off their hinges; Rumpelmayer’s men were coming. And then, thought Clarissa Dalloway, what a morning—fresh as if issued to children on a beach.",
      translation: {
        zh: "达洛维夫人说她要亲自去买花。\n因为露西的活儿已经够多了。门要从铰链上卸下来；伦珀尔迈耶店里的人就要来了。然后，克拉丽莎·达洛维想，多好的早晨啊——清新得仿佛是专门派发给海滩上的孩子们的。",
        fr: "Mrs Dalloway dit qu’elle achèterait les fleurs elle-même.\nCar Lucy avait déjà fort à faire. On allait ôter les portes de leurs gonds ; les hommes de chez Rumpelmayer allaient venir. Et puis, pensa Clarissa Dalloway, quelle matinée — fraîche comme si on l’avait distribuée à des enfants sur une plage."
      },
      lenses: [
        { volume: "modernism-symbolism", marks: ["thought Clarissa Dalloway", "what a morning"],
          zh: ["自由间接引语", "叙述声音滑入人物意识：“多好的早晨啊”既是叙述也是克拉丽莎的感受。意识流在这里从一句话开始。", "你能准确说出叙述者从哪里“进入”人物吗？"],
          en: ["Free indirect discourse", "The narrating voice slides into consciousness: “what a morning” is both narration and Clarissa’s feeling. The stream begins in a single clause.", "Can you pinpoint where the narrator enters the character?"],
          fr: ["Discours indirect libre", "La voix narrative glisse dans la conscience : « quelle matinée » est à la fois récit et sentiment de Clarissa.", "Pouvez-vous situer le moment où le narrateur entre dans le personnage ?"] },
        { volume: "feminism-queer", marks: ["she would buy the flowers herself", "Lucy had her work cut out for her"],
          zh: ["家务、阶级与女性劳动", "女主人“亲自”买花是一种小小的自由，而这自由建立在女仆露西繁重劳动的基础上。", "这句话中谁的劳动被看见，谁的被隐去？"],
          en: ["Housework, class, women’s labour", "The hostess buying flowers “herself” is a small freedom resting on the servant Lucy’s workload.", "Whose labour is visible in this sentence, and whose is hidden?"],
          fr: ["Ménage, classe, travail des femmes", "Que la maîtresse de maison achète « elle-même » les fleurs est une petite liberté fondée sur le travail de Lucy.", "Quel travail est visible dans cette phrase, et lequel est caché ?"] },
        { volume: "marxism", marks: ["Rumpelmayer’s men were coming", "The doors would be taken off their hinges"],
          zh: ["派对背后的服务经济", "被动语态与“伦珀尔迈耶的人”让体力劳动者成为无名的背景，现代都市的消费秩序由此显现。", "被动语态在这里隐藏了什么？"],
          en: ["The service economy behind the party", "Passive voice and “Rumpelmayer’s men” render manual workers anonymous background, revealing the metropolis’s order of consumption.", "What does the passive voice conceal here?"],
          fr: ["L’économie de service derrière la fête", "Le passif et « les hommes de chez Rumpelmayer » font des travailleurs un fond anonyme : l’ordre de consommation de la métropole apparaît.", "Que dissimule ici la voix passive ?"] },
        { volume: "cognitive-empirical-aesthetics", marks: ["said she would", "thought Clarissa Dalloway"],
          zh: ["嵌套的心智", "读者需要同时追踪多层意图：叙述者报告她说她会……认知文学研究称之为“嵌套意向性”。", "这一段要求你同时保持几层心智状态？"],
          en: ["Nested minds", "Readers track layered intentions—the narrator reports that she said she would… Cognitive critics call this embedded intentionality.", "How many levels of mind does the passage ask you to hold at once?"],
          fr: ["Esprits emboîtés", "Le lecteur suit des intentions emboîtées — le narrateur rapporte qu’elle dit qu’elle… L’intentionnalité enchâssée des cognitivistes.", "Combien de niveaux d’esprit le passage vous demande-t-il de tenir ?"] },
        { volume: "memory-trauma-platform", marks: ["fresh as if issued to children on a beach"],
          zh: ["战后的清新", "1923年的伦敦仍笼罩在一战阴影中；“分发给孩子们的清新”与小说中老兵塞普蒂默斯的创伤形成对照。", "这种清新是否包含着遗忘？"],
          en: ["Post-war freshness", "London in 1923 still lives in the war’s shadow; freshness “issued to children” counterpoints the shell-shocked veteran Septimus.", "Does this freshness contain forgetting?"],
          fr: ["Fraîcheur d’après-guerre", "Le Londres de 1923 vit encore dans l’ombre de la guerre ; cette fraîcheur « distribuée aux enfants » contraste avec le trauma de Septimus.", "Cette fraîcheur contient-elle un oubli ?"] }
      ]
    }
  ]
};
