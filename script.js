const booksData = [
    {
        id: 1,
        title: "زوجة رجل آخر / زوج تحت السرير",
        author: "فيودور دوستويفسكي",
        category: "Literature",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215433.jpg",
        summary: "مجموعة قصصية قصيرة تستعرض ببراعة الجوانب النفسية والاجتماعية للشخصيات بأسلوب ساخر وذكي.",
        importantIdeas: [
            "الصراع النفسي الداخلي",
            "نقد التقاليد الاجتماعية",
            "الفكاهة السوداء في الأدب الروسي"
        ],
        comment: "بداية المجموعات القصصية لدوستويفسكي، تتميز بخفة الظل غير المعتادة منه."
    },
    {
        id: 2,
        title: "إشارات الحب في لغة الجسد",
        author: "آلان وباربرا بيز",
        category: "Psychology",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215409.jpg",
        summary: "دليل شامل لفهم الإشارات غير اللفظية التي يرسلها الأشخاص في المواقف الرومانسية والاجتماعية.",
        importantIdeas: [
            "تفسير حركات العيون واليدين",
            "أهمية التواصل البصري",
            "الفرق بين لغة جسد الرجال والنساء في الحب"
        ],
        comment: "كتاب مفيد جداً لفهم التواصل غير المباشر."
    },
    {
        id: 3,
        title: "خوارزميات اللاشعور",
        author: "علي الوردي",
        category: "Philosophy",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215354.jpg",
        summary: "دراسة اجتماعية نفسية عميقة تتناول طبيعة النفس البشرية وتأثير اللاوعي على سلوكيات الأفراد والمجتمعات.",
        importantIdeas: [
            "تأثير العقل الباطن على القرارات",
            "الازدواجية في الشخصية",
            "التحليل النفسي للشخصية العربية"
        ],
        comment: "من أعمق ما كتب الدكتور علي الوردي في تحليل النفس."
    },
    {
        id: 4,
        title: "الكتاب الصغير في علم النفس",
        author: "إميلي رولز & كارولين ريجوز",
        category: "Psychology",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215333.jpg",
        summary: "كتاب مبسط يستعرض أهم المفاهيم والنظريات في علم النفس بأسلوب سهل ومناسب لغير المتخصصين.",
        importantIdeas: [
            "أساسيات السلوك البشري",
            "فهم العواطف والمشاعر",
            "كيفية التعامل مع الضغوط النفسية"
        ],
        comment: "مناسب جداً كمقدمة للمبتدئين في هذا المجال."
    },
    {
        id: 5,
        title: "مهزلة العقل البشري",
        author: "علي الوردي",
        category: "Philosophy",
        status: "not_finished",
        cover: "صور الكتب/IMG_20260206_215326.jpg",
        summary: "كتاب نقدي يتناول الأنماط الفكرية والاجتماعية السائدة في المجتمع بجرأة وعمق فلسفي.",
        importantIdeas: [
            "نقد الجمود الفكري",
            "العلاقة بين الفرد والمجتمع",
            "تأثير البيئة الاجتماعية على التفكير"
        ],
        comment: "كتاب يفتح آفاق التفكير النقدي بشكل رائع."
    },
    {
        id: 6,
        title: "علم النفس: خلاصة أعظم الكتب",
        author: "توم باتلر-باودون",
        category: "Psychology",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215318.jpg",
        summary: "مجموعة من الملخصات لأهم الكتب في تاريخ علم النفس، توفر نظرة بانورامية واسعة لهذا العلم.",
        importantIdeas: [
            "تطور التفكير النفسي عبر العصور",
            "أهم رواد علم النفس ونظرياتهم",
            "تطبيقات علم النفس في الحياة اليومية"
        ],
        comment: "مرجع ممتاز يختصر عليك قراءة عشرات الكتب."
    },
    {
        id: 7,
        title: "فن أن تكون على صواب",
        author: "آرثر شوبنهاور",
        category: "Philosophy",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215309.jpg",
        summary: "رسالة فكاهية وجدلية يشرح فيها شوبنهاور كيف يمكن للمرء أن ينتصر في أي جدال بغض النظر عن الحقيقة.",
        importantIdeas: [
            "المغالطات المنطقية وكيفية استخدامها",
            "فنون الإقناع والجدل",
            "الفرق بين الحقيقة والانتصار في الحوار"
        ],
        comment: "كتاب ذكي جداً، لكن يجب استخدامه بحذر وأمانة."
    },
    {
        id: 8,
        title: "جلسات نفسية",
        author: "محمد إبراهيم",
        category: "Self Development",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215302.jpg",
        summary: "كتاب يتناول قضايا الصحة النفسية بأسلوب بسيط وقريب من القارئ، كأنها جلسات حوارية.",
        importantIdeas: [
            "التعامل مع القلق والاكتئاب",
            "بناء علاقات صحية مع الآخرين"
        ],
        comment: "أسلوبه بسيط وواقعي جداً."
    },
    {
        id: 9,
        title: "وعّاظ السلاطين",
        author: "علي الوردي",
        category: "History",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215251.jpg",
        summary: "كتاب يحلل الدور الاجتماعي لرجال الدين في التاريخ الإسلامي وعلاقتهم بالسلطة.",
        importantIdeas: [
            "الصراع الاجتماعي والتاريخي",
            "نقد الازدواجية في الشخصية العربية"
        ],
        comment: "من أهم الكتب التي تحلل التاريخ بمنظور اجتماعي."
    },
    {
        id: 10,
        title: "ابقَ قويًا",
        author: "ديمي لوفاتو",
        category: "Self Development",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215234.jpg",
        summary: "مجموعة من الاقتباسات والأفكار اليومية التي تهدف إلى تقديم الدعم والتحفيز الذاتي.",
        importantIdeas: [
            "أهمية الرعاية الذاتية",
            "الاستمرار في المحاولة رغم الإخفاقات"
        ],
        comment: "كتاب لطيف للقراءة اليومية والتحفيز."
    },
    {
        id: 11,
        title: "أرض السافلين",
        author: "أحمد خالد مصطفى",
        category: "Literature",
        status: "not_finished",
        cover: "صور الكتب/IMG_20260206_215224.jpg",
        summary: "رواية تأخذ القارئ في رحلة خيالية وتاريخية لاستكشاف عوالم سفلية وجوانب خفية من التاريخ البشري.",
        importantIdeas: [
            "الإبحار في عوالم الجريمة والخفاء",
            "الربط بين وقائع تاريخية نادرة",
            "فلسفة الشر في النفس البشرية"
        ],
        comment: "رواية مشوقة وغنية بالمعلومات الغريبة."
    },
    {
        id: 12,
        title: "Beautiful Things",
        author: "Hunter Biden",
        category: "Literature",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215212.jpg",
        summary: "Hunter Biden's memoir offers a candid and unflinching look into his life, primarily focusing on his decades-long struggle with addiction, grief, and the road to recovery.",
        importantIdeas: [
            "The journey towards sobriety and persistence",
            "The profound impact of personal tragedy and grief",
            "The unbreakable love and support of family"
        ],
        comment: "A vulnerable and deeply personal narrative."
    },
    {
        id: 13,
        title: "Death of a Salesman",
        author: "Arthur Miller",
        category: "Literature",
        status: "not_finished",
        cover: "صور الكتب/IMG_20260206_215201.jpg",
        summary: "A landmark production and play that revolutionized theater through its innovative use of stage directions and themes.",
        importantIdeas: [
            "The breakdown of the American Dream",
            "The tension between reality and illusion",
            "The role of memory and time in human experience"
        ],
        comment: "The definitive work of the Theater of the Absurd."
    },
    {
        id: 14,
        title: "Waiting for Godot",
        author: "Samuel Beckett",
        category: "Literature",
        status: "not_finished",
        cover: "صور الكتب/IMG_20260206_215148.jpg",
        summary: "A seminal play of the Theatre of the Absurd, where two characters, Vladimir and Estragon, wait endlessly for a mysterious figure named Godot who never arrives.",
        importantIdeas: [
            "The absurdity and meaninglessness of existence",
            "The nature of time and perpetual waiting",
            "Human companionship as a means to endure boredom"
        ],
        comment: "A masterpiece that challenges the traditional forms of drama."
    },
    {
        id: 15,
        title: "الصراط القويم",
        author: "السيد محمد محمد صادق الصدر",
        category: "Religion",
        status: "not_finished",
        cover: "صور الكتب/IMG_20260206_215725.jpg",
        summary: "رسالة فقهية عملية مختصره تتناول أحكام العبادات والمعاملات، وتضم فتاوى السيد محمد محمد صادق الصدر.",
        importantIdeas: [
            "توضيح أحكام الاجتهاد والتقليد",
            "فقه العبادات اليومية والمعاملات المالية",
            "تبسيط المسائل الفقهية للمكلفين"
        ],
        comment: "مرجع فقهي مهم يتميز بالاختصار والوضوح."
    },
    {
        id: 16,
        title: "تاريخ العراق المعاصر (1914–1968)",
        author: "جعفر عباس حميدي",
        category: "History",
        status: "not_finished",
        cover: "صور الكتب/IMG_20260206_221252.jpg",
        summary: "دراسة شاملة لتاريخ العراق الحديث، تغطي التحولات السياسية والاجتماعية من الحرب العالمية الأولى حتى عام 1968.",
        importantIdeas: [
            "تأسيس الدولة العراقية الحديثة ونظام الحكم",
            "أثر الانتداب البريطاني والملكية على المجتمع",
            "التحولات الثورية والسياسية الكبرى في العراق"
        ],
        comment: "كتاب أكاديمي موثق وضروري لفهم تاريخ المنطقة."
    },
    {
        id: 17,
        title: "استمتع بحياتك وعش سعيدًا",
        author: "أريج الحسيني",
        category: "Self Development",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_221243.jpg",
        summary: "كتاب يتناول سبل تحقيق السعادة الحقيقية في الحياة من خلال الرضا النفسي وتطوير الذات والتفاؤل.",
        importantIdeas: [
            "مفهوم السعادة الحقيقية والرضا النفسي",
            "تطوير الذات ومواجهة ضغوط الحياة",
            "خطوات عملية للعيش بحياة أكثر إيجابية"
        ],
        comment: "كتاب خفيف وملهم يقدم نصائح عملية للسعادة."
    },
    {
        id: 18,
        title: "مجمع المسائل والردود",
        author: "السيد محمد محمد صادق الصدر",
        category: "Religion",
        status: "not_finished",
        cover: "صور الكتب/IMG_20260206_215711.jpg",
        summary: "مجموعة من المسائل الفقهية والردود عليها، تتناول قضايا معاصرة وعبادية تهم المكلفين في حياتهم اليومية.",
        importantIdeas: [
            "إجابات على أسئلة المكلفين المعاصرة",
            "تفصيل في أحكام العبادات والمعاملات",
            "تغطية لموضوعات اجتماعية وحياتية متنوعة"
        ],
        comment: "كتاب شامل لكثير من المسائل التي يحتاجها الفرد المسلم."
    },
    {
        id: 19,
        title: "عظمة الإمام علي",
        author: "عارف القصبي السعيد",
        category: "History",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215702.jpg",
        summary: "دراسة تتناول جوانب العظمة في شخصية الإمام علي بن أبي طالب من الناحية الأخلاقية والسياسية والقيادية والعلمية.",
        importantIdeas: [
            "القيم الأخلاقية الرفيعة في سيرة الإمام علي",
            "النموذج القيادي والعدالة في حكمه",
            "أثره الباقي في الفكر الإسلامي والإنساني"
        ],
        comment: "استعراض رائع لواحد من أعظم الشخصيات في التاريخ."
    },
    {
        id: 20,
        title: "كفاحي",
        author: "أدولف هتلر",
        category: "History",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215628.jpg",
        summary: "السيرة الذاتية لأدولف هتلر التي تشرح أفكاره الأيديولوجية والسياسية وتاريخ الحركة النازية في ألمانيا.",
        importantIdeas: [
            "تحليل تاريخي للوضع السياسي بعد الحرب العالمية الأولى",
            "جذور الأيديولوجيا النازية والأفكار القومية",
            "توثيق مسار صعود الحزب النازي للسلطة"
        ],
        comment: "كتاب تاريخي مهم لفهم أحداث القرن العشرين وجذور الصراع العالمي."
    },
    {
        id: 21,
        title: "علل الشرائع",
        author: "الشيخ الصدوق",
        category: "Religion",
        status: "not_finished",
        cover: "صور الكتب/IMG_20260206_215542.jpg",
        summary: "كتاب يجمع الأحاديث التي تشرح الأسباب والحكم من وراء الأحكام الشرعية والفرائض.",
        importantIdeas: [
            "الفلسفة وراء العبادات",
            "أسرار الخلق والأحكام",
            "منهج المحدثين القدامى في التدوين"
        ],
        comment: "كتاب يرضي الفضول المعرفي حول أسباب التشريع."
    },
    {
        id: 22,
        title: "أشهر 50 خرافة في علم النفس",
        author: "سكوت ليلينفيلد وآخرون",
        category: "Psychology",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215529.jpg",
        summary: "كتاب علمي يفند المفاهيم الخاطئة الشائعة في علم النفس الشعبي بالاعتماد على الأدلة التجريبية.",
        importantIdeas: [
            "تفنيد خرافة الـ 10% من العقل",
            "كشف الحقيقة حول لغة الجسد والذكاء",
            "أهمية التفكير العلمي في فهم السلوك"
        ],
        comment: "كتاب ضروري لتنقية معلوماتنا النفسية من الأوهام."
    },
    {
        id: 23,
        title: "مدخل إلى علم النفس",
        author: "ليندا ل. دافيدوف",
        category: "Psychology",
        status: "not_finished",
        cover: "صور الكتب/IMG_20260206_215514.jpg",
        summary: "كتاب مرجعي شامل يتناول المبادئ الأساسية لعلم النفس بأسلوب أكاديمي منظم.",
        importantIdeas: [
            "العمليات المعرفية والإدراكية",
            "نظريات التعلم والذاكرة",
            "بيولوجيا السلوك البشري"
        ],
        comment: "من أفضل الكتب المنهجية لتدريس علم النفس."
    },
    {
        id: 24,
        title: "لا يمكنك إيذائي",
        author: "ديفيد غوغينز",
        category: "Self Development",
        status: "finished",
        cover: "صور الكتب/IMG_20260206_215448.jpg",
        summary: "قصة ملهمة حول قوة الإرادة والقدرة الكامنة في الإنسان لتجاوز أقسى الظروف الجسدية والنفسية.",
        importantIdeas: [
            "قاعدة الـ 40% وتجاوز الحدود الذهنية",
            "الانضباط الذاتي الصارم",
            "تحويل الألم إلى دافع للنجاح"
        ],
        comment: "كتاب قوي جداً يغير نظرتك لقدراتك الشخصية."
    }
];

