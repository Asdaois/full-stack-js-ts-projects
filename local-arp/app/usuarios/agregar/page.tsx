import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { FormItem } from 'components/FormItem'

export default function page () {
  return (
    <div className='p'>
      <Form action='/api/registrar-usuario' method='post'>
        <FormItem
          inputProps={{ required: true }}
          label='Ficha'
          name='ficha'
          type='number'
          placeholder='0000'
        />
        <FormItem
          inputProps={{ required: true }}
          label='Usuario'
          name='usuario'
          type='string'
          placeholder='admin'
        />
        <div className='flex flex-col w-full mb-4'>
          <label htmlFor='esAdministrador' className='label'>
            Administrador
          </label>
          <input
            className='input-checkbox'
            type='checkbox'
            name='esAdministrador'
            id='esAdministrador'
          />
        </div>

        <FormItem
          inputProps={{ required: true }}
          label='Nombre'
          name='nombre'
          type='string'
          placeholder='admin'
        />
        <FormItem
          inputProps={{ required: true }}
          label='Contraseña'
          name='password'
          type='password'
          placeholder=''
        />
        <FormItem
          inputProps={{ required: true }}
          label='Confirmar contraseña'
          name='passwordConfirmation'
          type='password'
          placeholder=''
        />
        <Button type='submit'>Agregar usuario nuevo</Button>
      </Form>
    </div>
  )
}
