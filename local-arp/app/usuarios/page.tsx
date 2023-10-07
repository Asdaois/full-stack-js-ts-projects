import { FormaEliminarOperador } from '../../components/Operador/FormaEliminarOperador'
import { Table } from 'components/Table/Table'
import { TableData } from 'components/Table/TableData'
import { TableDataPrincipal } from 'components/Table/TableDataPrincipal'
import { TableHead } from 'components/Table/TableHead'
import { TableHeadCell } from 'components/Table/TableHeadCell'
import { TableRow } from 'components/Table/TableRow'
import { Usuarios } from 'types/User'
import fetchJson from 'lib/fetchJson'

export default async function page () {
  const usuarios = await fetchJson<Usuarios>(
    'http://localhost:3000/api/usuarios'
  )

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell element={<>ID</>} />
          <TableHeadCell element={<>Usuario</>} />
          <TableHeadCell element={<>Nombre</>} />
          <TableHeadCell element={<>Ficha</>} />
          <TableHeadCell element={<>Administrador</>} />
          <TableHeadCell element={<span className='sr-only'>Delete</span>} />
        </TableRow>
      </TableHead>
      <tbody>{MostrarUsuarios()}</tbody>
    </Table>
  )

  function MostrarUsuarios () {
    if (usuarios.length === 0) {
      return (
        <TableRow>
          No hay usuarios registrados en el sistema por favor{' '}
          <a className='link' href='/usuarios/agregar'>
            créelos
          </a>
          !
        </TableRow>
      )
    }
    return usuarios.map(usuario => {
      return (
        <TableRow key={usuario.id}>
          <TableData data={<>{usuario.id}</>} />
          <TableDataPrincipal data={<>{usuario.usuario}</>} />
          <TableData data={<>{usuario.nombre}</>} />
          <TableData data={<>{usuario.ficha}</>} />
          <TableData data={<>{usuario.esAdministrador ? 'SI' : 'NO'}</>} />
          <TableData data={<FormaEliminarOperador id={usuario.id} />} />
        </TableRow>
      )
    })
  }
}
