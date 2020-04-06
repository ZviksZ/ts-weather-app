import React, {useReducer} from 'react'
import axios from 'axios'
import {WeatherContext} from "./weatherContext";
import {weatherReducer, FETCH_WEATHER} from "./weatherReducer";
import {CurrentType, LocationType} from "../types";

interface Props {
    children: React.ReactNode
}

const initialState = {
    location: {} as LocationType,
    current: {} as CurrentType
}
export type WeatherStateType = typeof initialState;

export const WeatherState: React.FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(weatherReducer, initialState)
    const getWeather = async (query: string) => {
        try {
            const data = await axios.get(`http://api.weatherstack.com/current?access_key=520adfa485ef88398bba278d8f42b028&query=` + query).then(response => response.data);

            let payload = {
                location: data.location,
                current: data.current
            }

            dispatch({
                type: FETCH_WEATHER,
                payload
            })
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <WeatherContext.Provider value={{
            getWeather,
            location: state.location,
            current: state.current
        }}>
            {children}
        </WeatherContext.Provider>
    )
}
