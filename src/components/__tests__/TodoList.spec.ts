import { setActivePinia, createPinia } from 'pinia'
import { useTodoListStore } from '@/stores/todoList'
import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'

describe('TodoList', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders No To-Do found message when todo list is empty', () => {
    const wrapper = mount(TodoList)
    expect(useTodoListStore().todoList).toHaveLength(0)
    expect(wrapper.find('.no-todos-found').text()).toBe('No To-Do found')
  })
})
