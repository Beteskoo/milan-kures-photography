(function () {
  "use strict";

  var translations = {
    cs: {
      documentTitle: "Milan Kureš | Bird & Nature Photographer",
      description: "Milan Kureš | Bird & Nature Photographer. Ptáci a příroda, můj svět v hledáčku.",
      skipLink: "Přejít na obsah",
      brandSubtitle: "BIRD & NATURE PHOTOGRAPHER",
      mainNavLabel: "Hlavní navigace",
      languageLabel: "Zvolit jazyk",
      menuOpenLabel: "Otevřít menu",
      menuCloseLabel: "Zavřít menu",
      navHome: "Úvod",
      navGallery: "Galerie",
      navAtlas: "Ptačí atlas",
      navAbout: "O mně",
      taglineFirst: "Ptáci a příroda.",
      taglineSecond: "Můj svět v hledáčku.",
      viewGallery: "Prohlédnout galerii",
      aboutMe: "O mně",
      locationVltava: "Meandr Vltavy",
      locationBohemia: "České Švýcarsko",
      previousPhoto: "Předchozí fotografie",
      nextPhoto: "Další fotografie",
      closePhoto: "Zavřít fotografii",
      discover: "Objevovat",
      introKicker: "PTÁCI · KRAJINA · ZVĚŘ",
      introTitle: "Příroda bez zbytečných slov.",
      introText: "Fotografie ptáků, krajiny a volně žijících zvířat. Každý snímek dostává prostor, aby mluvil sám za sebe.",
      categoryBirds: "Ptáci",
      categoryLandscape: "Krajina",
      categoryWildlife: "Zvěř",
      categoryMadeira: "Madeira",
      galleryKicker: "VÝBĚR Z GALERIE",
      galleryTitle: "Příběhy z přírody",
      galleryNote: "Kliknutím otevřete fotografii přes celou obrazovku.",
      openLocationGallery: "Otevřít všechny lokality",
      galleryFilterLabel: "Filtrovat galerii",
      filterAll: "Vše",
      madeiraKicker: "MADEIRA · TESTOVACÍ KOLEKCE",
      madeiraIntro: "Výběr snímků z kolekce Madeira.",
      photoJay: "Sojka obecná",
      photoTit: "Sýkora uhelníček",
      photoDeer: "Jelen",
      photoVltava: "Meandr Vltavy",
      photoBohemia: "České Švýcarsko",
      altJay: "Sojka obecná mezi větvemi jehličnanu",
      altTit: "Sýkora uhelníček na větvi jehličnanu",
      altDeer: "Jelen v podzimním lese",
      altVltava: "Meandr Vltavy obklopený lesy",
      altBohemia: "Výhled do krajiny Českého Švýcarska",
      altPortrait: "Milan Kureš fotografuje u jezera",
      atlasKicker: "WEB + APLIKACE",
      atlasTitle: "Galerie dnes.\nPtačí atlas zítra.",
      atlasText: "Návrh je připravený růst: od přehledné galerie přes atlas druhů až k případnému prodeji tisků. Základ webu přitom zůstane stejný.",
      roadmapGallery: "Filtrování galerie",
      roadmapGalleryState: "Funguje v náhledu",
      roadmapAtlas: "Ptačí atlas",
      roadmapAtlasState: "Připraveno k rozšíření",
      roadmapShop: "Tisky & e-shop",
      roadmapShopState: "Možné budoucí rozšíření",
      stateNow: "NYNÍ",
      stateNext: "DALŠÍ",
      stateFuture: "VÝHLED",
      aboutKicker: "O MNĚ",
      aboutTitle: "Za objektivem",
      aboutText: "Jsem amatérský fotograf a ornitolog. Fotografuji ptáky, volně žijící zvířata i krajinu.",
      readStory: "Přečíst celý příběh",
      backToGallery: "Zobrazit galerii",
      backToTop: "Zpět nahoru"
    },
    de: {
      documentTitle: "Milan Kureš | Vogel- & Naturfotograf",
      description: "Milan Kureš | Vogel- & Naturfotograf. Vögel und Natur, meine Welt im Sucher.",
      skipLink: "Zum Inhalt springen",
      brandSubtitle: "VOGEL- & NATURFOTOGRAF",
      mainNavLabel: "Hauptnavigation",
      languageLabel: "Sprache wählen",
      menuOpenLabel: "Menü öffnen",
      menuCloseLabel: "Menü schließen",
      navHome: "Start",
      navGallery: "Galerie",
      navAtlas: "Vogelatlas",
      navAbout: "Über mich",
      taglineFirst: "Vögel und Natur.",
      taglineSecond: "Meine Welt im Sucher.",
      viewGallery: "Galerie ansehen",
      aboutMe: "Über mich",
      locationVltava: "Moldau-Schleife",
      locationBohemia: "Böhmische Schweiz",
      previousPhoto: "Vorheriges Foto",
      nextPhoto: "Nächstes Foto",
      closePhoto: "Foto schließen",
      discover: "Entdecken",
      introKicker: "VÖGEL · LANDSCHAFT · WILDTIERE",
      introTitle: "Natur ohne viele Worte.",
      introText: "Fotografien von Vögeln, Landschaften und wild lebenden Tieren. Jedes Bild bekommt den Raum, für sich selbst zu sprechen.",
      categoryBirds: "Vögel",
      categoryLandscape: "Landschaft",
      categoryWildlife: "Wildtiere",
      categoryMadeira: "Madeira",
      galleryKicker: "AUSGEWÄHLTE FOTOGRAFIEN",
      galleryTitle: "Geschichten aus der Natur",
      galleryNote: "Klicken Sie auf ein Bild, um es im Vollbild zu öffnen.",
      openLocationGallery: "Alle Orte öffnen",
      galleryFilterLabel: "Galerie filtern",
      filterAll: "Alle",
      madeiraKicker: "MADEIRA · TESTKOLLEKTION",
      madeiraIntro: "Eine Auswahl aus der Madeira-Sammlung.",
      photoJay: "Eichelhäher",
      photoTit: "Tannenmeise",
      photoDeer: "Hirsch",
      photoVltava: "Moldau-Schleife",
      photoBohemia: "Böhmische Schweiz",
      altJay: "Ein Eichelhäher zwischen den Zweigen eines Nadelbaums",
      altTit: "Eine Tannenmeise auf einem Nadelbaumzweig",
      altDeer: "Ein Hirsch im herbstlichen Wald",
      altVltava: "Eine von Wäldern umgebene Moldau-Schleife",
      altBohemia: "Blick in die Landschaft der Böhmischen Schweiz",
      altPortrait: "Milan Kureš fotografiert an einem See",
      atlasKicker: "WEB + ANWENDUNG",
      atlasTitle: "Galerie heute.\nVogelatlas morgen.",
      atlasText: "Der Entwurf kann mitwachsen: von der übersichtlichen Galerie über einen Artenatlas bis zu einem möglichen Verkauf von Prints. Das Grundgerüst der Website bleibt dabei bestehen.",
      roadmapGallery: "Filterbare Galerie",
      roadmapGalleryState: "Funktioniert in dieser Vorschau",
      roadmapAtlas: "Vogelatlas",
      roadmapAtlasState: "Für die Erweiterung vorbereitet",
      roadmapShop: "Prints & Shop",
      roadmapShopState: "Mögliche künftige Erweiterung",
      stateNow: "JETZT",
      stateNext: "DANACH",
      stateFuture: "SPÄTER",
      aboutKicker: "ÜBER MICH",
      aboutTitle: "Hinter der Kamera",
      aboutText: "Ich bin Hobbyfotograf und Ornithologe. Ich fotografiere Vögel, wild lebende Tiere und Landschaften.",
      readStory: "Die ganze Geschichte lesen",
      backToGallery: "Galerie ansehen",
      backToTop: "Nach oben"
    },
    en: {
      documentTitle: "Milan Kureš | Bird & Nature Photographer",
      description: "Milan Kureš | Bird & Nature Photographer. Birds and nature, my world through the viewfinder.",
      skipLink: "Skip to content",
      brandSubtitle: "BIRD & NATURE PHOTOGRAPHER",
      mainNavLabel: "Main navigation",
      languageLabel: "Choose language",
      menuOpenLabel: "Open menu",
      menuCloseLabel: "Close menu",
      navHome: "Home",
      navGallery: "Gallery",
      navAtlas: "Bird atlas",
      navAbout: "About",
      taglineFirst: "Birds and nature.",
      taglineSecond: "My world through the viewfinder.",
      viewGallery: "View the gallery",
      aboutMe: "About me",
      locationVltava: "Vltava meander",
      locationBohemia: "Bohemian Switzerland",
      previousPhoto: "Previous photograph",
      nextPhoto: "Next photograph",
      closePhoto: "Close photograph",
      discover: "Discover",
      introKicker: "BIRDS · LANDSCAPE · WILDLIFE",
      introTitle: "Nature without needless words.",
      introText: "Photographs of birds, landscapes and wild animals. Each image is given the space to speak for itself.",
      categoryBirds: "Birds",
      categoryLandscape: "Landscape",
      categoryWildlife: "Wildlife",
      categoryMadeira: "Madeira",
      galleryKicker: "SELECTED PHOTOGRAPHS",
      galleryTitle: "Stories from nature",
      galleryNote: "Click a photograph to open it full screen.",
      openLocationGallery: "View all locations",
      galleryFilterLabel: "Filter the gallery",
      filterAll: "All",
      madeiraKicker: "MADEIRA · TEST COLLECTION",
      madeiraIntro: "A selection from the Madeira collection.",
      photoJay: "Eurasian jay",
      photoTit: "Coal tit",
      photoDeer: "Deer",
      photoVltava: "Vltava meander",
      photoBohemia: "Bohemian Switzerland",
      altJay: "A Eurasian jay among conifer branches",
      altTit: "A coal tit perched on a conifer branch",
      altDeer: "A deer in an autumn forest",
      altVltava: "A Vltava river meander surrounded by forests",
      altBohemia: "A view across the landscape of Bohemian Switzerland",
      altPortrait: "Milan Kureš taking a photograph beside a lake",
      atlasKicker: "WEBSITE + APPLICATION",
      atlasTitle: "A gallery today.\nA bird atlas tomorrow.",
      atlasText: "The concept is ready to grow: from a clear gallery to a species atlas and, one day, the sale of prints. The website's foundation can remain the same.",
      roadmapGallery: "Gallery filtering",
      roadmapGalleryState: "Working in this preview",
      roadmapAtlas: "Bird atlas",
      roadmapAtlasState: "Ready for expansion",
      roadmapShop: "Prints & shop",
      roadmapShopState: "Possible future expansion",
      stateNow: "NOW",
      stateNext: "NEXT",
      stateFuture: "LATER",
      aboutKicker: "ABOUT ME",
      aboutTitle: "Behind the lens",
      aboutText: "I am an amateur photographer and ornithologist. I photograph birds, wild animals and landscapes.",
      readStory: "Read the full story",
      backToGallery: "View the gallery",
      backToTop: "Back to top"
    }
  };

  var currentLanguage = "cs";
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var siteHeader = document.getElementById("site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var languageButtons = Array.prototype.slice.call(document.querySelectorAll(".language-button"));
  var hero = document.getElementById("uvod");
  var heroSlides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
  var heroLocation = document.getElementById("hero-location");
  var heroCurrent = document.getElementById("hero-current");
  var heroProgress = document.getElementById("hero-progress-fill");
  var heroPrevious = document.getElementById("hero-previous");
  var heroNext = document.getElementById("hero-next");
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".filter-button"));
  var quickFilters = Array.prototype.slice.call(document.querySelectorAll("[data-quick-filter]"));
  var photoCards = Array.prototype.slice.call(document.querySelectorAll(".photo-card"));
  var galleryCount = document.getElementById("gallery-count");
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightbox-image");
  var lightboxCategory = document.getElementById("lightbox-category");
  var lightboxTitle = document.getElementById("lightbox-title");
  var lightboxPrevious = document.getElementById("lightbox-previous");
  var lightboxNext = document.getElementById("lightbox-next");
  var lightboxClose = document.querySelector("[data-lightbox-close]");
  var currentHeroIndex = 0;
  var currentFilter = "vse";
  var currentLightboxIndex = 0;
  var heroTimer = null;
  var languageTimer = null;
  var touchStartX = 0;

  function text(key) {
    return translations[currentLanguage][key] || translations.cs[key] || key;
  }

  function setHeaderState() {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function isMenuOpen() {
    return document.body.classList.contains("nav-open");
  }

  function updateMenuLabel() {
    navToggle.setAttribute("aria-label", text(isMenuOpen() ? "menuCloseLabel" : "menuOpenLabel"));
  }

  function closeMenu() {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    updateMenuLabel();
  }

  function toggleMenu() {
    var opening = !isMenuOpen();
    document.body.classList.toggle("nav-open", opening);
    navToggle.setAttribute("aria-expanded", String(opening));
    updateMenuLabel();
  }

  function formatPhotoCount(count) {
    if (currentLanguage === "cs") {
      if (count === 1) {
        return "1 fotografie";
      }
      if (count >= 2 && count <= 4) {
        return count + " fotografie";
      }
      return count + " fotografií";
    }
    if (currentLanguage === "de") {
      return count + (count === 1 ? " Foto" : " Fotos");
    }
    return count + (count === 1 ? " photograph" : " photographs");
  }

  function visibleCards() {
    return photoCards.filter(function (card) {
      return !card.hidden;
    });
  }

  function updateGalleryCount() {
    galleryCount.textContent = formatPhotoCount(visibleCards().length);
  }

  function updateHeroLocation() {
    var key = heroSlides[currentHeroIndex].getAttribute("data-location-key");
    heroLocation.textContent = text(key);
  }

  function updateLightbox() {
    var cards = visibleCards();
    if (!cards.length) {
      return;
    }
    currentLightboxIndex = (currentLightboxIndex + cards.length) % cards.length;
    var card = cards[currentLightboxIndex];
    lightboxImage.src = card.getAttribute("data-full");
    var caption = card.querySelector("[data-photo-caption]");
    var titleKey = card.getAttribute("data-title-key");
    var category = text(card.getAttribute("data-category-key"));
    lightboxCategory.textContent = category;
    lightboxCategory.hidden = !caption && !titleKey;
    lightboxTitle.textContent = caption ? caption.textContent : titleKey ? text(titleKey) : category;
    lightboxTitle.lang = caption ? caption.lang : currentLanguage;
    lightboxImage.lang = lightboxTitle.lang;
    lightboxImage.alt = caption ? caption.textContent : titleKey ? text(card.getAttribute("data-alt-key")) : category;
  }

  function applyLanguage(language) {
    if (!translations[language]) {
      language = "cs";
    }
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = text("documentTitle");

    var description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", text("description"));
    }

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (element) {
      element.textContent = text(element.getAttribute("data-i18n"));
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-alt]"), function (element) {
      element.setAttribute("alt", text(element.getAttribute("data-i18n-alt")));
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-aria-label]"), function (element) {
      element.setAttribute("aria-label", text(element.getAttribute("data-i18n-aria-label")));
    });

    languageButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-language") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    updateMenuLabel();
    updateHeroLocation();
    updateGalleryCount();
    if (lightbox.open) {
      updateLightbox();
    }

    try {
      window.localStorage.setItem("milan-kures-language", language);
    } catch (error) {
      /* Preference persistence is optional. */
    }
  }

  function selectLanguage(language, button) {
    button.classList.remove("is-activating");
    void button.offsetWidth;
    button.classList.add("is-activating");
    window.setTimeout(function () {
      button.classList.remove("is-activating");
    }, 580);

    if (language === currentLanguage) {
      return;
    }

    window.clearTimeout(languageTimer);
    if (reducedMotion.matches) {
      applyLanguage(language);
      return;
    }

    document.body.classList.remove("language-entering");
    document.body.classList.add("language-leaving");
    languageTimer = window.setTimeout(function () {
      applyLanguage(language);
      document.body.classList.remove("language-leaving");
      document.body.classList.add("language-entering");
      languageTimer = window.setTimeout(function () {
        document.body.classList.remove("language-entering");
      }, 380);
    }, 135);
  }

  function restartHeroProgress() {
    heroProgress.classList.remove("is-running");
    void heroProgress.offsetWidth;
    if (!reducedMotion.matches) {
      heroProgress.classList.add("is-running");
    }
  }

  function stopHeroTimer() {
    window.clearTimeout(heroTimer);
    heroTimer = null;
    heroProgress.classList.remove("is-running");
  }

  function startHeroTimer() {
    stopHeroTimer();
    if (reducedMotion.matches || document.hidden) {
      return;
    }
    restartHeroProgress();
    heroTimer = window.setTimeout(function () {
      setHeroSlide(currentHeroIndex + 1, true);
    }, 8000);
  }

  function setHeroSlide(index, shouldRestart) {
    currentHeroIndex = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("is-active", slideIndex === currentHeroIndex);
    });
    heroCurrent.textContent = String(currentHeroIndex + 1).padStart(2, "0");
    updateHeroLocation();
    if (shouldRestart !== false) {
      startHeroTimer();
    }
  }

  function applyFilter(filter) {
    currentFilter = filter;
    filterButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-filter") === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    photoCards.forEach(function (card) {
      card.hidden = filter !== "vse" && card.getAttribute("data-category") !== filter;
    });
    updateGalleryCount();
  }

  function openLightbox(card) {
    var cards = visibleCards();
    currentLightboxIndex = Math.max(0, cards.indexOf(card));
    updateLightbox();
    document.body.classList.add("lightbox-open");
    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    } else {
      lightbox.setAttribute("open", "");
    }
  }

  function closeLightbox() {
    if (typeof lightbox.close === "function" && lightbox.open) {
      lightbox.close();
    } else {
      lightbox.removeAttribute("open");
      document.body.classList.remove("lightbox-open");
    }
  }

  function moveLightbox(direction) {
    currentLightboxIndex += direction;
    updateLightbox();
  }

  function prepareReveals() {
    var revealElements = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window) || reducedMotion.matches) {
      revealElements.forEach(function (element) {
        element.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  }

  navToggle.addEventListener("click", toggleMenu);
  Array.prototype.forEach.call(siteNav.querySelectorAll("a"), function (link) {
    link.addEventListener("click", closeMenu);
  });

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectLanguage(button.getAttribute("data-language"), button);
    });
  });

  heroPrevious.addEventListener("click", function () {
    setHeroSlide(currentHeroIndex - 1, true);
  });
  heroNext.addEventListener("click", function () {
    setHeroSlide(currentHeroIndex + 1, true);
  });

  hero.addEventListener("mouseenter", stopHeroTimer);
  hero.addEventListener("mouseleave", startHeroTimer);
  hero.addEventListener("focusin", stopHeroTimer);
  hero.addEventListener("focusout", function () {
    window.setTimeout(function () {
      if (!hero.contains(document.activeElement)) {
        startHeroTimer();
      }
    }, 0);
  });
  hero.addEventListener("touchstart", function (event) {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  hero.addEventListener("touchend", function (event) {
    var distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 55) {
      setHeroSlide(currentHeroIndex + (distance < 0 ? 1 : -1), true);
    }
  }, { passive: true });

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.getAttribute("data-filter"));
    });
  });

  quickFilters.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.getAttribute("data-quick-filter"));
      document.getElementById("galerie").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
    });
  });

  photoCards.forEach(function (card) {
    card.addEventListener("click", function () {
      openLightbox(card);
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrevious.addEventListener("click", function () {
    moveLightbox(-1);
  });
  lightboxNext.addEventListener("click", function () {
    moveLightbox(1);
  });
  lightbox.addEventListener("close", function () {
    document.body.classList.remove("lightbox-open");
  });
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (!lightbox.open) {
      return;
    }
    if (event.key === "ArrowLeft") {
      moveLightbox(-1);
    } else if (event.key === "ArrowRight") {
      moveLightbox(1);
    }
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopHeroTimer();
    } else {
      startHeroTimer();
    }
  });

  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1120) {
      closeMenu();
    }
  });

  var savedLanguage = "cs";
  try {
    var storedLanguage = window.localStorage.getItem("milan-kures-language");
    if (storedLanguage && translations[storedLanguage]) {
      savedLanguage = storedLanguage;
    }
  } catch (error) {
    /* Czech remains the default when storage is unavailable. */
  }

  applyLanguage(savedLanguage);
  applyFilter(currentFilter);
  setHeroSlide(0, false);
  setHeaderState();
  prepareReveals();
  startHeroTimer();
})();
