<template>
  <RoundedCard :class="isMobile ? 'my-3' : 'mx-3'">
    <template #icon>
      <WeatherIcon size="small" :color="color" class="mt-1" />
    </template>
    <template #text>
      <TextContainer>
        <template #title>
          {{ day }}
        </template>
        <template #subtitle>
          {{ weather }}
        </template>
      </TextContainer>
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
import TextContainer from "../layout/TextContainer.vue";
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
const cardClasses = computed(() => {
  let baseClasses =
    "d-flex flex-fill flex-sm-column justify-content-between text-center p-2 my-2 mx-3";
  baseClasses =
    baseClasses +
    (isMobile.value ? " roundedBorderCard" : " extraRoundedBorderCard");
  return `${baseClasses} ${color.value}Card`;
});
</script>

<style scoped>
.roundedBorderCard {
  border-radius: 0.4rem;
}
.extraRoundedBorderCard {
  border-radius: 2rem;
}
</style>
