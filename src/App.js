import React,{useState} from "react"
import './App.css';
import NavBar from "./components/NavBar";
import Cover from "./components/cover/Cover";
import MusicStore from "./components/Musics/store";
import CartItems from "./components/Cart/cartItems";
import CartProvider from "./components/Store/Cart-Provider";
import {Route,Routes}  from "react-router-dom"
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/Contact-us/ContactUs";
import ProductDetailes from "./components/Musics/productDetailes";


const productsArr = [

  {
   id: 1,
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
   id:2,
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
   id:3,
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
   id:4,
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ]
  



function App() {

     const [showCart , setShowCart] = useState(false)

     function cartHandler(){
        setShowCart(false)
     }
     function opneCart(){
      setShowCart(true)
     }

  return (
    
    <>  
     <CartProvider>
                    { showCart && <CartItems onClick ={cartHandler}></CartItems>}
      <NavBar onClick={opneCart}></NavBar>
      <Cover></Cover>
       <Routes>
         
        <Route path="/" element={<Home/>}></Route>
        <Route path="/store" element={ <MusicStore title="Musics" products={productsArr}/>}>

        </Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
        <Route path="/product-detailes/:id" element={<ProductDetailes products={productsArr}></ProductDetailes>}></Route>

       </Routes>
     
       <Footer></Footer>
      
      </CartProvider>

    </>
  );
}

export default App;
