<template>
  <h1 class="mainHeader">
    {{ calculatedGreeting }}
  </h1>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

// greeting
const username = "Chang";
const now = ref(new Date());
const calculatedGreeting = computed<string>((): string => {
  const hours = now.value.getHours();
  switch (true) {
    case hours < 12:
      return `Good morning, ${username} 🌅`;
    case hours <= 18:
      return `Good afternoon, ${username} 🌞`;
    default:
      return `Good night, ${username} 🌑`;
  }
});
</script>

<style scoped>
.mainHeader {
  margin: 1rem 0rem 3rem 0.7rem;
}
</style>
