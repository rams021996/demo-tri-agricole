// Fiches d'exemple : chaque entrée contient le message reçu d'un agriculteur,
// sa date de réception, et la fiche JSON produite par l'assistant IA.
//
// Format de la fiche :
//   culture  : texte ou null (si le message ne permet pas de l'identifier)
//   probleme : texte ou null (si aucun problème clair n'est décrit)
//   urgence  : "elevee" ou "normale"
//
// Ce fichier est chargé par une simple balise <script> dans index.html,
// ce qui permet d'ouvrir l'application sans serveur (double-clic).

const FICHES = [
  {
    id: 1,
    date: "2026-11-02",
    message: "Bonjour, je suis à Bohicon. Mon champ de maïs est attaqué par des chenilles qui mangent le cœur des plants. Ça avance très vite, la moitié du champ est touchée depuis hier. Que faire ?",
    fiche: { culture: "maïs", probleme: "chenilles dans le cornet", urgence: "elevee" }
  },
  {
    id: 2,
    date: "2026-11-03",
    message: "Je voudrais savoir à quelle période planter le niébé cette année à Kandi, après la récolte du maïs.",
    fiche: { culture: "niébé", probleme: null, urgence: "normale" }
  },
  {
    id: 3,
    date: "2026-11-04",
    message: "Les feuilles de mon manioc deviennent jaunes avec des taches et elles se déforment. Je suis à Pobè. Les boutures venaient d'un voisin.",
    fiche: { culture: "manioc", probleme: "feuilles jaunies et déformées", urgence: "normale" }
  },
  {
    id: 4,
    date: "2026-11-05",
    message: "Mes tomates flétrissent d'un coup, même quand j'arrose bien. Plusieurs plants sont déjà morts depuis deux jours. Grand-Popo.",
    fiche: { culture: "tomate", probleme: "flétrissement brutal des plants", urgence: "elevee" }
  },
  {
    id: 5,
    date: "2026-11-06",
    message: "Bonsoir, où est-ce que je peux trouver de l'engrais NPK moins cher vers Parakou ?",
    fiche: { culture: null, probleme: null, urgence: "normale" }
  },
  {
    id: 6,
    date: "2026-11-07",
    message: "Les ignames que j'ai stockées dans ma case commencent à pourrir, il y a une odeur et de l'eau qui sort. J'ai presque toute ma récolte dedans. Djougou.",
    fiche: { culture: "igname", probleme: "pourriture des tubercules en stockage", urgence: "elevee" }
  },
  {
    id: 7,
    date: "2026-11-08",
    message: "Mon soja a été bien levé, les plants sont beaux. Je voulais juste dire merci pour les conseils du mois passé.",
    fiche: { culture: "soja", probleme: null, urgence: "normale" }
  },
  {
    id: 8,
    date: "2026-11-09",
    message: "Les fruits d'ananas sont petits cette saison et certains ont une couleur rouge sur les feuilles. Je cultive la variété Pain de sucre à Allada.",
    fiche: { culture: "ananas", probleme: "fruits de petite taille et feuilles rougies", urgence: "normale" }
  },
  {
    id: 9,
    date: "2026-11-10",
    message: "Il y a un troupeau qui est entré dans mon champ cette nuit et ils ont tout piétiné. Ils sont encore là ce matin. Je ne sais pas qui appeler. Vers Malanville.",
    fiche: { culture: null, probleme: "divagation d'animaux dans le champ, dégâts en cours", urgence: "elevee" }
  },
  {
    id: 10,
    date: "2026-11-11",
    message: "Les gousses de mon niébé sont percées et il y a des petits insectes dedans. Je dois récolter dans deux semaines. Savalou.",
    fiche: { culture: "niébé", probleme: "gousses percées par des insectes", urgence: "normale" }
  },
  {
    id: 11,
    date: "2026-11-12",
    message: "Allô ? Vous m'entendez ? Je rappelle demain.",
    fiche: { culture: null, probleme: null, urgence: "normale" }
  },
  {
    id: 12,
    date: "2026-11-13",
    message: "Après les grosses pluies, l'eau ne descend pas dans mon champ de maïs à Lokossa. Les plants sont dans l'eau depuis trois jours et commencent à jaunir.",
    fiche: { culture: "maïs", probleme: "champ inondé, plants jaunissants", urgence: "elevee" }
  }
];
