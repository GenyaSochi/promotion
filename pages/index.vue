<template>
  <div class="home-page">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
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
            <NuxtLink to="/contact" class="btn-primary">Начать проект</NuxtLink>
            <NuxtLink to="/services" class="btn-secondary">Наши услуги</NuxtLink>
          </div>
        </div>
      </div>
    </section>

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

    <section class="cta">
      <div class="container">
        <h2>Готовы обсудить проект?</h2>
        <p>Свяжитесь с нами, и мы найдём лучшее решение для вашего бизнеса</p>
        <NuxtLink to="/contact" class="btn-primary btn-large">Обсудить проект</NuxtLink>
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
  background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-dark-light) 100%);
  color: var(--color-white);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(0, 220, 130, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--spacing-lg);
}

.gradient-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-block;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 1rem;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--color-white);
  padding: var(--spacing-md) var(--spacing-xl);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 1rem;
  transition: all var(--transition-normal);
}

.btn-secondary:hover {
  background: var(--color-primary);
  transform: translateY(-2px);
}

.btn-large {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: 1.1rem;
}

/* Features Section */
.features {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--color-dark);
  margin-bottom: var(--spacing-md);
}

.section-header p {
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.feature-card {
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.feature-card h3 {
  font-size: 1.25rem;
  color: var(--color-dark);
  margin-bottom: var(--spacing-sm);
}

.feature-card p {
  color: var(--color-text-light);
  line-height: 1.6;
}

/* Services Preview */
.services-preview {
  padding: 5rem 0;
  background: var(--color-light);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

.service-card {
  background: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  border: 1px solid var(--color-border);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.service-card h3 {
  font-size: 1.25rem;
  color: var(--color-dark);
  margin-bottom: var(--spacing-sm);
}

.service-card p {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
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

.service-link .arrow {
  transition: transform var(--transition-fast);
}

.service-link:hover .arrow {
  transform: translateX(5px);
}

.section-footer {
  text-align: center;
  margin-top: 3rem;
}

.btn-outline {
  display: inline-block;
  background: transparent;
  color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-xl);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-full);
  font-weight: 600;
  transition: all var(--transition-normal);
}

.btn-outline:hover {
  background: var(--color-primary);
  color: var(--color-white);
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
  padding: 5rem 0;
  text-align: center;
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.cta p {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xl);
  opacity: 0.9;
}

.cta .btn-primary {
  background: var(--color-white);
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .hero {
    padding: 5rem 0;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-header h2 {
    font-size: 1.75rem;
  }

  .features-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
