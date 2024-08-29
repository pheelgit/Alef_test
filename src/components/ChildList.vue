<script setup lang="ts">
import type { ChildrenType } from '@/types/form.types'
import VTextBox from '@/components/VTextBox.vue'
import VNumberBox from '@/components/VNumberBox.vue'

defineProps<{ children: ChildrenType[] }>()
</script>

<template>
  <div class="child" v-for="child of children" :key="child.id">
    <v-text-box label="Имя" :text="child.name" />
    <v-number-box label="Возвраст" :number="child.years" />
  </div>
</template>

<style scoped></style>
