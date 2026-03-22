<template>
  <div class="contact-page">
    <section id="contact" class="hero">
      <div class="container">
        <h1>Контакты</h1>
        <p class="subtitle">Свяжитесь с нами — мы всегда рады помочь</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Как с нами связаться</h2>
            <p class="info-text">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>

            <div class="contact-item" v-for="item in contactItems" :key="item.id">
              <div class="contact-icon">{{ item.icon }}</div>
              <div class="contact-details">
                <h3>{{ item.title }}</h3>
                <a v-if="item.href" :href="item.href" class="contact-link">{{ item.value }}</a>
                <p v-else>{{ item.value }}</p>
              </div>
            </div>

            <div class="social-section">
              <h3>Мы в соцсетях</h3>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="Telegram">
                  <span>Telegram</span>
                </a>
                <a href="#" class="social-link" aria-label="VK">
                  <span>VK</span>
                </a>
                <a href="#" class="social-link" aria-label="Max">
                  <span>Max</span>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <div class="gradient-border"></div>
            <form class="contact-form" @submit.prevent="submitForm">
              <h2>Напишите нам</h2>

              <div class="form-group">
                <label for="name">Ваше имя</label>
                <input
                  id="name"
                  v-model="form.name"
                  name="name"
                  type="text"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  name="email"
                  type="email"
                  placeholder="example@mail.ru"
                  required
                />
              </div>

              <div class="form-group">
                <label for="phone">Телефон</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>

              <div class="form-group">
                <label for="service">Интересующая услуга</label>
                <select id="service" v-model="form.service" name="service">
                  <option value="">Выберите услугу</option>
                  <option v-for="service in services" :key="service" :value="service">
                    {{ service }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Сообщение</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="5"
                  placeholder="Расскажите о вашем проекте..."
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn-submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Отправка...' : 'Отправить сообщение' }}
              </button>

              <p v-if="submitMessage" :class="['submit-message', submitStatus]">
                {{ submitMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <h2>Наш офис</h2>
        <p class="map-address">г. Сочи, Аллея Челтенхэма 8/8</p>
        <div class="map-wrapper">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?text=Сочи%20Аллея%20Челтенхэма%208%2F8&z=17" 
            width="100%" 
            height="450" 
            frameborder="0" 
            allowfullscreen="true"
            style="border-radius: var(--radius-lg);"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface ContactItem {
  id: number
  icon: string
  title: string
  value: string
  href?: string
}

const contactItems: ContactItem[] = [
  { id: 1, icon: '📧', title: 'Email', value: 'promotion.w@yandex.ru', href: 'mailto:promotion.w@yandex.ru' },
  { id: 2, icon: '📞', title: 'Телефон', value: '+7 (999) 000-00-00', href: 'tel:+79990000000' },
  { id: 3, icon: '📍', title: 'Адрес', value: 'г. Сочи, Аллея Челтенхэма 8/8' },
  { id: 4, icon: '🕐', title: 'Режим работы', value: 'Пн-Пт: 9:00 - 18:00' }
]

const services = [
  'Веб-разработка',
  'Мобильные приложения',
  'UI/UX Дизайн',
  'SEO и Маркетинг',
  'Техническая поддержка',
  'Консалтинг'
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref<'success' | 'error'>('success')

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    submitMessage.value = 'Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.'
    submitStatus.value = 'success'

    // Очистка формы
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  } catch (error) {
    submitMessage.value = 'Ошибка при отправке. Попробуйте позже или напишите нам напрямую на почту.'
    submitStatus.value = 'error'
    console.error('Ошибка отправки формы:', error)
  } finally {
    isSubmitting.value = false
  }

  // Очистка сообщения через 5 секунд
  setTimeout(() => {
    submitMessage.value = ''
  }, 5000)
}

definePageMeta({
  title: 'Контакты - Веб Промоушн'
})

useHead({
  title: 'Контакты - Веб Промоушн',
  meta: [
    { name: 'description', content: 'Свяжитесь с нами для обсуждения вашего проекта' }
  ]
})
</script>

<style scoped>
.contact-page {
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

.contact-content {
  padding: 5rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

.contact-info h2,
.contact-form-wrapper h2 {
  font-size: 1.75rem;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
}

.info-text {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
}

.contact-item {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
  position: relative;
  overflow: hidden;
}

.contact-item::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-md);
  padding: 2px;
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

.contact-item:hover::before {
  opacity: 1;
}

.contact-item:hover {
  transform: translateX(8px);
  background: var(--color-bg-card-hover);
  box-shadow: var(--shadow-md), var(--shadow-glow-primary);
}

.contact-icon {
  font-size: 2rem;
}

.contact-details h3 {
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.contact-details p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.contact-link {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color var(--transition-fast);
}

.contact-link:hover {
  color: var(--color-primary-light);
  text-decoration: underline;
}

.social-section {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
}

.social-section h3 {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-primary);
  color: var(--color-bg);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow-primary);
}

.contact-form-wrapper {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.contact-form-wrapper .gradient-border {
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

.contact-form-wrapper:hover .gradient-border {
  opacity: 1;
}

.contact-form-wrapper:hover {
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

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  color: var(--color-text);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  background: var(--color-bg-tertiary);
  color: var(--color-text);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 220, 130, 0.15), var(--shadow-glow-primary);
  background: var(--color-bg-secondary);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-bg);
  padding: var(--spacing-md) var(--spacing-xl);
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow-primary);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-message {
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  text-align: center;
  font-weight: 500;
}

.submit-message.success {
  background: rgba(40, 167, 69, 0.1);
  color: var(--color-success);
}

.submit-message.error {
  background: rgba(220, 53, 69, 0.1);
  color: var(--color-error);
}

.map-section {
  background: var(--color-bg-secondary);
  padding: 5rem 0;
  border-top: 1px solid var(--color-border);
}

.map-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.map-address {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-xl);
}

.map-wrapper {
  max-width: 800px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .contact-form-wrapper {
    padding: var(--spacing-lg);
  }
}
</style>
