import React from 'react'
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'

import { TopBar } from '../components/TopBar'

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

describe('<TopBar />', () => {
  it("Should have text 'Next Thing Todo'", () => {
    act(() => {
      createRoot(container).render(
        <BrowserRouter>
          <TopBar />
        </BrowserRouter>
      )
    })
    expect(container.textContent).toBe('HomeNext Thing TodoSettings')
  })
})
