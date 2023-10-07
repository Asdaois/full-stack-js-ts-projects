import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { Line } from 'components/Skeletons/Line'

export default async function page () {
  return (
    <Form action='/api/dispositivos' method='post'>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Button type='submit' disabled>
        Actualizar información del equipo
      </Button>
    </Form>
  )
}
