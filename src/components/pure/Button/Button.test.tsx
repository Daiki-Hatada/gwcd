import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from '.'

describe('Button', () => {
  describe('when enabled', () => {
    test('should call event handler passed to onClick attribute', () => {
      const onClickMock = jest.fn()
      render(<Button onClick={onClickMock}>Test Me!</Button>)
      fireEvent.click(screen.getByRole('button'))
      expect(onClickMock).toHaveBeenCalled()
    })
  })
  describe('when disabled', () => {
    test('should not call event handler passed to onClick attribute', () => {
      const onClickMock = jest.fn()
      render(
        <Button disabled onClick={onClickMock}>
          Test Me!
        </Button>,
      )
      fireEvent.click(screen.getByRole('button'))
      expect(onClickMock).not.toHaveBeenCalled()
    })
  })
  describe('on loading', () => {
    test('should not display its children', () => {
      const { rerender } = render(<Button>Test Me!</Button>)
      screen.getByText('Test Me!')
      rerender(<Button loading>Test Me!</Button>)
      expect(screen.queryByText('Test Me!')).toBeFalsy()
    })
    test('should not allow click action to call event handler passed to onClick attribute', () => {
      const onClickMock = jest.fn()
      const { rerender } = render(<Button onClick={onClickMock}>Test Me!</Button>)
      screen.getByText('Test Me!')
      rerender(<Button loading>Test Me!</Button>)
      fireEvent.click(screen.getByRole('button'))
      expect(onClickMock).not.toHaveBeenCalled()
    })
  })
})
