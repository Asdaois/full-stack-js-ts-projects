import { Line } from 'components/Skeletons/Line'
import { TablaHeadDispositivos } from '../../components/Dispositivos/TablaHeadDispositivos'
import { Table } from 'components/Table/Table'
import { TableData } from 'components/Table/TableData'
import { TableRow } from 'components/Table/TableRow'

export default function loading () {
  return CargandoDispositivos()
}

export function CargandoDispositivos () {
  return (
    <Table>
      <TablaHeadDispositivos />

      <tbody>
        <TableRow>
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
        </TableRow>
        <TableRow>
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
        </TableRow>
        <TableRow>
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
        </TableRow>
        <TableRow>
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
