import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import React from "react";
import Td from "../table/Td";
import TableActions from "../table/TableActions";

function UserSimple({ user }) {
  return (
    <tr>
      <Td>
        <strong>{user.company}</strong>
      </Td>
      <Td>
        {user.first_name} {user.last_name}
      </Td>
      <Td>{user.phone_number}</Td>
      <TableActions id={user._id} name="users" />
    </tr>
  );
}

export default UserSimple;
