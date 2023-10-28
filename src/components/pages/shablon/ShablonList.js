import { Component } from "react";
import ShablonClass from "./ShablonClass";

import './shablon.scss';
import { dataShablon } from "./dataShablon";



const ShablonList = ({data}) =>{
    const elements = data.map((item,i) => {
        const {...itemProps} = item
        return(
            <ShablonClass
            key = {i}
            {...itemProps}
            />
        )
    })
  

        return(
            <ul className="list-punkts">
                {elements}
            </ul>
            
        )
 
}

export default ShablonList;