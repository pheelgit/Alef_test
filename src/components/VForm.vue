<script setup lang="ts">
import VTextBox from '@/components/VTextBox.vue'
import { useFormStore } from '@/stores/form'
import VNumberBox from '@/components/VNumberBox.vue'
import ChildList from '@/components/ChildList.vue'
import { onMounted, reactive } from 'vue'
import type { IParent } from '@/types/form.types'

const formStore = useFormStore()

const formState: IParent = reactive({
  name: undefined,
  years: undefined,
  children: []
})

const addChild = () => {
  formState.children.push({ id: Date.now(), name: undefined, years: undefined })
}
const removeChild = (id: number) => {
  const index = formState.children.findIndex((item) => item.id === id)
  if (index !== -1) {
    formState.children.splice(index, 1) // Удаляем элемент по индексу
  }
}

const updateLocalState = () => {
  formState.name = formStore.state.name
  formState.years = formStore.state.years
  formState.children = [...formStore.state.children]
}

onMounted(updateLocalState)
</script>

<template>
  <div class="form-wrapper">
    <div class="form-block parent-data">
      <div class="form-block--title">Персональные данные</div>
      <div class="parent">
        <v-text-box v-model:value="formState.name" label="Имя родителя" />

        <v-number-box v-model:value="formState.years" label="Возраст родителя" />
      </div>
    </div>

    <div class="form-block children-data">
      <div class="form-block--title">
        Дети (макс.5)
        <button
          v-if="formState.children.length < 5"
          class="children-data--add-button"
          @click="addChild"
        >
          Добавить ребенка
        </button>
        <br />
        <child-list :children="formState.children" :remove-child="removeChild" />
      </div>
    </div>

    <div class="form-block">
      <button @click="formStore.updateForm(formState)">Сохранить</button>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  max-width: 616px;
  min-width: 400px;
  position: relative;
}
.form-block--title {
  font-weight: bold;
  margin-bottom: 1em;
}
.parent-data {
}
.children-data--add-button {
  border: 2px solid blue;
  border-radius: 0.5em;
}
</style>
