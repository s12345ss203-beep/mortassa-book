// --- 1. DATA (Initialize storage) ---
let storiesData = [];
let ideasData = [];
let novelsData = [];

// --- 1.1 DATA (Books) ---
const booksData = [
    {
        id: 1,
        title: "زوجة رجل آخر / زوج تحت السرير",
        author: "فيودور دوستويفسكي",
        category: "Literature",
        status: "finished",
        cover: "صور%20الكتب/IMG_20260206_215433.jpg",
        summary: "مجموعة قصصية قصيرة تستعرض ببراعة الجوانب النفسية والاجتماعية للشخصيات بأسلوب ساخر وذكي.",
        importantIdeas: ["الصراع النفسي الداخلي", "نقد التقاليد الاجتماعية", "الفكاهة السوداء في الأدب الروسي"],
        comment: "بداية المجموعات القصصية لدوستويفسكي، تتميز بخفة الظل غير المعتادة منه."
    },
    {
        id: 2,
        title: "إشارات الحب في لغة الجسد",
        author: "آلان وباربرا بيز",
        category: "Psychology",
        status: "finished",
        cover: "صور%20الكتب/IMG_20260206_215409.jpg",
        summary: "دليل شامل لفهم الإشارات غير اللفظية التي يرسلها الأشخاص في المواقف الرومانسية والاجتماعية.",
        importantIdeas: ["تفسير حركات العيون واليدين", "أهمية التواصل البصري", "الفرق بين لغة جسد الرجال والنساء في الحب"],
        comment: "كتاب مفيد جداً لفهم التواصل غير المباشر."
    },
    {
        id: 3,
        title: "خوارزميات اللاشعور",
        author: "علي الوردي",
        category: "Philosophy",
        status: "finished",
        cover: "صور%20الكتب/IMG_20260206_215354.jpg",
        summary: "دراسة اجتماعية نفسية عميقة تتناول طبيعة النفس البشرية وتأثير اللاوعي على سلوكيات الأفراد والمجتمعات.",
        importantIdeas: ["تأثير العقل الباطن على القرارات", "الازدواجية في الشخصية", "التحليل النفسي للشخصية العربية"],
        comment: "من أعمق ما كتب الدكتور علي الوردي في تحليل النفس."
    },
    {
        id: 4,
        title: "الكتاب الصغير في علم النفس",
        author: "إميلي رولز & كارولين ريجوز",
        category: "Psychology",
        status: "finished",
        cover: "صور%20الكتب/IMG_20260206_215333.jpg",
        summary: "كتاب مبسط يستعرض أهم المفاهيم والنظريات في علم النفس بأسلوب سهل ومناسب لغير المتخصصين.",
        importantIdeas: ["أساسيات السلوك البشري", "فهم العواطف والمشاعر", "كيفية التعامل مع الضغوط النفسية"],
        comment: "مناسب جداً كمقدمة للمبتدئين في هذا المجال."
    },
    {
        id: 5,
        title: "مهزلة العقل البشري",
        author: "علي الوردي",
        category: "Philosophy",
        status: "not_finished",
        cover: "صور%20الكتب/IMG_20260206_215326.jpg",
        summary: "كتاب نقدي يتناول الأنماط الفكرية والاجتماعية السائدة في المجتمع بجرأة وعمق فلسفي.",
        importantIdeas: ["نقد الجمود الفكري", "العلاقة بين الفرد والمجتمع", "تأثير البيئة الاجتماعية على التفكير"],
        comment: "كتاب يفتح آفاق التفكير النقدي بشكل رائع."
    },
    {
        id: 6,
        title: "علم النفس: خلاصة أعظم الكتب",
        author: "توم باتلر-باودون",
        category: "Psychology",
        status: "finished",
        cover: "صور%20الكتب/IMG_20260206_215318.jpg",
        summary: "مجموعة من الملخصات لأهم الكتب في تاريخ علم النفس، توفر نظرة بانورامية واسعة لهذا العلم.",
        importantIdeas: ["تطور التفكير النفسي عبر العصور", "أهم رواد علم النفس ونظرياتهم", "تطبيقات علم النفس في الحياة اليومية"],
        comment: "مرجع ممتاز يختصر عليك قراءة عشرات الكتب."
    },
    {
        id: 7,
        title: "فن أن تكون على صواب",
        author: "آرثر شوبنهاور",
        category: "Philosophy",
        status: "finished",
        cover: "صور%20الكتب/IMG_20260206_215309.jpg",
        summary: "رسالة فكاهية وجدلية يشرح فيها شوبنهاور كيف يمكن للمرء أن ينتصر في أي جدال بغض النظر عن الحقيقة.",
        importantIdeas: ["المغالطات المنطقية وكيفية استخدامها", "فنون الإقناع والجدل", "الفرق بين الحقيقة والانتصار في الحوار"],
        comment: "كتاب ذكي جداً، لكن يجب استخدامه بحذر وأمانة."
    },
    {
        id: 8,
        title: "جلسات نفسية",
        author: "محمد إبراهيم",
        category: "Self Development",
        status: "finished",
        cover: "صور%20الكتب/IMG_20260206_215302.jpg",
        summary: "كتاب يتناول قضايا الصحة النفسية بأسلوب بسيط وقريب من القارئ، كأنها جلسات حوارية.",
        importantIdeas: ["التعامل مع القلق والاكتئاب", "بناء علاقات صحية مع الآخرين"],
        comment: "أسلوبه بسيط وواقعي جداً."
    },
    {
        id: 9,
        title: "وعّاظ السلاطين",
        author: "علي الوردي",
        category: "History",
        status: "finished",
        cover: "صور%20الكتب/IMG_20260206_215251.jpg",
        summary: "كتاب يحلل الدور الاجتماعي لرجال الدين في التاريخ الإسلامي وعلاقتهم بالسلطة.",
        importantIdeas: ["نقد الازدواجية الأخلاقية", "دور الدين في السياسة", "تاريخ وعاظ السلاطين في العراق والعالم العربي"],
        comment: "من أهم كتب علي الوردي في نقد الفكر الديني التقليدي."
    },
    {
        id: 10,
        title: "ابقَ قويًا",
        author: "ديمي لوفاتو",
        category: "Self Development",
        status: "finished",
        cover: "صور%20الكتب/IMG_20260206_215234.jpg",
        summary: "مجموعة من الاقتباسات والأفكار اليومية التي تهدف إلى تقديم الدعم والتحفيز الذاتي.",
        importantIdeas: ["أهمية الرعاية الذاتية", "الاستمرار في المحاولة رغم الإخفاقات"],
        comment: "كتاب لطيف للقراءة اليومية والتحفيز."
    },
    /* Rest of book data omitted for brevity in code item view, but included in full file */
    {
        id: 11,
        title: "أرض السافلين",
        author: "أحمد خالد مصطفى",
        category: "Literature",
        status: "not_finished",
        cover: "صور%20الكتب/IMG_20260206_215224.jpg",
        summary: "رواية تأخذ القارئ في رحلة خيالية وتاريخية لاستكشاف عوالم سفلية وجوانب خفية من التاريخ البشري.",
        importantIdeas: ["الإبحار في عوالم الجريمة والخفاء", "الربط بين وقائع تاريخية نادرة", "فلسفة الشر في النفس البشرية"],
        comment: "رواية مشوقة وغنية بالمعلومات الغريبة."
    },
    {
        id: 12,
        title: "Beautiful Things",
        author: "Hunter Biden",
        category: "Literature",
        status: "finished",
        cover: "صور%20الكتب/IMG_20260206_215212.jpg",
        summary: "Hunter Biden's memoir offers a candid and unflinching look into his life, primarily focusing on his decades-long struggle with addiction, grief, and the road to recovery.",
        importantIdeas: ["The journey towards sobriety and persistence", "The profound impact of personal tragedy and grief", "The unbreakable love and support of family"],
        comment: "A vulnerable and deeply personal narrative."
    },
    { id: 13, title: "Death of a Salesman", author: "Arthur Miller", category: "Literature", status: "not_finished", cover: "صور%20الكتب/IMG_20260206_215201.jpg", summary: "A landmark production and play that revolutionized theater.", importantIdeas: ["The breakdown of the American Dream"], comment: "Definitive work." },
    { id: 14, title: "Waiting for Godot", author: "Samuel Beckett", category: "Literature", status: "not_finished", cover: "صور%20الكتب/IMG_20260206_215148.jpg", summary: "A seminal play of the Theatre of the Absurd.", importantIdeas: ["The absurdity of existence"], comment: "A masterpiece." },
    { id: 15, title: "الصراط القويم", author: "السيد محمد محمد صادق الصدر", category: "Religion", status: "not_finished", cover: "صور%20الكتب/IMG_20260206_215725.jpg", summary: "رسالة فقهية عملية مختصره.", importantIdeas: ["فقه العبادات اليومية"], comment: "مرجع فقهي مهم." },
    { id: 16, title: "تاريخ العراق المعاصر", author: "جعفر عباس حميدي", category: "History", status: "not_finished", cover: "صور%20الكتب/IMG_20260206_221252.jpg", summary: "دراسة شاملة لتاريخ العراق الحديث.", importantIdeas: ["تأسيس الدولة العراقية الحديثة"], comment: "كتاب أكاديمي موثق." },
    { id: 17, title: "استمتع بحياتك وعش سعيدًا", author: "أريج الحسيني", category: "Self Development", status: "finished", cover: "صور%20الكتب/IMG_20260206_221243.jpg", summary: "سبل تحقيق السعادة الحقيقية.", importantIdeas: ["الرضا النفسي"], comment: "ملهم." },
    { id: 18, title: "مجمع المسائل والردود", author: "السيد محمد محمد صادق الصدر", category: "Religion", status: "not_finished", cover: "صور%20الكتب/IMG_20260206_215711.jpg", summary: "مجموعة من المسائل الفقهية.", importantIdeas: ["إجابات على أسئلة معاصرة"], comment: "كتاب شامل." },
    { id: 19, title: "عظمة الإمام علي", author: "عارف القصبي السعيد", category: "History", status: "finished", cover: "صور%20الكتب/IMG_20260206_215702.jpg", summary: "دراسة في شخصية الإمام علي.", importantIdeas: ["القيم الأخلاقية الرفيعة"], comment: "استعراض رائع." },
    { id: 20, title: "كفاحي", author: "أدولف هتلر", category: "History", status: "finished", cover: "صور%20الكتب/IMG_20260206_215628.jpg", summary: "السيرة الذاتية لأدولف هتلر.", importantIdeas: ["الأيديولوجيا النازية"], comment: "تاريخي مهم." },
    { id: 21, title: "علل الشرائع", author: "الشيخ الصدوق", category: "Religion", status: "not_finished", cover: "صور%20الكتب/IMG_20260206_215542.jpg", summary: "أسباب وحكم الأحكام الشرعية.", importantIdeas: ["الفلسفة وراء العبادات"], comment: "يرضي الفضول المعرفي." },
    { id: 22, title: "أشهر 50 خرافة في علم النفس", author: "سكوت ليلينفيلد وآخرون", category: "Psychology", status: "finished", cover: "صور%20الكتب/IMG_20260206_215529.jpg", summary: "تفنيد المفاهيم الخاطئة الشائعة.", importantIdeas: ["تفنيد خرافة الـ 10%"], comment: "ضروري." },
    { id: 23, title: "مدخل إلى علم النفس", author: "ليندا ل. دافيدوف", category: "Psychology", status: "not_finished", cover: "صور%20الكتب/IMG_20260206_215514.jpg", summary: "المبادئ الأساسية لعلم النفس.", importantIdeas: ["العمليات المعرفية"], comment: "مرجع أكاديمي." },
    { id: 24, title: "لا يمكنك إيذائي", author: "ديفيد غوغينز", category: "Self Development", status: "finished", cover: "صور%20الكتب/IMG_20260206_215448.jpg", summary: "قوة الإرادة وتجاوز الضغوط.", importantIdeas: ["قاعدة الـ 40%"], comment: "قوي جداً." }
];

