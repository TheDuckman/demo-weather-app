<template>
  <WhiteCard class="placeholder" style="background-color: white">
    <template #text>
      <span class="placeholder placeholder-sm w-50 greyTxt"></span>
    </template>
    <template #icon>
      <IconCircle haloSize="larger" color="lightgrey">
        <LoadingSpinner large />
      </IconCircle>
    </template>
    <template #temperature>
      <div>
        <span class="placeholder w-25 greyTxt">asd</span>
      </div>
    </template>
  </WhiteCard>
</template>

<script setup lang="ts">
import IconCircle from "./IconCircle.vue";
import WhiteCard from "./WhiteCard.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
</script>
