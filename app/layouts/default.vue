<template>
  <div class="layout">
    <CustomCursor />
    <HeaderComponent />
    <main class="main">
      <slot />
    </main>
    <FooterComponent />
    <ButtonComponent />
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '~/components/ButtonComponent.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}
</style>
