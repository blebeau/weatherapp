import React from "react";
import './Tabs/weatherForecast.css';

const WeatherForcast = ({ weatherData }) => {

    const today = new Date();

    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const day = Days[today.getDay()]

    const index = Days.indexOf(day);

    let displayDays = Days.slice(index + 1, index + 5);

    let daysToAdd = []

    // If the current day is Thursday or later, need to get 
    // days from begining of the week
    if (displayDays.length < 4) {
        daysToAdd = Days.slice(0, 4 - displayDays.length);
        displayDays = displayDays.concat(daysToAdd);
    }

    return (
        <div className="weatherForecast">
            <div className="dailyForecast">
                <h3>Today</h3>
                <div>
                    <img className="todayImg" alt="tomorrow" src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}></img>
                    <p className="tempToday">{(weatherData.current.temp - 273.15).toFixed(0)}°</p>
                    <p className="statusToday">{weatherData.current.weather[0].main}</p>
                </div>
            </div>

            <div className="weekForecast" >
                {weatherData.daily.slice(0, 4).map((day, i) => (
                    <div key={i} className="img">
                        <p className="dayOfWeek">{displayDays[i]}</p>
                        <img
                            className="dailyimg"
                            alt="day4" src={`http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`}>
                        </img>
                        <p className="temperature">{(weatherData.daily[i].temp.day - 273.15).toFixed(0)}°</p>
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default WeatherForcast;