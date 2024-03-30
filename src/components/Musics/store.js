import React from "react";
import Card from "../Card/Card";
import Classes from "../Musics/store.module.css"
// import {Route,Routes} from "react-router-dom"
    
const MusicStore = (props) =>{

    const itemList =   props.products.map((item) => <Card id={item.id}  title={item.title } url={item.imageUrl} price={item.price}></Card>)

    return (

        <React.Fragment>
            <div>
                <center><h3>{props.title}</h3></center>
                 
                  <div className={Classes.Items}>
                  {itemList}
                  </div>
                   
                 
            </div>
            
        </React.Fragment>
    )
}

export default MusicStore;