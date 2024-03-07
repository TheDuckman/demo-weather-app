<template>
  <RoundedCard :class="isMobile ? 'my-3' : 'mx-3'" :color="weatherColor">
    <template #icon>
      <WeatherIcon
        :haloSize="IconHaloSizes.SMALL"
        :iconSize="IconSizes.SMALL"
        :color="weatherColor"
        :weather="weather"
        :weatherCode="weatherCode"
      />
    </template>
    <template #text>
      <span class="fs-5 fw-medium">
        {{ day }}
      </span>
      <span class="fw-medium greyTxt smallTxt">
        {{ weather }}
      </span>
    </template>
    <template #temperature>
      <TemperatureBox :degrees="degrees" />
    </template>
  </RoundedCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { IconHaloSizes, IconSizes } from "../../utils/enums";
import useResponsiveness from "../../composable/useResponsiveness";
import RoundedCard from "../layout/RoundedCard.vue";
import WeatherIcon from "./WeatherIcon.vue";
import TemperatureBox from "./TemperatureBox.vue";
import useWeatherColors from "../../composable/useWeatherColors";

const props = defineProps({
  day: {
    type: String,
    required: true,
  },
  weather: {
    type: String,
    required: true,
  },
  degrees: {
    type: Number,
    required: true,
  },
  weatherCode: {
    type: Number,
    required: true,
  },
});

const { isMobile } = useResponsiveness();
const { getWeatherColor } = useWeatherColors();

const day = computed(() => props.day);
const degrees = computed(() => props.degrees);
const weather = computed(() => props.weather);
const weatherColor = computed(() => getWeatherColor(degrees.value));
</script>
