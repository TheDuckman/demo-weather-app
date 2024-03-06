import { WeatherColors } from "../utils/enums";

export default function useWeatherColors() {
  const getWeatherColor = (degrees: number) => {
    switch (true) {
      case degrees < 6:
        return WeatherColors.BLUE;
      case degrees < 15:
        return WeatherColors.GREEN;
      case degrees < 25:
        return WeatherColors.YELLOW;
      default:
        return WeatherColors.RED;
    }
  };

  return { getWeatherColor };
}
