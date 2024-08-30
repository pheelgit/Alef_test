<script setup lang="ts">
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

interface Props {
  text: string
  type: 'primary' | 'outlined' | 'default'
  iconName?: string
  onClick?: () => void
}

console.log(icons)
const props = withDefaults(defineProps<Props>(), {
  onClick: () => {}
})

const icon = computed(() => {
  if (props.iconName && icons[props.iconName as keyof typeof icons]) {
    return icons[props.iconName as keyof typeof icons]
  }
  return null
})
</script>

<template>
  <button
    :class="['custom-button', `custom-button--${type}`, { 'custom-button--with-icon': !!icon }]"
    @click="onClick"
  >
    <component :is="icon" v-if="icon" class="custom-button__icon" :size="18" />
    {{ text }}
  </button>
</template>

<style scoped>
.custom-button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s,
    color 0.3s;
  font-size: 1rem;
  line-height: 1.5rem;
}

.custom-button--primary {
  background-color: #3b82f6;
  color: white;
  border: none;
}

.custom-button--primary:hover {
  background-color: #2563eb;
}

.custom-button--outlined {
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
}

.custom-button--outlined:hover {
  background-color: #eff6ff;
}

.custom-button--default {
  background-color: transparent;
  border: none;
  color: #374151;
}

.custom-button--default:hover {
  color: #1f2937;
}

.custom-button--with-icon {
  padding-left: 0.75rem;
}

.custom-button__icon {
  margin-right: 0.5rem;
}
</style>
