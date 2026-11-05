/**
 * ქეთევან უტიაშვილის საადვოკატო ბიურო (თბილისი, ჭავჭავაძის გამზ. 26)
 * GALLANT & EDITORIAL INTERACTIVE CONTROLLER
 * Zero Emojis • Pure Hairline Contour SVGs • Symmetrical & Academic
 */

document.addEventListener('DOMContentLoaded', () => {
  initTranslations();
  initCalendar();
  initCaseWizard();
  initLegalAdvisor();
  initMobileNav();
  initContactForms();
  initSmoothScrollSpy();
  initThemisContourParallax();
  initScrollBurnCards();
  initExpertiseCircularCarousel();
});

/* ==========================================================================
   1. MULTI-LANGUAGE TRANSLATIONS (GE, EN, RU)
   ========================================================================== */
const i18nDictionary = {
  ka: {
    "topbar.location": "ქ. თბილისი, ილია ჭავჭავაძის გამზ. #26",
    "topbar.hours": "ორშ – პარ: 10:00 – 18:00",
    "topbar.bar_status": "GBA აღმასრულებელი საბჭოს წევრი",
    "nav.home": "მთავარი",
    "nav.values": "ღირებულებები",
    "nav.practice": "ექსპერტიზა",
    "nav.about": "ადვოკატი",
    "nav.case_check": "შეფასება",
    "nav.calendar": "კალენდარი",
    "nav.book_cta": "ვიზიტის დაჯავშნა",
    "hero.badge": "20+ წლიანი უწყვეტი საადვოკატო პრაქტიკა • მთელი საქართველო",
    "hero.title": "აკადემიური სიზუსტე, სტრატეგიული დაცვა და უმაღლესი საადვოკატო ეთიკა",
    "hero.desc": "საქართველოს ადვოკატთა ასოციაციის (GBA) აღმასრულებელი საბჭოს მოქმედი წევრი, ყოფილი სამოქალაქო კომიტეტის თავმჯდომარე და აკრედიტებული მედიატორი — ქეთევან უტიაშვილი ახორციელებს საადვოკატო საქმიანობას და სასამართლო წარმომადგენლობას მთელი საქართველოს მასშტაბით (ცენტრალური ოფისი: ქ. თბილისი).",
    "hero.cta_evaluate": "საქმის პირველადი შეფასება",
    "hero.cta_book": "კონსულტაციის დაჯავშნა",
    "hero.metric1": "უწყვეტი ბიურო",
    "hero.metric2": "აღმასრულებელი საბჭო",
    "hero.metric3": "მოგებული & მორიგებული",
    "hero.metric4": "კონფიდენციალურობა",
    "hero.card_name": "ქეთევან უტიაშვილი",
    "hero.card_role": "ადვოკატი • GBA აღმასრულებელი საბჭო",
    "vision.eyebrow": "FOUNDATIONAL ETHOS",
    "vision.title": "ხედვა, მისია და ძირითადი ღირებულებები",
    "vision.subtitle": "აკადემიური სტანდარტები, რომლებიც განსაზღვრავს ჩვენი ბიუროს რეპუტაციასა და წარმატებას 2003 წლიდან.",
    "vision.card1_cat": "OUR VISION",
    "vision.card1_title": "ჩვენი ხედვა",
    "vision.card1_body": "ვიყოთ უმაღლესი აკადემიური სანდოობისა და საერთაშორისო სტანდარტების მატარებელი საადვოკატო ბიურო საქართველოში, რომელიც ქმნის პრეცედენტულ, ინოვაციურ და დაცულ სამართლებრივ გარემოს თითოეული კლიენტისთვის.",
    "vision.card1_badge": "გლობალური & ევროპული სტანდარტი",
    "vision.card2_cat": "OUR MISSION",
    "vision.card2_title": "ჩვენი მისია",
    "vision.card2_body": "კლიენტის კანონიერი უფლებებისა და აქტივების შეუპოვარი, სტრატეგიული და პასუხისმგებლიანი დაცვა ყველა ინსტანციის სასამართლოში, სახელმწიფო უწყებებთან ურთიერთობასა და სამედიაციო მოლაპარაკებებში.",
    "vision.card2_badge": "კომპლექსური & სტრატეგიული დაცვა",
    "vision.card3_cat": "CORE VALUES",
    "vision.card3_title": "ფუნდამენტური ღირებულებები",
    "vision.v1_t": "კეთილსინდისიერება",
    "vision.v1_d": "პროფესიული ეთიკის უმკაცრესი დაცვა.",
    "vision.v2_t": "აკადემიური სიზუსტე",
    "vision.v2_d": "ყოველი საქმის საფუძვლიანი სამართლებრივი ანალიზი.",
    "vision.v3_t": "კლიენტზე ფოკუსი",
    "vision.v3_d": "ინდივიდუალური, პერსონალიზებული საპროცესო სტრატეგია.",
    "vision.v4_t": "კონფიდენციალურობა",
    "vision.v4_d": "საადვოკატო საიდუმლოების 100%-იანი გარანტია.",
    "exp.eyebrow": "PRACTICE DOMAINS",
    "exp.title": "სამართლებრივი ექსპერტიზა",
    "exp.subtitle": "დახვეწილი და შედეგზე ორიენტირებული საადვოკატო წარმომადგენლობა კერძო და ბიზნეს სექტორში.",
    "exp.d1_title": "უძრავი ქონება & მშენებლობა",
    "exp.d1_desc": "დეველოპერი, ნასყიდობა, საჯარო რეესტრი, საკუთრება",
    "exp.d1_link": "სრული სამართლებრივი თანხლება →",
    "exp.d2_title": "სამოქალაქო & სახელშეკრულებო დავა",
    "exp.d2_desc": "ვალის ამოღება, ზიანი, ვალდებულებების შეუსრულებლობა",
    "exp.d2_link": "სასამართლო დაცვა →",
    "exp.d3_title": "ბიზნესი & კორპორაციული სამართალი",
    "exp.d3_desc": "პარტნიორთა დავები, წესდება, ინვესტიციების დაცვა",
    "exp.d3_link": "კორპორაციული მართვა →",
    "exp.d4_title": "მედიაცია & ალტერნატიული მორიგება",
    "exp.d4_desc": "დავის მოგვარება სასამართლოს გარეშე, კონფიდენციალურად",
    "exp.d4_link": "ალტერნატიული მორიგება →",
    "exp.d5_title": "ადმინისტრაციული & საგადასახადო",
    "exp.d5_desc": "თბილისის მერია, ზედამხედველობა, საჯარო რეესტრი",
    "exp.d5_link": "ადმინისტრაციული დაცვა →",
    "exp.d6_title": "საოჯახო & მემკვიდრეობითი",
    "exp.d6_desc": "თანასაკუთრების გაყოფა, მემკვიდრეობის მიღება",
    "exp.d6_link": "საოჯახო კონსულტაცია →",
    "exp.more_btn": "ყველა მიმართულების ნახვა (6)",
    "exp.view_carousel": "3D წრიული კარუსელი",
    "exp.view_grid": "სრული ბადე",
    "exp.counter_total": "06-დან",
    "exp.swipe_hint": "გადასაფურცლად გამოიყენეთ ისრები ან გადაფურცვლა",
    "exp.tag_realestate": "უძრავი ქონება",
    "exp.tag_corporate": "კორპორაციული",
    "exp.tag_civil": "სამოქალაქო დავა",
    "exp.tag_mediation": "მედიაცია",
    "exp.tag_admin": "ადმინისტრაციული",
    "exp.tag_family": "საოჯახო",
    "about.badge_gba": "საქართველოს ადვოკატთა ასოციაცია (GBA) • 20+ წელი",
    "about.tag_court": "საადვოკატო პრაქტიკა",
    "about.tag_med": "კონსულტაცია & მედიაცია",
    "about.tag_portrait": "აკადემიური პორტრეტი",
    "about.eyebrow": "PRINCIPAL ATTORNEY",
    "about.name": "ქეთევან უტიაშვილი",
    "about.titles": "საადვოკატო ბიუროს დამფუძნებელი • GBA აღმასრულებელი საბჭოს წევრი • აკრედიტებული მედიატორი",
    "about.lead": "20 წელზე მეტია წარმატებით ახორციელებს საადვოკატო საქმიანობას მთელი საქართველოს მასშტაბით. ბიურო დაფუძნდა 2003 წლის 18 ივლისს; ცენტრალური ოფისი და საცხოვრებელი ადგილი მდებარეობს თბილისში (ილია ჭავჭავაძის გამზ. #26), ხოლო საადვოკატო დაცვა და სასამართლო წარმომადგენლობა მოიცავს როგორც დედაქალაქს, ისე საქართველოს ყველა რეგიონს.",
    "about.rec1_years": "2025 – დღემდე",
    "about.rec1_title": "აღმასრულებელი საბჭოს წევრი",
    "about.rec1_sub": "საქართველოს ადვოკატთა ასოციაცია (GBA)",
    "about.rec2_years": "2022 – 2025",
    "about.rec2_title": "სამოქალაქო კომიტეტის თავმჯდომარე",
    "about.rec2_sub": "საქართველოს ადვოკატთა ასოციაცია (სამოქალაქო სამართლის პრაქტიკის ხელმძღვანელობა)",
    "about.rec3_years": "2015 – 2021",
    "about.rec3_title": "ეთიკის კომისიის წევრი ადვოკატი",
    "about.rec3_sub": "საქართველოს ადვოკატთა ასოციაცია (პროფესიული ეთიკის სტანდარტების დაცვა)",
    "about.rec4_years": "2022 – დღემდე",
    "about.rec4_title": "აკრედიტებული მედიატორი",
    "about.rec4_sub": "საქართველოს მედიატორთა ასოციაცია (Mediators Association of Georgia)",
    "about.rec5_years": "2003 – დღემდე",
    "about.rec5_title": "დამფუძნებელი & მმართველი ადვოკატი",
    "about.rec5_sub": "Ketevan Utiashvili Law Office / ქეთევან უტიაშვილის საადვოკატო ბიურო",
    "about.rec6_years": "2021 – დღემდე",
    "about.rec6_title": "დირექტორი",
    "about.rec6_sub": "ბავშვთა უფლებათა დაცვის ცენტრი",
    "about.quote": "„ჩემი მიზანია არა მხოლოდ სამართლებრივი გამარჯვება სასამართლო დარბაზში, არამედ კლიენტის ინტერესების უმაღლესი აკადემიური სიზუსტით, უმკაცრესი ეთიკითა და სტრატეგიული შორსმჭვრეტელობით დაცვა.“",
    "about.cite": "— ქეთევან უტიაშვილი",
    "case.step1": "დავის კატეგორია",
    "case.step2": "საქმის სტადია",
    "case.step3": "ვადები & საბუთები",
    "case.step4": "საქმის ბარათი",
    "case.q1": "რა ტიპის სამართლებრივი საკითხი გაქვთ თბილისში ან საქართველოში?",
    "case.q1_hint": "შეარჩიეთ ძირითადი მიმართულება:",
    "case.cat_re": "უძრავი ქონება & მშენებლობა",
    "case.cat_re_sub": "დეველოპერი, ნასყიდობა, საჯარო რეესტრი, საკუთრება",
    "case.cat_civil": "სამოქალაქო & სახელშეკრულებო დავა",
    "case.cat_civil_sub": "ვალის ამოღება, ზიანი, ვალდებულებების შეუსრულებლობა",
    "case.cat_corp": "ბიზნესი & კორპორაციული სამართალი",
    "case.cat_corp_sub": "პარტნიორთა დავები, წესდება, ინვესტიციების დაცვა",
    "case.cat_med": "მედიაცია & ალტერნატიული მორიგება",
    "case.cat_med_sub": "დავის მოგვარება სასამართლოს გარეშე, კონფიდენციალურად",
    "case.cat_adm": "ადმინისტრაციული & საგადასახადო",
    "case.cat_adm_sub": "თბილისის მერია, ზედამხედველობა, საჯარო რეესტრი",
    "case.cat_fam": "საოჯახო & მემკვიდრეობითი",
    "case.cat_fam_sub": "თანასაკუთრების გაყოფა, მემკვიდრეობის მიღება",
    "case.btn_next": "შემდეგი ეტაპი: საქმის სტადია",
    "case.q2": "რა ეტაპზეა თქვენი დავა ამჟამად?",
    "case.q2_hint": "საპროცესო ტაქტიკა დამოკიდებულია საქმის მიმდინარე სტადიაზე:",
    "case.st1_title": "საწყისი ეტაპი (სასამართლოში ჯერ არ შესულა)",
    "case.st1_sub": "გვსურს პრევენციული იურიდიული აუდიტი, მოლაპარაკება ან ოფიციალური პრეტენზია.",
    "case.st2_title": "თბილისის საქალაქო სასამართლო (პირველი ინსტანცია)",
    "case.st2_sub": "სარჩელი შეტანილია, მიღებულია უწყება ან მზადდება საპასუხო შესაგებელი.",
    "case.st3_title": "სააპელაციო ან უზენაესი სასამართლო",
    "case.st3_sub": "გასაჩივრების სტადიაზე ვართ და გვჭირდება უმაღლესი აკადემიური კვალიფიკაციის წარმომადგენელი.",
    "case.st4_title": "ადმინისტრაციული ორგანო (რეესტრი / მერია / შემოსავლები)",
    "case.st4_sub": "გამოცემულია აქტი ან უარი რეგისტრაციაზე, რაც მოითხოვს ადმინისტრაციულ საჩივარს.",
    "case.btn_prev": "უკან",
    "case.btn_next2": "შემდეგი: ვადები & დოკუმენტები",
    "case.q3": "ვადები და ხელთ არსებული დოკუმენტები",
    "case.q3_hint": "იურიდიულ პროცესში საპროცესო ვადის დაცვა გადამწყვეტია:",
    "case.field_date": "როდის წარმოიშვა დავა ან როდის მიიღეთ შეტყობინება?",
    "case.field_docs": "რა დოკუმენტაცია გაქვთ ხელთ?",
    "case.field_brief": "მოკლე კომენტარი ან მთავარი მოთხოვნა (სურვილისამებრ):",
    "case.btn_generate": "საქმის ბარათის გენერირება",
    "case.sheet_status": "საქმის პირველადი შეფასების ბარათი",
    "case.lbl_stage": "საქმის ეტაპი:",
    "case.lbl_evidence": "მტკიცებულებათა ბაზა:",
    "case.lbl_priority": "პრიორიტეტულობა:",
    "case.lbl_urgent": "მაღალი (საპროცესო ვადები გასათვალისწინებელია)",
    "case.lbl_counsel": "წამყვანი ადვოკატი:",
    "case.advice_title": "ადვოკატის წინასწარი რეკომენდაცია:",
    "case.advice_body": "საქმის გარემოებები მიუთითებს, რომ პირველ ეტაპზე აუცილებელია ხელშეკრულების პირობების იურიდიული აუდიტი და ოფიციალური საადვოკატო გაფრთხილების მომზადება. გირჩევთ თბილისის ცენტრალურ ოფისში (ჭავჭავაძის გამზ. 26) პირისპირ ვიზიტს ან ონლაინ კონსულტაციას საპროცესო ვადის გასვლამდე.",
    "case.btn_edit": "მონაცემების ჩასწორება",
    "cal.eyebrow": "APPOINTMENT & LAW OFFICE CONTACT",
    "cal.title": "კონსულტაციის დაჯავშნა & ცენტრალური ოფისი",
    "cal.subtitle": "შეარჩიეთ თქვენთვის მოსახერხებელი დღე და საათი თბილისის ოფისში (ჭავჭავაძის გამზ. 26) პირისპირ ვიზიტისთვის ან ონლაინ ვიდეოკონსულტაციისთვის.",
    "cal.select_time": "ხელმისაწვდომი საათები:",
    "cal.sum_lawyer": "ადვოკატი:",
    "cal.sum_slot": "არჩეული დრო:",
    "cal.format_office": "ვიზიტი ოფისში",
    "cal.format_online": "ონლაინ კონსულტაცია",
    "cal.field_name": "სახელი და გვარი *",
    "cal.field_phone": "ტელეფონის ნომერი *",
    "cal.field_email": "ელექტრონული ფოსტა",
    "cal.service_lbl": "სამართლებრივი მიმართულება",
    "cal.field_topic": "დავის მოკლე აღწერა / შეკითხვა",
    "cal.bot_remind_title": "AI ასისტენტით შეხსენება & რეგისტრაცია",
    "cal.bot_remind_sub": "თუ გსურთ, ბოტი დაარეგისტრირებს ვიზიტს და გამოგიგზავნით შეხსენებას",
    "cal.btn_confirm": "ვიზიტის დადასტურება",
    "cal.succ_title": "ვიზიტი წარმატებით დაიჯავშნა!",
    "cal.succ_desc": "თქვენი კონსულტაცია შეტანილია ადვოკატის ოფიციალურ განრიგში.",
    "cal.bot_action_title": "AI ასისტენტის მხარდაჭერა & შეხსენება",
    "cal.bot_action_desc": "ვიზიტი მიღებულია. შეგიძლიათ გაესაუბროთ ბოტს საქმის მოსამზადებლად ან მიიღოთ შეხსენება.",
    "cal.bot_btn_chat": "ბოტთან დაკავშირება & საქმის განხილვა",
    "cal.bot_btn_tg": "Telegram შეხსენება (@saadvokatobot)",
    "cal.btn_new": "ახალი ჯავშნის გაკეთება",
    "cal.w1": "ორშ",
    "cal.w2": "სამ",
    "cal.w3": "ოთხ",
    "cal.w4": "ხუთ",
    "cal.w5": "პარ",
    "cal.w6": "შაბ",
    "cal.w7": "კვი",
    "cont.c1_cap": "ცენტრალური ოფისი",
    "cont.c1_val": "ქ. თბილისი, ილია ჭავჭავაძის გამზირი #26",
    "cont.c1_sub": "ვაკე, თბილისი • სამუშაო საათები: 10:00 – 18:00",
    "cont.c2_cap": "პირდაპირი ხაზი & სოც. ქსელები",
    "cont.c2_sub": "სატელეფონო და ონლაინ მიღება (ორშაბათი – პარასკევი)",
    "cont.c3_cap": "ოფიციალური ელ-ფოსტა",
    "map.title": "თბილისის ცენტრალური ოფისის ლოკაცია",
    "map.addr": "ილია ჭავჭავაძის გამზ. #26, თბილისი",
    "map.back_btn": "↑ კალენდარში დაბრუნება",
    "map.open_gmaps": "Google Maps-ში გახსნა ↗",
    "footer.brand_sub": "— საადვოკატო ბიურო • საქართველო —",
    "footer.desc": "საქართველოს ადვოკატთა ასოციაციის (GBA) აღმასრულებელი საბჭოს წევრი. საადვოკატო წარმომადგენლობა მთელი საქართველოს მასშტაბით (ცენტრალური ოფისი: თბილისი).",
    "footer.nav_title": "ნავიგაცია",
    "footer.serv_title": "სერვისები",
    "footer.accred_title": "აკრედიტაცია & ეთიკა",
    "footer.b1": "საქართველოს ადვოკატთა ასოციაცია (GBA)",
    "footer.b2": "საქართველოს მედიატორთა ასოციაცია (MAG)",
    "footer.b3": "ბავშვთა უფლებათა დაცვის ცენტრი",
    "footer.b4": "კონფიდენციალურობის გარანტია",
    "footer.copy": "© 2003 – 2026 ქეთევან უტიაშვილის საადვოკატო ბიურო. საადვოკატო წარმომადგენლობა მთელი საქართველოს მასშტაბით.",
    "footer.office_line": "ცენტრალური ოფისი: ქ. თბილისი, ჭავჭავაძის გამზ. #26",
    "mobnav.home": "მთავარი",
    "mobnav.practice": "ექსპერტიზა",
    "mobnav.chat": "ჩატი",
    "mobnav.booking": "ჯავშანი",
    "mobnav.call": "დარეკვა",
    "adv.btn_txt": "იურიდიული მრჩეველი",
    "adv.btn_sub": "ონლაინ ასისტენტი",
    "adv.modal_title": "იურიდიული მრჩეველი",
    "adv.online_tag": "ქეთევან უტიაშვილის AI ბიურო",
    "adv.clear_btn": "გასუფთავება",
    "adv.welcome_msg": "მოგესალმებით. მე ვარ ქეთევან უტიაშვილის საადვოკატო ბიუროს ვირტუალური ასისტენტი. ცენტრალური ოფისი მდებარეობს თბილისში, ილია ჭავჭავაძის გამზ. #26-ში. რით შემიძლია დაგეხმაროთ დღეს?",
    "adv.input_ph": "დასვით თქვენი იურიდიული შეკითხვა..."
},
  en: {
    "topbar.location": "26 Ilia Chavchavadze Ave., Tbilisi",
    "topbar.hours": "Mon – Fri: 10:00 – 18:00",
    "topbar.bar_status": "GBA Executive Board Member",
    "nav.home": "Home",
    "nav.values": "Values",
    "nav.practice": "Practice",
    "nav.about": "Attorney",
    "nav.case_check": "Assessment",
    "nav.calendar": "Calendar",
    "nav.book_cta": "Book Consultation",
    "hero.badge": "20+ Years Continuous Practice • Nationwide in Georgia",
    "hero.title": "Academic Precision, Strategic Defense & Highest Legal Ethics",
    "hero.desc": "Executive Board Member of the Georgian Bar Association (GBA), former Chair of the Civil Law Committee, and Accredited Mediator — Ketevan Utiashvili provides strategic legal defense and trial representation across all Georgia (Central Office: Tbilisi).",
    "hero.cta_evaluate": "Initial Case Assessment",
    "hero.cta_book": "Book Consultation",
    "hero.metric1": "Established Bureau",
    "hero.metric2": "GBA Executive Board",
    "hero.metric3": "Settled & Won",
    "hero.metric4": "Confidentiality",
    "hero.card_name": "Ketevan Utiashvili",
    "hero.card_role": "Attorney • GBA Executive Board",
    "vision.eyebrow": "FOUNDATIONAL ETHOS",
    "vision.title": "Vision, Mission & Core Values",
    "vision.subtitle": "Academic standards defining the reputation and success of our law office since 2003.",
    "vision.card1_cat": "OUR VISION",
    "vision.card1_title": "Our Vision",
    "vision.card1_body": "To be a law office of supreme academic credibility and international standards in Georgia, creating precedential, innovative, and secure legal solutions for every client.",
    "vision.card1_badge": "Global & European Standards",
    "vision.card2_cat": "OUR MISSION",
    "vision.card2_title": "Our Mission",
    "vision.card2_body": "Relentless, strategic, and responsible protection of client rights and assets in all court instances, state agencies, and mediation proceedings.",
    "vision.card2_badge": "Comprehensive & Strategic Defense",
    "vision.card3_cat": "CORE VALUES",
    "vision.card3_title": "Core Values",
    "vision.v1_t": "Integrity",
    "vision.v1_d": "Strict adherence to professional legal ethics.",
    "vision.v2_t": "Academic Precision",
    "vision.v2_d": "In-depth legal analysis of every individual case.",
    "vision.v3_t": "Client-Centricity",
    "vision.v3_d": "Tailored, personalized procedural strategy.",
    "vision.v4_t": "Confidentiality",
    "vision.v4_d": "100% guarantee of attorney-client privilege.",
    "exp.eyebrow": "PRACTICE DOMAINS",
    "exp.title": "Legal Practice & Expertise",
    "exp.subtitle": "Refined and results-driven legal representation across private and corporate sectors.",
    "exp.d1_title": "Real Estate & Construction",
    "exp.d1_desc": "Developers, property purchase, public registry, title rights",
    "exp.d1_link": "Full Legal Counsel →",
    "exp.d2_title": "Civil & Contractual Disputes",
    "exp.d2_desc": "Debt recovery, damages compensation, breach of contract",
    "exp.d2_link": "Courtroom Defense →",
    "exp.d3_title": "Business & Corporate Law",
    "exp.d3_desc": "Shareholder disputes, corporate charter, investment security",
    "exp.d3_link": "Corporate Governance →",
    "exp.d4_title": "Mediation & Alternative Settlement",
    "exp.d4_desc": "Out-of-court dispute resolution, strictly confidential",
    "exp.d4_link": "Alternative Settlement →",
    "exp.d5_title": "Administrative & Tax Law",
    "exp.d5_desc": "Tbilisi City Hall, municipal supervision, public registry",
    "exp.d5_link": "Administrative Defense →",
    "exp.d6_title": "Family & Inheritance Law",
    "exp.d6_desc": "Division of co-ownership, estate & inheritance probate",
    "exp.d6_link": "Family Consultation →",
    "exp.more_btn": "View All Practice Areas (6)",
    "exp.view_carousel": "3D Circular Orbit",
    "exp.view_grid": "Symmetrical Grid",
    "exp.counter_total": "OF 06",
    "exp.swipe_hint": "Use arrows, keyboard, or swipe to browse",
    "exp.tag_realestate": "Real Estate",
    "exp.tag_corporate": "Corporate",
    "exp.tag_civil": "Civil Law",
    "exp.tag_mediation": "Mediation",
    "exp.tag_admin": "Administrative",
    "exp.tag_family": "Family Law",
    "about.badge_gba": "Georgian Bar Association (GBA) • 20+ Years",
    "about.tag_court": "Trial Practice",
    "about.tag_med": "Consultation & Mediation",
    "about.tag_portrait": "Academic Portrait",
    "about.eyebrow": "PRINCIPAL ATTORNEY",
    "about.name": "Ketevan Utiashvili",
    "about.titles": "Law Office Founder • GBA Executive Board Member • Accredited Mediator",
    "about.lead": "Practicing law with excellence across Georgia for over 20 years. Bureau founded on July 18, 2003; central office and residence located in Tbilisi (26 Ilia Chavchavadze Ave.), with litigation representation spanning the capital and all regions of Georgia.",
    "about.rec1_years": "2025 – Present",
    "about.rec1_title": "Executive Board Member",
    "about.rec1_sub": "Georgian Bar Association (GBA)",
    "about.rec2_years": "2022 – 2025",
    "about.rec2_title": "Civil Law Committee Chair",
    "about.rec2_sub": "Georgian Bar Association (Supervising civil litigation practice)",
    "about.rec3_years": "2015 – 2021",
    "about.rec3_title": "Ethics Commission Member Attorney",
    "about.rec3_sub": "Georgian Bar Association (Enforcing highest ethical standards)",
    "about.rec4_years": "2022 – Present",
    "about.rec4_title": "Accredited Mediator",
    "about.rec4_sub": "Mediators Association of Georgia",
    "about.rec5_years": "2003 – Present",
    "about.rec5_title": "Founder & Managing Attorney",
    "about.rec5_sub": "Ketevan Utiashvili Law Office",
    "about.rec6_years": "2021 – Present",
    "about.rec6_title": "Director",
    "about.rec6_sub": "Child Rights Protection Center",
    "about.quote": "“My goal is not only legal victory in courtroom proceedings, but defending client interests with supreme academic precision, uncompromising ethics, and strategic foresight.”",
    "about.cite": "— Ketevan Utiashvili",
    "case.step1": "Case Category",
    "case.step2": "Case Stage",
    "case.step3": "Deadlines & Docs",
    "case.step4": "Case Summary Sheet",
    "case.q1": "What type of legal matter are you facing in Tbilisi or Georgia?",
    "case.q1_hint": "Select the primary legal area:",
    "case.cat_re": "Real Estate & Construction",
    "case.cat_re_sub": "Developer contracts, sales, public registry, title disputes",
    "case.cat_civil": "Civil & Contractual Disputes",
    "case.cat_civil_sub": "Debt collection, damages, breach of contract obligations",
    "case.cat_corp": "Business & Corporate Law",
    "case.cat_corp_sub": "Shareholder disputes, corporate charters, investment safety",
    "case.cat_med": "Mediation & Settlement",
    "case.cat_med_sub": "Out-of-court dispute resolution with enforceable court status",
    "case.cat_adm": "Administrative & Tax",
    "case.cat_adm_sub": "Tbilisi City Hall, municipal supervision, public registry",
    "case.cat_fam": "Family & Inheritance",
    "case.cat_fam_sub": "Asset division, inheritance acquisition, probate disputes",
    "case.btn_next": "Next Step: Case Stage",
    "case.q2": "What stage is your dispute currently at?",
    "case.q2_hint": "Legal strategy depends heavily on the current procedural stage:",
    "case.st1_title": "Early Stage (Not yet submitted to court)",
    "case.st1_sub": "Looking for preventive audit, negotiation, or formal attorney notice.",
    "case.st2_title": "Tbilisi City Court (First Instance)",
    "case.st2_sub": "Claim filed, summons received, or defense brief being prepared.",
    "case.st3_title": "Appellate or Supreme Court",
    "case.st3_sub": "Appeal stage requiring senior academic trial counsel.",
    "case.st4_title": "Administrative Authority (Registry / City Hall / Revenue)",
    "case.st4_sub": "Administrative act or refusal issued requiring an administrative complaint.",
    "case.btn_prev": "Back",
    "case.btn_next2": "Next: Deadlines & Documents",
    "case.q3": "Deadlines & Available Documentation",
    "case.q3_hint": "Strict procedural adherence is vital in Georgian civil procedure:",
    "case.field_date": "When did the dispute arise or notice get served?",
    "case.field_docs": "What documents do you currently have?",
    "case.field_brief": "Brief summary or main claim (optional):",
    "case.btn_generate": "Generate Case Summary Sheet",
    "case.sheet_status": "Preliminary Case Evaluation Sheet",
    "case.lbl_stage": "Case Stage:",
    "case.lbl_evidence": "Evidence Dossier:",
    "case.lbl_priority": "Priority Level:",
    "case.lbl_urgent": "High (Statutory limitation periods apply)",
    "case.lbl_counsel": "Lead Attorney:",
    "case.advice_title": "Attorney's Preliminary Strategy:",
    "case.advice_body": "Given the facts, an immediate contract audit and formal attorney warning letter are required before litigation. We advise an in-person meeting at our central Tbilisi office (26 Chavchavadze Ave.) or video consultation.",
    "case.btn_edit": "Edit Details",
    "cal.eyebrow": "APPOINTMENT & LAW OFFICE CONTACT",
    "cal.title": "Book Consultation & Central Office",
    "cal.subtitle": "Select your preferred date and time for an in-person meeting at our Tbilisi office (26 Chavchavadze Ave.) or online video consultation.",
    "cal.select_time": "Available Time Slots:",
    "cal.sum_lawyer": "Attorney:",
    "cal.sum_slot": "Selected Slot:",
    "cal.format_office": "Office Visit",
    "cal.format_online": "Online Consultation",
    "cal.field_name": "Full Name *",
    "cal.field_phone": "Phone Number *",
    "cal.field_email": "Email Address",
    "cal.service_lbl": "Practice Area",
    "cal.field_topic": "Brief topic of discussion",
    "cal.bot_remind_title": "AI Assistant Reminder & Registration",
    "cal.bot_remind_sub": "Bot will register your appointment and send timely reminders",
    "cal.btn_confirm": "Confirm Appointment",
    "cal.succ_title": "Appointment Successfully Confirmed!",
    "cal.succ_desc": "Your consultation has been booked on the attorney's official calendar.",
    "cal.bot_action_title": "AI Assistant Support & Reminders",
    "cal.bot_action_desc": "Booking received. Connect with the bot to prepare documents or receive reminders.",
    "cal.bot_btn_chat": "Connect with Bot & Discuss Case",
    "cal.bot_btn_tg": "Telegram Reminder (@saadvokatobot)",
    "cal.btn_new": "Book Another Slot",
    "cal.w1": "Mon",
    "cal.w2": "Tue",
    "cal.w3": "Wed",
    "cal.w4": "Thu",
    "cal.w5": "Fri",
    "cal.w6": "Sat",
    "cal.w7": "Sun",
    "cont.c1_cap": "Central Law Office",
    "cont.c1_val": "26 Ilia Chavchavadze Ave., Tbilisi",
    "cont.c1_sub": "Vake, Tbilisi • Business Hours: 10:00 – 18:00",
    "cont.c2_cap": "Direct Line & Socials",
    "cont.c2_sub": "Phone & online reception (Monday – Friday)",
    "cont.c3_cap": "Official Email",
    "map.title": "Central Tbilisi Office Location",
    "map.addr": "26 Ilia Chavchavadze Ave., Tbilisi",
    "map.back_btn": "↑ Back to Calendar",
    "map.open_gmaps": "Open in Google Maps ↗",
    "footer.brand_sub": "— Law Office • Georgia —",
    "footer.desc": "Executive Board Member of the Georgian Bar Association (GBA), former Civil Law Committee Chair, and Accredited Mediator. Legal practice since 2003 nationwide (Central Office: Tbilisi).",
    "footer.nav_title": "Navigation",
    "footer.serv_title": "Services",
    "footer.accred_title": "Accreditation & Ethics",
    "footer.b1": "Georgian Bar Association (GBA)",
    "footer.b2": "Mediators Association of Georgia (MAG)",
    "footer.b3": "Child Rights Protection Center",
    "footer.b4": "Strict Confidentiality Guaranteed",
    "footer.copy": "© 2003 – 2026 Ketevan Utiashvili Law Office. Litigation representation across all Georgia.",
    "footer.office_line": "Central Office: 26 Chavchavadze Ave., Tbilisi",
    "mobnav.home": "Home",
    "mobnav.practice": "Practice",
    "mobnav.chat": "Chat",
    "mobnav.booking": "Booking",
    "mobnav.call": "Call",
    "adv.btn_txt": "Legal Advisor",
    "adv.btn_sub": "Online Assistant",
    "adv.modal_title": "Legal Advisor",
    "adv.online_tag": "Ketevan Utiashvili AI Bureau",
    "adv.clear_btn": "Clear",
    "adv.welcome_msg": "Welcome. I am the virtual assistant of Ketevan Utiashvili Law Office. Our central office is located at 26 Ilia Chavchavadze Ave, Tbilisi. How may I assist you today?",
    "adv.input_ph": "Ask your legal question..."
},
  ru: {
    "topbar.location": "г. Тбилиси, просп. Ильи Чавчавадзе 26",
    "topbar.hours": "Пн – Пт: 10:00 – 18:00",
    "topbar.bar_status": "Член Исполнительного совета GBA",
    "nav.home": "Главная",
    "nav.values": "Ценности",
    "nav.practice": "Экспертиза",
    "nav.about": "Адвокат",
    "nav.case_check": "Оценка",
    "nav.calendar": "Календарь",
    "nav.book_cta": "Запись на прием",
    "hero.badge": "20+ лет непрерывной практики • По всей Грузии",
    "hero.title": "Академическая точность, стратегическая защита и высшая этика",
    "hero.desc": "Действующий член Исполнительного совета Ассоциации адвокатов Грузии (GBA), бывший председатель Гражданского комитета и аккредитованный медиатор — Кетеван Утиашвили ведет адвокатскую деятельность и судебное представительство по всей Грузии (Центральный офис: Тбилиси).",
    "hero.cta_evaluate": "Оценка дела",
    "hero.cta_book": "Забронировать визит",
    "hero.metric1": "Опыт с 2003 г.",
    "hero.metric2": "Совет GBA",
    "hero.metric3": "Успешных дел",
    "hero.metric4": "Конфиденциальность",
    "hero.card_name": "Кетеван Утиашвили",
    "hero.card_role": "Адвокат • Совет GBA",
    "vision.eyebrow": "ОСНОВОПОЛАГАЮЩИЕ ПРИНЦИПЫ",
    "vision.title": "Видение, миссия и основные ценности",
    "vision.subtitle": "Академические стандарты, определяющие репутацию и успех нашего бюро с 2003 года.",
    "vision.card1_cat": "НАШЕ ВИДЕНИЕ",
    "vision.card1_title": "Наше видение",
    "vision.card1_body": "Быть адвокатским бюро высшего академического авторитета и международных стандартов в Грузии, создавая прецедентную, инновационную и защищенную правовую среду для каждого клиента.",
    "vision.card1_badge": "Глобальные и европейские стандарты",
    "vision.card2_cat": "НАША МИССИЯ",
    "vision.card2_title": "Наша миссия",
    "vision.card2_body": "Непреклонная, стратегическая и ответственная защита законных прав и активов клиента во всех судебных инстанциях, государственных органах и медиациях.",
    "vision.card2_badge": "Комплексная и стратегическая защита",
    "vision.card3_cat": "КЛЮЧЕВЫЕ ЦЕННОСТИ",
    "vision.card3_title": "Фундаментальные ценности",
    "vision.v1_t": "Добросовестность",
    "vision.v1_d": "Строжайшее соблюдение профессиональной этики.",
    "vision.v2_t": "Академическая точность",
    "vision.v2_d": "Глубокий правовой анализ каждого дела.",
    "vision.v3_t": "Фокус на клиенте",
    "vision.v3_d": "Индивидуальная процессуальная стратегия.",
    "vision.v4_t": "Конфиденциальность",
    "vision.v4_d": "100% гарантия адвокатской тайны.",
    "exp.eyebrow": "ПРАКТИКА И ЭКСПЕРТИЗА",
    "exp.title": "Правовая экспертиза",
    "exp.subtitle": "Исключительное и результативное судебное представительство для частных лиц и бизнеса.",
    "exp.d1_title": "Недвижимость и строительство",
    "exp.d1_desc": "Девелоперы, купля-продажа, публичный реестр, собственность",
    "exp.d1_link": "Полное правовое сопровождение →",
    "exp.d2_title": "Гражданские и договорные споры",
    "exp.d2_desc": "Взыскание долгов, ущерб, неисполнение обязательств",
    "exp.d2_link": "Судебная защита →",
    "exp.d3_title": "Бизнес и корпоративное право",
    "exp.d3_desc": "Споры партнеров, устав, защита инвестиций",
    "exp.d3_link": "Корпоративное управление →",
    "exp.d4_title": "Медиация и альтернативное урегулирование",
    "exp.d4_desc": "Разрешение споров без суда, конфиденциально",
    "exp.d4_link": "Альтернативное урегулирование →",
    "exp.d5_title": "Административное и налоговое право",
    "exp.d5_desc": "Мэрия Тбилиси, надзорные органы, публичный реестр",
    "exp.d5_link": "Административная защита →",
    "exp.d6_title": "Семейное и наследственное право",
    "exp.d6_desc": "Раздел совместной собственности, принятие наследства",
    "exp.d6_link": "Семейная консультация →",
    "exp.more_btn": "Показать все направления (6)",
    "exp.view_carousel": "3D Круговая орбита",
    "exp.view_grid": "Сетка практики",
    "exp.counter_total": "ИЗ 06",
    "exp.swipe_hint": "Используйте стрелки или свайп для навигации",
    "exp.tag_realestate": "Недвижимость",
    "exp.tag_corporate": "Корпоративное",
    "exp.tag_civil": "Гражданское",
    "exp.tag_mediation": "Медиация",
    "exp.tag_admin": "Административное",
    "exp.tag_family": "Семейное право",
    "about.badge_gba": "Ассоциация адвокатов Грузии (GBA) • 20+ лет",
    "about.tag_court": "Адвокатская практика",
    "about.tag_med": "Консультация и медиация",
    "about.tag_portrait": "Академический портрет",
    "about.eyebrow": "ВЕДУЩИЙ АДВОКАТ",
    "about.name": "Кетеван Утиашвили",
    "about.titles": "Основатель бюро • Член Исполнительного совета GBA • Аккредитованный медиатор",
    "about.lead": "Более 20 лет успешной адвокатской практики по всей Грузии. Бюро основано 18 июля 2003 года; центральный офис расположен в Тбилиси (просп. Ильи Чавчавадзе 26), а судебная защита охватывает столицу и все регионы Грузии.",
    "about.rec1_years": "2025 – по н.в.",
    "about.rec1_title": "Член Исполнительного совета",
    "about.rec1_sub": "Ассоциация адвокатов Грузии (GBA)",
    "about.rec2_years": "2022 – 2025",
    "about.rec2_title": "Председатель Гражданского комитета",
    "about.rec2_sub": "Ассоциация адвокатов Грузии (Руководство практикой гражданского права)",
    "about.rec3_years": "2015 – 2021",
    "about.rec3_title": "Член Комиссии по этике адвокатов",
    "about.rec3_sub": "Ассоциация адвокатов Грузии (Контроль этических стандартов)",
    "about.rec4_years": "2022 – по н.в.",
    "about.rec4_title": "Аккредитованный медиатор",
    "about.rec4_sub": "Ассоциация медиаторов Грузии (MAG)",
    "about.rec5_years": "2003 – по н.в.",
    "about.rec5_title": "Основатель и управляющий адвокат",
    "about.rec5_sub": "Адвокатское бюро Кетеван Утиашвили",
    "about.rec6_years": "2021 – по н.в.",
    "about.rec6_title": "Директор",
    "about.rec6_sub": "Центр защиты прав детей",
    "about.quote": "«Моя цель — не просто победа в зале суда, но защита интересов доверителя с высшей академической точностью, строжайшей этикой и стратегической дальновидностью.»",
    "about.cite": "— Кетеван Утиашвили",
    "case.step1": "Категория спора",
    "case.step2": "Стадия дела",
    "case.step3": "Сроки и документы",
    "case.step4": "Лист дела",
    "case.q1": "С каким правовым вопросом вы столкнулись в Тбилиси или Грузии?",
    "case.q1_hint": "Выберите основное направление:",
    "case.cat_re": "Недвижимость и девелопмент",
    "case.cat_re_sub": "Договоры застройщика, реестр, права собственности",
    "case.cat_civil": "Гражданские и договорные споры",
    "case.cat_civil_sub": "Взыскание долгов, убытки, неисполнение обязательств",
    "case.cat_corp": "Бизнес и корпоративное право",
    "case.cat_corp_sub": "Споры партнеров, уставы, защита инвестиций",
    "case.cat_med": "Медиация и урегулирование",
    "case.cat_med_sub": "Внесудебное решение споров с силой судебного акта",
    "case.cat_adm": "Административное и налоговое",
    "case.cat_adm_sub": "Мэрия Тбилиси, надзор, публичный реестр",
    "case.cat_fam": "Семейное и наследственное",
    "case.cat_fam_sub": "Раздел имущества, принятие наследства, завещания",
    "case.btn_next": "Следующий шаг: стадия спора",
    "case.q2": "На какой стадии находится дело?",
    "case.q2_hint": "Стратегия зависит от текущей стадии производства:",
    "case.st1_title": "Начальная стадия (до суда)",
    "case.st1_sub": "Правовой аудит, досудебная претензия, переговоры.",
    "case.st2_title": "Тбилисский городской суд (I инстанция)",
    "case.st2_sub": "Иск подан, получена повестка или готовится отзыв.",
    "case.st3_title": "Апелляционный или Верховный суд",
    "case.st3_sub": "Стадия обжалования, требующая высшей квалификации.",
    "case.st4_title": "Административный орган (Реестр / Мэрия / Налоговая)",
    "case.st4_sub": "Вынесен неблагоприятный акт или отказ в регистрации.",
    "case.btn_prev": "Назад",
    "case.btn_next2": "Далее: сроки и документы",
    "case.q3": "Сроки и имеющиеся документы",
    "case.q3_hint": "Соблюдение процессуальных сроков критически важно:",
    "case.field_date": "Когда возник спор или получено уведомление?",
    "case.field_docs": "Какие документы есть на руках?",
    "case.field_brief": "Краткое описание требований (необязательно):",
    "case.btn_generate": "Сформировать лист дела",
    "case.sheet_status": "Первичная карта оценки дела",
    "case.lbl_stage": "Стадия дела:",
    "case.lbl_evidence": "Доказательная база:",
    "case.lbl_priority": "Приоритет:",
    "case.lbl_urgent": "Высокий (действуют процессуальные сроки)",
    "case.lbl_counsel": "Ведущий адвокат:",
    "case.advice_title": "Предварительные рекомендации адвоката:",
    "case.advice_body": "Обстоятельства требуют юридического аудита договоров и составления официального адвокатского предупреждения. Рекомендуем очный визит в центральный офис в Тбилиси (просп. Чавчавадзе 26).",
    "case.btn_edit": "Изменить данные",
    "cal.eyebrow": "ЗАПИСЬ НА ПРИЕМ И ОФИС",
    "cal.title": "Запись на консультацию и офис",
    "cal.subtitle": "Выберите удобный день и время для очного визита в офис в Тбилиси (просп. Чавчавадзе 26) или онлайн-видеоконсультации.",
    "cal.select_time": "Доступные часы:",
    "cal.sum_lawyer": "Адвокат:",
    "cal.sum_slot": "Выбранное время:",
    "cal.format_office": "Визит в офис",
    "cal.format_online": "Онлайн-консультация",
    "cal.field_name": "Имя и фамилия *",
    "cal.field_phone": "Телефон *",
    "cal.field_email": "Эл. почта",
    "cal.service_lbl": "Правовое направление",
    "cal.field_topic": "Тема консультации",
    "cal.bot_remind_title": "Напоминание и регистрация через AI",
    "cal.bot_remind_sub": "Бот зарегистрирует визит и отправит своевременное напоминание",
    "cal.btn_confirm": "Подтвердить запись",
    "cal.succ_title": "Визит успешно забронирован!",
    "cal.succ_desc": "Ваша запись внесена в официальный график адвоката.",
    "cal.bot_action_title": "Поддержка AI ассистента и напоминания",
    "cal.bot_action_desc": "Визит подтвержден. Вы можете обсудить дело с ботом или включить напоминание.",
    "cal.bot_btn_chat": "Связаться с ботом и обсудить дело",
    "cal.bot_btn_tg": "Напоминание в Telegram (@saadvokatobot)",
    "cal.btn_new": "Новая запись",
    "cal.w1": "Пн",
    "cal.w2": "Вт",
    "cal.w3": "Ср",
    "cal.w4": "Чт",
    "cal.w5": "Пт",
    "cal.w6": "Сб",
    "cal.w7": "Вс",
    "cont.c1_cap": "Центральный офис",
    "cont.c1_val": "г. Тбилиси, просп. Ильи Чавчавадзе 26",
    "cont.c1_sub": "Ваке, Тбилиси • Часы работы: 10:00 – 18:00",
    "cont.c2_cap": "Прямая линия & Соцсети",
    "cont.c2_sub": "Телефонный и онлайн прием (понедельник – пятница)",
    "cont.c3_cap": "Официальная эл. почта",
    "map.title": "Локация центрального офиса в Тбилиси",
    "map.addr": "просп. Ильи Чавчавадзе 26, Тбилиси",
    "map.back_btn": "↑ Вернуться к календарю",
    "map.open_gmaps": "Открыть в Google Maps ↗",
    "footer.brand_sub": "— Адвокатское бюро • Грузия —",
    "footer.desc": "Член Исполнительного совета Палаты адвокатов Грузии (GBA), экс-председатель Гражданского комитета и аккредитованный медиатор. Практика с 2003 года по всей Грузии (Центральный офис: Тбилиси).",
    "footer.nav_title": "Навигация",
    "footer.serv_title": "Услуги",
    "footer.accred_title": "Аккредитация и этика",
    "footer.b1": "Палата адвокатов Грузии (GBA)",
    "footer.b2": "Ассоциация медиаторов Грузии (MAG)",
    "footer.b3": "Центр защиты прав детей",
    "footer.b4": "Гарантия конфиденциальности",
    "footer.copy": "© 2003 – 2026 Адвокатское бюро Кетеван Утиашвили. Судебная защита по всей Грузии.",
    "footer.office_line": "Центральный офис: г. Тбилиси, просп. Чавчавадзе 26",
    "mobnav.home": "Главная",
    "mobnav.practice": "Практика",
    "mobnav.chat": "Чат",
    "mobnav.booking": "Запись",
    "mobnav.call": "Позвонить",
    "adv.btn_txt": "Юр. советник",
    "adv.btn_sub": "Онлайн-помощник",
    "adv.modal_title": "Юридический советник",
    "adv.online_tag": "AI Бюро Кетеван Утиашвили",
    "adv.clear_btn": "Очистить",
    "adv.welcome_msg": "Здравствуйте. Я виртуальный консультант адвокатского бюро Кетеван Утиашвили. Центральный офис находится в Тбилиси, просп. Ильи Чавчавадзе 26. Чем могу вам помочь?",
    "adv.input_ph": "Задайте ваш юридический вопрос..."
}
};