const statusConfig = {
    finished: { text: "قمت بقراءته", class: "finished" },
    reading: { text: "أقرأه حاليًا", class: "reading" },
    not_finished: { text: "لم أنتهِ من قراءته", class: "not_finished" }
};

// --- 1.2 Literary Figures Data ---
const literaryFigures = [
    { name: "فيودور دوستويفسكي", quote: "إن سر الوجود الإنساني ليس في البقاء بل في إيجاد ما نعيش من أجله." },
    { name: "ليو تولستوي", quote: "الجميع يفكر في تغيير العالم، لكن لا أحد يفكر في تغيير نفسه." },
    { name: "فرانز كافكا", quote: "الطرق تُصنع بالمشي." },
    { name: "ألبير كامو", quote: "في عمق الشتاء تعلمت أن بداخلي صيف لا يُقهر." },
    { name: "جان بول سارتر", quote: "الحرية هي ما تفعله بما فُعل بك." },
    { name: "فريدريك نيتشه", quote: "من يملك سببًا للعيش يمكنه تحمل أي كيف." },
    { name: "ويليام شكسبير", quote: "كن أو لا تكن، تلك هي المسألة." },
    { name: "غابرييل غارسيا ماركيز", quote: "الحياة ليست ما عشناه بل ما نتذكره." },
    { name: "إرنست همنغواي", quote: "العالم يكسر الجميع، وبعد ذلك يصبح البعض أقوى." },
    { name: "جورج أورويل", quote: "في زمن الخداع يصبح قول الحقيقة عملاً ثوريًا." },
    { name: "نجيب محفوظ", quote: "الخوف لا يمنع من الموت لكنه يمنع من الحياة." },
    { name: "محمود درويش", quote: "على هذه الأرض ما يستحق الحياة." },
    { name: "جبران خليل جبران", quote: "وراء كل شتاء ربيع." },
    { name: "طه حسين", quote: "التعليم كالماء والهواء." },
    { name: "أحمد شوقي", quote: "إنما الأمم الأخلاق ما بقيت." },
    { name: "المتنبي", quote: "إذا غامرت في شرف مروم فلا تقنع بما دون النجوم." },
    { name: "أدونيس", quote: "اللغة بيت الوجود." },
    { name: "بدر شاكر السياب", quote: "الشمس أجمل في بلادي من سواها." },
    { name: "يوسف إدريس", quote: "الكتابة حياة أخرى." },
    { name: "أحلام مستغانمي", quote: "الحب ليس رواية شرقية بختامها يتزوج الأبطال." },
    { name: "مارك توين", quote: "سر التقدم هو البدء." },
    { name: "هاربر لي", quote: "لا تفهم إنسانًا حتى تمشي في حذائه." },
    { name: "باولو كويلو", quote: "إذا رغبت في شيء فإن الكون كله يتآمر ليساعدك." },
    { name: "جيمس جويس", quote: "الحياة قصيرة، الفن طويل." },
    { name: "تشارلز ديكنز", quote: "كان أفضل الأزمنة، وكان أسوأ الأزمنة." },
    { name: "فيكتور هوغو", quote: "من يفتح مدرسة يغلق سجنًا." },
    { name: "أوسكار وايلد", quote: "كن نفسك، فالجميع مأخوذ." },
    { name: "أندريه جيد", quote: "لا تكتشف قارات جديدة إن لم تجرؤ على فقدان الشاطئ." },
    { name: "هرمان هيسه", quote: "بعضنا يظن أن التمسك يجعلنا أقوياء، لكن أحيانًا يكون التحرر." },
    { name: "سيمون دي بوفوار", quote: "لا تولد المرأة امرأة بل تصبح كذلك." },
    { name: "إلياس خوري", quote: "الذاكرة مقاومة." },
    { name: "عبد الرحمن منيف", quote: "النفط غيّر الصحراء لكنه لم يغيّر الإنسان." },
    { name: "غسان كنفاني", quote: "إذا كنا مدافعين فاشلين عن القضية فالأجدر بنا أن نغيّر المدافعين." },
    { name: "حنان الشيخ", quote: "الحياة تبدأ حين نكسر الخوف." },
    { name: "رضوى عاشور", quote: "الكتابة فعل مقاومة." },
    { name: "سلمان رشدي", quote: "من لا يملك قصة لا يملك هوية." },
    { name: "أمين معلوف", quote: "الهوية لا تتجزأ." },
    { name: "كازو إيشيغورو", quote: "الذكريات ليست دائمًا كما نعتقد." },
    { name: "أمبرتو إيكو", quote: "من لا يقرأ يعيش حياة واحدة فقط." },
    { name: "ميلان كونديرا", quote: "ثقل الوجود يكمن في خفته." },
    { name: "أرسطو", quote: "المعرفة تبدأ بالدهشة." },
    { name: "أفلاطون", quote: "الحكمة هي معرفة النفس." },
    { name: "ابن خلدون", quote: "الظلم مؤذن بخراب العمران." },
    { name: "ابن سينا", quote: "الوهم نصف الداء." },
    { name: "الرومي", quote: "ما تبحث عنه يبحث عنك." },
    { name: "أبو العلاء المعري", quote: "هذا ما جناه أبي عليّ." },
    { name: "نزار قباني", quote: "الحب في الأرض بعض من تخيلنا." },
    { name: "غوته", quote: "من يعرف نفسه يعرف ربه." },
    { name: "أنطون تشيخوف", quote: "الإنسان يصبح أفضل عندما تحسن معاملته." },
    { name: "بلزاك", quote: "خلف كل ثروة جريمة." }
];

