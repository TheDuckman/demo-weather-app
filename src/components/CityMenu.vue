<template>
  <div :class="['d-flex', 'py-3', 'mb-2', isMobile ? '' : 'scrollX px-3']">
    <SmallButton
      v-for="city in cities"
      :key="city.name"
      :icon="city.icon"
      :text="city.name"
      :color="city.selected ? WeatherColors.BLUE : ''"
      @clicked="setCity(city.name)"
    />
    <AddCityButton />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store";
import { WeatherColors } from "../utils/enums";
import SmallButton from "./layout/SmallButton.vue";
import AddCityButton from "./AddCityButton.vue";
import useResponsiveness from "../composable/useResponsiveness";

const store = useStore();
const { isMobile } = useResponsiveness();
const cities = computed(() => store.availableCities);
const setCity = computed(() => store.setCity);
</script>
