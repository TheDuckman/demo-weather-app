<template>
  <div
    :class="[
      'debugBorder',
      'd-flex',
      'flex-column',
      'flex-fill',
      'justify-content-around',
      'text-center',
      'p-2',
      'mx-3',
      isMobile ? 'widthMobile' : 'widthDesktop',
    ]"
  >
    <div class="fs-5 fw-bold greyTxt">
      {{ hour }}
    </div>
    <div class="d-flex justify-content-center">
      <WeatherIcon
        :color="weatherColor"
        :iconSize="IconSizes.SMALL"
        :haloSize="IconHaloSizes.LARGER"
        :weather="weather"
      />
    </div>
    <TemperatureBox :degrees="degrees" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useResponsiveness from "../../composable/useResponsiveness";
import useWeatherColors from "../../composable/useWeatherColors";
import WeatherIcon from "./WeatherIcon.vue";
import TemperatureBox from "./TemperatureBox.vue";
import { IconHaloSizes, IconSizes } from "../../utils/enums";

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
});

const { isMobile } = useResponsiveness();
const { getWeatherColor } = useWeatherColors();

const hour = computed(() => props.hour);
const degrees = computed(() => props.degrees);
const weather = computed(() => props.weather);
const weatherColor = computed(() => getWeatherColor(degrees.value));
</script>

<style scoped>
.widthMobile {
  min-width: 8rem;
}
.widthDesktop {
  width: 20%;
}
</style>
