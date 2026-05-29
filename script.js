document.addEventListener('DOMContentLoaded', () => {
    
    // Mbyllja globale e lightbox
    window.mbyllLightbox = function() {
        const lb = document.getElementById('lightbox');
        const lbVid = document.getElementById('lightboxVideo');
        const lbCont = document.getElementById('lightboxContent');
        if(lb && lbVid && lbCont) {
            lb.style.opacity = '0';
            lb.style.pointerEvents = 'none';
            lbCont.style.transform = 'scale(0.95)';
            lbVid.pause();
            lbVid.src = "";
        }
    };

    // Hapja e lightbox nga klikimet mbi video
    document.querySelectorAll('.lightbox-trigger').forEach(item => {
        item.addEventListener('click', function() {
            const lb = document.getElementById('lightbox');
            const lbVid = document.getElementById('lightboxVideo');
            const lbCont = document.getElementById('lightboxContent');
            const vSrc = this.getAttribute('data-video-src');
            if(lb && lbVid && lbCont && vSrc) {
                lbVid.src = vSrc;
                lb.style.opacity = '1';
                lb.style.pointerEvents = 'auto';
                lbCont.style.transform = 'scale(1)';
                lbVid.play();
            }
        });
    });

    // Mbyllja e dritares nese klikohet ne pjesen e zeze jashte videos
    const lightbox = document.getElementById('lightbox');
    if(lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) mbyllLightbox();
        });
    }

    // SISTEMI I PERKTHIMIT (TRANSLATIONS)
    const translations = {
        en: {
            services: "SERVICES", nav_videos: "VIDEOS", book: "BOOK", hero_title: "ENERGY & PASSION",
            hero_subtitle: "ENERGY <br> <span class='text-amber-500'>& PASSION</span>",
            hero_btn: "BOOK NOW", wedding_title: "WEDDING", wedding_desc: "Unique atmosphere for your most important night.",
            nightlife_title: "NIGHTLIFE", nightlife_desc: "Maximum energy in the best clubs.",
            events_title_main: "EVENTS", events_desc: "Music for every party and private anniversary.",
            insta_title: "FEEL THE <span class='text-amber-500'>ATMOSPHERE</span>",
            vid_sub: "Media Production", vid_title: "Live <span>Performances</span> & Recaps",
            contact_sub: "Booking Office", contact_title: "Let's Create <span class='text-amber-500'>Magic</span>",
            contact_desc: "Ready to secure a unique musical experience for your event? Contact us directly or fill out the booking form.",
            contact_loc: "Fier, Albania", 
            lbl_name: "Full Name *", lbl_phone: "Phone Number *",
            lbl_date: "Event Date *", lbl_time: "Event Time *", lbl_type: "Event Type *",
            lbl_message: "Message or Specific Requests", btn_submit: "Send Reservation",
            opt_choose: "Choose type...",
            opt_wedding: "Wedding", opt_club: "Club / Nightlife", opt_corporate: "Event / Birthday Party", opt_festival: "Festival / Concert",
            placeholder_name: "First/Last Name",
            placeholder_phone: "Phone number...",
            placeholder_message: "Tell us more about your event...",
            footer_credits: "&copy; 2026 DJ KRENY. All Rights Reserved. Crafted for Ultimate Entertainment Experience.",
            swal_title: "SUCCESS!  ", swal_text: "Your booking request has been submitted successfully!"
        },
        sq: {
            services: "SHERBIME", nav_videos: "VIDEO", book: "REZERVO", hero_title: "ENERGJI & PASION",
            hero_subtitle: "ENERGJI <br> <span class='text-amber-500'>& PASION</span>",
            hero_btn: "REZERVO TANI", wedding_title: "DASMA", wedding_desc: "Atmosfere unike per naten tuaj me te rendesishme.",
            nightlife_title: "NIGHTLIFE", nightlife_desc: "Energji maksimale ne klubet me te mira.",
            events_title_main: "EVENTET", events_desc: "Muzike per cdo feste dhe event privat.",
            insta_title: "NDJENI <span class='text-amber-500'>ATMOSFEREN</span>",
            vid_sub: "Produksion Media", vid_title: "Performanca <span>Live</span> & Recaps",
            contact_sub: "Zyre Rezervimi", contact_title: "Le te Krijojme <span class='text-amber-500'>Magji</span>",
            contact_desc: "Gati per te siguruar nje eksperience muzikore unike per eventin tuaj? Na kontaktoni direkt ose plotesoni formen e rezervimit.",
            contact_loc: "Fier, Shqiperi", 
            lbl_name: "Emri Plote *", lbl_phone: "Numri i Telefonit *",
            lbl_date: "Data e Eventit *", lbl_time: "Ora e Eventit *", lbl_type: "Lloji i Eventit *",
            lbl_message: "Mesazhi ose Kerkesa Specifike", btn_submit: "Dergo Rezervimin",
            opt_choose: "Zgjidhni llojin...",
            opt_wedding: "Dasme", opt_club: "Club / Nightlife", opt_corporate: "Event / Ditelindje", opt_festival: "Festival / Koncert",
            placeholder_name: "Emer Mbiemer",
            placeholder_phone: "XX XXX XXXX",
            placeholder_message: "Na tregoni me shume per eventin tuaj...",
            footer_credits: "&copy; 2026 DJ KRENY. All Rights Reserved. Crafted for Ultimate Entertainment Experience.",
            swal_title: "SUKSES!  ", swal_text: "Veprimi u krye me sukses. Rezervimi juaj u dergua!"
        }
    };

    window.updateLanguage = function(lang) {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-placeholder-key]').forEach(el => {
            const key = el.getAttribute('data-placeholder-key');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    };

    window.setLang = function(lang) {
        localStorage.setItem("lang", lang);
        updateLanguage(lang);
        document.body.style.transition = "opacity 0.2s";
        document.body.style.opacity = "0.8";
        setTimeout(() => { document.body.style.opacity = "1"; }, 150);
        updateActiveLang(lang);
    };

    function updateActiveLang(lang) {
        const btnSq = document.getElementById("btn-sq");
        const btnEn = document.getElementById("btn-en");
        if(btnSq && btnEn) {
            btnSq.classList.remove("active"); btnEn.classList.remove("active");
            if(lang === "sq") btnSq.classList.add("active"); else btnEn.classList.add("active");
        }
    }

    // HIQET PRELOADER KUR FAQJA NGARKOHET
    const loader = document.getElementById('preloader');
    setTimeout(() => { if(loader) loader.classList.add('loaded'); }, 800);

    // Inicializimi i gjuhes se ruajtur ose default (sq)
    const savedLang = localStorage.getItem("lang") || "sq";
    updateLanguage(savedLang);
    updateActiveLang(savedLang);

    // MBROJTJA NDAJ KOPJIMIT PËRMBIRËSUAR (ANTI-COPY ELEGANTE)
    const warning = document.getElementById("copyWarning");
    function showWarning() {
        if(warning) {
            warning.classList.remove("opacity-0", "pointer-events-none");
            setTimeout(() => { warning.classList.add("opacity-0", "pointer-events-none"); }, 2000);
        }
    }

    // Bllokimi i Klikimit të Djathtë (PC) dhe shfaqja e Warning
    document.addEventListener("contextmenu", (e) => { 
        if (e.target.closest('input, textarea, select')) return;
        e.preventDefault(); 
        showWarning(); 
    });

    // Bllokimi i tentativës me komandën standarde Copy
    document.addEventListener("copy", (e) => {
        if (e.target.closest('input, textarea, select')) return;
        e.preventDefault();
        showWarning();
    });

    // Bllokimi i kombinimeve të tastierës (Ctrl+C, Ctrl+U, Ctrl+S)
    document.addEventListener("keydown", (e) => {
        if (e.target.closest('input, textarea, select')) return;
        if ((e.ctrlKey && e.key === "c") || (e.ctrlKey && e.key === "u") || (e.ctrlKey && e.key === "s") || (e.metaKey && e.key === "c")) { 
            e.preventDefault(); 
            showWarning(); 
        }
    });

    // Ndalimi i selektimit fillestar në nivel kodi JS
    document.addEventListener("selectstart", (e) => {
        if (!e.target.closest('input, textarea, select')) {
            e.preventDefault();
        }
    });

    // SENSORI I SHTYPJES SË GJATË (LONG PRESS PËR CELULARË)
    let touchTimeout;
    document.addEventListener("touchstart", (e) => {
        // Mos blloko shtypjen nëpër fusha shkrimi, butona ose linqe
        if (e.target.closest('input, textarea, select, button, a')) return;
        
        touchTimeout = setTimeout(() => {
            showWarning();
        }, 600); // 600 milisekonda shtypje e palëvizur aktivizon tabelën
    }, { passive: true });

    document.addEventListener("touchend", () => {
        clearTimeout(touchTimeout);
    });

    document.addEventListener("touchmove", () => {
        clearTimeout(touchTimeout);
    });

    // ANIMACIONET REVEAL (IntersectionObserver)
    const elements = document.querySelectorAll('.reveal');
    if (elements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
        }, { threshold: 0.1 });
        elements.forEach(el => observer.observe(el));
    }

    // DËRGIMI I FORMËS NË FORMSPREE
    const form = document.getElementById('bookingForm');
    const subBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const currentLang = localStorage.getItem("lang") || "sq";

            if (subBtn) { 
                subBtn.disabled = true; 
                subBtn.style.opacity = "0.6"; 
            }

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    if (typeof confetti !== 'undefined') {
                        confetti({ 
                            particleCount: 150, 
                            spread: 80, 
                            origin: { y: 0.6 }, 
                            colors: ['#fbbf24', '#ffffff', '#f59e0b'] 
                        });
                    }

                    if (typeof Swal !== 'undefined') {
                        Swal.fire({
                            title: translations[currentLang]?.swal_title || "SUKSES!",
                            text: translations[currentLang]?.swal_text || "Veprimi u krye me sukses. Rezervimi juaj u dergua!",
                            icon: 'success',
                            background: '#111111', 
                            color: '#ffffff', 
                            confirmButtonColor: '#fbbf24', 
                            confirmButtonText: 'OK'
                        });
                    }

                    form.reset();
                } else {
                    throw new Error('Gabim gjate perpunimit ne server.');
                }
            })
            .catch(err => {
                console.error("Gabim gjate dergimit:", err);
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        title: currentLang === 'en' ? 'Error!' : 'Gabim!',
                        text: currentLang === 'en' ? 'Something went wrong.' : 'Dicka shkoi gabim.',
                        icon: 'error',
                        background: '#111111',
                        color: '#ffffff',
                        confirmButtonColor: '#ef4444',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .finally(() => {
                if (subBtn) { 
                    subBtn.disabled = false; 
                    subBtn.style.opacity = "1"; 
                }
            });
        });
    }
});
