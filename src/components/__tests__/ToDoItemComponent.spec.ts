import type { ToDoItem } from './../../domain/ToDoItem'
import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ToDoItemComponent from '../ToDoItemComponent.vue'

describe('ToDoItemComponent', () => {
  it('renders properly', () => {
    const testItem: ToDoItem = { id: '1', isDone: false, position: 1, text: 'Text' }
    console.log(JSON.stringify(testItem))
    const wrapper = mount(ToDoItemComponent, { props: { item: testItem } })
    expect(wrapper.text()).toContain('Text')
  })
})
