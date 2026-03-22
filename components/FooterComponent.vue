<template>
  <footer class="footer">
    <div class="footer-glow"></div>
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-logo">
            <span class="logo-icon">✦</span>
            <span class="logo-text">Promotion</span>
          </NuxtLink>
          <p class="footer-tagline">
            Создаём цифровые решения, которые помогают бизнесу расти и развиваться.
          </p>
          <div class="footer-social">
            <a href="#" class="social-btn" aria-label="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="#" class="social-btn" aria-label="VK">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.07-1.74-1.536-1.545-2.105-1.8-2.474-1.8-.33 0-.66.165-1.05.33l-.855.855c-.735.73-.945.84-1.635.84-.54 0-1.335-.165-2.07-1.05-.735-.945-1.17-1.635-1.17-2.46 0-.69.285-1.365.945-1.905l2.25-2.895c.3-.3.435-.6.435-.99 0-.21-.075-.42-.225-.6-.285-.3-1.035-.495-1.74-.495l-.555.015c-.569.015-.855.03-1.2.3-.36.285-.45.69-.45 1.275v.99c0 .81-.21 1.44-.63 1.89-.42.45-1.005.69-1.755.69-.45 0-.855-.105-1.215-.315-.36-.21-.63-.495-.81-.855-.18-.36-.27-.75-.27-1.17v-.93c0-.63.165-1.14.495-1.53.33-.39.795-.585 1.395-.585l.585.015c.45 0 .855.075 1.215.225.36.15.555.39.585.735.03.3 0 .6-.225.9l-.495.495c-.21.21-.3.39-.3.54 0 .15.075.3.225.45.3.3.66.63 1.05.99.54.51 1.005.99 1.365 1.44.39.45.585.93.585 1.44 0 .66-.255 1.17-.765 1.53-.51.36-1.14.54-1.89.54z"/></svg>
            </a>
            <a href="#" class="social-btn" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>Навигация</h4>
            <ul>
              <li><NuxtLink to="/">Главная</NuxtLink></li>
              <li><NuxtLink to="/about">О нас</NuxtLink></li>
              <li><NuxtLink to="/services">Услуги</NuxtLink></li>
              <li><NuxtLink to="/contact">Контакты</NuxtLink></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Контакты</h4>
            <ul>
              <li>
                <a href="mailto:hello@promotion.ru">hello@promotion.ru</a>
              </li>
              <li>
                <a href="tel:+79990000000">+7 (999) 000-00-00</a>
              </li>
              <li>Москва, ул. Примерная, 1</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Promotion. Все права защищены.</p>
        <div class="footer-legal">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия использования</a>
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
</style>
