<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section id="hero" class="hero">
      <div class="hero-bg">
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="hero-glow hero-glow-3"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span>Доступны для новых проектов</span>
          </div>
          <h1>
            <span class="gradient-text">Цифровые решения</span>
            <br />
            для вашего бизнеса
          </h1>
          <p class="hero-description">
            Создаём современные веб-сайты, мобильные приложения и цифровые продукты,
            которые помогают компаниям расти и привлекать клиентов
          </p>
         <div ref="hookRef" class="hero-hook">
            <h2 class="hero-hook-title">
              <span class="gradient-text">Мы делаем не просто "сайты мечты"</span>
            </h2>           
              <div class="hero-description">Мы делаем сайты, которые работают как часы, приносят деньги и не требуют круглосуточного присмотра</div>            
            <Transition name="timer-slide" appear @after-enter="startTimer">
            <div
              v-if="cardVisible"
              ref="cardRef"
              class="hero-diagnosis-card hero-diagnosis-card--timer"
            >
              <div class="hero-diagnosis-card-glow"></div>
              <div ref="timerRef" class="hero-timer-wrapper">            

                <div
                  class="hero-timer-ring"
                  :class="[timerColorClass, { 'is-boom': timerValue === 0 }]"
                >
                  <div class="hero-timer-glow"></div>

                  <!-- Внешнее орбитальное кольцо с тиками -->
                  <svg class="hero-timer-orbit" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                    <circle class="hero-timer-orbit-track" cx="120" cy="120" r="115" />
                    <g class="hero-timer-ticks">
                      <line
                        v-for="i in 24"
                        :key="i"
                        :class="{ 'is-major': i % 3 === 0 }"
                        x1="120" y1="10" x2="120" y2="20"
                        :transform="`rotate(${(i - 1) * 15} 120 120)`"
                      />
                    </g>
                    <g class="hero-timer-satellite">
                      <circle cx="120" cy="8" r="4" />
                    </g>
                  </svg>

                  <!-- Внутренний progress -->
                  <svg class="hero-timer-core" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="var(--timer-c1)" />
                        <stop offset="100%" stop-color="var(--timer-c2)" />
                      </linearGradient>
                      <filter id="timerGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <circle class="hero-timer-track" cx="100" cy="100" r="88" />
                    <circle
                      class="hero-timer-progress"
                      cx="100" cy="100" r="88"
                      :stroke-dasharray="circumference"
                      :stroke-dashoffset="dashOffset"
                      stroke="url(#timerGrad)"
                      filter="url(#timerGlow)"
                    />
                    <circle
                      class="hero-timer-dot"
                      cx="188"
                      cy="100"
                      r="7"
                      :transform="`rotate(${progressAngle} 100 100)`"
                    />
                  </svg>

                  <div class="hero-timer-digit" :class="{ shake: timerValue === 0 }" @click="openContactModal">
                    <span class="hero-timer-digit-main">{{ timerValue }}</span>
                    <button type="button" class="hero-timer-digit-sub">жми</button>
                  </div>

                  <div class="hero-timer-shockwave"></div>
                  <div class="hero-timer-shockwave hero-timer-shockwave--delay"></div>
                </div>
              </div>
            </div>
            </Transition>           
          </div>

          <div class="hero-diagnosis-cards">   
           </div>
            
           
          <div class="hero-buttons">
            <NuxtLink to="/#contact" class="btn-primary">
              обсудить проект
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </NuxtLink>          
          </div>
          <div class="hero-stats">
            <div class="stat-item" v-for="(stat, index) in stats" :key="index">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Листай вниз</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section ref="featuresSectionRef" class="features">
      <div class="container">
        <div class="section-header">
          <h2>Никакой сложной терминологии</h2>
          <p>Просто настраиваем всё, чтобы клиенты находили вас, доверяли и покупали</p>
        </div>
        <TransitionGroup name="feature" tag="div" class="features-grid">
          <div
            v-if="featuresVisible"
            class="feature-card"
            :style="{ '--delay': `${(feature.id - 1) * 150}ms` }"
            v-for="feature in features"
            :key="feature.id"
          >
            <div class="gradient-border"></div>
            <div class="feature-icon">
              <svg v-if="feature.iconName === 'zap'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <svg v-else-if="feature.iconName === 'target'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              <svg v-else-if="feature.iconName === 'users'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a1 1 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <svg v-else-if="feature.iconName === 'lightbulb'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </TransitionGroup>
      </div>
    </section>

    <!-- Services Preview -->
    <section id="services" class="services-preview">
      <div class="container">
        <div class="section-header">
          <h2>Наши услуги</h2>
          <p>Полный спектр цифровых решений</p>
        </div>
        <div class="services-editorial">
          <div
            class="service-row"
            v-for="(service, index) in allServices"
            :key="service.id"
          >
            <div class="service-row-number">
              <span class="gradient-text">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <div class="service-row-content">
              <div class="service-row-head">
                <div class="service-row-icon">
                  <svg v-if="service.iconName === 'code'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  <svg v-else-if="service.iconName === 'smartphone'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                  <svg v-else-if="service.iconName === 'palette'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
                  <svg v-else-if="service.iconName === 'trending-up'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                  <svg v-else-if="service.iconName === 'wrench'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                  <svg v-else-if="service.iconName === 'lightbulb'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </div>
                <h3 class="service-row-title">{{ service.title }}</h3>
              </div>
              <p class="service-row-description">{{ service.description }}</p>
              <ul class="service-row-features">
                <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="section-footer">
          <NuxtLink to="/#contact" class="btn-outline">Заказать услугу</NuxtLink>
        </div>
      </div>
    </section>

    <AboutBlock/>

    <ContactBlock/>
  </div>

  <ContactModal v-model:model-value="isContactModalOpen" />
