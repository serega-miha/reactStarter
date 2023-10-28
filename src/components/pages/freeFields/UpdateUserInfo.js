import './updateuserinfo.scss'

import { useState } from "react";

import { Link } from "react-router-dom";

const UpdateUserInfo = (props) => {
    const { auth , login} = props;
    const password = localStorage.getItem(login).split('+')[0]
    const name = localStorage.getItem(login).split('+')[1]
    const [hb, setHb] = useState(auth ? localStorage.getItem(login).split('+')[2] : '');
    const [sizeHead, setSizeHead] = useState(auth ? localStorage.getItem(login).split('+')[3] : '');
    const [height, setHeight] = useState(auth ? localStorage.getItem(login).split('+')[4] : '');

    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(login, `${password}+${name}+${hb}+${sizeHead}+${height}+`)
    }

    const onSetHb = (e) => {
        setHb(e.target.value)
    }
    const onSetSizeHead = (e) => {
        setSizeHead(e.target.value)
    }
    const onSetheight = (e) => {
        setHeight(e.target.value)
    }

 
    return(
        <div className="update-user-info">
            <div className="update-user-info__header">
                  <h2>Здесь вы можете отредактировать данные пользователя</h2>
                  <Link to="/loginapp/mainfield"  className="link-back">назад</Link>
             </div>
             <div className="update-user-info__body">
                <form className="uui-form" onSubmit={onSubmit}>
                    <h6>Ваше имя: {name}</h6>
                    <h6>Your Email: {props.login}</h6>
                    <h6>Your Password: {password}</h6>
                    <h6>Ваша дата рождения: <input type="number" value={hb} onChange={(e) => onSetHb(e)} /></h6>
                    <h6>Ваш размер головы: <input type="number" value={sizeHead} onChange={(e) => onSetSizeHead(e)}/></h6>
                    <h6>Ваш рост: <input type="number" value={height} onChange={(e) => onSetheight(e)}/></h6>
                    <button type="submit">Сохранить</button>
                 
                </form>
             </div>
        </div>

    
    )
}
export default UpdateUserInfo;