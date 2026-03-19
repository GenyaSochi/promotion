<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>О компании</h3>
        <p>Мы создаём качественные цифровые решения для вашего бизнеса.</p>
      </div>
      <div class="footer-section">
        <h3>Навигация</h3>
        <ul>
          <li><NuxtLink to="/">Главная</NuxtLink></li>
          <li><NuxtLink to="/about">О нас</NuxtLink></li>
          <li><NuxtLink to="/services">Услуги</NuxtLink></li>
          <li><NuxtLink to="/contact">Контакты</NuxtLink></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Контакты</h3>
        <ul>
          <li>email@example.com</li>
          <li>+7 (999) 000-00-00</li>
          <li>г. Москва, ул. Примерная, 1</li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Мы в соцсетях</h3>
        <div class="social-links">
          <a href="#" class="social-link">Telegram</a>
          <a href="#" class="social-link">VK</a>
          <a href="#" class="social-link">YouTube</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} My Nuxt App. Все права защищены.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #fff;
  padding: 3rem 1.5rem 1rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #00DC82;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 0.5rem;
  color: #ccc;
}

.footer-section a {
  color: #ccc;
  transition: color 0.2s ease;
}

.footer-section a:hover {
  color: #00DC82;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-link {
  color: #ccc;
  transition: color 0.2s ease;
}

.social-link:hover {
  color: #00DC82;
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid #333;
  text-align: center;
  color: #888;
}
</style>
