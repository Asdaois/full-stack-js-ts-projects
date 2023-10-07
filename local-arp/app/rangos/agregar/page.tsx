/* eslint-disable prefer-regex-literals */
import { Button } from '../../../components/Button'
import { Form } from '../../../components/Form'
import { FormItem } from '../../../components/FormItem'

export default function page () {
  return (
    <Form action='/api/rangos' method='post'>
      <FormItem
        inputProps={{ required: true }}
        label='Prefijo'
        name='prefijo'
        placeholder='192.168.0'
        type='text'
      />
      <FormItem
        inputProps={{ required: true }}
        label='Desde'
        name='desde'
        placeholder='0'
        type='number'
      />
      <FormItem
        inputProps={{ required: true }}
        label='Hasta'
        name='hasta'
        placeholder='255'
        type='number'
      />
      <Button type='submit'>Agregar Rango</Button>
    </Form>
  )
}
