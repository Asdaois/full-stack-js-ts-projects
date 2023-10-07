import React from 'react'
import { TableHead } from 'components/Table/TableHead'
import { TableHeadCell } from 'components/Table/TableHeadCell'
import { TableRow } from 'components/Table/TableRow'

export function TablaHeadDispositivos () {
  return (
    <TableHead>
      <TableRow>
        <TableHeadCell element={<>Nombre</>} />
        <TableHeadCell element={<>IP</>} />
        <TableHeadCell element={<>MAC</>} />
        <TableHeadCell element={<>Estado</>} />
        <TableHeadCell element={<span className='sr-only'>Edit</span>} />
      </TableRow>
    </TableHead>
  )
}
