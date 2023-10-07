import { ReactNode } from 'types/Common'

interface Props {
  children: ReactNode
}

export function TableRow ({ children }: Props) {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
      {children}
    </tr>
  )
}
