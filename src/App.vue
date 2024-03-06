<template>
  <div class="container debugBorder" :style="isMobile ? '' : 'max-width: 75%'">
    <TheGreeting />
    <CityMenu />
    <div class="container debugBorder">
      <div class="row pb-5" style="min-width: 100hw; min-height: 70vh">
        <!-- LEFT SIDE -->
        <div
          class="debugBorder col-md-3 col-sm-12"
          :style="isMobile ? 'padding: 0px' : ''"
        >
          <!-- CITY WEATHER -->
          <!-- <div
            class="debugBorder roundedCard d-flex flex-fill flex-sm-column justify-content-between text-center p-2"
            style="height: 100%"
          ></div> -->
          <CityWeatherCard
            city="Denver"
            weather="Snowing"
            :degrees="2"
          ></CityWeatherCard>
        </div>
        <!-- RIGHT SIDE -->
        <div class="debugBorder col-md-9 col-sm-12" style="padding: 0px">
          <!-- HOURLY WEATHER -->
          <!-- debugBorder -->
          <!-- <div
            class="debugBorder d-flex"
            style="min-height: 50%; max-height: 100%; overflow-x: scroll"
          > -->
          <div
            :class="`debugBorder d-flex justify-content-md-between ${isMobile ? '' : 'pt-5'}`"
            :style="`height: ${isMobile ? '40%' : '50%'}; overflow-x: scroll`"
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
          <!-- debugBorder -->
          <div
            :class="`debugBorder d-md-flex justify-content-md-between ${isMobile ? '' : 'pt-5'}`"
            style="height: 50%"
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
// const days = reactive(["Today", "Tomorrow", "Wednesday"]);
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
