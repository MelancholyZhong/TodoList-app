import React from 'react'
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'

import { TodoList } from '../components/TodoList'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // unmountComponentAtNode(container);
  container.remove()
  container = null
})

describe('<TodoList />', () => {
  it("Should have text 'Todos & Finished Todos'", () => {
    act(() => {
      createRoot(container).render(
        <BrowserRouter>
          <TodoList />
        </BrowserRouter>
      )
    })
    const todos = document.querySelector('[data-testid = todos_title]')
    expect(todos.textContent).toBe('Todos')
    const finished_todos = document.querySelector('[data-testid = finished_todos_title]')
    expect(finished_todos.textContent).toBe('Finished Todos')
  })
})
