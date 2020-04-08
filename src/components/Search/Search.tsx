import React, {useContext, useRef} from 'react';
import {WeatherContext} from "../../context/weatherContext";

export const Search:React.FC = () => {
    const {getWeather} = useContext(WeatherContext)

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            getWeather(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return (
       <>
           <div className="input-field col s6 mt-3">
               <input
                   id="request_city"
                   ref={ref}
                   onKeyPress={keyPressHandler}
                   type="text"
                   className="validate" />
               <label htmlFor="request_city">Введите название города или населенного пункта</label>
           </div>
       </>

    )
}

