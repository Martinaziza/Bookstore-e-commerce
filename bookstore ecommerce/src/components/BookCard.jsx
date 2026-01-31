import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookstoreContext } from "../context/BookstoreContext";

const BookCard = ({ books }) => {
  const {query} = useContext(BookstoreContext);
  return (
    <div className="book-container">
      {books.filter((ABook) => {
        if (ABook.book_name.toLowerCase().includes(query.toLowerCase())) {
          return true 
      }}).map((book) => (
        <div key={book.id} className="book-card">
          <Link to={`/books/${book.id}`}>
            <img src={book.image} alt={book.book_name} className="book-cover" />
            <h5>{book.book_name}</h5>
          </Link>
          <p>{book.author}</p>
          <p>${book.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
