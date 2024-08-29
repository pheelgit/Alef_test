<script setup lang="ts">
import VTextBox from '@/components/VTextBox.vue'
import { useFormStore } from '@/stores/form'
import VNumberBox from '@/components/VNumberBox.vue'
import ChildList from '@/components/ChildList.vue'

const formStore = useFormStore()

const handleChangeName = (e: any) => {
  console.log(e)
  formStore.changeParentName(e)
}
</script>

<template>
  <div class="form-wrapper">
    <div class="form-block parent-data">
      <div class="form-block--title">Персональные данные</div>
      <div class="parent">
        <v-text-box
          v-model:value="formStore.state.name"
          label="Имя родителя"
          @change-text="handleChangeName"
        />

        <v-number-box v-model:value="formStore.state.years" label="Возраст родителя" />
      </div>
    </div>

    <div class="form-block children-data">
      <div class="form-block--title">
        Дети (макс.5)
        <button
          v-if="formStore.numberOfChildren < 5"
          class="children-data--add-button"
          @click="formStore.addChild"
        >
          Добавить ребенка
        </button>
        <br />
        <child-list :children="formStore.state.children" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  max-width: 616px;
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
