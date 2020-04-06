import React from 'react';

export const Search = () => {
    return (
       <div className="container">
           <div className="input-field col s6 ">
               <input id="request_city" type="text" className="validate" />
               <label htmlFor="request_city">Введите название города или населенного пункта</label>
           </div>
       </div>

    )
}

