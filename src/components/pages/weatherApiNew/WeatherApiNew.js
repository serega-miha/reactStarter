import { useState, useEffect } from "react"
import { dataBaseCities } from "../../../dataBase/CitiesList/citiesList";
import WeatherApiService from "../../../service/WheatherApiService";
import './weatherApiNew.css'


const WeatherApiNew = () => {
    const dataBase = dataBaseCities;
    const [city, setcity] = useState('');
    const [selectedCity, setSelectedCity] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [visibleCityList, setVisibleCityList] = useState(false)
    const [starting, setStarting] = useState(false)
    const [weatherList, setWeatherList] = useState([])
    let weatherApi = new WeatherApiService();

    const updateCity = (e) => {
   
        setcity(city => e.target.value.toLowerCase())
        setInputValue(inputValue => e.target.value)
        setVisibleCityList(true)
    }
    const updateSelectedCity = (e) => {
        let tempData = e.target.innerText
        setSelectedCity(tempData);
        setVisibleCityList(false);
        setInputValue('')
        setcity('');
        setStarting(true)
    }

    useEffect(() => {
        if ( starting) {
            onRequest(selectedCity)
        }

    }, [selectedCity])

    function onRequest(location) {
      
        weatherApi.getWeather(location)
            .then(changeInfo)
    }
    function changeInfo(newWeatherList){
        setWeatherList(weatherList => newWeatherList)
    }


    const searchCity = (data, term) => {
        let enRe = /[^A-Za-z]/ig;
        if (term.length == 0) {
            return [];
        }
        return data.filter(item => {
            if (enRe.test(term)) {
                return item.rus.indexOf(term) > -1
            } else {
                return item.en.indexOf(term) > -1
            }

        })

    }


    const newData = searchCity(dataBase, city);

    const renderElements = newData.map((item, i) => {
        let enRe = /[^A-Za-z]/ig;
        if (enRe.test(city)) {

            return <li value={item.en} key={i} className="change-city-link"><h6><a href="#" value={item.en} onClick={updateSelectedCity}>{item.rus[0].toUpperCase() + item.rus.substring(1)}</a></h6></li>
        } else {
            return <li value={item.en} key={i} className="change-city-link"><h6><a href="#" value={item.en} onClick={updateSelectedCity}>{item.en[0].toUpperCase() + item.en.substring(1)}</a></h6></li>
        }


    })

    let visibleStyle = { 'visibility': 'hidden' };
    if (visibleCityList) {
        visibleStyle = { 'visibility': 'visible' }
    }
    const {temperature, cloudCover, windSpeed, humidity,feelslike,winDir,localTime,location,icon} = weatherList;
    return (
        <div className="weather-container-new-api">
            <h2>Погода на "Ветер-Шметер.ru"</h2>
            <input
            className="city-input"
                type="text"
                onChange={updateCity}
                value={inputValue}
                placeholder="Введите название города"
            />
            <div className="change-city-block">
            <ul className="change-city__list" style={visibleStyle}>
                {renderElements}
            </ul>
            </div>
            
            <div className="weathe-list">
                <p>Город: <span>{selectedCity}</span></p>
                <p>Местное время: <span>{localTime}</span></p>
                <p>Облачность: <span>{cloudCover}</span></p>
                <p>Влажность: <span>{humidity}</span></p>
                <p>Скорость ветра: <span>{windSpeed}</span></p>
                <p>Направление ветра: <span>{winDir}</span></p>
                <p>Температура: <span> {temperature}</span></p>
                <p>Ощущается как: <span>{feelslike}</span></p>
            </div>
           




        </div>
    )
}

export default WeatherApiNew;