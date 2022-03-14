import React, { useEffect, useState } from "react";

const WeatherToday = () => {

    // const [apiData, setApiData] = useState({});
    // const [getState, setGetState] = useState('');
    // const [state, setState] = useState('');

    // const apiKey = '685651cbcd365d1562c0e2c4bbaad053';
    // console.log('apiKey', apiKey)

    // const apiUrl = 'api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=685651cbcd365d1562c0e2c4bbaad053';

    // useEffect(() => {
    //     async function fetchWeather() {
    //         let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&appid=${apiKey}`);
    //         console.log('response', response);
    //         response = await response.json();
    //         setApiData(response)
    //         console.log('response', response);
    //     }
    //     fetchWeather();
    // }, [])

    // console.log('apiData', apiData);
    // console.log('state', state);

    // const inputHandler = (event) => {
    //     setGetState(event.target.value);
    // };

    // const submitHandler = () => {
    //     setState(getState);
    // };

    // const kelvinToCelsius = (k) => {
    //     return (k - 273.15).toFixed(2);
    // }

    return (
        <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>

        </div>
    )
}

export default WeatherToday;


// {apiData.main ? (
//     <div class="card-body text-center">
//         <img
//             src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
//             alt="weather status icon"
//             className="weather-icon"
//         />

//         <p className="h2">
//             {kelvinToCelsius(apiData.main.temp)}&deg; C
//         </p>

//         <p className="h5">
//             <i className="fas fa-map-marker-alt"></i>{' '}
//             <strong>{apiData.name}</strong>
//         </p>

//         <div className="row mt-4">
//             <div className="col-md-6">
//                 <p>
//                     <i class="fas fa-temperature-low "></i>{' '}
//                     <strong>
//                         {kelvinToCelsius(apiData.main.temp_min)}&deg; C
//                     </strong>
//                 </p>
//                 <p>
//                     <i className="fas fa-temperature-high"></i>{' '}
//                     <strong>
//                         {kelvinToCelsius(apiData.main.temp_max)}&deg; C
//                     </strong>
//                 </p>
//             </div>
//             <div className="col-md-6">
//                 <p>
//                     {' '}
//                     <strong>{apiData.weather[0].main}</strong>
//                 </p>
//                 <p>
//                     <strong>
//                         {' '}
//                         {/* {countries.getName(apiData.sys.country, 'en', {
// select: 'official',
// })} */}
//                     </strong>
//                 </p>
//             </div>
//         </div>
//     </div>
// ) :
//     (
//         <p>Loading</p>
//     )}