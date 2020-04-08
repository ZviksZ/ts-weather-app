import React from 'react';
import {CurrentType} from "../../types";
import './Weather.scss'

type WeatherInfoProps = {
    currentWeather: CurrentType
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({currentWeather}) => {
    return (
        <table className="animateTable">
            <thead>
            <tr>
                <th></th>
                <th>Температура</th>
                <th>Ощущается</th>
                <th>Описание</th>
                <th>Влажность</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="delay1"><img src={currentWeather.weather_icons[0]} alt="icon"/></td>
                <td className="delay2">{currentWeather.temperature}&deg;</td>
                <td className="delay3">{currentWeather.feelslike}&deg;</td>
                <td className="delay4">{currentWeather.weather_descriptions}</td>
                <td className="delay5">{currentWeather.humidity}</td>
            </tr>
            </tbody>
        </table>
    );
}

