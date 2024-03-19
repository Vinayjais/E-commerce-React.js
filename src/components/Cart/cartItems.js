import React from "react";
import Modal from "../Ui/Modal"
import Button from "../Ui/Button";
import Classes from "../Cart/li.module.css";

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    

const CartItems = (props) =>{


    const CartItemsList =  cartElements.map((item)=>{
          
    
         return (
             <li className={Classes.li}><span>{item.title}</span>
             <span>{item.price} X {item.quantity}</span> 
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
             <div className={Classes.li}>Rs. 500</div>
             <Button onClick={props.onClick} name="Close"></Button>
              {/* {itemSize > 0 ? <Button name="Order Now"></Button> : ''} */}
          
          
              </Modal>
          </React.Fragment>
    )
}

export default CartItems;