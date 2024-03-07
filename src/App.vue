<template>
  <div class="container debugBorder">
    <TheGreeting />
    <CityMenu />
    <div class="container debugBorder">
      <div class="row rowContainer">
        <!-- LEFT SIDE -->
        <div :class="`debugBorder col-md-3 col-sm-12 ${isMobile ? 'p-0' : ''}`">
          <!-- CITY WEATHER -->
          <LoadingCard v-if="isLoading" large />
          <CityWeatherCard v-else />
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
              v-for="forecastHour in hourlyForecast"
              :key="forecastHour.hour"
              :hour="forecastHour.hour"
              :weather="forecastHour.text"
              :degrees="forecastHour.tempC"
              :weatherCode="forecastHour.code"
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
            <template v-if="isLoading">
              <LoadingCard v-for="it in [1, 2, 3, 4, 5]" :key="it" />
            </template>
            <template v-else>
              <DailyWeatherCard
                v-for="forecastDay in dailyForecast"
                :key="forecastDay.weekday"
                :day="forecastDay.weekday"
                :weather="forecastDay.text"
                :degrees="forecastDay.tempC"
                :weatherCode="forecastDay.code"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComputedRef, computed, onBeforeMount } from "vue";
import { useStore } from "./store";
import { DailyWeatherObj, HourlyWeatherObj } from "./utils/types";
import useResponsiveness from "./composable/useResponsiveness";
import LoadingCard from "./components/layout/LoadingCard.vue";
import TheGreeting from "./components/TheGreeting.vue";
import CityMenu from "./components/CityMenu.vue";
import DailyWeatherCard from "./components/weather/DailyWeatherCard.vue";
import HourlyWeatherCard from "./components/weather/HourlyWeatherCard.vue";
import CityWeatherCard from "./components/weather/CityWeatherCard.vue";

const store = useStore();
const isLoading = computed(() => store.loading);
const dailyForecast: ComputedRef<DailyWeatherObj[]> = computed(
  () => store.dailyForecast,
);
const hourlyForecast: ComputedRef<HourlyWeatherObj[]> = computed(
  () => store.hourlyForecast,
);

const { isMobile } = useResponsiveness();

onBeforeMount(() => {
  store.fetchWeatherData();
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
