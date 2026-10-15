<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="header-container">
      <NuxtLink to="/" class="logo">
        <div style="display: flex; gap: .5rem">
          <span class="logo-icon">✦</span>
          <span class="logo-text">AppWeb</span>
        </div>
        <span class="logo-sub">разработка сайтов и мобильных приложений</span>
      </NuxtLink>

      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <NuxtLink to="/#hero" class="nav-link" @click="closeMenu">Главная</NuxtLink>
        <NuxtLink to="/#services" class="nav-link" @click="closeMenu">Услуги</NuxtLink>
        <NuxtLink to="/#contact" class="nav-link" @click="closeMenu">Контакты</NuxtLink>
      </nav>

      <button class="header-cta" @click="openContactModal">
        Связаться
      </button>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Меню" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <ContactModal v-model:model-value="isContactModalOpen" />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isContactModalOpen = ref(false)

const openContactModal = () => {
  isContactModalOpen.value = true
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.header-scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  padding: 0.75rem 0;
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
}

.logo:hover {
  opacity: 0.9;
}

.logo-icon {
  font-size: 1.5rem;
  color: #06b6d4;
  text-shadow: 0 0 25px rgba(6, 182, 212, 0.7);
}

.logo-text {
  background: linear-gradient(135deg, #fff 40%, #00dc82);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-sub {
  font-size: 0.75rem;
  background: linear-gradient(90deg, #06b6d4, #00dc82);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.nav {
  display: flex;
  gap: 4px;
  background: rgba(255, 255, 255, 0.04);
  padding: 4px;
  border-radius: 999px;
}

.nav-link {
  padding: 0.5rem 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  border-radius: 999px;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: #0a0a0f;
  background: linear-gradient(135deg, #00dc82, #00b36b);
  font-weight: 700;
}

.header-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.5rem;
  background: linear-gradient(135deg, #00dc82, #00b36b);
  color: #0a0a0f;
  border: none;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9375rem;
  cursor: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.3);
}

.header-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 35px rgba(0, 220, 130, 0.5);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 32px;
  height: 32px;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 900px) {
  .header-cta {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 15, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
  }

  .nav-open {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
}

/* Mobile 320px */
@media (max-width: 380px) {
  .header-container {
    padding: 0 1rem;
  }

  .logo {
    font-size: 1.25rem;
  }

  .nav-link {
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem;
  }
}

</style>
