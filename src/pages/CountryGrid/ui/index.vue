<template>
  <div class="page-wrapper">
    <template v-if="!store.countries">
      <div class="loader__wrapper">
        <div class="loader"></div>
      </div>
    </template>
    <template v-if="store.countries">
      <SearchBar></SearchBar>
      <div class="grid-wrapper">
        <CountryCard
          v-for="country of store.GET_FILTERED_COUNTRIES"
          :country="country"
          :key="country.name"
        >
        </CountryCard>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "@/entities/search/SearchBar";
import CountryCard from "@/entities/country/CountryCard";
import { useCountriesStore } from "@/app/store/countries";

const store = useCountriesStore();
</script>

<style scoped lang="scss">
.page-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.grid-wrapper {
  display: grid;
  padding-top: 32px;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-column-gap: 10px;
  grid-row-gap: 40px;
  width: 100%;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
