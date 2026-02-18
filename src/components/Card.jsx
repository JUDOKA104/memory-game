export default function Card({ card, onClick }) {
    return (
        <div
            className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
            onClick={() => onClick(card)}
        >
            <div className="card-inner">
                <div className="card-back">❓</div>
                <div className="card-front">{card.value}</div>
            </div>
        </div>
    );
}