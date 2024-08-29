import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IParent } from '@/types/form.types'

export const useFormStore = defineStore('form', () => {
  const state: IParent = reactive({
    name: undefined,
    years: undefined,
    children: []
  })

  const updateForm = (form: IParent): void => {
    state.name = form.name
    state.years = form.years
    state.children = [...form.children]
  }

  const numberOfChildren = computed(() => state.children.length)

  return { state, updateForm, numberOfChildren }
})
