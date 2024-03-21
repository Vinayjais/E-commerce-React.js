import React, {useContext} from "react";
import Button from "../Ui/Button";
import CartContext from "../Store/Cart_Context";

    

const Cart =( props) =>{
   const cartCtx = useContext(CartContext);
   const totalItemsInCart = cartCtx.items.reduce((total, items)=> total + items.Quantity,0);
    return(
        <React.Fragment>
             <div>
                <Button onClick={props.onClick} name={`Cart ${totalItemsInCart}`}></Button>
             </div>
        </React.Fragment>
    )
}


export default Cart;