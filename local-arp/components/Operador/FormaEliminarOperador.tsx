export function FormaEliminarOperador ({ id }: { id: number }) {
  return (
    <form action='api/usuarios/eliminar' method='POST' className=''>
      <input type='text' value={id} hidden name='id' />
      <input type='submit' value='Eliminar' className='cursor-pointer' />
    </form>
  )
}
