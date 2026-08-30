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
              начать проект
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </NuxtLink>
            <NuxtLink to="/services" class="btn-secondary">
              НАШИ УСЛУГИ
            </NuxtLink>
            <NuxtLink class="btn-secondary" to="/activity">ДЛЯ КОГО</NuxtLink>
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
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>Почему выбирают нас</h2>
          <p>Мы создаём продукты, которые работают на ваш успех</p>
        </div>
        <div class="features-grid">
          <div class="feature-card" v-for="feature in features" :key="feature.id">
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
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section id="services" class="services-preview">
      <div class="container">
        <div class="section-header">
          <h2>Наши услуги</h2>
          <p>Полный спектр цифровых решений</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="service in servicesPreview" :key="service.id">
            <div class="gradient-border"></div>
            <div class="service-icon">
              <svg v-if="service.iconName === 'code'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              <svg v-else-if="service.iconName === 'smartphone'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              <svg v-else-if="service.iconName === 'palette'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
              <svg v-else-if="service.iconName === 'trending-up'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              <svg v-else-if="service.iconName === 'wrench'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              <svg v-else-if="service.iconName === 'lightbulb'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
        <div class="section-footer">
          <NuxtLink to="/#contact" class="btn-outline">Заказать услугу</NuxtLink>
        </div>
      </div>
    </section>

    <AboutBlock/>

    <ContactBlock/>

    <!-- CTA Section -->
    <section id="contact" class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Заказать проект</h2>
          <p>Свяжитесь с нами, и мы найдём лучшее решение для вашего бизнеса</p>
          <NuxtLink to="/#contact" class="btn-primary btn-large">
            Обсудить проект
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <ContactModal v-model:model-value="isContactModalOpen" />
</template>

<script setup lang="ts">
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
const card2Visible = ref(false)
const pressVisible = ref(false)
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
let pressTimeout: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  const checkHookPosition = () => {
    if (!hookRef.value) return
    // Заголовок «Ваш сайт не приносит ДЕНЬГИ?» доскроллился до хедера
    if (hookRef.value.getBoundingClientRect().top <= 100) {
      if (hookScrollHandler) window.removeEventListener('scroll', hookScrollHandler)
      hookScrollHandler = null
      revealTimeout = setTimeout(() => {
        cardVisible.value = true
        // Вторая карточка появляется через 1.5с после первой
        setTimeout(() => {
          card2Visible.value = true
        }, 1500)
        // Кнопка появляется через 3с после первой карточки (после solution)
        pressTimeout = setTimeout(() => {
          pressVisible.value = true
        }, 3000)
      }, 400)
    }
  }

  hookScrollHandler = () => checkHookPosition()
  window.addEventListener('scroll', hookScrollHandler, { passive: true })
  checkHookPosition()
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
  if (resetTimeout) clearTimeout(resetTimeout)
  if (revealTimeout) clearTimeout(revealTimeout)
  if (pressTimeout) clearTimeout(pressTimeout)
  if (hookScrollHandler) window.removeEventListener('scroll', hookScrollHandler)
})

const stats: Stat[] = [
  { value: '150+', label: 'Проектов' },
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

const servicesPreview: Service[] = [
  {
    id: 1,
    iconName: 'code',
    title: 'Веб-разработка',
    description: 'Создаём современные, быстрые и адаптивные веб-сайты',
    link: '/contact',
    features: [
      'Landing Page',
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


.hero-hook-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
  position: relative;
  z-index: 1;
}

.hero-hook-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
}

.hero-hook-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-4px);
}

.hero-hook-card-text {
  font-size: clamp(0.875rem, 1.3vw, 1rem);
  color: var(--color-text-secondary);
  line-height: 1.7;
  text-align: left;
  margin-bottom: var(--spacing-md);
}

.hero-hook-card-text:last-child {
  margin-bottom: 0;
}

.hero-hook-card-text--solution {
  color: var(--color-text);
  font-weight: 500;
}

