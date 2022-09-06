<template>
  <RouterLink
    v-if="props.country"
    :to="{
      name: 'CountryInfoPage',
      params: { country: props.country.name.official },
    }"
    tag="div"
    class="card"
  >
    <div class="card__image">
      <img :src="country.flags.svg" alt="country_flag" />
    </div>
    <div class="card__info">
      <div class="card__title">{{ country.name.common }}</div>
      <div class="card__text">
        <p>
          <strong>Population: </strong>{{ country.population.toLocaleString() }}
        </p>
        <p><strong>Region: </strong>{{ country.region }}</p>
        <p>
          <strong>Capital: </strong
          >{{ country.capital ? country.capital[0] : "No capital" }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { Country } from "@/shared/models/country";

const props = defineProps<{
  country: Country;
}>();
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  min-height: 330px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-light);
  color: var(--color-light);
  text-decoration: none;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  cursor: pointer;
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */
  animation: fadein 1s;

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

  @include for-desktop {
    &:hover {
      box-shadow: var(--shadow-card-color-hover);
      transition-property: box-shadow;
      transition-duration: 0.3s;
    }

    &:not(:hover) {
      transition-property: box-shadow;
      transition-duration: 0.3s;
    }
  }

  &__image {
    flex: 1;

    img {
      width: 100%;
      height: 160px;
      object-fit: contain;
    }
  }

  &__info {
    padding: 24px 24px 0 24px;
    color: var(--app-text);
    flex: 1;
  }

  &__title {
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 16px;
  }

  &__text {
    font-style: normal;
    font-size: 14px;
    line-height: 16px;

    p {
      margin-top: 0;
    }
  }
}
</style>
