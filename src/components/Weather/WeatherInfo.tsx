import React from 'react';
import {CurrentType} from "../../types";

type WeatherInfoProps = {
    currentWeather: CurrentType
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({currentWeather}) => {
    return (
        <table className="">
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
                <td><img src={currentWeather.weather_icons[0]} alt="icon"/></td>
                <td>{currentWeather.temperature}&deg;</td>
                <td>{currentWeather.feelslike}&deg;</td>
                <td>{currentWeather.weather_descriptions}</td>
                <td>{currentWeather.humidity}</td>
            </tr>
            </tbody>
        </table>
    );
}