.hero-hook-card-text--solution strong {
  color: var(--color-primary);
  font-weight: 700;
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

.hero-diagnosis-card--problem .hero-diagnosis-card-glow {
  background: var(--color-accent-pink);
}

.hero-diagnosis-card--solution .hero-diagnosis-card-glow {
  background: var(--color-accent-cyan);
}

.hero-diagnosis-icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
  position: relative;
  z-index: 1;
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

.hero-diagnosis-card--problem {
  border-color: rgba(236, 72, 153, 0.15);
}

.hero-diagnosis-card--problem:hover {
  border-color: rgba(236, 72, 153, 0.3);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4), 0 0 40px rgba(236, 72, 153, 0.1);
}

.hero-diagnosis-card--solution {
  border-color: rgba(6, 182, 212, 0.15);
}

.hero-diagnosis-card--solution:hover {
  border-color: rgba(6, 182, 212, 0.3);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4), 0 0 40px rgba(6, 182, 212, 0.1);
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

.hero-hook-title .hero-description.gradient-text {
  font-size: clamp(0.9375rem, 1.8vw, 1.25rem);
  line-height: 1.55;
  font-weight: 400;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 0;
  max-width: none;
  letter-spacing: -0.01em;
}

.hero-hook-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.hero-hook-divider svg {
  width: 200px;
  height: 12px;
  overflow: visible;
  filter: drop-shadow(0 0 6px var(--color-primary-glow));
}

.hero-hook-subtitle {
  font-size: clamp(0.9375rem, 1.5vw, 1.125rem);
  font-style: italic;
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 620px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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

/* ── Card 2 slide from left ── */
.card-slide-enter-from {
  opacity: 0;
  transform: translateX(-100vw);
}

.card-slide-enter-active {
  transition: opacity 2s ease-out, transform 2s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* ── Press button slide-in from left (last) ── */
.press-slide-enter-from {
  opacity: 0;
  transform: translateX(-100vw);
}

.press-slide-enter-active {
  transition: opacity 1.4s ease-out, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.press-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.press-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.press-slide-leave-active {
  transition: opacity 0.4s ease-in, transform 0.4s ease-in;
}

.press-slide-leave-to {
  opacity: 0;
  transform: translateX(-100vw);
}

/* ── Solution card styles ── */
.hero-diagnosis-card--solution {
  border-color: transparent;
  background: transparent;
  overflow: visible;
  grid-column: 2;
  align-self: center;
}

.hero-diagnosis-card--solution::before {
  display: none;
}

.hero-diagnosis-card--solution .hero-diagnosis-card-glow {
  display: none;
}

.hero-diagnosis-card--solution:hover {
  border-color: transparent;
  background: transparent;
  box-shadow: none;
  transform: none;
}

.hero-solution-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl) 0;
}

.hero-solution-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(0, 220, 130, 0.15));
  border-radius: var(--radius-xl);
  color: var(--color-accent-cyan);
  animation: rocket-float 3s ease-in-out infinite;
}

@keyframes rocket-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(-3deg); }
}

.hero-solution-icon svg {
  width: 44px;
  height: 44px;
}

.hero-solution-press-block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacing-lg);
  width: 100%;
  grid-column: 3;
  align-self: center;
}

.hero-solution-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 800;
  text-align: center;
  line-height: 1.3;
}

