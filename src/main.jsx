import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContent from './App.jsx'
import { MemoryProvider } from './context/MemoryContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MemoryProvider>
            <AppContent />
        </MemoryProvider>
    </React.StrictMode>,
)