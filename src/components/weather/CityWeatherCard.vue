<template>
  <RoundedCard large>
    <template #icon>
      <WeatherIcon size="large" :color="color" class="mt-1" />
    </template>
    <template #text>
      <TextContainer>
        <template #title>
          {{ city }}
        </template>
        <template #subtitle>
          {{ weather }}
        </template>
      </TextContainer>
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
import TextContainer from "../layout/TextContainer.vue";

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

<style scoped></style>