.hero-solution-press {
  --press-size: 220px;
  position: relative;
  flex: 0 0 var(--press-size);
  width: var(--press-size);
  height: var(--press-size);
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  color: #ffffff;
  background: radial-gradient(circle at 30% 30%, #ff0000 0%, #dc2626 55%, #b91c1c 100%);
  box-shadow:
    0 0 40px rgba(255, 0, 0, 0.7),
    0 0 80px rgba(255, 0, 0, 0.5),
    inset 0 -8px 20px rgba(0, 0, 0, 0.3),
    inset 0 6px 14px rgba(255, 255, 255, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  animation: press-pulse 2.4s ease-in-out infinite;
  isolation: isolate;
}

.hero-solution-press-label {
  position: relative;
  z-index: 1;
  font-size: clamp(0.75rem, 1.4vw, 0.9375rem);
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
}

.hero-solution-press:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow:
    0 0 60px rgba(255, 0, 0, 0.9),
    0 0 120px rgba(255, 0, 0, 0.7),
    inset 0 -8px 20px rgba(0, 0, 0, 0.3),
    inset 0 6px 14px rgba(255, 255, 255, 0.3);
}

.hero-solution-press:active {
  transform: translateY(-1px) scale(1.01);
}

@keyframes press-pulse {
  0%, 100% {
    box-shadow:
      0 0 40px rgba(255, 0, 0, 0.7),
      0 0 80px rgba(255, 0, 0, 0.5),
      inset 0 -8px 20px rgba(0, 0, 0, 0.3),
      inset 0 6px 14px rgba(255, 255, 255, 0.25);
  }
  50% {
    box-shadow:
      0 0 55px rgba(255, 0, 0, 0.85),
      0 0 100px rgba(255, 0, 0, 0.65),
      inset 0 -8px 20px rgba(0, 0, 0, 0.3),
      inset 0 6px 14px rgba(255, 255, 255, 0.3);
  }
}

.gradient-text-solution {
  background: linear-gradient(135deg, var(--color-accent-cyan) 0%, var(--color-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-solution-accent {
  color: #ffffff;
  font-size: clamp(1.5rem, 3vw, 2rem);
  text-shadow: 0 0 30px rgba(6, 182, 212, 0.4);
}

.hero-solution-stats {
  display: flex;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-md);
}

.hero-solution-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.hero-solution-stat-value {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 900;
  color: var(--color-primary);
  text-shadow: 0 0 20px var(--color-primary-glow);
  font-variant-numeric: tabular-nums;
}

.hero-solution-stat-label {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}

.hero-solution-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-2xl);
  margin-top: var(--spacing-md);
  background: linear-gradient(135deg, var(--color-accent-cyan) 0%, var(--color-primary) 100%);
  color: #0a0a0f;
  font-weight: 800;
  font-size: clamp(0.9375rem, 1.8vw, 1.125rem);
  letter-spacing: 0.01em;
  border-radius: var(--radius-full);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.35), 0 0 60px rgba(0, 220, 130, 0.2);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.hero-solution-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.hero-solution-cta:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 0 50px rgba(6, 182, 212, 0.6), 0 0 90px rgba(0, 220, 130, 0.35);
  color: #0a0a0f;
}

.hero-solution-cta:hover::before {
  left: 100%;
}

.hero-solution-cta svg {
  transition: transform var(--transition-normal);
}

.hero-solution-cta:hover svg {
  transform: translateX(4px);
}

.hero-solution-cta:active {
  transform: translateY(-1px) scale(1.01);
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

.hero-timer-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.hero-timer-question {
  font-size: 20px;
  color: #ffffff;
  font-weight: 800;
  letter-spacing: -0.01em;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
}

.hero-timer-question-accent {
  font-size: clamp(0.875rem, 1.6vw, 1.0625rem);
  color: #ff4040;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-shadow: 0 0 24px rgba(255, 20, 20, 0.5);
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.hero-timer-question-accent.is-alarm {
  color: #ff2020;
  text-shadow: 0 0 32px rgba(255, 0, 0, 0.8), 0 0 64px rgba(255, 0, 0, 0.4);
  animation: alarm-pulse 0.6s ease-in-out infinite;
}

@keyframes alarm-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.04); }
}

.hero-timer-funfact {
  position: relative;
  font-size: clamp(0.8125rem, 1.4vw, 0.9375rem);
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-top: calc(var(--spacing-sm) * -1);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  letter-spacing: 0.02em;
  overflow: hidden;
}

