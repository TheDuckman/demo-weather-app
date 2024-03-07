<template>
  <div class="container">
    <TheGreeting />
    <CityMenu />
    <div class="container">
      <div class="row rowContainer">
        <!-- LEFT SIDE -->
        <div :class="`col-md-3 col-sm-12 ${isMobile ? 'p-0' : ''}`">
          <!-- CITY WEATHER -->
          <LoadingRoundedCard v-if="isLoading" large />
          <CityWeatherCard v-else />
        </div>
        <!-- RIGHT SIDE -->
        <div class="p-0 col-md-9 col-sm-12">
          <!-- HOURLY WEATHER -->
          <div
            :class="[
              'd-flex',
              'justify-content-md-between',
              isMobile ? 'hourlyContainerMobile' : 'scrollX halfHeight pt-5',
            ]"
          >
            <template v-if="isLoading">
              <LoadingWhiteCard v-for="it in loadingArr" :key="it" />
            </template>
            <template v-else>
              <HourlyWeatherCard
                v-for="forecastHour in hourlyForecast"
                :key="forecastHour.hour"
                :hour="forecastHour.hour"
                :weather="forecastHour.text"
                :degrees="forecastHour.tempC"
                :weatherCode="forecastHour.code"
              />
            </template>
          </div>
          <!-- DAILY WEATHER -->
          <div
            :class="[
              'd-md-flex',
              'justify-content-md-between',
              isMobile ? 'mb-3' : 'halfHeight pt-5',
            ]"
          >
            <template v-if="isLoading">
              <LoadingRoundedCard v-for="it in loadingArr" :key="it" />
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
import { ComputedRef, computed, onBeforeMount, ref } from "vue";
import { useStore } from "./store";
import { DailyWeatherObj, HourlyWeatherObj } from "./utils/types";
import useResponsiveness from "./composable/useResponsiveness";
import LoadingRoundedCard from "./components/layout/LoadingRoundedCard.vue";
import LoadingWhiteCard from "./components/layout/LoadingWhiteCard.vue";
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
const loadingArr = ref([1, 2, 3, 4, 5]);

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
