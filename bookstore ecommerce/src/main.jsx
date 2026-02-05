import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import BookstoreContext from "./context/BookstoreContext.jsx";
import CartContext from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BookstoreContext>
        <CartContext>
          <App />
        </CartContext>
      </BookstoreContext>
    </BrowserRouter>
  </StrictMode>,
);
