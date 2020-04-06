import {WeatherStateType} from "./weatherState"
import {CurrentType, LocationType} from "../types";
export const FETCH_WEATHER = 'FETCH_WEATHER'

const handlers = {
    [FETCH_WEATHER]: (state: WeatherStateType, action: any) => ({
        ...state,
        location: action.payload.location,
        current: action.payload.current
    }),
    /*[ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }),*/

    DEFAULT: (state: WeatherStateType) => state
} as any

export const weatherReducer = (state: WeatherStateType, action: any) => {
    const handle = handlers[action.type] || handlers.DEFAULT

    return handle(state, action)


}
