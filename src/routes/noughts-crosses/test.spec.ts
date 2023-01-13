import { assert, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Index from './Index.vue'

test('mount component', async () => {
  expect(Index).toBeTruthy()
})
