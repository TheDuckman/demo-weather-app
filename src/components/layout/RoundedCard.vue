<template>
  <div :class="cardClasses">
    <div class="d-flex justify-content-center">
      <slot name="icon"></slot>
    </div>
    <div class="d-flex flex-column">
      <slot name="text"></slot>
    </div>
    <div :class="isMobile ? 'd-flex align-items-center' : ''">
      <slot name="temperature"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useResponsiveness from "../../composable/useResponsiveness";

const props = defineProps({
  color: {
    type: String,
    required: true,
    default: "blue",
  },
  large: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const color = computed(() => props.color);
const large = computed(() => props.large);
const { isMobile } = useResponsiveness();
const cardClasses = computed(() => {
  let baseClasses = large.value
    ? "debugBorder roundedCard d-flex flex-fill flex-sm-column justify-content-between text-center p-2 largeLayout"
    : "debugBorder d-flex flex-fill flex-sm-column justify-content-between text-center p-2";
  if (isMobile) {
    baseClasses =
      baseClasses +
      (isMobile.value
        ? " roundedBorderCard"
        : " extraRoundedBorderCard smallLayout");
  }
  return `${baseClasses} ${color.value}Card`;
});
</script>

<style scoped>
.largeLayout {
  height: 100%;
  min-width: 100%;
}
.smallLayout {
  width: 20%;
}
</style>
