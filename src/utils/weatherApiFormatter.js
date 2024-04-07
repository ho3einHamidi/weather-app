export function formatWeatherApiResponse(data) {
    if (data) {
      return {
        temp: Math.floor(data.main.temp - 273.15),
        maxTemp: Math.round(data.main.temp_max - 273.15),
        minTemp: Math.round(data.main.temp_min - 273.15),
        name: data.name,
        type: data.weather[0].main,
        wind: data.wind.speed,
      };
    }
  }