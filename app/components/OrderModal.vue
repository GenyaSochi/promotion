<template>
  <BaseModal
    v-model="isOpen"
    title="Заказать услугу"
    size="lg"
    :show-close="true"
    :close-on-overlay="true"
    :close-on-esc="true"
    @close="handleClose"
  >
    <div class="order-modal">
      <p class="modal-description">
        Заполните форму, и мы свяжемся с вами в ближайшее время для обсуждения деталей
      </p>

      <form class="order-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">
            <span class="label-icon">👤</span>
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
              <span class="label-icon">📧</span>
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
              <span class="label-icon">📞</span>
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
            <span class="label-icon">⚡</span>
            Интересующая услуга
          </label>
          <select id="service" v-model="form.service" name="service" required>
            <option value="">Выберите услугу</option>
            <option v-for="service in services" :key="service" :value="service">
              {{ service }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">
            <span class="label-icon">💬</span>
            Сообщение
          </label>
          <textarea
            id="message"
            v-model="form.message"
            name="message"
            rows="4"
            placeholder="Расскажите о вашем проекте, сроках и пожеланиях..."
            required
          ></textarea>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-cancel" @click="handleClose">
            Отмена
          </button>
          <button type="submit" class="btn-submit" :disabled="isSubmitting">
            <span v-if="!isSubmitting">
              Отправить заявку
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
  </BaseModal>
</template>

<script setup lang="ts">
const isOpen = defineModel<boolean>({ required: true })

const props = defineProps<{
  selectedService?: string
}>()

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

// Устанавливаем выбранную услугу при открытии модального окна
watch(isOpen, (newValue) => {
  if (newValue && props.selectedService) {
    form.value.service = props.selectedService
  }
})

const handleClose = () => {
  isOpen.value = false
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
    submitMessage.value = ''
  }, 300)
}

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    submitMessage.value = 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.'
    submitStatus.value = 'success'
  } catch (error) {
    submitMessage.value = 'Ошибка при отправке. Попробуйте позже или напишите нам напрямую на почту.'
    submitStatus.value = 'error'
    console.error('Ошибка отправки формы:', error)
  } finally {
    isSubmitting.value = false
  }

  setTimeout(() => {
    submitMessage.value = ''
  }, 5000)
}
</script>

<style scoped>
.order-modal {
  display: flex;
  flex-direction: column;
}

.modal-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
  font-size: 0.95rem;
}

.order-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-group label {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.875rem;
}

.label-icon {
  font-size: 1rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: all var(--transition-fast);
  background: var(--color-bg-tertiary);
  color: var(--color-text);
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(0, 220, 130, 0.1);
  background: var(--color-bg-secondary);
  transform: translateY(-1px);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-text-muted);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.form-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: flex-end;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
  padding-top: var(--spacing-xl);
}

.btn-cancel {
  padding: var(--spacing-md) var(--spacing-xl);
  background: transparent;
  color: var(--color-text-secondary);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 1rem;
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
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-bg);
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 220, 130, 0.3);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
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
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 0.9rem;
  margin: 0;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.submit-message.success {
  background: linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(40, 167, 69, 0.05));
  border: 1px solid rgba(40, 167, 69, 0.3);
  color: var(--color-success);
}

.submit-message.error {
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.1), rgba(220, 53, 69, 0.05));
  border: 1px solid rgba(220, 53, 69, 0.3);
  color: var(--color-error);
}

.message-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  background: currentColor;
  color: inherit;
}

.fade-enter-active,
.fade-leave-active {
  transition: all var(--transition-normal);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
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
