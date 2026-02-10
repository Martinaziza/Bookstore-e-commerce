import Bookform from "../components/Bookform"
import { useContext, useEffect, useState } from 'react'
import { BookstoreContext } from '../context/BookstoreContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom"; 

const EditBook = () => {
    const { id } = useParams();
    const{ books, setBooks, fetchSingleBook} = useContext(BookstoreContext)
    
    const [editBook, setEditBook] = useState({
    image: "",
    book_name: "",
    author: "",
    categories: [],
    price: 0,
    discounts: 0,
    in_stock: false,
    is_bestseller: false,
    rating: "",
    description: "",
    pub_date: ""
    });

 const nav = useNavigate(); 

 useEffect(() => {
  const loadBook = async () => {
    const book = await fetchSingleBook(id);
    setEditBook(book);
  }

  loadBook();
    
 }, [id]);
 
    const handleUpdateBook = async (e) =>{
    e.preventDefault()
    try{
        const response = await axios.put(`http://localhost:5005/books/${id}`, {...editBook, price: Number(editBook.price), discounts: Number (editBook.discounts)})
        console.log(response.data)
        const updatedBooks = books.map((book) => 
        book.id === id ? response.data : book
        );
        setBooks (updatedBooks)
        nav ("/")

    } catch (error) {
        console.log(error)
    }
    }
     
   const handleDeleteBook = async () => {
      try {
        await axios.delete(`http://localhost:5005/books/${id}`)
        setBooks((prev)=> prev.filter((book)=> book.id !== id))
        nav("/")
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div>
      <Bookform formData={editBook} setFormData={setEditBook} handleUpdateBook={handleUpdateBook} handleDeleteBook={handleDeleteBook} />
      {/* <button onClick={() => handleDeleteBook(id)} className="delete-button">Delete Book</button>  */}
    </div>
  )
}

export default EditBook
