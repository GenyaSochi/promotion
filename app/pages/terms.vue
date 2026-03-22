<template>
  <div class="terms-page">
    <div class="container">
      <div class="terms-content">
        <h1>Условия использования</h1>
        <p class="terms-date">Последнее обновление: {{ currentDate }}</p>

        <section class="terms-section">
          <h2>1. Принятие условий</h2>
          <p>
            Используя данный веб-сайт и наши услуги, вы соглашаетесь с настоящими 
            условиями использования. Если вы не согласны с этими условиями, 
            пожалуйста, не используйте наш сайт.
          </p>
        </section>

        <section class="terms-section">
          <h2>2. Описание услуг</h2>
          <p>
            Мы предоставляем услуги по разработке веб-сайтов, мобильных приложений 
            и цифровых решений. Детали конкретных услуг обсуждаются индивидуально 
            с каждым клиентом.
          </p>
        </section>

        <section class="terms-section">
          <h2>3. Интеллектуальная собственность</h2>
          <p>
            Все материалы, размещённые на этом сайте, включая тексты, изображения, 
            логотипы и дизайн, являются нашей собственностью или используются нами 
            на законных основаниях.
          </p>
          <p>
            Копирование, распространение или использование материалов без нашего 
            письменного разрешения запрещено.
          </p>
        </section>

        <section class="terms-section">
          <h2>4. Обязанности пользователя</h2>
          <p>При использовании нашего сайта вы обязуетесь:</p>
          <ul>
            <li>Предоставлять достоверную информацию</li>
            <li>Не нарушать работу сайта</li>
            <li>Не использовать сайт в незаконных целях</li>
            <li>Соблюдать авторские права</li>
          </ul>
        </section>

        <section class="terms-section">
          <h2>5. Ограничение ответственности</h2>
          <p>
            Мы не несём ответственности за любые прямые, косвенные или случайные 
            убытки, возникшие в результате использования или невозможности использования 
            нашего сайта и услуг.
          </p>
          <p>
            Мы не гарантируем бесперебойную работу сайта и оставляем за собой право 
            вносить изменения в любое время без предварительного уведомления.
          </p>
        </section>

        <section class="terms-section">
          <h2>6. Ссылки на сторонние ресурсы</h2>
          <p>
            Наш сайт может содержать ссылки на сторонние веб-сайты. Мы не контролируем 
            эти ресурсы и не несём ответственности за их содержание или политику 
            конфиденциальности.
          </p>
        </section>

        <section class="terms-section">
          <h2>7. Изменение условий</h2>
          <p>
            Мы оставляем за собой право изменять настоящие условия использования в 
            любое время. Актуальная версия всегда доступна на этой странице.
          </p>
        </section>

        <section class="terms-section">
          <h2>8. Расторжение</h2>
          <p>
            Мы оставляем за собой право прекратить или ограничить доступ к сайту и 
            услугам в случае нарушения вами данных условий использования.
          </p>
        </section>

        <section class="terms-section">
          <h2>9. Применимое право</h2>
          <p>
            Настоящие условия регулируются законодательством Российской Федерации. 
            Все споры и разногласия разрешаются в соответствии с действующим 
            законодательством РФ.
          </p>
        </section>

        <section class="terms-section">
          <h2>10. Контакты</h2>
          <p>
            По вопросам, связанным с условиями использования, обращайтесь по адресу: 
            <a href="mailto:promotion.w@yandex.ru">promotion.w@yandex.ru</a>
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentDate = new Date().toLocaleDateString('ru-RU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

definePageMeta({
  title: 'Условия использования'
})

useHead({
  title: 'Условия использования - Веб Промоушн',
  meta: [
    { name: 'description', content: 'Условия использования услуг компании Веб Промоушн' }
  ]
})
</script>

<style scoped>
.terms-page {
  min-height: 100vh;
  padding: var(--spacing-4xl) 0;
  position: relative;
}

.terms-content {
  max-width: 800px;
  margin: 0 auto;
}

.terms-content h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.02em;
}

.terms-date {
  color: var(--color-text-muted);
  font-size: 0.9375rem;
  margin-bottom: var(--spacing-3xl);
}

.terms-section {
  margin-bottom: var(--spacing-2xl);
}

.terms-section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.01em;
}

.terms-section p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
}

.terms-section ul {
  list-style: none;
  padding-left: 0;
}

.terms-section li {
  color: var(--color-text-secondary);
  line-height: 1.8;
  padding-left: var(--spacing-lg);
  position: relative;
  margin-bottom: var(--spacing-sm);
}

.terms-section li::before {
  content: '•';
  color: var(--color-primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.terms-section a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.terms-section a:hover {
  color: var(--color-primary-light);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .terms-page {
    padding: var(--spacing-2xl) 0;
  }

  .terms-content {
    padding: 0 var(--spacing-md);
  }
}
</style>
