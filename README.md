# demo-tri-agricole

Petite application web de démonstration pour un atelier.

Une application agricole reçoit des messages d'agriculteurs du Bénin. Un assistant IA les trie et produit pour chacun une fiche JSON :

```json
{ "culture": "maïs", "probleme": "chenilles dans le cornet", "urgence": "elevee" }
```

- `culture` : texte ou `null`
- `probleme` : texte ou `null`
- `urgence` : `"elevee"` ou `"normale"`

## Utilisation

Double-cliquez sur `index.html` : la page s'ouvre dans le navigateur, sans serveur ni installation.

## Fichiers

- `fiches.js` : 12 fiches d'exemple (message d'origine, date, fiche JSON).
- `index.html` : affiche le nombre total de fiches, le nombre de cas urgents, et un tableau des fiches avec les cas urgents en premier.
