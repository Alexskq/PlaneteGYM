window.PLANETEGYM_DEFAULT = {
  planning: {
    lundi: [
      { start: "12h30", end: "13h15", name: "POWER BARRE", type: "renfo" },
      { start: "18h00", end: "18h45", name: "AÉROMUSCULATION", type: "cardio" },
      { start: "18h50", end: "19h35", name: "PILATES / GARUDA", type: "souplesse" },
    ],
    mardi: [
      { start: "12h30", end: "13h15", name: "BIKE", type: "cardio" },
      { start: "18h00", end: "18h45", name: "STEP", type: "cardio" },
      { start: "18h55", end: "19h55", name: "POWER BARRE", type: "renfo" },
    ],
    mercredi: [
      { start: "12h30", end: "13h15", name: "ABDOS FESSIERS", type: "renfo" },
      { start: "18h00", end: "19h00", name: "BODYSCULPT", type: "renfo" },
      { start: "19h05", end: "20h05", name: "PILATES + STRETCHING", type: "souplesse" },
      { start: "20h00", end: "20h45", name: "BIKE", type: "cardio" },
    ],
    jeudi: [
      { start: "18h00", end: "18h45", name: "BIKE", type: "cardio" },
      { start: "18h55", end: "19h40", name: "HIIT", type: "intensif" },
      { start: "19h45", end: "20h30", name: "CARDIO DANCE", type: "cardio" },
    ],
    vendredi: [
      { start: "12h30", end: "13h15", name: "PILATES", type: "souplesse" },
      { start: "18h00", end: "18h45", name: "HIIT", type: "intensif" },
      { start: "18h55", end: "19h40", name: "BIKE", type: "cardio" },
    ],
    samedi: [],
    dimanche: [
      { start: "10h30", end: "11h30", name: "BIKE + ABDOS", type: "cardio" },
    ],
  },
  galerie: [
    { src: "/photos/cross-training-gorille.jpg", alt: "Zone Cross Training", span: "span2x2" },
    { src: "/photos/salle-musculation.jpg",      alt: "Salle musculation",  span: "" },
    { src: "/photos/cross-training.jpg",         alt: "Sac de boxe",        span: "" },
    { src: "/photos/machine-guidee.jpg",         alt: "Machine musculation", span: "" },
    { src: "/photos/halteres.jpg",               alt: "Haltères",           span: "" },
    { src: "/photos/machine-rouge.jpg",          alt: "Machine rouge",      span: "span2" },
    { src: "/photos/machine-2.jpg",              alt: "Machines",           span: "" },
    { src: "/photos/machine-inclinee.jpg",       alt: "Poulies",            span: "" },
  ],
  abonnements: [
    {
      name: "Carte 10 entrées",
      price: 65,
      sub: "soit 6,50 € / séance",
      label: "Sans engagement, à utiliser à votre rythme",
      features: ["10 entrées valables 1 an", "Accès plateau musculation", "Espace cardio inclus", "Cross training inclus"],
      featured: false,
    },
    {
      name: "Mensuel",
      price: 45,
      sub: "/ mois",
      label: "Sans engagement — résiliable chaque mois",
      features: ["Accès illimité à la salle", "Plateau musculation", "Espace cardio + Cross training", "Cours collectifs inclus", "Biking inclus"],
      featured: false,
    },
    {
      name: "Annuel",
      price: 35,
      sub: "/ mois · soit 360 € / an",
      label: "En 1 fois ou en 12 chèques",
      features: ["Accès illimité toute l'année", "Tous les espaces inclus", "Tous les cours collectifs", "Biking inclus", "Paiement en 12 chèques possible", "Conseils en diététique sportive"],
      featured: true,
      recommendedLabel: "Meilleur tarif",
    },
  ],
  horaires: {
    salle: [
      { period: "Lundi → Vendredi", hours: "6h00 → 23h00" },
      { period: "Samedi & Dimanche", hours: "9h00 → 19h00" },
    ],
    accueil: [
      { days: "Mar / Mer / Ven — matin", hours: "10h30 → 12h30" },
      { days: "Lundi → Vendredi — soir", hours: "17h30 → 19h30" },
      { days: "Dimanche", hours: "10h30 → 12h30" },
    ],
  },
};
