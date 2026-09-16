// Atelier Nova — École de Design & Arts Numériques (établissement fictif)

export const ECOLE = {
  nom: "Atelier Nova",
  nomComplet: "École de Design & Arts Numériques",
  accroche: "Là où la créativité devient un métier.",
  ville: "Marseille, France",
  fondation: 2011,
  heroParagraphe:
    "Atelier Nova forme des designers, directeurs artistiques et créateurs d'expériences numériques capables de donner une forme sensible aux idées les plus ambitieuses.",
};

export const NAV_LINKS = [
  { id: "programmes", label: "Formations" },
  { id: "chiffres", label: "L'école" },
  { id: "admissions", label: "Admissions" },
  { id: "contact", label: "Contact" },
];

export const PROGRAMMES = [
  {
    niveau: "Bac +3",
    nom: "Bachelor Design Graphique",
    duree: "3 ans",
    description:
      "Une formation généraliste en identité visuelle, typographie et direction artistique, pour construire un regard et une pratique solide dès les premières années.",
    debouches: "Graphiste, designer junior, assistant direction artistique",
  },
  {
    niveau: "Bac +5",
    nom: "Diplôme Supérieur Design d'Interaction",
    duree: "5 ans",
    description:
      "Notre programme phare : UX/UI, design de produit numérique et prototypage avancé, avec un stage long en studio dès la quatrième année.",
    debouches: "Product designer, UX researcher, directeur de création",
  },
  {
    niveau: "Bac +5",
    nom: "Mastère Motion Design & 3D",
    duree: "18 mois",
    description:
      "Un programme intensif dédié à l'animation, au motion design et à la 3D temps réel, pensé pour des profils déjà formés au design ou à l'audiovisuel.",
    debouches: "Motion designer, artiste 3D temps réel, réalisateur d'animation",
  },
  {
    niveau: "Executive",
    nom: "Formation Continue — Direction Artistique",
    duree: "12 mois",
    description:
      "Conçue pour des designers en poste qui veulent évoluer vers des responsabilités de direction créative, en alternance avec leur activité professionnelle.",
    debouches: "Directeur artistique, responsable design, fondateur de studio",
  },
];

export const STATS = [
  { value: 14, suffix: " ans", label: "D'expérience dans l'enseignement du design" },
  { value: 850, suffix: "", label: "Étudiants sur le campus de Marseille" },
  { value: 88, suffix: "%", label: "D'insertion professionnelle à 6 mois" },
  { value: 30, suffix: "", label: "Nationalités représentées" },
  { value: 95, suffix: "+", label: "Studios et agences partenaires" },
  { value: 2100, suffix: "", label: "Diplômés dans le monde" },
];

export const TEMOIGNAGES = [
  {
    nom: "Lina Massot",
    promo: "Design d'Interaction, promotion 2020",
    poste: "Product Designer chez Kolibri Studio",
    citation:
      "Le stage long en quatrième année m'a mise directement au contact de vrais utilisateurs. J'ai appris plus en six mois en studio qu'en un an de cours magistraux.",
  },
  {
    nom: "Théo Vidal",
    promo: "Mastère Motion Design & 3D, promotion 2022",
    poste: "Artiste 3D temps réel chez Halo Pictures",
    citation:
      "L'atelier de rendu temps réel n'existait dans aucune autre école de la région. C'est ce plateau technique qui a fait la différence sur mon premier poste.",
  },
  {
    nom: "Sacha Bellamy",
    promo: "Formation Continue, promotion 2023",
    poste: "Fondatrice du studio Bellamy&Co",
    citation:
      "Reprendre une formation en direction artistique à 36 ans, en gardant mon activité de freelance, m'a donné le cadre dont j'avais besoin pour lancer mon studio.",
  },
];

