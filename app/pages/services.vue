<template>
  <div class="services-page">
    <section id="services" class="hero">
      <div class="container">
        <h1>Наши услуги</h1>
        <p class="subtitle">Полный спектр цифровых решений для вашего бизнеса</p>
      </div>
    </section>

    <section class="services-content">
      <div class="container">
        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <div class="gradient-border"></div>
            <div class="service-icon">
              <svg v-if="service.iconName === 'code'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              <svg v-else-if="service.iconName === 'smartphone'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              <svg v-else-if="service.iconName === 'palette'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
              <svg v-else-if="service.iconName === 'trending-up'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              <svg v-else-if="service.iconName === 'wrench'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              <svg v-else-if="service.iconName === 'lightbulb'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </div>
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
            <NuxtLink to="/contact" class="service-link">
              Заказать
              <span class="arrow">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>Готовы начать проект?</h2>
        <p>Свяжитесь с нами, и мы обсудим ваши задачи</p>
        <NuxtLink to="/contact" class="btn-primary">Обсудить проект</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Service {
  id: number
  title: string
  description: string
  iconName: string
  features: string[]
}

const services: Service[] = [
  {
    id: 1,
    title: 'Веб-разработка',
    description: 'Создаём современные, быстрые и адаптивные веб-сайты',
    iconName: 'code',
    features: [
      'Landing Page и многостраничные сайты',
      'Интернет-магазины',
      'Корпоративные порталы',
      'Адаптивный дизайн'
    ]
  },
  {
    id: 2,
    title: 'Мобильные приложения',
    description: 'Разрабатываем нативные и кроссплатформенные приложения',
    iconName: 'smartphone',
    features: [
      'iOS и Android приложения',
      'Кроссплатформенная разработка',
      'Интеграция с API',
      'Публикация в сторах'
    ]
  },
  {
    id: 3,
    title: 'UI/UX Дизайн',
    description: 'Проектируем удобные и красивые интерфейсы',
    iconName: 'palette',
    features: [
      'Исследование пользователей',
      'Прототипирование',
      'Визуальный дизайн',
      'Дизайн-системы'
    ]
  },
  {
    id: 4,
    title: 'SEO и Маркетинг',
    description: 'Продвигаем ваш бизнес в поисковых системах',
    iconName: 'trending-up',
    features: [
      'Техническая оптимизация',
      'Контент-стратегия',
      'Контекстная реклама',
      'Аналитика и отчётность'
    ]
  },
  {
    id: 5,
    title: 'Техническая поддержка',
    description: 'Обеспечиваем стабильную работу ваших проектов',
    iconName: 'wrench',
    features: [
      'Мониторинг',
      'Обновления и патчи',
      'Резервное копирование',
      'Консультации'
    ]
  },
  {
    id: 6,
    title: 'Консалтинг',
    description: 'Помогаем выбрать оптимальные технологические решения',
    iconName: 'lightbulb',
    features: [
      'Аудит текущих систем',
      'Технологический консалтинг',
      'Оптимизация процессов',
      'Обучение команды'
    ]
  }
]

definePageMeta({
  title: 'Услуги - Веб Промоушн'
})

useHead({
  title: 'Услуги - Веб Промоушн',
  meta: [
    { name: 'description', content: 'Полный спектр цифровых услуг: веб-разработка, мобильные приложения, дизайн, SEO' }
  ]
})
</script>

<style scoped>
.services-page {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-tertiary) 100%);
  color: var(--color-text);
  padding: 5rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: var(--color-primary);
}

.hero .subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.services-content {
  padding: 5rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-xl);
}

.service-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.service-card .gradient-border {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
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
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl), var(--shadow-glow-primary);
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

.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: var(--spacing-md);
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

.service-card h2 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.service-card > p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.service-features {
  margin-bottom: var(--spacing-lg);
}

.service-features li {
  padding: var(--spacing-xs) 0;
  color: var(--color-text-secondary);
  padding-left: 1.5rem;
  position: relative;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-primary);
  font-weight: 600;
  transition: gap var(--transition-fast);
}

.service-link:hover {
  gap: var(--spacing-sm);
}

.arrow {
  transition: transform var(--transition-fast);
}

.service-link:hover .arrow {
  transform: translateX(5px);
}

.cta {
  background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-tertiary) 100%);
  color: var(--color-text);
  padding: 5rem 0;
  text-align: center;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.cta p {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xl);
  color: var(--color-text-secondary);
}

.btn-primary {
  display: inline-block;
  background: linear-gradient(135deg, var(--color-primary), #00b36b);
  color: var(--color-bg);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-full);
  font-weight: 600;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow-primary);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 3rem 0;
  }

  .hero h1 {
    font-size: 1.75rem;
  }

  .hero .subtitle {
    font-size: 1rem;
  }

  .services-content {
    padding: 3rem 0;
  }

  .service-card {
    padding: var(--spacing-lg);
  }

  .service-icon {
    width: 60px;
    height: 60px;
  }

  .service-icon svg {
    width: 32px;
    height: 32px;
  }

  .service-card h2 {
    font-size: 1.25rem;
  }

  .service-card > p {
    font-size: 0.9375rem;
  }

  .service-features li {
    font-size: 0.875rem;
  }

  .cta {
    padding: 3rem 0;
  }

  .cta h2 {
    font-size: 1.5rem;
  }

  .cta p {
    font-size: 1rem;
  }

  .btn-primary {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 2.5rem 0;
  }

  .hero h1 {
    font-size: 1.5rem;
  }

  .hero .subtitle {
    font-size: 0.9375rem;
  }

  .services-content {
    padding: 2.5rem 0;
  }

  .service-card {
    padding: var(--spacing-md);
  }

  .service-icon {
    width: 50px;
    height: 50px;
  }

  .service-icon svg {
    width: 28px;
    height: 28px;
  }

  .service-card h2 {
    font-size: 1.125rem;
  }

  .service-card > p {
    font-size: 0.875rem;
  }

  .service-features li {
    font-size: 0.8125rem;
    padding-left: 1.25rem;
  }

  .service-features li::before {
    font-size: 0.875rem;
  }

  .cta {
    padding: 2.5rem 0;
  }

  .cta h2 {
    font-size: 1.25rem;
  }

  .cta p {
    font-size: 0.9375rem;
  }

  .btn-primary {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: 0.9375rem;
  }
}

@media (max-width: 320px) {
  .hero h1 {
    font-size: 1.25rem;
  }

  .hero .subtitle {
    font-size: 0.875rem;
  }

  .service-card {
    padding: var(--spacing-sm);
  }

  .service-icon {
    width: 45px;
    height: 45px;
  }

  .service-icon svg {
    width: 24px;
    height: 24px;
  }

  .service-card h2 {
    font-size: 1rem;
  }

  .service-card > p {
    font-size: 0.8125rem;
  }

  .service-features li {
    font-size: 0.75rem;
    padding-left: 1.125rem;
  }

  .cta {
    padding: 2rem 0;
  }

  .cta h2 {
    font-size: 1.125rem;
  }

  .cta p {
    font-size: 0.875rem;
  }

  .btn-primary {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.875rem;
  }
}
</style>
