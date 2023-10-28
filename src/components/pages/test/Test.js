import './test.css'


import { Component } from 'react'

// import { useState, useEffect } from "react";
import ServiceApi from '../../../service/ServiceApi';
import Spinner from '../../spinner/Spinner';


class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '1',
            rate: '',
            curency: 'USD',
            loading: false,
            options: [
                {value: 'USD', label: 'USD'},
                {value: 'EUR', label: 'EUR'},
                {value: 'UAH', label: 'UAH'},
            ]
        }
    }

    serviceApi = new ServiceApi();

    //запускаем сразу после рендера, чтобы получить данные
    componentDidMount() {
        this.onRequest(this.state.curency);


    }
    onChangeRate = (res) => {
        this.setState({
            rate: res,
            loading: false
        })
    }

    onRequest(curency) {
        this.setState({
           loading: true
        })
        this.serviceApi.getCurrency(curency)
            .then(this.onChangeRate)
    }



    onChangeValue = (e) => {
       console.log(e.target.value);
       this.setState({
        value: e.target.value
       })
    }

    onChangeCurency = (e) => {
        console.log(e.target.value);
        this.setState({
            curency: e.target.value,
           })
           this.onRequest(e.target.value);
    }


    

    render(){

        const {value, rate, curency, loading} = this.state

        const spinner = loading ? <Spinner/> : (value * rate).toFixed(1)
       

        return (
            <div className="test">
                <div className="test-container">
                    <input type="number" value={value}  onChange={this.onChangeValue}/>
                    <select onChange={this.onChangeCurency}>
                    {this.state.options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
                   </select>
                    <h2 className='result-text'>результат: {spinner} rub</h2>
                    <h3 >выбрана валюта: {curency}</h3>
                </div>
            </div>
        )
    }
}

///////////////////////////////////////////////////////////////////////////


// function Test() {
//     const [value1, setValue1] = useState(0);
// 	const [value2, setValue2] = useState(0);
	
// 	function handleChange1(event) {
// 		setValue1(+event.target.value);
// 	}
	
// 	function handleChange2(event) {
// 		setValue2(+event.target.value);
// 	}


//     return (
  
//         <div>
// 		<input value={value1} onChange={handleChange1} />
// 		<input value={value2} onChange={handleChange2} />
// 		<p>result: {value1 + value2}</p>
// 	</div>
//         )

// }

export default Test;