export const ADMISSIONS_ETAPES = [
  {
    numero: "01",
    titre: "Dossier et book créatif",
    description: "Déposez votre dossier scolaire accompagné d'un book de dix à vingt travaux personnels.",
  },
  {
    numero: "02",
    titre: "Test de culture visuelle",
    description: "Une épreuve écrite pour évaluer votre curiosité et votre culture graphique et artistique.",
  },
  {
    numero: "03",
    titre: "Entretien avec un directeur artistique",
    description: "Un échange de 30 minutes autour de votre book avec un professionnel en activité.",
  },
  {
    numero: "04",
    titre: "Résultats et intégration",
    description: "Réponse sous 15 jours, puis accompagnement personnalisé jusqu'à la rentrée.",
  },
];

export const MANIFESTE = {
  eyebrow: "Notre philosophie",
  titre: "Un bon designer résout des problèmes. Un grand designer les rend invisibles.",
  paragraphe1:
    "Depuis 2011, Atelier Nova part d'un principe simple : le design n'est pas une couche esthétique qu'on ajoute à la fin, c'est une manière de penser qui doit infuser tout le processus. C'est pour ça que nos étudiants passent autant de temps à comprendre un problème qu'à dessiner sa solution.",
  paragraphe2:
    "Nous croyons qu'un designer qui n'a jamais présenté son travail à un client insatisfait n'est pas encore un professionnel. Alors nous mettons nos étudiants en studio dès la première année, avec de vrais commanditaires qui attendent de vraies réponses.",
};

export const TIMELINE = [
  {
    annee: "2011",
    titre: "Fondation à Marseille",
    texte: "Atelier Nova ouvre dans un ancien entrepôt du quartier de la Joliette, avec 40 étudiants et un seul atelier.",
  },
  {
    annee: "2014",
    titre: "Premier partenariat studio",
    texte: "Signature du premier partenariat avec un studio de design local, ouvrant la voie aux stages longs en quatrième année.",
  },
  {
    annee: "2016",
    titre: "Lancement du Diplôme Design d'Interaction",
    texte: "Face à la demande du marché, l'école ouvre son deuxième programme dédié au design numérique.",
  },
  {
    annee: "2019",
    titre: "Ouverture de l'atelier de rendu temps réel",
    texte: "Un plateau technique dédié à la 3D et au motion design, unique dans les écoles de design de la région.",
  },
  {
    annee: "2022",
    titre: "Lancement de la Formation Continue",
    texte: "Un programme dédié aux designers en poste qui veulent évoluer vers des responsabilités de direction créative.",
  },
  {
    annee: "2024",
    titre: "200 étudiants, nouveau campus",
    texte: "Déménagement dans un campus deux fois plus grand pour accompagner la croissance des promotions.",
  },
];

export const EXPERTISES = [
  {
    titre: "Studio, pas salle de classe",
    description:
      "Nos enseignements se déroulent en configuration studio, avec des critiques de travaux collectives inspirées des ateliers professionnels, pas des cours magistraux descendants.",
  },
  {
    titre: "Commanditaires réels",
    description:
      "Chaque projet de fin de semestre est confié par une entreprise ou une association partenaire, avec un vrai brief et une vraie présentation devant le commanditaire.",
  },
  {
    titre: "Corps enseignant en activité",
    description:
      "Tous nos intervenants en direction artistique et motion design exercent en parallèle dans des studios, agences ou en freelance.",
  },
  {
    titre: "Book professionnel dès l'entrée",
    description:
      "Chaque étudiant construit son book dès la première année, avec un suivi individuel pour qu'il reflète une pratique personnelle, pas un simple dossier scolaire.",
  },
];

