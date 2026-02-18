import { useState, useEffect } from 'react';

export let isWiping = false;
export const setWiping = (val) => { isWiping = val; };

export function usePersistentState(key, defaultValue) {
    const [state, setState] = useState(() => {
        try {
            const saved = localStorage.getItem(key);
            if (saved !== null) {
                return JSON.parse(saved);
            }
        } catch (e) { console.error("Erreur de sauvegarde", e); }
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    });

    useEffect(() => {
        if (!isWiping) {
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, [key, state]);

    return [state, setState];
}