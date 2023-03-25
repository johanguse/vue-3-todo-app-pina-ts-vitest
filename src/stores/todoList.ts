import type { TodoItem } from '../models/todoItem'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [] as TodoItem[],
    nextId: 3
  }),
  getters: {
    getTodoList: (state) => state.todoList,
    getTodoItem: (state) => (id: number) => state.todoList.find((item) => item.id === id),
    todoListIsEmpty: (state) => state.todoList.length === 0
  },
  actions: {
    addTodoItem(title: string) {
      this.todoList.push({
        id: this.nextId++,
        title,
        completed: false
      })
    },
    removeTodoItem(id: number) {
      this.todoList = this.todoList.filter((item) => item.id !== id)
    },
    toggleTodoItem(id: number) {
      const todoItem = this.getTodoItem(id)
      if (todoItem) {
        todoItem.completed = !todoItem.completed
      }
    }
  }
})
