<script setup lang="ts">
const value = defineModel('value')
const props = defineProps<{ label: string }>()
</script>

<template>
  <div>
    <label> {{ props.label }}</label>
    <input type="number" v-model="value" />
  </div>
</template>

<style scoped></style>
