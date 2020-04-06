import React, {useEffect, useState} from 'react';
import {Weather} from "./components/Weather/Weather";
import {Search} from "./components/Search/Search";

const App:React.FC = () => {

    return (
        <div className="App">
            <Search/>
            <Weather/>
        </div>
    );
}

export default App;
