import React, {useEffect, useState} from 'react';
import {WeatherCityInfo} from "./WeatherCityInfo";
import {WeatherInfo} from "./WeatherInfo";
import {CurrentType, LocationType} from '../../types';
import {useHttp} from '../../hooks/http.hook';


export const Weather:React.FC = () => {
    const {loading, error, request, clearError} = useHttp()

    // eslint-disable-next-line
    const [data, setData] = useState({
        location: {} as LocationType,
        current: {} as CurrentType
    })




    // eslint-disable-next-line
    useEffect(() => {
        const fetchStartWeather = async () => {
            try {
                const data = await request(`http://api.weatherstack.com/current?access_key=520adfa485ef88398bba278d8f42b028&query=Donetsk Ukraine`)

                setData({
                    location: data.location,
                    current: data.current
                })
            } catch (e) {
                console.log(error)
            }
        }
        fetchStartWeather()
    }, [])

    return (
        <div className="container">
            <h1>{data?.location?.name} {data?.location?.country}</h1>
            <WeatherCityInfo location={data.location}/>
            <WeatherInfo currentWeather={data.current}/>
        </div>
    );
}