</template>

<script setup lang="ts">
import { directives } from '@vue/language-core/lib/codegen/names'

interface Feature {
  id: number
  iconName: string
  title: string
  description: string
}

interface Service {
  id: number
  iconName: string
  title: string
  description: string
  link: string
  features: string[]
}

interface Stat {
  value: string
  label: string
}

// --- Таймер «5 секунд» ---
const TIMER_DURATION = 5
const circumference = 2 * Math.PI * 88 // r=88 (внутренний progress)
const timerValue = ref(TIMER_DURATION)
const timerFinished = ref(false)
const timerStarted = ref(false)
let timerInterval: ReturnType<typeof setInterval> | null = null

const dashOffset = computed(() => {
  const progress = timerValue.value / TIMER_DURATION
  return circumference * (1 - progress)
})

const progressAngle = computed(() => {
  return (timerValue.value / TIMER_DURATION) * 360
})

const timerColorClass = computed(() => {
  if (timerValue.value <= 0) return 'timer-red'
  if (timerValue.value <= 2) return 'timer-red'
  if (timerValue.value <= 3) return 'timer-yellow'
  return 'timer-green'
})

let resetTimeout: ReturnType<typeof setTimeout> | null = null

const cardVisible = ref(false)
const cardRef = ref<HTMLElement | null>(null)
const timerRef = ref<HTMLElement | null>(null)
const hookRef = ref<HTMLElement | null>(null)

const isContactModalOpen = ref(false)
const openContactModal = () => {
  isContactModalOpen.value = true
}

const startTimer = () => {
  if (timerStarted.value) return
  timerStarted.value = true
  timerInterval = setInterval(() => {
    if (timerValue.value > 0) {
      timerValue.value--
    } else if (!timerFinished.value) {
      timerFinished.value = true
      resetTimeout = setTimeout(() => {
        timerValue.value = TIMER_DURATION
        timerFinished.value = false
      }, 2000)
    }
  }, 1000)
}

let hookScrollHandler: (() => void) | null = null
let revealTimeout: ReturnType<typeof setTimeout> | null = null

