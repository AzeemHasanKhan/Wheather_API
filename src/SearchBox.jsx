import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

function SearchBox({ updateinfo }) {
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "aa4209c2664b0f1305e42d6335e47003";

  let getwheatherdata = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonresponse = await response.json();
      console.log(jsonresponse);

      let results = {
        city: city,
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelslike: jsonresponse.main.feelsLike,
        weather: jsonresponse.weather[0].description,
      };
      console.log(results);
      return results;
    } catch (error) {
      throw error
    }
  };

  let handlechange = (event) => {
    setcity(event.target.value);
  };
  let handlesubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setcity("");
      let newinfo = await getwheatherdata();
      updateinfo(newinfo);
    } catch (error) {
      seterror(true);
    }
  };
  return (
    <div className="SearchBox">
      <h3 className="font-bold text-2xl mt-2">Search for the wheather</h3>
      <br />
      <form onSubmit={handlesubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {
          error && 
            <div className=" text-center">
              <h3>City Not Found</h3>
            </div>
          
        }
      </form>
    </div>
  );
}

export default SearchBox;
