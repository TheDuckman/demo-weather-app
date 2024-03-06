import { computed } from "vue";
import { WeatherColors } from "../utils/enums";

export default function useWeatherColors(degrees: number) {
  const weatherColor = computed(() => {
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
  });

  return { weatherColor };
}
