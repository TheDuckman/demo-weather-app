import { defineStore } from "pinia";
import { ComputedRef, computed, nextTick, reactive, ref } from "vue";
import {
  CityObj,
  CurrentWeatherData,
  DailyWeatherObj,
  ForecastData,
  ForecastDay,
  HourData,
  HourlyWeatherObj,
  WeatherObj,
} from "./utils/types";
import { BaseWeatherCode } from "./utils/constants";
import requester from "./requester";

export const useStore = defineStore("store", () => {
  // loading
  const loading = ref(false);
  const delayTime = ref(200);

  // city
  const availableCities = ref<CityObj[]>([
    {
      id: 2618724,
      name: "New York",
      icon: "&#x1F3E2;",
      selected: true,
    },
    {
      id: 317748,
      name: "Toronto",
      icon: "&#x26C4",
      selected: false,
    },
    {
      id: 287907,
      name: "Rio de Janeiro",
      icon: "&#x1F3D6",
      selected: false,
    },
    {
      id: 1734598,
      name: "Lagos",
      icon: "&#x1F1F3;&#x1F1EC",
      selected: false,
    },
    {
      id: 555772,
      name: "Prague",
      icon: "&#x1F3F0",
      selected: false,
    },
  ]);
  const selectedCity: ComputedRef<CityObj> = computed(
    () =>
      availableCities.value.find((city: CityObj) => city.selected) as CityObj,
  );
  const setCity = async function (cityName: string) {
    // disable redoing fetch?
    // if (cityName === selectedCity.value.name) return;
    availableCities.value.forEach((city: CityObj) => {
      city.selected = city.name === cityName;
    });
    // if redo is possible, must run here
    // otherwise, use watcher on selectedCity
    fetchWeatherData();
  };
  const addCity = function (id: number, name: string, icon: string) {
    availableCities.value.push(
      reactive({
        icon: icon,
        id,
        name,
        selected: false,
      } as CityObj),
    );
    // select new city
    setCity(name as string);
  };

  // weather
  const currWeather = reactive<WeatherObj>({
    code: BaseWeatherCode,
    text: "",
    tempC: 0,
  });
  const dailyForecast = ref<DailyWeatherObj[]>([]);
  const hourlyForecast = ref<HourlyWeatherObj[]>([]);
  const setCurrentData = async function () {
    try {
      const currData: CurrentWeatherData = await requester.currentWeather(
        selectedCity.value.id,
      );
      currWeather.text = currData.current.condition.text;
      currWeather.code = currData.current.condition.code;
      currWeather.tempC = Math.round(currData.current.temp_c);
    } catch (error) {
      console.error(error);
    }
  };
  const setForecastData = async function () {
    try {
      const foreData: ForecastData = await requester.forecastWeather(
        selectedCity.value.id,
      );
      const [localDate, localHour] = foreData.location.localtime.split(" ");

      // daily forecast data
      dailyForecast.value = [];
      dailyForecast.value.push(
        ...foreData.forecast.forecastday.map((dayData: ForecastDay) => {
          return {
            weekday: getWeekdayFromDbDate(dayData.date),
            tempC: Math.round(dayData.day.avgtemp_c),
            text: dayData.day.condition.text,
            code: dayData.day.condition.code,
          };
        }),
      );

      // hourly forecast data
      const localTodayIndex: number = foreData.forecast.forecastday.findIndex(
        (day) => day.date === localDate,
      );
      hourlyForecast.value = [
        ...getFiveHoursData(localDate, localHour, [
          ...foreData.forecast.forecastday[localTodayIndex].hour,
          ...foreData.forecast.forecastday[localTodayIndex + 1].hour,
        ]),
      ];
    } catch (error) {
      console.error(error);
    }
  };
  const fetchWeatherData = async function () {
    loading.value = true;
    await Promise.all([setCurrentData(), setForecastData()]);
    setTimeout(() => {
      nextTick(() => {
        loading.value = false;
      });
    }, delayTime.value);
  };

  // helper
  const getWeekdayFromDbDate = (date: string) => {
    const weekday = new Date(`${date} 00:00:00`).toLocaleString("en", {
      weekday: "long",
    });
    return weekday;
  };
  const getFiveHoursData = (
    localDate: string,
    localHour: string,
    hours: HourData[],
  ): HourlyWeatherObj[] => {
    const firstHour = localHour.split(":")[0];
    const localNow = `${localDate} ${firstHour.length === 1 ? "0" + firstHour : firstHour}:00`;

    const firstHourIndex = hours.findIndex((hour) => hour.time === localNow);
    const firstFiveHours = hours.slice(firstHourIndex, firstHourIndex + 5);
    return firstFiveHours.map((hour: HourData) => {
      const time = hour.time.split(" ")[1];
      const hourNum = parseInt(time.split(":")[0]);
      const amPm = hourNum >= 12 ? "PM" : "AM";
      return {
        code: hour.condition.code,
        text: hour.condition.text,
        tempC: Math.round(hour.temp_c),
        hour:
          hourNum === parseInt(firstHour) ? "Now" : `${hourNum % 12} ${amPm}`,
      };
    });
  };

  return {
    loading,
    // city
    availableCities,
    selectedCity,
    setCity,
    addCity,
    // weather
    fetchWeatherData,
    currWeather,
    dailyForecast,
    hourlyForecast,
  };
});
