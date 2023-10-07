interface Props {
  onVerMas?: () => void
  onCancelar?: () => void
}
export function VerMas ({ onCancelar, onVerMas }: Props) {
  return (
    <div className='flex'>
      <button
        type='button'
        className='text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900'
        onClick={onVerMas}
      >
        <svg
          aria-hidden='true'
          className='-ml-0.5 mr-2 h-4 w-4'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
          <path
            fillRule='evenodd'
            d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
            clipRule='evenodd'
          />
        </svg>
        Ver Dispositivos que requieren atención
      </button>
      <button
        type='button'
        className='text-blue-900 bg-transparent border border-blue-900 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white'
        data-dismiss-target='#alert-additional-content-1'
        aria-label='Close'
        onClick={onCancelar}
      >
        Ver Dispositivos
      </button>
    </div>
  )
}
