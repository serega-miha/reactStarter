import { useState } from 'react';
import './loginApp.scss'
import { Link } from "react-router-dom";


const MainField = (props) => {
    const {auth , onSetAuth, login, onSetLogin, linkDisabled, onLinkDisabled} = props;


    const [userName,setUserName] = useState(auth ? localStorage.getItem(login).split('+')[1] : '')
    const [showInvalidMessage, setShowInvalidMessage] = useState(false)
    const [password, stePassword] = useState('');
    const invalidBlock =  <div className="close-block"><p>Войдите чтобы увидеть инфу</p></div>;

    const [hb, setHb] = useState(auth ? localStorage.getItem(login).split('+')[2] : '');
    const [sizeHead, setSizeHead] = useState(auth ? localStorage.getItem(login).split('+')[3] : '');
    const [height, setHeight] = useState(auth ? localStorage.getItem(login).split('+')[4] : '');


    const onSubmit = (e) => {
        e.preventDefault();
        let m = localStorage.getItem(login);
        if (m !== null && m.split('+')[0] === password){
            onLinkDisabled(false)
            setShowInvalidMessage(false)
            localStorage.setItem('auth', 'yes')
            onSetAuth(true)
            setUserName(m.split('+')[1])
            setHb(m.split('+')[2])
        } else{
          
            setShowInvalidMessage(true)
        }
    }

    const onExitUser = (e) => {
        e.preventDefault();
        onSetAuth(false);
        setUserName('');
        localStorage.removeItem('auth')
        onSetLogin('')
        stePassword('')
        onLinkDisabled(true)
        setHb('')
    }











    return (
        <div className="main-field">
            <div className="main-field__header">
                <h2>Основная страница с информацией  </h2>
                <div className="main-field-form">
                    <form className='enter-form' onSubmit={onSubmit}>
                        <input onChange={(e) => onSetLogin(e.target.value)} value={login} type="email" name="enter-name" className='body-block-item' placeholder='введите почту'/>
                        <input onChange={(e) => stePassword(e.target.value)} value={password} type="password" name="enter-password" className='body-block-item' placeholder='введите пароль'/>
                        <button type="submit">войти</button>
                    </form>
                    <div className='div-hello' 
                    style={auth ? {"visibility" : "visible"} : {"visibility": "hidden"}}
                    >
                        <h6>Приветствую вас: {userName}</h6>
                        <button onClick={(e) => onExitUser(e)}>выйти</button>
                    </div>
                <div className="invalid-message" 
                style={showInvalidMessage ? {"visibility": 'visible'} :{"visibility": 'hidden'}}
                >
                    Такого пользователя не существует
                </div>
                </div>
                <div className="add-info-user">
                    <Link style={linkDisabled ? {"pointerEvents": "none","backgroundColor": "grey"} : null}  to="/loginapp/updateuserinfo" className="main-page-link">Заполнить доп данные</Link>
                    <Link to="/loginapp/startfield" className="main-page-link">Создать пользователя</Link>
                </div>
            </div>
            <div className="main-field__body">
                <div className="mf-block mf-block1">
                    <h2>Блок для всех пользователей</h2>
                    <div className="mf-block__info">
                        <h6>Супер бупер новость</h6>
                        <h6>Еще какая то новость</h6>
                        <h6>не интересная нововсть</h6>
                    </div>
                </div>
                <div className="mf-block mf-block2">
                    <h2>Инфо для зарегестрированых</h2>
                    {linkDisabled ? invalidBlock : null}
                <div className="mf-block__info">
                        <h6>первая секретная новость</h6>
                        <h6>только для зарегестрированых</h6>
                        <h6>только для сотрудников</h6>
                    </div>
                </div>
                <div className="mf-block mf-block3">
                   <h2> Инфо только для пользователя</h2>
                   {linkDisabled ? invalidBlock : null}
                   <div className="mf-block__info">
                        <h6>дата рождения пользователя  <span>{hb}</span></h6>
                        <h6>размер головы пользователя в мячах  <span>{sizeHead}</span> мяч...</h6>
                        <h6>рост юзера <span>{height}</span>  попугаев</h6>
                    </div>
                   </div>
                <div className="mf-block mf-block4">Закрытый блок</div>

            </div>
        </div>
    )
}
export default MainField;