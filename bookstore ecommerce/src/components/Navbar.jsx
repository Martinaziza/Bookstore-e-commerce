import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link>
        <p>Home</p>
      </Link>

      <label>
        <input className="search" name="search" placeholder="Search books...">
        </input> 
      </label>

      <Link>
        <p className="cart-image-navbar">🛒</p>
      </Link>
    </div>
  );
};

export default Navbar;
