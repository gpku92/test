import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'

test('renders hello world text', () => {
  render(<App />)
  const textElement = screen.getByText(/ganesh, helloworld!!!/i)
  expect(textElement).toBeInTheDocument()
})
