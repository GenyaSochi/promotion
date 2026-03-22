<template>
  <div class="input-wrapper">
    <label v-if="label && !labelHidden" :for="id" class="input-label">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>
    
    <div class="input-container" :class="{
      'input-focused': isFocused,
      'input-error': error,
      'input-success': success,
      'input-disabled': disabled
    }">
      <span v-if="prefix" class="input-prefix">{{ prefix }}</span>
      
      <input
        :id="id"
        ref="inputRef"
        class="input"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :autocomplete="autocomplete"
        :maxlength="maxlength"
        :min="min"
        :max="max"
        :step="step"
        :pattern="pattern"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <span v-if="suffix" class="input-suffix">{{ suffix }}</span>
      
      <button
        v-if="clearable && modelValue"
        type="button"
        class="input-clear"
        @click="handleClear"
        aria-label="Очистить"
      >
        ×
      </button>
    </div>
    
    <p v-if="error" class="input-error-message">{{ error }}</p>
    <p v-else-if="success" class="input-success-message">{{ success }}</p>
    <p v-else-if="hint" class="input-hint">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local'
  label?: string
  labelHidden?: boolean
  placeholder?: string
  id?: string
  name?: string
  disabled?: boolean
  required?: boolean
  autocomplete?: string
  maxlength?: number | string
  min?: number | string
  max?: number | string
  step?: number | string
  pattern?: string
  prefix?: string
  suffix?: string
  clearable?: boolean
  error?: string
  success?: string
  hint?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  label: '',
  labelHidden: false,
  placeholder: undefined,
  id: undefined,
  name: undefined,
  disabled: false,
  required: false,
  autocomplete: undefined,
  maxlength: undefined,
  min: undefined,
  max: undefined,
  step: undefined,
  pattern: undefined,
  prefix: '',
  suffix: '',
  clearable: false,
  error: '',
  success: '',
  hint: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  clear: []
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)

const id = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? parseFloat(target.value) : target.value
  emit('update:modelValue', value)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const handleClear = () => {
  emit('update:modelValue', props.type === 'number' ? 0 : '')
  emit('clear')
  inputRef.value?.focus()
}

defineExpose({
  inputRef,
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur()
})
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.input-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-dark);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.required {
  color: var(--color-error);
}

.input-container {
  display: flex;
  align-items: center;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.input-container:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 220, 130, 0.1);
}

.input-focused {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 220, 130, 0.1);
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus-within {
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.input-success {
  border-color: var(--color-success);
}

.input-success:focus-within {
  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
}

.input-disabled {
  background: var(--color-light);
  cursor: not-allowed;
}

.input {
  flex: 1;
  width: 100%;
  min-width: 0;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 1rem;
  color: var(--color-text);
  background: transparent;
  border: none;
  outline: none;
}

.input::placeholder {
  color: var(--color-text-muted);
}

.input:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.input-prefix,
.input-suffix {
  padding: 0 var(--spacing-sm);
  color: var(--color-text-muted);
  font-size: 0.875rem;
  white-space: nowrap;
}

.input-prefix {
  border-right: 1px solid var(--color-border);
  padding-left: var(--spacing-md);
}

.input-suffix {
  border-left: 1px solid var(--color-border);
  padding-right: var(--spacing-md);
}

.input-clear {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-right: var(--spacing-xs);
  color: var(--color-text-muted);
  font-size: 1.25rem;
  line-height: 1;
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.input-clear:hover {
  background: var(--color-light);
  color: var(--color-text);
}

.input-error-message,
.input-success-message,
.input-hint {
  font-size: 0.75rem;
  margin: 0;
  padding-left: var(--spacing-sm);
}

.input-error-message {
  color: var(--color-error);
}

.input-success-message {
  color: var(--color-success);
}

.input-hint {
  color: var(--color-text-muted);
}
</style>
