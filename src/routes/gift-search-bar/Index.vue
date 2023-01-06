<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { debounce } from 'debounce'
const searchTerm = ref('')
const products: Ref<{ thumbnail: string; title: string; price: string; stock: number }[]> = ref([])
const findProducts = debounce(async (term: string) => {
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
    <ul v-if="products.length" class="sm:w-96">
      <li v-for="product in products" class="flex justify-start items-start mb-4">
        <div
          class="box-content shrink-0 h-20 w-20 flex justify-center items-center border-2 border-yellow-200 relative"
        >
          <svg
            class="animate-spin h-5 w-5 text-yellow-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="absolute top-0 left-0 block h-20 w-20 object-cover object-center"
          />
        </div>
        <div class="pl-4">
          <h3 class="text-lg font-medium text-yellow-200 text-left leading-tight">
            {{ product.title }}
          </h3>
          <p class="text-yellow-200 leading-tight text-sm">£{{ product.price }}.00</p>
          <p class="text-yellow-200 leading-tight text-sm">
            {{ product.stock > 20 ? 'In stock' : product.stock > 0 ? 'Low stock' : 'Out of stock' }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
