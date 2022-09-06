<template>
  <div class="header">
    <div class="header__inner-content">
      <div class="header__link" @click="scrollTop">
        <RouterLink
          tag="div"
          :to="{ name: 'CountryGridPage' }"
          class="header__title"
          >Where in the world?</RouterLink
        >
      </div>
      <div @click="toggleCurrentMode" class="header__switch-mode">
        toggle theme
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

onMounted(() => {
  setCurrentMode();
});

let currentMode = ref(localStorage.getItem("theme"));

function setCurrentMode() {
  document.documentElement.setAttribute("data-theme", `${currentMode.value}`);
}

function scrollTop() {
  window.scrollTo(0, 0);
}

function toggleCurrentMode() {
  if (currentMode.value === "dark") {
    currentMode.value = "light";
  } else {
    currentMode.value = "dark";
  }
  document.documentElement.setAttribute("data-theme", `${currentMode.value}`);
  localStorage.setItem("theme", `${currentMode.value}`);
}
</script>

<style scoped lang="scss">
.header {
  color: var(--app-text);
  background-color: var(--color-light);
  display: flex;
  position: fixed;
  z-index: 1000;
  align-items: center;
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 15%);

  &__inner-content {
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;
    max-width: 1140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-style: normal;
    font-weight: 800;
    color: var(--app-text);
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;

    @include for-tablet {
      font-size: 24px;
      line-height: 33px;
    }
  }

  &__switch-mode {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;

    @include for-tablet {
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>
