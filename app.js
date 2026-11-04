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
  initThemisPhotoScroll();
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
    "nav.contact": "კონტაქტი",
    "nav.book_cta": "ვიზიტის დაჯავშნა",
    "hero.badge": "20+ წლიანი უწყვეტი საადვოკატო პრაქტიკა • თბილისი",
    "hero.title": "აკადემიური სიზუსტე, სტრატეგიული დაცვა და უმაღლესი საადვოკატო ეთიკა",
    "hero.desc": "საქართველოს ადვოკატთა ასოციაციის (GBA) აღმასრულებელი საბჭოს მოქმედი წევრი, ყოფილი სამოქალაქო კომიტეტის თავმჯდომარე და აკრედიტებული მედიატორი — ქეთევან უტიაშვილი გთავაზობთ საადვოკატო წარმომადგენლობას თბილისის საქალაქო, სააპელაციო და უზენაეს სასამართლოებში.",
    "hero.cta_evaluate": "საქმის პირველადი შეფასება",
    "hero.cta_book": "კონსულტაციის დაჯავშნა",
    "hero.metric1": "უწყვეტი ბიურო",
    "hero.metric2": "აღმასრულებელი საბჭო",
    "hero.metric3": "მოგებული & მორიგებული",
    "hero.metric4": "კონფიდენციალურობა",
    "hero.card_name": "ქეთევან უტიაშვილი",
    "hero.card_role": "ადვოკატი • GBA აღმასრულებელი საბჭო",
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
    "case.assign_title": "გადაეცით ეს ბარათი ქეთევან უტიაშვილს განსახილველად:",
    "case.btn_send": "საქმის გადაგზავნა ადვოკატთან",
    "case.btn_edit": "მონაცემების ჩასწორება",
    "case.btn_direct_book": "ვიზიტის დაჯავშნა კალენდარში",
    "cal.select_time": "ხელმისაწვდომი საათები:",
    "cal.sum_lawyer": "ადვოკატი:",
    "cal.sum_slot": "არჩეული დრო:",
    "cal.format_office": "ვიზიტი ოფისში",
    "cal.format_office_sub": "",
    "cal.format_online": "ონლაინ კონსულტაცია",
    "cal.format_online_sub": "",
    "cal.field_name": "სახელი და გვარი *",
    "cal.field_phone": "ტელეფონის ნომერი *",
    "cal.field_email": "ელექტრონული ფოსტა",
    "cal.field_topic": "დავის მოკლე აღწერა / სასაუბრო თემა",
    "cal.btn_confirm": "ვიზიტის დადასტურება",
    "cal.succ_title": "ვიზიტი წარმატებით დაიჯავშნა!",
    "cal.succ_desc": "თქვენი კონსულტაცია შეტანილია ადვოკატის ოფიციალურ განრიგში.",
    "cal.btn_new": "ახალი ჯავშნის გაკეთება",
    "cont.c1_cap": "ცენტრალური ოფისი",
    "cont.c1_val": "ქ. თბილისი, ილია ჭავჭავაძის გამზირი #26",
    "cont.c1_sub": "ვაკე, თბილისი, საქართველო",
    "cont.c2_cap": "პირდაპირი ხაზი & WhatsApp",
    "cont.c2_sub": "სამუშაო საათები: 10:00 - 18:00 (ორშაბათი - პარასკევი)",
    "cont.c3_cap": "ოფიციალური ელ-ფოსტა",
    "cont.form_title": "გაგზავნეთ შეტყობინება ბიუროში",
    "cont.form_sub": "ადვოკატი გაეცნობა თქვენს საკითხს და გიპასუხებთ 24 საათის განმავლობაში.",
    "cont.f_name": "სახელი, გვარი *",
    "cont.f_phone": "ტელეფონი *",
    "cont.f_service": "სასურველი მიმართულება",
    "cont.f_msg": "საქმის მოკლე შინაარსი",
    "cont.f_btn": "შეტყობინების გაგზავნა",
    "adv.btn_txt": "იურიდიული მრჩეველი",
    "adv.btn_sub": "ონლაინ ასისტენტი",
    "adv.modal_title": "ინტეგრირებული იურიდიული მრჩეველი",
    "adv.welcome_msg": "მოგესალმებით. მე ვარ ქეთევან უტიაშვილის საადვოკატო ბიუროს ვირტუალური ასისტენტი. ცენტრალური ოფისი მდებარეობს თბილისში, ილია ჭავჭავაძის გამზ. #26-ში. რით შემიძლია დაგეხმაროთ დღეს?"
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
    "nav.contact": "Contact",
    "nav.book_cta": "Book Consultation",
    "hero.badge": "20+ Years Continuous Practice • Tbilisi",
    "hero.title": "Academic Precision, Strategic Defense & Highest Legal Ethics",
    "hero.desc": "Executive Board Member of the Georgian Bar Association (GBA), former Chair of the Civil Law Committee, and Accredited Mediator — Ketevan Utiashvili provides strategic legal representation before Tbilisi City, Appellate, and Supreme Courts.",
    "hero.cta_evaluate": "Initial Case Assessment",
    "hero.cta_book": "Book Consultation",
    "hero.metric1": "Established Bureau",
    "hero.metric2": "GBA Executive Board",
    "hero.metric3": "Settled & Won",
    "hero.metric4": "Confidentiality",
    "hero.card_name": "Ketevan Utiashvili",
    "hero.card_role": "Attorney • GBA Executive Board",
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
    "case.assign_title": "Submit this sheet to Ketevan Utiashvili for review:",
    "case.btn_send": "Forward Case to Attorney",
    "case.btn_edit": "Edit Details",
    "case.btn_direct_book": "Book Directly in Calendar",
    "cal.select_time": "Available Time Slots:",
    "cal.sum_lawyer": "Attorney:",
    "cal.sum_slot": "Selected Slot:",
    "cal.format_office": "Office Visit",
    "cal.format_office_sub": "",
    "cal.format_online": "Online Consultation",
    "cal.format_online_sub": "",
    "cal.field_name": "Full Name *",
    "cal.field_phone": "Phone Number *",
    "cal.field_email": "Email Address",
    "cal.field_topic": "Brief topic of discussion",
    "cal.btn_confirm": "Confirm Appointment",
    "cal.succ_title": "Appointment Successfully Confirmed!",
    "cal.succ_desc": "Your consultation has been booked on the attorney's official calendar.",
    "cal.btn_new": "Book Another Slot",
    "cont.c1_cap": "Central Law Office",
    "cont.c1_val": "26 Ilia Chavchavadze Ave., Tbilisi",
    "cont.c1_sub": "Vake, Tbilisi, Georgia",
    "cont.c2_cap": "Direct Line & WhatsApp",
    "cont.c2_sub": "Business Hours: 10:00 - 18:00 (Mon - Fri)",
    "cont.c3_cap": "Official Email",
    "cont.form_title": "Send a Message to the Bureau",
    "cont.form_sub": "Attorney will review your case and respond within 24 hours.",
    "cont.f_name": "Full Name *",
    "cont.f_phone": "Phone *",
    "cont.f_service": "Practice Area",
    "cont.f_msg": "Brief Summary of Dispute",
    "cont.f_btn": "Send Inquiry",
    "adv.btn_txt": "Legal Advisor",
    "adv.btn_sub": "Online Assistant",
    "adv.modal_title": "Integrated Legal Advisor",
    "adv.welcome_msg": "Welcome. I am the virtual legal advisor for Ketevan Utiashvili Law Office. Our central office is located at 26 Ilia Chavchavadze Ave, Tbilisi. How may I assist you today?"
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
    "nav.contact": "Контакты",
    "nav.book_cta": "Запись на прием",
    "hero.badge": "20+ лет непрерывной практики • Тбилиси",
    "hero.title": "Академическая точность, стратегическая защита и высшая этика",
    "hero.desc": "Действующий член Исполнительного совета Ассоциации адвокатов Грузии (GBA), бывший председатель Гражданского комитета и аккредитованный медиатор — Кетеван Утиашвили предоставляет квалифицированные услуги в судах всех инстанций.",
    "hero.cta_evaluate": "Оценка дела",
    "hero.cta_book": "Забронировать визит",
    "hero.metric1": "Опыт с 2003 г.",
    "hero.metric2": "Совет GBA",
    "hero.metric3": "Успешных дел",
    "hero.metric4": "Конфиденциальность",
    "hero.card_name": "Кетеван Утиашвили",
    "hero.card_role": "Адвокат • Совет GBA",
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
    "case.assign_title": "Передать карту дела на рассмотрение Кетеван Утиашвили:",
    "case.btn_send": "Отправить дело адвокату",
    "case.btn_edit": "Изменить данные",
    "case.btn_direct_book": "Забронировать визит в календаре",
    "cal.select_time": "Доступные часы:",
    "cal.sum_lawyer": "Адвокат:",
    "cal.sum_slot": "Выбранное время:",
    "cal.format_office": "Визит в офис",
    "cal.format_office_sub": "",
    "cal.format_online": "Онлайн-консультация",
    "cal.format_online_sub": "",
    "cal.field_name": "Имя и фамилия *",
    "cal.field_phone": "Телефон *",
    "cal.field_email": "Эл. почта",
    "cal.field_topic": "Тема консультации",
    "cal.btn_confirm": "Подтвердить запись",
    "cal.succ_title": "Визит успешно забронирован!",
    "cal.succ_desc": "Ваша запись внесена в официальный график адвоката.",
    "cal.btn_new": "Новая запись",
    "cont.c1_cap": "Центральный офис",
    "cont.c1_val": "г. Тбилиси, просп. Ильи Чавчавадзе 26",
    "cont.c1_sub": "Ваке, Тбилиси, Грузия",
    "cont.c2_cap": "Прямая линия & WhatsApp",
    "cont.c2_sub": "Часы работы: 10:00 - 18:00 (пн - пт)",
    "cont.c3_cap": "Официальная эл. почта",
    "cont.form_title": "Отправить обращение в бюро",
    "cont.form_sub": "Адвокат изучит ваш вопрос и свяжется в течение 24 часов.",
    "cont.f_name": "Имя, фамилия *",
    "cont.f_phone": "Телефон *",
    "cont.f_service": "Правовое направление",
    "cont.f_msg": "Краткое содержание вопроса",
    "cont.f_btn": "Отправить сообщение",
    "adv.btn_txt": "Юр. советник",
    "adv.btn_sub": "Онлайн-помощник",
    "adv.modal_title": "Интегрированный юридический советник",
    "adv.welcome_msg": "Здравствуйте. Я виртуальный консультант адвокатского бюро Кетеван Утиашвили. Центральный офис находится в Тбилиси, просп. Ильи Чавчавадзе 26. Чем могу вам помочь?"
  }
};

