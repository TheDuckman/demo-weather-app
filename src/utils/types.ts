export interface WeatherObj {
  code: number;
  text: string;
  tempC: number;
}

export interface DailyWeatherObj extends WeatherObj {
  weekday: string;
}

export interface HourlyWeatherObj extends WeatherObj {
  hour: string;
}

export interface CityObj {
  name: string;
  icon: string;
  selected: boolean;
}

// weather api types

export interface CurrentWeatherData {
  current: {
    condition: {
      text: string;
      code: number;
    };
    temp_c: number;
  };
}
export interface ForecastData {
  forecast: {
    forecastday: ForecastDay[];
  };
  location: {
    localtime: string;
  };
}
export interface ForecastDay {
  date: string;
  day: DayData;
  hour: HourData[];
}
export interface DayData {
  avgtemp_c: number;
  condition: {
    text: string;
    code: number;
  };
}
export interface HourData {
  time: string;
  temp_c: number;
  condition: {
    code: number;
    text: string;
  };
}
