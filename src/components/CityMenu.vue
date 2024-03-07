<template>
  <div :class="['d-flex', 'scrollX', 'py-3', 'px-3', 'debugBorder', 'mb-2']">
    <SmallButton
      v-for="city in cities"
      :key="city.name"
      :icon="city.icon"
      :selected="city.selected"
      @clicked="setCity(city.name)"
    >
      {{ city.name }}
    </SmallButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store";
import SmallButton from "./layout/SmallButton.vue";

const store = useStore();
const cities = computed(() => store.availableCities);
const setCity = computed(() => store.setCity);
</script>
