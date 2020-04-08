import React, {useReducer} from 'react'
import axios from 'axios'
import {WeatherContext} from "./weatherContext";
import {weatherReducer, FETCH_WEATHER, SHOW_LOADER, HIDE_LOADER, CURRENT_QUERY} from "./weatherReducer";
import {CurrentType, LocationType} from "../types";

const BASE_API_URI = `http://api.weatherstack.com/current?access_key=410a87ea8c775cc799f591d8ec4b1101&query=`;

interface Props {
    children: React.ReactNode
}

const initialState = {
    location: null as LocationType | null,
    current: null as CurrentType | null,
    loading: false as boolean,
    currentQuery: '' as string
}



export type WeatherStateType = typeof initialState

export const WeatherState: React.FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(weatherReducer, initialState)

    const getWeather = async (query: string) => {
        try {
            dispatch({type: SHOW_LOADER})
            dispatch({type: CURRENT_QUERY,payload: query})

            let data = await axios.get(BASE_API_URI + query).then(response => response.data);
            dispatch({
                type: FETCH_WEATHER,
                payload: { location: data.location, current: data.current }
            })

            dispatch({type: HIDE_LOADER })
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <WeatherContext.Provider value={{
            getWeather,
            location: state.location,
            current: state.current,
            loading: state.loading,
            currentQuery: state.currentQuery
        }}>
            {children}
        </WeatherContext.Provider>
    )
}
