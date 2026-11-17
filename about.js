(function () {
  "use strict";

  var translations = {
    cs: {
      documentTitle: "O mně | Milan Kureš",
      description: "Příběh Milana Kureše, fotografa ptáků a přírody.",
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
      aboutKicker: "O MNĚ",
      aboutPageTitle: "O mně",
      taglineFirst: "Ptáci a příroda.",
      taglineSecond: "Můj svět v hledáčku.",
      readMyStory: "Přečíst můj příběh",
      altPortrait: "Milan Kureš fotografuje u jezera",
      storyKicker: "MŮJ PŘÍBĚH",
      storyTitle: "Od dětských toulek k cestám za přírodou.",
      storyAriaLabel: "Životní příběh Milana Kureše",
      chapterRoots: "Kořeny",
      chapterDream: "Sen, který počkal",
      chapterLens: "Za objektivem",
      chapterJourneys: "Cesty",
      aboutParagraph1: "Už jako dítě jsem se s dědou toulal po lese. Ukazoval mi, kde mají ptáci hnízda, a učil mě poznávat jednotlivé druhy ptáků i dalších zvířat.",
      aboutParagraph2: "Přečetl jsem spoustu knih o přírodě a stal se pravidelným návštěvníkem knihovny. Už tehdy jsem se učil latinské názvy ptáků a snil o tom, že jednou budu cestovat za ptáky po celém světě.",
      aboutParagraph3: "Za totalitního režimu mi byla odepřena možnost býti ornitologem, a tak si svůj sen začínám nyní plnit jako cestovatelský fotograf.",
      aboutParagraph4: "Život ale utíkal. Práce, starosti a každodenní povinnosti dlouho dostávaly přednost. Dnes se konečně můžu svým koníčkům věnovat naplno. Postupně jsem začal také fotografovat. Přírodu jsem už nechtěl jen pozorovat vlastníma očima. Chtěl jsem si své zážitky uchovat a zároveň se o ně podělit s ostatními.",
      aboutParagraph5: "Na začátku byly fotografické kurzy a seznamování s technikou. Nejprve jsem používal menší objektiv, později přišel větší, Nikon 200 až 500 mm. Později jsem si pořídil dlouhé sklo.",
      aboutParagraph6: "Zatím jde pouze o můj koníček, ale rád bych to jednou proměnil v profesi, aby se má zábava stala prací.",
      aboutParagraph7: "Postupně jsem začal také cestovat se zoologem Vladimírem Lemberkem. První cestou byla Kostarika, následovalo Borneo a Singapur a později Uganda, kam jsme se vydali za horskými gorilami.",
      factsAriaLabel: "Stručné body příběhu",
      inFocus: "V HLEDÁČKU",
      factRootsLabel: "Kořeny",
      factRootsValue: "Les, ptáci a ornitologie",
      factGearLabel: "Technika",
      factJourneysLabel: "Cesty",
      factJourneysValue: "Kostarika, Borneo, Singapur, Uganda",
      ctaKicker: "FOTOGRAFIE",
      ctaTitle: "Příběh pokračuje v obrazech.",
      viewGallery: "Prohlédnout galerii",
      backHome: "Zpět na úvod"
    },
    de: {
      documentTitle: "Über mich | Milan Kureš",
      description: "Die Geschichte von Milan Kureš, Fotograf für Vögel und Natur.",
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
      aboutKicker: "ÜBER MICH",
      aboutPageTitle: "Über mich",
      taglineFirst: "Vögel und Natur.",
      taglineSecond: "Meine Welt im Sucher.",
      readMyStory: "Meine Geschichte lesen",
      altPortrait: "Milan Kureš fotografiert an einem See",
      storyKicker: "MEINE GESCHICHTE",
      storyTitle: "Von den Streifzügen der Kindheit zu Reisen in die Natur.",
      storyAriaLabel: "Die Lebensgeschichte von Milan Kureš",
      chapterRoots: "Wurzeln",
      chapterDream: "Ein Traum, der warten musste",
      chapterLens: "Hinter der Kamera",
      chapterJourneys: "Reisen",
      aboutParagraph1: "Schon als Kind streifte ich mit meinem Großvater durch den Wald. Er zeigte mir, wo die Vögel ihre Nester hatten, und brachte mir bei, die einzelnen Vogelarten und andere Tiere zu erkennen.",
      aboutParagraph2: "Ich las viele Bücher über die Natur und wurde zu einem regelmäßigen Besucher der Bibliothek. Schon damals lernte ich die lateinischen Namen der Vögel und träumte davon, eines Tages den Vögeln um die Welt zu folgen.",
      aboutParagraph3: "Während des totalitären Regimes wurde mir die Möglichkeit verwehrt, Ornithologe zu werden. Heute beginne ich, mir diesen Traum als reisender Fotograf zu erfüllen.",
      aboutParagraph4: "Doch das Leben ging weiter. Arbeit, Sorgen und alltägliche Pflichten hatten lange Vorrang. Heute kann ich mich meinen Interessen endlich mit ganzer Kraft widmen. Nach und nach begann ich auch zu fotografieren. Ich wollte die Natur nicht mehr nur mit eigenen Augen beobachten. Ich wollte meine Erlebnisse bewahren und zugleich mit anderen teilen.",
      aboutParagraph5: "Am Anfang standen Fotokurse und das Kennenlernen der Technik. Zunächst benutzte ich ein kleineres Objektiv. Später kam ein größeres hinzu, das Nikon 200 bis 500 mm. Danach legte ich mir ein langes Teleobjektiv zu.",
      aboutParagraph6: "Noch ist es nur mein Hobby. Eines Tages möchte ich es jedoch zum Beruf machen, damit aus meiner Freude auch meine Arbeit werden kann.",
      aboutParagraph7: "Mit der Zeit begann ich außerdem, gemeinsam mit dem Zoologen Vladimír Lemberk zu reisen. Die erste Reise führte nach Costa Rica, danach folgten Borneo und Singapur und später Uganda, wo wir uns auf die Suche nach Berggorillas machten.",
      factsAriaLabel: "Kurze Stationen der Geschichte",
      inFocus: "IM SUCHER",
      factRootsLabel: "Wurzeln",
      factRootsValue: "Wald, Vögel und Ornithologie",
      factGearLabel: "Technik",
      factJourneysLabel: "Reisen",
      factJourneysValue: "Costa Rica, Borneo, Singapur, Uganda",
      ctaKicker: "FOTOGRAFIE",
      ctaTitle: "Die Geschichte geht in Bildern weiter.",
      viewGallery: "Galerie ansehen",
      backHome: "Zur Startseite"
    },
    en: {
      documentTitle: "About | Milan Kureš",
      description: "The story of Milan Kureš, a bird and nature photographer.",
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
      aboutKicker: "ABOUT ME",
      aboutPageTitle: "About me",
      taglineFirst: "Birds and nature.",
      taglineSecond: "My world through the viewfinder.",
      readMyStory: "Read my story",
      altPortrait: "Milan Kureš taking a photograph beside a lake",
      storyKicker: "MY STORY",
      storyTitle: "From childhood walks to journeys into nature.",
      storyAriaLabel: "The life story of Milan Kureš",
      chapterRoots: "Roots",
      chapterDream: "A dream that had to wait",
      chapterLens: "Behind the lens",
      chapterJourneys: "Journeys",
      aboutParagraph1: "As a child, I used to roam the forest with my grandfather. He showed me where birds nested and taught me to recognise individual species of birds and other animals.",
      aboutParagraph2: "I read many books about nature and became a regular visitor to the library. Even then, I learned the Latin names of birds and dreamed that one day I would travel the world in search of them.",
      aboutParagraph3: "Under the totalitarian regime, I was denied the opportunity to become an ornithologist. Today, I am beginning to fulfil that dream as a travelling photographer.",
      aboutParagraph4: "Life moved on. Work, worries and everyday responsibilities took priority for a long time. Today, I can finally devote myself fully to my interests. Gradually, I also began to take photographs. I no longer wanted only to observe nature with my own eyes. I wanted to preserve my experiences and share them with others.",
      aboutParagraph5: "It began with photography courses and learning about the equipment. At first, I used a smaller lens. Later came a larger one, the Nikon 200 to 500 mm. Eventually, I added a long telephoto lens.",
      aboutParagraph6: "For now, it is only my hobby, but one day I would like to turn it into a profession, so that something I enjoy can also become my work.",
      aboutParagraph7: "Over time, I also began travelling with the zoologist Vladimír Lemberk. Our first journey was to Costa Rica, followed by Borneo and Singapore, and later Uganda, where we set out in search of mountain gorillas.",
      factsAriaLabel: "Key points from the story",
      inFocus: "IN FOCUS",
      factRootsLabel: "Roots",
      factRootsValue: "Forest, birds and ornithology",
      factGearLabel: "Equipment",
      factJourneysLabel: "Journeys",
      factJourneysValue: "Costa Rica, Borneo, Singapore, Uganda",
      ctaKicker: "PHOTOGRAPHY",
      ctaTitle: "The story continues in pictures.",
      viewGallery: "View the gallery",
      backHome: "Back to home"
    }
  };

  var currentLanguage = "cs";
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var siteHeader = document.getElementById("site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var languageButtons = Array.prototype.slice.call(document.querySelectorAll(".language-button"));
  var languageTimer = null;

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

  function prepareReveals() {
    var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      reveals.forEach(function (element) {
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
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    reveals.forEach(function (element) {
      observer.observe(element);
    });
  }

  navToggle.addEventListener("click", toggleMenu);

  siteNav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectLanguage(button.getAttribute("data-language"), button);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isMenuOpen()) {
      closeMenu();
      navToggle.focus();
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
  setHeaderState();
  prepareReveals();
})();
