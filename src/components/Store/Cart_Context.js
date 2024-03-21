import React from "react";

const CartContext = React.createContext({

    items:[],
    totalAmount:0,
    availableItems: [],
    addInStore: (item)=>{},
    addItems: (item)=>{},
    removeItem: (item)=>{}

})

export default CartContext;