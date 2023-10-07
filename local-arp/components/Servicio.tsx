import { IServicio } from '../types/Servicio'

interface Props {
  servicio: IServicio
}

export function Servicio ({ servicio: { icon, description, title } }: Props) {
  return (
    <article className='flex-col justify-center items-center block max-w-sm p-6 rounded-lg text-center min-w-[30%]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-10 h-10 mb-2 text-gray-500 dark:text-gray-400 text-center mx-auto fill-current'
        width='64'
        height='64'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='#000000'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {icon}
      </svg>
      <h4 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center'>
        {title}
      </h4>
      <p>{description}</p>
    </article>
  )
}
