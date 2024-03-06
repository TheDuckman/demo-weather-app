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
      <WeatherIcon :color="color" />
    </div>
    <TemperatureBox :degrees="degrees" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import WeatherIcon from "./WeatherIcon.vue";
import TemperatureBox from "./TemperatureBox.vue";
import useResponsiveness from "../../composable/useResponsiveness";

const props = defineProps({
  hour: {
    type: String,
    required: true,
  },
  degrees: {
    type: Number,
    required: true,
  },
});

const { isMobile } = useResponsiveness();

const hour = computed(() => props.hour);
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

<style scoped>
.widthMobile {
  min-width: 8rem;
}
.widthDesktop {
  width: 20%;
}
</style>
