<script setup lang="ts">
import { computed } from 'vue'
import { useNow } from '@vueuse/core'
import UnitVue from './components/Unit.vue'

const now = useNow()
const christmas = new Date('12/25/2023 00:00:00')
const days = computed(() => {
  const one_day = 1000 * 60 * 60 * 24
  return (christmas.getTime() - now.value.getTime()) / one_day
})
const daysRounded = computed(() => {
  return Math.floor(days.value)
})

const hours = computed(() => {
  return 24 * (days.value - daysRounded.value)
})
const hoursRounded = computed(() => {
  return Math.floor(hours.value)
})

const minutes = computed(() => {
  return 60 * (hours.value - hoursRounded.value)
})
const minutesRounded = computed(() => {
  return Math.floor(minutes.value)
})

const seconds = computed(() => {
  return 60 * (minutes.value - minutesRounded.value)
})
const secondsRounded = computed(() => {
  return Math.floor(seconds.value)
})

const milliseconds = computed(() => {
  return 10 * (seconds.value - secondsRounded.value)
})
const millisecondsRounded = computed(() => {
  return Math.floor(milliseconds.value)
})
</script>

<template>
  <div class="">
    <h1 class="w-full px-2 text-yellow-200 opacity-50">Countdown to Christmas 2023</h1>
    <div class="w-full h-full flex justify-center items-center">
      <UnitVue :value="daysRounded" unit="days" />
      <UnitVue :value="hoursRounded" unit="hours" />
      <UnitVue :value="minutesRounded" unit="minutes" />
      <UnitVue :value="secondsRounded" unit="seconds" />
      <!-- <UnitVue :value="millisecondsRounded" unit="deciseconds" /> -->
    </div>
  </div>
</template>
