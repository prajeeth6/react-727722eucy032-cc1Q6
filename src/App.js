import React, { useState } from "react";

function Weather(props) {
  const [weather, upweather] = useState("Sunny");
  const up = () => {
    upweather("Cloudy");
  };
  return (
    <div className='main'>
      <h1>City : Coimbatore</h1>
      <h1>Weather : {weather}</h1>
      <button className="button" onClick={up}>refresh weather</button>
    </div>
  );
}

export default Weather;