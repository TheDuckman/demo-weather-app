<template>
  <div :class="cardClasses">
    <div class="debugBorder2 d-flex justify-content-center">
      <slot name="icon"></slot>
    </div>
    <div
      :class="`debugBorder2 ${isMobile ? '' : 'text-center'} d-flex flex-column justify-content-center`"
      :style="`${isMobile ? 'width: 60%' : ''}`"
    >
      <slot name="text"></slot>
    </div>
    <div
      :class="`debugBorder2 text-center ${isMobile ? 'd-flex align-items-center' : ''}`"
    >
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
  let baseClasses =
    "debugBorder d-flex flex-fill flex-md-column justify-content-between p-2";
  if (isMobile.value && !large.value) {
    // small mobile
    baseClasses = `${baseClasses} roundedBorderCard px-3`;
  } else if (isMobile.value && large.value) {
    // large mobile
    baseClasses = `${baseClasses} largeRoundedBorderCard largeLayout px-3`;
  } else if (!isMobile.value && !large.value) {
    // small desktop
    baseClasses = `${baseClasses} extraRoundedBorderCard smallLayout`;
  } else {
    // large desktop
    baseClasses = `${baseClasses} extraRoundedBorderCard largeLayout`;
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
.roundedBorderCard {
  border-radius: 0.6rem;
}
.largeRoundedBorderCard {
  border-radius: 1.4rem;
}
.extraRoundedBorderCard {
  border-radius: 2rem;
}
.blueCard {
  background: #c3e0fb;
}

.greenCard {
  background: #cdf0eb;
}

.yellowCard {
  background: #fff4da;
}

.redCard {
  background: #fdd4d7;
}
</style>
