import { ReactNode } from 'types/Common'

interface Props {
  children: ReactNode
}

export function Table ({ children }: Props) {
  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        {children}
      </table>
    </div>
  )
}
