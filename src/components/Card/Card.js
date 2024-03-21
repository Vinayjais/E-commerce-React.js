import React,{ useContext} from "react"
import Button from "../Ui/Button";
import Classes from "../Card/card.module.css";
 import CartContext from "../Store/Cart_Context";



const Card = (props) =>{
   
    const cartCtx = useContext(CartContext);

         function addToCartItem(){
              

          const item={
                name: props.title,
                 Price: props.price,
                 Quantity: 1
          }
           cartCtx.addItems(item)
         }
    return(
        <React.Fragment>
             <div className={Classes.card}>
                  <h4 className={Classes.title}>{props.title}</h4>
                   <div className={Classes.pic}>
                     <img src={props.url} alt="img Loading"></img>
                   </div>
                     <div className={Classes.endCard} ><span>{props.price}</span><Button onClick={addToCartItem} name='Add To Cart'></Button></div>
             </div>
        </React.Fragment>
    )
}

export default Card;