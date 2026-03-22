<template>
  <div class="about-page">
    <section class="hero">
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
              <span class="stat-number">24/7</span>
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
            <div class="value-icon">🎯</div>
            <h3>Качество</h3>
            <p>Мы не идём на компромиссы, когда дело касается качества кода и дизайна</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Доверие</h3>
            <p>Строим долгосрочные отношения с клиентами на основе честности и прозрачности</p>
          </div>
          <div class="value-card">
            <div class="value-icon">💡</div>
            <h3>Инновации</h3>
            <p>Постоянно изучаем и внедряем новые технологии для лучших результатов</p>
          </div>
          <div class="value-card">
            <div class="value-icon">⚡</div>
            <h3>Скорость</h3>
            <p>Ценим время клиентов и соблюдаем все сроки</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'О нас - Promotion'
})

useHead({
  title: 'О нас - Promotion',
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
  color: var(--color-dark);
}

.about-text p {
  margin-bottom: var(--spacing-md);
  color: var(--color-text-light);
  line-height: 1.8;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.stat-card {
  background: var(--color-light);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.values {
  background: var(--color-light);
  padding: 5rem 0;
}

.values h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--color-dark);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.value-card {
  background: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.value-card h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-dark);
}

.value-card p {
  color: var(--color-text-light);
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
</style>
