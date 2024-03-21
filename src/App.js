import React,{useState} from "react"
import './App.css';
import NavBar from "./components/NavBar";
import Cover from "./components/cover/Cover";
import MusicStore from "./components/Musics/store";
import CartItems from "./components/Cart/cartItems";
import CartProvider from "./components/Store/Cart-Provider";


const productsArr = [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
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
      <MusicStore title="Musics" products={productsArr}></MusicStore>
      <MusicStore title="Albums" products={productsArr}></MusicStore>

      
      </CartProvider>

    </>
  );
}

export default App;
