import {
  ButtonSubmit,
  InputNumber,
  InputSelect,
  InputText,
} from "../../components/form";

import Layout from "../../components/Layout";
import React from "react";
import { getAll } from "../../util/axiosRequests";
import useSWR from "swr";

function Create() {
  const { data: machineTypes, error } = useSWR("/api/machine-types/", getAll);

  return (
    <Layout>
      <form
        className="w-full max-w-sm"
        method="post"
        action="/api/machines/"
      >
        <InputSelect
          displayName="Status"
          name="status"
          // Can get the list of status from Model machinery
          options={["Damaged", "Maintenance", "Available", "Rented"]}
        />
        <InputSelect
          displayName="Machine Type"
          name="machine_type"
          options={machineTypes?.data.map((value) => value.name)}
        />
        <InputText displayName="Serial" name="serial" required={true} />
        <InputText displayName="Details" name="details" required={true} />
        <InputNumber displayName="Prize" name="prize" required={true} />
        <ButtonSubmit value="Add new Machine" />
      </form>
    </Layout>
  );
}

export default Create;
