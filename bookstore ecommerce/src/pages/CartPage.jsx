import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, addToCart, decreaseQty} = useContext(CartContext);

  
  
 
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="cart-empty">Your cart is empty!</div>;
  }
  return (
    <div className="cart-page">
      <h1 className="cart-title">Your shopping cart</h1>

      <div >
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
          <div className="cart-image">
            <img src={item.image} alt={item.book_name} className="cart-image"/>
          </div>
            <div className="cart-book-details">
              <h3>{item.book_name}</h3>
              <p className="quantity">Quantity:<button className= "quantity-btn" onClick={() => addToCart(item)}>+</button> <span className="item-quantity">{item.quantity}</span><button className= "quantity-btn"  onClick={() =>decreaseQty(item)}>-</button></p>
              
              
              <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)} className="cart-remove">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${total.toFixed(2)}</h2>
        <Link to="/payment">
        <button className="checkout-btn">Proceed to checkout</button>
        </Link>

        
      </div>
    </div>
  );
};

export default CartPage;
