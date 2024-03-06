import axios from "axios";

const apiKey: string = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = "http://api.weatherapi.com/v1";
axios.defaults.params = {
  key: apiKey,
};

const currentWeather = async (city: string): Promise<JSON> => {
  const res = await axios.get<JSON>("/current.json", {
    params: {
      q: city,
    },
  });
  return res.data;
};

export default {
  currentWeather,
};
