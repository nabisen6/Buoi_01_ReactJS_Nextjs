import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  var product1 = {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "This is product 1",
    imageUrl: "https://placehold.co/200x150"
  }
    return (
    <div className="App">
      <ProductCard image={product1.imageUrl} name={product1.name} price={product1.price} />
    </div>

  )
}

export default App
