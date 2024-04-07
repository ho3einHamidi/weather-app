import { useEffect, useState } from "react";
import "./App.css";
import { CityInput } from "./components/CityInput/CityInput";
import { WeatherImage } from "./components/WeatherIcon/WeatherImage";
function App() {
  const [city, setCity] = useState("");
  const key = "b1c8dafd58d5a031454e9cdec33b5414";
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    if (city.length > 2) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      )
        .then((req) => req.json())
        .then((data) => formattedData(data));
    }
  }, [city]);
  function formattedData(data) {
    const formattedData = {
      temp: Math.floor(data.main.temp - 273.15),
      maxTemp: Math.round(data.main.temp_max - 273.15),
      minTemp: Math.round(data.main.temp_min - 273.15),
      name: data.name,
      type: data.weather[0].main,
      wind: data.wind.speed,
    };
    
    setWeatherData(formattedData);
  }

  function onCityInputChange(value) {
    setCity(value);
  }

  return (
    <>
      <CityInput onChange={onCityInputChange} />
      <p>{city}</p>
      <WeatherImage data={weatherData} />
    </>
  );
}

export default App;
