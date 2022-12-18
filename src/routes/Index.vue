<script lang="ts" setup>

const links = [
  { href: 'noughts-crosses', title: 'Noughts & Crosses' },
  { href: 'gift-search-bar', title: 'Gift Search Bar' },
  { href: 'jokes', title: 'Jokes' },
]

</script>

<template>
  <div class="flex flex-col items-center justify-center">
  
    <router-link v-for="link, index in links"
      :to="link.href"
      class="block text-3xl p-2 font-medium text-yellow-200 hover:opacity-50"
      >{{ link.title }}</router-link
    >
    
  </div>
</template>