export const VIE_CAMPUS = {
  eyebrow: "Vie étudiante",
  titre: "Un atelier ouvert plus longtemps qu'un simple campus.",
  intro:
    "Un ancien entrepôt réhabilité à la Joliette, pensé comme un vrai studio de création plutôt que comme une école classique.",
  points: [
    {
      titre: "Ateliers en libre accès",
      description: "Sérigraphie, reliure, impression 3D et plateau de tournage, accessibles en autonomie à tout étudiant formé.",
    },
    {
      titre: "Galerie étudiante Nova Expo",
      description: "Une exposition semestrielle ouverte au public, où chaque promotion présente ses meilleurs projets de l'année.",
    },
    {
      titre: "Junior-agence de design",
      description: "Une agence gérée par les étudiants, qui réalise de vraies missions rémunérées pour des associations et petites entreprises locales.",
    },
    {
      titre: "Résidence d'artistes invités",
      description: "Chaque trimestre, un designer ou artiste reconnu vient animer un workshop intensif d'une semaine.",
    },
  ],
};

export const EQUIPE = [
  {
    nom: "Nadia Aroussi",
    role: "Directrice générale",
    bio: "Ancienne directrice artistique dans un studio parisien, elle a fondé Atelier Nova en 2011 pour former des designers prêts à affronter de vrais commanditaires.",
  },
  {
    nom: "Hugo Ferrand",
    role: "Directeur pédagogique",
    bio: "Designer d'interaction reconnu, il a conçu la maquette du Diplôme Design d'Interaction et continue à exercer en parallèle dans son propre studio.",
  },
  {
    nom: "Camille Torres",
    role: "Responsable des partenariats studios",
    bio: "Elle gère les 95 studios et agences partenaires et pilote le placement des étudiants en stage long dès la quatrième année.",
  },
  {
    nom: "Yohan Berthier",
    role: "Responsable du plateau technique",
    bio: "Ancien superviseur d'animation, il dirige l'atelier de rendu temps réel et encadre les projets de motion design et 3D.",
  },
];

export const PARTENAIRES = [
  "KOLIBRI STUDIO",
  "HALO PICTURES",
  "BELLAMY&CO",
  "ATELIER MERIDIEN",
  "STUDIO ARCANE",
  "MAISON VOLTA",
  "FORME NOIRE",
  "LUMEN CRÉATIF",
];

export const ACTUALITES = [
  {
    date: "2026-04-30",
    categorie: "Exposition",
    titre: "Nova Expo affiche complet pour sa dixième édition",
    extrait: "Plus de 400 visiteurs sont attendus pour découvrir les projets de fin d'année des quatre promotions.",
  },
  {
    date: "2026-02-14",
    categorie: "Partenariat",
    titre: "Un nouveau partenariat avec le studio Halo Pictures",
    extrait: "Les étudiants du Mastère Motion Design pourront désormais candidater à un stage long chez ce studio d'animation.",
  },
  {
    date: "2025-11-08",
    categorie: "Résidence",
    titre: "Une designer typographique reconnue en résidence d'une semaine",
    extrait: "Un workshop intensif a permis à 30 étudiants de retravailler entièrement leur pratique de la composition typographique.",
  },
  {
    date: "2025-09-15",
    categorie: "Vie étudiante",
    titre: "La junior-agence de design lance sa première mission internationale",
    extrait: "Une association humanitaire basée à Bruxelles a confié sa refonte d'identité visuelle à nos étudiants.",
  },
];

export const FAQ = [
  {
    q: "Faut-il un book pour candidater en première année ?",
    a: "Un book n'est pas obligatoire pour le Bachelor Design Graphique, mais fortement recommandé. Il devient indispensable à partir du Diplôme Design d'Interaction.",
  },
  {
    q: "Les projets sont-ils vraiment confiés par de vraies entreprises ?",
    a: "Oui, systématiquement à partir de la deuxième année. Chaque brief provient d'un commanditaire réel parmi nos 95 studios et entreprises partenaires.",
  },
  {
    q: "Peut-on se spécialiser en motion design sans formation initiale en 3D ?",
    a: "Oui, le Mastère Motion Design & 3D est ouvert aux profils issus du design comme de l'audiovisuel, avec une remise à niveau technique en début de programme.",
  },
  {
    q: "La formation continue est-elle compatible avec une activité freelance ?",
    a: "Oui, le format est pensé pour des designers en poste ou en freelance, avec des sessions groupées qui limitent l'impact sur l'activité professionnelle.",
  },
  {
    q: "Comment se passe la recherche de stage ?",
    a: "Chaque étudiant est suivi par un référent stage dès la deuxième année, avec un accès prioritaire aux offres de nos 95 studios et agences partenaires.",
  },
];

