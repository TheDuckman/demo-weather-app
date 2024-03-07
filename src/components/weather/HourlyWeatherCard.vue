<template>
  <WhiteCard>
    <template #text>
      {{ hour }}
    </template>
    <template #icon>
      <WeatherIcon
        :color="weatherColor"
        :iconSize="IconSizes.SMALL"
        :haloSize="IconHaloSizes.LARGER"
        :weather="weather"
        :weatherCode="weatherCode"
      />
    </template>
    <template #temperature>
      <TemperatureBox :degrees="degrees" />
    </template>
  </WhiteCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { IconHaloSizes, IconSizes } from "../../utils/enums";
import useWeatherColors from "../../composable/useWeatherColors";
import WhiteCard from "../layout/WhiteCard.vue";
import WeatherIcon from "./WeatherIcon.vue";
import TemperatureBox from "./TemperatureBox.vue";

const props = defineProps({
  hour: {
    type: String,
    required: true,
  },
  degrees: {
    type: Number,
    required: true,
  },
  weather: {
    type: String,
    required: true,
  },
  weatherCode: {
    type: Number,
    required: true,
  },
});
const { getWeatherColor } = useWeatherColors();
const hour = computed(() => props.hour);
const degrees = computed(() => props.degrees);
const weather = computed(() => props.weather);
const weatherColor = computed(() => getWeatherColor(degrees.value));
</script>
