import { useContext, useEffect, useState } from "react";
import { BookstoreContext } from "../context/BookstoreContext";
import { Link, useParams } from "react-router-dom";
import inStockImg from "../assets/in-stock.png";
import { CartContext } from "../context/CartContext";


const BookDetailsPage = () => {
  const { fetchSingleBook, users,} =
    useContext(BookstoreContext);

    const { fetchCart, addItem } = useContext(CartContext)

  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetchSingleBook(id, setBook);
  }, [id]);

  return (
    <div className="single-book-container">
      <div className="single-book-image">
        <img
          src={book.image}
          alt={book.book_name}
          className="Single-book-cover"
        />
      </div>

      <div className="single-book-content">
        <div className="single-book-title">
          <h2>{book.book_name}</h2>
          <h5>by {book.author}</h5>
          {book.categories && book.categories.length > 0 ? (
            <p className="Category">{book.categories.join(", ")}</p>
          ) : null}
          <div className="rating-div">
            <p>{book.rating} ⭐</p>
            <h4>{book.is_besteller ? "true" : "Bestseller"}</h4>
          </div>
        </div>

        <div className="single-book-priceinfo">
          <div className="price-discount">
            <h3>${(book?.price || 0).toFixed(2)}</h3>
            {book.discounts !== 0 ? (
              <p className="discount">{book.discounts * 100}% Off</p>
            ) : null}
            <p>
              {book.in_stock ? (
                <img src={inStockImg} alt="In Stock" className="in-stock-img" />
              ) : (
                "Not Available"
              )}
            </p>
          </div>

          <div className="single-book-buttons">
            <Link to="/cart/1">
            <button className="buy-button" onClick={addItem}>Buy Now</button>
            </Link>
            <button className="addCart-button" >Add to Cart 🛒</button>
          </div>
        </div>

        <div className="single-book-description">
          <p>Description</p>
          <hr />
          <p className="description">{book.description}</p>
          <p className="publication-date">
            Publication date: <br /> {book.pub_date}
          </p>
        </div>
        {users.length > 0 && users[0].role === "admin" ? (
          <div className="edit-button">
            <Link to={`/editbook/${id}`}>
              <button>Edit</button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BookDetailsPage;

//How to disable the button:
// disabled={users.role !== "admin"}
//For the admin and user.

// id: "BK-001",
// book_name: "Harry Potter and the Sorcerer's Stone",
// author: "J.K. Rowling",
// categories: [
// "Fantasy",
// "YA"
// ],
// price: 24.99,
// discounts: 0.15,
// in_stock: true,
// is_bestseller: true,
// rating: 4.9,
// description: "A young boy discovers he is a wizard.",
// image: "https://covers.openlibrary.org/b/isbn/9780545582889-M.jpg",
// pub_date: "1997-06-26"
