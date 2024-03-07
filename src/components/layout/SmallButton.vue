<template>
  <div
    :class="`cityBtn d-flex justify-content-center align-items-center ${selected ? 'blueBg' : ''}`"
    @click="emit('clicked')"
  >
    <div class="me-2">{{ text }}</div>
    <div v-html="icon" class="fs-5"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits } from "vue";

const emit = defineEmits(["clicked"]);
const props = defineProps({
  icon: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  selected: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const selected = computed(() => props.selected);
const text = computed(() => props.text);
</script>

<style scoped>
.cityBtn {
  border-radius: 0.65rem;
  padding: 0.25rem 1.5rem;
  margin-right: 8px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
}
</style>
