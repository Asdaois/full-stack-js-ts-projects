import '../styles/globals.css'

import Aside from './aside'
import { ReactNode } from 'react'

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body className='min-h-screen flex bg-white dark:bg-gray-900 mx-auto container p-4'>
        <Aside />
        <main className='flex-1 min-w-0 overflow-auto px-2 '>{children}</main>
      </body>
    </html>
  )
}
