import { Button } from '../../../components/Button'
import { CaracteresEspeciales } from '../../../util/CaracteresEspeciales'
import { Dispositivo } from 'types/Dispositivo'
import { Form } from '../../../components/Form'
import { FormItem } from '../../../components/FormItem'
import fetchJson from 'lib/fetchJson'

interface Props {
  params: {
    mac: string
  }
}

export default async function page ({ params }: Props) {
  const dispositivo = await fetchJson<Dispositivo>(
    `http://localhost:3000/api/dispositivos/${CaracteresEspeciales.decode(
      params.mac
    )}`
  )

  return (
    <Form action='/api/dispositivos' method='post'>
      <input
        type='hidden'
        name='mac'
        value={CaracteresEspeciales.decode(params.mac)}
      />
      <FormItem
        label='Nombre'
        name='name'
        placeholder='Ingrese el nombre del equipo'
        type='text'
        defaultValue={dispositivo.name}
      />
      <FormItem
        label='Descripcion'
        name='descripcion'
        placeholder='Ingrese la descripcion del equipo'
        type='text'
        defaultValue={dispositivo.descripcion}
      />
      <Button type='submit'>Actualizar información del equipo</Button>
    </Form>
  )
}
