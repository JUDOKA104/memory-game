# 🧠 Memory Game - React & Vite

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Un jeu de mémoire classique développé avec **React** et **Vite**. Entraînez votre cerveau en retrouvant toutes les paires le plus rapidement possible avec le minimum de coups !

🎮 **[👉 JOUER AU JEU ICI (Live Demo) 👈](https://judoka104.github.io/memory-game/)**

---

## ✨ Fonctionnalités Principales

* **Animations 3D CSS :** Les cartes bénéficient d'un effet de retournement (flip) en 3D fluide grâce aux propriétés `perspective` et `transform-style: preserve-3d`.
* **Génération Dynamique :** À chaque nouvelle partie, le deck de cartes est dupliqué et mélangé aléatoirement (`Math.random() - 0.5`) pour garantir une rejouabilité infinie.
* **Sécurité Anti-Spam (Lock Board) :** Un système d'état (`isLocked`) empêche le joueur de cliquer sur plus de deux cartes simultanément pendant l'animation de vérification, évitant ainsi les bugs d'affichage.
* **Tracking des Statistiques :** Le jeu compte en temps réel le nombre de coups (paires retournées) joués par l'utilisateur.
* **Détection de Victoire :** Le jeu analyse l'état global du plateau et affiche un message de félicitations interactif lorsque toutes les paires sont trouvées.

---

## 🚀 Installation & Développement (Local)

Si vous souhaitez cloner le projet et le faire tourner sur votre machine :

**1. Cloner le dépôt :**
```bash
git clone [https://github.com/JUDOKA104/memory-game.git](https://github.com/JUDOKA104/memory-game.git)
```

**2. Aller dans le dossier :**
```bash
cd memory-game
```

**3. Installer les dépendances :**
```bash
npm install
```

**4. Lancer le serveur de développement local :**
```bash
npm run dev
```

---

## 🛠️ Architecture du Code

La logique du jeu repose sur une gestion rigoureuse des états React (`useState`). Chaque carte est un objet contenant un identifiant unique, une valeur, et deux états booléens (`isFlipped` et `isMatched`).

Lorsqu'une paire est incorrecte, un `setTimeout` asynchrone est utilisé pour laisser le temps au joueur de mémoriser les cartes avant de les retourner face cachée, tout en gardant le plateau verrouillé pour garantir l'intégrité de la boucle de gameplay.

---

Développé pour le fun et l'entraînement logique ! 🧩