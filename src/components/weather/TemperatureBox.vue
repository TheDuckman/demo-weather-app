<template>
  <div class="fs-4">
    {{ `${degrees} °C` }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  degrees: {
    type: Number,
    required: true,
  },
});
const degrees = computed(() => props.degrees);
</script>
