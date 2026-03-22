import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseInput from '~/components/ui/BaseInput.vue'

describe('BaseInput', () => {
  it('renders label when provided', () => {
    const wrapper = mount(BaseInput, {
      props: {
        label: 'Username'
      }
    })
    expect(wrapper.text()).toContain('Username')
  })

  it('does not render label when labelHidden is true', () => {
    const wrapper = mount(BaseInput, {
      props: {
        label: 'Username',
        labelHidden: true
      }
    })
    expect(wrapper.find('.input-label').exists()).toBe(false)
  })

  it('binds value to input', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: 'test value'
      }
    })
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('test value')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(BaseInput)
    const input = wrapper.find('input')
    await input.setValue('new value')
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value'])
  })

  it('shows required asterisk when required is true', () => {
    const wrapper = mount(BaseInput, {
      props: {
        label: 'Email',
        required: true
      }
    })
    expect(wrapper.find('.required').exists()).toBe(true)
    expect(wrapper.find('.required').text()).toBe('*')
  })

  it('applies error class when error prop is provided', () => {
    const wrapper = mount(BaseInput, {
      props: {
        error: 'Invalid email'
      }
    })
    expect(wrapper.find('.input-error').exists()).toBe(true)
  })

  it('displays error message', () => {
    const wrapper = mount(BaseInput, {
      props: {
        error: 'This field is required'
      }
    })
    expect(wrapper.find('.input-error-message').text()).toContain('This field is required')
  })

  it('displays hint message', () => {
    const wrapper = mount(BaseInput, {
      props: {
        hint: 'Enter your full name'
      }
    })
    expect(wrapper.find('.input-hint').text()).toContain('Enter your full name')
  })

  it('renders prefix when provided', () => {
    const wrapper = mount(BaseInput, {
      props: {
        prefix: '$'
      }
    })
    expect(wrapper.find('.input-prefix').text()).toContain('$')
  })

  it('renders suffix when provided', () => {
    const wrapper = mount(BaseInput, {
      props: {
        suffix: 'USD'
      }
    })
    expect(wrapper.find('.input-suffix').text()).toContain('USD')
  })

  it('shows clear button when clearable and has value', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: 'test',
        clearable: true
      }
    })
    expect(wrapper.find('.input-clear').exists()).toBe(true)
  })

  it('emits clear event when clear button is clicked', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: 'test',
        clearable: true
      }
    })
    await wrapper.find('.input-clear').trigger('click')
    expect(wrapper.emitted('clear')).toBeDefined()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(BaseInput, {
      props: {
        disabled: true
      }
    })
    expect((wrapper.find('input').element as HTMLInputElement).disabled).toBe(true)
  })

  it('applies success class when success prop is provided', () => {
    const wrapper = mount(BaseInput, {
      props: {
        success: 'Valid!'
      }
    })
    expect(wrapper.find('.input-success').exists()).toBe(true)
  })
})
