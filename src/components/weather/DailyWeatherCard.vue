<template>
  <RoundedCard :class="isMobile ? 'my-3' : 'mx-3'" :color="color">
    <template #icon>
      <WeatherIcon size="small" :color="color" />
    </template>
    <template #text>
      <span class="fs-5 fw-medium">
        {{ day }}
      </span>
      <span class="fw-medium" style="font-size: 10pt; color: #696d76">
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
import WeatherIcon from "./WeatherIcon.vue";
import TemperatureBox from "./TemperatureBox.vue";
import RoundedCard from "../layout/RoundedCard.vue";
import useResponsiveness from "../../composable/useResponsiveness";

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
});

const { isMobile } = useResponsiveness();

const day = computed(() => props.day);
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
