import * as React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Login/>
      <hr />
      <About/>
      <Contact/>
      <Services/>
        <Home/>
        {/* <Outline/> */}
      <Footer/>


    </>
  )
}

export default App


// ---  thinking in react ---
// import React, { useState } from 'react'

// function ProductCategoryRow({category}){
//   return(
//     <tr>
//       <th>{category}</th>
//     </tr>
//   )
// }
// function ProductRow({product}){
//   return(
//     <tr>
//       <td>{product.name}</td>
//       <td>{product.price}</td>
//     </tr>
//   )
// }

// function ProductTable({products, filterText, inStockOnly}){
//   const rows = []
//   let lastCategory = null

//   products.forEach((product) =>{
//     if(product.name.toLowerCase().indexOf(filterText.toLowerCase())=== -1){
//       return;
//     }
//     if(inStockOnly && !product.stocked){
//       return;
//     }
//     if(product.category !== lastCategory){
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category}
//         />
//       )
//     }
//     rows.push(
//       <ProductRow
//         product = {product}
//         key = {product.name}
//       />
//     )
//     lastCategory = product.category
//   })
  

//   return(
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         {rows}
//       </tbody>
//     </table>
//   )
// }

// function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}){
//   return(
//     <form>
//       <input type="text" placeholder="Search..."
//         value={filterText}
//         onChange={(e) => onFilterTextChange(e.target.value)}
//       />
//       <p>
//         <input type="checkbox"
//           value={inStockOnly}
//           onChange={(e) => onInStockOnlyChange(e.target.checked)}
//         />
//         {' '}
//         Only show products in stock
//       </p>
//     </form>
//   )
// }

// function FilterrableProducts({products}){
//   const [filterText, setFilterText] = useState('')
//   const [inStockOnly, setInStockOnly] = useState(false)

//   return(
//     <>
//       <SearchBar
//         filterText = {filterText}
//         inStockOnly = {inStockOnly}
//         onFilterTextChange = {setFilterText}
//         onInStockOnlyChange = {setInStockOnly}
//       />
//       <ProductTable 
//         products = {products}
//         filterText = {filterText}
//         inStockOnly = {inStockOnly}
//       />
//     </>
//   )
// }



// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
// ]

// const App = () => {
//   return (
//     <>
//       <FilterrableProducts products={PRODUCTS}/>
//     </>

//   )
// }

// export default App
