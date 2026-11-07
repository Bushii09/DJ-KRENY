document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    sq: {
      nav_experience: "Përvoja", nav_events: "Eventet", nav_performances: "Performanca", nav_contact: "Kontakt", nav_book: "Pyet për datën",
      hero_kicker: "DJ · DASMA · EVENTE · FIER", hero_title: "Festa jote.<br><em>Ritmi i duhur.</em>",
      hero_intro: "Muzikë e zgjedhur për njerëzit e tu dhe për momentet që doni t’i mbani mend, me energji, ritëm dhe kontroll gjatë gjithë festës.", hero_cta: "Flasim për eventin", hero_watch: "Shiko performancat", hero_fact: "Dasma dhe evente private",
      live_label: "NGA NJË PERFORMANCË", media_caption: "Shiko atmosferën para se të rezervosh", hero_bottom: "Muzika e eventit tënd, e menduar bashkë.",
      experience_label: "SI PUNOJMË", experience_title: "Muzika nuk është sfond.<br><em>Është pjesë e kujtimit.</em>",
      experience_copy: "Çdo event ka njerëzit, ritmin dhe historinë e vet. Bisedojmë paraprakisht për atmosferën që dëshironi, pastaj ndërtojmë muzikën rreth saj dhe e përshtatim me publikun tuaj.",
      experience_extra: "Për dasma, festa private, lokale dhe evente speciale, puna ime fillon me të kuptuarit e publikut, ritmit dhe momentit që duan të mbajnë në mend.",
      experience_more: "Puna është e organizuar, e qartë dhe e personalizuar: nga momenti i parë i kontaktit, deri te lista e këngëve dhe ritmi i festës, me fokus te një atmosferë e qetë, energjike dhe të besueshme.",
      step_one_title: "Na trego për eventin", step_one_copy: "Data, vendi dhe çfarë po festoni. Kaq mjafton për bisedën e parë.",
      step_two_title: "Përcaktojmë muzikën", step_two_copy: "Flasim për shijet tuaja, të ftuarit dhe momentet që kanë rëndësi.",
      step_three_title: "Konfirmojmë detajet", step_three_copy: "Pasi biem dakord për planin, koha dhe pritshmëritë janë të qarta.",
      events_label: "RASTI YT", events_title: "Një festë e jotja.<br><em>Një plan muzikor i yti.</em>", events_intro: "Zgjidh rastin, pastaj flasim për detajet.",
      event_wedding: "Dasma", event_wedding_copy: "Muzikë për hyrjet, momentet e veçanta dhe vallëzimin deri në fund të festës.",
      event_private: "Festa private", event_private_copy: "Ditëlindje dhe mbledhje private me muzikë sipas shijes së grupit tuaj.",
      event_club: "Club & evente", event_club_copy: "Sete për lokale, mbrëmje dhe evente ku muzika e mban atmosferën në lëvizje.", event_link: "Diskuto eventin",
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
      nav_experience: "The approach", nav_events: "Events", nav_performances: "Performances", nav_contact: "Contact", nav_book: "Check your date",
      hero_kicker: "DJ · WEDDINGS · EVENTS · FIER", hero_title: "Your party.<br><em>Your kind of rhythm.</em>",
      hero_intro: "Music chosen for your people and for the moments you want to remember, with energy, flow and control throughout the night.", hero_cta: "Tell me about your event", hero_watch: "Watch performances", hero_fact: "Weddings and private events",
      live_label: "FROM A LIVE SET", media_caption: "See the atmosphere before you book", hero_bottom: "Your event’s music, planned together.",
      experience_label: "THE APPROACH", experience_title: "Music is more than a backdrop.<br><em>It becomes part of the memory.</em>",
      experience_copy: "Every event has its own people, pace and story. We talk through the atmosphere you want, then shape the music around it and adapt it to your crowd.",
      experience_extra: "For weddings, private parties, venues and special events, I start by understanding the audience, the flow and the moments that need to be remembered.",
      experience_more: "The work is organized, clear and tailored to your event: from the first message to the final track list and the energy of the night, with a focus on a smooth, confident and memorable atmosphere.",
      step_one_title: "Tell me about the event", step_one_copy: "The date, the place and what you’re celebrating. That’s enough to start the conversation.",
      step_two_title: "Plan the music", step_two_copy: "We talk about your taste, your guests and the moments that matter.",
      step_three_title: "Confirm the details", step_three_copy: "Once we agree on the plan, the timing and expectations are clear.",
      events_label: "YOUR OCCASION", events_title: "Your celebration.<br><em>Your music plan.</em>", events_intro: "Choose the occasion, then let’s talk details.",
      event_wedding: "Weddings", event_wedding_copy: "Music for the entrance, the meaningful moments and the dancing right through the celebration.",
      event_private: "Private parties", event_private_copy: "Birthdays and private gatherings with music shaped around your group.",
      event_club: "Clubs & events", event_club_copy: "Sets for venues, nights out and events where music keeps the atmosphere moving.", event_link: "Discuss your event",
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
    try { localStorage.setItem("dj-kreny-language", lang); } catch {}
  };

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const closeMenu = () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    mainNav?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    if (menuToggle) menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    mainNav?.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  });
  mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
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
