import React, {useContext, useRef} from 'react';
import {WeatherContext} from "../../context/weatherContext";

export const Search:React.FC = () => {
    const ref = useRef<HTMLInputElement>(null)
    const {getWeather} = useContext(WeatherContext)

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            getWeather(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return (
       <div className="container">
           <div className="input-field col s6 ">
               <input
                   id="request_city"
                   ref={ref}
                   onKeyPress={keyPressHandler}
                   type="text"
                   className="validate" />
               <label htmlFor="request_city">Введите название города или населенного пункта</label>
           </div>
       </div>

    )
}

