import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { BreadcrumbItem, Container } from 'react-bootstrap';
import './App.css';




import TestHook from './components/pages/test/TestHook';
import Spinner from './components/spinner/Spinner';
import WeatherApi from './components/pages/weatherApi/WeatherApi';
import WeatherApiHook from './components/pages/weatherApi/WeatherApiHook';
import AppTest from './components/pages/WhoAmI/WhoAmI';
import BootForm from './components/pages/bootForm/BootForm';
import RndNumber from './service/RndNumber';
import AppHeader from './components/appHeader/Appheader';
import WeatherApiNew from './components/pages/weatherApiNew/WeatherApiNew';
import ShablonClass from './components/pages/shablon/ShablonClass';
import Slider from './components/pages/slider/Slider';
import ModalWindow from './components/pages/modalWimdow/modalWindow';

import { dataBaseCities } from './dataBase/CitiesList/citiesList';
import ShablonComponent from './components/pages/shablon/ShablonComponent';
import MainField from './components/pages/freeFields/MainField';

import Roster from './components/pages/roster/Roster';
import LoginApp from './components/pages/freeFields/LoginApp';
import MenuAnim from './components/pages/menuAnimation/MenuAnimation';

import Example from './components/pages/About/About';
import FormField from './components/pages/Formik/Formik';







const Number = () => {
    const _adress = 'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
    const [num, setNum] = useState('')
    let newNumber = new RndNumber();

    useEffect(() => {
        onRequest(_adress)
    }, [])

    function onRequest(url) {
        newNumber.getResourse(url)
            .then(onChangeNumber)
    }
    function onChangeNumber(res) {
        setNum(num => res)
    }

    return <h2>rndnumber - {num}</h2>
}


function App() {


    return (
        <BrowserRouter>
            <div className="app">
                <div className="header">
                    <AppHeader />
                </div>
                <div className="body">
                    <main className='main-block'>
                        <Routes>


                            <Route path='/bootform'
                                element={<BootForm />} />

                            <Route path='/test'
                                element={<TestHook />} />

                            <Route path='/weatherapi'
                                element={<WeatherApiHook />} />

                            <Route path='/whoami'
                                element={<AppTest />} />

                            <Route path='/weatherapinew'
                                element={<WeatherApiNew />} />

                            <Route path='/shablon'
                                element={<ShablonComponent />} />

                            <Route path='/slider'
                                element={<Slider />} />

                            <Route path='/loginapp/*'
                                element={<LoginApp />} />

                            <Route path='/roster/*'
                                element={<Roster />} />

                            <Route path='/animation/*'
                                element={<MenuAnim />} />

                            <Route path='/example/*'
                                element={<Example />} />

                            <Route path='/modalwindow'
                                element={<ModalWindow />} />

                            <Route path='/formik'
                                element={<FormField />} />

                        </Routes>
                    </main>
                </div>
                <div className="footer">
                    <h3>footer</h3>
                </div>


            </div>
        </BrowserRouter>
    )
}

export default App;
