import { Component } from 'react';
import './weatherApi.css'

import WeatherApiService from '../../../service/WheatherApiService';

class WeatherApi extends Component{
    constructor(props){
        super(props);
        this.state ={
            temperature: '',
            cloudcover: '',
            icon: '',
            windSpeed: '',
            location: 'Saratov',

        }
    }


    weatherApiService = new WeatherApiService();

    // onReaquest(){
    //     this.weatherApiService.getWeather('Saratov')
    // }

    componentDidMount(){
        this.onGetValue('Saratov');
    }

    onGetValue = (city) => {
        this.weatherApiService.getWeather(city)
            .then(res => this.onCreateweatherInfo(res.current))

    }

    // 
    onCreateweatherInfo = (arr) => {
        this.setState({
            temperature: arr.temperature,
            cloudcover: arr.cloudcover,
            icon: arr.weather_icons[0],
            windSpeed: arr.wind_speed,
        })
    }

    

    render() {
        
        const {temperature, cloudcover, icon, windSpeed, location} = this.state;

        return(

            <div className="weather-container">
                <h2>weather Api hello</h2>
                <h3>city: {location}</h3>
                <h3>temperature: {temperature}</h3>
                <h3>cloudcover: {cloudcover}</h3>
                <h3>wind: {windSpeed}</h3>
                <img src={icon} alt="not icon" />
            </div>
            
        )
    }

    
}


export default WeatherApi;