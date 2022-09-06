<template>
  <div>
    <div class="button-wrapper">
      <a @click="$router.go(-1)" class="btn-back">
        <ArrowBack></ArrowBack>
        Back
      </a>
    </div>
    <div v-if="countryInfo" class="detail">
      <div class="detail__image">
        <img :src="countryInfo.flags.svg" alt="country_flag" />
      </div>
      <div class="detail__info">
        <div class="detail__title">{{ countryInfo.name.common }}</div>
        <div class="detail__wrapper">
          <div class="detail__text">
            <p>
              <strong>Native Name: </strong>{{ countryInfo.name.nativeName }}
            </p>
            <p><strong>Population: </strong>{{ countryInfo.population }}</p>
            <p><strong>Region: </strong>{{ countryInfo.region }}</p>
            <p><strong>Sub Region: </strong>{{ countryInfo.subregion }}</p>
            <p>
              <strong>Capital: </strong
              >{{ countryInfo.capital["0"] || "No capital" }}
            </p>
          </div>
          <div class="detail__text">
            <p><strong>Top Level Domain: </strong>{{ countryInfo.tld["0"] }}</p>
            <p><strong>Currency: </strong>{{ countryInfo.currencies }}</p>
            <p class="languagesList">
              <strong>Languages: </strong
              ><span
                v-for="(language, index) in countryInfo.languages"
                v-bind:key="index"
                class="languages"
              >
                {{ language.name
                }}<span v-if="index + 1 < countryInfo.languages">, </span>
              </span>
            </p>
          </div>
        </div>
<!--        <CountryBorder></CountryBorder>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowBack from "@/entities/app/ArrowBack/ui/index.vue";
import CountryBorder from "@/entities/country/CountryBorder/ui/index.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import type { Country } from "@/shared/models/country";

let countryInfo = ref<Country>();
const countryRoute = useRoute();
const getCountryInfo = (name: string | string[]) => {
  return axios(`https://restcountries.com/v3.1/name/${name}`, {
    method: "GET",
  })
    .then((countryData) => {
      countryInfo.value = countryData.data;
      console.log('countryInfo is ', countryInfo.value);
    })
    .catch((error) => {
      console.error(error);
    });
};
onMounted(async () => {
  await getCountryInfo(countryRoute.params.country);
});
</script>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  padding-top: 20px;
  width: 100%;
}

.btn-back {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 23px 6px 23px;
  border-radius: 2px;
  background-color: var(--color-light);
  text-decoration: none;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--app-text);
  cursor: pointer;

  @include for-tablet {
    padding: 10px 39px 10px 39px;
  }

  @include for-desktop {
    &:hover {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition-property: box-shadow;
      transition-duration: 0.3s;
    }

    &:not(:hover) {
      transition-duration: 0.3s;
    }
  }
}

.detail {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1.5s; /* Firefox < 16 */
  -ms-animation: fadein 1.5s; /* Internet Explorer */
  -o-animation: fadein 1.5s; /* Opera < 12.1 */
  animation: fadein 1.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @include for-tablet {
    align-items: center;
    max-width: unset;
  }

  @include for-desktop {
    flex-direction: row;
    justify-content: space-between;
  }

  &__image {
    @include for-desktop {
      margin-right: 20px;
      flex: 1;
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;

      @include for-tablet {
        width: 500px;
        height: 320px;
      }

      @include for-desktop {
        width: 560px;
        height: 400px;
      }
    }
  }

  &__info {
    padding-top: 25px;
    color: var(--app-text);

    @include for-tablet {
      width: 500px;
    }

    @include for-desktop {
      width: unset;
      flex: 1;
    }
  }

  &__title {
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 16px;

    @include for-tablet {
      font-size: 32px;
      line-height: 44px;
      margin-bottom: 23px;
    }
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 320px;

    @include for-tablet {
      max-width: 100%;
    }
  }

  &__text {
    font-style: normal;
    font-size: 16px;
    line-height: 16px;

    &:first-of-type {
      padding-bottom: 32px;

      @include for-tablet {
        margin-top: 0;
      }

      @include for-desktop {
        padding-bottom: 0;
        margin-right: 40px;
      }
    }

    p {
      margin-top: 0;
    }
  }

  .languagesList {
    line-height: 25px;
  }
}
</style>
