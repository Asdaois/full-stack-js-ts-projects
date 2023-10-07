import { FormItemOperador } from './FormItemOperador'
import { LabelOperador } from './LabelOperador'

export function VecesDesconectado () {
  return (
    <FormItemOperador>
      <LabelOperador>Alerta con veces desconectado de:</LabelOperador>
      <input
        type='number'
        name='vecesDesconectado'
        id='veces-desconectado'
        className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-50 rounded-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
        placeholder='1'
        defaultValue={1}
      />
    </FormItemOperador>
  )
}
