import Layout from "@/components/Layout";
import MachineSimple from "@/components/machine/MachineSimple";
import React from "react";
import { getAll } from "../../util/axiosRequests";
import useSWR from "swr";
import TableLayout from "../../components/table/TableLayout";

function Machines() {
  const { data: response, error } = useSWR("/api/machines/", getAll);

  if (error) return "An error has ocurred.";
  if (!response) return <Layout>"Loading...</Layout>;
  return (
    <Layout>
      <div className="">
        <TableLayout
          headers={["Serial", "Machine Type", "Description", "Status"]}
        >
          {response.data.map((machine) => {
            return <MachineSimple key={machine._id} machine={machine} />;
          })}
        </TableLayout>
      </div>
    </Layout>
  );
}

export default Machines;
