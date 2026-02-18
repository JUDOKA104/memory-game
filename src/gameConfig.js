export const CARD_VALUES = ['A', 'B', 'C', 'D', 'E', 'F'];

export const generateDeck = () => {
    return [...CARD_VALUES, ...CARD_VALUES]
        .sort(() => Math.random() - 0.5)
        .map((value) => ({
            id: crypto.randomUUID(),
            value,
            isFlipped: false,
            isMatched: false,
        }));
};