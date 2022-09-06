<template>
  <div class="borders">
    <div class="bordersWrapper">
      <span v-if="!borderCountries" class="noBorders">No Border Countries</span>
      <span v-if="borderCountries">Border Countries:</span>
            <router-link
              v-for="country in borderCountries"
              :key="country.name"
              :to="{
                name: 'CountryInfoPage',
                params: { country: country.name.official },
              }"
              class="borderLinks"
            >
              {{ country.name.common }}
            </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {onMounted, PropType, ref} from "vue";
import type { Country } from "@/shared/models/country";

const props = defineProps({
  borderCodes: Array as PropType<string[]>,
});

let borderCountries = ref<Country[]>();

onMounted(() => {
  if (props.borderCodes) {
    let borderCountriesToString = props.borderCodes.join(",");
    return axios
      .get(
        `https://restcountries.com/v3.1/alpha?codes=${borderCountriesToString}`
      )
      .then((response) => (borderCountries.value = response.data));
  }
});

</script>

<style lang="scss">
.bordersWrapper {
  display: flex;
  flex-wrap: wrap;
  padding-top: 16px;
}

.borderLinks {
  margin: 0 5px 10px 0;
  display: table;
  align-self: center;
  padding: 2px 5px;
  background: var(--color-light);
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  color: var(--app-text);
  text-align: center;

  &:first-of-type {
    margin-left: 5px;
  }

  @include for-desktop {
    &:hover {
      box-shadow: var(--shadow-color);
      transition-property: box-shadow;
      transition-duration: 0.3s;
    }

    &:not(:hover) {
      transition-property: box-shadow;
      transition-duration: 0.3s;
    }
  }
}
</style>
