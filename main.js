// --- Global Variables & Initialization ---
let cart = [];
const cartCountBadge = document.querySelector('.cart-count') || document.createElement('span');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalEl = document.getElementById('cart-total-display');

// --- Localization & Translation ---
const translations = {
    en: {
        nav_craft: "The Craft",
        nav_fabrics: "Fabrics",
        nav_fitting: "Start Fitting",
        btn_book: "Book Appointment",
        hero_subtitle: "From The Holy City Of Makkah",
        hero_title: "Tailored for <br><span>Perfection</span>",
        hero_desc: "Experience the luxury of bespoke thobes, crafted with tradition and elegance.",
        hero_cta: "Explore Collection",
        process_title: "The Bespoke Experience",
        process_subtitle: "Three simple steps to your perfect fit.",
        step1_title: "Select Fabric",
        step1_desc: "Choose from our premium collection of imported cottons, wools, and blends designed for comfort and elegance.",
        step2_title: "Provide Fitting",
        step2_desc: "Input your exact body measurements using our guided tool to ensure a silhouette that complements you.",
        step3_title: "Expert Stitching",
        step3_desc: "Our master tailors in Makkah craft your garment with precision, ready to be delivered to your door.",
        collection_title: "Premium Fabrics",
        collection_subtitle: "Curated for every season and occasion.",
        cloth1_name: "Royal Black Wool",
        cloth1_desc: "Winter Collection - Heavy Weight",
        cloth2_name: "Signature White",
        cloth2_desc: "Summer Collection - Breathable",
        cloth3_name: "Cream Gold Blend",
        cloth3_desc: "Premium Occasion Wear",
        btn_add_basket: "Add to Basket",
        measure_title: "Custom Fitting",
        measure_subtitle: "For:",
        label_height: "Height (cm)",
        label_chest: "Chest (cm)",
        label_waist: "Waist (cm)",
        label_neck: "Neck (cm)",
        btn_cancel: "Cancel",
        btn_save_add: "Save & Add to Bag",
        placeholder_search: "Search for fabrics, styles...",
        cart_title: "Shopping Bag",
        cart_empty: "Your bag is currently empty.",
        cart_total: "Total",
        btn_checkout: "Checkout",
        dash_title: "My Account",
        text_welcome: "Welcome,",
        dash_shipments: "Shipments",
        dash_no_shipments: "No active shipments",
        dash_track: "Track Order",
        dash_orders: "My Orders",
        dash_view_past: "View past bespoke orders",
        dash_history: "View History",
        dash_measurements: "Measurements",
        dash_saved_profile: "Saved: 1 Profile",
        dash_edit_size: "Edit Sizes",
        btn_logout: "Log Out",
        cookie_msg: "We use cookies to ensure you get the best experience on our website, in accordance with Saudi Data Regulations.",
        btn_accept: "Accept All",
        btn_preferences: "Preferences",
        fit_title: "Your Perfect Fit",
        fit_desc: "Precision is our promise. Please enter your measurements to begin the tailoring process.",
        text_selected_fabric: "Selected Fabric:",
        text_none_selected: "None Selected",
        label_fullname: "Full Name",
        label_shoulder: "Shoulder Width (cm)",
        btn_complete_order: "Complete Order",
        brand_name: "Rida Al Nissaj",
        footer_brand_desc: "Rida Al Nissaj, with its expertise, has impeccably made an unmatched space in the field of modest men's clothing through its traditionally modern range of Jubbas and Thawps.",
        footer_support: "Support",
        footer_about: "About Us",
        footer_help: "Help",
        footer_contact: "Contact Us",
        footer_chat: "Chat With Us",
        footer_business: "Business Enquiry",
        footer_links: "Quick Links",
        footer_track: "Track Order",
        footer_refund: "Return & Exchange",
        footer_stores: "Our Offline Stores",
        footer_join: "Join Our Circle",
        footer_join_desc: "Sign up for exclusive offers, original stories, events and more.",
        footer_subscribe: "Subscribe",
        placeholder_email: "Your email",
        footer_copyright: "&copy; 2026 Rida Al Nissaj.",
        footer_terms: "Terms & Condition",
        footer_privacy: "Privacy Policy",
        auth_signin: "Sign In",
        auth_create_account: "Create Account",
        auth_welcome: "Welcome Back",
        auth_access: "Access your measurements and order history.",
        auth_google_signin: "Sign in with Google",
        auth_or: "OR",
        auth_email: "Email Address",
        auth_password: "Password",
        auth_forgot: "Forgot Password?",
        auth_join: "Join Rida Al Nissaj",
        auth_save_fits: "Save your bespoke fits for future orders.",
        auth_google_signup: "Sign up with Google",
        auth_fullname: "Full Name",
        auth_create_pass: "Create Password",
        currency: "SAR",
        reviews_title: "Client Testimonials",
        reviews_subtitle: "Trusted by gentlemen across the Kingdom.",
        review1_text: '"The Royal Black Wool is absolutely stunning. The fit is precise and the embroidery detail is unmatched in Makkah."',
        review1_name: "Omar Al-Ghamdi",
        review1_loc: "Jeddah, SA",
        review2_text: '"Excellent service. The bespoke process was seamless, and the fabric quality for the summer collection is perfect."',
        review2_name: "Fahad Al-Saud",
        review2_loc: "Riyadh, SA",
        review3_text: '"Truly a premium experience. I ordered for my wedding and the gold blend fabric made me stand out. Highly recommended."',
        review3_name: "Mohammed Salem",
        review3_loc: "Makkah, SA"
    },
    ar: {
        nav_craft: "الحرفة",
        nav_fabrics: "الأقمشة",
        nav_fitting: "إبدأ القياس",
        btn_book: "احجز موعد",
        hero_subtitle: "من مكة المكرمة",
        hero_title: "مخيط خصيصاً <br><span>للكـمال</span>",
        hero_desc: "اكتشف فخامة الثياب المفصلة بدقة، والمصنوعة بلمسة من التقاليد والأناقة.",
        hero_cta: "تصفح المجموعة",
        process_title: "تجربة التفصيل",
        process_subtitle: "ثلاث خطوات بسيطة لمقاسك المثالي.",
        step1_title: "اختر القماش",
        step1_desc: "اختر من مجموعتنا المتميزة من الأقطان والأصواف المستوردة والمصممة للراحة والأناقة.",
        step2_title: "أدخل القياسات",
        step2_desc: "أدخل قياساتك الدقيقة عبر أداتنا لضمان تفصيل يناسبك تماماً.",
        step3_title: "خياطة متقنة",
        step3_desc: "يقوم خياطونا المحترفون في مكة بصنع ثوبك بدقة، ليكون جاهزاً للتوصيل إليك.",
        collection_title: "أقمشة فاخرة",
        collection_subtitle: "مختارة لكل موسم ومناسبة.",
        cloth1_name: "الصوف الملكي الأسود",
        cloth1_desc: "مجموعة الشتاء - وزن ثقيل",
        cloth2_name: "الأبيض المميز",
        cloth2_desc: "مجموعة الصيف - انسيابي",
        cloth3_name: "مزيج الكريم والذهب",
        cloth3_desc: "للمناسبات الفاخرة",
        btn_add_basket: "أضف للسلة",
        measure_title: "مقاسات تفصيلية",
        measure_subtitle: "لـ:",
        label_height: "الطول (سم)",
        label_chest: "الصدر (سم)",
        label_waist: "الخصر (سم)",
        label_neck: "الرقبة (سم)",
        btn_cancel: "إلغاء",
        btn_save_add: "حفظ وإضافة",
        placeholder_search: "ابحث عن أقمشة، تصاميم...",
        cart_title: "حقيبة التسوق",
        cart_empty: "حقيبتك فارغة حالياً.",
        cart_total: "المجموع",
        btn_checkout: "إتمام الشراء",
        dash_title: "حسابي",
        text_welcome: "مرحباً،",
        dash_shipments: "الشحنات",
        dash_no_shipments: "لا توجد شحنات نشطة",
        dash_track: "تتبع الطلب",
        dash_orders: "طلباتي",
        dash_view_past: "عرض الطلبات السابقة",
        dash_history: "سجل الطلبات",
        dash_measurements: "القياسات",
        dash_saved_profile: "المحفوظة: 1 ملف",
        dash_edit_size: "تعديل المقاسات",
        btn_logout: "تسجيل الخروج",
        cookie_msg: "نستخدم ملفات تعريف الارتباط لضمان حصولك على أفضل تجربة، وفقاً للأنظمة السعودية.",
        btn_accept: "قبول الكل",
        btn_preferences: "التفضيلات",
        fit_title: "مقاسك المثالي",
        fit_desc: "الدقة هي وعدنا. الرجاء إدخال قياساتك لبدء عملية التفصيل.",
        text_selected_fabric: "القماش المختار:",
        text_none_selected: "لا يوجد اختيار",
        label_fullname: "الاسم الكامل",
        label_shoulder: "عرض الكتف (سم)",
        btn_complete_order: "إكمال الطلب",
        brand_name: "رداء النساج",
        footer_brand_desc: "رداء النساج، بخبرته العريقة، صنع مكانة لا تضاهى في مجال الملابس الرجالية المحتشمة من خلال مجموعته العصرية التقليدية من الجبب والثياب.",
        footer_support: "الدعم",
        footer_about: "من نحن",
        footer_help: "المساعدة",
        footer_contact: "اتصل بنا",
        footer_chat: "تحدث معنا",
        footer_business: "استفسارات الأعمال",
        footer_links: "روابط سريعة",
        footer_track: "تتبع الطلب",
        footer_refund: "الإسترجاع والاستبدال",
        footer_stores: "فروعنا",
        footer_join: "انضم إلينا",
        footer_join_desc: "سجل للحصول على عروض حصرية وقصص أصلية وفعاليات والمزيد.",
        footer_subscribe: "اشترك",
        placeholder_email: "بريدك الإلكتروني",
        footer_copyright: "&copy; 2026 رداء النساج.",
        footer_terms: "الشروط والأحكام",
        footer_privacy: "سياسة الخصوصية",
        auth_signin: "تسجيل الدخول",
        auth_create_account: "إنشاء حساب",
        auth_welcome: "أهلاً بعودتك",
        auth_access: "ادخل إلى قياساتك وسجل طلباتك.",
        auth_google_signin: "الدخول عبر جوجل",
        auth_or: "أو",
        auth_email: "البريد الإلكتروني",
        auth_password: "كلمة المرور",
        auth_forgot: "نسيت كلمة المرور؟",
        auth_join: "انضم لرداء النساج",
        auth_save_fits: "احفظ مقاساتك للطلبات المستقبلية.",
        auth_google_signup: "التسجيل عبر جوجل",
        auth_fullname: "الاسم الكامل",
        auth_create_pass: "إنشاء كلمة مرور",
        currency: "ر.س",
        reviews_title: "آراء العملاء",
        reviews_subtitle: "موثوق من قبل النخبة في جميع أنحاء المملكة.",
        review1_text: '"الصوف الملكي الأسود مذهل حقاً. المقاس دقيق وتفاصيل التطريز لا يعلى عليها في مكة."',
        review1_name: "عمر الغامدي",
        review1_loc: "جدة، السعودية",
        review2_text: '"خدمة ممتازة. عملية التفصيل كانت سلسة، وجودة القماش لمجموعة الصيف مثالية."',
        review2_name: "فهد السعود",
        review2_loc: "الرياض، السعودية",
        review3_text: '"تجربة فاخرة حقاً. طلبت لزواجي وقماش المزيج الذهبي جعلني مميزاً. أنصح به بشدة."',
        review3_name: "محمد سالم",
        review3_loc: "مكة المكرمة، السعودية"
    },
    de: {
        nav_craft: "Das Handwerk",
        nav_fabrics: "Stoffe",
        nav_fitting: "Maße eingeben",
        btn_book: "Termin Buchen",
        hero_subtitle: "Aus der heiligen Stadt Makkah",
        hero_title: "Maßgeschneidert für <br><span>Perfektion</span>",
        hero_desc: "Erleben Sie den Luxus maßgeschneiderter Thobes, gefertigt mit Tradition und Eleganz.",
        hero_cta: "Kollektion ansehen",
        process_title: "Der Prozess",
        process_subtitle: "Drei einfache Schritte zur perfekten Passform.",
        step1_title: "Stoff Wählen",
        step1_desc: "Wählen Sie aus unserer Premium-Kollektion importierter Baumwolle und Wolle.",
        step2_title: "Maße angeben",
        step2_desc: "Geben Sie Ihre genauen Körpermaße ein, um eine perfekte Silhouette zu gewährleisten.",
        step3_title: "Experten-Schneiderei",
        step3_desc: "Von Meister-Schneidern in Makkah handgefertigt und an Ihre Tür geliefert.",
        collection_title: "Premium Stoffe",
        collection_subtitle: "Kuratiert für jede Jahreszeit.",
        cloth1_name: "Königliche Schwarze Wolle",
        cloth1_desc: "Winterkollektion - Schweres Gewicht",
        cloth2_name: "Signatur Weiß",
        cloth2_desc: "Sommerkollektion - Atmungsaktiv",
        cloth3_name: "Creme Gold Mischung",
        cloth3_desc: "Premium Anlasskleidung",
        btn_add_basket: "In den Warenkorb",
        measure_title: "Benutzerdefinierte Maße",
        measure_subtitle: "Für:",
        label_height: "Höhe (cm)",
        label_chest: "Brust (cm)",
        label_waist: "Taille (cm)",
        label_neck: "Hals (cm)",
        btn_cancel: "Abbrechen",
        btn_save_add: "Speichern & Hinzufügen",
        placeholder_search: "Suche nach Stoffen, Stilen...",
        cart_title: "Einkaufstasche",
        cart_empty: "Ihre Tasche ist derzeit leer.",
        cart_total: "Gesamt",
        btn_checkout: "Zur Kasse",
        dash_title: "Mein Konto",
        text_welcome: "Willkommen,",
        dash_shipments: "Sendungen",
        dash_no_shipments: "Keine aktiven Sendungen",
        dash_track: "Bestellung verfolgen",
        dash_orders: "Meine Bestellungen",
        dash_view_past: "Vergangene Bestellungen ansehen",
        dash_history: "Verlauf anzeigen",
        dash_measurements: "Maße",
        dash_saved_profile: "Gespeichert: 1 Profil",
        dash_edit_size: "Größen bearbeiten",
        btn_logout: "Abmelden",
        cookie_msg: "Wir verwenden Cookies für die beste Erfahrung gemäß den saudischen Datenvorschriften.",
        btn_accept: "Alle akzeptieren",
        btn_preferences: "Einstellungen",
        fit_title: "Ihre perfekte Passform",
        fit_desc: "Präzision ist unser Versprechen. Bitte geben Sie Ihre Maße ein.",
        text_selected_fabric: "Ausgewählter Stoff:",
        text_none_selected: "Keine ausgewählt",
        label_fullname: "Vollständiger Name",
        label_shoulder: "Schulterbreite (cm)",
        btn_complete_order: "Bestellung abschließen",
        brand_name: "Rida Al Nissaj",
        footer_brand_desc: "Rida Al Nissaj hat sich mit seiner Expertise einen unvergleichlichen Platz im Bereich der bescheidenen Herrenbekleidung durch sein traditionell modernes Sortiment an Jubbas und Thawps geschaffen.",
        footer_support: "Unterstützung",
        footer_about: "Über Uns",
        footer_help: "Hilfe",
        footer_contact: "Kontakt",
        footer_chat: "Chatten Sie mit uns",
        footer_business: "Geschäftsanfrage",
        footer_links: "Schnelllinks",
        footer_track: "Bestellung Verfolgen",
        footer_refund: "Rückgabe & Umtausch",
        footer_stores: "Unsere Filialen",
        footer_join: "Treten Sie bei",
        footer_join_desc: "Melden Sie sich für exklusive Angebote, originelle Geschichten und mehr an.",
        footer_subscribe: "Abonnieren",
        placeholder_email: "Ihre E-Mail",
        footer_copyright: "&copy; 2026 Rida Al Nissaj.",
        footer_terms: "AGB",
        footer_privacy: "Datenschutz",
        auth_signin: "Anmelden",
        auth_create_account: "Konto erstellen",
        auth_welcome: "Willkommen zurück",
        auth_access: "Greifen Sie auf Ihre Maße zu.",
        auth_google_signin: "Anmelden mit Google",
        auth_or: "ODER",
        auth_email: "E-Mail-Adresse",
        auth_password: "Passwort",
        auth_forgot: "Passwort vergessen?",
        auth_join: "Rida Al Nissaj beitreten",
        auth_save_fits: "Speichern Sie Ihre Maße.",
        auth_google_signup: "Registrieren mit Google",
        auth_fullname: "Vollständiger Name",
        auth_create_pass: "Passwort erstellen",
        currency: "SAR",
        reviews_title: "Kundenbewertungen",
        reviews_subtitle: "Vertraut von Herren im ganzen Königreich.",
        review1_text: '"Die königliche schwarze Wolle ist absolut atemberaubend. Die Passform ist präzise und die Stickereidetails sind in Makkah unübertroffen."',
        review1_name: "Omar Al-Ghamdi",
        review1_loc: "Dschidda, SA",
        review2_text: '"Exzellenter Service. Der maßgeschneiderte Prozess war nahtlos und die Stoffqualität für die Sommerkollektion ist perfekt."',
        review2_name: "Fahad Al-Saud",
        review2_loc: "Riad, SA",
        review3_text: '"Wahrlich ein Premium-Erlebnis. Ich habe für meine Hochzeit bestellt und der Goldmischungsstoff hat mich hervorstechen lassen. Sehr empfehlenswert."',
        review3_name: "Mohammed Salem",
        review3_loc: "Makkah, SA"
    }
};

