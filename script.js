document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    sq: {
      nav_home: "Kryefaqja", nav_gallery: "Galeria", nav_experience: "Përvoja", nav_events: "Eventet", nav_performances: "Performanca", nav_contact: "Kontakt", nav_book: "Pyet për datën",
      gallery_label: "GALERIA", gallery_kicker: "DJ KRENY · MOMENTE LIVE", gallery_title: "Atmosfera e duhur.<br><em>Ndryshon çdo festë.</em>",
      gallery_intro: "Momente nga dasma, festa private dhe evente ku muzika krijon energji, ndjenjë dhe kujtime të përhershme.", gallery_book: "Rezervo tani",
      filter_all: "Të gjitha", filter_wedding: "Dasma", filter_party: "Festa", filter_events: "Evente", filter_live: "Live",
      gallery_clip_1: "Performancë e parë", gallery_clip_2: "Atmosferë", gallery_clip_3: "Moment special", gallery_clip_4: "Nga skena", gallery_clip_5: "Festa e madhe", gallery_clip_6: "Vibe e rrallë", gallery_clip_7: "Rezervim", gallery_clip_8: "Vibe house", gallery_clip_9: "Event i veçantë", gallery_clip_10: "Festë e natës", gallery_clip_11: "Festë e natës", gallery_clip_12: "Vallëzim", gallery_clip_13: "Moment muzikor",
      contact_intro: "Dërgo datën, vendin dhe stilin e eventit. Do të të kthej një përgjigje të qartë për ofertën, gatishmërinë dhe mënyrën më të mirë për të ndërtuar atmosferën e duhur.",
      hero_kicker: "DJ · DASMA · EVENTE · FIER", hero_title: "Festa jote.<br><em>Ritmi i duhur.</em>",
      hero_intro: "Muzikë e zgjedhur për njerëzit e tu dhe për momentet që doni t’i mbani mend, me energji, ritëm dhe kontroll gjatë gjithë festës.", hero_cta: "Flasim për eventin", hero_watch: "Shiko performancat", hero_fact: "Dasma dhe evente private",
      live_label: "NGA NJË PERFORMANCË", media_caption: "Shiko atmosferën para se të rezervosh", hero_bottom: "Muzika e eventit tënd, e menduar bashkë.",
      home_info_label: "PËRSE DJ KRENY", home_info_title_1: "Muzikë e personalizuar", home_info_copy_1: "Secili event merret me vëmendje. Ne planifikojmë listën e këngëve sipas publikut, momentit dhe atmosferës që doni të krijoni.",
      home_info_title_2: "Energjia e saktë", home_info_copy_2: "Prej hyrjes së të ftuarve deri tek momenti i fundit, muzika ruan ritmin dhe bën që festa të ndjehet natyrale dhe e ngrohtë.",
      home_info_title_3: "Shërbim pa stres", home_info_copy_3: "Komunikimi është i qartë, koha e planifikimit e organizuar dhe detajet e eventit kontrollohen përpara se festa të fillojë.",
      experience_label: "SI PUNOJMË", experience_title: "Muzika nuk është sfond.<br><em>Është pjesë e kujtimit.</em>",
      experience_copy: "Çdo event ka njerëzit, ritmin dhe historinë e vet. Bisedojmë paraprakisht për atmosferën që dëshironi, pastaj ndërtojmë muzikën rreth saj dhe e përshtatim me publikun tuaj.",
      experience_extra: "Për dasma, festa private, lokale dhe evente speciale, puna ime fillon me të kuptuarit e publikut, ritmit dhe momentit që duan të mbajnë në mend.",
      experience_more: "Puna është e organizuar, e qartë dhe e personalizuar: nga momenti i parë i kontaktit, deri te lista e këngëve dhe ritmi i festës, me fokus te një atmosferë e qetë, energjike dhe të besueshme.",
      step_one_title: "Na trego për eventin", step_one_copy: "Data, vendi dhe çfarë po festoni. Kaq mjafton për bisedën e parë.",
      step_two_title: "Përcaktojmë muzikën", step_two_copy: "Flasim për shijet tuaja, të ftuarit dhe momentet që kanë rëndësi.",
      step_three_title: "Konfirmojmë detajet", step_three_copy: "Pasi biem dakord për planin, koha dhe pritshmëritë janë të qarta.",
      experience_details_label: "ÇFARË PËRFSHIHET", experience_plan_tag: "PLANIFIKIM", experience_plan_title: "Qasje e qartë dhe e organizuar", experience_plan_copy: "Jemi në kontakt para eventit, kontrollojmë detajet dhe organizojmë ritmin e festës sipas strukturës suaj.",
      experience_music_tag: "MUZIKË", experience_music_title: "Përzgjedhje e saktë për çdo publik", experience_music_copy: "Ndryshojmë stilin e muzikës sipas të ftuarve, ceremonisë dhe energjisë që doni të krijoni.", experience_emotion_tag: "EMOCION", experience_emotion_title: "Atmosferë që mbetet në mend", experience_emotion_copy: "Fokusi është te momentet që e bëjnë festën të veçantë: fillimi, ngritja e energjisë dhe pjesa e fundit e natës.",
      events_label: "RASTI YT", events_title: "Një festë e jotja.<br><em>Një plan muzikor i yti.</em>", events_intro: "Zgjidh rastin, pastaj flasim për detajet.",
      event_wedding: "Dasma", event_wedding_copy: "Muzikë për hyrjet, momentet e veçanta dhe vallëzimin deri në fund të festës.",
      event_private: "Festa private", event_private_copy: "Ditëlindje dhe mbledhje private me muzikë sipas shijes së grupit tuaj.",
      event_club: "Club & evente", event_club_copy: "Sete për lokale, mbrëmje dhe evente ku muzika e mban atmosferën në lëvizje.", event_link: "Shiko detajet",
      event_details_label: "ÇFARË OFROJMË", event_plan_title: "Plan muzikor i qartë", event_plan_copy: "Organizojmë muzikën sipas momenteve të festës: pritja, vallëzimi dhe kulmi i mbrëmjes.",
      event_atmosphere_title: "Atmosferë e balancuar", event_atmosphere_copy: "Ritmi përshtatet me publikun për ta mbajtur energjinë të natyrshme gjatë gjithë eventit.", event_stress_title: "Përvojë pa stres", event_stress_copy: "Komunikimi dhe planifikimi i qartë ndihmojnë që festa të ecë sipas planit.",
      event_close: "Mbyll", event_modal_kicker: "DJ KRENY · EVENTE", event_modal_book: "Pyet për këtë event",
      performances_label: "PAMJE NGA PUNA", performances_title: "Shihe vetë.<br><em>Dëgjo atmosferën.</em>", performances_intro: "Klipet nga performancat japin një ide më të mirë se çdo premtim.",
      clip_one: "Performancë", clip_two: "Atmosferë", clip_three: "Nga skena",
      booking_label: "REZERVIM", booking_title: "Ke një datë?<br><em>Le ta diskutojmë.</em>",
      booking_copy: "Dërgo datën, vendin, llojin e eventit dhe stilin që dëshiron. Do të të kthej një përgjigje të qartë për disponueshmërinë, ritmin e festës dhe mënyrën më të mirë për të ecur me atmosferën e eventit.", phone_label: "TELEFON", email_label: "EMAIL", whatsapp_label: "Shkruaj direkt", social_label: "Më gjen edhe këtu",
      form_step: "KËRKESË PËR DISPONUESHMËRI", form_type: "FORMULAR DIREKT", lbl_name: "Emri dhe mbiemri", lbl_phone: "Numri i telefonit", lbl_date: "Data e eventit", lbl_type: "Lloji i eventit", lbl_location: "Qyteti / vendi", lbl_message: "Çfarë duhet të di për eventin?",
      opt_choose: "Zgjidh një opsion", opt_wedding: "Dasmë", opt_private: "Festë private", opt_club: "Club / Event", opt_other: "Tjetër", btn_submit: "Dërgo kërkesën",
      form_note: "Kërkesa nuk e konfirmon rezervimin. Do të kontaktohemi për të diskutuar disponueshmërinë.",
      placeholder_name: "Emri yt", placeholder_location: "Ku mbahet?", placeholder_message: "Muzika, orari ose ndonjë detaj tjetër...", footer_line: "Muzika e eventit tënd, e menduar bashkë."
    },
    en: {
      nav_home: "Home", nav_gallery: "Gallery", nav_experience: "The approach", nav_events: "Events", nav_performances: "Performances", nav_contact: "Contact", nav_book: "Check your date",
      gallery_label: "GALLERY", gallery_kicker: "DJ KRENY · LIVE MOMENTS", gallery_title: "The right atmosphere.<br><em>Changes every party.</em>",
      gallery_intro: "Moments from weddings, private parties and events where music creates energy, feeling and lasting memories.", gallery_book: "Book now",
      filter_all: "All", filter_wedding: "Weddings", filter_party: "Parties", filter_events: "Events", filter_live: "Live",
      gallery_clip_1: "First performance", gallery_clip_2: "Atmosphere", gallery_clip_3: "Special moment", gallery_clip_4: "On stage", gallery_clip_5: "The big party", gallery_clip_6: "Great energy", gallery_clip_7: "Booking", gallery_clip_8: "House vibe", gallery_clip_9: "Special event", gallery_clip_10: "Night party", gallery_clip_11: "Night party", gallery_clip_12: "Dancing", gallery_clip_13: "Musical moment",
      contact_intro: "Send the date, venue and style of your event. I’ll reply with clear details about availability and the best way to create the right atmosphere.",
      hero_kicker: "DJ · WEDDINGS · EVENTS · FIER", hero_title: "Your party.<br><em>Your kind of rhythm.</em>",
      hero_intro: "Music chosen for your people and for the moments you want to remember, with energy, flow and control throughout the night.", hero_cta: "Tell me about your event", hero_watch: "Watch performances", hero_fact: "Weddings and private events",
      live_label: "FROM A LIVE SET", media_caption: "See the atmosphere before you book", hero_bottom: "Your event’s music, planned together.",
      home_info_label: "WHY DJ KRENY", home_info_title_1: "Music made personal", home_info_copy_1: "Every event gets careful attention. We plan the music around your guests, key moments and the atmosphere you want to create.",
      home_info_title_2: "The right energy", home_info_copy_2: "From the guests’ arrival to the final moment, the music keeps a natural, warm flow throughout the celebration.",
      home_info_title_3: "A stress-free service", home_info_copy_3: "Clear communication, organized planning and event details checked before the celebration begins.",
      experience_label: "THE APPROACH", experience_title: "Music is more than a backdrop.<br><em>It becomes part of the memory.</em>",
      experience_copy: "Every event has its own people, pace and story. We talk through the atmosphere you want, then shape the music around it and adapt it to your crowd.",
      experience_extra: "For weddings, private parties, venues and special events, I start by understanding the audience, the flow and the moments that need to be remembered.",
      experience_more: "The work is organized, clear and tailored to your event: from the first message to the final track list and the energy of the night, with a focus on a smooth, confident and memorable atmosphere.",
      step_one_title: "Tell me about the event", step_one_copy: "The date, the place and what you’re celebrating. That’s enough to start the conversation.",
      step_two_title: "Plan the music", step_two_copy: "We talk about your taste, your guests and the moments that matter.",
      step_three_title: "Confirm the details", step_three_copy: "Once we agree on the plan, the timing and expectations are clear.",
      experience_details_label: "WHAT'S INCLUDED", experience_plan_tag: "PLANNING", experience_plan_title: "A clear, organized approach", experience_plan_copy: "We stay in touch before the event, check the details and organize the flow around your schedule.",
      experience_music_tag: "MUSIC", experience_music_title: "The right selection for every crowd", experience_music_copy: "The music style adapts to your guests, ceremony and the energy you want to create.", experience_emotion_tag: "ATMOSPHERE", experience_emotion_title: "A feeling worth remembering", experience_emotion_copy: "We focus on the moments that make the celebration special: the start, rising energy and the final part of the night.",
      events_label: "YOUR OCCASION", events_title: "Your celebration.<br><em>Your music plan.</em>", events_intro: "Choose the occasion, then let’s talk details.",
      event_wedding: "Weddings", event_wedding_copy: "Music for the entrance, the meaningful moments and the dancing right through the celebration.",
      event_private: "Private parties", event_private_copy: "Birthdays and private gatherings with music shaped around your group.",
      event_club: "Clubs & events", event_club_copy: "Sets for venues, nights out and events where music keeps the atmosphere moving.", event_link: "View details",
      event_details_label: "WHAT WE OFFER", event_plan_title: "A clear music plan", event_plan_copy: "We organize the music around key moments: guest arrival, dancing and the high point of the night.",
      event_atmosphere_title: "Balanced atmosphere", event_atmosphere_copy: "The pace adapts to your guests to keep the energy natural throughout the event.", event_stress_title: "A stress-free experience", event_stress_copy: "Clear communication and planning help the celebration run smoothly.",
      event_close: "Close", event_modal_kicker: "DJ KRENY · EVENTS", event_modal_book: "Ask about this event",
      performances_label: "REAL PERFORMANCE CLIPS", performances_title: "See for yourself.<br><em>Feel the atmosphere.</em>", performances_intro: "Clips from real performances say more than a promise ever could.",
      clip_one: "Performance", clip_two: "Atmosphere", clip_three: "On stage",
      booking_label: "BOOKING", booking_title: "Have a date?<br><em>Let’s talk.</em>",
      booking_copy: "Send the date, the venue, the type of event and the style you want. I’ll get back to you with a clear answer about availability, the flow of the night and the best way to shape the atmosphere of the event.", phone_label: "PHONE", email_label: "EMAIL", whatsapp_label: "Message directly", social_label: "Find me here too",
      form_step: "AVAILABILITY REQUEST", form_type: "DIRECT ENQUIRY", lbl_name: "Full name", lbl_phone: "Phone number", lbl_date: "Event date", lbl_type: "Event type", lbl_location: "City / venue", lbl_message: "What should I know about the event?",
      opt_choose: "Choose an option", opt_wedding: "Wedding", opt_private: "Private party", opt_club: "Club / event", opt_other: "Other", btn_submit: "Send request",
      form_note: "This request does not confirm a booking. We’ll get in touch to discuss availability.",
      placeholder_name: "Your name", placeholder_location: "Where is it?", placeholder_message: "Music, timing or anything else to know...", footer_line: "Your event’s music, planned together."
    }
  };

  const eventDetails = {
    sq: {
      wedding: {
        title: "Dasma",
        description: "Një plan muzikor i ndërtuar rreth çiftit, të ftuarve dhe momenteve që e bëjnë ditën tuaj të veçantë.",
        points: ["Muzikë për hyrjen dhe momentet kryesore.", "Përzgjedhje këngësh sipas shijeve tuaja.", "Ritëm i përshtatur me atmosferën dhe të ftuarit."]
      },
      private: {
        title: "Festa private",
        description: "Për ditëlindje dhe mbledhje private, muzika përshtatet me grupin dhe mënyrën si dëshironi ta festoni.",
        points: ["Listë muzikore sipas shijeve tuaja.", "Muzikë e përshtatur për grupmosha të ndryshme.", "Ritëm fleksibël nga fillimi deri në fund."]
      },
      club: {
        title: "Club & evente",
        description: "Sete muzikore për lokale dhe evente, të përzgjedhura sipas publikut, hapësirës dhe energjisë së mbrëmjes.",
        points: ["Set i përshtatur me konceptin e eventit.", "Kalime muzikore që mbajnë atmosferën në lëvizje.", "Detajet teknike dhe orari diskutohen paraprakisht."]
      }
    },
    en: {
      wedding: {
        title: "Weddings",
        description: "A music plan shaped around the couple, the guests and the moments that make your day special.",
        points: ["Music for the entrance and key moments.", "Song choices shaped around your taste.", "The pace adapts to the atmosphere and your guests."]
      },
      private: {
        title: "Private parties",
        description: "For birthdays and private gatherings, the music is tailored to your group and the way you want to celebrate.",
        points: ["A playlist shaped around your taste.", "Music suited to guests of different ages.", "A flexible flow from the first song to the last."]
      },
      club: {
        title: "Clubs & events",
        description: "Music sets for venues and events, selected for the audience, space and energy of the night.",
        points: ["A set tailored to the event concept.", "Transitions that keep the atmosphere moving.", "Technical details and timing discussed in advance."]
      }
    }
  };

  const eventDialog = document.getElementById("eventDialog");
  const eventDialogTitle = document.getElementById("eventDialogTitle");
  const eventDialogDescription = document.getElementById("eventDialogDescription");
  const eventDialogPoints = document.getElementById("eventDialogPoints");
  const eventDialogBook = document.getElementById("eventDialogBook");
  let activeEvent = null;

  const renderEventDetails = () => {
    const details = eventDetails[document.documentElement.lang]?.[activeEvent];
    if (!details || !eventDialogTitle || !eventDialogDescription || !eventDialogPoints) return;
    eventDialogTitle.textContent = details.title;
    eventDialogDescription.textContent = details.description;
    eventDialogPoints.replaceChildren(...details.points.map((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    }));
    if (eventDialogBook) eventDialogBook.href = `contact.html?event=${activeEvent}`;
  };

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  window.setLang = (lang) => {
    const copy = translations[lang];
    if (!copy) return;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-key]").forEach((element) => {
      const value = copy[element.dataset.key];
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll("[data-placeholder-key]").forEach((element) => {
      const value = copy[element.dataset.placeholderKey];
      if (value) element.placeholder = value;
    });
    document.querySelectorAll(".language-switch button").forEach((button) => {
      const active = button.id === `btn-${lang}`;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (activeEvent) renderEventDetails();
    if (menuToggle) {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-label", lang === "en"
        ? (isOpen ? "Close menu" : "Open menu")
        : (isOpen ? "Mbyll menunë" : "Hap menunë"));
    }
    try { localStorage.setItem("dj-kreny-language", lang); } catch {}
  };

  document.querySelectorAll(".language-switch button[data-lang]").forEach((button) => {
    button.addEventListener("click", () => window.setLang(button.dataset.lang));
  });

  const updateMenu = (isOpen) => {
    menuToggle?.setAttribute("aria-expanded", String(isOpen));
    mainNav?.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    if (menuToggle) {
      menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
        : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      menuToggle.setAttribute("aria-label", document.documentElement.lang === "en"
        ? (isOpen ? "Close menu" : "Open menu")
        : (isOpen ? "Mbyll menunë" : "Hap menunë"));
    }
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    updateMenu(isOpen);
  });
  mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => updateMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") updateMenu(false);
  });

  document.querySelectorAll(".event-item[data-event]").forEach((card) => {
    const openEventDetails = () => {
      activeEvent = card.dataset.event;
      renderEventDetails();
      eventDialog?.showModal();
    };
    card.addEventListener("click", openEventDetails);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openEventDetails();
      }
    });
  });

  document.getElementById("eventDialogClose")?.addEventListener("click", () => eventDialog?.close());
  eventDialog?.addEventListener("click", (event) => {
    if (event.target === eventDialog) eventDialog.close();
  });

  const filterButtons = document.querySelectorAll(".gallery-filter");
  const galleryCards = document.querySelectorAll(".video-card, .video-item");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter || "all";

      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      galleryCards.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ").filter(Boolean);
        const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });

  let savedLanguage = "sq";
  try { savedLanguage = localStorage.getItem("dj-kreny-language") || "sq"; } catch {}
  window.setLang(savedLanguage);

  const dateField = document.getElementById("field-date");
  if (dateField) {
    const today = new Date();
    const localDate = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");
    dateField.min = localDate;
  }

  const eventTypeField = document.getElementById("field-type");
  if (eventTypeField) {
    const selectedEvent = new URLSearchParams(window.location.search).get("event");
    if (["wedding", "private", "club", "other"].includes(selectedEvent)) eventTypeField.value = selectedEvent;
  }

  const year = document.getElementById("currentYear");
  if (year) year.textContent = String(new Date().getFullYear());

  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo && window.matchMedia("(prefers-reduced-motion: reduce)").matches) heroVideo.pause();

  const form = document.getElementById("bookingForm");
  const submitButton = document.getElementById("submitBtn");
  const status = document.getElementById("formStatus");
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const lang = document.documentElement.lang;
    if (submitButton) submitButton.disabled = true;
    if (status) {
      status.textContent = lang === "en" ? "Sending your request..." : "Kërkesa po dërgohet...";
      status.classList.remove("is-error");
    }
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      if (status) status.textContent = lang === "en"
        ? "Thanks. Your request was sent; I’ll be in touch about availability."
        : "Faleminderit. Kërkesa u dërgua; do të të kontaktoj për disponueshmërinë.";
    } catch (error) {
      if (status) {
        status.textContent = lang === "en"
          ? "The request could not be sent. Please call or message directly."
          : "Kërkesa nuk u dërgua. Të lutem telefono ose shkruaj direkt.";
        status.classList.add("is-error");
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
});