/**
 * ქეთევან უტიაშვილის საადვოკატო ბიურო (თბილისი, ჭავჭავაძის გამზ. 26)
 * GALLANT & EDITORIAL INTERACTIVE CONTROLLER
 * Zero Emojis • Pure Hairline Contour SVGs • Symmetrical & Academic
 */

document.addEventListener('DOMContentLoaded', () => {
  initTranslations();
  initCalendar();
  initBookingModal();
  initCaseWizard();
  initLegalAdvisor();
  initMobileNav();
  initContactForms();
  initSmoothScrollSpy();
  initThemisContourParallax();
  initScrollBurnCards();
  initChronologicalTimelineSpine();
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
    "hero.card_practice": "სამოქალაქო & ბიზნეს დავები",
    "hero.card_location": "თბილისი, საქართველო",
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
    "vision.card3_badge": "ეთიკური უზენაესობა",
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
    "cal.launch_title": "ონლაინ კალენდარი & ვიზიტის დაჯავშნა",
    "cal.launch_desc": "შეარჩიეთ თქვენთვის ხელსაყრელი დღე და საათი ქეთევან უტიაშვილის ოფიციალურ სამუშაო განრიგში.",
    "cal.btn_open_modal": "კალენდრის გახსნა & დაჯავშნა",
    "cal.select_time": "სასურველი დრო:",
    "cal.time_placeholder": "ჩაწერეთ სასურველი დრო (მაგ: 12:00, 15:30...)",
    "cal.time_hint": "ჩაწერეთ თქვენთვის მოსახერხებელი ნებისმიერი საათი",
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
    "map.eyebrow": "CENTRAL OFFICE MAP",
    "map.title": "თბილისის ცენტრალური ოფისის ლოკაცია",
    "map.addr": "ილია ჭავჭავაძის გამზ. #26",
    "map.addr_full": "ილია ჭავჭავაძის გამზ. #26, ვაკე, თბილისი 0179",
    "map.parking": "ვაკე, თბილისი. პარკირება ხელმისაწვდომია ოფისის მიმდებარე ტერიტორიაზე.",
    "map.open_gmaps": "Google Maps-ში გახსნა ↗",
    "footer.brand_title": "ქეთევან უტიაშვილი | საადვოკატო ბიურო",
    "footer.brand_sub": "— საადვოკატო ბიურო • საქართველო —",
    "footer.desc": "საქართველოს ადვოკატთა ასოციაციის (GBA) აღმასრულებელი საბჭოს წევრი. საადვოკატო წარმომადგენლობა მთელი საქართველოს მასშტაბით (ცენტრალური ოფისი: თბილისი).",
    "footer.nav_title": "ნავიგაცია",
    "footer.serv_title": "სერვისები",
    "footer.accred_title": "აკრედიტაცია & ეთიკა",
    "footer.b1": "საქართველოს ადვოკატთა ასოციაცია (GBA)",
    "footer.b2": "საქართველოს მედიატორთა ასოციაცია (MAG)",
    "footer.b3": "ბავშვთა უფლებათა დაცვის ცენტრი",
    "footer.b4": "კონფიდენციალურობის გარანტია",
    "footer.privacy": "კონფიდენციალურობის პოლიტიკა",
    "footer.terms": "მომსახურების პირობები",
    "footer.gba_cert": "GBA სერტიფიკაცია",
    "footer.mediators": "Mediators Association",
    "footer.registry": "ადვოკატთა რეესტრი",
    "footer.copy": "© 2003 – 2026 ქეთევან უტიაშვილის საადვოკატო ბიურო. ყველა უფლება დაცულია.",
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
    "adv.btn_start": "დაწყება",
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
    "hero.card_practice": "Civil & Business Disputes",
    "hero.card_location": "Tbilisi, Georgia",
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
    "vision.card3_badge": "Ethical Supremacy",
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
    "cal.launch_title": "Online Calendar & Appointment Booking",
    "cal.launch_desc": "Choose a convenient date and time in attorney Ketevan Utiashvili's official schedule.",
    "cal.btn_open_modal": "Open Calendar & Book Visit",
    "cal.select_time": "Preferred Time:",
    "cal.time_placeholder": "Enter preferred time (e.g. 12:00, 15:30...)",
    "cal.time_hint": "Specify any convenient time slot",
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
    "map.eyebrow": "CENTRAL OFFICE MAP",
    "map.title": "Central Tbilisi Office Location",
    "map.addr": "26 Ilia Chavchavadze Ave.",
    "map.addr_full": "26 Ilia Chavchavadze Ave., Vake, Tbilisi 0179",
    "map.parking": "Vake, Tbilisi. Parking is available around the office premises.",
    "map.open_gmaps": "Open in Google Maps ↗",
    "footer.brand_title": "Ketevan Utiashvili | Law Firm",
    "footer.brand_sub": "— Law Office • Georgia —",
    "footer.desc": "Executive Board Member of the Georgian Bar Association (GBA), former Civil Law Committee Chair, and Accredited Mediator. Legal practice since 2003 nationwide (Central Office: Tbilisi).",
    "footer.nav_title": "Navigation",
    "footer.serv_title": "Services",
    "footer.accred_title": "Accreditation & Ethics",
    "footer.b1": "Georgian Bar Association (GBA)",
    "footer.b2": "Mediators Association of Georgia (MAG)",
    "footer.b3": "Child Rights Protection Center",
    "footer.b4": "Strict Confidentiality Guaranteed",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.gba_cert": "GBA Certification",
    "footer.mediators": "Mediators Association",
    "footer.registry": "Bar Registry",
    "footer.copy": "© 2003 – 2026 Ketevan Utiashvili Law Office. All rights reserved.",
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
    "adv.btn_start": "Start",
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
    "hero.card_practice": "Гражданские и бизнес-споры",
    "hero.card_location": "Тбилиси, Грузия",
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
    "vision.card3_badge": "Этическое верховенство",
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
    "cal.launch_title": "Онлайн-календарь и бронирование визита",
    "cal.launch_desc": "Выберите удобный день и время в официальном расписании адвоката Кетеван Утиашвили.",
    "cal.btn_open_modal": "Открыть календарь и записаться",
    "cal.select_time": "Желаемое время:",
    "cal.time_placeholder": "Укажите желаемое время (напр: 12:00, 15:30...)",
    "cal.time_hint": "Укажите любое удобное для вас время",
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
    "map.eyebrow": "КАРТА ЦЕНТРАЛЬНОГО ОФИСА",
    "map.title": "Локация центрального офиса в Тбилиси",
    "map.addr": "просп. Ильи Чавчавадзе 26",
    "map.addr_full": "просп. Ильи Чавчавадзе 26, Ваке, Тбилиси 0179",
    "map.parking": "Ваке, Тбилиси. Парковка доступна на прилегающей территории.",
    "map.open_gmaps": "Открыть в Google Maps ↗",
    "footer.brand_title": "Кетеван Утиашвили | Адвокатское бюро",
    "footer.brand_sub": "— Адвокатское бюро • Грузия —",
    "footer.desc": "Член Исполнительного совета Палаты адвокатов Грузии (GBA), экс-председатель Гражданского комитета и аккредитованный медиатор. Практика с 2003 года по всей Грузии (Центральный офис: Тбилиси).",
    "footer.nav_title": "Навигация",
    "footer.serv_title": "Услуги",
    "footer.accred_title": "Аккредитация и этика",
    "footer.b1": "Палата адвокатов Грузии (GBA)",
    "footer.b2": "Ассоциация медиаторов Грузии (MAG)",
    "footer.b3": "Центр защиты прав детей",
    "footer.b4": "Гарантия конфиденциальности",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия обслуживания",
    "footer.gba_cert": "Сертификация GBA",
    "footer.mediators": "Mediators Association",
    "footer.registry": "Реестр адвокатов",
    "footer.copy": "© 2003 – 2026 Адвокатское бюро Кетеван Утиашвили. Все права защищены.",
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
    "adv.btn_start": "Начать",
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
let selTime = "12:00";

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

  const customTimeInput = document.getElementById('bookingCustomTime');
  if (customTimeInput) {
    customTimeInput.addEventListener('input', () => {
      selTime = customTimeInput.value.trim() || '—';
      document.querySelectorAll('.quick-time-chip, .time-pill').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-time') === selTime);
      });
      updateBookingSlotDisplay();
    });
  }

  if (slotsGroup) {
    slotsGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.quick-time-chip, .time-pill');
      if (!btn) return;
      document.querySelectorAll('.quick-time-chip, .time-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selTime = btn.getAttribute('data-time') || btn.textContent.trim();
      if (customTimeInput) {
        customTimeInput.value = selTime;
      }
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
      const customTime = document.getElementById('bookingCustomTime')?.value.trim();
      const finalTime = customTime || selTime || '12:00';
      const dateTimeStr = `${selDay} ${monthStr}, ${calYear} • ${finalTime}`;

      const currentBookingData = {
        name, phone, email, serviceText, formatDesc, topic, refCode, dateTimeStr
      };

      // 1. DO NOT close booking window - keep it open and display confirmation receipt
      const receiptHTML = `
        <div style="margin-bottom:0.4rem;"><strong>ჯავშნის კოდი:</strong> <span style="font-family:monospace; color:#721927; font-weight:700;">${refCode}</span></div>
        <div style="margin-bottom:0.4rem;"><strong>კლიენტი:</strong> ${escapeHtml(name)}</div>
        <div style="margin-bottom:0.4rem;"><strong>ტელეფონი:</strong> ${escapeHtml(phone)}</div>
        ${email && email !== 'არ არის მითითებული' && email !== '—' ? `<div style="margin-bottom:0.4rem;"><strong>ელ-ფოსტა:</strong> ${escapeHtml(email)}</div>` : ''}
        ${serviceText ? `<div style="margin-bottom:0.4rem;"><strong>მიმართულება:</strong> ${escapeHtml(serviceText)}</div>` : ''}
        <div style="margin-bottom:0.4rem;"><strong>თარიღი & დრო:</strong> ${dateTimeStr}</div>
        <div style="margin-bottom:0.4rem;"><strong>ფორმატი & მისამართი:</strong> ${formatDesc}</div>
        <div style="margin-bottom:0.4rem;"><strong>დავის საკითხი:</strong> ${escapeHtml(topic)}</div>
        <div><strong>ადვოკატი:</strong> ქეთევან უტიაშვილი (GBA აღმასრულებელი საბჭოს წევრი)</div>
      `;

      const receiptEl = document.getElementById('confirmedReceiptData');
      if (receiptEl) receiptEl.innerHTML = receiptHTML;
      appForm.classList.add('hidden');
      if (successBox) successBox.classList.remove('hidden');

      // 2. Transfer filled booking details to AI Advisor Chat without closing the booking window
      if (typeof window.kuOpenAdvisorWithBooking === 'function') {
        const shouldOpenWindow = window.innerWidth > 768;
        window.kuOpenAdvisorWithBooking(currentBookingData, { openChat: shouldOpenWindow });
      }

      // Reset form fields
      appForm.reset();

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

/* ==========================================================================
   BOOKING POPUP MODAL (FORTOCHKA ON TRANSPARENT WHITE BACKDROP)
   ========================================================================== */
function initBookingModal() {
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('bookingModalCloseBtn');
  const backdrop = document.getElementById('bookingModalBackdrop');
  if (!modal) return;

  function openBookingModal(e) {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('booking-modal-open');
  }

  function closeBookingModal(e) {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('booking-modal-open');
  }

  window.openBookingModal = openBookingModal;
  window.closeBookingModal = closeBookingModal;

  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
  if (backdrop) backdrop.addEventListener('click', closeBookingModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeBookingModal(e);
    }
  });

  // Attach to all booking CTAs and buttons across the site
  document.querySelectorAll('a[href="#calendar"], .open-booking-modal-trigger, #forwardCaseToCalendarBtn, a[data-nav-target="calendar"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      openBookingModal(e);
    });
  });

  // If user opened page directly with #calendar or #booking hash:
  if (window.location.hash === '#calendar' || window.location.hash === '#booking') {
    setTimeout(openBookingModal, 250);
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
  const customTimeInput = document.getElementById('bookingCustomTime');
  const monthStr = getCurrentMonthName(calMonth);

  if (customTimeInput && customTimeInput.value.trim()) {
    selTime = customTimeInput.value.trim();
  }

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
    // ჩატის გახსნისას, თუ ცარიელია, ბოტი თვითონ მიესალმება
    if (chatBody && chatBody.children.length === 0) {
      generateAdvisorResponse('გამარჯობა');
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

  window.kuOpenAdvisorWithBooking = function(b, options = {}) {
    if (!b) return;
    const safeRef = escapeHtml(b.refCode || '');

    // Prevent duplicate booking receipt in chat if already appended
    if (chatBody && safeRef && !chatBody.querySelector(`[data-booking-ref="${safeRef}"]`)) {
      const safeName = escapeHtml(b.name || 'კლიენტი');
      const safePhone = escapeHtml(b.phone || '—');
      const safeEmail = escapeHtml(b.email || '—');
      const safeDate = escapeHtml(b.dateTimeStr || '');
      const safeFormat = escapeHtml(b.formatDesc || '');
      const safeService = escapeHtml(b.serviceText || '');
      const safeTopic = escapeHtml(b.topic || '');

      const bookingCardHTML = `
        <div class="chat-booking-receipt-card" data-booking-ref="${safeRef}">
          <div class="chat-booking-header">
            <span class="chat-booking-tag">✓ ჯავშანი მიღებულია</span>
            <span class="chat-booking-code">${safeRef}</span>
          </div>
          <div class="chat-booking-rows">
            <div class="chat-booking-row"><strong>ჯავშნის კოდი:</strong> <span style="font-family:monospace; color:#721927; font-weight:700;">${safeRef}</span></div>
            <div class="chat-booking-row"><strong>კლიენტი:</strong> <span>${safeName}</span></div>
            <div class="chat-booking-row"><strong>ტელეფონი:</strong> <span>${safePhone}</span></div>
            ${safeEmail && safeEmail !== 'არ არის მითითებული' && safeEmail !== '—' ? `<div class="chat-booking-row"><strong>ელ-ფოსტა:</strong> <span>${safeEmail}</span></div>` : ''}
            ${safeService ? `<div class="chat-booking-row"><strong>მიმართულება:</strong> <span>${safeService}</span></div>` : ''}
            <div class="chat-booking-row"><strong>თარიღი & დრო:</strong> <span>${safeDate}</span></div>
            <div class="chat-booking-row"><strong>ფორმატი & მისამართი:</strong> <span>${safeFormat}</span></div>
            <div class="chat-booking-row"><strong>დავის საკითხი:</strong> <span>${safeTopic}</span></div>
            <div class="chat-booking-row"><strong>ადვოკატი:</strong> <span>ქეთევან უტიაშვილი (GBA აღმასრულებელი საბჭოს წევრი)</span></div>
          </div>
          <div class="chat-booking-footer-note">
            მონაცემები გადაეცა ადვოკატის სამუშაო განრიგს. თუ გაქვთ შეკითხვა ან გსურთ საქმის დეტალების დაზუსტება, შეგიძლიათ მომწეროთ პირდაპირ აქ.
          </div>
        </div>
      `;

      appendChatBubble(bookingCardHTML, 'system');
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    if (options.openChat !== false) {
      restorePill();
      openAdvisorChat();
      if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
    }
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
    chatBody.innerHTML = '';
    const sid = 'web-' + Date.now() + '-' + Math.random().toString(36).slice(2, 10);
    try { localStorage.setItem('ku_advisor_sid', sid); } catch (e) {}
    if (inputField) {
      inputField.value = '';
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
    if (modal.classList.contains('hidden') || modal.classList.contains('closing')) return;

    // Do NOT close if clicked inside the modal, the floating widget, or the toggle button
    if (e.target.closest('#advisorModal') || 
        e.target.closest('#advisorWidget') || 
        modal.contains(e.target) || 
        toggleBtn.contains(e.target) || 
        (mobCenterChatBtn && (mobCenterChatBtn === e.target || mobCenterChatBtn.contains(e.target)))) {
      return;
    }

    // Do NOT close if the clicked target was detached from the DOM during event handling
    if (!document.body.contains(e.target)) {
      return;
    }

    closeAdvisorChat();
  });

  function handleQuickAdvisorQuery(queryTitle) {
    if (!queryTitle) return;
    restorePill();
    openAdvisorChat();
    if (inputField) {
      inputField.value = queryTitle;
      setTimeout(() => {
        inputField.focus();
        try {
          inputField.setSelectionRange(inputField.value.length, inputField.value.length);
        } catch (e) {}
      }, 100);
    }
  }
  window.handleQuickAdvisorQuery = handleQuickAdvisorQuery;

  // Practice Area Cards -> Direct Route to On-Site AI Legal Advisor!
  // Whichever card the user clicks, write its title in the chat input
  document.querySelectorAll('.expertise-card-editorial[data-advisor-query]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const domainTitle = card.querySelector('.domain-title')?.textContent?.trim() || card.getAttribute('data-advisor-query') || '';
      handleQuickAdvisorQuery(domainTitle);
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

  function appendChatBubble(content, sender = 'system') {
    const row = document.createElement('div');
    row.className = `chat-row ${sender}`;
    row.innerHTML = `<div class="chat-bubble"><p>${content}</p></div>`;
    chatBody.appendChild(row);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  const ADVISOR_WEBHOOK = window.N8N_CHAT_WEBHOOK || 'https://meticulous-oyster.pikapod.net/webhook/utiashvili-website-chat';

  async function generateAdvisorResponse(query) {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-row system';
    typingDiv.innerHTML = `<div class="chat-bubble" style="color:#721927; font-style:italic;">ასისტენტი ამუშავებს შეტყობინებას...</div>`;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

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
        body: JSON.stringify({
          message: query,
          sessionId: sid,
          lang: currentLang || 'ka'
        })
      });

      if (typingDiv && typingDiv.parentNode) typingDiv.remove();

      if (!resp.ok) {
        throw new Error(`HTTP error ${resp.status}`);
      }

      const raw = await resp.text();
      let replyText = '';

      try {
        const data = JSON.parse(raw);
        if (Array.isArray(data) && data.length > 0) {
          replyText = data[0].output || data[0].reply || data[0].text || data[0].message || data[0].response || JSON.stringify(data[0]);
        } else if (typeof data === 'object' && data !== null) {
          replyText = data.output || data.reply || data.text || data.message || data.response || '';
        } else if (typeof data === 'string') {
          replyText = data;
        }
      } catch (jsonErr) {
        replyText = raw;
      }

      if (replyText) {
        const safe = String(replyText)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/\n/g, '<br>');
        appendChatBubble(safe, 'system');
      } else {
        appendChatBubble('პასუხი ვერ მიიღო სერვერიდან.', 'system');
      }
    } catch (err) {
      if (typingDiv && typingDiv.parentNode) typingDiv.remove();
      appendChatBubble('კავშირის შეცდომა. ბოტი ჯერ არ არის მიბმული ან სერვერი დროებით მიუწვდომელია.', 'system');
    }
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
   SCROLL BURN TEXT CONTROLLER (FOUNDATIONAL ETHOS & ADVOCATE QUOTE)
   Replicates the exact flame-burn, chromatic aberration & grain effect
   and inverted entrance unburn for the principal attorney's motto quote.
   ========================================================================== */
function initScrollBurnCards() {
  const cards = document.querySelectorAll('#vision-mission .editorial-card');
  const quoteCard = document.querySelector('.quote-burn-card');
  if ((!cards || cards.length === 0) && !quoteCard) return;

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

        // Position coordinates normalized between 0 and 1 (inverted wave)
        const x = chars.length > 1 ? 1 - (idx / (chars.length - 1)) : 0.5;
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

  function prepareQuoteCard(qCard) {
    if (!qCard) return;
    qCard.style.setProperty('--b', '0');
    qCard.style.setProperty('--ab', '0.35');

    if (!qCard.querySelector('.burn-grain-overlay')) {
      const grain = document.createElement('div');
      grain.className = 'burn-grain-overlay';
      grain.setAttribute('aria-hidden', 'true');
      qCard.prepend(grain);
    }

    const target = qCard.querySelector('p');
    if (!target || target.querySelector('.burn-glyph')) return;
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

      // Inverted progression (right-to-left wave) for quote
      const x = chars.length > 1 ? 1 - (idx / (chars.length - 1)) : 0.5;
      const y = 0.5;
      const blob = 0.5 + 0.28 * Math.sin(x * 11.3 + y * 6.1 + 1.7) + 0.22 * Math.sin(x * 5.7 - y * 13.9 + 4.2);
      const middle = Math.hypot(x - 0.5, (y - 0.5) * 1.15) / 0.62;
      const t = Math.min(1, Math.max(0, 0.05 + 0.55 * middle + 0.45 * blob));
      span.style.setProperty('--t', t.toFixed(3));
      frag.appendChild(span);
    });

    target.appendChild(frag);
  }

  cards.forEach(prepareCard);
  if (quoteCard) prepareQuoteCard(quoteCard);

  if (motion.matches) return;

  let ticking = false;
  function updateBurn() {
    ticking = false;
    const vh = window.innerHeight;

    // Inverted Entrance Unburn for Ethos Cards (Materializes into focus from bottom)
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top > vh * 0.28 && rect.top < vh * 1.05) {
        // Enters burned from below, unburns/resolves to crystal clear as it reaches reading zone
        const entryProgress = Math.min(1, Math.max(0, (rect.top - vh * 0.28) / (vh * 0.65)));
        const burn = Math.min(0.85, entryProgress * 0.95);
        const ab = 0.35 + burn * 2.4;
        card.style.setProperty('--b', burn.toFixed(3));
        card.style.setProperty('--ab', ab.toFixed(2));
      } else {
        // Crystal clear in reading position or once scrolled past
        card.style.setProperty('--b', '0');
        card.style.setProperty('--ab', '0.35');
      }
    });

    // Inverted Entrance Unburn for Quote Card (Materializes into focus from bottom)
    if (quoteCard) {
      const qRect = quoteCard.getBoundingClientRect();
      if (qRect.top > vh * 0.32 && qRect.top < vh * 1.05) {
        // Enters burned from below, unburns/resolves to crystal clear as it reaches reading zone
        const entryProgress = Math.min(1, Math.max(0, (qRect.top - vh * 0.32) / (vh * 0.65)));
        const burn = Math.min(0.85, entryProgress * 0.95);
        const ab = 0.35 + burn * 2.2;
        quoteCard.style.setProperty('--b', burn.toFixed(3));
        quoteCard.style.setProperty('--ab', ab.toFixed(2));
      } else {
        // Crystal clear in reading position
        quoteCard.style.setProperty('--b', '0');
        quoteCard.style.setProperty('--ab', '0.35');
      }
    }
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
    if (quoteCard) {
      const qp = quoteCard.querySelector('p');
      if (qp) qp.textContent = qp.textContent;
      prepareQuoteCard(quoteCard);
    }
    updateBurn();
  };
}

