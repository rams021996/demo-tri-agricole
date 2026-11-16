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

## Refaire ce projet chez vous

> **À savoir :** Claude Code demande un abonnement Claude payant ou un compte Console (voir la documentation pour la liste des offres). L'offre gratuite de claude.ai ne donne pas accès à Claude Code.
>
> Documentation officielle : https://code.claude.com/docs/en/setup.md

### 1. Installer Git (Windows)

Dans un terminal PowerShell :

```powershell
winget install --id Git.Git -e --source winget
```

Fermez puis rouvrez le terminal pour que la commande `git` soit reconnue.

### 2. Configurer votre identité Git

```bash
git config --global user.name "Votre nom"
git config --global user.email "votre adresse"
```

Conseil : utilisez l'adresse anonyme fournie par GitHub (du type `...@users.noreply.github.com`) pour ne pas rendre votre adresse personnelle publique dans l'historique. Vous la trouverez sur GitHub dans **Settings → Emails**.

### 3. Récupérer le projet

```bash
git clone https://github.com/rams021996/demo-tri-agricole.git
cd demo-tri-agricole
```

### 4. Installer Claude Code

Sous Windows (PowerShell) :

```powershell
irm https://claude.ai/install.ps1 | iex
```

Sous macOS ou Linux :

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Ouvrez ensuite un nouveau terminal et vérifiez l'installation :

```bash
claude --version
```

**Sous Windows, si le terminal ne trouve pas `claude`**, ajoutez son dossier d'installation au PATH (dans PowerShell) :

```powershell
$currentPath = [Environment]::GetEnvironmentVariable('PATH', 'User')
[Environment]::SetEnvironmentVariable('PATH', "$currentPath;$env:USERPROFILE\.local\bin", 'User')
```

Puis fermez et rouvrez le terminal (ou l'éditeur, si le terminal est intégré à VS Code par exemple).

### 5. Lancer Claude Code dans le projet

```bash
cd demo-tri-agricole
claude
```

Au premier lancement, Claude Code vous demande de vous connecter avec votre compte Claude : suivez les instructions affichées.
