import React from "react";
import './Tabs/weatherForecast.css';

const WeatherForcast = ({ weatherData }) => {
    console.log('weatherData', weatherData)

    const today = new Date();

    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const day = Days[today.getDay()]

    const index = Days.indexOf(day)

    console.log('day', day)
    console.log('index', index)
    return (
        <div className="weatherForecast">
            <div >
                <h3>Today</h3>
                <div>
                    <img className="today" alt="tomorrow" src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}></img>
                    <p>Current: {(weatherData.current.temp - 273.15).toFixed(2)}°</p>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: "center" }} className="dailyForecast" >
                <div className="img">
                    <p>{Days[index + 1]}</p>
                    <img
                        className="dailyimg"
                        alt="day4" src={`http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`}>
                    </img>
                    <p className="temperature">{(weatherData.daily[0].temp.day - 273.15).toFixed(2)}°</p>
                </div>

                <div className="img">
                    <p>{Days[index + 2]}</p>
                    <img
                        className="dailyimg"
                        alt="day4" src={`http://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}@2x.png`}>
                    </img>
                    <p className="temperature">{(weatherData.daily[1].temp.day - 273.15).toFixed(2)}°</p>
                </div>
                <div className="img">
                    <p>{Days[index + 3]}</p>
                    <img
                        className="dailyimg"
                        alt="day4" src={`http://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}@2x.png`}>
                    </img>
                    <p className="temperature">{(weatherData.daily[2].temp.day - 273.15).toFixed(2)}°</p>
                </div>
                <div className="img">
                    <p>{Days[index + 4]}</p>
                    <img
                        className="dailyimg"
                        alt="day4" src={`http://openweathermap.org/img/wn/${weatherData.daily[3].weather[0].icon}@2x.png`}>
                    </img>
                    <p className="temperature">{(weatherData.daily[3].temp.day - 273.15).toFixed(2)}°</p>
                </div>
            </div>

        </div>
    )
}

export default WeatherForcast;