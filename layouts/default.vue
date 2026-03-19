<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/about">О нас</NuxtLink>
      </nav>
    </header>
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

.header {
  padding: 1rem;
  background: #f5f5f5;
}

.nav {
  display: flex;
  gap: 1rem;
}

.main {
  padding: 2rem;
  flex: 1;
}
</style>
