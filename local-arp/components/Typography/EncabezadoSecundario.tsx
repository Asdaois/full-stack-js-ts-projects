import { ReactNode } from 'types/Common'

export interface Props {
  children: ReactNode
}

export function EncabezadoSecundario ({ children }: Props) {
  return <h2 className='text-4xl font-extrabold dark:text-white'>{children}</h2>
}
