import { PropsSimple } from 'types/Common'

export function FormItemOperador ({ children }: PropsSimple) {
  return (
    <div className='relative w-full flex gap-4 items-baseline'>{children}</div>
  )
}
