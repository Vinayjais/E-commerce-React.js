import React from "react";
import Classes from "../components/Nav.module.css"
import Cart from "./Cart/Cart";
const NavBar = ( props) =>{
    return(
        < React.Fragment>
            <div className={Classes.navBar}>
    
                       <nav className={Classes.navBarChiled} >
                               <a href="">Home</a>
                               <a href="">Store</a>
                               <a href="">About</a>
                                 
                       <Cart onClick={props.onClick}></Cart>
                        </nav>
                  
                     
            </div>
           
        </React.Fragment>
    )
}


export default NavBar;