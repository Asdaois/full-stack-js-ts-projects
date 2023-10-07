// ?INFO: cuidado con modificar los src de los links
// ?porque tendrás que modificar los enlace del middleware para reflejar los cambios
import { LinksData } from '../types/Link'

export const linksPublic: LinksData = [{ label: 'Inicio', src: '/' }]

export const linksSupervisor: LinksData = [
  {
    label: 'Dispositivos',
    src: '/dispositivos'
  }
]

export const linksAdministrador: LinksData = [
  {
    label: 'Agregar rango de dispositivos',
    src: '/rangos/agregar'
  },
  {
    label: 'Usuarios',
    src: '/usuarios'
  },
  {
    label: 'Agregar usuario nuevo',
    src: '/usuarios/agregar'
  }
]
