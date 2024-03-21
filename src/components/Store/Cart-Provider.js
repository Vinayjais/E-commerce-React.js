import React,{useReducer,useState} from "react";
import CartContext from "./Cart_Context";

const defaultCartState ={
      items:[
      //        {
      //       id:1,
      //       name: 'Shirt',
      //       Price: 20,
      //       Desc: "abc",
      //       size:'Large',
      //       Quantity:1
      //   }
],
      totalAmount: 0
}

 
const cartReducer = (state, action)=>{
       

        if(action.type === 'ADD'){

             
            
             const updateToatalAmount =   state.totalAmount  + (  action.item.Price * action.item.Quantity);

             const existingcartItemIndex = state.items.findIndex((item)=> item.name === action.item.name );
             const existingcartItem = state.items[existingcartItemIndex];

             let updateItems;
             

             if(existingcartItem){
                 const  updateItem ={
                        ...existingcartItem,
                        Quantity : existingcartItem.Quantity + action.item.Quantity
                  };

                  updateItems = [...state.items];
                  updateItems[existingcartItemIndex] = updateItem;
             }
             else{
                   updateItems = state.items.concat(action.item);

             }

             return{
                  items: updateItems,
                  totalAmount: updateToatalAmount
             }
        };
         
        if(action.type === 'REMOVE'){
            let updateToatalAmount =   state.totalAmount  - (  action.item.Price * action.item.Quantity);
            if(updateToatalAmount <0){
                  updateToatalAmount = 0;
            }
            const existingcartItemIndex = state.items.findIndex((item)=> item.name === action.item.name );
            const existingcartItem = state.items[existingcartItemIndex];

            let updateItems;
             

            if(existingcartItem){
                   if(existingcartItem.Quantity > 0){
                        const  updateItem ={
                              ...existingcartItem,
                              Quantity : existingcartItem.Quantity - action.item.Quantity
                        };

                        
                 updateItems = [...state.items];
                 updateItems[existingcartItemIndex] = updateItem;
                   }
                 
                 
                  
            }
         
            return{
                  items:updateItems,
                  totalAmount: updateToatalAmount
             }

           
        }
       return defaultCartState;
}

const CartProvider =(props)=>{

      const [cartState, disPatchAction] = useReducer(cartReducer,defaultCartState);
       const [availableItems ,setAvailableItems] = useState([]);
      //  const [CartItems ,setCartItems] = useState([]);
      
       
       function addItems(item){
      //     setCartItems((prev)=>{
      //       return [...prev, item]
      //     }
      //     )

        disPatchAction({type: 'ADD', item: item});

          
       }
       function removeItem(item){
           disPatchAction({type: 'REMOVE', item: item});
       }
         
       function addInStore(Item){
             
             setAvailableItems((prev)=>{
                  return [Item, ...prev]
             })
             
             
       }
        const cartcontext={
            
            items: cartState.items,
            totalAmount: cartState.totalAmount,
            availableItems: availableItems,
            addInStore: addInStore,
            addItems: addItems,
            removeItem: removeItem
        }


     return(
           <CartContext.Provider value={cartcontext}>
                 {props.children}
           </CartContext.Provider>
     )
    
     
}

export default CartProvider;