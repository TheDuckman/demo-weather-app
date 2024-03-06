<template>
  <IconCircle :haloSize="haloSize" :dark="dark">
    <img :src="iconImgPath" :width="iconWidth" />
  </IconCircle>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { WeatherIconsMap } from "../../utils/constants";
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
  weather: {
    type: String,
    required: true,
    default: "Sunny",
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
const weather = computed(() => props.weather);
const iconImgPath = computed(
  () => WeatherIconsMap[weather.value as keyof typeof WeatherIconsMap],
);
</script>
