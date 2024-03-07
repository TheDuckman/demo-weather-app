<template>
  <div
    :class="`cityBtn d-flex justify-content-center align-items-center ${color}`"
    @click="emit('clicked')"
  >
    <slot v-if="slotUsed"></slot>
    <template v-else>
      <div class="me-2">{{ text }}</div>
      <div v-html="icon" class="fs-5"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, useSlots } from "vue";

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
  color: {
    type: String,
    required: false,
    default: "",
  },
});

const slots = useSlots();
const slotUsed = computed(() => slots.default);
const color = computed(() =>
  props.color.length > 0 ? `${props.color}Bg` : "",
);
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
