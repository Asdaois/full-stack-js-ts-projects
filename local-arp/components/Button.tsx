import { ReactNode } from '../types/Common'

interface Props {
  type: 'submit' | 'reset' | 'button'
  children: ReactNode
  disabled?: boolean
}

export function Button ({ children, type, disabled }: Props) {
  return (
    <button className='button' type={type} disabled={disabled}>
      {children}
    </button>
  )
}
