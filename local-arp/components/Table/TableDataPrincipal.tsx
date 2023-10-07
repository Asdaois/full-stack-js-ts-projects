import { ReactNode } from 'types/Common'

interface Props {
  data: ReactNode
}

export function TableDataPrincipal ({ data }: Props) {
  return (
    <th
      scope='row'
      className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
    >
      {data}
    </th>
  )
}
