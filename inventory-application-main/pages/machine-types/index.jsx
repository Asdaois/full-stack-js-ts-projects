import Layout from "@/components/Layout";
import React from "react";
import { getAll } from "../../util/axiosRequests";
import useSWR from "swr";
import TableLayout from "../../components/table/TableLayout";
import MachineTypesSimple from "../../components/machine-types/MachineTypesSimple";

function MachineTypes() {
  const { data: response, error } = useSWR("/api/machine-types/", getAll);

  if (error) return "An error has ocurred.";
  if (!response) return <Layout>Loading...</Layout>;

  return (
    <Layout>
      <div className="">
        <TableLayout headers={["Name"]}>
          {response.data.map((machineType) => {
            return (
              <MachineTypesSimple
                key={machineType._id}
                machineType={machineType}
              />
            );
          })}
        </TableLayout>
      </div>
    </Layout>
  );
}

export default MachineTypes;