const featuresSectionRef = ref<HTMLElement | null>(null)
const featuresVisible = ref(false)
let featuresScrollHandler: (() => void) | null = null

onMounted(() => {
  const checkHookPosition = () => {
    if (!hookRef.value) return
    if (hookRef.value.getBoundingClientRect().top <= 100) {
      if (hookScrollHandler) window.removeEventListener('scroll', hookScrollHandler)
      hookScrollHandler = null
      revealTimeout = setTimeout(() => {
        cardVisible.value = true
      }, 400)
    }
  }

  hookScrollHandler = () => checkHookPosition()
  window.addEventListener('scroll', hookScrollHandler, { passive: true })
  checkHookPosition()

  const checkFeaturesVisible = () => {
    if (!featuresSectionRef.value || featuresVisible.value) return
    const rect = featuresSectionRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.8) {
      featuresVisible.value = true
      window.removeEventListener('scroll', featuresScrollHandler!)
      featuresScrollHandler = null
    }
  }

  featuresScrollHandler = () => checkFeaturesVisible()
  window.addEventListener('scroll', featuresScrollHandler, { passive: true })
  checkFeaturesVisible()
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
  if (resetTimeout) clearTimeout(resetTimeout)
  if (revealTimeout) clearTimeout(revealTimeout)
  if (hookScrollHandler) window.removeEventListener('scroll', hookScrollHandler)
  if (featuresScrollHandler) window.removeEventListener('scroll', featuresScrollHandler)
})

const stats: Stat[] = [
  { value: '50+', label: 'Проектов' },
  { value: '8 лет', label: 'Опыта' },
  { value: '95%', label: 'Клиентов' },
  { value: '365', label: 'Дней поддержки' }
]

const features: Feature[] = [
  {
    id: 1,
    iconName: 'zap',
    title: 'Быстро',
    description: 'Соблюдаем сроки и оперативно реагируем на изменения'
  },
  {
    id: 2,
    iconName: 'target',
    title: 'Качественно',
    description: 'Используем современные технологии и лучшие практики'
  },
  {
    id: 3,
    iconName: 'users',
    title: 'Надёжно',
    description: 'Гарантируем поддержку и стабильную работу проектов'
  },
  {
    id: 4,
    iconName: 'lightbulb',
    title: 'Инновационно',
    description: 'Внедряем передовые решения для максимальной эффективности'
  }
]



const allServices: Service[] = [
  {
    id: 1,
    iconName: 'code',
    title: 'Веб-разработка',
    description: 'Создаём современные, быстрые и адаптивные веб-сайты',
    link: '/contact',
    features: [
      'Сделаем так, чтобы сайт открывался за секунду и красиво выглядел на телефоне',
      'Сайт-визитка компании',
      'Интернет-магазины',
      'Адаптивный дизайн'
    ]
  },
  {
    id: 2,
    iconName: 'smartphone',
    title: 'Мобильные приложения',
    description: 'Разрабатываем нативные и кроссплатформенные приложения',
    link: '/contact',
    features: [
      'iOS и Android приложения',
      'Кроссплатформенная разработка',
      'Интеграция с API',
      'Публикация в сторах'
    ]
  },
  {
    id: 3,
    iconName: 'palette',
    title: 'UI/UX Дизайн',
    description: 'Проектируем удобные и красивые интерфейсы',
    link: '/contact',
    features: [
      'Исследование пользователей',
      'Прототипирование',
      'Визуальный дизайн',
      'Дизайн-системы'
    ]
  },
  {
    id: 4,
    iconName: 'trending-up',
    title: 'SEO и Маркетинг',
    description: 'Продвигаем ваш бизнес в поисковых системах',
    link: '/contact',
    features: [
      'Техническая оптимизация',
      'Контент-стратегия',
      'Контекстная реклама',
      'Аналитика и отчётность'
    ]
  },
  {
    id: 5,
    iconName: 'wrench',
    title: 'Техническая поддержка',
    description: 'Обеспечиваем стабильную работу ваших проектов',
    link: '/contact',
    features: [
      'Мониторинг',
      'Обновления и патчи',
      'Резервное копирование',
      'Консультации'
    ]
  },
  {
    id: 6,
    iconName: 'lightbulb',
    title: 'Консалтинг',
    description: 'Помогаем выбрать оптимальные технологические решения',
    link: '/contact',
    features: [
      'Аудит текущих систем',
      'Технологический консалтинг',
      'Оптимизация процессов',
      'Обучение команды'
    ]
  }
]

