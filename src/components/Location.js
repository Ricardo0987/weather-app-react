import React from 'react';

const Location = (props) => {
    console.log(props);
    //debugger;

    // normal
    // const city = props.city;


    const { city } = props // with destructuring

    return (<div><h1>{city}</h1></div>)

}

export default Location;
