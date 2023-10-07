import { FormItemOperador } from './FormItemOperador'
import { LabelOperador } from './LabelOperador'
import { Opción } from './Opción'

export function EstadoDelDispositivo () {
  return (
    <FormItemOperador>
      <LabelOperador>Estado de los dispositivos:</LabelOperador>
      <div className='w-full'>
        <select
          id='dropdown'
          name='estado'
          defaultValue='no relevante'
          className='divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
          data-popper-reference-hidden=''
          data-popper-escaped=''
          data-popper-placement='top'
        >
          <Opción value='no relevante' />
          <Opción value='conectados' />
          <Opción value='desconectados' />
        </select>
      </div>
    </FormItemOperador>
  )
}
