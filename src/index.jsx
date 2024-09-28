import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NotesApp from './components/NotesApp.jsx'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesApp />
  </StrictMode>,
)
