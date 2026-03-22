<template>
  <component
    :is="tag"
    class="card"
    :class="[
      `card-${variant}`,
      {
        'card-hoverable': hoverable,
        'card-clickable': clickable
      }
    ]"
    @click="handleClick"
  >
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    
    <div v-if="$slots.image" class="card-image">
      <slot name="image"></slot>
    </div>
    
    <div class="card-body">
      <slot></slot>
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </component>
</template>

<script setup lang="ts">
interface Props {
  tag?: 'div' | 'article' | 'section' | 'a' | 'NuxtLink'
  to?: string
  href?: string
  variant?: 'default' | 'outlined' | 'elevated'
  hoverable?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  to: undefined,
  href: undefined,
  variant: 'default',
  hoverable: false,
  clickable: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>

<style scoped>
.card {
  display: block;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
}

/* Variants */
.card-default {
  border: 1px solid var(--color-border);
}

.card-outlined {
  border: 2px solid var(--color-border);
}

.card-elevated {
  box-shadow: var(--shadow-md);
  border: none;
}

/* Hoverable */
.card-hoverable:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

/* Clickable */
.card-clickable {
  cursor: pointer;
}

.card-clickable:hover {
  background: var(--color-light);
}

/* Parts */
.card-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.card-image :slotted(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.card-clickable .card-image :slotted(img:hover) {
  transform: scale(1.05);
}

.card-body {
  padding: var(--spacing-lg);
}

.card-footer {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  background: var(--color-light);
}
</style>
