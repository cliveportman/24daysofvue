<script lang="ts" setup>
import { routes } from '@/router/index'
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <router-link
      v-for="(link, index) in routes"
      :to="link.path"
      class="block text-3xl p-2 font-medium text-yellow-200 hover:opacity-50"
      >{{ link.name }}</router-link
    >
  </div>
</template>
