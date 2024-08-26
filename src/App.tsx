
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Collections from './pages/collection/Collections'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Product from './pages/product/Product'
import News from './pages/news/News'
import Error404 from './pages/error/Error404'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from './components/scrolTop/ScrolTop'

function App() {

  return (
    <>
    <ScrollToTop/>
    <ToastContainer />
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/news/:newsId' element={<News/>}/>
          <Route path='/*' element={<Error404/>}/>
        </Route>
        
      </Routes>
      
    </>
  )
}

export default App
