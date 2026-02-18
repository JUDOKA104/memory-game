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
* **Génération Dynamique :** À chaque nouvelle partie, le deck de cartes est dupliqué, doté d'IDs uniques (`crypto.randomUUID()`), et mélangé aléatoirement pour garantir une rejouabilité infinie.
* **Sécurité Anti-Spam (Lock Board) :** Un système d'état (`isLocked`) empêche le joueur de cliquer sur plus de deux cartes simultanément pendant l'animation de vérification, évitant les bugs d'affichage.
* **Sauvegarde Persistante :** Si le joueur quitte ou rafraîchit la page, sa partie est sauvegardée en temps réel via le `localStorage`. Un système de "nettoyage" retourne automatiquement face cachée les cartes non appairées au chargement pour éviter les softlocks.
* **Détection de Victoire :** Le jeu analyse l'état global du plateau et affiche un message interactif lorsque toutes les paires sont trouvées, avec le décompte des coups joués.

---

## 🚀 Installation & Développement (Local)

**1. Cloner le dépôt :**
```bash
git clone [https://github.com/JUDOKA104/memory-game.git](https://github.com/JUDOKA104/memory-game.git)
```
**2. Aller dans le dossier et installer les dépendances :**
```bash
cd memory-game && npm install
```
**3. Lancer le serveur local :**
```bash
npm run dev
```

---

## 🛠️ Architecture du Code (Enterprise-grade)

Le projet a été pensé pour être modulaire, propre et facilement maintenable :

* **Context API (`MemoryContext`) :** Le composant principal est déchargé de la logique. Le Contexte gère la vérification des paires, les `setTimeout` asynchrones et la gestion globale du plateau.
* **Composants Isolés :** L'interface est scindée en sous-composants indépendants (`<Board />` et `<Card />`), rendant le code visuel extrêmement concis.
* **Custom Hook (`usePersistentState`) :** Un hook maison gère la communication avec le `localStorage`, supportant l'initialisation paresseuse via des fonctions (Lazy Initialization) pour générer le paquet de cartes au premier chargement.
* **Clean Code & ESLint :** La configuration du jeu (valeurs des cartes, fonction de mélange) est extraite dans un fichier `gameConfig.js` distinct, garantissant la pleine compatibilité avec le Fast Refresh de Vite et les standards stricts d'ESLint.

---
Développé pour le fun et l'entraînement logique ! 🧩