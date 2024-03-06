<template>
  <RoundedCard large :color="weatherColor">
    <template #icon>
      <WeatherIcon
        :haloSize="isMobile ? IconHaloSizes.LARGE : IconHaloSizes.LARGER"
        :iconSize="isMobile ? IconSizes.SMALL : IconSizes.LARGE"
        :color="weatherColor"
        :weather="weather"
        dark
      />
    </template>
    <template #text>
      <span class="fs-3 fw-medium">
        {{ city }}
      </span>
      <span class="fw-medium greyTxt smallTxt">
        {{ weather }}
      </span>
    </template>
    <template #temperature>
      <TemperatureBox :degrees="degrees" large />
    </template>
  </RoundedCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { IconHaloSizes, IconSizes } from "../../utils/enums";
import WeatherIcon from "./WeatherIcon.vue";
import TemperatureBox from "./TemperatureBox.vue";
import RoundedCard from "../layout/RoundedCard.vue";
import useResponsiveness from "../../composable/useResponsiveness";
import useWeatherColors from "../../composable/useWeatherColors";

const props = defineProps({
  city: {
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
});

const { isMobile } = useResponsiveness();
const city = computed(() => props.city);
// TODO change
const weather = computed(() => "Cloudy" || props.weather);
const degrees = computed(() => props.degrees);

const { weatherColor } = useWeatherColors(degrees.value);
</script>
