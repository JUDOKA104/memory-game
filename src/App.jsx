import { useMemory } from './context/MemoryContext';
import Board from './components/Board';
import './App.css';

function AppContent() {
    const { moves, isWin, restartGame, hardResetGame } = useMemory();

    return (
        <div className="memory-container">
            <header className="header">
                <h1>Memory Game</h1>
                <div className="stats">
                    <p>Coups joués : <strong>{moves}</strong></p>
                </div>
            </header>

            <Board />

            {isWin && (
                <div className="victory-message">
                    <h2>🎉 Bravo ! Tu as gagné en {moves} coups ! 🎉</h2>
                </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <button className="restart-btn" onClick={restartGame}>
                    Relancer une partie
                </button>
                <button
                    className="restart-btn"
                    onClick={hardResetGame}
                    style={{ background: 'transparent', border: '1px solid #ef4444', color: '#ef4444', boxShadow: 'none' }}
                >
                    Supprimer la sauvegarde
                </button>
            </div>
        </div>
    );
}

export default AppContent;