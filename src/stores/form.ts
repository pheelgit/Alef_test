import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IParent } from '@/types/form.types'

export const useFormStore = defineStore('form', () => {
  const state: IParent = reactive({
    name: '',
    years: 0,
    children: []
  })

  const changeParentName = (name: string): void => {
    state.name = name
  }
  const changeParentYears = (years: number): void => {
    state.years = years
  }
  const addChild = () => {
    state.children.push({ id: Date.now(), name: '', years: 0 })
  }
  const removeChild = (id: number) => {
    const index = state.children.findIndex((item) => item.id === id)
    if (index !== -1) {
      state.children.splice(index, 1) // Удаляем элемент по индексу
    }
  }

  const numberOfChildren = computed(() => state.children.length)

  return { state, changeParentName, changeParentYears, addChild, removeChild, numberOfChildren }
})
