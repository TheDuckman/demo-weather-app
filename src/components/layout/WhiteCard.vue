<template>
  <div
    :class="[
      'd-flex',
      'flex-column',
      'flex-fill',
      'justify-content-around',
      'text-center',
      'p-2',
      'mx-3',
      isMobile ? 'widthMobile' : 'widthDesktop',
    ]"
  >
    <div class="fs-5 fw-bold greyTxt">
      <slot name="text"></slot>
    </div>
    <div class="d-flex justify-content-center">
      <slot name="icon"></slot>
    </div>
    <slot name="temperature"></slot>
  </div>
</template>

<script setup lang="ts">
import useResponsiveness from "../../composable/useResponsiveness";

const { isMobile } = useResponsiveness();
</script>

<style scoped>
.widthMobile {
  min-width: 8rem;
}
.widthDesktop {
  width: 20%;
}
</style>
