import Layout from "@/components/Layout";
import React from "react";
import RentalsSimple from "../../components/rentals/RentalsSimple";
import { getAll } from "../../util/axiosRequests";
import useSWR from "swr";

function Users() {
  // const { data: response, error } = useSWR("api/rentals", getAll);

  return <Layout>{true ? "Not Implemented" : response.data.map(rental => <RentalsSimple key={rental._id} rental={rental} /> )}</Layout>;
}

export default Users;
