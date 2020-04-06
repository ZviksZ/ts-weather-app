export type LocationType = {
    name: string
    country: string
    region: string
    lat: string
    lon: string
    timezone_id: string
    localtime: string
    localtime_epoch: number
    utc_offset: string
}
export type CurrentType = {
    observation_time: string
    temperature: number
    weather_code: number
    weather_icons: Array<string>
    weather_descriptions: Array<string>
    wind_speed: number
    wind_degree: number
    wind_dir: string
    pressure: number
    precip: number
    humidity: number
    cloudcover: number
    feelslike: number
    uv_index: number
    visibility: number
    is_day: string
}
