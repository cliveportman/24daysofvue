<script lang="ts" setup>
import { routes } from '@/router/index'
import type { Route } from '@/router/index'

const links: Route[] = routes.filter( route => route.name != 'Home') // Remove the link to the homepage

</script>

<template>
  <div class="w-full ">
    <router-link
      v-for="(link, index) in links"
      :to="link.path"
      class="w-full block mb-0.5 p-4 text-center text-3xl font-medium button-colours"
      >{{ link.name }}</router-link
    >
  </div>
</template>
