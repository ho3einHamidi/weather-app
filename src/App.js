import { useEffect, useState } from "react";
import "./App.css";
import { CityInput } from "./components/CityInput/CityInput";
import { WeatherImage } from "./components/WeatherIcon/WeatherImage";
import { Temp } from "./components/Temp/Temp";
import { MaxMinTemp } from "./components/MaxMinTemp/MaxMinTemp";
import { Wind } from "./components/Wind/Wind";
import { formatWeatherApiResponse } from "./utils/weatherApiFormatter";
import { Time } from "./components/Time/Time";
function App() {
  const [city, setCity] = useState("");
  const key = "b1c8dafd58d5a031454e9cdec33b5414";
  const [weatherData, setWeatherData] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (city.length > 2) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      )
        .then((req) => req.json())
        .then((data) => {
          if (data.cod === 200) {
            setMessage("");
            setWeatherData(formatWeatherApiResponse(data));
          } else if (data.cod === "404") {
            setMessage("City not found");
            setWeatherData(null);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [city]);

  function onCityInputChange(value) {
    setCity(value);
    setLoading(true);
  }

  return (
    <div className="main">
      <div className="left-side">
        <Temp temp={weatherData?.temp} />
        <Time/>

      </div>
      <div className="right-side">
        <CityInput onChange={onCityInputChange} />
        {!loading && (
          <>
            <p className="city-name">{weatherData?.name}</p>
            <WeatherImage type={weatherData?.type} />
            <Temp temp={weatherData?.temp} />
            <p>{message}</p>
            <MaxMinTemp
              minTemp={weatherData?.minTemp}
              maxTemp={weatherData?.maxTemp}
            />
            <Wind windSpeed={weatherData?.wind} />
          </>
        )}
        {loading && <p>loading</p>}
      </div>
    </div>
  );
}

export default App;
