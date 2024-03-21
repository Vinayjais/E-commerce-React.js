import React from "react";
import Classes from "../components/Nav.module.css"
import Cart from "./Cart/Cart";
const NavBar = ( props) =>{
    return(
        < React.Fragment>
            <div className={Classes.navBar}>
    
                       <nav className={Classes.navBarChiled} >
                               <a >Home</a>
                               <a>Store</a>
                               <a>About</a>
                                 
                       <Cart onClick={props.onClick}></Cart>
                        </nav>
                  
                     
            </div>
           
        </React.Fragment>
    )
}


export default NavBar;