import { ReactNode } from 'types/Common'

export function LabelOperador ({ children }: { children: ReactNode }) {
  return (
    <label
      htmlFor='dropdown'
      className='w-1/4 mb-2 text-sm font-medium text-gray-900 dark:text-white'
    >
      {children}
    </label>
  )
}
