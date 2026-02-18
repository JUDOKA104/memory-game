import { useMemory } from '../context/MemoryContext';
import Card from './Card';

export default function Board() {
    const { cards, handleCardClick } = useMemory();

    return (
        <main className="board">
            {cards.map((card) => (
                <Card key={card.id} card={card} onClick={handleCardClick} />
            ))}
        </main>
    );
}