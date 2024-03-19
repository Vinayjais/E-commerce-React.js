import React from "react";
import Button from "../Ui/Button";

const Cart =( props) =>{

    return(
        <React.Fragment>
             <div>
                <Button onClick={props.onClick} name="Open Cart"></Button>
             </div>
        </React.Fragment>
    )
}


export default Cart;