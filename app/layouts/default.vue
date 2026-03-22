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
}

.main {
  flex: 1;
}
</style>
