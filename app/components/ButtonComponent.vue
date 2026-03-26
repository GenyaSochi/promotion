<template>
  <button 
    class="scroll-to-top" 
    :class="{ 'visible': isVisible }"
    @click="scrollToTop"
    aria-label="Наверх"
  >
    <span class="scroll-icon">↑</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const scrollThreshold = 400

const handleScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-bg);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.8) translateY(20px);
  transition: all var(--transition-normal);
  box-shadow: 0 0 20px var(--color-primary-glow);
  z-index: 999;
  overflow: hidden;
}

.scroll-to-top::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shimmer 2.5s infinite;
}

.scroll-to-top::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent-purple), var(--color-accent-pink), var(--color-primary));
  background-size: 300% 300%;
  animation: gradient-rotate 3s ease infinite;
  z-index: -1;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.scroll-to-top:hover {
  transform: scale(1.05) translateY(-3px);
  box-shadow: 0 0 40px var(--color-primary-glow), 0 0 60px rgba(0, 220, 130, 0.5);
}

.scroll-to-top:hover::after {
  opacity: 1;
}

.scroll-to-top:active {
  transform: scale(0.95);
}

.scroll-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: scale(1) translateY(0);
}

.scroll-icon {
  position: relative;
  z-index: 1;
  transition: transform var(--transition-fast);
}

.scroll-to-top:hover .scroll-icon {
  transform: translateY(-2px);
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes gradient-rotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }
}

@media (max-width: 380px) {
  .scroll-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 44px;
    height: 44px;
    font-size: 1.125rem;
  }
}
</style>
