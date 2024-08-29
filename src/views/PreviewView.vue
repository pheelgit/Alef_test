<script setup lang="ts">
import { useFormStore } from '@/stores/form'
const formStore = useFormStore()
</script>

<template>
  <div class="preview-wrap">
    <span>Персональные данные</span>
    <span class="bold">{{ formStore.state.name }}, {{ formStore.state.years }} лет</span>
    <br />
    <br />

    <span>Дети</span>
    <span class="child-badge bold" v-for="child of formStore.state.children" :key="child.id">
      {{ child.name }}, {{ child.years }} лет
    </span>
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
}
</style>
