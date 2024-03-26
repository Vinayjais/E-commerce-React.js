import React from "react";
import Classes from "../components/Nav.module.css"
import Cart from "./Cart/Cart";
import {NavLink} from "react-router-dom"
const NavBar = ( props) =>{

         
    return(
        < React.Fragment>
            <div className={Classes.navBar}>
    
                       <nav className={Classes.navBarChiled} >
                               <NavLink to="/">Home</NavLink>
                               <NavLink to="/store">Store</NavLink>   
                               <NavLink to="/about">About</NavLink>
                                 
                       <Cart onClick={props.onClick}></Cart>
                        </nav>
                  
                     
            </div>
           
        </React.Fragment>
    )
}


export default NavBar;