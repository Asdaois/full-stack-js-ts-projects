import { ReactNode } from '../types/Common'

interface Props {
  action: string
  method: 'post' | 'get' | 'put'
  children: ReactNode
}

export function Form ({ action, method, children }: Props) {
  return (
    <form action={action} method={method} className='flex flex-col gap-4'>
      {children}
    </form>
  )
}
