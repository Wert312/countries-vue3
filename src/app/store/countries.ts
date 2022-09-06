import { defineStore } from "pinia";
import axios from "axios";
import type { Country } from "@/shared/models/country";

interface CountryModel {
  countries: Country[];
  hasCountries?: boolean;
  searchValue?: string;
}

export const useCountriesStore = defineStore({
  id: "countriesStore",
  state: (): CountryModel => ({
    countries: [],
    hasCountries: false,
    searchValue: "",
  }),
  getters: {
    GET_COUNTRIES: (state) => {
      return state.countries;
    },

    GET_COUNTRIES_LENGTH: (state) => {
      return state.countries.length;
    },

    GET_HAS_COUNTRIES: (state) => {
      return state.hasCountries;
    },
    GET_FILTERED_COUNTRIES: (state) => {
      return state.countries.filter((country) => {
        if (state.searchValue !== "" && state.searchValue) {
          return country.name.common
            .toLowerCase()
            .match(state.searchValue.toLowerCase());
        } else {
          return state.countries;
        }
      });
    },

    // search
    GET_SEARCH_VALUE: (state) => {
      return state.searchValue;
    },
  },
  actions: {
    GET_COUNTRIES_FROM_API() {
      return axios("https://restcountries.com/v3.1/all", {
        method: "GET",
      })
        .then((countries) => {
          this.countries = countries.data;
          return this.countries;
        })
        .catch((error) => {
          return error;
        });
    },
  },
});