export const PROJETS_ETUDIANTS = [
  {
    annee: "2025",
    categorie: "Identité visuelle",
    nom: "Refonte Maison Volta",
    description: "Une nouvelle identité visuelle complète pour une marque de mobilier, réalisée en atelier de troisième année.",
  },
  {
    annee: "2024",
    categorie: "Motion Design",
    nom: "Générique Halo Pictures",
    description: "Un générique d'ouverture de 45 secondes produit pour un studio d'animation partenaire, en 3D temps réel.",
  },
  {
    annee: "2024",
    categorie: "Design d'Interaction",
    nom: "Application Forme Noire",
    description: "Un prototype d'application mobile pour une agence de sport, testé auprès de 40 utilisateurs réels.",
  },
  {
    annee: "2023",
    categorie: "Direction Artistique",
    nom: "Campagne Lumen Créatif",
    description: "Une campagne d'affichage complète conçue et présentée directement au client commanditaire.",
  },
  {
    annee: "2023",
    categorie: "Typographie",
    nom: "Caractère Nova Sans",
    description: "Une famille typographique originale dessinée sur deux semestres, aujourd'hui utilisée par deux studios partenaires.",
  },
];

export const CASE_STUDY = {
  eyebrow: "Étude de cas",
  titre: "Refonte d'identité pour Bellamy&Co",
  client: "Bellamy&Co",
  secteur: "Studio de design indépendant",
  annee: "2025",
  probleme:
    "Bellamy&Co, jeune studio fondé par une ancienne diplômée, avait besoin d'une identité visuelle forte pour décrocher ses premiers clients institutionnels, avec un budget très limité.",
  approche:
    "Quatre étudiantes de quatrième année en Direction Artistique ont pris le projet comme commande réelle, avec trois allers-retours de présentation client sur un trimestre.",
  solution:
    "Une identité modulaire construite autour d'un monogramme réversible, déclinable du papier à en-tête jusqu'aux supports d'exposition, livrée avec une charte complète.",
  resultats: [
    { valeur: "3", label: "Clients signés en 2 mois" },
    { valeur: "12", label: "Semaines de projet" },
    { valeur: "4", label: "Étudiantes impliquées" },
    { valeur: "1er", label: "Prix étudiant régional" },
  ],
  citation:
    "Je n'aurais jamais pu me payer une identité de ce niveau en démarrant mon studio. Ce sont elles qui m'ont donné une vraie crédibilité face à mes premiers clients.",
  citationAuteur: "Fondatrice, Bellamy&Co",
};

export const FOOTER_COLONNES = [
  {
    titre: "École",
    liens: [
      { label: "L'école", id: "chiffres" },
      { label: "Notre histoire", id: "histoire" },
      { label: "Équipe", id: "equipe" },
      { label: "Contact", id: "contact" },
    ],
  },
  {
    titre: "Formations",
    liens: [
      { label: "Bachelor Design Graphique", id: "programmes" },
      { label: "Design d'Interaction", id: "programmes" },
      { label: "Motion Design & 3D", id: "programmes" },
      { label: "Direction Artistique", id: "programmes" },
    ],
  },
  {
    titre: "Ressources",
    liens: [
      { label: "Admissions", id: "admissions" },
      { label: "Actualités", id: "actualites" },
      { label: "FAQ", id: "faq" },
      { label: "Partenaires", id: "partenaires" },
    ],
  },
];
