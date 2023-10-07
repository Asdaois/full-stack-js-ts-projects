import { DispositivosConIpYEstado } from 'types/Dispositivo'
import React from 'react'
import { TablaHeadDispositivos } from './TablaHeadDispositivos'
import { Table } from 'components/Table/Table'
import { TableRow } from 'components/Table/TableRow'

interface Props {
  dispositivos: DispositivosConIpYEstado | undefined | null
}
export function Dispositivos ({ dispositivos }: Props) {
  return (
    <Table>
      {TablaHeadDispositivos()}
      <tbody>
        {dispositivos?.map(device => (
          <TableRow
            key={device.mac}
            attributes={{
              className:
                'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600'
            }}
          >
            <th
              scope='row'
              className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              {device.name}
            </th>
            <td className='py-4 px-6'>{device.ip}</td>
            <td className='py-4 px-6'>{device.mac}</td>
            <td className='py-4 px-6'>
              {device.estado ? 'Conectado' : 'Desconectado'}
            </td>
            <td className='py-4 px-6 text-right'>
              <a
                href={`/dispositivos/${device.mac}`}
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </TableRow>
        ))}
      </tbody>
    </Table>
  )
}
