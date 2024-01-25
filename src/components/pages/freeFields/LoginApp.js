import './loginApp.scss';


import CreateUser from './CreateUser';
import MainField from './MainField';
import UpdateUserInfo from './UpdateUserInfo';

import { Routes, Route, Link, } from 'react-router-dom';

import { useState } from 'react';
import { Helmet } from 'react-helmet';


const StartField = () => {
    return (
        <div className="start-field-button">
            <Link to="/loginapp/mainfield">запустить приложение</Link>
        </div>
    )
}

const LoginApp = () => {

    const [auth, setAuth] = useState(false)
    const [login, setLogin] = useState('');
    const [linkDisabled, setLinkDisabled] = useState(true);




    const onSetAuth = (arg) => {
        setAuth(arg);
    }
    const onSetLogin = (str) => {
        setLogin(str);
    }

    const onLinkDisabled = (arg) => {
        setLinkDisabled(arg);
    }



    return (

        <main className="login-app">
            <Helmet>
                <meta
                    name="description"
                    content="LoginApp"
                />
                <title>LoginApp</title>
            </Helmet>

            <Routes>
                <Route exact path=""
                    element={<StartField />} />

                <Route exact path="startfield" element={<CreateUser />} />


                <Route exact path="mainfield"
                    element={<MainField
                        auth={auth}
                        onSetAuth={onSetAuth}
                        login={login}
                        onSetLogin={onSetLogin}
                        linkDisabled={linkDisabled}
                        onLinkDisabled={onLinkDisabled}
                    />}
                />
                <Route exact path="updateuserinfo"
                    element={<UpdateUserInfo
                        auth={auth}
                        login={login}

                    />} />

            </Routes>


        </main>


    )
}
export default LoginApp;