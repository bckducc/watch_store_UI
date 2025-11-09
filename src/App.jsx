  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  import ProductList from './pages/ProductList'
  import Home from './pages/Home'
  import Cart from './pages/Cart'
  import Trend from './pages/Trend'
  import Men from './pages/Men'
  import Women from './pages/Women'
  import Accessories from './pages/Accessories'
  import { useState } from 'react'
  import './App.css'

  function App() {
    const [count, setCount] = useState(0)

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    )
  }

  export default App