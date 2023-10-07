import React from 'react'
import DeleteButton from '../buttons/DeleteButton'
import EditButton from '../buttons/EditButton'
import Td from './Td'

function TableActions({name, id}) {
  return (
    <div>
      <Td center={true}>
        <EditButton url={`/${name}/create/${id}`}/>
      </Td>
      <Td center={true}>
        <DeleteButton url={`/api/${name}/${id}`}/>
      </Td>
    </div>
  )
}

export default TableActions