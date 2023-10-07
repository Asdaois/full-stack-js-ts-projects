import { EstadoDelDispositivo } from './EstadoDelDispositivo'
import { FormEvent } from 'react'
import { NombreDelDispositivo } from './NombreDelDispositivo'
import { VecesDesconectado } from './VecesDesconectado'

export interface ParámetrosDeBúsqueda {
  nombre: string
  estado: 'no relevante' | 'desconectados' | 'conectados'
  vecesDesconectado: number
}

interface Props {
  actualizarValoresExternos: (parámetros: ParámetrosDeBúsqueda) => void
}

export function ControlDeOperador ({ actualizarValoresExternos }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const parámetrosDeBúsqueda: ParámetrosDeBúsqueda = {
      nombre: event.currentTarget.nombre.value,
      estado: event.currentTarget.estado.value,
      vecesDesconectado: Number(event.currentTarget.vecesDesconectado.value)
    }

    actualizarValoresExternos(parámetrosDeBúsqueda)
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <NombreDelDispositivo />
      <EstadoDelDispositivo />
      <VecesDesconectado />
      <button
        type='submit'
        className='flex gap-2 justify-center w-28 dark:text-white p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        <span>Buscar</span>
        <svg
          aria-hidden='true'
          className='w-5 h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </button>
    </form>
  )
}
