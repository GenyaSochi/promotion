<template>
  <div class="contact-page">
    <section id="contact" class="hero">
      <div class="container">
        <h1 class="contact-hero-title">Заказать <span class="contact-accent">проект</span></h1>
        <p class="contact-hero-subtitle">Свяжитесь с нами — мы всегда рады помочь</p>
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
              <div class="contact-icon">
                <svg v-if="item.iconName === 'email'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <svg v-else-if="item.iconName === 'phone'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <svg v-else-if="item.iconName === 'location'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <svg v-else-if="item.iconName === 'clock'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div class="contact-details">
                <h3>{{ item.title }}</h3>
                <a v-if="item.href" :href="item.href" class="contact-link">{{ item.value }}</a>
                <p v-else>{{ item.value }}</p>
              </div>
            </div>

            <div class="social-section">
              <h3>Мы в соцсетях</h3>
              <div class="social-links">
                <a href="https://t.me/GenyaSochi" class="social-link" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                  <span>Telegram</span>
                </a>           
                <a href="https://max.ru/u/f9LHodD0cOI-TPMMpsfZv29lGZ9rHyGWIOQKmB4uCt1OOJsBt-3rhVcvLjA"  target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Max">
                  <span>Max</span>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
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

              <div class="form-group checkbox-group">
                <label class="checkbox-label">
                  <input
                    type="checkbox"
                    v-model="form.agreement"
                    required
                  />
                  <span class="checkbox-text">
                    Я даю согласие на обработку персональных данных
                  </span>
                </label>
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

  </div>
</template>

<script setup lang="ts">
interface ContactItem {
  id: number
  iconName: string
  title: string
  value: string
  href?: string
}

const contactItems: ContactItem[] = [
  { id: 1, iconName: 'email', title: 'Email', value: 'promotion.w@yandex.ru', href: 'mailto:promotion.w@yandex.ru' }, 
  { id: 4, iconName: 'clock', title: 'Режим работы', value: 'Пн-Пт: 9:00 - 18:00' }
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
  message: '',
  agreement: false
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
      message: '',
      agreement: false
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
  title: 'Контакты - AppWeb'
})

useHead({
  title: 'Контакты - AppWeb',
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
  padding: 5rem 0 3rem;
  text-align: left;
}

.contact-hero-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #fff;
  margin: 0 0 24px;
}

.contact-accent {
  color: #06b6d4;
}

.contact-hero-subtitle {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6;
  color: #fff;
  max-width: 760px;
  margin: 0;
}

.contact-content {
  padding: 0 0 5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

.contact-info h2,
.contact-form-wrapper h2 {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #fff;
  margin: 0 0 var(--spacing-lg);
}

.info-text {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.contact-item {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  padding: 0 0 var(--spacing-md);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform var(--transition-fast);
}

.contact-item:hover {
  transform: translateX(6px);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #06b6d4;
  flex-shrink: 0;
}

.contact-item:hover .contact-icon {
  color: #00dc82;
}

.contact-icon svg {
  width: 24px;
  height: 24px;
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
  padding: 10px 24px;
  border: 1px solid rgba(6, 182, 212, 0.5);
  border-radius: 999px;
  color: #fff;
  font-weight: 600;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
  cursor: none;
}

.social-link:hover {
  transform: translateY(-2px);
  border-color: #00dc82;
  box-shadow: 0 0 30px rgba(0, 220, 130, 0.25);
}

.contact-form-wrapper {
  position: relative;
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
  padding: 12px 0;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0;
  font-size: 1.125rem;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  background: transparent;
  color: #fff;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #06b6d4;
  box-shadow: 0 1px 0 #00dc82;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.checkbox-group {
  margin-bottom: var(--spacing-lg);
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  cursor: none;
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.4;
}

.checkbox-label input[type="checkbox"] {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  cursor: none;
  accent-color: #06b6d4;
}

.checkbox-text {
  user-select: none;
}

.btn-submit {
  align-self: flex-start;
  background: linear-gradient(135deg, #06b6d4 0%, #00dc82 100%);
  color: #07110d;
  padding: 14px 32px;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  cursor: none;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), color var(--transition-fast);
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.25);
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-3px);
  color: #fff;
  box-shadow: 0 0 50px rgba(0, 220, 130, 0.4);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-message {
  margin-top: var(--spacing-md);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
}

.submit-message.success {
  color: #00dc82;
}

.submit-message.error {
  color: #ef4444;
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
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
}
</style>
