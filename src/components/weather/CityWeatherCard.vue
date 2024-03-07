<template>
  <RoundedCard large :color="weatherColor">
    <template #icon>
      <WeatherIcon
        :haloSize="isMobile ? IconHaloSizes.LARGE : IconHaloSizes.LARGER"
        :iconSize="isMobile ? IconSizes.SMALL : IconSizes.LARGE"
        :color="weatherColor"
        :weatherCode="curWeather.code || BaseWeatherCode"
        dark
      />
    </template>
    <template #text>
      <span class="fs-3 fw-medium">
        {{ city.name }}
      </span>
      <span class="fw-medium greyTxt smallTxt">
        {{ curWeather.text }}
      </span>
    </template>
    <template #temperature>
      <TemperatureBox :degrees="curWeather.tempC" large />
    </template>
  </RoundedCard>
</template>

<script setup lang="ts">
import { ComputedRef, computed } from "vue";
import { IconHaloSizes, IconSizes } from "../../utils/enums";
import { CityObj, WeatherObj } from "../../utils/types";
import { BaseWeatherCode } from "../../utils/constants";
import { useStore } from "../../store";
import WeatherIcon from "./WeatherIcon.vue";
import TemperatureBox from "./TemperatureBox.vue";
import RoundedCard from "../layout/RoundedCard.vue";
import useResponsiveness from "../../composable/useResponsiveness";
import useWeatherColors from "../../composable/useWeatherColors";

const { isMobile } = useResponsiveness();
const { getWeatherColor } = useWeatherColors();

const store = useStore();
const city: ComputedRef<CityObj> = computed(() => store.selectedCity);
const curWeather: ComputedRef<WeatherObj> = computed(() => store.currWeather);
const weatherColor = computed(() => getWeatherColor(curWeather.value.tempC));
</script>
