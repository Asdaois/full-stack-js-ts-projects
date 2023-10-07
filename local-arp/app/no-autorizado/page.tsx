import Danger from 'components/Alerts/Danger'

export default function page () {
  return (
    <Danger mensaje='Usted no dispone de los permisos necesarios para acceder a esta de la aplicación'>
      Si requiere de esta funcionalidad por favor póngase en contacto con un
      administrador
    </Danger>
  )
}
