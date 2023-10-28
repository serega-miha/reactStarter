import './weatherApi.css'


import { useState, useEffect } from "react";
import WeatherApiService from '../../../service/WheatherApiService';



const TestHook = (props) => {

    const cities = [
        {value: 'Maimi', label: 'Выберите город'},
        {value: 'Omsk', label: 'Omsk'},
        {value: 'Saratov', label: 'Saratov'},
        {value: 'Tomsk', label: 'Tomsk'},
        {value: 'Vladivostok', label: 'Vladivostok'},
        {value: 'Perm', label: 'Perm'},
        {value: 'Sochi', label: 'Sochi'},
        {value: 'Moscow', label: 'Moscow'}]

    const [starting, setStarting] = useState(false)
    const [weatherList, setWeatherList] = useState([])
    const [location, setLocation] = useState('Moscow')

   

    let weatherApi = new WeatherApiService();

    useEffect(() => {
        if ( starting) {
            onRequest(location)
        }
    }, [ location])

    function onRequest(location) {
      
        weatherApi.getWeather(location)
            .then(changeInfo)
    }


    function changeInfo(newWeatherList){
        setWeatherList(weatherList => newWeatherList)
    }



    function changeLocation(e) {
        setLocation(location => e.target.value);
        setStarting(true)
    }




    return (
        <div className="weather-container">
            <View weatherList={weatherList} cities={cities} changeLocation={changeLocation}/>

        </div>

    )
}

const View = ({weatherList, cities, changeLocation}) => {
    const {temperature, cloudCover, windSpeed, humidity,feelslike,location,icon} = weatherList;

    return (
        <>
            <h2>Weather Api</h2>
            <h3>city: {location}</h3>
            <select onChange={changeLocation} >
                {cities.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
                </select>
            <h3>temperature: {temperature}</h3>
            <h3>cloudcover: {cloudCover}</h3>
            <h3>wind: {windSpeed}</h3>
            <img src={icon} alt="not icon" />
        </>    
            // 
    )
}

export default TestHook;