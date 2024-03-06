<template>
  <div v-if="large">
    <div class="d-flex justify-content-center">
      <div :class="isMobile ? 'mobileLargeDegrees' : 'desktopLargeDegrees'">
        {{ degrees }}
      </div>
      <div :class="isMobile ? 'mobileLargeCelsius' : 'desktopLargeCelsius'">
        °C
      </div>
    </div>
  </div>
  <div v-else class="fs-5">{{ degrees }}°C</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useResponsiveness from "../../composable/useResponsiveness";

const props = defineProps({
  degrees: {
    type: Number,
    required: true,
  },
  large: {
    type: Boolean,
    default: false,
  },
});

const { isMobile } = useResponsiveness();
const degrees = computed(() => props.degrees);
const large = computed(() => props.large);
</script>

<style scoped>
.desktopLargeDegrees {
  font-size: 75pt;
}
.desktopLargeCelsius {
  font-size: 22pt;
  padding-top: 1.5rem;
}
.mobileLargeDegrees {
  font-size: 38pt;
}
.mobileLargeCelsius {
  font-size: 15pt;
  padding-top: 0.7rem;
}
</style>
