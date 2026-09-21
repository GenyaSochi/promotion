<template>
  <div v-if="service" class="web-page">
    <!-- Background glows -->
    <div class="web-bg">
      <div class="web-glow web-glow-1"></div>
      <div class="web-glow web-glow-2"></div>
      <div class="web-glow web-glow-3"></div>
    </div>

    <section class="web-hero">
      <div class="container">
        <div class="web-hero-content">
          <div class="web-hero-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h1 class="web-title">
            <span class="gradient-text">Веб-разработка</span>
          </h1>
          <p class="web-description">{{ service.description }}</p>
          <div class="web-back-link">
            <NuxtLink to="/services">← Все услуги</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="web-content">
      <div class="container">
        <div class="web-hook">
          <h2 class="web-hook-title">
            <span class="gradient-text">Что входит в услугу</span>
          </h2>
          <p class="web-hook-description">Полный цикл создания сайта — от идеи до запуска и поддержки</p>
        </div>

        <div class="web-features-grid">
          <div
            class="web-feature-card"
            v-for="(feature, index) in service.features"
            :key="feature"
            :style="{ '--delay': `${index * 100}ms` }"
          >
            <div class="web-feature-card-glow"></div>
            <div class="web-feature-number">
              <span class="gradient-text">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <p class="web-feature-text">{{ feature }}</p>
          </div>
        </div>

        <div class="web-cta-section">
          <div class="web-cta-card">
            <div class="web-cta-card-glow"></div>
            <h3 class="web-cta-title">
              <span class="gradient-text">Готовы начать?</span>
            </h3>
            <p class="web-cta-description">Обсудим ваш проект и предложим лучшее решение</p>
            <NuxtLink to="/#contact" class="web-btn-primary">
              Обсудить проект
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="web-page">
    <section class="web-hero">
      <div class="container">
        <div class="web-hero-content">
          <h1 class="web-title">Веб-разработка</h1>
          <p class="web-description">Страница временно недоступна</p>
          <NuxtLink to="/services" class="web-btn-primary">Все услуги</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getServiceBySlug } from '~/data/services'

const service = getServiceBySlug('web-development')

definePageMeta({
  title: 'Веб-разработка - AppWeb'
})

useHead({
  title: 'Веб-разработка - AppWeb',
  meta: [
    { name: 'description', content: service?.description ?? 'Создаём современные, быстрые и адаптивные веб-сайты' }
  ]
})
</script>

<style scoped>
.web-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Background glows */
.web-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.web-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.5;
}

.web-glow-1 {
  width: 600px;
  height: 600px;
  background: rgba(0, 220, 130, 0.12);
  top: -200px;
  right: -100px;
  animation: web-float 8s ease-in-out infinite;
}

.web-glow-2 {
  width: 500px;
  height: 500px;
  background: rgba(139, 92, 246, 0.1);
  bottom: 40px;
  left: -100px;
  animation: web-float 10s ease-in-out infinite reverse;
}

.web-glow-3 {
  width: 400px;
  height: 400px;
  background: rgba(236, 72, 153, 0.08);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: web-pulse 6s ease-in-out infinite;
}

@keyframes web-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes web-pulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

/* Hero */
.web-hero {
  position: relative;
  z-index: 1;
  padding: 160px 1.5rem 60px;
  text-align: center;
}

.web-hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.web-hero-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  transition: all var(--transition-normal);
}

.web-hero-icon:hover {
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.2), rgba(139, 92, 246, 0.2));
  transform: scale(1.05);
  box-shadow: 0 0 24px var(--color-primary-glow);
}

.web-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-md);
  color: #ffffff;
}

.web-title .gradient-text {
  display: inline-block;
  text-shadow: 0 0 40px var(--color-primary-glow);
}

.web-description {
  font-size: 1.25rem;
  color: #cccccc;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto var(--spacing-lg);
}

.web-back-link {
  margin-top: var(--spacing-md);
}

.web-back-link a {
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color var(--transition-fast);
}

.web-back-link a:hover {
  color: var(--color-primary);
}

/* Content */
.web-content {
  position: relative;
  z-index: 1;
  padding: var(--spacing-2xl) 0 var(--spacing-4xl);
}

/* Hook section */
.web-hook {
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
  text-align: center;
}

.web-hook-title {
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-md);
}

.web-hook-title .gradient-text {
  display: inline-block;
  text-shadow: 0 0 40px var(--color-primary-glow);
}

.web-hook-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* Features grid */
.web-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  max-width: 900px;
  margin: 0 auto var(--spacing-4xl);
}

.web-feature-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  overflow: hidden;
  transition: background var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}

.web-feature-card::before {
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
  animation: web-gradient-rotate 6s linear infinite;
  opacity: 0.4;
  pointer-events: none;
}

.web-feature-card:hover::before {
  opacity: 0.8;
}

.web-feature-card:hover {
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
}

.web-feature-card-glow {
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: var(--color-primary);
  filter: blur(80px);
  opacity: 0.1;
  pointer-events: none;
}

.web-feature-number {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
  flex-shrink: 0;
  opacity: 0.85;
}

.web-feature-number .gradient-text {
  display: inline-block;
  text-shadow: 0 0 20px var(--color-primary-glow);
}

.web-feature-text {
  color: var(--color-text-secondary);
  font-size: 1.0625rem;
  line-height: 1.6;
  margin: 0;
}

@keyframes web-gradient-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* CTA */
.web-cta-section {
  display: flex;
  justify-content: center;
}

.web-cta-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: var(--spacing-3xl) var(--spacing-4xl);
  text-align: center;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  transition: background var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal);
}

.web-cta-card::before {
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
  animation: web-gradient-rotate 6s linear infinite;
  opacity: 0.4;
  pointer-events: none;
}

.web-cta-card:hover::before {
  opacity: 0.8;
}

.web-cta-card:hover {
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
}

.web-cta-card-glow {
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: var(--color-primary);
  filter: blur(80px);
  opacity: 0.12;
  pointer-events: none;
}

.web-cta-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  margin-bottom: var(--spacing-sm);
  position: relative;
  z-index: 1;
}

.web-cta-title .gradient-text {
  display: inline-block;
  text-shadow: 0 0 30px var(--color-primary-glow);
}

.web-cta-description {
  color: var(--color-text-secondary);
  font-size: 1.0625rem;
  margin-bottom: var(--spacing-xl);
  position: relative;
  z-index: 1;
}

.web-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: linear-gradient(135deg, var(--color-primary), #00b36b);
  color: var(--color-bg);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all var(--transition-normal);
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.3);
  position: relative;
  z-index: 1;
}

.web-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 220, 130, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .web-hero {
    padding: 120px 1rem 40px;
  }

  .web-title {
    font-size: clamp(2rem, 5vw, 2.5rem);
  }

  .web-features-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .web-cta-card {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }
}

@media (max-width: 380px) {
  .web-hero {
    padding: 100px 1rem 30px;
  }

  .web-title {
    font-size: 1.75rem;
  }

  .web-description {
    font-size: 1rem;
  }

  .web-hook-title {
    font-size: 1.5rem;
  }

  .web-feature-card {
    padding: var(--spacing-lg);
  }

  .web-feature-number {
    font-size: 1.5rem;
  }

  .web-feature-text {
    font-size: 0.9375rem;
  }

  .web-cta-card {
    padding: var(--spacing-xl) var(--spacing-lg);
  }
}
</style>
