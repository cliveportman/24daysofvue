<script setup>
import { ref, watch } from 'vue'
import { debounce } from 'debounce'
const searchTerm = ref('')
const products = ref([])
const findProducts = debounce(async (term) => {
  fetch('https://dummyjson.com/products/search?q=' + term)
    .then((res) => res.json())
    .then((json) => {
      products.value = []
      products.value = json.products
    })
}, 300)
watch(searchTerm, (term) => {
  if (term.length > 2) findProducts(term)
  else products.value = []
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-start items-center">
    <label class="text-yellow-200"
      >Search for a product:
      <input
        type="text"
        class="block sm:w-96 p-3 mt-2 border-yellow-200 border bg-transparent text-yellow-200 placeholder:text-yellow-200 placeholder:text-opacity-25 font-medium text-center"
        v-model="searchTerm"
        placeholder="e.g. 'phone'"
      />
    </label>
    <ul v-if="products.length" class="grid grid-cols-2 gap-4 sm:w-96">
      <li v-for="product in products" class="relative">
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="block w-full h-24 object-cover object-center"
        />
        <h3 class="p-2 bg-teal-700 bg-opacity-75 text-yellow-200 text-right">
          {{ product.title }}
        </h3>
      </li>
    </ul>
  </div>
</template>
