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
          <div class="hero-buttons">
            <NuxtLink to="/#contact" class="btn-primary">
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
  title: 'Веб Промоушн - Цифровые решения для вашего бизнеса'
})

useHead({
  title: 'Веб Промоушн - Цифровые решения для вашего бизнеса',
  meta: [
    { name: 'description', content: 'Создаём современные веб-сайты, мобильные приложения и цифровые продукты. Полный спектр услуг для вашего бизнеса.' },
    { name: 'keywords', content: 'веб-разработка, мобильные приложения, дизайн, SEO, цифровые решения' },
    { property: 'og:title', content: 'Веб Промоушн - Цифровые решения для вашего бизнеса' },
    { property: 'og:description', content: 'Создаём современные веб-сайты и мобильные приложения' },
    { property: 'og:type', content: 'website' }
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
  bottom: 20px;
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
