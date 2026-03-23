<template>
  <div class="layout">
    <CustomCursor />
    <HeaderComponent />
    <main class="main">
      <slot />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* Для iOS Safari */
  overflow-x: hidden;
  width: 100%;
}

.main {
  flex: 1;
  width: 100%;
  overflow-x: hidden;
}
</style>