window.changeLang = function (lang) {
    console.log("Changing language to:", lang);
    const html = document.documentElement;
    const currentLangSpan = document.getElementById('current-lang');

    if (document.getElementById('lang-menu')) {
        document.getElementById('lang-menu').classList.remove('active');
    }

    // Update Flag/Text
    if (lang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.lang = 'ar';
        if (currentLangSpan) currentLangSpan.textContent = 'AR';
    } else if (lang === 'de') {
        html.setAttribute('dir', 'ltr');
        html.lang = 'de';
        if (currentLangSpan) currentLangSpan.textContent = 'DE';
    } else {
        html.setAttribute('dir', 'ltr');
        html.lang = 'en';
        if (currentLangSpan) currentLangSpan.textContent = 'EN';
    }

    // Apply translations
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const rawKey = el.getAttribute('data-i18n');
        const key = rawKey ? rawKey.trim() : null;

        if (key && translations[lang] && translations[lang][key]) {
            // Check if it's an input or standard element
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }

            // Apply Font for Arabic
            if (lang === 'ar') {
                el.style.fontFamily = "'Amiri', serif";
            } else {
                el.style.fontFamily = "";
            }
        }
    });

    // Handle Placeholders (Generic)
    const inputElements = document.querySelectorAll('[data-i18n-placeholder]');
    inputElements.forEach(el => {
        const rawKey = el.getAttribute('data-i18n-placeholder');
        const key = rawKey ? rawKey.trim() : null;

        if (key && translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
            if (lang === 'ar') el.style.fontFamily = "'Amiri', serif";
            else el.style.fontFamily = "";
        }
    });

    // Update dynamically rendered content
    updateCartUI();

    // Update active state in menu
    const menuLinks = document.querySelectorAll('.lang-menu a');
    menuLinks.forEach(link => {
        if (link.getAttribute('onclick')?.includes(`'${lang}'`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// --- Header Smart Scroll Logic ---
const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (!header) return;

    if (currentScrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollY = currentScrollY;
});


// --- Cart & Products Logic ---
window.addToCart = function (key, price) {
    const item = { id: Date.now(), key, price };
    cart.push(item);
    updateCartUI();
    if (!document.getElementById('cart-sidebar').classList.contains('open')) {
        toggleCart();
    }
}

function updateCartUI() {
    if (!cartCountBadge || !cartItemsContainer || !cartTotalEl) return;
    const lang = document.documentElement.lang || 'en';
    const t = translations[lang] || translations['en'];

    if (cart.length > 0) {
        cartCountBadge.style.display = 'flex';
        cartCountBadge.textContent = cart.length;
    } else {
        cartCountBadge.style.display = 'none';
    }

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart-msg">${t.cart_empty || "Your bag is currently empty."}</p>`;
        cartTotalEl.textContent = '0.00 SAR';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.style.display = 'flex';
        itemEl.style.justifyContent = 'space-between';
        itemEl.style.marginBottom = '15px';
        itemEl.style.borderBottom = '1px solid #eee';
        itemEl.style.paddingBottom = '10px';

        const displayName = t[item.key] || item.key;

        itemEl.innerHTML = `
            <div ${lang === 'ar' ? 'style="text-align:right; font-family:\'Amiri\', serif;"' : ''}>
                <div style="font-weight:600; font-size:0.9rem;">${displayName}</div>
                <div style="color:#777; font-size:0.85rem;">${item.price} ${t.currency || 'SAR'}</div>
            </div>
            <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer; font-size:1.2rem;">&times;</button>
        `;
        cartItemsContainer.appendChild(itemEl);
    });
    cartTotalEl.textContent = total.toFixed(2) + ' ' + (t.currency || 'SAR');
}

window.removeFromCart = function (index) {
    cart.splice(index, 1);
    updateCartUI();
}

// --- Modals & Popups ---
window.toggleLangMenu = function () {
    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.toggle('active');
}

document.addEventListener('click', function (e) {
    const switcher = document.querySelector('.lang-switcher');
    const menu = document.getElementById('lang-menu');
    if (switcher && menu && !switcher.contains(e.target)) {
        menu.classList.remove('active');
    }
});

window.acceptCookies = function () {
    const popup = document.getElementById('cookie-popup');
    if (popup) popup.classList.remove('active');
    localStorage.setItem('cookieConsent', 'accepted');
}

window.closeCookiePopup = function () {
    const popup = document.getElementById('cookie-popup');
    if (popup) popup.classList.remove('active');
}

setTimeout(() => {
    if (!localStorage.getItem('cookieConsent')) {
        const popup = document.getElementById('cookie-popup');
        if (popup) popup.classList.add('active');
    }
}, 2000);

// Authentication
const authModal = document.getElementById('auth-modal');
window.openAuthModal = function () {
    if (authModal) authModal.classList.add('open');
}
window.closeAuthModal = function () {
    if (authModal) authModal.classList.remove('open');
}
window.switchAuthTab = function (tab) {
    const tabs = document.querySelectorAll('.tab-btn');
    const views = document.querySelectorAll('.auth-view');
    tabs.forEach(btn => btn.classList.remove('active'));
    views.forEach(view => view.classList.remove('active'));

    if (tab === 'login') {
        if (tabs[0]) tabs[0].classList.add('active');
        const view = document.getElementById('login-view');
        if (view) view.classList.add('active');
    } else {
        if (tabs[1]) tabs[1].classList.add('active');
        const view = document.getElementById('signup-view');
        if (view) view.classList.add('active');
    }
}

// Search
const searchOverlay = document.getElementById('search-overlay');
window.toggleSearch = function () {
    if (searchOverlay) {
        searchOverlay.classList.toggle('active');
        if (searchOverlay.classList.contains('active')) {
            const input = searchOverlay.querySelector('.search-input');
            if (input) input.focus();
        }
    }
}

// Cart Sidebar
window.toggleCart = function () {
    const sidebar = document.getElementById('cart-sidebar');
    const backdrop = document.querySelector('.cart-backdrop');
    if (sidebar) sidebar.classList.toggle('open');
    if (backdrop) backdrop.classList.toggle('open');
}

// User Profile
const dashboardModal = document.getElementById('dashboard-modal');
let isLoggedIn = false;

window.handleUserIconClick = function () {
    if (isLoggedIn) openDashboard();
    else openAuthModal();
}
window.openDashboard = function () {
    const lang = document.documentElement.lang || 'en';
    if (dashboardModal) {
        dashboardModal.classList.add('open');
        const display = document.getElementById('user-name-display');
        if (display) display.textContent = lang === 'ar' ? "أحمد" : "Ahmed";
        if (lang === 'ar') dashboardModal.style.fontFamily = "'Amiri', serif";
        else dashboardModal.style.fontFamily = "";
    }
}
window.closeDashboard = function () {
    if (dashboardModal) dashboardModal.classList.remove('open');
}
window.mockLogout = function () {
    isLoggedIn = false;
    closeDashboard();
}
window.mockLogin = function () {
    const btn = document.querySelector('.auth-view.active .submit-btn');
    if (!btn) return;
    const originalText = btn.textContent;
    btn.textContent = '...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        closeAuthModal();
        isLoggedIn = true;
        btn.textContent = originalText;
        btn.style.opacity = '1';
        setTimeout(() => openDashboard(), 500);
    }, 1000);
}
window.mockGoogleLogin = function () {
    const googleBtns = document.querySelectorAll('.google-btn');
    googleBtns.forEach(btn => btn.style.opacity = '0.7');

    setTimeout(() => {
        closeAuthModal();
        isLoggedIn = true;
        googleBtns.forEach(btn => btn.style.opacity = '1');
        setTimeout(() => openDashboard(), 500);
    }, 1000);
}

