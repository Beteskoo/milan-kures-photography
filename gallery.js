(function () {
  "use strict";

  var translations = {
    cs: {
      documentTitle: "Galerie podle lokalit | Milan Kureš",
      description: "Fotografické kolekce Milana Kureše uspořádané podle lokalit.",
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
      heroKicker: "KOLEKCE PODLE LOKALITY",
      heroTitle: "Výpravy v obrazech",
      heroLead: "Osm míst. Jeden pohled na přírodu.",
      heroCount: "8 lokalit · 16 fotografií",
      discoverCollections: "Procházet kolekce",
      collectionsKicker: "CESTY A DOMOV",
      collectionsTitle: "Galerie podle místa",
      collectionsIntro: "Každá složka zůstává samostatnou kolekcí. Názvy druhů, data a přesná místa doplníme až z ověřených podkladů.",
      filterLabel: "Filtrovat podle lokality",
      filterAll: "Vše",
      collectionLabel: "LOKALITA",
      twoPhotos: "2 fotografie",
      locMadeira: "Madeira",
      locSpain: "Španělsko",
      locCzechia: "Domovina česká",
      locNorway: "Norsko",
      locUganda: "Uganda",
      locBorneo: "Borneo",
      locSingapore: "Singapur",
      locCostaRica: "Kostarika",
      futureKicker: "PŘIPRAVENO K RŮSTU",
      futureTitle: "Od galerie k detailu fotografie.",
      futureText: "Každý snímek už má vlastní technický identifikátor. Později tak můžeme doplnit detail, ověřené údaje a případnou nabídku tisků bez přestavby celé galerie.",
      backToTop: "Zpět nahoru",
      closePhoto: "Zavřít fotografii",
      previousPhoto: "Předchozí fotografie",
      nextPhoto: "Další fotografie",
    },
    de: {
      documentTitle: "Galerie nach Orten | Milan Kureš",
      description: "Die fotografischen Sammlungen von Milan Kureš, nach Orten geordnet.",
      skipLink: "Zum Inhalt springen",
      brandSubtitle: "BIRD & NATURE PHOTOGRAPHER",
      mainNavLabel: "Hauptnavigation",
      languageLabel: "Sprache wählen",
      menuOpenLabel: "Menü öffnen",
      menuCloseLabel: "Menü schließen",
      navHome: "Start",
      navGallery: "Galerie",
      navAtlas: "Vogelatlas",
      navAbout: "Über mich",
      heroKicker: "SAMMLUNGEN NACH ORT",
      heroTitle: "Reisen in Bildern",
      heroLead: "Acht Orte. Ein Blick auf die Natur.",
      heroCount: "8 Orte · 16 Fotografien",
      discoverCollections: "Sammlungen entdecken",
      collectionsKicker: "REISEN UND HEIMAT",
      collectionsTitle: "Galerie nach Orten",
      collectionsIntro: "Jeder Ordner bleibt eine eigene Sammlung. Artennamen, Daten und genaue Orte ergänzen wir erst anhand geprüfter Angaben.",
      filterLabel: "Nach Ort filtern",
      filterAll: "Alle",
      collectionLabel: "ORT",
      twoPhotos: "2 Fotografien",
      locMadeira: "Madeira",
      locSpain: "Spanien",
      locCzechia: "Tschechische Heimat",
      locNorway: "Norwegen",
      locUganda: "Uganda",
      locBorneo: "Borneo",
      locSingapore: "Singapur",
      locCostaRica: "Costa Rica",
      futureKicker: "BEREIT ZU WACHSEN",
      futureTitle: "Von der Galerie zur Bildansicht.",
      futureText: "Jedes Bild hat bereits eine eigene technische Kennung. Später können wir eine Detailansicht, geprüfte Angaben und ein mögliches Printangebot ergänzen, ohne die ganze Galerie neu aufzubauen.",
      backToTop: "Nach oben",
      closePhoto: "Fotografie schließen",
      previousPhoto: "Vorherige Fotografie",
      nextPhoto: "Nächste Fotografie",
    },
    en: {
      documentTitle: "Gallery by location | Milan Kureš",
      description: "Milan Kureš photography collections arranged by location.",
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
      heroKicker: "COLLECTIONS BY LOCATION",
      heroTitle: "Journeys in pictures",
      heroLead: "Eight places. One view of nature.",
      heroCount: "8 locations · 16 photographs",
      discoverCollections: "Explore collections",
      collectionsKicker: "JOURNEYS AND HOME",
      collectionsTitle: "Gallery by location",
      collectionsIntro: "Each folder remains a separate collection. Species names, dates and exact places will be added only from verified information.",
      filterLabel: "Filter by location",
      filterAll: "All",
      collectionLabel: "LOCATION",
      twoPhotos: "2 photographs",
      locMadeira: "Madeira",
      locSpain: "Spain",
      locCzechia: "Czech homeland",
      locNorway: "Norway",
      locUganda: "Uganda",
      locBorneo: "Borneo",
      locSingapore: "Singapore",
      locCostaRica: "Costa Rica",
      futureKicker: "READY TO GROW",
      futureTitle: "From gallery to photograph detail.",
      futureText: "Every photograph already has its own technical identifier. Later, we can add a detail view, verified information and an optional print offer without rebuilding the entire gallery.",
      backToTop: "Back to top",
      closePhoto: "Close photograph",
      previousPhoto: "Previous photograph",
      nextPhoto: "Next photograph",
    }
  };

  var currentLanguage = "cs";
  var currentFilter = "vse";
  var currentLightboxIndex = 0;
  var languageTimer = null;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var validFilters = ["vse", "madeira", "spanelsko", "domovina-ceska", "norsko", "uganda", "borneo", "singapur", "costarika"];
  var siteHeader = document.getElementById("site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var languageButtons = Array.prototype.slice.call(document.querySelectorAll(".language-button"));
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".location-filter"));
  var collections = Array.prototype.slice.call(document.querySelectorAll(".location-collection"));
  var photoCards = Array.prototype.slice.call(document.querySelectorAll(".location-photo-card"));
  var locationStatus = document.getElementById("location-status");
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightbox-image");
  var lightboxCategory = document.getElementById("lightbox-category");
  var lightboxTitle = document.getElementById("lightbox-title");
  var lightboxPrevious = document.getElementById("lightbox-previous");
  var lightboxNext = document.getElementById("lightbox-next");
  var lightboxClose = document.querySelector("[data-lightbox-close]");

  function text(key) {
    return translations[currentLanguage][key] || translations.cs[key] || key;
  }

  function isMenuOpen() {
    return document.body.classList.contains("nav-open");
  }

  function setHeaderState() {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
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

  function visibleCards() {
    return photoCards.filter(function (card) {
      return !card.closest(".location-collection").hidden;
    });
  }

  function updateStatus() {
    var locationCount = collections.filter(function (collection) { return !collection.hidden; }).length;
    var photoCount = visibleCards().length;
    if (currentLanguage === "cs") {
      locationStatus.textContent = locationCount + (locationCount === 1 ? " lokalita, " : " lokalit, ") + photoCount + (photoCount >= 2 && photoCount <= 4 ? " fotografie" : " fotografií");
    } else if (currentLanguage === "de") {
      locationStatus.textContent = locationCount + (locationCount === 1 ? " Ort, " : " Orte, ") + photoCount + (photoCount === 1 ? " Foto" : " Fotos");
    } else {
      locationStatus.textContent = locationCount + (locationCount === 1 ? " location, " : " locations, ") + photoCount + (photoCount === 1 ? " photograph" : " photographs");
    }
  }

  function isLightboxOpen() {
    return lightbox.open || lightbox.hasAttribute("open");
  }

  function updateLightbox() {
    var cards = visibleCards();
    if (!cards.length) {
      return;
    }
    currentLightboxIndex = (currentLightboxIndex + cards.length) % cards.length;
    var card = cards[currentLightboxIndex];
    lightboxImage.src = card.getAttribute("data-full");
    lightboxCategory.textContent = text(card.getAttribute("data-location-key"));
    lightboxTitle.textContent = card.getAttribute("data-sequence");
    lightboxImage.alt = lightboxCategory.textContent + ", " + lightboxTitle.textContent;
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
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-aria-label]"), function (element) {
      element.setAttribute("aria-label", text(element.getAttribute("data-i18n-aria-label")));
    });
    languageButtons.forEach(function (button) {
      var active = button.getAttribute("data-language") === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    updateMenuLabel();
    updateStatus();
    if (isLightboxOpen()) {
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
    window.setTimeout(function () { button.classList.remove("is-activating"); }, 580);
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
      languageTimer = window.setTimeout(function () { document.body.classList.remove("language-entering"); }, 380);
    }, 135);
  }

  function applyFilter(filter, updateAddress) {
    if (validFilters.indexOf(filter) === -1) {
      filter = "vse";
    }
    currentFilter = filter;
    filterButtons.forEach(function (button) {
      var active = button.getAttribute("data-location-filter") === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    collections.forEach(function (collection) {
      collection.hidden = filter !== "vse" && collection.getAttribute("data-location") !== filter;
    });
    updateStatus();
    if (updateAddress && window.history && window.history.replaceState) {
      var address = filter === "vse" ? window.location.pathname + window.location.search : "#" + filter;
      window.history.replaceState(null, "", address);
    }
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
      revealElements.forEach(function (element) { element.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    revealElements.forEach(function (element) { observer.observe(element); });
  }

  navToggle.addEventListener("click", toggleMenu);
  Array.prototype.forEach.call(siteNav.querySelectorAll("a"), function (link) { link.addEventListener("click", closeMenu); });
  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () { selectLanguage(button.getAttribute("data-language"), button); });
  });
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () { applyFilter(button.getAttribute("data-location-filter"), true); });
  });
  photoCards.forEach(function (card) { card.addEventListener("click", function () { openLightbox(card); }); });
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrevious.addEventListener("click", function () { moveLightbox(-1); });
  lightboxNext.addEventListener("click", function () { moveLightbox(1); });
  lightbox.addEventListener("close", function () { document.body.classList.remove("lightbox-open"); });
  lightbox.addEventListener("click", function (event) { if (event.target === lightbox) { closeLightbox(); } });
  document.addEventListener("keydown", function (event) {
    if (!isLightboxOpen()) {
      return;
    }
    if (event.key === "ArrowLeft") {
      moveLightbox(-1);
    } else if (event.key === "ArrowRight") {
      moveLightbox(1);
    }
  });
  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("resize", function () { if (window.innerWidth > 1120) { closeMenu(); } });
  window.addEventListener("hashchange", function () {
    var hashFilter = window.location.hash.slice(1);
    applyFilter(validFilters.indexOf(hashFilter) > 0 ? hashFilter : "vse", false);
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
  var initialFilter = window.location.hash.slice(1);
  applyFilter(validFilters.indexOf(initialFilter) > 0 ? initialFilter : "vse", false);
  applyLanguage(savedLanguage);
  setHeaderState();
  prepareReveals();
})();
