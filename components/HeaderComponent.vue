<template>
  <header class="header">
    <div class="header-container">
      <NuxtLink to="/" class="logo">
        <span class="logo-icon">🚀</span>
        <span class="logo-text">Веб Промоушн</span>
      </NuxtLink>
      
      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <NuxtLink to="/" class="nav-link" @click="closeMenu">Главная</NuxtLink>
        <NuxtLink to="/about" class="nav-link" @click="closeMenu">О нас</NuxtLink>
        <NuxtLink to="/services" class="nav-link" @click="closeMenu">Услуги</NuxtLink>
        <NuxtLink to="/contact" class="nav-link" @click="closeMenu">Контакты</NuxtLink>
      </nav>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Меню">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: #1a1a1a;
  color: #fff;
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  transition: opacity 0.2s ease;
}

.logo:hover {
  opacity: 0.8;
}

.logo-icon {
  font-size: 1.8rem;
}

.logo-text {
  background: linear-gradient(135deg, #00DC82 0%, #00a862 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  color: #ccc;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  font-weight: 500;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #fff;
  background: rgba(0, 220, 130, 0.1);
}

.nav-link.router-link-active {
  color: #00DC82;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: #fff;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: #1a1a1a;
    flex-direction: column;
    padding: 1rem;
    gap: 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
