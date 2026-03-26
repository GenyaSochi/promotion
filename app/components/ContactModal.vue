<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="handleClose">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h2 class="modal-title">Связаться с нами</h2>
            <button class="modal-close" @click="handleClose" aria-label="Закрыть">×</button>
          </div>

          <div class="modal-body">
            <p class="modal-description">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>

            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">
                  <svg class="label-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Ваше имя
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  name="name"
                  type="text"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">
                    <svg class="label-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    Email
                  </label>
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
                  <label for="phone">
                    <svg class="label-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Телефон
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="service">
                  <svg class="label-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  Интересующая услуга
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  name="service"
                >
                  <option value="">Выберите услугу (необязательно)</option>
                  <option v-for="service in services" :key="service" :value="service">
                    {{ service }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">
                  <svg class="label-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Сообщение
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="4"
                  placeholder="Расскажите кратко о вашем проекте..."
                  required
                ></textarea>
              </div>

              <div class="form-actions">
                <button type="button" class="btn-cancel" @click="handleClose">
                  Отмена
                </button>
                <button type="submit" class="btn-submit" :disabled="isSubmitting">
                  <span v-if="!isSubmitting">
                    Отправить
                    <span class="btn-arrow">→</span>
                  </span>
                  <span v-else>Отправка...</span>
                </button>
              </div>

              <Transition name="fade">
                <p v-if="submitMessage" :class="['submit-message', submitStatus]">
                  <span class="message-icon">{{ submitStatus === 'success' ? '✓' : '✕' }}</span>
                  {{ submitMessage }}
                </p>
              </Transition>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  isOpen.value = newVal
})

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

const handleClose = () => {
  isOpen.value = false
  emit('update:modelValue', false)
  setTimeout(() => {
    form.value = { name: '', email: '', phone: '', service: '', message: '' }
    submitMessage.value = ''
  }, 300)
}

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    await $fetch('/api/contact', { method: 'POST', body: form.value })
    submitMessage.value = 'Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.'
    submitStatus.value = 'success'
  } catch (error) {
    submitMessage.value = 'Ошибка при отправке. Попробуйте позже или напишите нам напрямую на почту.'
    submitStatus.value = 'error'
    console.error('Ошибка отправки формы:', error)
  } finally {
    isSubmitting.value = false
  }

  setTimeout(() => { submitMessage.value = '' }, 5000)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  max-height: calc(100vh - 3rem);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: 
    var(--shadow-xl),
    0 0 60px rgba(0, 220, 130, 0.15),
    0 0 100px rgba(139, 92, 246, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-container::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  padding: 2px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent-purple),
    var(--color-accent-pink),
    var(--color-accent-cyan),
    var(--color-primary)
  );
  background-size: 400% 400%;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  animation: gradient-rotate 6s ease infinite;
  opacity: 0.5;
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

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.modal-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--color-text-secondary);
  background: transparent;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background: var(--color-bg-secondary);
  color: var(--color-text);
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  max-height: calc(100vh - 12rem);
}

.modal-description {
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.9rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.8rem;
}

.label-icon {
  width: 18px;
  height: 18px;
  color: var(--color-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  transition: all 0.3s ease;
  background: var(--color-bg-tertiary);
  color: var(--color-text);
  font-family: inherit;
  position: relative;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: transparent;
  background: var(--color-bg-secondary);
  box-shadow: 
    0 0 0 2px var(--color-primary),
    0 0 20px rgba(0, 220, 130, 0.3),
    inset 0 0 0 1px rgba(0, 220, 130, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 90px;
  line-height: 1.5;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.form-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}

.btn-cancel {
  padding: 0.625rem 1rem;
  background: transparent;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-cancel:hover {
  background: var(--color-bg-secondary);
  color: var(--color-text);
  border-color: var(--color-text-secondary);
}

.btn-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-bg);
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-submit::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    transparent,
    rgba(255, 255, 255, 0.2)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-submit:hover::before {
  opacity: 1;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 20px rgba(0, 220, 130, 0.4),
    0 0 40px rgba(0, 220, 130, 0.2);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-arrow {
  transition: transform var(--transition-fast);
}

.btn-submit:hover:not(:disabled) .btn-arrow {
  transform: translateX(4px);
}

.submit-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 0.85rem;
  margin: 0.75rem 0 0;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.submit-message.success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.message-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 700;
  background: currentColor;
  color: inherit;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

.modal-leave-to .modal-container {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column-reverse;
  }

  .btn-cancel,
  .btn-submit {
    width: 100%;
  }
}
</style>
