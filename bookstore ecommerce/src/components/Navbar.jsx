import { Link } from "react-router-dom";
import { BookstoreContext } from "../context/BookstoreContext";
import { useContext, useState, useEffect } from "react";


const Navbar = () => {

  const {query, setQuery} = useContext(BookstoreContext)
  
 
//  const [backup, setBackup] = useState(books)

  // useEffect(() => {
  //   setBooks(
  //     backup.filter((current) =>
  //       current.name.toLowerCase().includes(query.toLowerCase()),
  //     ),
  //   )
  // }, [query])

  return (
    <div className="navbar-container">
      <Link to="/">
        <p>Home</p>
      </Link>

      <label>
        <input className="search" name="search" placeholder="Search books..." value={query} onChange={(e) => setQuery(e.target.value)}/>
     
      </label>

      <Link to="/cart">
        <p className="cart-image-navbar">🛒</p>
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
