import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import {CartContext} from "./CartContext"
// import { useNavigate } from "react-router-dom";

const BookstoreContext = createContext()



const Bookstore = ({children}) => {
    const [books, setBooks] = useState([])
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState("")
    const [editBook, setEditBook] = useState({}) // SUPER IMP IF YOU ARE ADDING/PROPING STATES IN THE FETCH FUCNTIONS




// 1. FETCH A SINGLE BOOK
     const fetchSingleBook = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:5005/books/${id}`)
                 return response.data;
        } catch (error) {
            console.log(error)
        }
     }


// 2. FETCH ALL BOOKS
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
     
// 3. FETCH ALL USERS    
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

     
// DON'T EVER FORGET IN YOUR ENTIRE LIFE TO ADD STATE AND FUCTIONS IN THE PROVIDER/VALUE
  return (
    <BookstoreContext.Provider
    value ={{books, setBooks, fetchSingleBook, users, setUsers, fetchUsers, query, setQuery, editBook, setEditBook}}>
        {children}
     
    </BookstoreContext.Provider>
  )
}

export default Bookstore
export {BookstoreContext}

