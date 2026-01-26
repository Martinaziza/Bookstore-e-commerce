import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import BookstoreContext from "./context/BookstoreContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <BookstoreContext>
    <App />
  </BookstoreContext>
  </BrowserRouter>
  </StrictMode>,
)
