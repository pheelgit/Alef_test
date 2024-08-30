<script setup lang="ts">
import type { ChildrenType } from '@/types/form.types'
import VTextBox from '@/components/VTextBox.vue'
import VNumberBox from '@/components/VNumberBox.vue'
import type { Ref } from 'vue'
import VButton from '@/components/VButton.vue'

defineProps<{ removeChild: Function }>()

const children = defineModel('children') as Ref<ChildrenType[]>
</script>

<template>
  <div class="child-item" v-for="child of children" :key="child.id">
    <v-text-box label="Имя" v-model:value="child.name" />
    <v-number-box label="Возраст" v-model:value="child.years" />

    <v-button text="Удалить" type="default" @click="removeChild(child.id)" />
  </div>
</template>

<style scoped>
.child-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  column-gap: 1em;
}
</style>
