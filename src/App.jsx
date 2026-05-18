 import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'

import ListProductTableComponent from './components/ListProductTableComponent'
import ProductComponent from './components/ProductComponent'

import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div>
      <HeaderComponent/>
        <Routes>
          {/* //http://localhost:3000/ */}
          <Route path="/" element={<ListProductTableComponent/>} />
          {/* //http://localhost:3000/products */}
          <Route path="/products" element={<ListProductTableComponent/>} />
          {/* //http://localhost:3000/add-product */}
          <Route path="/add-product" element={<ProductComponent/>} />
        </Routes>

   
      <FooterComponent/>
    </div>
  )
}

export default App
