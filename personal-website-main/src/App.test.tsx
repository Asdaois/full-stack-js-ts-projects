import { render, screen } from '@testing-library/react'

import App from './App'
import React from 'react'

test('renders init page', () => {
  render(<App />)
  expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
})
