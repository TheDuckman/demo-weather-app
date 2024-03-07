<template>
  <div
    :class="`spinner-border text-secondary ${spinnerSizeClass}`"
    role="status"
  ></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  large: {
    type: Boolean,
    defualt: false,
  },
});
const large = computed(() => props.large);
const spinnerSizeClass = computed(() =>
  large.value ? "" : "spinner-border-sm",
);
</script>

<style scoped></style>
