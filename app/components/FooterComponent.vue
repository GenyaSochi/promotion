<template>
  <footer class="footer">
    <div class="footer-glow"></div>
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-logo">
            <span class="logo-icon">✦</span>
            <span class="logo-text">Веб Промоушн</span>
          </NuxtLink>
          <p class="footer-tagline">
            Создаём цифровые решения, которые помогают бизнесу расти и развиваться
          </p>
          <div class="footer-social">
            <a href="#" class="social-btn" aria-label="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </a>
            <a href="#" class="social-btn" aria-label="VK">
              <span style="font-weight: 800; font-size: 13px; font-family: sans-serif;">VK</span>
            </a>
            <a href="#" class="social-btn" aria-label="Max">
              <span style="font-weight: 800; font-size: 13px; font-family: sans-serif;">M</span>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>Навигация</h4>
            <ul>
              <li><a href="/#hero">Главная</a></li>
              <li><a href="/#about">О нас</a></li>
              <li><a href="/#services">Услуги</a></li>
              <li><a href="/#contact">Контакты</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Контакты</h4>
            <ul>
              <li>
                <a href="mailto:hello@promotion.ru">promotion.w@yandex.ru</a>
              </li>
              <li>
                <a href="tel:+79990000000">+7 (999) 000-00-00</a>
              </li>
              <li>Сочи</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Веб Промоушн. Все права защищены.</p>
        <div class="footer-legal">
          <NuxtLink to="/privacy">Политика конфиденциальности</NuxtLink>
          <NuxtLink to="/terms">Условия использования</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-4xl) 0 var(--spacing-xl);
  position: relative;
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
  background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, transparent 70%); /* Фоллбэк */
  pointer-events: none;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-4xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid var(--color-border);
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
  margin-bottom: var(--spacing-md);
}

.footer-logo .logo-icon {
  color: var(--color-primary);
  text-shadow: 0 0 20px var(--color-primary-glow);
}

.footer-logo .logo-text {
  background: linear-gradient(135deg, #fff 0%, #a1a1aa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
  max-width: 320px;
}

.footer-social {
  display: flex;
  gap: var(--spacing-sm);
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-bg);
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow-primary);
}

.footer-links {
  display: flex;
  gap: var(--spacing-3xl);
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: var(--spacing-lg);
}

.footer-column ul {
  list-style: none;
}

.footer-column li {
  margin-bottom: var(--spacing-sm);
}

.footer-column a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color 0.2s ease;
}

.footer-column a:hover {
  color: var(--color-primary);
}

.footer-column li:not(a) {
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-xl);
}

.footer-bottom p {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.footer-legal {
  display: flex;
  gap: var(--spacing-lg);
}

.footer-legal a {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-legal a:hover {
  color: var(--color-text-secondary);
}

@media (max-width: 900px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .footer-links {
    flex-wrap: wrap;
    gap: var(--spacing-2xl);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-3xl) 0 var(--spacing-lg);
  }

  .footer-column {
    text-align: center;
  }

  .footer-tagline {
    max-width: 100%;
  }

  .footer-social {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 1rem;
  }

  .footer-logo {
    font-size: 1.25rem;
  }

  .footer-logo .logo-text {
    display: none;
  }

  .footer-main {
    gap: var(--spacing-xl);
  }

  .footer-links {
    gap: var(--spacing-xl);
  }

  .footer-column h4 {
    font-size: 0.9375rem;
  }

  .footer-column a,
  .footer-column li:not(a) {
    font-size: 0.875rem;
  }

  .social-btn {
    width: 40px;
    height: 40px;
  }

  .footer-legal {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .footer-legal a {
    font-size: 0.8125rem;
  }
}
</style>
