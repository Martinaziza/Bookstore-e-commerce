import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import React from 'react'

const BookstoreContext = createContext()



const Bookstore = ({children}) => {
    const [books, setBooks] = useState([])
const fetchBookStore = async () => {
        try {
            const response = await axios.get("http://localhost:5005/books")

            setBooks(response.data)
            console.log(response.data)
        }catch (error){
            console.log(error)
        }
     }   

     useEffect (()=>{
        fetchBookStore()
     }, [])


  return (
    <BookstoreContext.Provider
    value ={{books, setBooks}}>
        {children}
     
    </BookstoreContext.Provider>
  )
}

export default Bookstore
export {BookstoreContext}

