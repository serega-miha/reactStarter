import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


import './loginApp.scss';
//Нужно сделать валидацию почты и пароля
//если все введено верно, ставиться галочка
//после запуска приложения все сохраняется в локеал строрадже
//и переходит на главную страничку

const CreateUser = () => {
   
    const [nextPage, setNextPage] = useState(false)
    const [userName, setUserName] = useState('');
    const [userSurName, setSurUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('email пустой');
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState('поле пустое');
    const [emailIsGood, setEmailIsGood] = useState(false);
    const [nameIsGood, setNameIsGood] = useState(false);
    

    const [userPassword, setUserPassword] = useState('');
    const [userWPassword, setUserWPassword] = useState('');
    const [userPasswordDirty, setUserpasswordDirty] = useState(false);
    const [userPasswordError, setUserpasswordError] = useState('Пароль не может быть пустым');
    const [userWpasswordDirty, setUserWpasswordDirty] = useState(false);
    const [userWpasswordError, setUserWpasswordError] = useState('Пароли не совпадают');
    const [userPasswordIsGood, setUserPasswordIsGood] = useState(false)
    const [userWPasswordIsGood, setUserWPasswordIsGood] = useState(false)

    let btnBoolen = (userPasswordIsGood && userWPasswordIsGood && emailIsGood && nameIsGood) ? false : true;

    const emailChange = (e) => {
        setUserEmail(e.target.value)
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(e.target.value)) {
            setEmailError('не корректный email')
            setEmailIsGood(false)
        } else {
            setEmailError('')
            setEmailIsGood(true)
         
        }
    }

    const blurHandler = (e) => {
        if (e.target.name === 'emailUser1') {
            setEmailDirty(true)
        } else if (e.target.name === 'w__passwordUser1'){
            setUserWpasswordDirty(true)
            onCheckWPassword(e);
        } else if (e.target.name === 'passwordUser1'){
            setUserpasswordDirty(true)
            onCheckPassword(e)
       } else if (e.target.name === 'nameUser1'){
            setNameDirty(true)
            onCheckName(e)
       }
    }
    const onCheckPassword = (e) => {
        setUserPassword(e.target.value)
        if (userPassword.length > 0){
            setUserpasswordError('')
            setUserPasswordIsGood(true)
        } else{
            setUserPasswordIsGood(false)
        }
    }

    const onCheckWPassword = (e) => {
        setUserWPassword(e.target.value)
    
        if (userWPassword.length < 1){
            setUserWpasswordError('Пароли не могут быть пустыми')
            setUserWPasswordIsGood(false)
        } else if (userPassword !== userWPassword) {
            setUserWpasswordError('Пароли не совпадают')
             setUserWPasswordIsGood(false)
        } else{
            setUserWpasswordError('')
            setUserWPasswordIsGood(true)
        }
    }

    const onCheckName = (e) => {
        setUserName(e.target.value)
        console.log(nameDirty, nameError, userName.length);
        if (userName.length > 0) {
            setNameIsGood(true)
            setNameError('')
        } else {
            setNameIsGood(false)
           
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(userEmail, `${userPassword}+${userName}++++`)
        setNextPage(true)
        // handleClick();
        
    }

    // let history = useHistory();
    // function handleClick() {
    //     history.push('/loginapp/mainfield')
    // }




    useEffect(() => {
   

    }, [btnBoolen])

    return (
    
        <div className="start-field">
            <div className="start-field__title">
                <h2>Создайте два пользователя!</h2>
            </div>
            <div className="start-field__body">
                <div className="start-field__body-blocks">
                    <form className="body-block body-block1" onSubmit={onSubmit}>
                        
                        <div className="body-block-item body-block-item__email">
                            <label htmlFor="emailUser1">Придумайте email* 
                            {(emailIsGood) && <span className="field-plusic" style={{color:'green'}}>  +</span>}
                            </label>
                            {(emailDirty && emailError) && <div className="email-error" style={{color:'red'}}><p>{emailError}</p></div>}
                            <input
                            style={(emailDirty && emailError) ? {"box-shadow": "0px 0px 5px red"} : null}
                            placeholder="------------------"
                            type="email"
                            autoFocus='true'
                            name="emailUser1" 
                            onBlur={(e) => blurHandler(e)} 
                            value={userEmail}
                             onChange={ (e) => emailChange(e) }
                            />
                        </div>
                        <div className="body-block-item body-block-item__password">
                            <label htmlFor="passwordUser1">Придуймайте пароль*</label>
                            {(userPasswordDirty && userPasswordError) && <div className="email-error" style={{color:'red'}}><p>{userPasswordError}</p></div>}
                           <input
                            placeholder="------------------"  
                            type="password" 
                            name="passwordUser1" 
                            
                            value={userPassword}
                            onChange={ (e) => setUserPassword(e.target.value) }
                            onBlur={(e) => blurHandler(e)}
                            />
                        </div>
                        <div className="body-block-item body-block-item__w__password">
                            <label htmlFor="w__passwordUser1">подтвердите пароль*</label>
                            {(userWpasswordDirty && userWpasswordError) && <div className="email-error" style={{color:'red'}}><p>{userWpasswordError}</p></div>}
                            <input 
                            placeholder="------------------" 
                            type="password" 
                            name="w__passwordUser1" 
                            
                            value={userWPassword}
                            onChange={ (e) => setUserWPassword(e.target.value) }
                            onBlur={(e) => blurHandler(e)}
                            />
                        </div>
                        <div className="body-block-item body-block-item__name">
                            <label htmlFor="nameUser1">Ваше имя*</label>
                            {(nameDirty && nameError) && <div className="email-error" style={{color:'red'}}><p>{nameError}</p></div>}
                            <input
                             placeholder="Гавнюк"
                             
                             type="text"
                             name="nameUser1"
                             autocomplete="off"
                                onChange={ (e) => setUserName(e.target.value) }
                                value={userName}
                                onBlur={(e) => blurHandler(e)}
                              />
                        </div>
                        <div className="body-block-item body-block-item__surname">
                            <label htmlFor="surnameUser1">Ваша фамилия </label>
                            <input
                             placeholder="------"
                             
                             type="text"
                             name="surnameUser1"
                             autocomplete="off"
                            onChange={ (e) => setSurUserName(e.target.value) }
                            value={userSurName}
                          
                              />
                        </div>
                       
                        <button  type="submit" className="btn-field btn-start" disabled={btnBoolen}>Создать</button>
                        <Link className="main-page-link" to="/loginapp/mainfield" disabled={nextPage}>на главную</Link>
                    </form>
                    {/* <div className="body-block">
                        <div className="body-block-item body-block-item__name">
                            <label htmlFor="nameUser2">Юзер 2 имя</label>
                            <input placeholder="........" type="text" name="nameUser2" />
                        </div>
                        <div className="body-block-item body-block-item__email">
                            <label htmlFor="emailUser2">Юзер 2 почта*</label>
                            <input placeholder="........" type="email" name="emailUser2" />
                        </div>
                        <div className="body-block-item body-block-item__password">
                            <label htmlFor="passwordUser2">Юзер 2 пароль*</label>
                            <input placeholder="........" type="password" name="passwordUser2" />
                        </div>
                        <div className="body-block-item body-block-item__w__password">
                            <label htmlFor="w__passwordUser2">подтвердите пароль*</label>
                            <input placeholder="........" type="password" name="w__passwordUser2" />
                        </div>
                    </div> */}
                </div>
                
            </div>
            {/* <div className="tart-field__body-results">
                <div className="body-results-block">
                    <label htmlFor="user1">User1</label>
                    <input type="checkbox" name="user1" />
                </div>
                <div className="body-results-block">
                    <label htmlFor="user2">User2</label>
                    <input type="checkbox" name="user2" checked/>
                </div>
                   
                    <button  className="btn-field btn-start">запустить приложение</button>
            </div> */}
            <div className="start-field__description">
                <p>создаем пользователей, они записываются в localstorage, далее открывается основная страница, на ней часть контента скрыта пока не авторизируешься</p>
            </div>
        </div>
    )
}

export default CreateUser;