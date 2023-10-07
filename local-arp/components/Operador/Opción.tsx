export function Opción ({ value }: { value: string }) {
  return (
    <option
      value={value}
      className='text-sm text-gray-700 dark:text-gray-200 inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
      aria-labelledby='dropdown-button'
    >
      <span className='first-letter:capitalize'>{value}</span>
    </option>
  )
}
