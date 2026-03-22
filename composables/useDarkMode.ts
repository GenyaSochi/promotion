import { ref, computed, watch, onMounted } from 'vue'

interface UseDarkModeOptions {
  storageKey?: string
  defaultValue?: boolean
  attribute?: string
}

/**
 * Композабл для управления тёмной темой
 */
export function useDarkMode(options: UseDarkModeOptions = {}) {
  const {
    storageKey = 'theme',
    defaultValue = false,
    attribute = 'data-theme'
  } = options

  const isDark = ref(defaultValue)
  const isMounted = ref(false)

  const toggle = () => {
    isDark.value = !isDark.value
  }

  const setDark = (value: boolean) => {
    isDark.value = value
  }

  // Инициализация темы
  onMounted(() => {
    isMounted.value = true

    // Проверяем сохранённую тему
    const savedTheme = localStorage.getItem(storageKey)
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Проверяем системные настройки
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    }
  })

  // Применяем тему к документу
  watch(isDark, (dark) => {
    if (!isMounted.value) return

    if (dark) {
      document.documentElement.setAttribute(attribute, 'dark')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.removeAttribute(attribute)
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem(storageKey, dark ? 'dark' : 'light')
  }, { immediate: true })

  return {
    isDark,
    toggle,
    setDark
  }
}
