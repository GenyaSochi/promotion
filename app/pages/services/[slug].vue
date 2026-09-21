<template>
  <div class="service-detail-page" v-if="service">
    <section class="hero">
      <div class="container">
        <div class="hero-icon">
          <svg v-if="service.iconName === 'code'" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          <svg v-else-if="service.iconName === 'smartphone'" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
          <svg v-else-if="service.iconName === 'palette'" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
          <svg v-else-if="service.iconName === 'trending-up'" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          <svg v-else-if="service.iconName === 'wrench'" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          <svg v-else-if="service.iconName === 'lightbulb'" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
        </div>
        <h1>{{ service.title }}</h1>
        <p class="subtitle">{{ service.description }}</p>
      </div>
    </section>

    <section class="service-content">
      <div class="container">
        <div class="service-detail-grid">
          <div class="service-features-section">
            <h2>Что входит</h2>
            <ul class="service-features-list">
              <li v-for="feature in service.features" :key="feature">
                <span class="feature-check">✓</span>
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="service-cta-section">
            <div class="cta-card">
              <div class="gradient-border"></div>
              <h3>Готовы начать?</h3>
              <p>Обсудим ваш проект и предложим лучшее решение</p>
              <NuxtLink to="/#contact" class="btn-primary">Обсудить проект</NuxtLink>
            </div>
          </div>
        </div>

        <div class="back-link">
          <NuxtLink to="/services">← Все услуги</NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="service-detail-page">
    <section class="hero">
      <div class="container">
        <h1>Услуга не найдена</h1>
        <p class="subtitle">Запрашиваемая услуга не существует</p>
        <NuxtLink to="/services" class="btn-primary">Все услуги</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { services, getServiceBySlug } from '~/data/services'

const route = useRoute()
const service = computed(() => getServiceBySlug(route.params.slug as string))

useHead(() => ({
  title: service.value ? `${service.value.title} - AppWeb` : 'Услуга не найдена - AppWeb',
  meta: [
    { name: 'description', content: service.value?.description ?? '' }
  ]
}))
</script>

<style scoped>
.service-detail-page {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-tertiary) 100%);
  color: var(--color-text);
  padding: 5rem 0;
  text-align: center;
}

.hero-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.1), rgba(139, 92, 246, 0.1));
  border-radius: var(--radius-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
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
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.service-content {
  padding: 5rem 0;
}

.service-detail-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-3xl);
  align-items: start;
  max-width: 1000px;
  margin: 0 auto;
}

.service-features-section h2 {
  font-size: 1.75rem;
  margin-bottom: var(--spacing-xl);
  color: var(--color-text);
}

.service-features-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.service-features-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: 1.0625rem;
  line-height: 1.6;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.service-features-list li:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.feature-check {
  color: var(--color-primary);
  font-weight: 700;
  flex-shrink: 0;
}

.cta-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-card .gradient-border {
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
  opacity: 0;
  transition: opacity var(--transition-normal);
  animation: gradient-rotate 4s linear infinite;
  pointer-events: none;
}

.cta-card:hover .gradient-border {
  opacity: 1;
}

.cta-card h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.cta-card p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
}

.btn-primary {
  display: inline-block;
  background: linear-gradient(135deg, var(--color-primary), #00b36b);
  color: var(--color-bg);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-full);
  font-weight: 600;
  text-decoration: none;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow-primary);
}

.back-link {
  margin-top: var(--spacing-3xl);
}

.back-link a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 1rem;
  transition: color var(--transition-fast);
}

.back-link a:hover {
  color: var(--color-primary);
}

@keyframes gradient-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .service-detail-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .hero-icon {
    width: 80px;
    height: 80px;
  }

  .hero-icon svg {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 380px) {
  .hero {
    padding: 3rem 0;
  }

  .hero h1 {
    font-size: 1.5rem;
  }

  .hero .subtitle {
    font-size: 1rem;
  }

  .service-content {
    padding: 3rem 0;
  }
}
</style>
