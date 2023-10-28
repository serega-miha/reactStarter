import './test.css'


import { useState, useEffect } from "react";
import ServiceApi from '../../../service/ServiceApi';
import Spinner from '../../spinner/Spinner';


const TestHook = (props) => {

     const options = [
        {value: 'RUB', label: 'Выберите валюту'},
        {value: 'USD', label: 'USD'},
        {value: 'EUR', label: 'EUR'},
        {value: 'UAH', label: 'UAH'},
    ]
    const [starting, setStarting] = useState(false)
    const [value, setValue] = useState(1)
    const [rate, setRate] = useState(1)
    const [curency, setCurency] = useState('USD')
    const [loading, setLoading] = useState(false)

   function changeValue(e){
   
    setValue(value => e.target.value)
   }

   function changeCurency(e) {
    setCurency(curency => e.target.value)
    setStarting(true)
   }

    let serviceApi = new ServiceApi();

    useEffect(() => {
    
        if (starting){
            onRequest(curency)
        }
    }, [curency])


    function changeRate(res){
        setRate(rate => res);
        setLoading(loading => false);
    }

    function onRequest(curency) {
        
        setLoading(loading => true);
        serviceApi.getCurrency(curency)
            .then(changeRate)
    }


    return (
        <div className="test test-hook">
            <hr />
            <div className="test-h">
            <h2>Конвертер валюты на хуках</h2>
            </div>
            
        <div className="test-container">
            <input type="number" defaultValue={1}  onChange={changeValue} />
            <select  onChange={changeCurency}>
            {options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
           </select>
            <h2>результат: {loading ? <Spinner/> : (value * rate).toFixed(1)}, {(value * rate).toFixed(1)}    rub</h2>
            <h3>выбрана валюта {curency}</h3>
        </div>
    </div>

    )
}

export default TestHook;