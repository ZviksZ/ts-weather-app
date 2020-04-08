import React, {useContext, useEffect} from 'react';
import {WeatherCityInfo} from "./WeatherCityInfo";
import {WeatherInfo} from "./WeatherInfo";
import {WeatherContext} from "../../context/weatherContext";
import {Loader} from "../Loader/Loader";


export const Weather:React.FC = () => {
    const {getWeather, location, current, loading} = useContext(WeatherContext)

    useEffect(() => {
        getWeather(`Donetsk Ukraine`)
        // eslint-disable-next-line
    }, [])

    if (loading || !location || !current)  {
        return (
            <div className="">
                <Loader/>
            </div>
        )
    }

    return (
        <div className="">
            <WeatherCityInfo location={location}/>
            <WeatherInfo currentWeather={current}/>
        </div>
    );
}

