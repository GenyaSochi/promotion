<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="header-container">
      <NuxtLink to="/" class="logo">
        <span class="logo-icon">✦</span>
        <span class="logo-text">Веб Промоушн</span>
      </NuxtLink>

      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <a href="#hero" class="nav-link" @click="handleNavClick">Главная</a>
        <a href="#about" class="nav-link" @click="handleNavClick">О нас</a>
        <a href="#services" class="nav-link" @click="handleNavClick">Услуги</a>
        <a href="#contact" class="nav-link" @click="handleNavClick">Контакты</a>
      </nav>

      <NuxtLink to="/contact" class="header-cta">
        Связаться
      </NuxtLink>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Меню" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Обработка клика по навигации
const handleNavClick = (e: MouseEvent) => {
  // Если мы не на главной странице, переходим на неё
  if (route.path !== '/') {
    // Переход будет осуществлён браузером по href
    closeMenu()
  } else {
    // На главной странице предотвращаем стандартное поведение и скроллим
    e.preventDefault()
    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
    if (targetId) {
      const element = document.querySelector(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    closeMenu()
  }
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
  align-items: center;
  gap: 0.5rem;
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
  color: var(--color-primary);
  text-shadow: 0 0 20px var(--color-primary-glow);
}

.logo-text {
  background: linear-gradient(135deg, #fff 0%, #a1a1aa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav {
  display: flex;
  gap: 0.25rem;
}

.nav-link {
  padding: 0.625rem 1.25rem;
  color: #fff;
  border-radius: var(--radius-full);
  transition: all 0.25s ease;
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--color-primary);
  background: rgba(255, 255, 255, 0.05);
}

.nav-link.router-link-active {
  color: var(--color-primary);
  background: rgba(0, 220, 130, 0.1);
}

.header-cta {
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, var(--color-primary), #00b36b);
  color: #0a0a0f;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.3);
}

.header-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 220, 130, 0.5);
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
</style>
