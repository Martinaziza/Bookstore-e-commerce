import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/homepage'
import BookDetailsPage from './pages/BookDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import Addbook from './pages/Addbook'
import EditBook from './pages/EditBook'
import Admin from './pages/Admin'
function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/books/:id" element={<BookDetailsPage/>}/>
        <Route path="/cart" element={<h1 style={{color: 'white'}}>Cart Page - Coming Soon!</h1>}/>
       <Route path="/addBook" element={<Addbook/>} />
       <Route path="/editBook/:id" element={<EditBook/>}/>
       <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </>
  )
}

export default App
