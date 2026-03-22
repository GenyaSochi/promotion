import { describe, it, expect } from 'vitest'
import { useModal } from '~/composables/useModal'

describe('useModal', () => {
  it('initializes with default value false', () => {
    const { isOpen } = useModal()
    expect(isOpen.value).toBe(false)
  })

  it('initializes with custom default value', () => {
    const { isOpen } = useModal({ defaultValue: true })
    expect(isOpen.value).toBe(true)
  })

  it('opens modal', () => {
    const { isOpen, open } = useModal()
    open()
    expect(isOpen.value).toBe(true)
  })

  it('closes modal', () => {
    const { isOpen, close } = useModal({ defaultValue: true })
    close()
    expect(isOpen.value).toBe(false)
  })

  it('toggles modal state', () => {
    const { isOpen, toggle } = useModal()
    
    toggle()
    expect(isOpen.value).toBe(true)
    
    toggle()
    expect(isOpen.value).toBe(false)
  })

  it('calls onOpen callback when opened', () => {
    const onOpen = vi.fn()
    const { open } = useModal({ onOpen })
    
    open()
    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  it('calls onClose callback when closed', () => {
    const onClose = vi.fn()
    const { close } = useModal({ defaultValue: true, onClose })
    
    close()
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
