<template>
  <div
    :class="[
      'circleDiv',
      'd-flex',
      'justify-content-center',
      'align-items-center',
      colorClass,
      sizeClass,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { WeatherColors, IconHaloSizes } from "../../utils/enums";

const props = defineProps({
  color: {
    type: String,
    required: true,
    default: WeatherColors.BLUE,
  },
  haloSize: {
    type: String,
    required: true,
    default: IconHaloSizes.LARGE,
  },
  dark: {
    type: Boolean,
    default: false,
  },
});

const dark = computed(() => props.dark);
const colorClass = computed(
  () => `${dark.value ? "dark" : ""}${props.color}Bg`,
);
const sizeClass = computed(() => `${props.haloSize}Circle`);
</script>

<style scoped>
.circleDiv {
  border-radius: 3rem;
}
.smallCircle {
  padding: 7px;
  width: 40px;
  height: 40px;
}
.mediumCircle {
  padding: 22px;
  width: 55px;
  height: 55px;
}
.largeCircle {
  padding: 22px;
  width: 70px;
  height: 70px;
}
.largerCircle {
  padding: 22px;
  width: 85px;
  height: 85px;
}
</style>
