<template>
  <div class="textarea-wrapper">
    <label v-if="label" :for="id" class="textarea-label">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>
    
    <div class="textarea-container" :class="{
      'textarea-focused': isFocused,
      'textarea-error': error,
      'textarea-disabled': disabled,
      'textarea-resizable': resizable
    }">
      <textarea
        :id="id"
        ref="textareaRef"
        class="textarea"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :rows="rows"
        :maxlength="maxlength"
        :autocomplete="autocomplete"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
      
      <span v-if="showCounter && maxlength" class="textarea-counter">
        {{ currentValueLength }}/{{ maxlength }}
      </span>
    </div>
    
    <p v-if="error" class="textarea-error-message">{{ error }}</p>
    <p v-else-if="hint" class="textarea-hint">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  id?: string
  disabled?: boolean
  required?: boolean
  rows?: number | string
  maxlength?: number | string
  autocomplete?: string
  resizable?: boolean
  showCounter?: boolean
  error?: string
  hint?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  id: undefined,
  disabled: false,
  required: false,
  rows: 4,
  maxlength: undefined,
  autocomplete: undefined,
  resizable: true,
  showCounter: false,
  error: '',
  hint: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const isFocused = ref(false)

const id = computed(() => props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`)

const currentValueLength = computed(() => props.modelValue?.length || 0)

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

defineExpose({
  textareaRef,
  focus: () => textareaRef.value?.focus(),
  blur: () => textareaRef.value?.blur()
})
</script>

<style scoped>
.textarea-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.textarea-label {
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

.textarea-container {
  position: relative;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.textarea-container:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 220, 130, 0.1);
}

.textarea-focused {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 220, 130, 0.1);
}

.textarea-error {
  border-color: var(--color-error);
}

.textarea-error:focus-within {
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.textarea-disabled {
  background: var(--color-light);
  cursor: not-allowed;
}

.textarea {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.6;
  color: var(--color-text);
  background: transparent;
  border: none;
  outline: none;
}

.textarea::placeholder {
  color: var(--color-text-muted);
}

.textarea:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.textarea-resizable {
  resize: vertical;
}

.textarea:not(.textarea-resizable) {
  resize: none;
}

.textarea-counter {
  position: absolute;
  bottom: var(--spacing-xs);
  right: var(--spacing-md);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  pointer-events: none;
}

.textarea-error-message,
.textarea-hint {
  font-size: 0.75rem;
  margin: 0;
  padding-left: var(--spacing-sm);
}

.textarea-error-message {
  color: var(--color-error);
}

.textarea-hint {
  color: var(--color-text-muted);
}
</style>
