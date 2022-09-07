<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import "@/shared/assets/css/normalize.css";
import "@/shared/assets/css/variables.css";
</script>

<style scoped lang="scss">
.container {
  max-width: 1140px;
  width: calc(100% - 32px);
  padding: 80px 16px 45px 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave {
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  transition: all 1.5s;
}
</style>