let currentLang = 'ka';

const monthNamesByLang = {
  ka: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
};

function initTranslations() {
  const dropdownWrap = document.getElementById('langDropdownWrap');
  const currentBtn = document.getElementById('langCurrentBtn');
  const menu = document.getElementById('langDropdownMenu');
  const currentLabel = document.getElementById('currentLangLabel');
  const optionBtns = document.querySelectorAll('.lang-option-btn');

  // Load saved language if available
  try {
    const saved = localStorage.getItem('ku_site_lang');
    if (saved && (saved === 'ka' || saved === 'en' || saved === 'ru')) {
      currentLang = saved;
      const labels = { ka: 'GE', en: 'EN', ru: 'RU' };
      if (currentLabel) currentLabel.textContent = labels[saved] || 'GE';
      optionBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === saved);
      });
      applyLanguage(saved);
    }
  } catch (e) {}

  if (currentBtn && menu && dropdownWrap) {
    currentBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) {
        menu.classList.remove('hidden');
        dropdownWrap.classList.add('open');
        currentBtn.setAttribute('aria-expanded', 'true');
      } else {
        menu.classList.add('hidden');
        dropdownWrap.classList.remove('open');
        currentBtn.setAttribute('aria-expanded', 'false');
      }
    });

    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang') || 'ka';
        const label = btn.getAttribute('data-label') || 'GE';

        optionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (currentLabel) {
          currentLabel.textContent = label;
        }

        applyLanguage(lang);

        menu.classList.add('hidden');
        dropdownWrap.classList.remove('open');
        currentBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!dropdownWrap.contains(e.target)) {
        menu.classList.add('hidden');
        dropdownWrap.classList.remove('open');
        currentBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Fallback support for any remaining .lang-pill elements
  const pills = document.querySelectorAll('.lang-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const lang = pill.getAttribute('data-lang') || 'ka';
      applyLanguage(lang);
    });
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  const dict = i18nDictionary[lang] || i18nDictionary.ka;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update input placeholder for advisor
  const advInput = document.getElementById('advisorInputField');
  if (advInput && dict["adv.input_ph"]) {
    advInput.placeholder = dict["adv.input_ph"];
  }

  // Update calendar month and days if initialized
  if (typeof renderCalendarDays === 'function') {
    renderCalendarDays();
  }

  // Refresh scroll burn glyphs on translated content
  if (typeof window.refreshScrollBurnCards === 'function') {
    window.refreshScrollBurnCards();
  }

  document.documentElement.lang = lang;
  try { localStorage.setItem('ku_site_lang', lang); } catch (e) {}
}