definePageMeta({
  title: 'AppWeb - Цифровые решения для вашего бизнеса',
  scrollToTop: true
})

useHead({
  title: 'AppWeb - Цифровые решения для вашего бизнеса',
  meta: [
    { name: 'description', content: 'Создаём современные веб-сайты, мобильные приложения и цифровые продукты. Полный спектр услуг для вашего бизнеса.' },
    { name: 'keywords', content: 'веб-разработка, мобильные приложения, дизайн, SEO, цифровые решения' },
    { property: 'og:title', content: 'AppWeb - Цифровые решения для вашего бизнеса' },
    { property: 'og:description', content: 'Создаём современные веб-сайты и мобильные приложения' },
    { property: 'og:type', content: 'website' }
  ],
  script: [
    {
      innerHTML: `try{if('scrollRestoration'in history)history.scrollRestoration='manual';window.scrollTo(0,0)}catch(e){}`,
      type: 'text/javascript'
    }
  ]
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
  padding: 140px 1.5rem 80px;
  box-sizing: border-box;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.5;
}

.hero-glow-1 {
  width: 600px;
  height: 600px;
  background: rgba(0, 220, 130, 0.15);
  top: -200px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.hero-glow-2 {
  width: 500px;
  height: 500px;
  background: rgba(139, 92, 246, 0.12);
  bottom: 40px;
  left: -100px;
  animation: float 10s ease-in-out infinite reverse;
}

.hero-glow-3 {
  width: 400px;
  height: 400px;
  background: rgba(236, 72, 153, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 6s ease-in-out infinite;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 1130px;
  margin: 0 auto;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  backdrop-filter: blur(10px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  letter-spacing: -0.03em;
  color: #ffffff !important;
}

.hero-description {
  font-size: 1.25rem;
  color: #cccccc !important;
  line-height: 1.8;
  margin-bottom: var(--spacing-2xl);
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

.hero-hook {
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  text-align: center;
}


/* Три отдельные карточки диагностики */
.hero-diagnosis-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  gap: var(--spacing-xl);
  margin: var(--spacing-2xl) auto;
  max-width: 100%;
  position: relative;
  z-index: 1;
  overflow: visible;
}

.hero-diagnosis-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}

.hero-diagnosis-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-xl);
  padding: 1px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent-purple),
    var(--color-accent-pink),
    var(--color-accent-cyan),
    var(--color-primary)
  );
  background-size: 300% 300%;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: gradient-rotate 6s linear infinite;
  opacity: 0.4;
  pointer-events: none;
}

.hero-diagnosis-card:hover::before {
  opacity: 0.8;
}

.hero-diagnosis-card:hover {
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
}

.hero-diagnosis-card-glow {
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  pointer-events: none;
}

.hero-diagnosis-card--timer .hero-diagnosis-card-glow {
  background: var(--color-primary);
}

.hero-diagnosis-card--timer {
  border-color: transparent;
  background: transparent;
  overflow: visible;
  grid-column: 1;
  align-self: center;
}

.hero-diagnosis-card--timer::before {
  display: none;
}

.hero-diagnosis-card--timer .hero-diagnosis-card-glow {
  display: none;
}

.hero-diagnosis-card--timer:hover {
  border-color: transparent;
  background: transparent;
  box-shadow: none;
  transform: none;
}

