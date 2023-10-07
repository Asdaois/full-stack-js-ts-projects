import { ReactNode } from 'types/Common'

interface Props {
  data: ReactNode
}

export function TableData ({ data }: Props) {
  return <td className='py-4 px-6'>{data}</td>
}
