<script setup lang="ts">
import { ref } from 'vue'
import { ArrowDownIcon } from '@heroicons/vue/24/solid'

const rows = ref(10)

const createArray = (n: number) => {
  if (n === 0) {
    return [0]
  } else {
    const arr: number[] = createArray(n - 1)
    arr.push(n)
    return arr
  }
}
</script>

<template>
  <div class="absolute right-2 top-2 flex justify-center">
    <button type="button" @click="rows--" class="block w-12 h-12 bg-yellow-100 bg-opacity-20">
      <div class="flex w-12 h-12 justify-center items-center">
        <ArrowDownIcon class="h-6 w-6 text-yellow-200" />
      </div>
    </button>
    <button type="button" @click="rows++" class="ml-1 block w-12 h-12 bg-yellow-100 bg-opacity-20">
      <div class="flex w-12 h-12 justify-center items-center">
        <ArrowDownIcon class="h-6 w-6 text-yellow-200 rotate-180" />
      </div>
    </button>
  </div>
  <div class="w-screen overflow-hidden">
    <div v-for="(row, rIndex) in createArray(rows)" class="flex justify-center items-center">
      <div
        v-for="(square, sIndex) in createArray(row)"
        class="w-2 h-2 border border-yellow-200 bg-red-400 box-content"
      ></div>
    </div>
  </div>
</template>
