import { createContext, useState, useEffect } from "react";
import api from "../../api";
// import { BookstoreContext } from "./BookstoreContext"

const CartContext = createContext();

const Cart = ({ children }) => {

  const [cart, setCart] = useState([]);

//GETTING THE CART FROM BACKEND AND TELLING THE SERVER TO UPDATE THE ARRAY AND SAVE IT 
  useEffect (() => {
    const  syncCart = async () => {
        try {
            await api.patch(`/cart/1`, {
            cart: cart // first cart is from the backend and the second cart is the state 
            })
        } catch (error) {
           console.log(error) 
        }
    }
    syncCart()
  }, [cart])

// ADDING BOOKS TO THE CARTPAGE LOGICALLY AND IT HANDLE THE QUATITY 

  const addToCart = (oneBook) => {
     setCart((prev) => {
        const exists = prev.find(item => item.id === oneBook.id);
        
        if (exists){
           return prev.map(item => item.id === oneBook.id ? {...item, quantity: item.quantity + 1} : item);
        }
        return [...prev, {...oneBook, quantity: 1}];
     });
  };





//REMOVING LOGIC FROM THE CART

  const removeFromCart = (bookId) => {
    setCart((prevCart)=> prevCart.filter((item)=> item.id !== bookId))
  }

  const decreaseQty = (oneBook) => {
     setCart((prev) => {
        const exists = prev.find(item => item.id === oneBook.id);
        
        if (exists){
           return prev.map(item => item.id === oneBook.id ? {...item, quantity: Math.max(1, item.quantity - 1)} : item);
        }
        return [...prev, {...oneBook, quantity: 1}];
     });
  };


// DON'T EVER FORGET IN YOUR ENTIRE LIFE TO ADD STATE AND FUCTIONS IN THE PROVIDER/VALUE
  return (
    <CartContext.Provider value={{addToCart, cart, setCart, removeFromCart, decreaseQty}}>{children}</CartContext.Provider>
  );
};

export default Cart;

export { CartContext };



