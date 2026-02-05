import { createContext, useContext, useState, useEffect } from "react";
import { BookstoreContext } from "./BookstoreContext";
import axios from "axios";
// import { BookstoreContext } from "./BookstoreContext"

const CartContext = createContext();

const Cart = ({ children }) => {
  const { users, setUsers, books, setBoks } = useContext(BookstoreContext);
  const [cart, setCart] = useState([]);

  const addItem = async (oneBook) => {
      try {
        cart.products.find(element => element.id === oneBook.id)
      const response = await axios.patch("http://localhost:5005/cart/1", {
        products: [{ ...oneBook, quantity: 1 }],
      });
      setCart(response.data)

    } catch (error) {
      console.log(error);
    }
  };

  async function fetchCart ()  {
    try {
      const response = await axios.get("http://localhost:5005/cart/1");
      setCart(response.data)
    } catch (error) {
      console.log(error);
    }
}

  useEffect(() => {
fetchCart();
addItem();
  }, []);



  return (
    <CartContext.Provider value={{addItem, fetchCart}}>{children}</CartContext.Provider>
  );
};

export default Cart;

export { CartContext };