/* ==========================================================================
   2. INTERACTIVE CALENDAR & APPOINTMENT SCHEDULER
   ========================================================================== */
let calYear = 2026;
let calMonth = 10; // November (0-indexed: 10 = Nov)
let selDay = 4;
let selTime = "11:00";

const geoMonths = monthNamesByLang.ka;

function getCurrentMonthName(monthIdx) {
  const list = (typeof currentLang !== 'undefined' && monthNamesByLang[currentLang]) ? monthNamesByLang[currentLang] : geoMonths;
  return list[monthIdx];
}

function initCalendar() {
  const prevBtn = document.getElementById('prevMonthBtn');
  const nextBtn = document.getElementById('nextMonthBtn');
  const slotsGroup = document.getElementById('timeSlotsGroup');

  renderCalendarDays();

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      calMonth--;
      if (calMonth < 0) {
        calMonth = 11;
        calYear--;
      }
      renderCalendarDays();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      calMonth++;
      if (calMonth > 11) {
        calMonth = 0;
        calYear++;
      }
      renderCalendarDays();
    });
  }

  if (slotsGroup) {
    slotsGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.time-pill');
      if (!btn) return;
      document.querySelectorAll('.time-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selTime = btn.getAttribute('data-time') || btn.textContent.trim();
      updateBookingSlotDisplay();
    });
  }

  const officeChoiceCard = document.getElementById('formatChoiceOffice');
  const officeRadioInput = document.querySelector('input[name="meetingFormat"][value="office"]');
  const scrollToMap = () => {
    const mapSection = document.getElementById('full-width-map');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  if (officeChoiceCard) {
    officeChoiceCard.addEventListener('click', (e) => {
      // Small timeout allows radio selection state to visually settle before smooth scroll
      setTimeout(scrollToMap, 150);
    });
  }
  if (officeRadioInput) {
    officeRadioInput.addEventListener('change', () => {
      if (officeRadioInput.checked) {
        setTimeout(scrollToMap, 150);
      }
    });
  }

  const appForm = document.getElementById('appointmentForm');
  const successBox = document.getElementById('bookingSuccessBox');
  const resetBtn = document.getElementById('resetBookingBtn');

  if (appForm) {
    appForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bookingName').value;
      const phone = document.getElementById('bookingPhone').value;
      const email = document.getElementById('bookingEmail').value || 'არ არის მითითებული';
      const topic = document.getElementById('bookingTopic').value || 'ზოგადი იურიდიული კონსულტაცია';
      const serviceSelect = document.getElementById('bookingService');
      const serviceText = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex]?.text : '';
      const formatChecked = document.querySelector('input[name="meetingFormat"]:checked')?.value;
      const formatDesc = formatChecked === 'online'
        ? 'ონლაინ ვიდეოკონსულტაცია (Google Meet / Zoom)'
        : 'პირისპირ შეხვედრა თბილისის ოფისში (ჭავჭავაძის გამზ. #26)';

      const refCode = `KU-TBS-${calYear}-${Math.floor(1000 + Math.random() * 9000)}`;
      const monthStr = getCurrentMonthName(calMonth);

      const botRemind = document.getElementById('botReminderCheck')?.checked;
      const botReminderNotice = botRemind
        ? `<div style="margin-top:0.75rem; padding:0.5rem 0.75rem; background:rgba(16,185,129,0.08); border-radius:6px; color:#047857; font-size:0.82rem; display:flex; align-items:center; gap:0.4rem;">
            <span>✓</span> <strong>AI ასისტენტის შეხსენება & რეგისტრაცია გააქტიურებულია.</strong>
          </div>`
        : '';

      const receiptHTML = `
        <div style="margin-bottom:0.4rem;"><strong>ჯავშნის კოდი:</strong> <span style="font-family:monospace; color:#721927; font-weight:700;">${refCode}</span></div>
        <div style="margin-bottom:0.4rem;"><strong>კლიენტი:</strong> ${escapeHtml(name)}</div>
        <div style="margin-bottom:0.4rem;"><strong>ტელეფონი:</strong> ${escapeHtml(phone)}</div>
        ${email && email !== 'არ არის მითითებული' ? `<div style="margin-bottom:0.4rem;"><strong>ელ-ფოსტა:</strong> ${escapeHtml(email)}</div>` : ''}
        ${serviceText ? `<div style="margin-bottom:0.4rem;"><strong>მიმართულება:</strong> ${escapeHtml(serviceText)}</div>` : ''}
        <div style="margin-bottom:0.4rem;"><strong>თარიღი & დრო:</strong> ${selDay} ${monthStr}, ${calYear} • ${selTime}</div>
        <div style="margin-bottom:0.4rem;"><strong>ფორმატი & მისამართი:</strong> ${formatDesc}</div>
        <div style="margin-bottom:0.4rem;"><strong>დავის საკითხი:</strong> ${escapeHtml(topic)}</div>
        <div><strong>ადვოკატი:</strong> ქეთევან უტიაშვილი (GBA აღმასრულებელი საბჭოს წევრი)</div>
        ${botReminderNotice}
      `;

      document.getElementById('confirmedReceiptData').innerHTML = receiptHTML;
      appForm.classList.add('hidden');
      successBox.classList.remove('hidden');

      const currentBookingData = {
        name, phone, email, serviceText, formatDesc, topic, refCode,
        dateTimeStr: `${selDay} ${monthStr}, ${calYear} • ${selTime}`
      };

      const tgLink = document.getElementById('telegramReminderBtn');
      if (tgLink) {
        tgLink.href = `https://t.me/saadvokatobot?start=${encodeURIComponent(refCode)}`;
      }

      const startBotBtn = document.getElementById('startBotChatForBookingBtn');
      if (startBotBtn) {
        startBotBtn.onclick = (ev) => {
          ev.preventDefault();
          if (typeof window.kuOpenAdvisorWithBooking === 'function') {
            window.kuOpenAdvisorWithBooking(currentBookingData);
          }
        };
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      appForm.reset();
      appForm.classList.remove('hidden');
      successBox.classList.add('hidden');
    });
  }
}

