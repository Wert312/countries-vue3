<template>
  <div class="search">
    <div class="search__bar">
      <div class="search__container">
        <input
          class="search__input"
          type="text"
          v-model="store.searchValue"
          aria-label="Search for a country..."
          placeholder="Search for a country..."
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountriesStore } from "@/app/store/countries";
const store = useCountriesStore();
</script>

<style scoped lang="scss">
.search {
  margin-bottom: 40px;

  &__bar {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 24px;
    margin-bottom: auto;

    @include for-desktop {
      padding-top: 48px;
    }
  }

  &__container {
    border: none;
    border-radius: 5px;
    box-shadow: var(--shadow-search-color);
    width: 100%;
    max-width: 340px;
    height: 50px;
    background-color: var(--color-light);
    display: flex;
    align-items: center;
    padding-left: 30px;

    @include for-desktop {
      max-width: 480px;
    }
  }

  &__input {
    border: none;
    outline: none;
    font-size: 14px;
    font-family: "Nunito Sans", sans-serif;
    background-color: var(--color-light);
    color: var(--app-text);
    width: 100%;

    &::placeholder {
      color: var(--app-text);
    }
  }

  &__error {
    border: 2px solid red;
  }
}
</style>
