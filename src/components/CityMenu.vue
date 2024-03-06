<template>
  <div :class="['d-flex', 'scrollX', 'py-3', 'px-3', 'debugBorder', 'mb-2']">
    <SmallButton
      v-for="city in cities"
      :key="city.name"
      :icon="city.icon"
      :selected="city.selected"
      @clicked="citySelected(city.name)"
    >
      {{ city.name }}
    </SmallButton>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import SmallButton from "./layout/SmallButton.vue";

const cities = reactive([
  {
    name: "Sao Paulo",
    icon: "ImageFilterHdr",
    selected: true,
  },
  {
    name: "Niteroi",
    icon: "city",
    selected: false,
  },
  {
    name: "Franca",
    icon: "city",
    selected: false,
  },
  {
    name: "Edmonton",
    icon: "city",
    selected: false,
  },
]);
const citySelected = (cityName: string) => {
  const cityIndex = cities.findIndex((c) => c.name === cityName);
  cities.forEach((c) => {
    c.selected = false;
  });
  if (cityIndex >= 0) {
    cities[cityIndex].selected = true;
  }
};
</script>
