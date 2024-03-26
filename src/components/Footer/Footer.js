import React from "react";
import Classes from "./Footer.module.css"

const Footer = () =>{
    return(
        <React.Fragment>
             <div className={Classes.box}>
                 <div><h3>The HUNK</h3></div>
                 <div>About</div>
             </div>
        </React.Fragment>
    )
}

export default Footer;