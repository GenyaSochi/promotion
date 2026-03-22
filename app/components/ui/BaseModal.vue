<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click="handleOverlayClick">
        <div class="modal-container" :class="[`modal-${size}`]" @click.stop>
          <div v-if="$slots.header || title || showClose" class="modal-header">
            <slot name="header">
              <h2 v-if="title" class="modal-title">{{ title }}</h2>
            </slot>
            <button
              v-if="showClose"
              class="modal-close"
              @click="handleClose"
              aria-label="Закрыть"
            >
              ×
            </button>
          </div>
          
          <div class="modal-body">
            <slot></slot>
          </div>
          
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  showClose?: boolean
  closeOnOverlay?: boolean
  closeOnEsc?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  size: 'md',
  showClose: true,
  closeOnOverlay: true,
  closeOnEsc: true
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    handleClose()
  }
}

const handleEscKey = (event: KeyboardEvent) => {
  if (props.closeOnEsc && event.key === 'Escape' && props.modelValue) {
    handleClose()
  }
}

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      document.addEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = ''
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal-container {
  position: relative;
  width: 100%;
  max-height: calc(100vh - var(--spacing-xl) * 2);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Sizes */
.modal-sm {
  max-width: 400px;
}

.modal-md {
  max-width: 500px;
}

.modal-lg {
  max-width: 700px;
}

.modal-xl {
  max-width: 900px;
}

.modal-full {
  max-width: calc(100vw - var(--spacing-xl) * 2);
  max-height: calc(100vh - var(--spacing-xl) * 2);
}

/* Header */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.modal-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-dark);
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: -0.5rem -0.5rem -0.5rem 0;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--color-text-muted);
  background: transparent;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background: var(--color-light);
  color: var(--color-text);
}

/* Body */
.modal-body {
  padding: var(--spacing-lg);
  overflow-y: auto;
  flex: 1;
}

/* Footer */
.modal-footer {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  background: var(--color-light);
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all var(--transition-normal);
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: all var(--transition-normal);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  opacity: 0;
  transform: scale(0.95) translateY(-20px);
}
</style>
