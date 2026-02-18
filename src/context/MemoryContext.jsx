/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { usePersistentState, setWiping } from '../hooks/usePersistentState';
import { generateDeck } from '../gameConfig';

const MemoryContext = createContext();
export const useMemory = () => useContext(MemoryContext);

export function MemoryProvider({ children }) {
    // --- ÉTATS SAUVEGARDÉS ---
    const [cards, setCards] = usePersistentState('memory_cards', () => generateDeck());
    const [moves, setMoves] = usePersistentState('memory_moves', 0);

    // --- ÉTATS TEMPORAIRES ---
    const [flippedCards, setFlippedCards] = useState([]);
    const [isLocked, setIsLocked] = useState(false);

    // On remet face cachée les cartes non validées
    useEffect(() => {
        setCards(prev => prev.map(c => (!c.isMatched && c.isFlipped) ? { ...c, isFlipped: false } : c));
    }, []);

    // --- LOGIQUE MÉTIER ---
    const handleCardClick = (clickedCard) => {
        if (isLocked || clickedCard.isFlipped || clickedCard.isMatched) return;

        setCards(prev => prev.map(c => c.id === clickedCard.id ? { ...c, isFlipped: true } : c));

        const newFlippedCards = [...flippedCards, clickedCard];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            setIsLocked(true);
            setMoves(prev => prev + 1);

            const [firstCard, secondCard] = newFlippedCards;

            if (firstCard.value === secondCard.value) {
                setCards(prev => prev.map(c => c.value === firstCard.value ? { ...c, isMatched: true } : c));
                setFlippedCards([]);
                setIsLocked(false);
            } else {
                setTimeout(() => {
                    setCards(prev => prev.map(c => c.id === firstCard.id || c.id === secondCard.id ? { ...c, isFlipped: false } : c));
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

    const hardResetGame = () => {
        if (window.confirm("Effacer la sauvegarde complète ?")) {
            setWiping(true);
            localStorage.clear();
            window.location.reload();
        }
    };

    const isWin = cards && cards.length > 0 && cards.every(c => c.isMatched);

    const value = {
        cards, moves, isWin, handleCardClick, restartGame, hardResetGame
    };

    return <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>;
}