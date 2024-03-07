<template>
  <RoundedCard
    :large="large"
    color="lightgrey"
    :class="`placeholder ${spacingClass}`"
  >
    <template #icon>
      <IconCircle :haloSize="haloSize" color="grey">
        <LoadingSpinner :large="large && !isMobile" />
      </IconCircle>
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
        v-if="large && isMobile"
        class="placeholder w-50 me-4"
        :style="`font-size: 30pt`"
      ></span>
      <span
        v-else
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
import IconCircle from "./IconCircle.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
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

const spacingClass = computed(() => {
  if (large.value) return "py-3";
  return isMobile.value ? "my-3" : "mx-3";
});
const haloSize = computed(() => {
  if (!large.value) return IconHaloSizes.SMALL;
  return isMobile.value ? IconHaloSizes.LARGE : IconHaloSizes.LARGER;
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
