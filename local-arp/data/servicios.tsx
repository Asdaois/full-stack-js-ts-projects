import { IServicios } from 'types/Servicio'

export const servicios: IServicios = [
  {
    title: 'Ventajas',
    description: (
      <ul>
        <li>Visibilidad de la red</li>
        <li>Gestión de riesgos y cumplimiento.</li>
        <li>Prevención del tiempo de inactividad.</li>
        <li>Planificación de capacidad.</li>
      </ul>
    ),
    icon: (
      <>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3' />
      </>
    )
  },
  {
    title: 'Objetivos',
    description:
      'Optimización del funcionamiento de los equipos y la reducción de errores en la red de la empresa. Posibilidad de comprobar, antes que ocurra cualquier problema, de la presencia de algún elemento que pueda estar ocasionando una bajada en el rendimiento en los equipos de la empresa.',
    icon: (
      <>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <rect x='5' y='3' width='14' height='18' rx='2' />
        <line x1='9' y1='7' x2='15' y2='7' />
        <line x1='9' y1='11' x2='15' y2='11' />
        <line x1='9' y1='15' x2='13' y2='15' />
      </>
    )
  },
  {
    title: 'Importancia',
    description:
      'Permite hacer un seguimiento de diversos aspectos de la red y su funcionamiento, como el tráfico y el tiempo de actividad. Puede detectar dispositivos y otros elementos que componen o tocan la red, además de proporcionar actualizaciones de estado.',
    icon: (
      <>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <line x1='12' y1='12' x2='12' y2='12.01' />
        <path d='M14.828 9.172a4 4 0 0 1 0 5.656' />
        <path d='M17.657 6.343a8 8 0 0 1 0 11.314' />
        <path d='M9.168 14.828a4 4 0 0 1 0 -5.656' />
        <path d='M6.337 17.657a8 8 0 0 1 0 -11.314' />
      </>
    )
  }
]
