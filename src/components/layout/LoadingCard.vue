<template>
  <RoundedCard
    :large="large"
    color="lightgrey"
    :class="`placeholder ${spacingClass}`"
  >
    <template #icon>
      <div
        :class="[
          'circleDiv',
          'd-flex',
          'justify-content-center',
          'align-items-center',
          sizeClass,
        ]"
        style="background: #afb1b5"
      >
        <div
          :class="`spinner-border text-secondary ${spinnerClass}`"
          role="status"
        ></div>
      </div>
    </template>
    <template #text>
      <div>
        <span class="placeholder w-50" style="font-size: 20pt"></span>
      </div>
      <div>
        <span class="placeholder w-75" style="font-size: 6pt"></span>
      </div>
    </template>
    <template #temperature>
      <span
        class="placeholder w-25"
        :style="`font-size: ${tempFontSize}`"
      ></span>
    </template>
  </RoundedCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { IconHaloSizes } from "../../utils/enums";
import useResponsiveness from "../../composable/useResponsiveness";
import RoundedCard from "./RoundedCard.vue";
const props = defineProps({
  large: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const large = computed(() => props.large);
const tempFontSize = computed(() =>
  isMobile.value ? "25pt" : large.value ? "70pt" : "30pt",
);
const { isMobile } = useResponsiveness();
const spinnerClass = computed(() =>
  isMobile.value || !large.value ? "spinner-border-sm" : "",
);
const spacingClass = computed(() => {
  if (large.value) return "";
  return isMobile.value ? "my-3" : "mx-3";
});
const sizeClass = computed(() => {
  if (!large.value) return `${IconHaloSizes.SMALL}Circle`;
  return `${isMobile.value ? IconHaloSizes.LARGE : IconHaloSizes.LARGER}Circle`;
});
</script>

<style scoped>
.circleDiv {
  border-radius: 3rem;
}
.smallCircle {
  padding: 7px;
  width: 40px;
  height: 40px;
}
.mediumCircle {
  padding: 22px;
  width: 55px;
  height: 55px;
}
.largeCircle {
  padding: 22px;
  width: 70px;
  height: 70px;
}
.largerCircle {
  padding: 22px;
  width: 85px;
  height: 85px;
}
</style>
