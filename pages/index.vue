<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
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
          <div class="hero-buttons">
            <NuxtLink to="/contact" class="btn-primary">
              Начать проект
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </NuxtLink>
            <NuxtLink to="/services" class="btn-secondary">
              Наши услуги
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
        <span>Scroll</span>
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
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="services-preview">
      <div class="container">
        <div class="section-header">
          <h2>Наши услуги</h2>
          <p>Полный спектр цифровых решений</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="service in servicesPreview" :key="service.id">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <NuxtLink :to="service.link" class="service-link">
              Подробнее <span class="arrow">→</span>
            </NuxtLink>
          </div>
        </div>
        <div class="section-footer">
          <NuxtLink to="/services" class="btn-outline">Все услуги</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Готовы обсудить проект?</h2>
          <p>Свяжитесь с нами, и мы найдём лучшее решение для вашего бизнеса</p>
          <NuxtLink to="/contact" class="btn-primary btn-large">
            Обсудить проект
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Feature {
  id: number
  icon: string
  title: string
  description: string
}

interface Service {
  id: number
  icon: string
  title: string
  description: string
  link: string
}

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '150+', label: 'Проектов' },
  { value: '8 лет', label: 'Опыта' },
  { value: '95%', label: 'Клиентов' },
  { value: '24/7', label: 'Поддержка' }
]

const features: Feature[] = [
  {
    id: 1,
    icon: '⚡',
    title: 'Быстро',
    description: 'Соблюдаем сроки и оперативно реагируем на изменения'
  },
  {
    id: 2,
    icon: '🎯',
    title: 'Качественно',
    description: 'Используем современные технологии и лучшие практики'
  },
  {
    id: 3,
    icon: '🤝',
    title: 'Надёжно',
    description: 'Гарантируем поддержку и стабильную работу проектов'
  },
  {
    id: 4,
    icon: '💡',
    title: 'Инновационно',
    description: 'Внедряем передовые решения для максимальной эффективности'
  }
]

const servicesPreview: Service[] = [
  {
    id: 1,
    icon: '🌐',
    title: 'Веб-разработка',
    description: 'Современные сайты и веб-приложения',
    link: '/services'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Мобильные приложения',
    description: 'Нативные и кроссплатформенные решения',
    link: '/services'
  },
  {
    id: 3,
    icon: '🎨',
    title: 'UI/UX Дизайн',
    description: 'Удобные и красивые интерфейсы',
    link: '/services'
  },
  {
    id: 4,
    icon: '📈',
    title: 'SEO и Маркетинг',
    description: 'Продвижение вашего бизнеса',
    link: '/services'
  }
]

definePageMeta({
  title: 'Promotion - Цифровые решения для вашего бизнеса'
})

useHead({
  title: 'Promotion - Цифровые решения для вашего бизнеса',
  meta: [
    { name: 'description', content: 'Создаём современные веб-сайты, мобильные приложения и цифровые продукты. Полный спектр услуг для вашего бизнеса.' },
    { name: 'keywords', content: 'веб-разработка, мобильные приложения, дизайн, SEO, цифровые решения' },
    { property: 'og:title', content: 'Promotion - Цифровые решения для вашего бизнеса' },
    { property: 'og:description', content: 'Создаём современные веб-сайты и мобильные приложения' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
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
  bottom: -150px;
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
  z-index: 1;
  max-width: 900px;
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
}

.hero-description {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-2xl);
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
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
  bottom: 40px;
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

/* Services Preview */
.services-preview {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
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
}
</style>
