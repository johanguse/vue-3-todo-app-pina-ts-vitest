import { setActivePinia, createPinia } from 'pinia'
import { useTodoListStore } from '@/stores/todoList'
import { beforeEach, describe, expect, test, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import type { TodoItem } from '../../models/todoItem'

describe('TodoList', () => {
  let store: TodoItem[]

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useTodoListStore().todoList
  })

  it('should render a list of todo items', async () => {
    const wrapper = mount(TodoList, {
      props: { store }
    })
    it('should render on screen No todos found if todoList is empty', async () => {
      const wrapper = mount(TodoList)
      expect(wrapper.find('form')).toBeTruthy()
      expect(wrapper.find('input')).toBeTruthy()
      expect(wrapper.find('button')).toBeTruthy()
      expect(useTodoListStore().todoList).toHaveLength(0)
      expect(wrapper.find('.no-todos-found').text()).toBe('No To-Do found')
    })
  })
})
