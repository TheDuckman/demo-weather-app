<template>
  <IconCircle color="yellow" :size="iconSize" :dark="dark">
    <WeatherSunny />
  </IconCircle>
</template>

<script setup lang="ts">
import IconCircle from "../layout/IconCircle.vue";
import WeatherSunny from "vue-material-design-icons/WeatherSunny.vue";
// import WeatherSnowy from "vue-material-design-icons/WeatherSnowy.vue";
// import WeatherCloudy from "vue-material-design-icons/WeatherCloudy.vue";
// import WeatherPartlyCloudy from "vue-material-design-icons/WeatherPartlyCloudy.vue";
// import WeatherPouring from "vue-material-design-icons/WeatherPouring.vue";
// import WeatherPartlyRainy from "vue-material-design-icons/WeatherPartlyRainy.vue";
// import WeatherWindyVariant from "vue-material-design-icons/WeatherWindyVariant.vue";
// import WeatherSnowyHeavy from "vue-material-design-icons/WeatherSnowyHeavy.vue";
// import WeatherSnowyRainy from "vue-material-design-icons/WeatherSnowyRainy.vue";
// import WeatherLightning from "vue-material-design-icons/WeatherLightning.vue";
// import WeatherLightningRainy from "vue-material-design-icons/WeatherLightningRainy.vue";
// import WeatherTornado from "vue-material-design-icons/WeatherTornado.vue";
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    required: true,
    default: "large",
  },
  dark: {
    type: Boolean,
    default: false,
  },
});
const iconSize = computed(() => props.size);
const dark = computed(() => props.dark);
</script>