// --- 2. AUTH LOGIC ---
const auth = {
    STORAGE_KEY: 'platform_user',
    getCurrentUser: function () {
        try {
            const user = localStorage.getItem(this.STORAGE_KEY);
            return user ? JSON.parse(user) : null;
        } catch (e) {
            console.error("Auth: Error localizing user", e);
            return null;
        }
    },
    setUser: function (user) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    },
    loginAsGuest: function () {
        const guest = { id: 'g' + Date.now(), username: 'ضيف', isGuest: true, myLibrary: [] };
        this.setUser(guest);
        return guest;
    },
    createAccount: function (username, password, personaIndex = null) {
        const user = {
            id: 'u' + Date.now(),
            username,
            password,
            isGuest: false,
            myLibrary: [],
            persona: null
        };

        if (personaIndex !== null && personaIndex !== "" && personaIndex !== "-1") {
            const figure = literaryFigures[personaIndex];
            if (figure) {
                user.persona = {
                    name: figure.name,
                    quote: figure.quote
                };
            }
        }

        this.setUser(user);
        return user;
    },
    logout: function () {
        localStorage.removeItem(this.STORAGE_KEY);
        window.location.reload();
    },
    toggleSave: function (bookId) {
        const user = this.getCurrentUser();
        if (!user || user.isGuest) return false;
        const idx = user.myLibrary.indexOf(bookId);
        if (idx === -1) user.myLibrary.push(bookId);
        else user.myLibrary.splice(idx, 1);
        this.setUser(user);
        return true;
    },
    // Persistent Likes System
    getInteractions: function () {
        const data = localStorage.getItem('book_interactions');
        return data ? JSON.parse(data) : {};
    },
    saveInteraction: function (bookId, type) {
        let interactions = this.getInteractions();
        if (!interactions[bookId]) interactions[bookId] = { likes: 0, dislikes: 0, userAction: null };

        const current = interactions[bookId];
        if (current.userAction === type) {
            // Undo
            current[type === 'like' ? 'likes' : 'dislikes']--;
            current.userAction = null;
        } else {
            // Change or add
            if (current.userAction) {
                current[current.userAction === 'like' ? 'likes' : 'dislikes']--;
            }
            current[type === 'like' ? 'likes' : 'dislikes']++;
            current.userAction = type;
        }

        interactions[bookId] = current;
        localStorage.setItem('book_interactions', JSON.stringify(interactions));
        return current;
    }
};

