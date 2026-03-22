<template>
  <div class="services-page">
    <section class="hero">
      <div class="container">
        <h1>Наши услуги</h1>
        <p class="subtitle">Полный спектр цифровых решений для вашего бизнеса</p>
      </div>
    </section>

    <section class="services-content">
      <div class="container">
        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <div class="service-icon">{{ service.icon }}</div>
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
  icon: string
  features: string[]
}

const services: Service[] = [
  {
    id: 1,
    title: 'Веб-разработка',
    description: 'Создаём современные, быстрые и адаптивные веб-сайты',
    icon: '🌐',
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
    icon: '📱',
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
    icon: '🎨',
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
    icon: '📈',
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
    icon: '🔧',
    features: [
      'Мониторинг 24/7',
      'Обновления и патчи',
      'Резервное копирование',
      'Консультации'
    ]
  },
  {
    id: 6,
    title: 'Консалтинг',
    description: 'Помогаем выбрать оптимальные технологические решения',
    icon: '💼',
    features: [
      'Аудит текущих систем',
      'Технологический консалтинг',
      'Оптимизация процессов',
      'Обучение команды'
    ]
  }
]

definePageMeta({
  title: 'Услуги - Promotion'
})

useHead({
  title: 'Услуги - Promotion',
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
  background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-dark-light) 100%);
  color: var(--color-white);
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
}

.hero .subtitle {
  font-size: 1.25rem;
  color: var(--color-text-muted);
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
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
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

.service-card h2 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-dark);
}

.service-card > p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.service-features {
  margin-bottom: var(--spacing-lg);
}

.service-features li {
  padding: var(--spacing-xs) 0;
  color: var(--color-text);
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
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
  padding: 5rem 0;
  text-align: center;
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
}

.cta p {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xl);
  opacity: 0.9;
}

.btn-primary {
  display: inline-block;
  background: var(--color-white);
  color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-full);
  font-weight: 600;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
