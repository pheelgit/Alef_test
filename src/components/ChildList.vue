<script setup lang="ts">
import type { ChildrenType } from '@/types/form.types'
import VTextBox from '@/components/VTextBox.vue'
import VNumberBox from '@/components/VNumberBox.vue'
import type { Ref } from 'vue'

defineProps<{ removeChild: Function }>()

const children = defineModel('children') as Ref<ChildrenType[]>
</script>

<template>
  <div class="child-item" v-for="child of children" :key="child.id">
    <v-text-box label="Имя" v-model:value="child.name" />
    <v-number-box label="Возраст" v-model:value="child.years" />

    <button @click="removeChild(child.id)">удалить</button>
  </div>
</template>

<style scoped>
.child-item {
  display: flex;
  justify-content: space-between;
  column-gap: 1em;
}
</style>