.hero-hook-title {
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.hero-hook-title .gradient-text {
  display: inline-block;
  text-shadow: 0 0 40px var(--color-primary-glow);
}

/* ── Slide-in card animation (Vue Transition) ── */
.timer-slide-enter-from {
  opacity: 0;
  transform: translateX(100vw);
}

.timer-slide-enter-active {
  transition: opacity 2.2s ease-out, transform 2.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.timer-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* ── Timer wrapper ── */
.hero-timer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) auto;
  position: relative;
  z-index: 1;
}

/* ── Color-state CSS variables ── */
.timer-green {
  --timer-c1: var(--color-primary);
  --timer-c2: var(--color-accent-cyan);
  --timer-glow: var(--color-primary-glow);
  --timer-text: var(--color-primary);
}

.timer-yellow {
  --timer-c1: #ffdc40;
  --timer-c2: #ffb300;
  --timer-glow: rgba(255, 220, 64, 0.6);
  --timer-text: #ffe066;
}

.timer-red {
  --timer-c1: #ff3333;
  --timer-c2: #ff0000;
  --timer-glow: rgba(255, 20, 20, 0.75);
  --timer-text: #ff4040;
}

/* ── Ring container ── */
.hero-timer-ring {
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ambient glow behind the ring */
.hero-timer-glow {
  position: absolute;
  inset: -30px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--timer-glow) 0%, transparent 70%);
  opacity: 0.35;
  filter: blur(30px);
  transition: background 0.4s ease;
  pointer-events: none;
}

/* ── Orbit SVG (outer ring with ticks + satellite) ── */
.hero-timer-orbit {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: orbit-spin 12s linear infinite;
}

.hero-timer-orbit-track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.04);
  stroke-width: 1;
}

.hero-timer-ticks line {
  stroke: rgba(255, 255, 255, 0.12);
  stroke-width: 1;
  stroke-linecap: round;
}

.hero-timer-ticks line.is-major {
  stroke: rgba(255, 255, 255, 0.25);
  stroke-width: 1.5;
}

.hero-timer-satellite circle {
  fill: var(--timer-c1);
  filter: drop-shadow(0 0 6px var(--timer-glow));
  transition: fill 0.4s ease;
}

@keyframes orbit-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ── Core SVG (progress arc + dot) ── */
.hero-timer-core {
  position: absolute;
  inset: 20px;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  transform: rotate(-90deg);
}

.hero-timer-track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.06);
  stroke-width: 5;
}

.hero-timer-progress {
  fill: none;
  stroke-width: 5;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.4s ease;
}

.hero-timer-dot {
  fill: #fff;
  filter: drop-shadow(0 0 8px var(--timer-glow));
  transition: filter 0.4s ease;
}

/* ── Digit ── */
.hero-timer-digit {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  cursor: default;
  transition: color 0.3s ease;
}

.hero-timer-digit-main {
  font-size: 4.5rem;
  font-weight: 900;
  font-variant-numeric: tabular-nums;
  color: var(--timer-text);
  text-shadow: 0 0 40px var(--timer-glow);
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.hero-timer-digit-sub {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-top: 4px;
  background: none;
  border: none;
  padding: 0;
  cursor: default;
}

.hero-timer-digit.shake {
  animation: timer-shake 0.5s ease-in-out;
}

@keyframes timer-shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px) rotate(-3deg); }
  40% { transform: translateX(8px) rotate(3deg); }
  60% { transform: translateX(-6px) rotate(-2deg); }
  80% { transform: translateX(6px) rotate(2deg); }
}

/* ── Shockwave on zero ── */
.hero-timer-shockwave {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--timer-c1);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
}

.is-boom .hero-timer-shockwave {
  animation: shockwave-expand 0.8s ease-out forwards;
}

.is-boom .hero-timer-shockwave--delay {
  animation-delay: 0.15s;
}

