import axios from "axios";
import { CurrentWeatherData, ForecastData } from "./utils/types";

const apiKey: string = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = "http://api.weatherapi.com/v1";
axios.defaults.params = {
  key: apiKey,
};

const currentWeather = async (city: string): Promise<CurrentWeatherData> => {
  const res = await axios.get<CurrentWeatherData>("/current.json", {
    params: {
      q: city,
    },
  });
  return res.data;
};

const forecastWeather = async (city: string): Promise<ForecastData> => {
  const res = await axios.get<ForecastData>("/forecast.json", {
    params: {
      q: city,
      days: 5,
    },
  });
  return res.data;
};

export default {
  currentWeather,
  forecastWeather,
};