// --- 3. UI LOGIC ---
const ui = {
    views: {},
    currentView: 'intro',

    init: function () {
        console.log("UI: Initializing...");
        this.views = {
            intro: document.getElementById('intro-screen'),
            home: document.getElementById('home-view'),
            library: document.getElementById('library-view'),
            ideas: document.getElementById('ideas-view'),
            stories: document.getElementById('stories-view'),
            novels: document.getElementById('novels-view'),
            community: document.getElementById('community-view'),
            privateLibrary: document.getElementById('private-library-view'),
            details: document.getElementById('book-details-view')
        };
        this.nav = document.getElementById('main-nav');
        this.navUserInfo = document.getElementById('nav-user-info');

        // Sticky Header Logic
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
        });

        // Global Ripple Effect
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.primary-btn, .secondary-btn, .cat-btn, .tab-btn, .save-btn');
            if (btn) this.createRipple(e, btn);
        });
    },

    createRipple: function (e, btn) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        btn.classList.add('ripple-container');
        btn.appendChild(ripple);

        ripple.addEventListener('animationend', () => ripple.remove());
    },

    switchView: function (viewName) {
        console.log("UI: Switching to " + viewName);
        Object.keys(this.views).forEach(key => {
            if (this.views[key]) this.views[key].classList.add('hidden');
        });

        if (this.views[viewName]) {
            this.views[viewName].classList.remove('hidden');
        } else {
            console.error("UI: View " + viewName + " not found!");
            this.views.home.classList.remove('hidden'); // Fallback
        }

        if (viewName === 'home') this.renderDashboard();
        if (viewName === 'library') this.renderLibrary();
        if (viewName === 'ideas') this.renderIdeas();
        if (viewName === 'stories') this.renderStories();
        if (viewName === 'novels') this.renderNovels();
        if (viewName === 'privateLibrary') this.renderMyLibrary();

        // Manage floating add button visibility
        const floatBtn = document.getElementById('floating-add-btn');
        if (floatBtn) {
            if (viewName === 'library') {
                floatBtn.classList.remove('hidden');
                floatBtn.classList.add('visible');
            } else {
                floatBtn.classList.remove('visible');
                setTimeout(() => {
                    if (!floatBtn.classList.contains('visible')) floatBtn.classList.add('hidden');
                }, 400); // Matches CSS transition
            }
        }

        // Restore scroll and ensure visibility
        document.body.style.overflow = '';
        window.scrollTo({ top: 0, behavior: 'instant' });
    },

    getIdeasForPreview: function () {
        if (typeof ideasData !== 'undefined' && ideasData.length > 0) return ideasData;

        const currentUser = auth.getCurrentUser();
        // Generate 3 temporary demo ideas for UI preview
        return [
            {
                id: 'idea-1',
                title: "مستقبل التعليم الرقمي",
                author: currentUser ? currentUser.username : "مؤلف تجريبي",
                authorId: currentUser ? currentUser.id : 'demo-user',
                date: "18 فبراير 2026",
                content: "كيف يمكن للذكاء الاصطناعي أن يغير تجربة التعلم الشخصية في العقد القادم؟",
                likes: 32,
                dislikes: 1,
                commentCount: 8,
                isDemo: true
            },
            {
                id: 'idea-2',
                title: "الحياة المستدامة في المدن",
                author: "ياسين الجبوري",
                authorId: 'u-other-2',
                date: "17 فبراير 2026",
                content: "أفكار عملية لتقليل البصمة الكربونية للفرد داخل البيئة الحضرية المزدحمة...",
                likes: 15,
                dislikes: 0,
                commentCount: 4,
                isDemo: true
            }
        ];
    },

    renderIdeas: function () {
        const container = this.views.ideas;
        const displayData = this.getIdeasForPreview();
        this.renderInteractionView(container, displayData, "أفكار عامة", true);
    },

    getStoriesForPreview: function () {
        if (storiesData && storiesData.length > 0) return storiesData;

        const currentUser = auth.getCurrentUser();
        // Generate 3 temporary demo stories for UI preview
        return [
            {
                id: 'demo-1',
                title: "سفر البدايات",
                author: currentUser ? currentUser.username : "مؤلف تجريبي",
                authorId: currentUser ? currentUser.id : 'demo-user',
                date: "18 فبراير 2026",
                content: "بين رفوف الكتب القديمة، اكتشفت أثراً لقصة لم تُكشف بعد، قصة تتحدث عن أمل يتجدد مع كل فجر...",
                likes: 24,
                dislikes: 2,
                commentCount: 5,
                isDemo: true
            },
            {
                id: 'demo-2',
                title: "صدى الصمت",
                author: "سلمان العتيبي",
                authorId: 'u-other-1',
                date: "17 فبراير 2026",
                content: "في عمق الهوان، تكمن قوة لا يدركها إلا من جرب السكوت الطويل أمام عواصف التغيير...",
                likes: 12,
                dislikes: 0,
                commentCount: 3,
                isDemo: true
            },
            {
                id: 'demo-3',
                title: "أحلام مدفونة",
                author: currentUser ? currentUser.username : "مؤلف تجريبي",
                authorId: currentUser ? currentUser.id : 'demo-user',
                date: "16 فبراير 2026",
                content: "ليست كل الأحلام التي تضيع هي خسارة، فبعضها يُدفن ليكون بذرة لنجاحات قادمة أعظم مما نتخيل...",
                likes: 45,
                dislikes: 3,
                commentCount: 12,
                isDemo: true
            }
        ];
    },

    renderStories: function () {
        const container = this.views.stories;
        const displayData = this.getStoriesForPreview();
        this.renderInteractionView(container, displayData, "قصص", true);
    },

    getNovelsForPreview: function () {
        if (typeof novelsData !== 'undefined' && novelsData.length > 0) return novelsData;

        const currentUser = auth.getCurrentUser();
        // Generate 3 temporary demo novels for UI preview
        return [
            {
                id: 'novel-1',
                title: "بقايا إنسان",
                author: currentUser ? currentUser.username : "مؤلف تجريبي",
                authorId: currentUser ? currentUser.id : 'demo-user',
                date: "18 فبراير 2026",
                content: "تحكي الرواية عن صراع الهوية والوجود في مدينة لا تعرف الرحمة، حيث تتداخل الأحلام مع الواقع المرير...",
                likes: 120,
                dislikes: 5,
                commentCount: 42,
                comments: [],
                isDemo: true
            },
            {
                id: 'novel-2',
                title: "سر السراب",
                author: "سارة محمود",
                authorId: 'u-other-3',
                date: "15 فبراير 2026",
                content: "رحلة غامضة عبر رمال الصحراء بحثاً عن حقيقة غائبة منذ آلاف السنين...",
                likes: 85,
                dislikes: 2,
                commentCount: 18,
                comments: [],
                isDemo: true
            }
        ];
    },

    renderNovels: function () {
        const container = this.views.novels;
        const displayData = this.getNovelsForPreview();
        this.renderInteractionView(container, displayData, "روايات", true);
    },

    renderInteractionView: function (container, data, title, hasComments) {
        container.innerHTML = `
            <div class="container animate-fade-down">
                <h2 class="section-title">${title}</h2>
                <div class="interaction-grid">
                    ${data.map(item => {
            const currentUser = auth.getCurrentUser();
            const isAuthor = currentUser && item.authorId === currentUser.id;

            return `
                        <div class="interaction-card glass-panel" data-id="${item.id}">
                            <div class="card-header">
                                <h3 class="card-title">${item.title}</h3>
                                <div class="card-meta">
                                    <div class="user-info">
                                        <span class="card-author">${item.author}</span>
                                        <span class="card-date">${item.date || item.timestamp || ''}</span>
                                    </div>
                                </div>
                                ${isAuthor ? `
                                    <button class="delete-interaction-btn" title="حذف" onclick="ui.deleteInteraction('${item.id}', '${title}')">
                                        🗑️
                                    </button>
                                ` : ''}
                            </div>
                            ${item.content ? `<div class="card-body"><p>${item.content}</p></div>` : ''}
                            <div class="card-footer">
                                <div class="footer-actions">
                                    <button class="action-btn like-btn" onclick="ui.handleInteraction('${item.id}', 'like')">
                                        <span class="icon">👍</span>
                                        <span class="count">${item.likes}</span>
                                    </button>
                                    ${hasComments ? `
                                        <button class="action-btn dislike-btn" onclick="ui.handleInteraction('${item.id}', 'dislike')">
                                            <span class="icon">👎</span>
                                            <span class="count">${item.dislikes}</span>
                                        </button>
                                    ` : ''}
                                </div>
                                ${hasComments ? `
                                    <button class="comment-float-indicator" title="التعليقات" onclick="ui.openCommentPanel('${item.id}')">
                                        <span class="chat-icon">💬</span>
                                        <span class="comment-count">${item.commentCount || (item.comments ? item.comments.length : 0)}</span>
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                    `}).join('')}
                </div>
            </div>
        `;
    },

    handleInteraction: function (id, type) {
        // Mocking logic for like/dislike
        console.log(`Interaction: ${type} on item ${id}`);
        // In a real app, we would update the data and re-render
    },

    deleteInteraction: function (id, type) {
        // Find card element
        const card = document.querySelector(`.interaction-card[data-id="${id}"]`);
        if (card) {
            card.classList.add('fade-out');
            setTimeout(() => {
                card.remove();
                console.log(`Deleted ${type} item: ${id}`);
                // If it were real data, we would filter storiesData/ideasData here
            }, 300);
        }
    },

    openCommentPanel: function (id) {
        // Safe retrieval from preview helpers
        const allItems = [
            ...this.getStoriesForPreview(),
            ...this.getIdeasForPreview(),
            ...this.getNovelsForPreview()
        ];
        const item = allItems.find(i => i.id === id);

        if (!item) {
            console.warn(`UI: Item with ID ${id} not found in preview data.`);
            return;
        }

        const panel = document.getElementById('comment-panel');
        const overlay = document.getElementById('comment-panel-overlay');
        const content = document.getElementById('comment-panel-content');
        const currentUser = auth.getCurrentUser();

        content.innerHTML = `
            <div class="panel-inner-header">
                <h3>${item.title}</h3>
            </div>
            <div class="comments-list">
                ${item.comments && item.comments.length > 0 ? item.comments.map(c => `
                    <div class="comment-item" id="comment-${c.id}">
                        <div class="comment-header">
                            <span class="comment-user">${c.author}</span>
                            <div class="header-right">
                                <span class="comment-time">${c.date || c.timestamp}</span>
                                ${c.authorId === currentUser.id ? `<button class="delete-comment-btn" onclick="ui.deleteComment('${item.id}', '${c.id}')">🗑️</button>` : ''}
                            </div>
                        </div>
                        <div class="comment-body">${c.text}</div>
                        <div class="comment-footer">
                            <button class="comment-action like" onclick="ui.handleCommentInteraction('${c.id}', 'like')">👍 ${c.likes}</button>
                            <button class="comment-action dislike" onclick="ui.handleCommentInteraction('${c.id}', 'dislike')">👎 ${c.dislikes}</button>
                        </div>
                    </div>
                `).join('') : '<p class="no-comments">لا توجد تعليقات بعد.</p>'}
            </div>
            <div class="comment-input-area">
                <textarea placeholder="اكتب تعليقك هنا..." id="new-comment-text"></textarea>
                <button class="submit-comment-btn" onclick="ui.addComment('${item.id}')">إرسال</button>
            </div>
        `;

        overlay.classList.remove('hidden');
        panel.classList.remove('hidden');
        setTimeout(() => {
            overlay.classList.add('visible');
            panel.classList.add('visible');
        }, 10);
    },

    closeCommentPanel: function () {
        const panel = document.getElementById('comment-panel');
        const overlay = document.getElementById('comment-panel-overlay');

        panel.classList.remove('visible');
        overlay.classList.remove('visible');

        setTimeout(() => {
            panel.classList.add('hidden');
            overlay.classList.add('hidden');
        }, 350);
    },

    deleteComment: function (itemId, commentId) {
        const commentEl = document.getElementById(`comment-${commentId}`);
        if (commentEl) {
            commentEl.classList.add('fade-out');
            setTimeout(() => {
                commentEl.remove();
                console.log(`Comment ${commentId} deleted from ${itemId}`);
            }, 300);
        }
    },

    addComment: function (itemId) {
        const text = document.getElementById('new-comment-text').value.trim();
        if (text) {
            console.log(`Add comment to ${itemId}: ${text}`);
            this.closeCommentPanel();
        }
    },

    handleCommentInteraction: function (commentId, type) {
        console.log(`Comment interaction: ${type} on ${commentId}`);
    },

    closeNotice: function (id) {
        const banner = document.getElementById(id);
        if (banner) {
            banner.classList.add('fade-out');
            setTimeout(() => {
                banner.remove();
                localStorage.setItem('banner_closed_ideas', 'true');
            }, 400);
        }
    },

    updateNavbar: function () {
        const user = auth.getCurrentUser();
        if (!user) {
            if (this.nav) this.nav.classList.add('hidden');
            return;
        }

        if (this.nav) this.nav.classList.remove('hidden');

        // Simple trigger in navbar
        this.navUserInfo.innerHTML = `
            <div class="user-profile" id="profile-panel-trigger">
                <div class="user-text">
                    <span class="username">${user.username}</span>
                    <span class="persona-name" style="font-size: 0.75rem; color: var(--accent); opacity: 0.8;">الملف الشخصي</span>
                </div>
            </div>
        `;

        // sidebar Elements
        const sidebar = document.getElementById('profile-sidebar');
        const overlay = document.getElementById('profile-overlay');
        const trigger = document.getElementById('profile-panel-trigger');
        const closeBtn = document.getElementById('close-profile');
        const content = document.getElementById('profile-content');

        // Toggle logic
        const toggleSidebar = (show) => {
            if (show) {
                this.renderSidebarContent(user, content);
                sidebar.classList.remove('hidden');
                overlay.classList.remove('hidden');
                setTimeout(() => {
                    sidebar.classList.add('show');
                    overlay.classList.add('show');
                }, 10);
            } else {
                sidebar.classList.remove('show');
                overlay.classList.remove('show');
                setTimeout(() => {
                    sidebar.classList.add('hidden');
                    overlay.classList.add('hidden');
                }, 400);
            }
        };

        if (trigger) trigger.onclick = () => toggleSidebar(true);
        if (closeBtn) closeBtn.onclick = () => toggleSidebar(false);
        if (overlay) overlay.onclick = () => toggleSidebar(false);

        const myLibLink = document.querySelector('a[data-view="privateLibrary"]');
        if (myLibLink) myLibLink.style.display = user.isGuest ? 'none' : 'block';
    },

    renderSidebarContent: function (user, container) {
        // Calculate Stats
        const bookCount = user.isGuest ? 0 : user.myLibrary.length;

        // Find top category
        let topCat = "لا يوجد";
        if (!user.isGuest && user.myLibrary.length > 0) {
            const counts = {};
            user.myLibrary.forEach(id => {
                const book = booksData.find(b => b.id === id);
                if (book) counts[book.category] = (counts[book.category] || 0) + 1;
            });
            const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
            if (top) topCat = this.translateCat(top[0]);
        }

        const joinDate = user.isGuest ? "اليوم" : "فبراير 2026"; // Simulated for UI
        const statusText = user.isGuest ? "ضيف" : "عضو";

        let personaHtml = '';
        if (!user.isGuest && user.persona) {
            personaHtml = `
                <span class="profile-role">قارئ فلسفي</span>
                <span class="profile-author">${user.persona.name}</span>
                <p class="profile-quote">"${user.persona.quote}"</p>
            `;
        } else if (user.isGuest) {
            personaHtml = `
                <span class="profile-role">مستكشف جديد</span>
                <span class="profile-author">زائر المنصة</span>
                <p class="profile-quote">"القراءة هي رحلة لا تنتهي أبدًا."</p>
            `;
        }

        container.innerHTML = `
            <div class="profile-top">
                <h2>${user.username}</h2>
                ${personaHtml}
            </div>
            
            <hr class="sidebar-divider">
            
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-label">عدد الكتب</span>
                    <span class="stat-value">${bookCount} كتاب</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">أكثر تصنيف</span>
                    <span class="stat-value">${topCat}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">عضو منذ</span>
                    <span class="stat-value">${joinDate}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">الحالة</span>
                    <span class="stat-value">${statusText}</span>
                </div>
            </div>

            <div class="sidebar-footer">
                <button id="sidebar-logout" class="logout-sidebar-btn">تسجيل الخروج</button>
            </div>
        `;

        const logoutBtn = document.getElementById('sidebar-logout');
        if (logoutBtn) {
            logoutBtn.onclick = () => auth.logout();
        }
    },

    renderDashboard: function () {
        const user = auth.getCurrentUser();
        const container = this.views.home;
        container.innerHTML = `
            <div class="container animate-in">
                <section class="welcome-section">
                    <h1>أهلاً بك، ${user.username}</h1>
                    <p>استكشف عالم القراءة والمعرفة في منصة مرتضى للكتب.</p>
                </section>
                <div class="dashboard-grid">
                    <div class="dash-card" data-target="library"><div class="card-icon">📚</div><h3>المكتبة العامة</h3><p>تصفح مجموعة واسعة من الكتب.</p></div>
                    <div class="dash-card" data-target="novels"><div class="card-icon">📖</div><h3>الروايات</h3><p>عالم الروايات والسرد الأدبي</p></div>
                    <div class="dash-card" data-target="ideas"><div class="card-icon">💡</div><h3>أفكار عامة</h3><p>اكتشف أفكاراً ملهمة.</p></div>
                    <div class="dash-card" data-target="stories"><div class="card-icon">✍️</div><h3>قصص</h3><p>عالم من الخيال.</p></div>
                </div>
            </div>
        `;
        container.querySelectorAll('.dash-card').forEach(card => {
            card.onclick = () => this.switchView(card.dataset.target);
        });
    },

    renderLibrary: function () {
        const container = this.views.library.querySelector('.container');

        // Clean high-level container
        let headerControls = document.getElementById('library-header-controls');
        if (!headerControls) {
            headerControls = document.createElement('div');
            headerControls.id = 'library-header-controls';
            headerControls.className = 'library-header-controls';
            // Insert after h2
            const title = container.querySelector('.section-title');
            title.insertAdjacentElement('afterend', headerControls);
        }

        const categories = ['All', ...new Set(booksData.map(b => b.category))];

        // 1. Sort Toggle (Now First)
        let controls = document.getElementById('explore-controls');
        if (!controls) {
            controls = document.createElement('div');
            controls.id = 'explore-controls';
            controls.className = 'explore-controls';
            headerControls.appendChild(controls);
        }

        controls.innerHTML = `
            <div class="toggle-group" id="sort-toggle">
                <div class="toggle-indicator"></div>
                <button class="toggle-btn active" data-sort="newest">الأحدث</button>
                <button class="toggle-btn" data-sort="popular">الأكثر تفاعلاً</button>
            </div>
        `;

        const toggle = controls.querySelector('#sort-toggle');
        const btns = toggle.querySelectorAll('.toggle-btn');

        // 2. Category Filters (Now Second)
        let filters = document.getElementById('library-filters');
        if (!filters) {
            filters = document.createElement('div');
            filters.id = 'library-filters';
            filters.className = 'category-filters';
            headerControls.appendChild(filters);
        }

        filters.innerHTML = categories.map(cat =>
            `<button class="cat-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${this.translateCat(cat)}</button>`
        ).join('');

        // Event Listeners
        btns.forEach(btn => {
            btn.onclick = () => {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                if (btn.dataset.sort === 'popular') toggle.classList.add('switched');
                else toggle.classList.remove('switched');

                const activeCat = filters.querySelector('.cat-btn.active').dataset.category;
                this.renderGrid('book-grid', activeCat, null, btn.dataset.sort);
            };
        });

        filters.querySelectorAll('.cat-btn').forEach(btn => {
            btn.onclick = () => {
                filters.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const sort = toggle.querySelector('.toggle-btn.active').dataset.sort;
                this.renderGrid('book-grid', btn.dataset.category, null, sort);
            };
        });

        this.renderGrid('book-grid', 'All', null, 'newest');
    },

    renderMyLibrary: function () {
        const user = auth.getCurrentUser();
        const saved = booksData.filter(b => user.myLibrary.includes(b.id));
        const grid = document.getElementById('my-library-grid');
        const container = this.views.privateLibrary.querySelector('.container');

        // Add "Add Book" button if not exists
        let actionArea = container.querySelector('.library-actions');
        if (!actionArea) {
            actionArea = document.createElement('div');
            actionArea.className = 'library-actions';
            const title = container.querySelector('.section-title');
            title.insertAdjacentElement('afterend', actionArea);
        }

        actionArea.innerHTML = `
            <button class="library-add-btn" id="add-book-library">
                <span>➕</span>
                <span>إضافة كتاب جديد</span>
            </button>
        `;

        document.getElementById('add-book-library').onclick = () => this.openAddBookModal();

        if (saved.length === 0) {
            grid.innerHTML = '<p class="no-books">لم تضف أي كتب بعد.</p>';
        } else {
            this.renderGrid('my-library-grid', 'All', saved);
        }
    },

    openAddBookModal: function () {
        const modal = document.getElementById('add-book-modal');
        if (modal) modal.classList.remove('hidden');
    },

    initAddBookModal: function () {
        const modal = document.getElementById('add-book-modal');
        const floatBtn = document.getElementById('floating-add-btn');
        const closeBtn = document.getElementById('close-modal');
        const confirmBtn = document.getElementById('modal-confirm');
        if (floatBtn) floatBtn.onclick = (e) => {
            this.createRipple(e, floatBtn);
            this.openAddBookModal();
        };

        const closeModal = () => modal.classList.add('hidden');

        if (closeBtn) closeBtn.onclick = closeModal;
        if (confirmBtn) confirmBtn.onclick = closeModal;

        // Close on clicking overlay
        if (modal) {
            modal.onclick = (e) => {
                if (e.target === modal) closeModal();
            };
        }
    },

    renderGrid: function (gridId, category, customData = null, sort = 'newest') {
        const grid = document.getElementById(gridId);
        grid.innerHTML = '';
        let data = customData || [...booksData];

        // Sorting logic
        if (sort === 'popular') {
            const interactions = auth.getInteractions();
            data.sort((a, b) => {
                const likesA = interactions[a.id]?.likes || 0;
                const likesB = interactions[b.id]?.likes || 0;
                return likesB - likesA;
            });
        } else {
            // Newest (Reverse order of booksData for simulation)
            data.sort((a, b) => b.id - a.id);
        }

        const filtered = category === 'All' ? data : data.filter(b => b.category === category);

        filtered.forEach(book => {
            try {
                const status = statusConfig[book.status] || statusConfig.not_finished;
                const card = document.createElement('div');
                card.className = 'book-card skeleton';
                card.innerHTML = `
                    <div class="image-container">
                        <img src="${book.cover}" alt="${book.title}" loading="lazy" 
                             onerror="this.src='https://via.placeholder.com/200x300?text=No+Cover'"
                             onload="this.parentElement.parentElement.classList.remove('skeleton')">
                    </div>
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p>${book.author}</p>
                        <span class="status-badge ${status.class}">${status.text}</span>
                    </div>
                `;
                card.onclick = () => this.showDetails(book);
                grid.appendChild(card);
            } catch (err) {
                console.warn("UI: Skipping broken book object", book, err);
            }
        });
    },

    showDetails: function (book) {
        const prevView = Object.keys(this.views).find(k => !this.views[k].classList.contains('hidden') && k !== 'details');
        this.switchView('details');

        const status = statusConfig[book.status] || statusConfig.not_finished;
        const user = auth.getCurrentUser();
        const isSaved = user?.myLibrary?.includes(book.id);

        // Premium Back Button
        const backBtnHtml = `
            <div class="premium-back-btn" id="close-details" title="عودة">
                <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </div>
        `;

        this.views.details.innerHTML = `
            ${backBtnHtml}
            <div class="container animate-fade-down">
                <div class="details-container">
                    <div class="details-header">
                        <img src="${book.cover}" alt="${book.title}" class="details-cover">
                        <div class="details-meta">
                            <h1>${book.title}</h1>
                            <h2>${book.author}</h2>
                            <div class="badges">
                                <span class="badge cat-badge status-badge">${this.translateCat(book.category)}</span>
                                <span class="status-badge ${status.class}">${status.text}</span>
                            </div>

                            ${!user.isGuest ? `
                                <button class="save-btn ${isSaved ? 'saved' : ''}" id="toggle-save">
                                    <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                                    <span>${isSaved ? 'موجود في المفضلات' : 'إضافة إلى المفضلات'}</span>
                                </button>
                            ` : ''}
                            
                            <div class="interaction-bar">
                                <button class="like-btn" id="like-btn" data-id="${book.id}">
                                    <svg viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
                                    <span class="like-count" id="like-count">0</span>
                                </button>
                                <button class="dislike-btn" id="dislike-btn" data-id="${book.id}">
                                    <svg viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.37-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="tabs">
                        <button class="tab-btn active" data-tab="summary">تلخيص</button>
                        <button class="tab-btn" data-tab="ideas">أفكار</button>
                        <button class="tab-btn" data-tab="comment">رأي</button>
                    </div>
                    <div class="tab-content active" id="tab-summary"><p>${book.summary}</p></div>
                    <div class="tab-content" id="tab-ideas"><ul>${book.importantIdeas.map(i => `<li>${i}</li>`).join('')}</ul></div>
                    <div class="tab-content" id="tab-comment"><p>${book.comment}</p></div>
                </div>
            </div>
        `;

        document.getElementById('close-details').onclick = () => {
            if (prevView && prevView !== 'details') {
                this.switchView(prevView);
            } else {
                this.switchView('home');
            }
        };

        const saveBtn = document.getElementById('toggle-save');
        if (saveBtn) {
            saveBtn.onclick = (e) => {
                this.createRipple(e, saveBtn);
                auth.toggleSave(book.id);
                const nowSaved = auth.getCurrentUser().myLibrary.includes(book.id);
                saveBtn.querySelector('span').innerText = nowSaved ? 'موجود في المفضلات' : 'إضافة إلى المفضلات';
                saveBtn.classList.toggle('saved', nowSaved);
            };
        }

        const tabs = this.views.details.querySelectorAll('.tab-btn');
        tabs.forEach(t => {
            t.onclick = () => {
                tabs.forEach(btn => btn.classList.remove('active'));
                this.views.details.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                t.classList.add('active');
                document.getElementById(`tab-${t.dataset.tab}`).classList.add('active');
            };
        });

        // Interactions Logic
        const interactionsArr = auth.getInteractions();
        const currentData = interactionsArr[book.id] || { likes: 0, dislikes: 0, userAction: null };

        const likeBtn = document.getElementById('like-btn');
        const dislikeBtn = document.getElementById('dislike-btn');
        const likeCount = document.getElementById('like-count');

        const updateInteractionsUI = (data) => {
            likeCount.innerText = data.likes;
            likeBtn.classList.toggle('active', data.userAction === 'like');
            dislikeBtn.classList.toggle('active', data.userAction === 'dislike');

            if (data.userAction === 'like') {
                likeBtn.style.animation = 'none';
                likeBtn.offsetHeight;
                likeBtn.style.animation = 'scaleBounce 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
        };

        updateInteractionsUI(currentData);

        likeBtn.onclick = (e) => {
            ui.createRipple(e, likeBtn);
            const newData = auth.saveInteraction(book.id, 'like');
            updateInteractionsUI(newData);
        };

        dislikeBtn.onclick = (e) => {
            ui.createRipple(e, dislikeBtn);
            const newData = auth.saveInteraction(book.id, 'dislike');
            updateInteractionsUI(newData);
        };
    },

    translateCat: function (c) {
        const m = { 'Literature': 'أدب', 'Psychology': 'علم نفس', 'Philosophy': 'فلسفة', 'History': 'تاريخ', 'Religion': 'دين', 'Self Development': 'تطوير ذات' };
        return m[c] || c;
    }
};

