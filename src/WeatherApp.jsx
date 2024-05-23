import React, { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp() {
  const [weatherinfo, setweatherinfo] = useState({
    city: "Delhi",
    feelslike: 24.34,
    temp: 23.34,
    tempMin: 23,
    tempMax: 24,
    humidity: 23,
    weather: "haze",
  });
  let updateinfo = (result)=>{
    setweatherinfo(result);
  }
  return (
    <div style={{ textAlign: "center" }} className=" flex flex-col gap-3 border border-cyan-200 w-[400px] m-auto" >
      <h2 className=" font-bold text-3xl">Weather App By Azeem Hasan Khan</h2>
      <SearchBox updateinfo={updateinfo} />
      <InfoBox info={weatherinfo} />
    </div>
  );
}

export default WeatherApp;
