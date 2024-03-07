<template>
  <div :class="cardClasses">
    <div
      :class="[
        'd-flex',
        'justify-content-center',
        isMobile ? 'align-items-center width20' : 'align-items-end height30',
      ]"
    >
      <slot name="icon"></slot>
    </div>
    <div
      :class="[
        'd-flex',
        'flex-column',
        isMobile
          ? 'justify-content-center width50'
          : 'text-center justify-content-start height30',
      ]"
    >
      <slot name="text"></slot>
    </div>
    <div
      :class="[
        'text-center',
        'justify-content-end',
        isMobile ? 'd-flex align-items-center width25' : '',
      ]"
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
  let classes = [
    "d-flex",
    "flex-fill",
    "flex-md-column",
    "justify-content-between",
    "p-2",
    `${color.value}Bg`,
  ];
  if (isMobile.value) {
    classes.push("px-3");
    classes.push(large.value ? "largeRoundedBorderCard" : "roundedBorderCard");
  } else {
    classes.push("extraRoundedBorderCard");
    classes.push(large.value ? "largeLayout" : "smallLayout");
  }
  return classes;
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
.height30 {
  height: 30%;
}
.width20 {
  width: 20%;
}
.width25 {
  width: 25%;
}
.width50 {
  width: 50%;
}
</style>
