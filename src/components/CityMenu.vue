<template>
  <div class="d-flex menuBar py-3 px-3 debugBorder mb-2">
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
    name: "Denver",
    icon: "ImageFilterHdr",
    selected: true,
  },
  {
    name: "São Paulo",
    icon: "city",
    selected: false,
  },
  {
    name: "New York",
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

<style scoped>
.menuBar {
  overflow-x: scroll;
}
</style>
