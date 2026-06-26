import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import ShoppingList from './components/ShoppingList/ShoppingList'
import Form from './components/Form/form'
import QuestionForm from './components/Form/questionForm'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import { useState, useEffect } from 'react'


import './styles/Layout.css'
 

const App = () => {

  const savedCart = localStorage.getItem("cart")

  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  
  const [cat, selectCat] = useState('all')

  const categoriesList = ['classique', 'extérieur', 'plante grasse']

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  
  return (
    <div>
      <Banner />
     
      <div className='lmj-layout-inner'>
         
            <Cart cart={cart} updateCart={updateCart}/>
            <div>
              <Categories  categoriesList={categoriesList} selectCat={selectCat}/>
              <ShoppingList cat ={cat} cart={cart} updateCart={updateCart}/>
            </div>
        </div>
        <Footer />
    </div>
  )
} 

export default App