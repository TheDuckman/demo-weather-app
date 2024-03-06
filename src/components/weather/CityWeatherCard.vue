<template>
  <RoundedCard large :color="color">
    <template #icon>
      <WeatherIcon :size="isMobile ? 'medium' : 'larger'" :color="color" dark />
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
import WeatherIcon from "./WeatherIcon.vue";
import TemperatureBox from "./TemperatureBox.vue";
import RoundedCard from "../layout/RoundedCard.vue";
import useResponsiveness from "../../composable/useResponsiveness";

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
const weather = computed(() => props.weather);
const degrees = computed(() => props.degrees);
const color = computed(() => {
  switch (true) {
    case degrees.value < 6:
      return "blue";
    case degrees.value < 15:
      return "green";
    case degrees.value < 25:
      return "yellow";
    default:
      return "red";
  }
});
</script>