@keyframes shockwave-expand {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(2.2);
    opacity: 0;
  }
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .hero-timer-ring {
    width: 180px;
    height: 180px;
  }

  .hero-timer-digit-main {
    font-size: 3.5rem;
  }

  .timer-slide-enter-from {
    transform: translateX(100vw);
  }

  .timer-slide-enter-active {
    transition: opacity 1.6s ease-out, transform 1.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

}

@media (max-width: 380px) {
  .hero-timer-ring {
    width: 150px;
    height: 150px;
  }

  .hero-timer-digit-main {
    font-size: 2.75rem;
  }

  .timer-slide-enter-from {
    transform: translateX(100vw);
  }

  .timer-slide-enter-active {
    transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

}

@keyframes gradient-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
  50% { opacity: 0.8; transform: translateX(-50%) scale(1.1); }
}

@media (max-width: 768px) {
  .hero-hook {
    padding: var(--spacing-xl) var(--spacing-lg) var(--spacing-lg);
    margin: var(--spacing-lg) auto var(--spacing-xl);
  }

  .hero-hook-title {
    font-size: clamp(1.375rem, 5vw, 2rem);
  }

  .hero-diagnosis-cards {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .hero-diagnosis-card--timer {
    grid-column: 1;
  }

  .hero-diagnosis-card {
    padding: var(--spacing-lg);
  }
}

@media (max-width: 380px) {
  .hero-hook {
    padding: var(--spacing-lg) var(--spacing-md) var(--spacing-md);
  }

  .hero-hook-title {
    font-size: 1.25rem;
  }

  .hero-diagnosis-card {
    padding: var(--spacing-md);
  }
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-3xl);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-3xl);
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.scroll-indicator {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--color-text-muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(180deg, var(--color-primary), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}


@keyframes scrollPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scaleY(0.5);
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
  }
}

/* Features Section */
.features {
  padding: var(--spacing-4xl) 0;
  position: relative;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--spacing-xl);
}

/* Feature Cards */
.feature-card {
  text-align: center;
  padding: var(--spacing-2xl);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
}

/* TransitionGroup enter animation */
.feature-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.feature-enter-active {
  transition:
    opacity 0.7s ease-out var(--delay, 0ms),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms);
}

.feature-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.feature-card .gradient-border {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-xl);
  padding: 3px;
  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-accent-purple),
    var(--color-accent-pink),
    var(--color-accent-cyan),
    var(--color-primary)
  );
  background-size: 300% 300%;
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: 1;
  opacity: 0;
  transition: opacity var(--transition-normal);
  animation: gradient-rotate 4s linear infinite;
  pointer-events: none;
}

.feature-card:hover .gradient-border {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl), var(--shadow-glow-primary);
  background: var(--color-bg-card-hover);
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

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-lg);
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.1), rgba(139, 92, 246, 0.1));
  border-radius: var(--radius-xl);
  color: var(--color-primary);
  transition: all var(--transition-normal);
}

.feature-card:hover .feature-icon {
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.2), rgba(139, 92, 246, 0.2));
  color: var(--color-primary-light);
  transform: scale(1.05);
}

.feature-icon svg {
  width: 40px;
  height: 40px;
}

.feature-card h3 {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.feature-card p {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* Services Preview */
.services-preview {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

/* Services Editorial (big numbers + split) */
.services-editorial {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.service-row {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
  padding: var(--spacing-2xl) 0;
  border-bottom: 1px solid var(--color-border);
  transition: background var(--transition-normal);
  position: relative;
}

.service-row:first-child {
  padding-top: 0;
}

.service-row:last-child {
  border-bottom: none;
}

.service-row::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0, 220, 130, 0.04), transparent 60%);
  opacity: 0;
  transition: opacity var(--transition-normal);
  pointer-events: none;
  border-radius: var(--radius-lg);
}

.service-row:hover::before {
  opacity: 1;
}

.service-row-number {
  font-size: clamp(4rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
  opacity: 0.85;
  transition: opacity var(--transition-normal), transform var(--transition-normal);
  user-select: none;
}

.service-row-number .gradient-text {
  display: inline-block;
  text-shadow: 0 0 40px var(--color-primary-glow);
}

.service-row:hover .service-row-number {
  opacity: 1;
  transform: translateX(-4px);
}

.service-row-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.service-row-head {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.service-row-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  color: var(--color-primary);
  transition: all var(--transition-normal);
}

.service-row:hover .service-row-icon {
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.2), rgba(139, 92, 246, 0.2));
  color: var(--color-primary-light);
  transform: scale(1.05);
  box-shadow: 0 0 24px var(--color-primary-glow);
}