const statusConfig = {
    finished: {
        text: "قمت بقراءته",
        class: "finished"
    },
    reading: {
        text: "أقرأه حاليًا",
        class: "reading"
    },
    not_finished: {
        text: "لم أنتهِ من قراءته",
        class: "not_finished"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const bookGrid = document.getElementById('book-grid');
    const categoryButtons = document.querySelectorAll('.cat-btn');
    const bookDetailsView = document.getElementById('book-details-view');
    const mainView = document.getElementById('main-view');

    // Initial render
    renderBooks('All');

    // Category Filtering
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            categoryButtons.forEach(b => b.classList.remove('active'));
            // Add to current
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            renderBooks(category);
        });
    });

    function renderBooks(category) {
        bookGrid.innerHTML = '';
        const filteredBooks = category === 'All'
            ? booksData
            : booksData.filter(book => book.category === category);

        filteredBooks.forEach(book => {
            const status = statusConfig[book.status] || statusConfig.not_finished;
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <img src="${book.cover}" alt="${book.title}" loading="lazy">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <span class="status-badge ${status.class}">${status.text}</span>
                </div>
            `;
            card.addEventListener('click', () => showDetails(book));
            bookGrid.appendChild(card);
        });
    }

    function showDetails(book) {
        const status = statusConfig[book.status] || statusConfig.not_finished;
        mainView.classList.add('hidden');
        bookDetailsView.classList.remove('hidden');
        window.scrollTo(0, 0);

        bookDetailsView.innerHTML = `
            <div class="container animate-in">
                <button class="back-btn" id="back-to-list">← Back to Library</button>
                <div class="details-container">
                    <div class="details-header">
                        <img src="${book.cover}" alt="${book.title}" class="details-cover">
                        <div class="details-meta">
                            <h1>${book.title}</h1>
                            <h2>${book.author}</h2>
                            <div class="badges">
                                <span class="badge cat-badge">${book.category}</span>
                                <span class="status-badge ${status.class}">${status.text}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tabs">
                        <button class="tab-btn active" data-tab="summary">تلخيص الكتاب</button>
                        <button class="tab-btn" data-tab="ideas">أفكار مهمة</button>
                        <button class="tab-btn" data-tab="comment">رأيي الشخصي</button>
                    </div>

                    <div class="tab-content active" id="tab-summary">
                        <p>${book.summary}</p>
                    </div>
                    <div class="tab-content" id="tab-ideas">
                        <ul>
                            ${book.importantIdeas.map(idea => `<li>${idea}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="tab-content" id="tab-comment">
                        <p>${book.comment}</p>
                    </div>
                </div>
            </div>
        `;

        // Back Button
        document.getElementById('back-to-list').addEventListener('click', () => {
            bookDetailsView.classList.add('hidden');
            mainView.classList.remove('hidden');
        });

        // Tab Switching
        const tabs = bookDetailsView.querySelectorAll('.tab-btn');
        const contents = bookDetailsView.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                tab.classList.add('active');
                const target = tab.getAttribute('data-tab');
                document.getElementById(`tab-${target}`).classList.add('active');
            });
        });
    }
});
