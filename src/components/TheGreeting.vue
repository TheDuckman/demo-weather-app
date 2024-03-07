<template>
  <h1 class="greetingHeader debugBorder">
    {{ calculatedGreeting }}
  </h1>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

// greeting
const username = "Human";
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
.greetingHeader {
  margin: 1rem 0rem 2rem 0rem;
  padding: 0 0 0 0.8rem;
}
</style>
