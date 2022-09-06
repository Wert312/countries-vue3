<template>
  <div class="nf-text">
    <h1>The page doesn`t exist</h1>
    <router-link :to="{ name: 'CountryGridPage' }"
      >Return to main page</router-link
    >
  </div>
</template>

<style scoped lang="scss">
.nf-text {
  width: 100%;
  height: 100%;
  text-align: center;
  flex-direction: column;
  color: var(--app-text);
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: var(--app-text);
  text-decoration: underline;
}
</style>
