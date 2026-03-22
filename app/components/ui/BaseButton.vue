<template>
  <component
    :is="tag"
    class="btn"
    :class="[
      `btn-${variant}`,
      `btn-${size}`,
      {
        'btn-block': block,
        'btn-loading': loading,
        'btn-disabled': disabled
      }
    ]"
    :type="type"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="btn-spinner"></span>
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  tag?: 'button' | 'a' | 'NuxtLink'
  to?: string
  href?: string
  loading?: boolean
  disabled?: boolean
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  tag: 'button',
  to: undefined,
  href: undefined,
  loading: false,
  disabled: false,
  block: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 2px solid transparent;
  border-radius: var(--radius-full);
  transition: all var(--transition-normal);
  cursor: pointer;
  text-decoration: none;
}

.btn:disabled,
.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

/* Sizes */
.btn-sm {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: 0.875rem;
}

.btn-md {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: 1rem;
}

.btn-lg {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: 1.125rem;
}

/* Variants */
.btn-primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: var(--color-dark);
  color: var(--color-white);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--color-dark-light);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.btn-outline:hover:not(:disabled) {
  background: var(--color-primary);
  color: var(--color-white);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text);
}

.btn-ghost:hover:not(:disabled) {
  background: var(--color-light);
}

.btn-danger {
  background: var(--color-error);
  color: var(--color-white);
}

.btn-danger:hover:not(:disabled) {
  background: #c82333;
  transform: translateY(-2px);
}

/* Block */
.btn-block {
  width: 100%;
}

/* Loading */
.btn-loading {
  position: relative;
  color: transparent !important;
}

.btn-spinner {
  position: absolute;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
