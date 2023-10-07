import { ReactNode } from 'types/Common'

interface Props {
  children: ReactNode
}

export function TableHead ({ children }: Props) {
  return (
    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
      {children}
    </thead>
  )
}
