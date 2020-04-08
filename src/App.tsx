import React from 'react';
import {Weather} from "./components/Weather/Weather";
import {Search} from "./components/Search/Search";
import {WeatherState} from "./context/weatherState";
import {Navbar} from "./components/Navbar/Navbar";

const App:React.FC = () => {

    return (
       <WeatherState>
           <Navbar/>
           <div className="container">
               <Search />
               <Weather/>
           </div>
       </WeatherState>
    );
}

export default App;
