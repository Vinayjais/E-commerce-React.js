import React from "react";
 import {useParams} from "react-router-dom"
 import  Classes   from "../Contact-us/Us.module.css";
import Button from "../Ui/Button";

const ProductDetailes = (props) =>{
    const params = useParams();


      const product = props.products.filter((item)=> item.id === +params.id);
       console.log(product)
 
   return(
    <React.Fragment>
         <div className={Classes.form}>
              <h3>Product Detailes</h3>
             <p>{product[0].title}</p>
             <div><img src={product[0].url} alt="Loading.."></img></div>
             <p>{product[0].price}</p> 
             <Button name='Add to Card'></Button>
               
         </div>
         <div><h3>Reviews </h3></div>
    </React.Fragment>
   )
}


export default ProductDetailes;