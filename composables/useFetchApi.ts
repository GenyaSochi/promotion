import { ref, computed } from 'vue'

interface UseFetchOptions {
  immediate?: boolean
  baseUrl?: string
  defaultHeaders?: Record<string, string>
}

interface UseFetchResult<T> {
  data: Ref<T | null>
  loading: Ref<boolean>
  error: Ref<string | null>
  fetchData: (url?: string, options?: RequestInit) => Promise<void>
  refetch: () => Promise<void>
}

/**
 * Композабл для выполнения HTTP-запросов
 */
export function useFetchApi<T>(
  initialUrl?: string,
  options: UseFetchOptions = {}
): UseFetchResult<T> {
  const {
    immediate = false,
    baseUrl = '',
    defaultHeaders = {}
  } = options

  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchData = async (url?: string, fetchOptions: RequestInit = {}) => {
    const requestUrl = url || initialUrl
    if (!requestUrl) {
      error.value = 'URL is required'
      return
    }

    loading.value = true
    error.value = null

    try {
      const fullUrl = baseUrl + requestUrl
      const response = await fetch(fullUrl, {
        ...fetchOptions,
        headers: {
          'Content-Type': 'application/json',
          ...defaultHeaders,
          ...fetchOptions.headers
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      data.value = await response.json()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      data.value = null
    } finally {
      loading.value = false
    }
  }

  const refetch = () => fetchData()

  if (immediate && initialUrl) {
    fetchData()
  }

  return {
    data,
    loading,
    error,
    fetchData,
    refetch
  }
}
