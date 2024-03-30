import React from "react";
import Classes from "../Contact-us/Us.module.css"

const ContactUs = ()  =>{

    return(
              <React.Fragment>
                   <div className={Classes.formdiv}>
                       <center><h2>Contact Us</h2></center>

                       
                        <div>
                          <form className={Classes.form}>
                              <label>Name</label>
                              <input type="text" required></input>
                              <label>Number</label>
                              <input type="number"></input>
                              <label>Email</label>
                              <input type="email"></input>
                               <button type="submit">Submit</button>
                          </form>
                          </div>
                    
                   </div>
              </React.Fragment>
    )
}

export default ContactUs;