.service-row-icon svg {
  width: 28px;
  height: 28px;
}

.service-row-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.02em;
}

.service-row-description {
  font-size: 1.0625rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin: 0;
}

.service-row-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.service-row-features li {
  position: relative;
  padding-left: 1.75rem;
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
}

.service-row-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary);
  box-shadow: 0 0 10px var(--color-primary-glow);
}

@media (max-width: 768px) {
  .service-row {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    padding: var(--spacing-xl) 0;
  }

  .service-row-number {
    font-size: 3rem;
    opacity: 0.5;
  }

  .service-row:hover .service-row-number {
    transform: none;
  }

  .service-row-icon {
    width: 48px;
    height: 48px;
  }

  .service-row-icon svg {
    width: 24px;
    height: 24px;
  }

  .service-row-title {
    font-size: 1.375rem;
  }
}

@media (max-width: 380px) {
  .service-row {
    padding: var(--spacing-lg) 0;
  }

  .service-row-number {
    font-size: 2.25rem;
  }

  .service-row-head {
    gap: var(--spacing-sm);
  }

  .service-row-icon {
    width: 40px;
    height: 40px;
  }

  .service-row-icon svg {
    width: 20px;
    height: 20px;
  }

  .service-row-title {
    font-size: 1.125rem;
  }

  .service-row-description {
    font-size: 0.9375rem;
  }

  .service-row-features li {
    font-size: 0.875rem;
  }
}



.section-footer {
  text-align: center;
  margin-top: var(--spacing-2xl);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }

  .hero h1 {
    font-size: 2.25rem;
  }

  .hero-description {
    font-size: 1rem;
  }
  
  .hero-stats {
    gap: var(--spacing-xl);
  }
  
  .stat-value {
    font-size: 1.5rem;
  }
  
  .scroll-indicator {
    display: none;
  }
  
  .features-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header h2 {
    font-size: 1.75rem;
  }
}

/* Mobile 320px */
@media (max-width: 380px) {
  .hero {
    padding: 80px 1rem 40px;
  }
  
  .hero h1 {
    font-size: 1.75rem;
  }
  
  .hero-description {
    font-size: 0.9rem;
    margin-bottom: var(--spacing-xl);
  }
  
  .hero-badge {
    padding: 8px 14px;
    font-size: 0.75rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .hero-buttons a {
    width: 100%;
    justify-content: center;
  }
  
  .hero-stats {
    gap: var(--spacing-lg);
  }
  
  .stat-item {
    min-width: 70px;
  }
  
  .stat-value {
    font-size: 1.25rem;
  }
  
  .stat-label {
    font-size: 0.75rem;
  }
  
  .features,
  .services-preview {
    padding: var(--spacing-2xl) 0;
  }
  
  .section-header {
    margin-bottom: var(--spacing-2xl);
  }
  
  .section-header h2 {
    font-size: 1.5rem;
  }
  
  .section-header p {
    font-size: 0.9rem;
  }
  
  .feature-card,
  .service-card {
    padding: var(--spacing-lg);
  }
  
  .feature-icon,
  .service-icon {
    width: 60px;
    height: 60px;
  }
  
  .feature-icon svg,
  .service-icon svg {
    width: 30px;
    height: 30px;
  }
  
  .feature-card h3,
  .service-card h3 {
    font-size: 1.125rem;
  }
  
  .feature-card p,
  .service-card p {
    font-size: 0.875rem;
  }
}
</style>
