import React from 'react';
import {LocationType} from "../../types";

type WeatherCityInfoProps = {
    location: LocationType
}

export const WeatherCityInfo:React.FC<WeatherCityInfoProps> = ({location}) => {

    return (
        <div>
            <h3>{location.name} {location.country}</h3>
            <p>{location.localtime}</p>
        </div>
    );
}

