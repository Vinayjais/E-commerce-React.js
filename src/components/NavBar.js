import React from "react";
import Classes from "../components/Nav.module.css"
import Cart from "./Cart/Cart";
import {Link} from "react-router-dom"
const NavBar = ( props) =>{

         
    return(
        < React.Fragment>
            <div className={Classes.navBar}>
    
                       <nav className={Classes.navBarChiled} >
                               
                               <Link to="/store">Store</Link>   
                               <Link to="/about">About</Link>
                                 
                       <Cart onClick={props.onClick}></Cart>
                        </nav>
                  
                     
            </div>
           
        </React.Fragment>
    )
}


export default NavBar;