function renderCalendarDays() {
  const monthTitle = document.getElementById('calendarMonthTitle');
  const grid = document.getElementById('calendarDaysGrid');
  if (!grid || !monthTitle) return;

  const monthStr = getCurrentMonthName(calMonth);
  monthTitle.textContent = `${monthStr} ${calYear}`;
  grid.innerHTML = '';

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const startOffset = (firstDay === 0) ? 6 : firstDay - 1; // Mon = 0, Sun = 6
  const totalDays = new Date(calYear, calMonth + 1, 0).getDate();

  for (let i = 0; i < startOffset; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-day-cell disabled';
    grid.appendChild(empty);
  }

  for (let d = 1; d <= totalDays; d++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell';
    cell.textContent = d;

    const dayOfWeek = new Date(calYear, calMonth, d).getDay();
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);

    if (isWeekend) {
      cell.classList.add('disabled');
      cell.title = (currentLang === 'en') ? "Weekend — Urgent cases only" : (currentLang === 'ru') ? "Выходные — срочные дела" : "შაბათ-კვირა — გადაუდებელი საქმეები";
    } else {
      if (d === selDay) {
        cell.classList.add('active');
      }

      cell.addEventListener('click', () => {
        document.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('active'));
        cell.classList.add('active');
        selDay = d;
        updateBookingSlotDisplay();
      });
    }

    grid.appendChild(cell);
  }

  updateBookingSlotDisplay();
}

