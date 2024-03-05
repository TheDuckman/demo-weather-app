<template>
  <div :class="`circleDiv ${colorClass} ${sizeClass}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    required: true,
    default: "blue",
  },
  size: {
    type: String,
    required: true,
    default: "large",
  },
});

const colorClass = computed(() => `${props.color}Circle`);
const sizeClass = computed(() => `${props.size}Circle`);
</script>

<style scoped>
.circleDiv {
  border-radius: 3rem;
}
.circleDiv.smallCircle {
  padding: 7px;
  width: 40px;
  height: 40px;
}
.circleDiv.largeCircle {
  padding: 22px;
  width: 70px;
  height: 70px;
}
.circleDiv.blueCircle {
  background: #c3e0fb;
}
.circleDiv.greenCircle {
  background: #cdf0eb;
}
.circleDiv.yellowCircle {
  background: #fff4da;
}
.circleDiv.redCircle {
  background: #fdd4d7;
}
</style>
