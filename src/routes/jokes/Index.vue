<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'

let ready: boolean = false

const joke: Ref<{ setup: string; delivery?: string }> = ref({ setup: '' })
const showAnswer = ref(false)

const getJoke = async () => {
  fetch('https://v2.jokeapi.dev/joke/Pun')
    .then((res) => res.json())
    .then((json) => {
      if (!json.setup) getJoke()
      else {
        joke.value = json
        ready = true
        showAnswer.value = false
      }
    })
}

onMounted(() => {
  getJoke()
})
</script>

<template>
  <div class="max-w-prose w-full h-full flex flex-col justify-center items-center p-4">
    <h3 class="mb-4 text-xl text-yellow-200">Q: "{{ joke.setup }}"</h3>

    <p class="py-4 text-xl text-yellow-200" v-if="showAnswer">A: "{{ joke.delivery }}"</p>

    <button
      class="mt-8 p-4 bg-yellow-200 hover:opacity-50 text-teal-900 text-lg font-medium"
      v-if="!showAnswer"
      type="button"
      @click="showAnswer = true"
    >
      Show the answer
    </button>

    <button
      class="mt-8 bg-yellow-200 hover:opacity-50 p-4 text-teal-900 text-lg font-medium"
      v-if="showAnswer"
      type="button"
      @click="getJoke"
    >
      Get a new joke
    </button>
  </div>
</template>
