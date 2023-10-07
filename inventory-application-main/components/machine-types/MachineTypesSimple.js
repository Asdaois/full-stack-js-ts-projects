import React from "react";
import Td from '../table/Td'
import TableActions from '../table/TableActions'

function MachineTypesSimple({ machineType }) {
  return (
    <tr>
      <Td>{machineType.name}</Td>
      <TableActions id={machineType._id} name="machine-types" />
    </tr>
  );
}

export default MachineTypesSimple;