/* ==========================================================================
   CHRONOLOGICAL SCROLL SPINE & DYNAMIC YEAR LIFT CONTROLLER
   Tracks scroll progression from bottom (2003) to top (2025) as a continuous
   luminous vertical line, lifting and emphasizing years synchronously with scroll.
   ========================================================================== */
function initChronologicalTimelineSpine() {
  const list = document.getElementById('recordTimelineList');
  if (!list) return;

  const spineFill = document.getElementById('timelineSpineFill');
  const spinePointer = document.getElementById('timelineSpinePointer');
  const items = Array.from(list.querySelectorAll('.record-item'));
  if (items.length === 0) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let ticking = false;

  function updateSpine() {
    ticking = false;
    const vh = window.innerHeight;
    const listRect = list.getBoundingClientRect();

    // The chronology progresses as the user scrolls through the timeline.
    // Fill starts when list enters from bottom (vh * 0.92) and completes when scrolled into full view (vh * 0.28)
    const enterThreshold = vh * 0.92;
    const exitThreshold = vh * 0.28;
    const totalSpan = listRect.height + (enterThreshold - exitThreshold);
    const scrolledSpan = enterThreshold - listRect.top;
    const rawProgress = Math.min(1, Math.max(0, scrolledSpan / totalSpan));

    // Fill line grows upwards from bottom to top (bottom: 0%, height: 0% -> 100%)
    const fillPercent = rawProgress * 100;
    if (spineFill) {
      spineFill.style.height = `${fillPercent.toFixed(1)}%`;
    }
    if (spinePointer) {
      spinePointer.style.bottom = `${fillPercent.toFixed(1)}%`;
      spinePointer.style.opacity = rawProgress > 0.03 ? '1' : '0';
    }

    // Synchronize each individual year lift with scroll position
    items.forEach((item, idx) => {
      const itemRect = item.getBoundingClientRect();
      const yearEl = item.querySelector('.record-years');

      // Center of this timeline card relative to viewport
      const itemCenter = itemRect.top + itemRect.height / 2;
      // Focus reading zone: prime focus is around vh * 0.50
      const distFromFocus = Math.abs(itemCenter - vh * 0.50);
      const focusRange = vh * 0.30;

      // Smooth bell-curve lift factor (0 to 1)
      const focusFactor = Math.max(0, 1 - (distFromFocus / focusRange));
      const liftPixels = motion.matches ? 0 : (Math.pow(focusFactor, 1.5) * 6.5); // smoothly lifts up to 6.5px!

      // Check if the bottom-to-top spine fill has reached this item:
      // In bottom-to-top coordinates, item's center distance from the bottom of list:
      const itemBottomPos = listRect.bottom - itemCenter;
      const fillHeightPx = (rawProgress) * listRect.height;
      const hasReached = fillHeightPx >= (itemBottomPos - 12);

      if (yearEl) {
        yearEl.style.setProperty('--year-lift', `${liftPixels.toFixed(2)}px`);
        if (liftPixels > 0.8) {
          yearEl.classList.add('is-lifted');
        } else {
          yearEl.classList.remove('is-lifted');
        }
      }

      if (hasReached || liftPixels > 1.2) {
        item.classList.add('timeline-passed');
      } else {
        item.classList.remove('timeline-passed');
      }
    });
  }

  function schedule() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateSpine);
    }
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  updateSpine();
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
      return { rx: Math.min(125, w * 0.30), ry: 28 };
    } else if (w < 768) {
      return { rx: Math.min(180, w * 0.33), ry: 45 };
    } else if (w < 1024) {
      return { rx: Math.min(300, w * 0.36), ry: 65 };
    } else {
      // Large screen / desktop: spread out wide!
      return { rx: Math.min(450, w * 0.40), ry: 85 };
    }
  }

  function getItemPosition(index, activeIdx, totalCount, rx, ry, isMobile) {
    const offset = index - activeIdx;
    const half = Math.floor(VISIBLE_COUNT / 2);
    let adjustedOffset = offset;

    if (offset > half) adjustedOffset = offset - totalCount;
    if (offset < -half) adjustedOffset = offset + totalCount;

    if (Math.abs(adjustedOffset) > half * 2) return null;

    const distance = Math.abs(adjustedOffset);
    if (isMobile && distance > 1) return null;

    const angle = (adjustedOffset / VISIBLE_COUNT) * Math.PI;
    const x = Math.sin(angle) * rx;
    const y = -Math.cos(angle) * ry;

    let scale, opacity;
    if (isMobile) {
      scale = (distance === 0) ? 1 : 0.76;
      opacity = (distance === 0) ? 1 : 0.16;
    } else {
      const maxDistance = half + 1;
      scale = Math.max(0, 1 - (distance / maxDistance) * 0.22);
      opacity = Math.max(0.25, 1 - (distance / maxDistance) * 0.65);
    }
    const zIndex = VISIBLE_COUNT - distance;

    return { x, y, scale, opacity, zIndex, adjustedOffset };
  }

  function updateCarousel() {
    if (currentMode !== "carousel") return;
    const { rx, ry } = getRadii();
    const isMobile = (window.innerWidth < 768);

    cards.forEach((card, i) => {
      const pos = getItemPosition(i, activeIndex, total, rx, ry, isMobile);
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
          // Active card clicked: trigger AI Legal Advisor with card title written in
          const domainTitle = card.querySelector('.domain-title')?.textContent?.trim() || card.getAttribute("data-advisor-query") || "";
          const toggleBtn = document.getElementById("advisorToggleBtn");
          if (toggleBtn) toggleBtn.classList.remove("minimized");
          if (typeof handleQuickAdvisorQuery === "function") {
            handleQuickAdvisorQuery(domainTitle);
          } else if (typeof openAdvisorChat === "function") {
            openAdvisorChat();
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
