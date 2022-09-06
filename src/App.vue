<template>
  <div id="app">
    <transition appear><AppHeader></AppHeader></transition>
    <AppWrapper v-if="!fetchError"> </AppWrapper>
    <AppError v-if="fetchError"></AppError>
  </div>
</template>

<script setup lang="ts">
import AppWrapper from "@/entities/app/AppWrapper";
import AppHeader from "@/entities/app/AppHeader";
import AppError from "@/entities/app/AppError";
import { onMounted } from "vue";
import { useCountriesStore } from "@/app/store/countries";

let fetchError = false;
let loading = false;

const store = useCountriesStore();

onMounted(() => {
  try {
    loading = true;
    store.GET_COUNTRIES_FROM_API();
  } catch {
    fetchError = true;
  } finally {
    loading = false;
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Nunito Sans", sans-serif;
  background-color: var(--app-background);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
