export const languages = {
  pl: "PL",
  en: "EN",
} as const;

export const defaultLang = "pl";

export type Lang = keyof typeof languages;

export const ui = {
  pl: {
    "meta.title": "BIT — Koło Naukowe AGH",
    "meta.description":
      "Studencka przestrzeń do wymiany wiedzy i testowania pomysłów. Koło Naukowe BIT na AGH.",
    "nav.about": "O nas",
    "nav.activity": "Działalność",
    "nav.board": "Zarząd",
    "nav.contact": "Kontakt",
    "nav.menu": "Otwórz menu",
    "hero.slogan":
      "Studencka przestrzeń do wymiany wiedzy i testowania pomysłów.",
    "logo.bit": "Logo koła naukowego BIT",
    "logo.faculty": "Logo Wydziału Informatyki AGH",
    "logo.agh": "Logo AGH",
    "about.title": "O nas",
    "about.body":
      "W Kole Naukowym BIT studenci AGH wspólnie rozwijają i dzielą się swoimi pasjami. Skupiamy osoby zafascynowane nowoczesnym tworzeniem oprogramowania, technologiami webowymi, algorytmami oraz sztuczną inteligencją.",
    "gallery.duck": "Student szukający błędu w kodzie z żółtą kaczką",
    "gallery.inauguration":
      "Zdjęcie studentów biorących udział w inauguracji koła naukowego BIT w roku 2025/2026",
    "gallery.hackathon":
      "Czterech członków zarządu koła pracujących przy laptopach podczas Hackathonu organizowanego przez koło naukowe BIT.",
    "gallery.people":
      "Czterech studentów w koszulkach koła naukowego BIT analizujących wyniki projektu na bardzo dużym monitorze",
    "sections.title": "Sekcje",
    "sections.body":
      "Poza realizacją własnych zainteresowań wspieramy się w nauce. Organizujemy zajęcia z matematyki i informatyki dla początkujących, aby wspólnie wymieniać się doświadczeniami i skuteczniej przygotowywać do zajęć uniwersyteckich.",
    "section.algo":
      "Dla pasjonatów algorytmiki. Reprezentujemy nas na AMPPZ i CERC oraz prowadzimy sparingi i zajęcia dla osób ze znajomością podstaw OI/OIJ.",
    "section.ai": "Zgłębiamy AI, Machine Learning i sieci neuronowe.",
    "section.infra":
      "Zajmujemy się infrastrukturą IT, pracą z systemem Linux oraz wdrażaniem aplikacji na serwery.",
    "section.web":
      "Dla pasjonatów aplikacji webowych. Realizujemy wspólne projekty oparte o technologie webowe.",
    "section.start":
      "Wspieramy studentów w walce o cenne ECTS-y, oferując pomoc w zakresie matematyki i podstaw programowania.",
    "board.title": "Zarząd",
    "footer.documents": "Dokumenty",
    "footer.statute": "Regulamin / Statut",
    "footer.social": "Social Media",
    "footer.contact": "Kontakt",
    "lang.switch": "Zmień język",
  },
  en: {
    "meta.title": "BIT — AGH Research Club",
    "meta.description":
      "A student space for sharing knowledge and trying out ideas. The BIT Research Club at AGH University of Krakow.",
    "nav.about": "About us",
    "nav.activity": "What we do",
    "nav.board": "Board",
    "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "hero.slogan":
      "A student space for sharing knowledge and trying out ideas.",
    "logo.bit": "BIT research club logo",
    "logo.faculty": "AGH Faculty of Computer Science logo",
    "logo.agh": "AGH logo",
    "about.title": "About us",
    "about.body":
      "At the BIT Research Club, AGH students develop and share their passions together. We bring together people fascinated by modern software development, web technologies, algorithms, and artificial intelligence.",
    "gallery.duck":
      "A student looking for a bug in code with a yellow rubber duck",
    "gallery.inauguration":
      "Students taking part in the BIT research club inauguration in the 2025/2026 academic year",
    "gallery.hackathon":
      "Four board members working on laptops during a hackathon organized by the BIT research club.",
    "gallery.people":
      "Four students in BIT research club T-shirts analyzing project results on a very large monitor",
    "sections.title": "Sections",
    "sections.body":
      "Besides pursuing our own interests, we support each other in our studies. We organize mathematics and computer science classes for beginners so we can share experience and prepare more effectively for university courses.",
    "section.algo":
      "For algorithmics enthusiasts. We compete at AMPPZ and CERC, and we run practice sessions and classes for people with a basic knowledge of OI/OIJ.",
    "section.ai": "We explore AI, machine learning, and neural networks.",
    "section.infra":
      "We work with IT infrastructure, Linux systems, and deploying applications to servers.",
    "section.web":
      "For web application enthusiasts. We work together on projects built with web technologies.",
    "section.start":
      "We support students in the race for valuable ECTS credits, offering help with mathematics and the basics of programming.",
    "board.title": "Board",
    "footer.documents": "Documents",
    "footer.statute": "Bylaws / Statute",
    "footer.social": "Social Media",
    "footer.contact": "Contact",
    "lang.switch": "Change language",
  },
} as const;
