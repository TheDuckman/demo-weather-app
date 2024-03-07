import axios from "axios";
import {
  CitySearchData,
  CurrentWeatherData,
  ForecastData,
} from "./utils/types";

const apiKey: string = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = "https://api.weatherapi.com/v1";
axios.defaults.params = {
  key: apiKey,
};

const currentWeather = async (cidyId: number): Promise<CurrentWeatherData> => {
  const res = await axios.get<CurrentWeatherData>("/current.json", {
    params: {
      q: `id:${cidyId}`,
    },
  });
  return res.data;
};

const forecastWeather = async (cidyId: number): Promise<ForecastData> => {
  const res = await axios.get<ForecastData>("/forecast.json", {
    params: {
      q: `id:${cidyId}`,
      days: 5,
    },
  });
  return res.data;
};

const search = async (city: string): Promise<CitySearchData[]> => {
  const res = await axios.get<CitySearchData[]>("/search.json", {
    params: {
      q: city,
    },
  });

  return res.data;
};

export default {
  currentWeather,
  forecastWeather,
  search,
};
