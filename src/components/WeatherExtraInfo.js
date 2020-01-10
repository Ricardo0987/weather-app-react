import React from 'react';
import WeatherIcons from 'react-weathericons';


const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
         <WeatherIcons name="cloud" size="2x" />
        <span>{`${humidity} % - `}</span>
        <span>{wind}</span>
    </div>
);

export default WeatherExtraInfo;