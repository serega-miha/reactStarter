import { Component } from "react";
import ShablonList from "./ShablonList";

import './shablon.scss';
import { dataShablon } from "./dataShablon";



class ShablonComponent extends Component {
    
    render (){
        let data = dataShablon;
        return (
            <div className="shablon-component__container">
                <ShablonList
                data={data}
                />
            </div>
        )
    }
}


export default ShablonComponent;