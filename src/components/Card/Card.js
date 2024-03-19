import React from "react"
import Button from "../Ui/Button";
import Classes from "../Card/card.module.css";



const Card = (props) =>{
    return(
        <React.Fragment>
             <div className={Classes.card}>
                  <h4 className={Classes.title}>{props.title}</h4>
                   <div className={Classes.pic}>
                     <img src={props.url} alt="img Loading"></img>
                   </div>
                     <div className={Classes.endCard} ><span>{props.price}</span><Button  name='Add To Cart'></Button></div>
             </div>
        </React.Fragment>
    )
}

export default Card;