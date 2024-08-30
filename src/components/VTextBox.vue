<script setup lang="ts">
import { ref } from 'vue'

const value = defineModel('value')
const props = defineProps<{ label: string }>()

const isFocused = ref(false)
const onFocus = () => {
  isFocused.value = true
}

const onBlur = () => {
  isFocused.value = false
}
</script>

<template>
  <div class="custom-input">
    <label :class="{ active: isFocused || value }"> {{ props.label }}</label>
    <input type="text" v-model.number="value" @focus="onFocus" @blur="onBlur" />
  </div>
</template>

<style scoped></style>
