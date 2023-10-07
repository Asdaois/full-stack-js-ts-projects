import { Line } from '../../components/Skeletons/Line'
import { Table } from 'components/Table/Table'
import { TableData } from 'components/Table/TableData'
import { TableHead } from 'components/Table/TableHead'
import { TableHeadCell } from 'components/Table/TableHeadCell'
import { TableRow } from 'components/Table/TableRow'

export default async function page () {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell element={<>ID</>} />
          <TableHeadCell element={<>Usuario</>} />
          <TableHeadCell element={<>Nombre</>} />
          <TableHeadCell element={<>Ficha</>} />
          <TableHeadCell element={<>Administrador</>} />
          <TableHeadCell element={<span className='sr-only'>Edit</span>} />
          <TableHeadCell element={<span className='sr-only'>Delete</span>} />
        </TableRow>
      </TableHead>
      <tbody>
        <TableRow>
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
        </TableRow>
        <TableRow>
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
        </TableRow>
        <TableRow>
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
        </TableRow>
        <TableRow>
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
        </TableRow>
        <TableRow>
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
          <TableData data={<Line />} />
        </TableRow>
      </tbody>
    </Table>
  )
}
