import {
  ButtonSubmit,
  InputNumber,
  InputSelect,
  InputText,
} from "../../../components/form";

import Layout from "../../../components/Layout";
import React from "react";
import { getAll } from "../../../util/axiosRequests";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

function Create() {
  const {
    query: { id },
  } = useRouter();
  const { data: machineTypes, _error } = useSWR("/api/machine-types/", getAll);
  const { data: data, error } = useSWR(`/api/machines/${id}`, getAll);

  if (!data) {
    return <Layout>Loading...</Layout>;
  }
  console.log(data.data)
  return (
    <Layout>
      <form
        className="w-full max-w-sm"
        method="POST"
        action={`/api/machines/${id}`}
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
          value={data.data.machine_type.name}
          options={machineTypes?.data.map((value) => value.name)}
        />
        <InputText
          displayName="Serial"
          name="serial"
          required={true}
          value={data.data.serial}
        />
        <InputText
          displayName="Details"
          name="details"
          required={true}
          value={data.data.details}
        />
        <InputNumber
          displayName="Prize"
          name="prize"
          required={true}
          value={data.data.prize}
        />
        <ButtonSubmit value="Edit Machine" />
      </form>
    </Layout>
  );
}

export default Create;
