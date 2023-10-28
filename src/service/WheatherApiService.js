


class WeatherApiService {
    _urlBase = 'http://api.weatherstack.com/current';
    _apiKey = 'access_key=c9081cb4eaed7dcd4b0508917108fd56';




    getResource = async (url) => {
        
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Проблем ${url}, статус ${res.status}`)
        }
        let response = await res.json();
       
        return response;
    }

    getWeather = async (query) => {
        const res = await this.getResource(`${this._urlBase}?${this._apiKey}&query=${query}`)
        console.log(res);
        
        return this._transformWeather(res);
    }

    _transformWeather = (data) => {
        return {
            temperature: data.current.temperature + ' ℃',
            cloudCover: data.current.cloudcover + ' %',
            windSpeed: data.current.wind_speed + ' м/с',
            humidity: data.current.humidity + ' %',
            feelslike: data.current.feelslike + ' ℃',
            location: data.location.name,
            icon: data.current.weather_icons[0],
            localTime: data.current.observation_time,
            winDir: data.current.wind_dir,
            
        }
    }


    //https://weatherstack.com/quickstart
    

    
}

export default WeatherApiService;