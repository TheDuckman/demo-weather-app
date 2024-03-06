<template>
  <div class="container debugBorder">
    <TheGreeting />
    <CityMenu />
    <div class="container debugBorder">
      <div class="row rowContainer">
        <!-- LEFT SIDE -->
        <div :class="`debugBorder col-md-3 col-sm-12 ${isMobile ? 'p-0' : ''}`">
          <!-- CITY WEATHER -->
          <CityWeatherCard
            :city="currCity"
            :weatherObj="currWeatherObj"
            :degrees="currWeatherObj.tempC"
          ></CityWeatherCard>
        </div>
        <!-- RIGHT SIDE -->
        <div class="debugBorder p-0 col-md-9 col-sm-12">
          <!-- HOURLY WEATHER -->
          <div
            :class="[
              'debugBorder',
              'scrollX',
              'd-flex',
              'justify-content-md-between',
              isMobile ? 'hourlyContainerMobile' : 'halfHeight pt-5',
            ]"
          >
            <HourlyWeatherCard
              v-for="(hour, index) in hours"
              :key="hour"
              :hour="hour"
              :weather="weather[index]"
              :degrees="degrees[index]"
            />
          </div>
          <!-- DAILY WEATHER -->
          <div
            :class="[
              'halfHeight',
              'debugBorder',
              'd-md-flex',
              'justify-content-md-between',
              isMobile ? '' : 'pt-5',
            ]"
          >
            <DailyWeatherCard
              v-for="forecastDay in forecastArr"
              :key="forecastDay.weekday"
              :day="forecastDay.weekday"
              :weather="forecastDay.text"
              :degrees="forecastDay.tempC"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import requester from "./requester";
import useResponsiveness from "./composable/useResponsiveness";
import TheGreeting from "./components/TheGreeting.vue";
import CityMenu from "./components/CityMenu.vue";
import DailyWeatherCard from "./components/weather/DailyWeatherCard.vue";
import HourlyWeatherCard from "./components/weather/HourlyWeatherCard.vue";
import CityWeatherCard from "./components/weather/CityWeatherCard.vue";
import { WeatherObj } from "./utils/types";
import { BaseWeatherCode } from "./utils/constants";
import useWeekDays from "./composable/useWeekdays";

const hours = reactive(["Now", "2 PM", "3 PM", "4 PM", "5 PM"]);
const degrees = reactive([2, 3, 10, 15, 32]);
const weather = reactive([
  "Frozen",
  "Frozen",
  "Partly Cloudy",
  "Partly Cloudy",
  "Sunny",
]);
const { isMobile } = useResponsiveness();
const { getWeekdayFromDbDate } = useWeekDays();
const currCity = ref("Franca");
const currWeatherObj = reactive<WeatherObj>({
  code: BaseWeatherCode,
  text: "",
  tempC: 0,
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const forecastArr = reactive<any[]>([]);

onMounted(async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currWeatherData: any = await requester.currentWeather(currCity.value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const forecastWeatherData: any = await requester.forecastWeather(
    currCity.value,
  );
  console.log({ currW: currWeatherData.current, foreW: forecastWeatherData });
  // current
  currWeatherObj.text = currWeatherData.current.condition.text;
  currWeatherObj.code = currWeatherData.current.condition.code;
  currWeatherObj.tempC = Math.round(currWeatherData.current.temp_c);

  // forecast
  forecastArr.push(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...forecastWeatherData.forecast.forecastday.map((dayData: any) => {
      return {
        weekday: getWeekdayFromDbDate(dayData.date), // change
        tempC: Math.round(dayData.day.avgtemp_c),
        text: dayData.day.condition.text,
        code: dayData.day.condition.code,
      };
    }),
  );
});
</script>

<style scoped>
.rowContainer {
  min-height: 65vh;
}
.halfHeight {
  height: 50%;
}
.hourlyContainerMobile {
  height: 40%;
}
</style>
