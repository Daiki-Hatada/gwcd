---
to: src/components/<%= level %>/<%= name %>/<%= name %>.test.tsx
unless_exists: true
---
import { render, screen } from '@testing-library/react'

import { <%= name %> } from './<%= name %>'

describe('<%= name %>', () => {
  describe('when enabled', () => {
    render(<<%= name %>/>)
    test('should be rendered', () => {
      const <%= name %>Element = screen.getByText(/<%= name %>/i)
      expect(<%= name %>Element).not.toBeNull()
    })
  })
})