function updateBookingSlotDisplay() {
  const dateBadge = document.getElementById('selectedDateDisplay');
  const summarySlot = document.getElementById('summarySlotTime');
  const monthStr = getCurrentMonthName(calMonth);

  if (dateBadge) {
    dateBadge.textContent = `${selDay} ${monthStr}`;
  }
  if (summarySlot) {
    summarySlot.textContent = `${selDay} ${monthStr}, ${calYear} • ${selTime}`;
  }
}

/* ==========================================================================
   3. CASE ASSESSMENT WIZARD (DO I HAVE A CASE?)
   ========================================================================== */
function initCaseWizard() {
  const nextBtns = document.querySelectorAll('.next-step-btn');
  const prevBtns = document.querySelectorAll('.prev-step-btn');
  const stepNodes = document.querySelectorAll('.wizard-step-node');
  const stepPanels = document.querySelectorAll('.wizard-step-panel');

  function switchStep(stepNumber) {
    stepPanels.forEach(p => p.classList.remove('active'));
    stepNodes.forEach(node => {
      const s = parseInt(node.getAttribute('data-step'), 10);
      node.classList.remove('active');
      if (s === stepNumber) {
        node.classList.add('active');
      }
    });

    const targetPanel = document.getElementById(`wizardStep${stepNumber}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.getAttribute('data-target'), 10);
      if (target === 4) {
        buildCaseSheetOutput();
      }
      switchStep(target);
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.getAttribute('data-target'), 10);
      switchStep(target);
    });
  });

  // Case Assessment Choice Grid Scrollable Controls (გასქროლვით დალაგება)
  const choiceGrid = document.getElementById('caseChoiceGrid');
  const scrollPrev = document.getElementById('caseScrollPrevBtn');
  const scrollNext = document.getElementById('caseScrollNextBtn');
  if (choiceGrid) {
    if (scrollPrev) {
      scrollPrev.addEventListener('click', (e) => {
        e.preventDefault();
        choiceGrid.scrollBy({ left: -300, behavior: 'smooth' });
      });
    }
    if (scrollNext) {
      scrollNext.addEventListener('click', (e) => {
        e.preventDefault();
        choiceGrid.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }

    // Allow vertical mouse wheel over choices to scroll horizontally on desktop
    choiceGrid.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        choiceGrid.scrollBy({ left: e.deltaY * 1.3, behavior: 'smooth' });
      }
    }, { passive: false });

    // Scroll selected card smoothly into view on click
    choiceGrid.querySelectorAll('.clean-choice-card').forEach(card => {
      card.addEventListener('click', () => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    });
  }

  const forwardBtn = document.getElementById('forwardCaseToCalendarBtn');
  if (forwardBtn) {
    forwardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const caseId = document.getElementById('sheetCaseId')?.textContent || '';
      const category = document.getElementById('sheetCategoryDisplay')?.textContent || '';
      const topicInput = document.getElementById('bookingTopic');
      const serviceSelect = document.getElementById('bookingService');
      const caseType = document.querySelector('input[name="caseType"]:checked')?.value || 're';

      if (serviceSelect) {
        serviceSelect.value = (caseType === 'civil_contracts') ? 'civil' :
                              (caseType === 'real_estate') ? 're' :
                              (caseType === 'corporate') ? 'corp' :
                              (caseType === 'mediation') ? 'med' :
                              (caseType === 'administrative') ? 'adm' :
                              (caseType === 'family_inheritance') ? 'fam' : 're';
      }

      if (topicInput) {
        topicInput.value = `საქმის შეფასების ბარათი: ${caseId} — ${category}`;
      }

      const calSection = document.getElementById('calendar');
      if (calSection) {
        calSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const sheetForm = document.getElementById('caseSheetSubmitForm');
  const sheetSuccess = document.getElementById('sheetSuccessMessage');
  if (sheetForm) {
    sheetForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sheetForm.classList.add('hidden');
      sheetSuccess.classList.remove('hidden');
    });
  }
}

function buildCaseSheetOutput() {
  const caseType = document.querySelector('input[name="caseType"]:checked')?.value || 'real_estate';
  const caseStage = document.querySelector('input[name="caseStage"]:checked')?.value || 'early_consult';

  const collectedDocs = [];
  document.querySelectorAll('#wizardStep3 input[type="checkbox"]:checked').forEach(cb => {
    collectedDocs.push(cb.value);
  });

  const categories = {
    real_estate: "უძრავი ქონება, მშენებლობა & ინვესტიციები",
    civil_contracts: "სამოქალაქო & სახელშეკრულებო დავები",
    corporate: "ბიზნესი & კორპორაციული სამართალი",
    mediation: "მედიაცია & ალტერნატიული მორიგება",
    administrative: "ადმინისტრაციული & საგადასახადო წარმოება",
    family_inheritance: "საოჯახო & მემკვიდრეობითი სამართალი"
  };

  const stages = {
    early_consult: "საწყისი ეტაპი (პრეტენზია / მოლაპარაკება)",
    court_first: "თბილისის საქალაქო სასამართლო (I ინსტანცია)",
    appeals: "თბილისის სააპელაციო / უზენაესი სასამართლო",
    registry_adm: "ადმინისტრაციული წარმოება (რეესტრი / მერია)"
  };

  const strategicAdvice = {
    real_estate: "უძრავი ქონებისა და დეველოპერული ხელშეკრულებების სპეციფიკიდან გამომდინარე, აუცილებელია მშენებლობის ეტაპების, საჯარო რეესტრის ვალდებულებების და პირგასამტეხლოს მექანიზმების სიღრმისეული აუდიტი. საადვოკატო გაფრთხილების დროული მომზადება ხშირად წყვეტს დავას სასამართლოს გარეშე. გირჩევთ ვიზიტს თბილისის ცენტრალურ ოფისში (ჭავჭავაძის გამზ. 26).",
    civil_contracts: "სამოქალაქო კოდექსის თანახმად, სახელშეკრულებო მოთხოვნებზე მოქმედებს ხანდაზმულობის 3-წლიანი ვადა. რეკომენდებულია პირველადი საადვოკატო პრეტენზიის მომზადება და საჭიროების შემთხვევაში სარჩელის უზრუნველყოფის ღონისძიებების (ყადაღის) გამოყენება.",
    corporate: "კორპორაციულ დავებში გადამწყვეტია პარტნიორთა კრების ოქმების სისწორე და წესდებით გათვალისწინებული კვორუმი. გირჩევთ ბიზნეს-აქტივების სასწრაფო იურიდიულ შემოწმებას.",
    mediation: "როგორც საქართველოს მედიატორთა ასოციაციის აკრედიტებული მედიატორი, ქეთევან უტიაშვილი უზრუნველყოფს მოლაპარაკებების კონფიდენციალურ წარმართვას. მიღწეული სამედიაციო შეთანხმება მტკიცდება სასამართლოს მიერ და იძენს უპირობო სააღსრულებო ძალას.",
    administrative: "ადმინისტრაციული აქტის გასაჩივრებისთვის საქართველოს კანონმდებლობით დადგენილია მკაცრი 30-დღიანი ვადა. გადაუდებლად უნდა მომზადდეს ადმინისტრაციული საჩივარი თბილისის მერიაში ან სასამართლოში.",
    family_inheritance: "თანასაკუთრების გაყოფასა და მემკვიდრეობის მიღებაში მნიშვნელოვანია 6-თვიანი საპროცესო ვადის დაცვა ნოტარიუსთან. გირჩევთ კონსულტაციას ქონებრივი უფლებების დასაცავად."
  };

  document.getElementById('sheetCategoryDisplay').textContent = categories[caseType] || categories.real_estate;
  document.getElementById('sheetStageDisplay').textContent = stages[caseStage] || stages.early_consult;
  document.getElementById('sheetDocsDisplay').textContent = collectedDocs.length > 0 ? collectedDocs.join(', ') : 'დოკუმენტაცია არ არის მითითებული';
  document.getElementById('sheetAdviceText').textContent = strategicAdvice[caseType] || strategicAdvice.real_estate;

  const randCode = Math.floor(100 + Math.random() * 900);
  document.getElementById('sheetCaseId').textContent = `CASE-2026-TBS-${randCode}`;
}

/* ==========================================================================
   4. INTEGRATED AI LEGAL ADVISOR (ZERO EMOJIS, PURE PROFESSIONALISM)
   ========================================================================== */
function initLegalAdvisor() {
  const toggleBtn = document.getElementById('advisorToggleBtn');
  const modal = document.getElementById('advisorModal');
  const closeBtn = document.getElementById('advisorCloseBtn');
  const pillMinBtn = document.getElementById('advisorPillMinBtn');
  const clearChatBtn = document.getElementById('advisorClearChatBtn');
  const chatForm = document.getElementById('advisorChatForm');
  const inputField = document.getElementById('advisorInputField');
  const chatBody = document.getElementById('advisorChatBody');

  if (!toggleBtn || !modal) return;

  function openAdvisorChat() {
    modal.classList.remove('hidden', 'closing');
    toggleBtn.classList.add('is-open');
    document.body.classList.add('advisor-modal-open');
    if (inputField && window.innerWidth > 768) {
      setTimeout(() => inputField.focus(), 80);
    }
  }

  function closeAdvisorChat() {
    if (modal.classList.contains('hidden')) return;
    if (inputField) inputField.blur();
    document.body.classList.remove('chat-input-focused');
    document.body.classList.remove('advisor-modal-open');
    modal.style.height = '';
    modal.style.bottom = '';
    modal.classList.add('closing');
    toggleBtn.classList.remove('is-open');
    sessionStorage.setItem('ku_advisor_dismissed', 'true');

    const handleAnimEnd = () => {
      modal.classList.remove('closing');
      modal.classList.add('hidden');
      modal.removeEventListener('animationend', handleAnimEnd);
    };
    modal.addEventListener('animationend', handleAnimEnd, { once: true });

    // Fallback in case animationend does not fire
    setTimeout(() => {
      if (modal.classList.contains('closing')) {
        modal.classList.remove('closing');
        modal.classList.add('hidden');
      }
    }, 260);
  }

  const pillWrap = document.getElementById('advisorPillWrap');

  function minimizePill() {
    if (pillWrap) pillWrap.classList.add('minimized');
    toggleBtn.classList.add('minimized');
    sessionStorage.setItem('ku_advisor_pill_minimized', 'true');
  }

  function restorePill() {
    if (pillWrap) pillWrap.classList.remove('minimized');
    toggleBtn.classList.remove('minimized');
    sessionStorage.removeItem('ku_advisor_pill_minimized');
  }

  window.kuCloseAdvisorChat = closeAdvisorChat;

  window.kuOpenAdvisorWithBooking = function(b) {
    restorePill();
    openAdvisorChat();
    const safeName = escapeHtml(b.name || 'კლიენტი');
    const safeRef = escapeHtml(b.refCode || '');
    const safeDate = escapeHtml(b.dateTimeStr || '');
    const safeFormat = escapeHtml(b.formatDesc || '');
    const safeService = escapeHtml(b.serviceText || '');
    const safeTopic = escapeHtml(b.topic || '');

    const welcomeMsg = `<strong>ვიზიტის დადასტურება & AI მხარდაჭერა:</strong><br><br>` +
      `მოგესალმებით, <strong>${safeName}</strong>! თქვენი ჯავშანი <strong>${safeRef}</strong> წარმატებით დარეგისტრირდა ადვოკატ ქეთევან უტიაშვილის ოფიციალურ განრიგში.<br><br>` +
      `• <strong>თარიღი & დრო:</strong> ${safeDate}<br>` +
      `• <strong>ფორმატი:</strong> ${safeFormat}<br>` +
      `• <strong>მიმართულება:</strong> ${safeService}<br>` +
      `• <strong>დავის საკითხი:</strong> ${safeTopic}<br><br>` +
      `მე შევინახე თქვენი ვიზიტის მონაცემები და შეგახსენებთ შეხვედრას. შემიძლია წინასწარ გითხრათ, რა დოკუმენტები უნდა მოამზადოთ, ან გიპასუხოთ ნებისმიერ საპროცესო შეკითხვაზე.`;

    appendChatBubble(welcomeMsg, 'system');

    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'chat-quick-tags';
    tagsDiv.innerHTML = `
      <button class="quick-tag-btn" data-query="booking_docs">რა დოკუმენტები მოვამზადო ვიზიტისთვის?</button>
      <button class="quick-tag-btn" data-query="booking_location">ოფისის ლოკაცია და მისვლის დეტალები</button>
      <button class="quick-tag-btn" data-query="booking_prep">როგორ მოვემზადო კონსულტაციისთვის?</button>
    `;
    tagsDiv.querySelectorAll('.quick-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qType = btn.getAttribute('data-query');
        if (qType) handleQuickAdvisorQuery(qType);
      });
    });
    chatBody.appendChild(tagsDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  // Top-right close button minimizes pill on first click ("პირველივეზე უნდა იკეცებოდეს")
  if (pillMinBtn) {
    pillMinBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      minimizePill();
    });
  }

  // Toggle button single-click handler
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    // If widget is currently in minimized circle state, single click restores it and opens chat
    if (toggleBtn.classList.contains('minimized') || (pillWrap && pillWrap.classList.contains('minimized'))) {
      restorePill();
      openAdvisorChat();
      return;
    }

    // Toggle between open chat window and closed
    if (modal.classList.contains('hidden') || modal.classList.contains('closing')) {
      openAdvisorChat();
    } else {
      closeAdvisorChat();
    }
  });

  // Chat window top-right close button (✕):
  // 1 click closes chat AND minimizes to compact circle directly ("პირველივეზე უნდა იკეცებოდეს")
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAdvisorChat();
      minimizePill();
    });
  }

  // Restore minimized state ONLY if previously explicitly dismissed by user
  if (sessionStorage.getItem('ku_advisor_pill_minimized') === 'true') {
    minimizePill();
  }

  // Clear Chat History Button
  if (clearChatBtn) {
    clearChatBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetAdvisorChat();
    });
  }

  function resetAdvisorChat() {
    if (!chatBody) return;
    chatBody.innerHTML = `
      <div class="chat-row system">
        <div class="chat-bubble">
          <p>
            მოგესალმებით. მე ვარ ქეთევან უტიაშვილის საადვოკატო ბიუროს ვირტუალური ასისტენტი. 
            ცენტრალური ოფისი მდებარეობს თბილისში, ილია ჭავჭავაძის გამზ. #26-ში, ხოლო საადვოკატო წარმომადგენლობას ვახორციელებთ მთელი საქართველოს მასშტაბით. რით შემიძლია დაგეხმაროთ დღეს?
          </p>
        </div>
      </div>

      <div class="chat-quick-tags">
        <button class="quick-tag-btn" data-query="re_tbilisi">უძრავი ქონებისა და მშენებლობის დავები</button>
        <button class="quick-tag-btn" data-query="corporate">სამეწარმეო & კორპორაციული</button>
        <button class="quick-tag-btn" data-query="civil">სამოქალაქო & სახელშეკრულებო</button>
        <button class="quick-tag-btn" data-query="mediation">მედიაცია და მორიგება</button>
        <button class="quick-tag-btn" data-query="deadlines">სასამართლოში გასაჩივრების ვადები</button>
        <button class="quick-tag-btn" data-query="booking">ცენტრალური ოფისის მისამართი & ჩაწერა</button>
      </div>
    `;
    // Re-bind listeners for quick tags
    chatBody.querySelectorAll('.quick-tag-btn').forEach(tagBtn => {
      tagBtn.addEventListener('click', () => {
        const qType = tagBtn.getAttribute('data-query');
        if (qType) handleQuickAdvisorQuery(qType);
      });
    });
    if (inputField) {
      inputField.value = '';
      inputField.placeholder = "დასვით თქვენი იურიდიული შეკითხვა...";
    }
  }

  const mobCenterChatBtn = document.getElementById('mobCenterChatBtn');

  // Center elevated mobile bottom bar chat button
  if (mobCenterChatBtn) {
    mobCenterChatBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (modal.classList.contains('hidden') || modal.classList.contains('closing')) {
        openAdvisorChat();
      } else {
        closeAdvisorChat();
      }
    });
  }

  // Close when clicking outside of modal and toggle button
  document.addEventListener('click', (e) => {
    if (!modal.classList.contains('hidden') && 
        !modal.contains(e.target) && 
        !toggleBtn.contains(e.target) &&
        (!mobCenterChatBtn || !mobCenterChatBtn.contains(e.target))) {
      closeAdvisorChat();
    }
  });

  // Practice Area Cards -> Direct Route to On-Site AI Legal Advisor!
  document.querySelectorAll('.expertise-card-editorial[data-advisor-query]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const qType = card.getAttribute('data-advisor-query');
      toggleBtn.classList.remove('minimized');
      openAdvisorChat();
      if (qType) {
        handleQuickAdvisorQuery(qType);
      }
    });
  });

  document.querySelectorAll('.quick-tag-btn').forEach(tagBtn => {
    tagBtn.addEventListener('click', () => {
      const qType = tagBtn.getAttribute('data-query');
      if (qType) handleQuickAdvisorQuery(qType);
    });
  });

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = inputField.value.trim();
      if (!text) return;
      appendChatBubble(text, 'user');
      inputField.value = '';
      generateAdvisorResponse(text);
      if (chatBody) {
        setTimeout(() => { chatBody.scrollTop = chatBody.scrollHeight; }, 50);
      }
    });
  }

  // Mobile virtual keyboard handling: hide bottom navigation bar and pin chat above keyboard
  function updateMobileKeyboardLayout() {
    if (window.innerWidth > 768) return;
    if (!document.body.classList.contains('chat-input-focused')) return;
    if (window.visualViewport) {
      const vh = window.visualViewport.height;
      modal.style.height = `${vh}px`;
      modal.style.bottom = '0px';
      if (chatBody) {
        setTimeout(() => {
          chatBody.scrollTop = chatBody.scrollHeight;
        }, 60);
      }
    }
  }

  if (inputField) {
    inputField.addEventListener('focus', () => {
      document.body.classList.add('chat-input-focused');
      updateMobileKeyboardLayout();
    });

    inputField.addEventListener('blur', () => {
      document.body.classList.remove('chat-input-focused');
      modal.style.height = '';
      modal.style.bottom = '';
    });
  }

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
      if (document.body.classList.contains('chat-input-focused')) {
        updateMobileKeyboardLayout();
      }
    });
    window.visualViewport.addEventListener('scroll', () => {
      if (document.body.classList.contains('chat-input-focused')) {
        updateMobileKeyboardLayout();
      }
    });
  }

  function handleQuickAdvisorQuery(type) {
    const promptMap = {
      re_tbilisi: "უძრავი ქონებისა და მშენებლობის დავები",
      corporate: "სამეწარმეო და კორპორაციული სამართალი",
      civil: "სამოქალაქო და სახელშეკრულებო დავები",
      mediation: "მედიაცია და ალტერნატიული მორიგება",
      administrative: "ადმინისტრაციული დავები (სახელმწიფო & მუნიციპალური ორგანოები)",
      family: "საოჯახო და მემკვიდრეობითი სამართალი",
      deadlines: "სასამართლოში გასაჩივრების ხანდაზმულობის ვადები",
      booking: "ცენტრალური ოფისის მისამართი და ვიზიტის დაჯავშნა",
      booking_docs: "რა დოკუმენტები უნდა მოვამზადო ვიზიტისთვის?",
      booking_location: "თბილისის ოფისის მისამართი, ლოკაცია და პარკინგი",
      booking_prep: "როგორ მოვემზადო კონსულტაციისთვის?"
    };
    const userText = promptMap[type] || "მაინტერესებს იურიდიული კონსულტაცია";
    appendChatBubble(userText, 'user');
    generateAdvisorResponse(userText, type);
  }

  function appendChatBubble(content, sender = 'system') {
    const row = document.createElement('div');
    row.className = `chat-row ${sender}`;
    row.innerHTML = `<div class="chat-bubble"><p>${content}</p></div>`;
    chatBody.appendChild(row);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  async function generateAdvisorResponse(query, queryType = '') {
    const q = query.toLowerCase();

    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-row system';
    typingDiv.innerHTML = `<div class="chat-bubble" style="color:#721927; font-style:italic;">ვირტუალური ასისტენტი ამუშავებს მონაცემებს...</div>`;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    // --- რეალური AI ასისტენტი (n8n webhook) ---
    const ADVISOR_WEBHOOK = 'https://meticulous-oyster.pikapod.net/webhook/utiashvili-website-chat';
    let sid = null;
    try { sid = localStorage.getItem('ku_advisor_sid'); } catch (e) {}
    if (!sid) {
      sid = 'web-' + Date.now() + '-' + Math.random().toString(36).slice(2, 10);
      try { localStorage.setItem('ku_advisor_sid', sid); } catch (e) {}
    }
    try {
      const resp = await fetch(ADVISOR_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, sessionId: sid })
      });
      const data = await resp.json().catch(() => ({}));
      typingDiv.remove();
      const raw = (data && (data.reply || data.output)) ? (data.reply || data.output) : '';
      if (raw) {
        const safe = String(raw)
          .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/\n/g, '<br>');
        appendChatBubble(safe, 'system');
      } else {
        appendChatBubble(getDomainFallback(queryType, q), 'system');
      }
    } catch (err) {
      typingDiv.remove();
      appendChatBubble(getDomainFallback(queryType, q), 'system');
    }
  }

  function getDomainFallback(queryType, q) {
    if (queryType === 're_tbilisi' || q.includes('უძრავ') || q.includes('მშენებ')) {
      return `<strong>უძრავი ქონება და მშენებლობის დავები:</strong><br><br>
      უძრავი ქონებისა და დეველოპერული ხელშეკრულებების სპეციფიკიდან გამომდინარე, აუცილებელია:
      <ul>
        <li>მშენებლობის ეტაპებისა და ვადების გადაცილების აუდიტი;</li>
        <li>საჯარო რეესტრის ვალდებულებებისა და პირგასამტეხლოს მექანიზმების შემოწმება;</li>
        <li>საადვოკატო გაფრთხილების დროული მომზადება.</li>
      </ul>
      <br>ქეთევან უტიაშვილის საადვოკატო ბიურო ახორციელებს ხელშეკრულებების სრულ სამართლებრივ ექსპერტიზას. შეგიძლიათ <a href="#calendar" style="color:#721927; text-decoration:underline; font-weight:600;">დაჯავშნოთ ვიზიტი თბილისის ოფისში (ჭავჭავაძის 26)</a>.`;
    }
    if (queryType === 'corporate' || q.includes('კორპორაცი') || q.includes('სამეწარმეო') || q.includes('პარტნიორ')) {
      return `<strong>სამეწარმეო და კორპორაციული სამართალი:</strong><br><br>
      კორპორაციულ დავებსა და ბიზნეს-აქტივების მართვაში გადამწყვეტია:
      <ul>
        <li>წესდებით განსაზღვრული კვორუმი და პარტნიორთა კრების ოქმების სისწორე;</li>
        <li>წილების გასხვისების, დივიდენდების განაწილებისა და დირექტორის პასუხისმგებლობის საკითხები;</li>
        <li>უცხოური ინვესტიციების დაცვა და ბიზნეს-აქტივების იურიდიული აუდიტი (Due Diligence).</li>
      </ul>
      <br>გირჩევთ წინასწარ კონსულტაციას ქეთევან უტიაშვილთან. <a href="#calendar" style="color:#721927; text-decoration:underline; font-weight:600;">დაჯავშნეთ ვიზიტი კალენდარში</a>.`;
    }
    if (queryType === 'civil' || q.includes('სამოქალაქო') || q.includes('ხელშეკრულებ') || q.includes('ვალ')) {
      return `<strong>სამოქალაქო და სახელშეკრულებო დავები:</strong><br><br>
      სამოქალაქო კოდექსის თანახმად, სახელშეკრულებო მოთხოვნებზე მოქმედებს ხანდაზმულობის 3-წლიანი ვადა.<br><br>
      ბიურო უზრუნველყოფს:
      <ul>
        <li>პირველადი საადვოკატო პრეტენზიის მომზადებას;</li>
        <li>სარჩელის უზრუნველყოფის ღონისძიებების (ყადაღის) გამოყენებას;</li>
        <li>წარმომადგენლობას თბილისის საქალაქო, სააპელაციო და უზენაეს სასამართლოში.</li>
      </ul>`;
    }
    if (queryType === 'mediation' || q.includes('მედია') || q.includes('მორიგებ')) {
      return `<strong>მედიაცია და ალტერნატიული მორიგება:</strong><br><br>
      ქეთევან უტიაშვილი არის საქართველოს მედიატორთა ასოციაციის აკრედიტებული მედიატორი.<br><br>
      უპირატესობები:
      • სრული კონფიდენციალურობა;<br>
      • დავის მოგვარება 2-4 კვირაში წლობით სასამართლო პროცესების ნაცვლად;<br>
      • მიღწეულ სამედიაციო შეთანხმებას აქვს <strong>სასამართლო გადაწყვეტილების ტოლფასი სააღსრულებო ძალა</strong>.`;
    }
    if (queryType === 'administrative' || q.includes('ადმინისტრაცი') || q.includes('მერია') || q.includes('რეესტრ')) {
      return `<strong>ადმინისტრაციული დავები (მერია, რეესტრი, შემოსავლები):</strong><br><br>
      ადმინისტრაციული აქტის გასაჩივრებისთვის საქართველოს კანონმდებლობით დადგენილია <strong>მკაცრი 30-დღიანი ვადა</strong>.<br><br>
      ბიურო წარმატებით წარმართავს:
      <ul>
        <li>თბილისის მერიისა და ზედამხედველობის სამსახურის ჯარიმების გასაჩივრებას;</li>
        <li>საჯარო რეესტრის უარის ან შეჩერების გასაჩივრებას;</li>
        <li>საგადასახადო და საბაჟო დავებს.</li>
      </ul>`;
    }
    if (queryType === 'family' || q.includes('საოჯახო') || q.includes('მემკვიდრეობ') || q.includes('ანდერძ')) {
      return `<strong>საოჯახო & მემკვიდრეობითი სამართალი:</strong><br><br>
      თანასაკუთრების გაყოფასა და მემკვიდრეობის მიღებაში მნიშვნელოვანია 6-თვიანი საპროცესო ვადის დაცვა ნოტარიუსთან.<br><br>
      ბიურო იცავს თქვენს ინტერესებს:
      <ul>
        <li>სამკვიდრო ქონების გაყოფასა და ანდერძის ნამდვილობის დავებში;</li>
        <li>საოჯახო შეთანხმებების გაფორმებასა და არასრულწლოვანთა ქონებრივი უფლებების დაცვაში.</li>
      </ul>`;
    }
    if (queryType === 'deadlines' || q.includes('ვადა') || q.includes('ხანდაზმულ')) {
      return `<strong>ხანდაზმულობის ვადები სამოქალაქო კოდექსით:</strong><br><br>
      • სახელშეკრულებო მოთხოვნებზე: <strong>3 წელი</strong><br>
      • უძრავ ქონებასთან დაკავშირებულ მოთხოვნებზე: <strong>6 წელი</strong><br>
      • პერიოდულად შესასრულებელ ვალდებულებებზე: <strong>3 წელი</strong><br>
      • ადმინისტრაციული აქტის გასაჩივრება: <strong>30 კალენდარული დღე</strong><br><br>
      <em>გაფრთხილება:</em> ვადის გადაცილება საქმის წაგების საფუძველია. შეგიძლიათ შეაფასოთ თქვენი საქმე ჩვენს <a href="#case-check" style="color:#721927; text-decoration:underline; font-weight:600;">ონლაინ დიაგნოსტიკაში</a>.`;
    }
    if (queryType === 'booking' || q.includes('კალენდარ') || q.includes('ჩაწერ') || q.includes('ვიზიტ') || q.includes('მისამართ')) {
      return `<strong>თბილისის ცენტრალური ოფისი & ვიზიტი:</strong><br><br>
      მისამართი: <strong>ქ. თბილისი, ილია ჭავჭავაძის გამზირი #26</strong> (ვაკე).<br>
      სამუშაო საათები: ორშაბათიდან პარასკევის ჩათვლით 10:00 - 18:00.<br><br>
      კონსულტაციაზე ჩასაწერად გამოიყენეთ ჩვენი <a href="#calendar" style="color:#721927; text-decoration:underline; font-weight:600;">ინტეგრირებული კალენდარი</a> ან დარეკეთ ნომერზე: <strong>+995 599 35 15 25</strong>.`;
    }
    if (queryType === 'booking_docs' || q.includes('დოკუმენტ')) {
      return `<strong>კონსულტაციისთვის საჭირო დოკუმენტაცია:</strong><br><br>
      ვიზიტის მაქსიმალური ეფექტიანობისთვის სასურველია თან იქონიოთ:
      <ul>
        <li><strong>ხელშეკრულებები და დანართები</strong> (ასეთის არსებობის შემთხვევაში);</li>
        <li><strong>ამონაწერი საჯარო რეესტრიდან</strong> და საკადასტრო კოდი (ქონებრივი დავებისთვის);</li>
        <li><strong>მიმოწერები, ოფიციალური შეტყობინებები</strong> ან ადმინისტრაციული აქტები;</li>
        <li><strong>პირადობის დამადასტურებელი დოკუმენტი</strong>.</li>
      </ul>
      თუ დოკუმენტები ელექტრონულ ფორმატში გაქვთ, შეგიძლიათ წინასწარ გადმოაგზავნოთ: <a href="mailto:office@utiashvililaw.ge" style="color:#721927; font-weight:600;">office@utiashvililaw.ge</a>`;
    }
    if (queryType === 'booking_location' || q.includes('ლოკაცია') || q.includes('პარკინგ')) {
      return `<strong>თბილისის ცენტრალური ოფისის დეტალები:</strong><br><br>
      • <strong>მისამართი:</strong> ქ. თბილისი, ილია ჭავჭავაძის გამზირი #26 (ვაკე);<br>
      • <strong>სამუშაო საათები:</strong> ორშაბათი – პარასკევი, 10:00 – 18:00;<br>
      • <strong>პარკინგი:</strong> ხელმისაწვდომია ჭავჭავაძის გამზირის მიმდებარე საპარკინგე ზონაში;<br>
      • <strong>პირდაპირი კონტაქტი:</strong> <a href="tel:+995599351525" style="color:#721927; font-weight:600;">+995 599 35 15 25</a>.`;
    }
    if (queryType === 'booking_prep') {
      return `<strong>როგორ მოემზადოთ ადვოკატთან ვიზიტისთვის:</strong><br><br>
      1. <strong>ფაქტების ქრონოლოგია:</strong> მოკლედ ჩამოწერეთ მოვლენების თანმიმდევრობა თარიღების მიხედვით;<br>
      2. <strong>მთავარი მიზანი:</strong> მკაფიოდ განსაზღვრეთ, რა არის თქვენი სასურველი იურიდიული შედეგი;<br>
      3. <strong>კითხვების სია:</strong> წინასწარ ჩამოწერეთ ის ძირითადი კითხვები, რაც ყველაზე მეტად გაღელვებთ.<br><br>
      ქეთევან უტიაშვილი პირისპირ განიხილავს თქვენი საქმის სტრატეგიას და განსაზღვრავს წარმატების შანსებს.`;
    }
    return `გმადლობთ შეკითხვისთვის. თქვენი საკითხი მოითხოვს ქეთევან უტიაშვილის ინდივიდუალურ სამართლებრივ შეფასებას. 
    <br><br>გირჩევთ შეავსოთ ჩვენი <a href="#case-check" style="color:#721927; text-decoration:underline; font-weight:600;">საქმის ონლაინ შეფასება</a> ან მობრძანდეთ თბილისის ოფისში (ჭავჭავაძის გამზ. 26) <a href="#calendar" style="color:#721927; text-decoration:underline; font-weight:600;">კალენდარში წინასწარი ჩაწერით</a>.`;
  }
}

/* ==========================================================================
   5. MOBILE NAVIGATION & CONTACT FORMS
   ========================================================================== */
function initMobileNav() {
  const burger = document.getElementById('mobileBurger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('open');
      burger.classList.toggle('active', isOpen);
    });

    document.querySelectorAll('.nav-item, .nav-drawer-cta-btn, .nav-drawer-phone-btn, .nav-drawer-quick-call').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('active');
      });
    });

    // Close menu when tapping outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove('open');
        burger.classList.remove('active');
      }
    });
  }

  // Universal in-page smooth navigation for all buttons and anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetHash = this.getAttribute('href');
      if (!targetHash || targetHash === '#') return;
      const targetElement = document.querySelector(targetHash);
      if (targetElement) {
        e.preventDefault();
        // If mobile drawer menu is open, close it
        if (navLinks && navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          if (burger) burger.classList.remove('active');
        }
        // If advisor chat is open, close it so target section is fully visible
        if (typeof window.kuCloseAdvisorChat === 'function') {
          window.kuCloseAdvisorChat();
        }
        targetElement.scrollIntoView({ behavior: 'smooth' });
        if (targetHash === '#calendar') {
          const calBox = document.querySelector('.booking-split-container');
          if (calBox) {
            calBox.classList.remove('cal-highlight-flash');
            void calBox.offsetWidth;
            calBox.classList.add('cal-highlight-flash');
          }
        }
        if (history.pushState) {
          history.pushState(null, null, targetHash);
        } else {
          location.hash = targetHash;
        }
      }
    });
  });

  // Mobile Bottom Navigation Bar Links Active State & Smooth Scrolling
  const mobNavLinks = document.querySelectorAll('.mob-nav-link[data-nav-target]');
  if (mobNavLinks.length > 0) {
    mobNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 160;
      const heroSec = document.getElementById('hero');
      const expSec = document.getElementById('expertise');
      const calSec = document.getElementById('calendar');

      let current = 'hero';
      if (calSec && scrollPos >= calSec.offsetTop) {
        current = 'calendar';
      } else if (expSec && scrollPos >= expSec.offsetTop) {
        current = 'expertise';
      }

      mobNavLinks.forEach(link => {
        if (link.getAttribute('data-nav-target') === current) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }, { passive: true });
  }

  // Mobile "მეტის ნახვა" Toggle for Practice Areas
  const moreExpertiseBtn = document.getElementById('toggleMoreExpertiseBtn');
  const expertiseGrid = document.querySelector('.expertise-symmetrical-grid');
  const moreExpertiseLabel = document.getElementById('moreExpertiseLabel');

  if (moreExpertiseBtn && expertiseGrid) {
    moreExpertiseBtn.addEventListener('click', () => {
      expertiseGrid.classList.toggle('show-all');
      const isExpanded = expertiseGrid.classList.contains('show-all');
      if (moreExpertiseLabel) {
        moreExpertiseLabel.textContent = isExpanded 
          ? "ნაკლების ჩვენება (3)" 
          : "ყველა მიმართულების ნახვა (6)";
      }
      if (!isExpanded) {
        expertiseGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}

function initContactForms() {
  const directForm = document.getElementById('directContactForm');
  const alertBox = document.getElementById('directSuccessAlert');

  if (directForm) {
    directForm.addEventListener('submit', (e) => {
      e.preventDefault();
      directForm.reset();
      if (alertBox) {
        alertBox.classList.remove('hidden');
        setTimeout(() => {
          alertBox.classList.add('hidden');
        }, 7000);
      }
    });
  }
}

/* ==========================================================================
   6. SMOOTH SCROLL SPY
   ========================================================================== */
function initSmoothScrollSpy() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentId}`) {
        item.classList.add('active');
      }
    });
  });
}

