/* 2026 新加坡師培學術參訪：網頁內容
   來源：Padlet「2026 新加坡師培學術參訪計畫」版面、新加坡參訪/參訪單位介紹+學習重點.docx、
   D1～D4 交流日誌（最新版）、師長綜合討論場次_質性分析_20261009.md。
   抽取紀錄：scratchpad/sg_highlights.md（每條附段落號）。
   交付前檢查：[x] 破折號 0　[x] 不寫學生姓名　[x] 只寫文件有載的事　[x] 地點座標見 _build/build_map.py */
window.SG = {
  title: "2026 新加坡師培學術參訪",
  en: "Innovating Teacher Preparation in the Age of Artificial Intelligence",
  dates: "2026 年 10 月 5 日（一）～ 10 月 9 日（五）",
  roc: "民國 115 年 10 月",
  guide: "教育部師資培育及藝術教育司",
  host: "國立臺灣師範大學教育研究與創新中心",
  memberLine: "教育部師資培育及藝術教育司長官、師資培育大學校長與教授，以及計畫團隊，共 13 位",
  members: [
    { name: "王淑娟", org: "教育部師資培育及藝術教育司", title: "副司長", g: "moe" },
    { name: "劉鳳雲", org: "教育部師資培育及藝術教育司", title: "專門委員", g: "moe" },
    { name: "張新仁", org: "國立臺北教育大學", title: "前校長", g: "prof" },
    { name: "方德隆", org: "國立高雄餐旅大學", title: "校長", g: "prof" },
    { name: "丘愛鈴", org: "國立高雄師範大學教育學院", title: "院長", g: "prof" },
    { name: "陳佩英", org: "國立臺灣師範大學教育研究與創新中心", title: "主任", g: "prof" },
    { name: "黃譯瑩", org: "國立政治大學師資培育中心", title: "主任", g: "prof" },
    { name: "黃絢質", org: "國立高雄師範大學師資培育與就業輔導處", title: "教授", g: "prof" },
    { name: "林佳慧", org: "國立臺中教育大學教育學系", title: "助理教授", g: "prof" },
    { name: "魏士軒", org: "國立臺中教育大學數學教育學系", title: "助理教授", g: "prof" },
    { name: "陳建志", org: "國立臺北教育大學教育經營與管理學系", title: "副教授", g: "prof" },
    { name: "傅奕榮", org: "國立臺灣師範大學教育研究與創新中心", title: "計畫助理", g: "staff" },
    { name: "梁松平", org: "國立臺灣師範大學教育研究與創新中心", title: "計畫助理", g: "staff" }
  ],
  notice: "本網頁內容僅專供教育部、師培AI計畫團隊及本次參訪團員作為計畫成果交流與內部參考使用。未經授權，嚴禁公開播送或散布於任何公開網路平台。",
  padlet: "https://padlet.com/borisfu612_1/2026-ox3p8x0zcegvozz5",

  days: [
    { n: 1, date: "10/5", wd: "一", color: "#2F6DB5", theme: "國家政策與師資培育",
      summary: "從政策端出發：在國立教育學院（NIE）先聽新加坡教育部教育科技司說明國家教育科技政策，再由 NIE 學者分享 AI 輔助學習的實證研究。" },
    { n: 2, date: "10/6", wd: "二", color: "#0E8C7E", theme: "中學課堂與幼教師培",
      summary: "走進學校現場：上午看義安中學如何全校推動 AI，下午與智源教育學院交流幼教師培與組織轉型。" },
    { n: 3, date: "10/7", wd: "三", color: "#7356B0", theme: "高教評量與研究轉化",
      summary: "上午了解新加坡理工學院的 AI 治理與評量重新設計，下午到 NIE 認識研究如何轉化為學校實務。" },
    { n: 4, date: "10/8", wd: "四", color: "#D2691E", theme: "小學實踐與跨域學習",
      summary: "在福春小學觀課與專業對話，看小學如何以「人先於工具」導入 AI；午後走訪藝術科學博物館。" },
    { n: 5, date: "10/9", wd: "五", color: "#C2416B", theme: "綜整反思與返程",
      summary: "師長綜合反思座談：把四天所見所聞，轉為「臺灣師培可以做什麼」的集體盤整。" }
  ],

  /* 地圖上的點（座標在 assets/map.js）；visits 依參訪順序 */
  places: {
    changi: { short: "樟宜機場", logo: null, icon: "✈", dir: "t" },
    nie:    { short: "國立教育學院 NIE", logo: "nie.png", dir: "b" },
    ngee:   { short: "義安中學", logo: "ngee.png", dir: "b" },
    klc:    { short: "智源教育學院", logo: "klc.png", dir: "t" },
    sp:     { short: "新加坡理工學院", logo: "sp.png", dir: "b" },
    fuchun: { short: "福春小學", logo: "fuchun.png", dir: "r" },
    asm:    { short: "藝術科學博物館", logo: null, icon: "🎨", dir: "r" }
  },

  route: [
    { place: "changi", day: 1, label: "抵達新加坡", time: "10/5" },
    { place: "nie", day: 1, unit: "moe" },
    { place: "nie", day: 1, unit: "nie" },
    { place: "ngee", day: 2, unit: "ngee" },
    { place: "klc", day: 2, unit: "klc" },
    { place: "sp", day: 3, unit: "sp" },
    { place: "nie", day: 3, unit: "ese" },
    { place: "fuchun", day: 4, unit: "fuchun" },
    { place: "asm", day: 4, unit: "asm" },
    { place: "changi", day: 5, label: "綜整討論・返程", time: "10/9" }
  ],

  units: {
    moe: {
      short: "新加坡教育部", day: 1, time: "15:00～16:00", venue: "於國立教育學院（NIE）進行", logo: "moe.png", url: "https://www.moe.gov.sg/",
      zh: "新加坡教育部 教育科技司", en: "Ministry of Education, Educational Technology Division",
      type: "政策", speaker: "Vincent Chung（Educational Technology Officer）",
      pos: "主責全國教育科技政策，並主管國家學習平台「學生學習空間」（SLS）。",
      points: [
        "《EdTech Masterplan 2030》承接 1997 年起的歷代資訊科技藍圖，逐代累積推進。",
        "SLS 是全國單一的免費平台，確保學生公平取用；學校可依需要自主決定怎麼用。",
        "AI 政策以學生為中心、教學法優先；7 至 9 歲低年級不使用 AI。",
        "師生 AI 素養分為學習關於 AI、使用 AI、與 AI 協作、超越 AI 四個層次。"
      ]
    },
    nie: {
      short: "國立教育學院", day: 1, time: "16:00～17:00", logo: "nie.png", url: "https://www.ntu.edu.sg/nie",
      zh: "新加坡國立教育學院（NIE）", en: "National Institute of Education, Nanyang Technological University",
      type: "師培", speaker: "Dr. Farhan Ali（Assistant Professor, Learning Sciences & Assessment）",
      pos: "新加坡唯一的國家級師資培育機構，隸屬南洋理工大學。",
      points: [
        "研發 TeacherGAIA 聊天機器人，設計目標是幫學生學習，而不是替學生產出作業。",
        "準實驗涵蓋 16 班、378 名學生，平均提升約 7.32 個百分點（約 0.47 個標準差）。",
        "先備知識較佳者受益更多，因此提出「認知準備度」與 ABC 提問架構。",
        "多數學生與 AI 呈「獨白式」互動；少見的「對話式」互動反而成效最好。"
      ]
    },
    ngee: {
      short: "義安中學", day: 2, time: "10:30～12:30", logo: "ngee.png", url: "https://www.ngeeannsec.moe.edu.sg",
      zh: "義安中學", en: "Ngee Ann Secondary School",
      type: "中學",
      pos: "曾任教育部東區資訊科技卓越中心，也是新加坡「未來學校」之一。",
      points: [
        "全校取徑推動「AI 強化而非取代學習」，對齊 21 世紀素養與 2030 藍圖。",
        "以 C-R-O-P（情境、角色、產出、參數）提問框架，自 2023 年起培訓師生。",
        "正視認知卸載：每班設兩位學生數位領袖，物理課限制每組的提問次數。",
        "美術課把 AI 當「陪練夥伴」：人先動手、重視歷程，最後由學生判斷。"
      ]
    },
    klc: {
      short: "智源教育學院", day: 2, time: "15:00～17:00", logo: "klc.png", url: "https://www.klc.edu.sg/",
      zh: "智源教育學院", en: "KLC International Institute",
      type: "幼教師培",
      pos: "新加坡最早的國家級幼教師培機構之一，近年延伸到企業轉型諮詢。",
      points: [
        "從人的本質與社群看教育，核心理念是「人的乘數」（Human Multiplier）。",
        "2020 年疫情初期引進 Canvas，兩週內把一百門課全面轉為線上。",
        "幼教師資依照顧年齡分級培訓並強制實習，與幼兒培育署全程協作。"
      ]
    },
    sp: {
      short: "新加坡理工學院", day: 3, time: "09:30～12:00", logo: "sp.png", url: "https://www.sp.edu.sg/",
      zh: "新加坡理工學院", en: "Singapore Polytechnic",
      type: "高教",
      pos: "1954 年成立，新加坡歷史最久的理工學院，以產業導向的應用學習為特色。",
      points: [
        "治理先行：董事會下設 AI 委員會，大規模的 AI 應用須經倫理審查。",
        "教師若讓學生用 AI 須寫進課程大綱，學生也須誠實申報使用情形。",
        "不靠禁用或鎖定瀏覽器，改為評量學生「如何使用」AI；偵測工具僅供參考。",
        "以 3R（檢視、重新設計、反思）循環檢視課程模組，提高高層次思考的比重。"
      ]
    },
    ese: {
      short: "NIE 教育解方中心", day: 3, time: "14:30～15:30", logo: "nie.png", url: "https://www.ntu.edu.sg/nie",
      zh: "NIE 教育解方與參與中心", en: "Centre for Education Solutions and Engagement (ESE), NIE",
      type: "研究轉化", speaker: "Dr. Albert Liau（Deputy Director and Head）",
      pos: "NIE 把研究成果轉化為學校實務，並連結教育部、學校與產業的單位。",
      points: [
        "以能力建構、試行原型、研究、外部夥伴、IT 基礎建設五項倡議，建構 AI 教育生態系。",
        "全國通用的 AI 學習者框架：Learn about、with、to use、beyond AI。",
        "科技開發以教學法為先；自建的 AI 代理要會提問，而不是直接給答案。"
      ]
    },
    fuchun: {
      short: "福春小學", day: 4, time: "10:30～15:00", logo: "fuchun.png", url: "https://www.fuchunpri.moe.edu.sg",
      zh: "福春小學", en: "Fuchun Primary School",
      type: "小學",
      pos: "位於兀蘭的公立鄰里小學，約 1,053 名學生，以「人先於工具」導入 AI。",
      points: [
        "先把國家平台 SLS 用到精熟，再談外部工具，同時處理權責與教師負擔。",
        "以 STAR 循環、3S（支持、強化、延伸）與 RAT 視角備課，教師始終在迴路中。",
        "K.E.M. 小份量增能與開放課室，定位為發展性而非評鑑性。",
        "分齡 AI 素養：小一至小三盡量不啟用 AI；小六開設「AI for Fun」課程。"
      ]
    },
    asm: {
      short: "藝術科學博物館", day: 4, time: "15:30 後", logo: null, icon: "🎨", url: "https://www.marinabaysands.com/museum.html",
      zh: "藝術科學博物館", en: "ArtScience Museum",
      type: "非正式學習",
      pos: "位於濱海灣金沙園區，以藝術、科學與科技交會為主題的博物館。",
      points: [
        "行程安排：觀察沉浸式互動展覽，作為跨域 STEAM 學習與館校合作的參考。"
      ]
    }
  },

  /* 每日照片：只寫照片可見的內容 */
  photos: {
    1: [
      { f: "sg1-386", c: "參訪團啟程合影" },
      { f: "sg1-niegroup", c: "團員於 NIE 願景與使命牆前合影" },
      { f: "sg1-dinner", c: "第一天午間，團員用餐討論" },
      { f: "sg1-887", c: "教育部簡報：新加坡自 1997 年起的歷代教育科技藍圖" },
      { f: "sg1-862", c: "NIE 的願景與使命牆" },
      { f: "sg1-875", c: "教育部簡報：SLS 平台與課程協作聊天機器人的 AI 功能示範" }
    ],
    2: [
      { f: "sg2-902", c: "義安中學簡報：教育部「發現、思考、應用、創造」數位素養框架" },
      { f: "sg2-448", c: "團員於義安中學校園" },
      { f: "sg2-klc", c: "團員於智源教育學院交流座談" },
      { f: "sg2-499", c: "智源教育學院的交流空間" }
    ],
    3: [
      { f: "sg3-stairs", c: "團員於新加坡理工學院合影" },
      { f: "sg3-studio", c: "團員於新加坡理工學院虛擬攝影棚的螢幕中合影" },
      { f: "sg3-909", c: "新加坡理工學院簡報：以布魯姆分類引導高層次思考的課程設計原則" },
      { f: "sg3-599", c: "臺灣團隊成員在 NIE 教育解方與參與中心分享 AI 素養課程設計" },
      { f: "sg3-ese", c: "團員於 NIE 教育解方與參與中心交流" },
      { f: "sg3-merlion", c: "第三天團員合影" }
    ],
    4: [
      { f: "sg4-743", c: "福春小學校舍" },
      { f: "sg4-726", c: "福春小學的核心價值壁畫" },
      { f: "sg4-914", c: "福春小學：教師以 AI 設計學習的歷程" },
      { f: "sg4-754", c: "團員於藝術科學博物館前合影" },
      { f: "sg4-714", c: "團員於藝術科學博物館旁合影" },
      { f: "sg4-648", c: "藝術科學博物館的沉浸式展覽" }
    ],
    5: [
      { f: "sg5-786", c: "參訪團最後一天合影" },
      { f: "sg5-829", c: "團員於返程前合影" },
      { f: "sg5-airport", c: "團員於機場分享所見所感" }
    ]
  },

  themes: [
    { icon: "🤝", t: "AI 支持學習，而非取代學習",
      d: "從教育部的政策主張、義安中學的「強化而非取代」、理工學院的「人類創意主導」，到福春小學的「教師始終在迴路中」，五天反覆出現同一個立場。",
      days: [1, 2, 3, 4, 5] },
    { icon: "🏛️", t: "政策、師培、學校三方協作",
      d: "教育部、NIE 與各級學校分工緊密，加上全國單一平台 SLS，讓政策能一路落實到課堂；福春小學先把 SLS 用到精熟，就是一例。",
      days: [1, 3, 4, 5] },
    { icon: "🪜", t: "分齡、分層的 AI 素養",
      d: "教育部與 NIE 的四層次 AI 素養、義安中學的九項數位能力與 C-R-O-P，以及小學由低年級不用 AI 到小六開課的分齡安排。",
      days: [1, 2, 3, 4] },
    { icon: "📝", t: "評量與批判思考仍是核心挑戰",
      d: "從學生與 AI 的「獨白式」互動、認知卸載，到理工學院改評「如何使用 AI」，評量轉型是新加坡與臺灣共同面對的課題。",
      days: [1, 2, 3, 5] }
  ],

  lessons: [
    { t: "借鏡標準做法，而非照搬", d: "新加坡以單一平台與學科「領頭羊」貫徹到校；臺灣多元自主，可借鏡其清楚可依循的做法。" },
    { t: "師培者先從自身做起", d: "補足從 PCK 到 TPACK 的知識結構，並以次專長學分等既有架構承載 AI 素養。" },
    { t: "AI 是幫手，不是假手", d: "先教學生辨識 AI 產出的好壞，再辨明 AI 做不到的部分。" },
    { t: "小組裡要有真正的同儕互動", d: "觀課發現小組多為人與機器互動，教師需要示範同儕之間如何協作。" },
    { t: "補上評量這一塊", d: "教學談提問與批判思考，評量卻少著墨；可讓 AI 做技術篩選，教師深評高階表現。" },
    { t: "建立延續的機制", d: "老中青三代社群、以「說課」補觀課、為學生開設 AI 素養入門課。" }
  ]
};
