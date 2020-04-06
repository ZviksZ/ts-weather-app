import React, {useEffect, useState} from 'react';
import {Weather} from "./components/Weather/Weather";
import {Search} from "./components/Search/Search";
import {WeatherState} from "./context/weatherState";

const App:React.FC = () => {

    return (
       <WeatherState>
           <div className="App">
               <Search />
               <Weather/>
           </div>
       </WeatherState>
    );
}

export default App;
