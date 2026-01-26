import './App.css'
import Navbar from './components/navbar'
import Homepage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
  
      </Routes>
    </>
  )
}

export default App
