

import React from 'react'
import { useState, useEffect } from "react";

function Clock2(props) {

      const [currentDate, setCurrentDate] = useState(new Date());

      useEffect(() => {
            const dynamic = props.dynamic;
            
            if(dynamic === 'true'){
                  const timerID = setInterval(() => setCurrentDate(new Date()), 1000);

                  return() => clearInterval(timerID);
            }
            
      }, [props.dynamic]);

      const continent = props.continent;
      const city = props.city;
      const tz = `${continent}/${city}`;
      const dynamic = props.dynamic;

      return (
            <div className = {dynamic === 'true'? 'interactive': 'static'}>
                  <h1>In {continent}, {city.replace('_', ' ')}</h1>
                  <h2>
                        It is {currentDate.toLocaleString('en-US', {timeZone: tz})}
                  </h2>
            </div>
      );
}
export default Clock2;
