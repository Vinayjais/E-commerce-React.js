import React from "react";
import Classes from "./Model.module.css"
import  ReactDOM  from "react-dom";
  const Backdrop = props =>{
     return <div className={Classes.backdrop}></div>
  }

  const ModalOverlay = props=>{
      return  <div className={Classes.modal}>
            <div>{props.children}</div>
      </div>
  }
  const portalEle = document.getElementById('overLays');
  
const Modal = props=>{
    return (<React.Fragment>
          {ReactDOM.createPortal(  <Backdrop></Backdrop>,portalEle)}
          {ReactDOM.createPortal(  <ModalOverlay>{props.children}</ModalOverlay>,portalEle)}
          
    </React.Fragment>)
}

export default Modal;