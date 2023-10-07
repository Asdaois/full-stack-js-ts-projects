import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { InputText } from "../../../components/form";
import Layout from "../../../components/Layout";

function Update() {
  const { query } = useRouter();
  const [machineType, setMachineType] = useState();

  useEffect(async () => {
    const response = await axios.get(`/api/machine-types/${query.id}`);
    setMachineType(response.data);
  }, []);

  const handleChange = (e) => {
    setMachineType({ ...machineType, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/machine-types/${machineType._id}`, machineType);
  };

  return (
    <Layout>
      <form action="" className="w-full max-w-sm " onSubmit={handleSubmit}>
        {machineType ? (
          <InputText
            name="name"
            displayName="Machine type"
            handleChange={handleChange}
            value={machineType.name}
            required={true}
          />
        ) : (
          "Loading..."
        )}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
              type="submit"
            >
              {"Edit Machine Type"}
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default Update;
