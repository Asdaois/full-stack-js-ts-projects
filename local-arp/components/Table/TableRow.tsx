import { HTMLAttributes } from 'react'
import { ReactNode } from 'types/Common'

interface Props {
  children: ReactNode
  attributes?: HTMLAttributes<HTMLTableRowElement>
}

export function TableRow ({ children, attributes }: Props) {
  return <tr className={attributes?.className}>{children}</tr>
}
