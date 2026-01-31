import axios from "axios";
import { createContext, use, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const BookstoreContext = createContext()



const Bookstore = ({children}) => {
    const [books, setBooks] = useState([])
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState("")

     const fetchSingleBook = async (id, setBook, setEditBook) => {
        try {
            const response = await axios.get(
                `http://localhost:5005/books/${id}`
            )
            setBook(response.data)
            setEditBook(response.data)
        } catch (error) {
            console.log(error)
        }
     }

     useEffect (()=>{
        const fetchBookStore = async () => {
        try {
            const response = await axios.get("http://localhost:5005/books")

            setBooks(response.data)
            console.log(response.data)
        }catch (error){
            console.log(error)
        }
     }   
        fetchBookStore()
     }, [])
     
    
        const fetchUsers = async () => {
            try{
                const response = await axios.get("http://localhost:5005/users")
                setUsers (response.data)
                console.log (response.data)
            } catch (error){
                console.log (error)
            }
        }

        useEffect (() => {
            fetchUsers()
        }, [])

     

  return (
    <BookstoreContext.Provider
    value ={{books, setBooks, fetchSingleBook, users, setUsers, fetchUsers, query, setQuery}}>
        {children}
     
    </BookstoreContext.Provider>
  )
}

export default Bookstore
export {BookstoreContext}