function initTranslations() {
  const dropdownWrap = document.getElementById('langDropdownWrap');
  const currentBtn = document.getElementById('langCurrentBtn');
  const menu = document.getElementById('langDropdownMenu');
  const currentLabel = document.getElementById('currentLangLabel');
  const optionBtns = document.querySelectorAll('.lang-option-btn');

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
  const dict = i18nDictionary[lang] || i18nDictionary.ka;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.documentElement.lang = lang;
}

/* ==========================================================================
   2. INTERACTIVE CALENDAR & APPOINTMENT SCHEDULER
   ========================================================================== */
let calYear = 2026;
let calMonth = 10; // November (0-indexed: 10 = Nov)
let selDay = 4;
let selTime = "11:00";

const geoMonths = [
  "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
  "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
];

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
      const monthStr = geoMonths[calMonth];

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
      `;

      document.getElementById('confirmedReceiptData').innerHTML = receiptHTML;
      appForm.classList.add('hidden');
      successBox.classList.remove('hidden');
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

  monthTitle.textContent = `${geoMonths[calMonth]} ${calYear}`;
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
      cell.title = "შაბათ-კვირა — გადაუდებელი საქმეები";
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
  const monthStr = geoMonths[calMonth];

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
  const chatForm = document.getElementById('advisorChatForm');
  const inputField = document.getElementById('advisorInputField');
  const chatBody = document.getElementById('advisorChatBody');

  if (!toggleBtn || !modal) return;

  function openAdvisorChat() {
    modal.classList.remove('hidden', 'closing');
    toggleBtn.classList.add('is-open');
    if (inputField) {
      setTimeout(() => inputField.focus(), 80);
    }
  }

  function closeAdvisorChat() {
    if (modal.classList.contains('hidden')) return;
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

  toggleBtn.addEventListener('click', (e) => {
    // If user clicked the explicit pill minimize button, do not open chat
    if (e.target.closest('#advisorPillMinBtn')) return;

    if (modal.classList.contains('hidden') || modal.classList.contains('closing')) {
      openAdvisorChat();
    } else {
      closeAdvisorChat();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAdvisorChat();
    });
  }

  // Pill Minimize Button (დაპატარავება მრგვალ ღილაკად)
  if (pillMinBtn) {
    pillMinBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      toggleBtn.classList.add('minimized');
      sessionStorage.setItem('ku_advisor_pill_minimized', 'true');
    });
  }

  // Restore minimized state if previously dismissed/shrunk
  if (sessionStorage.getItem('ku_advisor_pill_minimized') === 'true') {
    toggleBtn.classList.add('minimized');
  }

  // Auto-shrink on scroll down to keep reading clear, expand back at top
  let scrollThrottle = false;
  window.addEventListener('scroll', () => {
    if (scrollThrottle) return;
    scrollThrottle = true;
    setTimeout(() => { scrollThrottle = false; }, 100);

    const currentScrollY = window.scrollY;
    if (currentScrollY > 260 && !toggleBtn.classList.contains('minimized') && modal.classList.contains('hidden')) {
      toggleBtn.classList.add('minimized');
    } else if (currentScrollY < 80 && sessionStorage.getItem('ku_advisor_pill_minimized') !== 'true') {
      toggleBtn.classList.remove('minimized');
    }
  }, { passive: true });

  // Close when clicking outside of modal and toggle button
  document.addEventListener('click', (e) => {
    if (!modal.classList.contains('hidden') && 
        !modal.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      closeAdvisorChat();
    }
  });

  document.querySelectorAll('.quick-tag-btn').forEach(tagBtn => {
    tagBtn.addEventListener('click', () => {
      const qType = tagBtn.getAttribute('data-query');
      handleQuickAdvisorQuery(qType);
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
    });
  }

  function handleQuickAdvisorQuery(type) {
    const promptMap = {
      re_tbilisi: "უძრავი ქონებისა და მშენებლობის დავები თბილისში",
      deadlines: "სარჩელის შეტანის ხანდაზმულობის ვადები საქართველოში",
      mediation: "მედიაცია და სასამართლოსგარეშე მორიგება",
      booking: "თბილისის ოფისის მისამართი და ვიზიტის დაჯავშნა"
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
      const safe = String(raw)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>');
      appendChatBubble(safe || 'ბოდიში, პასუხი დროებით ვერ მივიღე. გთხოვთ, დაგვიკავშირდეთ: +995 599 35 15 25.', 'system');
    } catch (err) {
      typingDiv.remove();
      appendChatBubble('ბოდიში, დროებით კავშირი ვერ დამყარდა. სცადეთ ხელახლა ან დაგვირეკეთ: +995 599 35 15 25.', 'system');
    }
    return;

    // --- ქვემოთ ძველი ჩაშენებული პასუხები (გამორთულია) ---
    if (false) setTimeout(() => {
      typingDiv.remove();
      let answer = "";

      if (queryType === 're_tbilisi' || q.includes('უძრავ') || q.includes('ბინა') || q.includes('აპარტ') || q.includes('მშენებ') || q.includes('დეველოპ')) {
        answer = `<strong>უძრავი ქონება და დეველოპერული დავები:</strong><br><br>
        უძრავი ქონების შეძენისას ან სადავო საკითხებისას ძირითადი სამართლებრივი ასპექტებია:
        <ul>
          <li>მშენებლობის დასრულების ვადების გადაცილება და პირგასამტეხლოს დაკისრება;</li>
          <li>საჯარო რეესტრში იპოთეკით ან ყადაღით დატვირთული ქონება;</li>
          <li>მერიის მიერ ექსპლუატაციაში მიღების შეფერხებები და ნებართვები.</li>
        </ul>
        <br>ქეთევან უტიაშვილის საადვოკატო ბიურო ახორციელებს ხელშეკრულებების სრულ ექსპერტიზას. ცენტრალური ოფისი: თბილისი, ილია ჭავჭავაძის გამზ. 26. შეგიძლიათ <a href="#calendar" style="color:#721927; text-decoration:underline; font-weight:600;">დაჯავშნოთ ვიზიტი კალენდარში</a>.`;
      }
      else if (queryType === 'deadlines' || q.includes('ვადა') || q.includes('ხანდაზმულ') || q.includes('სარჩელ')) {
        answer = `<strong>ხანდაზმულობის ვადები სამოქალაქო კოდექსით:</strong><br><br>
        • სახელშეკრულებო მოთხოვნებზე: <strong>3 წელი</strong><br>
        • უძრავ ქონებასთან დაკავშირებულ მოთხოვნებზე: <strong>6 წელი</strong><br>
        • პერიოდულად შესასრულებელ ვალდებულებებზე: <strong>3 წელი</strong><br>
        • ადმინისტრაციული აქტის გასაჩივრება: <strong>30 კალენდარული დღე</strong><br><br>
        <em>გაფრთხილება:</em> ვადის გადაცილება საქმის წაგების საფუძველია. შეაფასეთ თქვენი საქმე ჩვენს <a href="#case-check" style="color:#721927; text-decoration:underline; font-weight:600;">ონლაინ დიაგნოსტიკაში</a>.`;
      }
      else if (queryType === 'mediation' || q.includes('მედია') || q.includes('მორიგებ')) {
        answer = `<strong>მედიაცია და ალტერნატიული მორიგება:</strong><br><br>
        ქეთევან უტიაშვილი არის საქართველოს მედიატორთა ასოციაციის აკრედიტებული მედიატორი.<br><br>
        მედიაციის ძირითადი უპირატესობები:
        • სრული კონფიდენციალურობა;<br>
        • დავის მოგვარება 2-4 კვირაში სასამართლოში წლობით დავის ნაცვლად;<br>
        • მიღწეულ სამედიაციო შეთანხმებას აქვს <strong>სასამართლო გადაწყვეტილების ტოლფასი სააღსრულებო ძალა</strong>.`;
      }
      else if (queryType === 'booking' || q.includes('კალენდარ') || q.includes('ჩაწერ') || q.includes('ვიზიტ') || q.includes('მისამართ') || q.includes('ჭავჭავაძ') || q.includes('თბილის') || q.includes('ფას')) {
        answer = `<strong>თბილისის ცენტრალური ოფისი & ვიზიტი:</strong><br><br>
        მისამართი: <strong>ქ. თბილისი, ილია ჭავჭავაძის გამზირი #26</strong> (ვაკე).<br>
        სამუშაო საათები: ორშაბათიდან პარასკევის ჩათვლით 10:00 - 18:00.<br><br>
        კონსულტაციაზე ჩასაწერად გამოიყენეთ ჩვენი <a href="#calendar" style="color:#721927; text-decoration:underline; font-weight:600;">ინტეგრირებული კალენდარი</a> ან დარეკეთ ნომერზე: <strong>+995 599 35 15 25</strong>.`;
      }
      else {
        answer = `გმადლობთ შეკითხვისთვის. თქვენი საკითხი მოითხოვს ქეთევან უტიაშვილის ინდივიდუალურ სამართლებრივ შეფასებას. 
        <br><br>გირჩევთ შეავსოთ ჩვენი <a href="#case-check" style="color:#721927; text-decoration:underline; font-weight:600;">საქმის ონლაინ შეფასება</a> ან მობრძანდეთ თბილისის ოფისში (ჭავჭავაძის გამზ. 26) <a href="#calendar" style="color:#721927; text-decoration:underline; font-weight:600;">კალენდარში წინასწარი ჩაწერით</a>.`;
      }

      appendChatBubble(answer, 'system');
    }, 500);
  }
}

/* ==========================================================================
   5. MOBILE NAVIGATION & CONTACT FORMS
   ========================================================================== */
function initMobileNav() {
  const burger = document.getElementById('mobileBurger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
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

function initThemisPhotoScroll() {
  const scene = document.querySelector('.themis-scroll-scene');
  if (!scene) return;
  const beam = document.getElementById('themis-photo-beam');
  const pans = [document.getElementById('themis-photo-left-pan'), document.getElementById('themis-photo-right-pan')];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let queued = false;
  function update() {
    queued = false;
    const rect = scene.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (innerHeight * .8 - rect.top) / (rect.height + innerHeight * .3)));
    const angle = motion.matches ? 0 : 10 * Math.sin(progress * Math.PI * 2);
    const radians = angle * Math.PI / 180;
    beam.setAttribute('transform', `rotate(${angle} 589 353)`);
    [[539, 377], [638, 377]].forEach(([x, y], i) => {
      const dx = x - 589, dy = y - 353;
      const tx = dx * Math.cos(radians) - dy * Math.sin(radians) - dx;
      const ty = dx * Math.sin(radians) + dy * Math.cos(radians) - dy;
      pans[i].setAttribute('transform', `translate(${tx} ${ty})`);
    });
  }
  function schedule() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule, { once: true });
  motion.addEventListener('change', schedule);
  update();
}
