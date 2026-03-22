<template>
  <div class="privacy-page">
    <div class="container">
      <div class="privacy-content">
        <h1>Политика конфиденциальности</h1>
        <p class="privacy-date">Последнее обновление: {{ currentDate }}</p>

        <section class="privacy-section">
          <h2>1. Общие положения</h2>
          <p>
            Настоящая политика конфиденциальности описывает, как мы собираем, используем и защищаем 
            вашу личную информацию при использовании нашего веб-сайта и услуг.
          </p>
        </section>

        <section class="privacy-section">
          <h2>2. Сбор информации</h2>
          <p>Мы собираем следующую информацию:</p>
          <ul>
            <li>Контактные данные (имя, email, телефон)</li>
            <li>Информация о компании</li>
            <li>Данные об использовании сайта</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>3. Использование информации</h2>
          <p>Мы используем собранную информацию для:</p>
          <ul>
            <li>Предоставления услуг</li>
            <li>Связи с клиентами</li>
            <li>Улучшения качества обслуживания</li>
            <li>Отправки информационных материалов (с вашего согласия)</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>4. Защита информации</h2>
          <p>
            Мы принимаем все необходимые меры для защиты вашей личной информации от 
            несанкционированного доступа, изменения или уничтожения.
          </p>
        </section>

        <section class="privacy-section">
          <h2>5. Передача информации</h2>
          <p>
            Мы не передаём вашу личную информацию третьим лицам, за исключением случаев, 
            предусмотренных законодательством или с вашего согласия.
          </p>
        </section>

        <section class="privacy-section">
          <h2>6. Ваши права</h2>
          <p>Вы имеете право:</p>
          <ul>
            <li>Получить доступ к своим данным</li>
            <li>Исправить неточную информацию</li>
            <li>Удалить свои данные</li>
            <li>Отозвать согласие на обработку данных</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>7. Контакты</h2>
          <p>
            По вопросам конфиденциальности обращайтесь по адресу: 
            <a href="mailto:privacy@promotion.ru">promotion.w@yandex.ru</a>
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
  title: 'Политика конфиденциальности'
})

useHead({
  title: 'Политика конфиденциальности - Веб Промоушн',
  meta: [
    { name: 'description', content: 'Политика конфиденциальности компании Веб Промоушн' }
  ]
})
</script>

<style scoped>
.privacy-page {
  min-height: 100vh;
  padding: var(--spacing-4xl) 0;
  position: relative;
}

.privacy-content {
  max-width: 800px;
  margin: 0 auto;
}

.privacy-content h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.02em;
}

.privacy-date {
  color: var(--color-text-muted);
  font-size: 0.9375rem;
  margin-bottom: var(--spacing-3xl);
}

.privacy-section {
  margin-bottom: var(--spacing-2xl);
}

.privacy-section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.01em;
}

.privacy-section p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
}

.privacy-section ul {
  list-style: none;
  padding-left: 0;
}

.privacy-section li {
  color: var(--color-text-secondary);
  line-height: 1.8;
  padding-left: var(--spacing-lg);
  position: relative;
  margin-bottom: var(--spacing-sm);
}

.privacy-section li::before {
  content: '•';
  color: var(--color-primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.privacy-section a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.privacy-section a:hover {
  color: var(--color-primary-light);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .privacy-page {
    padding: var(--spacing-2xl) 0;
  }

  .privacy-content {
    padding: 0 var(--spacing-md);
  }
}
</style>
