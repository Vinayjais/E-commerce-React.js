import React,{ useContext} from "react"
import Button from "../Ui/Button";
import Classes from "../Card/card.module.css";
 import CartContext from "../Store/Cart_Context";
 import {NavLink} from "react-router-dom"



const Card = (props) =>{
   
    const cartCtx = useContext(CartContext);

         function addToCartItem(){
              

          const item={
                 id: props.id,
                name: props.title,
                 Price: props.price,
                 Quantity: 1
          }
           cartCtx.addItems(item)
         }
    return(
        <React.Fragment>
             <div key={props.id} className={Classes.card}>
               <NavLink to={`/product-detailes/${props.id}`}>
                  <h4 className={Classes.title}>{props.title}</h4>

               </NavLink>
                   <div className={Classes.pic}>
                     <img src={props.url} alt="img Loading"></img>
                   </div>
                     <div className={Classes.endCard} ><span>{props.price}</span><Button onClick={addToCartItem} name='Add To Cart'></Button></div>
             </div>
        </React.Fragment>
    )
}

export default Card;