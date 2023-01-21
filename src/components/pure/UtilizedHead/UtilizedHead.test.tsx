import { render, waitFor } from '@testing-library/react'

import { UtilizedHead } from '.'

jest.mock('next/head', () => ({
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => children,
  }))

describe('UtilizedHead', () => {
  test('has designated title and open graph title', async () => {
    const testTitle = 'Test Me!'
    render(<UtilizedHead title={testTitle} />)
    await waitFor(() => {
      expect(document.title).toEqual(testTitle)
    })
  })
})

afterAll(() => {
  jest.unmock('next/head')
})
