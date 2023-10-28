import './shablon.scss';

import { Component } from "react";
import logo from '../../../../src/images/logo512.png';



const  ShablonClass = (props) =>{
 
   
        const {text, id, creatAuthor, status, createTime, changeAuthor, changeTime} = props;
       return(
        <li className="punkt">
            <div className="punkt-row punkt1">
                 <div className="punkt-row__name">
                    <p> {text}</p>
                 </div>
                 <div className="punkt-row__icon-menu">
                    <img src={logo} alt="#" />
                 </div>
            </div>
            <div className="punkt-row punkt2">
                <div className="punkt-row__id-project">
                    {id}
                </div>
                <div className="punkt-row__author-create">
                   {creatAuthor}
                </div>
                <div className="punkt-row__status">
                    {status}
                </div>
                <div className="punkt-row__time-change">
                    создал(а) {createTime} час(а) назад
                </div>
                <div className="punkt-row__author-change">
                   {changeAuthor} извенил(а) {changeTime} минуту назад
                </div>
            </div>
            <div className="punkt-row__submenu">

            </div>
            
        </li>
       )
  
}

export default ShablonClass;