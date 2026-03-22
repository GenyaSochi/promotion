import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

interface UseBreakpointOptions {
  breakpoints?: Breakpoints
  debounce?: number
}

/**
 * Композабл для работы с брейкпоинтами
 */
export function useBreakpoint(options: UseBreakpointOptions = {}) {
  const {
    breakpoints = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    },
    debounce = 100
  } = options

  const width = ref(0)
  const height = ref(0)

  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const updateSize = () => {
    if (typeof window === 'undefined') return

    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  const handleResize = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      updateSize()
      timeoutId = null
    }, debounce)
  }

  onMounted(() => {
    updateSize()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  })

  const isMobile = computed(() => width.value < breakpoints.md)
  const isTablet = computed(() => width.value >= breakpoints.md && width.value < breakpoints.lg)
  const isDesktop = computed(() => width.value >= breakpoints.lg)

  const isGreaterThan = (breakpoint: keyof Breakpoints) => {
    return width.value >= breakpoints[breakpoint]
  }

  const isLessThan = (breakpoint: keyof Breakpoints) => {
    return width.value < breakpoints[breakpoint]
  }

  const currentBreakpoint = computed<keyof Breakpoints>(() => {
    if (width.value >= breakpoints.xxl) return 'xxl'
    if (width.value >= breakpoints.xl) return 'xl'
    if (width.value >= breakpoints.lg) return 'lg'
    if (width.value >= breakpoints.md) return 'md'
    if (width.value >= breakpoints.sm) return 'sm'
    return 'xs'
  })

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    isGreaterThan,
    isLessThan,
    currentBreakpoint
  }
}
