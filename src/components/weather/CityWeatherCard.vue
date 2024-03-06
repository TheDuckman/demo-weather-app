<template>
  <RoundedCard large :color="weatherColor">
    <template #icon>
      <WeatherIcon
        :haloSize="isMobile ? IconHaloSizes.LARGE : IconHaloSizes.LARGER"
        :iconSize="isMobile ? IconSizes.SMALL : IconSizes.LARGE"
        :color="weatherColor"
        :weatherCode="weatherObj.code || BaseWeatherCode"
        dark
      />
    </template>
    <template #text>
      <span class="fs-3 fw-medium">
        {{ city }}
      </span>
      <span class="fw-medium greyTxt smallTxt">
        {{ weatherObj.text }}
      </span>
    </template>
    <template #temperature>
      <TemperatureBox :degrees="degrees" large />
    </template>
  </RoundedCard>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { IconHaloSizes, IconSizes } from "../../utils/enums";
import { WeatherObj } from "../../utils/types";
import { BaseWeatherCode } from "../../utils/constants";
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
  weatherObj: {
    type: Object as PropType<WeatherObj>,
    required: true,
  },
  degrees: {
    type: Number,
    required: true,
  },
});

const { isMobile } = useResponsiveness();
const { getWeatherColor } = useWeatherColors();
const city = computed(() => props.city);
const weatherObj = computed(
  () => props.weatherObj || { code: BaseWeatherCode, text: "Sunny" },
);
const degrees = computed(() => props.degrees);
const weatherColor = computed(() => getWeatherColor(degrees.value));
</script>