// Measurement Modal
window.openMeasurementModal = function (key, price) {
    const modal = document.getElementById('measurement-modal');
    const lang = document.documentElement.lang || 'en';
    const t = translations[lang] || translations['en'];

    if (modal) {
        modal.classList.add('open');
        if (lang === 'ar') modal.style.fontFamily = "'Amiri', serif";
        else modal.style.fontFamily = "";

        const title = document.getElementById('measure-product-name');
        if (title) title.textContent = t[key] || key;

        modal.dataset.tempKey = key;
        modal.dataset.tempPrice = price;
    }
}
window.closeMeasurementModal = function () {
    const modal = document.getElementById('measurement-modal');
    if (modal) modal.classList.remove('open');
}
window.saveMeasurementAndAddToCart = function () {
    const modal = document.getElementById('measurement-modal');
    if (!modal) return;
    const key = modal.dataset.tempKey;
    const price = parseFloat(modal.dataset.tempPrice);
    addToCart(key, price);
    closeMeasurementModal();
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const lang = document.documentElement.lang || 'en';
    changeLang(lang);

    // Close language menu on outside click
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('lang-menu');
        const btn = document.querySelector('.lang-btn');
        if (menu && menu.classList.contains('show') && !menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('show');
        }
    });

    // Close modals on Esc key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeAuthModal();
            closeMeasurementModal();
            closeDashboard();
            const searchOverlay = document.getElementById('search-overlay');
            if (searchOverlay && searchOverlay.classList.contains('active')) toggleSearch();
        }
    });
});
