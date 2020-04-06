import {WeatherStateType} from "./weatherState"
export const FETCH_WEATHER = 'FETCH_WEATHER'

const handlers = {
    [FETCH_WEATHER]: (state: WeatherStateType, action: any) => ({
        ...state,
        location: action.payload.location,
        current: action.payload.current
    }),
    DEFAULT: (state: WeatherStateType) => state
} as any

export const weatherReducer = (state: WeatherStateType, action: any) => {
    const handle = handlers[action.type] || handlers.DEFAULT

    return handle(state, action)


}
