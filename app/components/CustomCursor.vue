<template>
  <div v-if="isDesktop" class="custom-cursor">
    <div class="cursor-dot" :style="cursorStyle"></div>
    <div class="cursor-outline" :style="cursorOutlineStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)
const outlineX = ref(0)
const outlineY = ref(0)
const isHovering = ref(false)
const isDesktop = ref(false)

const cursorStyle = computed(() => ({
  left: `${cursorX.value}px`,
  top: `${cursorY.value}px`
}))

const cursorOutlineStyle = computed(() => ({
  left: `${outlineX.value}px`,
  top: `${outlineY.value}px`,
  width: isHovering.value ? '60px' : '40px',
  height: isHovering.value ? '60px' : '40px',
  borderColor: isHovering.value ? 'var(--color-accent-purple)' : 'var(--color-primary)',
  boxShadow: isHovering.value
    ? '0 0 20px var(--color-primary-glow), inset 0 0 20px rgba(139, 92, 246, 0.2)'
    : '0 0 15px var(--color-primary-glow), inset 0 0 15px var(--color-primary-glow)'
}))

const handleMouseMove = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}

const handleMouseOver = (e: MouseEvent) => {
  if ((e.target as HTMLElement).closest('a, button, .service-card, .feature-card, .value-card, .contact-item, [role="button"], input, textarea, select')) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

// Плавное движение внешнего круга
const animateOutline = () => {
  outlineX.value += (cursorX.value - outlineX.value) * 0.15
  outlineY.value += (cursorY.value - outlineY.value) * 0.15
  requestAnimationFrame(animateOutline)
}

onMounted(() => {
  // Проверка на мобильные устройства и тач-экраны
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.userAgent.includes('Android') || navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')

  if (!isTouchDevice && window.innerWidth > 768) {
    isDesktop.value = true
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    animateOutline()
    document.body.style.cursor = 'none'
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseover', handleMouseOver)
  document.body.style.cursor = ''
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 99999;
}

.cursor-dot,
.cursor-outline {
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
}

.cursor-dot {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  background: #00DC82; /* Фоллбэк */
  box-shadow: 0 0 10px var(--color-primary-glow), 0 0 20px var(--color-primary-glow);
}

.cursor-outline {
  border: 2px solid var(--color-primary);
  border: 2px solid #00DC82; /* Фоллбэк */
  box-shadow: 0 0 15px var(--color-primary-glow), inset 0 0 15px var(--color-primary-glow);
  transition: all 0.15s ease-out;
}
</style>
