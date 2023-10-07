import React from "react";
import TableActions from "../table/TableActions";
import Td from "../table/Td";

function MachineSimple({ machine }) {
  return (
    <tr className="">
      <Td>{machine.serial}</Td>
      <Td>{machine.machine_type?.name}</Td>
      <Td>{machine.details}</Td>
      <Td>{machine.status}</Td>
      <TableActions id={machine._id} name={"machines"} />
    </tr>
  );
}

export default MachineSimple;
