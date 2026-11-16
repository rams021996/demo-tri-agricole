# Suivi du projet

## 16/11/2026

- **Création de l'application de démonstration**
  - `fiches.js` : 12 fiches d'exemple pour le Bénin (maïs, manioc, igname, niébé, soja, tomate, ananas), chacune avec le message de l'agriculteur, sa date et la fiche JSON (`culture`, `probleme`, `urgence`). Plusieurs cas ont `culture` ou `probleme` à `null`.
  - `index.html` : compteurs (total des fiches, cas urgents) et tableau des fiches, cas urgents en premier et mis en évidence. S'ouvre par double-clic, sans serveur. Tout l'affichage passe par la fonction `afficher(fiches)`, pour faciliter l'ajout d'un filtre pendant l'atelier.
  - `README.md` : présentation du projet et utilisation.
- **Consigne de langue** : création de `CLAUDE.md` avec « Réponds toujours en français. »
- **Règle des fiches (aucun diagnostic, aucune cause, aucun traitement)**
  - Retrait des précisions entre parenthèses dans le champ `probleme` (fiches 1, 3, 4, 8 et 10).
  - Fiche 5 (question sur l'engrais NPK) : `probleme` passé à `null`.
- **Git**
  - Commit `34dfa5c` sur la branche `demo-atelier`, poussé sur GitHub.
  - Branche fusionnée dans `main` via la pull request #1 (`3e7e7df`), puis récupérée en local.
  - Branche `demo-atelier` supprimée en local et sur GitHub.
- **Suivi** : création de `SUIVI.md` et ajout dans `CLAUDE.md` de la consigne de le mettre à jour après chaque modification.
