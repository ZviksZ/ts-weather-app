import {WeatherStateType} from "./weatherState"
import {CurrentType, LocationType} from "../types";

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const CURRENT_QUERY = 'CURRENT_QUERY';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';


export const weatherReducer = (state: WeatherStateType, action: ActionsTypes): WeatherStateType => {
    switch (action.type) {
        case FETCH_WEATHER:
            return {
                ...state,
                location: action.payload.location,
                current: action.payload.current
            }
        case CURRENT_QUERY:
            return {
                ...state,
                currentQuery: action.payload
            }
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

type ActionsTypes = FetchWeatherActionType | CurrentQueryActionType | ShowLoaderActionType | HideLoaderActionType;

type FetchWeatherActionType = {
    type: typeof FETCH_WEATHER
    payload: { location: LocationType, current: CurrentType }
}
type CurrentQueryActionType = {
    type: typeof CURRENT_QUERY
    payload: string
}
type ShowLoaderActionType = { type: typeof SHOW_LOADER }
type HideLoaderActionType = { type: typeof HIDE_LOADER }
