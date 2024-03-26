import React from "react";
import Button from "../Ui/Button";
import Classes from "./card.module.css"

 const item = [
    {id: 1,
      date:'14 jul',
      name: "comcom",
      dec:'hhh hjgd hghad '
    },
    {id: 2,
        date:'14 jul',
        name: "comcom",
        dec:'hhh hjgd hghad '
      },
      {id: 3,
        date:'14 jul',
        name: "comcom",
        dec:'hhh hjgd hghad '
      },
      {id: 4,
        date:'14 jul',
        name: "comcom",
        dec:'hhh hjgd hghad '
      },
      {id: 5,
        date:'14 jul',
        name: "comcom",
        dec:'hhh hjgd hghad '
      }
 ]
const HomeItem = () =>{

      const itemList = item.map( (ite)=>{
         return(
            <li className={Classes.homeCard} key={ite.id}> <span>{ite.date}</span>
                          <span>{ite.name}</span>
                          <span>{ite.dec}</span>
                          <span><Button name="Buy Ticket"></Button></span>
            </li>
         )
      })

    return(
        <React.Fragment>
                    <div className={Classes.homeItems}>
                        {itemList}
                    </div>
        </React.Fragment>
    )
}

export default HomeItem;