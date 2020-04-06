import React from 'react';
import {CurrentType} from "../../types";

type WeatherInfoProps = {
    currentWeather: CurrentType
}

export const WeatherInfo:React.FC<WeatherInfoProps> = ({currentWeather}) => {
    let image = '';
    if (currentWeather?.weather_icons) {
        image = currentWeather.weather_icons[0]
    }

    return (
        <div>
            { image.length && <img src={image} alt="icon"/> }
        </div>
    );
}

