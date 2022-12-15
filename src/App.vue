<script lang="ts" setup>
import { watch, ref } from 'vue'
import type { Ref } from 'vue'

import HomeLayout from '@/router/layout/HomeLayout.vue'
import DefaultLayout from '@/router/layout/DefaultLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout: Ref<string | {}> = ref('home')

watch(route, () => {
  if (route.meta.layout == 'home') layout.value = 'home'
  else layout.value = 'default'
})
</script>

<template>
  <HomeLayout v-if="layout == 'home'" />
  <DefaultLayout v-if="layout == 'default'" />
</template>
