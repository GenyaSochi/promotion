<template>
  <div class="about-page">
    <section id="about" class="hero">
      <div class="container">
        <h1>О нас</h1>
        <p class="subtitle">Мы создаём цифровые решения, которые помогают бизнесу расти</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Наша миссия</h2>
            <p>
              Мы стремимся предоставлять инновационные цифровые решения, которые помогают 
              компаниям достигать своих целей и превосходить ожидания клиентов.
            </p>
            <p>
              Наша команда состоит из опытных разработчиков, дизайнеров и маркетологов, 
              которые любят своё дело и постоянно совершенствуют свои навыки.
            </p>
          </div>
          <div class="about-stats">
            <div class="stat-card">
              <span class="stat-number">5+</span>
              <span class="stat-label">Лет опыта</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">100+</span>
              <span class="stat-label">Проектов</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">50+</span>
              <span class="stat-label">Клиентов</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">365</span>
              <span class="stat-label">Поддержка</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values">
      <div class="container">
        <h2>Наши ценности</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="gradient-border"></div>
            <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>Качество</h3>
            <p>Мы не идём на компромиссы, когда дело касается качества кода и дизайна</p>
          </div>
          <div class="value-card">
            <div class="gradient-border"></div>
            <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a1 1 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Доверие</h3>
            <p>Строим долгосрочные отношения с клиентами на основе честности и прозрачности</p>
          </div>
          <div class="value-card">
            <div class="gradient-border"></div>
            <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </div>
            <h3>Инновации</h3>
            <p>Постоянно изучаем и внедряем новые технологии для лучших результатов</p>
          </div>
          <div class="value-card">
            <div class="gradient-border"></div>
            <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3>Скорость</h3>
            <p>Ценим время клиентов и соблюдаем все сроки</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'О нас - Веб Промоушн',
  meta: [
    { name: 'description', content: 'Узнайте больше о нашей компании, миссии и ценностях' }
  ]
})
</script>

<style scoped>
.about-page {
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

.about-content {
  padding: 5rem 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
}

.about-text p {
  margin-bottom: var(--spacing-md);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.stat-card {
  background: var(--color-bg-card);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  border: 1px solid var(--color-border);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  background: var(--color-bg-card-hover);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.values {
  background: var(--color-bg-secondary);
  padding: 5rem 0;
}

.values h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.value-card {
  background: var(--color-bg-card);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  border: 1px solid var(--color-border);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.value-card .gradient-border {
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

.value-card:hover .gradient-border {
  opacity: 1;
}

.value-card:hover {
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

.value-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-md);
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.1), rgba(139, 92, 246, 0.1));
  border-radius: var(--radius-xl);
  color: var(--color-primary);
  transition: all var(--transition-normal);
}

.value-card:hover .value-icon {
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.2), rgba(139, 92, 246, 0.2));
  color: var(--color-primary-light);
  transform: scale(1.05);
}

.value-icon svg {
  width: 40px;
  height: 40px;
}

.value-card h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.value-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-stats {
    grid-template-columns: 1fr 1fr;
  }

  .values-grid {
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

  .about-content {
    padding: 3rem 0;
  }

  .about-text h2 {
    font-size: 1.5rem;
  }

  .about-text p {
    font-size: 0.9375rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .stat-card {
    padding: var(--spacing-lg);
  }

  .stat-number {
    font-size: 2rem;
  }

  .values {
    padding: 3rem 0;
  }

  .values h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .value-card {
    padding: var(--spacing-lg);
  }

  .value-icon {
    width: 60px;
    height: 60px;
  }

  .value-icon svg {
    width: 32px;
    height: 32px;
  }

  .value-card h3 {
    font-size: 1.125rem;
  }

  .value-card p {
    font-size: 0.9375rem;
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

  .about-content {
    padding: 2.5rem 0;
  }

  .about-text h2 {
    font-size: 1.25rem;
  }

  .about-text p {
    font-size: 0.875rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .stat-card {
    padding: var(--spacing-md);
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .stat-label {
    font-size: 0.8125rem;
  }

  .values {
    padding: 2.5rem 0;
  }

  .values h2 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .value-card {
    padding: var(--spacing-md);
  }

  .value-icon {
    width: 50px;
    height: 50px;
  }

  .value-icon svg {
    width: 28px;
    height: 28px;
  }

  .value-card h3 {
    font-size: 1rem;
  }

  .value-card p {
    font-size: 0.875rem;
  }
}

@media (max-width: 320px) {
  .hero h1 {
    font-size: 1.25rem;
  }

  .hero .subtitle {
    font-size: 0.875rem;
  }

  .about-text h2 {
    font-size: 1.125rem;
  }

  .about-text p {
    font-size: 0.8125rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .values h2 {
    font-size: 1.125rem;
  }

  .value-icon {
    width: 45px;
    height: 45px;
  }

  .value-icon svg {
    width: 24px;
    height: 24px;
  }

  .value-card h3 {
    font-size: 0.9375rem;
  }

  .value-card p {
    font-size: 0.8125rem;
  }
}
</style>
