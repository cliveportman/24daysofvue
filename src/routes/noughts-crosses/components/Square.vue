<script setup lang="ts">
const props = defineProps<{
  value: string | null
  win: boolean
}>()
</script>

<template>
  <div class="w-32 h-32">
    <button
      type="button"
      @click="$emit('selected')"
      :disabled="props.value != ''"
      class="w-full h-full font-bold text-6xl"
      :class="[props.win ? 'bg-yellow-400 text-cyan-900' : 'bg-yellow-300 text-cyan-900']"
    >
      {{ props.value }}
    </button>
  </div>
</template>
