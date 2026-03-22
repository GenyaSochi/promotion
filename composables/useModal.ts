import { ref, computed } from 'vue'

interface UseModalOptions {
  defaultValue?: boolean
  onOpen?: () => void
  onClose?: () => void
}

/**
 * Композабл для управления состоянием модального окна
 */
export function useModal(options: UseModalOptions = {}) {
  const {
    defaultValue = false,
    onOpen,
    onClose
  } = options

  const isOpen = ref(defaultValue)

  const open = () => {
    isOpen.value = true
    onOpen?.()
  }

  const close = () => {
    isOpen.value = false
    onClose?.()
  }

  const toggle = () => {
    if (isOpen.value) {
      close()
    } else {
      open()
    }
  }

  return {
    isOpen,
    open,
    close,
    toggle
  }
}
