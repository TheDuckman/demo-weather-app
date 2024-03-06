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
            city="Denver"
            weather="Snowing"
            :degrees="25"
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
              v-for="(day, index) in days"
              :key="day"
              :day="day"
              :weather="weather[index]"
              :degrees="degrees[index]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import useResponsiveness from "./composable/useResponsiveness";
import TheGreeting from "./components/TheGreeting.vue";
import CityMenu from "./components/CityMenu.vue";
import DailyWeatherCard from "./components/weather/DailyWeatherCard.vue";
import HourlyWeatherCard from "./components/weather/HourlyWeatherCard.vue";
import CityWeatherCard from "./components/weather/CityWeatherCard.vue";

const hours = reactive(["Now", "2 PM", "3 PM", "4 PM", "5 PM"]);
const days = reactive(["Today", "Tomorrow", "Wednesday", "Thursday", "Friday"]);
const weather = reactive([
  "Frozen",
  "Frozen",
  "Partly Cloudy",
  "Partly Cloudy",
  "Sunny",
]);
// TODO: provide/inject
const { isMobile } = useResponsiveness();
const degrees = reactive([2, 3, 10, 15, 32]);
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
