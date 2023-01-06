<script lang="ts" setup>
const props = defineProps<{
  value: number
  unit: string
}>()
</script>

<template>
  <div class="px-1">
    <div
      class="relative flex flex-col items-center justify-center w-32 h-32 border border-yellow-300 text-yellow-200 text-4xl border-opacity-20"
    >
      <div class="relative overflow-hidden h-11 w-16">
        <transition>
          <span :key="props.value" class="numbers text-green absolute top-0 left-[50%]">{{
            props.value
          }}</span>
        </transition>
      </div>
      <p class="text-yellow-200 text-xs text-center opacity-50">{{ props.unit }}</p>
    </div>
  </div>
</template>

<style>
.numbers {
  transform: translateX(-50%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from {
  transform: translateY(-100%) translateX(-50%);
}
.v-leave-to {
  transform: translateY(100%) translateX(-50%);
}
.v-enter-to,
.v-leave-from {
  transform: translateY(0px) translateX(-50%);
}
</style>
