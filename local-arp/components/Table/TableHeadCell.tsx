import { ReactNode } from 'types/Common'

interface Props {
  element: ReactNode
}

export function TableHeadCell ({ element }: Props) {
  return (
    <th scope='col' className='py-3 px-6'>
      {element}
    </th>
  )
}
