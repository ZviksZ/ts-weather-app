import React, {useContext, useEffect} from 'react';
import {WeatherCityInfo} from "./WeatherCityInfo";
import {WeatherInfo} from "./WeatherInfo";
import {WeatherContext} from "../../context/weatherContext";


export const Weather:React.FC = () => {
    const {getWeather, location, current} = useContext(WeatherContext)

    // eslint-disable-next-line
    useEffect(() => {
        getWeather(`Donetsk Ukraine`)
    }, [])

    if (Object.keys(location).length == 0 || Object.keys(current).length == 0)  {
        return <div>Ничего нет</div>
    }

    return (
        <div className="container">
            <h1>{location?.name} {location?.country}</h1>
            <WeatherCityInfo location={location}/>
            <WeatherInfo currentWeather={current}/>
        </div>
    );
}

