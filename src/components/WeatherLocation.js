import React from 'react';//permite usar react en el archivo
import Location from './Location';
import WeatherData from './WeatherData';
const WeatherLocation = () => (
    <div>
        WeatherLocation Component
        <Location></Location>
        <WeatherData></WeatherData>
    </div>
)

export default WeatherLocation;