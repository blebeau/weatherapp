import React, { useState, useEffect } from "react";
import WeatherForcast from "../WeatherForecast";

import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";


const Tabs = () => {
    const [apiData, setApiData] = useState({});
    const [location, setLocation] = useState('lat=33.44&lon=-94.04')
    const [activeTab, setActiveTab] = useState("tab1");

    const apiKey = '685651cbcd365d1562c0e2c4bbaad053';

    useEffect(() => {
        async function fetchWeather() {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?${location}&exclude=minutely&appid=${apiKey}`);

            response = await response.json();
            setApiData(response)
        }
        fetchWeather();
    }, [location])

    return (
        <div>
            <ul className="nav">
                <TabNavigation
                    title="CHICAGO"
                    id="tab1"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setLocation={setLocation}
                />
                {/* lat=33.44&lon=-94.04 */}
                <TabNavigation
                    title="TOKYO"
                    id="tab2"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setLocation={setLocation}
                />
                {/* lat=35.75&lon=-139.75 */}
                <TabNavigation
                    title="SARNIA"
                    id="tab3"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setLocation={setLocation}
                />
                {/* lat=42.97&lon=-82.40 */}
            </ul>
            <div className="Tabs">

                {apiData && apiData.current ?
                    <div className="displayed">
                        <TabContent id="tab1" activeTab={activeTab}>
                            <WeatherForcast weatherData={apiData} />
                        </TabContent>
                        <TabContent id="tab2" activeTab={activeTab}>
                            <WeatherForcast weatherData={apiData} />
                        </TabContent>
                        <TabContent id="tab3" activeTab={activeTab}>
                            <WeatherForcast weatherData={apiData} />
                        </TabContent>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default Tabs;