function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}

function initThemisContourParallax() {
  const section = document.getElementById('about');
  const watermarkImg = document.getElementById('themisWatermarkImg');
  if (!section || !watermarkImg) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let ticking = false;

  function update() {
    ticking = false;
    if (motion.matches) {
      watermarkImg.style.transform = 'translate3d(0, 0, 0)';
      return;
    }
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom > 0 && rect.top < vh) {
      const progress = (vh - rect.top) / (vh + rect.height);
      const translateY = (progress - 0.5) * 75; // subtle 3D parallax drift
      watermarkImg.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
    }
  }

  function schedule() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  motion.addEventListener('change', update);
  update();
}

/* ==========================================================================
   SCROLL BURN TEXT CONTROLLER (FOUNDATIONAL ETHOS CARDS)
   Replicates the exact flame-burn, chromatic aberration & grain effect
   ========================================================================== */
function initScrollBurnCards() {
  const cards = document.querySelectorAll('#vision-mission .editorial-card');
  if (!cards || cards.length === 0) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function prepareCard(card) {
    card.classList.add('scroll-burn-card');
    card.style.setProperty('--b', '0');
    card.style.setProperty('--ab', '0.35');

    // Insert SVG film grain texture overlay if missing
    if (!card.querySelector('.burn-grain-overlay')) {
      const grain = document.createElement('div');
      grain.className = 'burn-grain-overlay';
      grain.setAttribute('aria-hidden', 'true');
      card.prepend(grain);
    }

    // Target elements: card title, body paragraph, list item text
    const textNodes = card.querySelectorAll('.card-serif-title, .card-text-body, .values-list-modern li span');
    textNodes.forEach(target => {
      if (target.querySelector('.burn-glyph')) return;
      const rawText = target.textContent.trim();
      if (!rawText) return;

      target.innerHTML = '';
      const chars = Array.from(rawText);
      const frag = document.createDocumentFragment();

      chars.forEach((ch, idx) => {
        if (ch === ' ') {
          frag.appendChild(document.createTextNode(' '));
          return;
        }
        const span = document.createElement('span');
        span.className = 'burn-glyph';
        span.textContent = ch;

        // Position coordinates normalized between 0 and 1
        const x = chars.length > 1 ? idx / (chars.length - 1) : 0.5;
        const y = 0.5;
        // Two crossed waves + distance from center (exact algorithm from ScrollBurnText)
        const blob = 0.5 + 0.28 * Math.sin(x * 11.3 + y * 6.1 + 1.7) + 0.22 * Math.sin(x * 5.7 - y * 13.9 + 4.2);
        const middle = Math.hypot(x - 0.5, (y - 0.5) * 1.15) / 0.62;
        const t = Math.min(1, Math.max(0, 0.05 + 0.55 * middle + 0.45 * blob));
        span.style.setProperty('--t', t.toFixed(3));
        frag.appendChild(span);
      });

      target.appendChild(frag);
    });
  }

  cards.forEach(prepareCard);

  if (motion.matches) return;

  let ticking = false;
  function updateBurn() {
    ticking = false;
    const vh = window.innerHeight;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();

      // Card burns as it scrolls towards the top exit
      if (rect.top < vh * 0.28 && rect.bottom > 0) {
        // Exit progress between 0 (at 0.28vh) and 1 (when card moves off screen)
        const exitProgress = Math.min(1, Math.max(0, (vh * 0.28 - rect.top) / (rect.height + vh * 0.15)));
        const burn = Math.min(0.85, exitProgress * 1.0);
        const ab = 0.35 + burn * 2.6; // Aberration widens up to ~3px
        card.style.setProperty('--b', burn.toFixed(3));
        card.style.setProperty('--ab', ab.toFixed(2));
      } else {
        // Crystal clear in reading range
        card.style.setProperty('--b', '0');
        card.style.setProperty('--ab', '0.35');
      }
    });
  }

  function schedule() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateBurn);
    }
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  updateBurn();

  window.refreshScrollBurnCards = function() {
    cards.forEach(card => {
      const targets = card.querySelectorAll('.card-serif-title, .card-text-body, .values-list-modern li span');
      targets.forEach(t => {
        t.textContent = t.textContent;
      });
      prepareCard(card);
    });
    updateBurn();
  };
}

