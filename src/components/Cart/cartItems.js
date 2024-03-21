import React,{useContext} from "react";
import Modal from "../Ui/Modal"
import Button from "../Ui/Button";
import Classes from "../Cart/li.module.css";
import CartContext from "../Store/Cart_Context";
// const cartElements = [

//     {
    
//     title: 'Colors',
    
//     price: 100,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
//     quantity: 2,
    
//     },
    
//     {
    
//     title: 'Black and white Colors',
    
//     price: 50,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
//     quantity: 3,
    
//     },
    
//     {
    
//     title: 'Yellow and Black Colors',
    
//     price: 70,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
//     quantity: 1,
    
//     }
    
//     ]
    
    

const CartItems = (props) =>{
   
       const CartCtx = useContext(CartContext);

    const CartItemsList =  CartCtx.items.map((item)=>{
          
    
         return (
             <li className={Classes.li}><span>{item.name}</span>
             <span>{item.Price} X {item.Quantity}</span> 
               {/* <div> { item.quantity > 0 ? <Button onClick={removeItem} name="--"></Button> : ''}
             <Button  onClick={addItem} name="+"></Button></div> */}
             </li>
         )
      })
     
    return(
          <React.Fragment>

            <Modal>      
            
          <h3>Your Cart</h3>
            {CartItemsList}
             <div className={Classes.li}>{CartCtx.totalAmount}</div>
             <Button onClick={props.onClick} name="Close"></Button>
              { CartCtx.items.length > 0 ? <Button name="Order Now"></Button> : ''}
          
          
              </Modal>
          </React.Fragment>
    )
}

export default CartItems;