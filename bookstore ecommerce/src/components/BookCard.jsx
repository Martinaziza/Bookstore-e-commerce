import { Link } from "react-router-dom";
import imagePlaceholder from "../assets/Image-placeholder.jpg"

// We receive 'book' (singular) as a prop
const BookCard = ({ book }) => {


  return (
    <div className="book-card">
      <Link to={`/books/${book.id}`}>
      {
        book.image ?
        <img src={book.image} alt={book.book_name} className="book-cover" /> :
        <img src={imagePlaceholder} className="book-cover"/>
      }
        <h5>{book.book_name}</h5>
      </Link>
      <p>{book.author}</p>
      <p>${book.price.toFixed(2)}</p>
    </div>
  );
};

export default BookCard;