/* ==========================================================================
   10. PRACTICE DOMAINS 3D CIRCULAR ORBITAL CAROUSEL
   ========================================================================== */
function initExpertiseCircularCarousel() {
  const container = document.getElementById("expertiseCarouselContainer");
  const stage = document.getElementById("expertiseCardsStage");
  const cards = Array.from(stage ? stage.querySelectorAll(".expertise-card-editorial") : []);
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");
  const dots = Array.from(document.querySelectorAll(".carousel-dot"));
  const activeIndexEl = document.getElementById("carouselActiveIndex");
  const toggleGridViewBtn = document.getElementById("toggleGridViewBtn");
  const moreWrap = document.querySelector(".mobile-more-expertise-wrap");
  const orbitRing = document.getElementById("carouselOrbitRing");
  const centerIndicator = document.getElementById("carouselCenterIndicator");
  const controlsBar = document.getElementById("carouselControlsBar");
  const navHint = document.getElementById("carouselNavHint");

  if (!container || !stage || cards.length === 0) return;

  const VISIBLE_COUNT = 5;
  const total = cards.length;
  let activeIndex = 0;
  let isHovered = false;
  let isFocused = false;
  let autoPlayTimer = null;
  const autoPlayInterval = 4000;
  let currentMode = "carousel";

  function getRadii() {
    const w = stage.clientWidth || 1000;
    if (w < 480) {
      return { rx: Math.min(135, w * 0.33), ry: 45 };
    } else if (w < 768) {
      return { rx: Math.min(200, w * 0.34), ry: 60 };
    } else if (w < 1024) {
      return { rx: Math.min(310, w * 0.36), ry: 75 };
    } else {
      // Large screen / desktop: spread out wide!
      return { rx: Math.min(430, w * 0.38), ry: 85 };
    }
  }

  function getItemPosition(index, activeIdx, totalCount, rx, ry) {
    const offset = index - activeIdx;
    const half = Math.floor(VISIBLE_COUNT / 2);
    let adjustedOffset = offset;

    if (offset > half) adjustedOffset = offset - totalCount;
    if (offset < -half) adjustedOffset = offset + totalCount;

    if (Math.abs(adjustedOffset) > half * 2) return null;

    const angle = (adjustedOffset / VISIBLE_COUNT) * Math.PI;
    const x = Math.sin(angle) * rx;
    const y = -Math.cos(angle) * ry;

    const distance = Math.abs(adjustedOffset);
    const maxDistance = half + 1;
    const scale = Math.max(0, 1 - (distance / maxDistance) * 0.22);
    const opacity = Math.max(0.25, 1 - (distance / maxDistance) * 0.65);
    const zIndex = VISIBLE_COUNT - distance;

    return { x, y, scale, opacity, zIndex, adjustedOffset };
  }

  function updateCarousel() {
    if (currentMode !== "carousel") return;
    const { rx, ry } = getRadii();

    cards.forEach((card, i) => {
      const pos = getItemPosition(i, activeIndex, total, rx, ry);
      if (!pos) {
        card.style.opacity = "0";
        card.style.pointerEvents = "none";
        card.style.zIndex = "0";
        card.classList.remove("active");
        card.setAttribute("aria-selected", "false");
        return;
      }

      const isActive = (i === activeIndex);
      card.style.transform = `translate3d(calc(-50% + ${pos.x.toFixed(1)}px), calc(-50% + ${pos.y.toFixed(1)}px), 0) scale(${pos.scale.toFixed(3)})`;
      card.style.opacity = pos.opacity.toFixed(2);
      card.style.zIndex = pos.zIndex;
      card.style.pointerEvents = "auto";

      if (isActive) {
        card.classList.add("active");
        card.setAttribute("aria-selected", "true");
      } else {
        card.classList.remove("active");
        card.setAttribute("aria-selected", "false");
      }
    });

    if (activeIndexEl) {
      activeIndexEl.textContent = String(activeIndex + 1).padStart(2, "0");
    }

    // Smooth filling dot progress
    dots.forEach((dot, i) => {
      const fillEl = dot.querySelector(".dot-progress-fill");
      if (i === activeIndex) {
        dot.classList.add("active");
        dot.setAttribute("aria-selected", "true");
        if (fillEl) {
          fillEl.style.animation = "none";
          void fillEl.offsetWidth; // trigger reflow
          fillEl.style.animation = `dotFillProgress ${autoPlayInterval}ms linear forwards`;
        }
      } else {
        dot.classList.remove("active");
        dot.setAttribute("aria-selected", "false");
        if (fillEl) {
          fillEl.style.animation = "none";
          fillEl.style.width = "0%";
        }
      }
    });
  }

  function goTo(index) {
    activeIndex = ((index % total) + total) % total;
    updateCarousel();
  }

  function next() {
    goTo(activeIndex + 1);
  }

  function prev() {
    goTo(activeIndex - 1);
  }

  function startTimer() {
    stopTimer();
    if (currentMode !== "carousel" || isHovered || isFocused) return;
    autoPlayTimer = setInterval(next, autoPlayInterval);
  }

  function stopTimer() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Navigation events
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      prev();
      startTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      next();
      startTimer();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      goTo(i);
      startTimer();
    });
  });

  // Card click routing
  cards.forEach((card, i) => {
    card.addEventListener("click", (e) => {
      if (currentMode === "carousel") {
        if (i !== activeIndex) {
          e.preventDefault();
          e.stopPropagation();
          goTo(i);
          startTimer();
        } else {
          // Active card clicked: trigger AI Legal Advisor
          const query = card.getAttribute("data-advisor-query");
          const toggleBtn = document.getElementById("advisorToggleBtn");
          if (toggleBtn) toggleBtn.classList.remove("minimized");
          if (typeof openAdvisorChat === "function") openAdvisorChat();
          if (query && typeof handleQuickAdvisorQuery === "function") {
            handleQuickAdvisorQuery(query);
          }
        }
      }
    });
  });

  // Hover & Focus Auto-Play Controls (pauses timer and freezes dot progress animation)
  container.addEventListener("mouseenter", () => {
    isHovered = true;
    container.classList.add("is-paused");
    stopTimer();
  });

  container.addEventListener("mouseleave", () => {
    isHovered = false;
    container.classList.remove("is-paused");
    startTimer();
  });

  container.addEventListener("focusin", () => {
    isFocused = true;
    container.classList.add("is-paused");
    stopTimer();
  });

  container.addEventListener("focusout", () => {
    isFocused = false;
    container.classList.remove("is-paused");
    startTimer();
  });

  // Keyboard navigation
  container.addEventListener("keydown", (e) => {
    if (currentMode !== "carousel") return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
      startTimer();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
      startTimer();
    }
  });

  // Touch Swipe gestures
  let touchStartX = 0;
  let touchStartY = 0;

  stage.addEventListener("touchstart", (e) => {
    if (currentMode !== "carousel") return;
    if (e.touches && e.touches.length > 0) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isHovered = true;
      container.classList.add("is-paused");
      stopTimer();
    }
  }, { passive: true });

  stage.addEventListener("touchend", (e) => {
    if (currentMode !== "carousel") return;
    if (e.changedTouches && e.changedTouches.length > 0) {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      const deltaY = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          next();
        } else {
          prev();
        }
      }
      isHovered = false;
      container.classList.remove("is-paused");
      startTimer();
    }
  }, { passive: true });

  // Single Grid View Toggle Button
  if (toggleGridViewBtn) {
    toggleGridViewBtn.addEventListener("click", () => {
      const isGridNow = (currentMode === "carousel");
      currentMode = isGridNow ? "grid" : "carousel";

      if (isGridNow) {
        toggleGridViewBtn.classList.add("active");
        toggleGridViewBtn.setAttribute("aria-pressed", "true");

        stage.classList.remove("mode-carousel");
        stage.classList.add("mode-grid");

        if (orbitRing) orbitRing.style.display = "none";
        if (centerIndicator) centerIndicator.style.display = "none";
        if (controlsBar) controlsBar.style.display = "none";
        if (navHint) navHint.style.display = "none";
        if (moreWrap) moreWrap.style.display = "";

        cards.forEach(card => {
          card.style.transform = "";
          card.style.opacity = "";
          card.style.zIndex = "";
          card.style.pointerEvents = "";
          card.classList.remove("active");
        });

        stopTimer();
      } else {
        toggleGridViewBtn.classList.remove("active");
        toggleGridViewBtn.setAttribute("aria-pressed", "false");

        stage.classList.remove("mode-grid");
        stage.classList.add("mode-carousel");

        if (orbitRing) orbitRing.style.display = "";
        if (centerIndicator) centerIndicator.style.display = "";
        if (controlsBar) controlsBar.style.display = "";
        if (navHint) navHint.style.display = "";
        if (moreWrap) moreWrap.style.display = "none";

        updateCarousel();
        startTimer();
      }
    });

    // Default: Carousel mode active, hide mobile more button in carousel mode
    if (moreWrap) moreWrap.style.display = "none";
  }

  // Window resize handler
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (currentMode === "carousel") {
        updateCarousel();
      }
    }, 120);
  }, { passive: true });

  // Initial render
  updateCarousel();
  startTimer();
}
