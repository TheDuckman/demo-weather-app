<template>
  <IconCircle :haloSize="haloSize" :dark="dark">
    <img :src="weatherInfo.icon" :width="iconWidth" />
  </IconCircle>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { WeatherCodes } from "../../utils/constants";
import { IconHaloSizes, IconSizes } from "../../utils/enums";
import IconCircle from "../layout/IconCircle.vue";

const props = defineProps({
  haloSize: {
    type: String,
    required: true,
    default: IconHaloSizes.LARGE,
  },
  iconSize: {
    type: String,
    required: true,
    default: IconSizes.LARGE,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  weatherCode: {
    type: Number,
    required: true,
    default: 1000,
  },
});

const iconWidth = computed(() => {
  switch (props.iconSize) {
    case IconSizes.LARGE:
      return 60;
    default:
      return 45;
  }
});
const haloSize = computed(() => props.haloSize);
const dark = computed(() => props.dark);
const weatherCode = computed(() => props.weatherCode);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const weatherInfo = computed(() => (WeatherCodes as any)[weatherCode.value]);
</script>
