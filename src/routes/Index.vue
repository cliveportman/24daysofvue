<script lang="ts" setup>
import { routes } from '@/router/index'

routes.shift() // Remove the link to the homepage

</script>

<template>
  <div class="w-full ">
    <router-link
      v-for="(link, index) in routes"
      :to="link.path"
      class="w-full block mb-0.5 p-4 text-center bg-yellow-100 bg-opacity-20 text-3xl font-medium text-yellow-200 hover:opacity-50"
      >{{ link.name }}</router-link
    >
    <router-link
      v-for="(link, index) in routes"
      :to="link.path"
      class="w-full block mb-0.5 p-4 text-center bg-yellow-100 bg-opacity-20 text-3xl font-medium text-yellow-200 hover:opacity-50"
      >{{ link.name }}</router-link
    >
    <router-link
      v-for="(link, index) in routes"
      :to="link.path"
      class="w-full block mb-0.5 p-4 text-center bg-yellow-100 bg-opacity-20 text-3xl font-medium text-yellow-200 hover:opacity-50"
      >{{ link.name }}</router-link
    >
    <router-link
      v-for="(link, index) in routes"
      :to="link.path"
      class="w-full block mb-0.5 p-4 text-center bg-yellow-100 bg-opacity-20 text-3xl font-medium text-yellow-200 hover:opacity-50"
      >{{ link.name }}</router-link
    >
  </div>
</template>