.hero-timer-funfact::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-full);
  padding: 1px;
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
  animation: gradient-rotate 4s linear infinite;
  opacity: 0.5;
  pointer-events: none;
}

.hero-timer-funfact-num {
  font-size: 1.25em;
  font-weight: 800;
  line-height: 1;
  text-shadow: 0 0 20px var(--color-primary-glow);
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

  .hero-solution-row {
    flex-direction: column;
    gap: var(--spacing-xl);
  }

  .hero-solution-press {
    --press-size: 180px;
    font-size: 1.75rem;
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

  .card-slide-enter-from {
    transform: translateX(-100vw);
  }

  .card-slide-enter-active {
    transition: opacity 1.4s ease-out, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hero-solution-stats {
    gap: var(--spacing-md);
  }

  .hero-solution-stat-value {
    font-size: 1.25rem;
  }
}

@media (max-width: 380px) {
  .hero-timer-ring {
    width: 150px;
    height: 150px;
  }

  .hero-solution-press {
    --press-size: 150px;
    font-size: 1.5rem;
  }

  .hero-timer-digit-main {
    font-size: 2.75rem;
  }

  .hero-timer-question {
    font-size: 0.9375rem;
  }

  .timer-slide-enter-from {
    transform: translateX(100vw);
  }

  .timer-slide-enter-active {
    transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .card-slide-enter-from {
    transform: translateX(-100vw);
  }

  .card-slide-enter-active {
    transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hero-solution-title {
    font-size: 1.125rem;
  }

  .hero-solution-accent {
    font-size: 1.375rem;
  }

  .hero-solution-stats {
    gap: var(--spacing-sm);
  }

  .hero-solution-stat-value {
    font-size: 1rem;
  }

  .hero-solution-stat-label {
    font-size: 0.625rem;
  }

  .hero-solution-cta {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: 0.875rem;
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

  .hero-hook-subtitle {
    font-size: 0.9375rem;
  }

  .hero-hook-cards,
  .hero-diagnosis-cards {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .hero-diagnosis-card--timer,
  .hero-diagnosis-card--solution,
  .hero-solution-press-block {
    grid-column: 1;
  }

  .hero-hook-card,
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

  .hero-hook-subtitle {
    font-size: 0.875rem;
  }

  .hero-hook-card,
  .hero-diagnosis-card {
    padding: var(--spacing-md);
  }

  .hero-hook-card-text {
    font-size: 0.8125rem;
  }

  .hero-diagnosis-icon {
    font-size: 1.5rem;
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
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.service-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.service-card .gradient-border {
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

.service-card:hover .gradient-border {
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl), var(--shadow-glow-primary);
  background: var(--color-bg-card-hover);
}

.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: var(--spacing-lg);
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.1), rgba(139, 92, 246, 0.1));
  border-radius: var(--radius-xl);
  color: var(--color-primary);
  transition: all var(--transition-normal);
}

.service-card:hover .service-icon {
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.2), rgba(139, 92, 246, 0.2));
  color: var(--color-primary-light);
  transform: scale(1.05);
}

.service-icon svg {
  width: 40px;
  height: 40px;
}

.service-card h3 {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.service-card p {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.service-features {
  margin-bottom: var(--spacing-lg);
}

.service-features li {
  padding: var(--spacing-xs) 0;
  color: var(--color-text-secondary);
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.875rem;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
}

.section-footer {
  text-align: center;
  margin-top: var(--spacing-2xl);
}

/* CTA Section */
.cta {
  padding: var(--spacing-4xl) 0;
  position: relative;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.cta h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.02em;
}

.cta p {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
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
  
  .cta h2 {
    font-size: 1.5rem;
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
  .services-preview,
  .cta {
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
  
  .cta h2 {
    font-size: 1.25rem;
  }
  
  .cta p {
    font-size: 0.9rem;
  }
}
</style>
