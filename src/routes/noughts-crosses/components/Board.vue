<script setup lang="ts">
import { ref } from 'vue'

import Square from './Square.vue'

const lines = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // horizontal lines
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // vertical lines
  [1, 5, 9],
  [3, 5, 7], // diagonal lines
]

const emptyState = {
  board: ['', '', '', '', '', '', '', '', ''],
  scoreX: [],
  scoreO: [],
  win: [],
  playable: true,
}

const turnX = ref(true)
const state = ref(emptyState)

const handleSelect = (index: number) => {
  if (!state.value.playable) return

  state.value.board[index] = turnX.value ? 'X' : 'O'

  if (turnX.value === true) {
    state.value.scoreX.push(index + 1)
    checkForWin(state.value.scoreX)
  }

  if (turnX.value === false) {
    state.value.scoreO.push(index + 1)
    checkForWin(state.value.scoreO)
  }

  if (state.value.scoreX.length == 5) state.value.playable = false

  turnX.value = !turnX.value
}

const checkForWin = (scores) => {
  const index = lines.findIndex((line) => line.every((item) => scores.includes(item)))
  if (index !== -1) {
    state.value.win = lines[index]
    state.value.playable = false
  }
}

const reset = () => {
  state.value = {
    board: ['', '', '', '', '', '', '', '', ''],
    scoreX: [],
    scoreO: [],
    win: [],
    playable: true,
  }
}
</script>

<template>
  <div class="grid grid-cols-3 gap-1">
    <Square
      v-for="(square, index) in state.board"
      :value="state.board[index]"
      :win="state.win.includes(index + 1)"
      @selected="handleSelect(index)"
    />
  </div>
  <button
    type="button"
    @click="reset"
    class="block w-full h-16 text-xl font-bold text-yellow-200 uppercase"
    :class="[state.scoreX.length ? '' : 'opacity-10']"
  >
    Start again
  </button>
</template>
