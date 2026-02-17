import { useState, useEffect } from 'react';
import './App.css';

// 1- À partir d'un tableau de base
const CARD_VALUES = ['A', 'B', 'C', 'D', 'E', 'F'];

// Fonction pour générer le paquet de 12 cartes mélangées
const generateDeck = () => {
    // On duplique le tableau pour avoir les paires
    const deck = [...CARD_VALUES, ...CARD_VALUES]
        // On mélange le tableau aléatoirement
        .sort(() => Math.random() - 0.5)
        // On transforme chaque lettre en un objet complet avec un ID unique
        .map((value) => ({
            id: Math.random().toString(36).substr(2, 9),
            value,
            isFlipped: false,
            isMatched: false,
        }));
    return deck;
};

// COMPOSANT "CARTE"
const Card = ({ card, onClick }) => {
    return (
        <div
            className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
            onClick={() => onClick(card)}
        >
            <div className="card-inner">
                {/* Face cachée (Le dos de la carte) */}
                <div className="card-back">❓</div>
                {/* Face visible (La lettre) */}
                <div className="card-front">{card.value}</div>
            </div>
        </div>
    );
};

// COMPOSANT PRINCIPAL
function App() {
    const [cards, setCards] = useState(() => generateDeck());
    const [flippedCards, setFlippedCards] = useState([]); // Sauvegarde les choix
    const [isLocked, setIsLocked] = useState(false); // Empêche de cliquer pendant l'animation
    const [moves, setMoves] = useState(0); // Compteur de coups

    // --- LOGIQUE DU CLIC ---
    const handleCardClick = (clickedCard) => {
        // Sécurités : si le jeu est verrouillé, ou si la carte est déjà retournée/trouvée -> on bloque
        if (isLocked || clickedCard.isFlipped || clickedCard.isMatched) return;

        // 1. On retourne visuellement la carte cliquée
        setCards((prev) =>
            prev.map((card) => (card.id === clickedCard.id ? { ...card, isFlipped: true } : card))
        );

        // 2. On sauvegarde le choix de l'utilisateur
        const newFlippedCards = [...flippedCards, clickedCard];
        setFlippedCards(newFlippedCards);

        // 3. Quand on a 2 cartes retournées, on compare !
        if (newFlippedCards.length === 2) {
            setIsLocked(true); // On verrouille le plateau
            setMoves((prev) => prev + 1); // Un coup de joué

            const [firstCard, secondCard] = newFlippedCards;

            if (firstCard.value === secondCard.value) {
                // MATCH ! Les deux sont les mêmes.
                // On les marque comme trouvées (isMatched: true)
                setCards((prev) =>
                    prev.map((card) =>
                        card.value === firstCard.value ? { ...card, isMatched: true } : card
                    )
                );
                setFlippedCards([]); // On vide la mémoire des cartes retournées
                setIsLocked(false); // On déverrouille le plateau
            } else {
                // ERREUR ! Ce n'est pas la même paire.
                // On attend 1 seconde pour laisser le joueur voir les cartes, puis on les recache.
                setTimeout(() => {
                    setCards((prev) =>
                        prev.map((card) =>
                            card.id === firstCard.id || card.id === secondCard.id
                                ? { ...card, isFlipped: false }
                                : card
                        )
                    );
                    setFlippedCards([]);
                    setIsLocked(false);
                }, 1000);
            }
        }
    };

    const restartGame = () => {
        setCards(generateDeck());
        setFlippedCards([]);
        setIsLocked(false);
        setMoves(0);
    };

    // Condition de victoire : toutes les cartes sont "isMatched"
    const isWin = cards.every((card) => card.isMatched);

    return (
        <div className="memory-container">
            <header className="header">
                <h1>Memory Game</h1>
                <div className="stats">
                    <p>Coups joués : <strong>{moves}</strong></p>
                </div>
            </header>

            <main className="board">
                {/* On affiche les cartes générées */}
                {cards.map((card) => (
                    <Card key={card.id} card={card} onClick={handleCardClick} />
                ))}
            </main>

            {isWin && (
                <div className="victory-message">
                    <h2>🎉 Bravo ! Tu as gagné en {moves} coups ! 🎉</h2>
                </div>
            )}

            <button className="restart-btn" onClick={restartGame}>
                Relancer une partie
            </button>
        </div>
    );
}

export default App;