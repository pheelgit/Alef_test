<script setup lang="ts">
import { useFormStore } from '@/stores/form'
const formStore = useFormStore()
</script>

<template>
  <div class="preview-wrap">
    <span>Персональные данные</span>
    <span class="bold"
      >{{ formStore.state.name || 'Введите имя' }},
      {{ formStore.state.years || 'Введите возраст' }} лет</span
    >
    <br />
    <br />

    <span>Дети</span>
    <div class="child-badge bold" v-for="child of formStore.state.children" :key="child.id">
      {{ child.name || 'Введите имя ребенка' }}, {{ child.years || 'Введите возраст ребенка' }}
      {{ child.years && 'лет' }}
    </div>
  </div>
</template>

<style scoped>
.preview-wrap {
}
.bold {
  font-weight: bold;
}

.child-badge {
  font-weight: bold;
  background-color: gray;
  margin-bottom: 1em;
}
</style>
