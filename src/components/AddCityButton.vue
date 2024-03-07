<template>
  <SmallButton color="green" icon="➕" text="Add city" @clicked="openModal" />
  <AddCityModal
    v-if="showModal"
    :showModal="showModal"
    @close="showModal = false"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import SmallButton from "./layout/SmallButton.vue";
import AddCityModal from "./AddCityModal.vue";

const showModal = ref(false);
const openModal = function () {
  showModal.value = true;
};
</script>