// --- 4. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function () {
    console.log("Platform: DOM Loaded. Initializing app...");

    try {
        ui.init();

        // Auth check
        const user = auth.getCurrentUser();
        if (user) {
            console.log("Platform: User authenticated:", user.username);
            ui.updateNavbar();
            ui.initAddBookModal(); // Initialize modal listeners
            ui.switchView('home');
            // Ensure nav state on reload
            if (window.scrollY > 20) ui.nav.classList.add('scrolled');
        } else {
            console.log("Platform: No user session. Showing intro.");
            ui.switchView('intro');
        }

        // Populate Persona Select with Safety
        const personaSelect = document.getElementById('persona-select');
        const previewQuote = document.createElement('p'); // For live preview in form
        previewQuote.id = 'persona-preview-quote';
        previewQuote.className = 'persona-quote'; // Reusing styles
        previewQuote.style.textAlign = 'center';
        previewQuote.style.marginTop = '10px';

        if (personaSelect) {
            personaSelect.innerHTML = '<option value="-1">-- بدون شخصية --</option>'; // Default
            literaryFigures.forEach((figure, index) => {
                if (figure && figure.name) {
                    const opt = document.createElement('option');
                    opt.value = index;
                    opt.textContent = figure.name;
                    personaSelect.appendChild(opt);
                }
            });

            // Insert preview element after the select parent for better layout
            personaSelect.parentNode.appendChild(previewQuote);

            personaSelect.onchange = () => {
                const idx = personaSelect.value;
                const figure = literaryFigures[idx];

                // Fade out effect for preview
                previewQuote.classList.add('fade-out');

                setTimeout(() => {
                    previewQuote.textContent = (figure && idx !== "-1") ? `"${figure.quote}"` : "";
                    previewQuote.classList.remove('fade-out');
                    previewQuote.classList.add('fade-in');
                    setTimeout(() => previewQuote.classList.remove('fade-in'), 400);
                }, 350);
            };
        }

        // --- Auth Redesign Listeners ---
        const authSelection = document.getElementById('auth-selection');
        const authFormContainer = document.getElementById('auth-form-container');
        const showAuthFormBtn = document.getElementById('show-auth-form');
        const backToSelectionBtn = document.getElementById('back-to-selection');
        const submitAuthBtn = document.getElementById('submit-auth');
        const guestBtn = document.getElementById('guest-login');

        if (showAuthFormBtn) {
            showAuthFormBtn.onclick = () => {
                authSelection.classList.add('hidden');
                authFormContainer.classList.remove('hidden');
            };
        }

        if (backToSelectionBtn) {
            backToSelectionBtn.onclick = () => {
                authFormContainer.classList.add('hidden');
                authSelection.classList.remove('hidden');
            };
        }

        if (guestBtn) {
            guestBtn.onclick = () => {
                auth.loginAsGuest();
                ui.updateNavbar();
                ui.switchView('home');
            };
        }

        if (submitAuthBtn) {
            submitAuthBtn.onclick = () => {
                const u = document.getElementById('reg-username').value.trim();
                const p = document.getElementById('reg-password').value.trim();
                const personaIdx = document.getElementById('persona-select').value;

                if (u && p) {
                    auth.createAccount(u, p, personaIdx);
                    ui.updateNavbar();
                    ui.switchView('home');
                } else {
                    alert("يرجى إدخال اسم المستخدم وكلمة المرور");
                }
            };
        }

        // Navigation Link Listeners
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.dataset.view;
                if (target) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    ui.switchView(target);
                }
            });
        });

    } catch (err) {
        console.error("Platform: Critical initialization error", err);
        const main = document.getElementById('main-view');
        if (main) {
            main.innerHTML = '<div style="color:red; padding:20px; text-align:center;">حدث خطأ في تحميل المنصة. يرجى تحديث الصفحة.</div>';
        }
    }
});
