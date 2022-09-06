<template>
  <div class="error">
    <h2>Error fetching data.</h2>
    <h2>{{ props.error }}</h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: String,
});
</script>

<style lang="scss">
.error {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-light);
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
}
</style>
