import { Link } from "react-router-dom";
import { BookstoreContext } from "../context/BookstoreContext";
import {CartContext} from "../context/CartContext"
import { useContext, useState, useEffect } from "react";
import logoImage from "../assets/logo-image.png";

const Navbar = () => {
  const { query, setQuery } = useContext(BookstoreContext);
const {cart} = useContext(CartContext)

const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="navbar-container">
      {/* <h2>Beyond Pages</h2> */}
      <Link to="/">
      <img
        src={logoImage}
        alt="Beyond Pages Logo"
        className="logo-image-navbar"
      />
    
      </Link>

      <label>
        <input
          className="search"
          name="search"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <Link to="/cart/1">
      <div className="nav-cart">
        <p className="cart-image-navbar">🛒</p>
        { totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </div>
      </Link>

      <div className="Admin-button-div">
        <Link to="/admin">
          <button className="admin-button">Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

// searchbar
//beers, and setBeers were propped

//  const [query, setQuery] = useState("")
//   const [backup, setBackup] = useState(beers)

//   useEffect(() => {
//     // getBeerByQuery(query, setBeers)
//     setBeers(
//       backup.filter((current) =>
//         current.name.toLowerCase().includes(query.toLowerCase()),
//       ),
//     )
//   }, [query])
