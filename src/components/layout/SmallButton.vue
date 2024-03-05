<template>
  <div :class="{ cityBtn: true, btnBlue: selected }" @click="emit('clicked')">
    <slot></slot>
    (IC)
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
  selected: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const selected = computed(() => props.selected);
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
.btnBlue {
  background-color: #c3e0fb;
}
</style>
