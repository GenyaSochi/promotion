import { ref, watch } from 'vue'

interface UseLocalStorageOptions<T> {
  defaultValue?: T
  serializer?: (value: T) => string
  parser?: (value: string) => T
}

/**
 * Композабл для реактивной работы с localStorage
 */
export function useLocalStorage<T>(
  key: string,
  options: UseLocalStorageOptions<T> = {}
) {
  const {
    defaultValue,
    serializer = JSON.stringify,
    parser = JSON.parse
  } = options

  const readValue = (): T | undefined => {
    if (typeof window === 'undefined') {
      return defaultValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? parser(item) : defaultValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return defaultValue
    }
  }

  const storedValue = ref<T | undefined>(readValue())

  const setValue = (value: T | undefined) => {
    if (typeof window === 'undefined') {
      console.warn(
        `Tried setting localStorage key "${key}" even though environment is not a client`
      )
      return
    }

    try {
      storedValue.value = value

      if (value === undefined) {
        window.localStorage.removeItem(key)
      } else {
        window.localStorage.setItem(key, serializer(value))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  const removeValue = () => {
    setValue(undefined)
  }

  // Обновляем значение при изменении в других вкладках
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (event) => {
      if (event.key === key) {
        storedValue.value = event.newValue ? parser(event.newValue) : undefined
      }
    })
  }

  // Синхронизируем ref с localStorage
  watch(storedValue, () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, serializer(storedValue.value as T))
    }
  })

  return [storedValue, setValue, removeValue] as const
}
