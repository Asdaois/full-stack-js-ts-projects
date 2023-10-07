import React from "react";
import Form from "../../../components/user/Form";
import Layout from "../../../components/Layout";
import axios from "axios";
import { ButtonSubmit } from "../../../components/form";

function Create({ user }) {
  return (
    <Layout>
      <Form method="PUT" user={user} action={user._id}>
        <ButtonSubmit value={"Edit User"} />
      </Form>
    </Layout>
  );
}

Create.getInitialProps = async ({ query }) => {
  const { id } = query;

  const response = await axios.get(`/api/users/${id}`);
  const user = response.data;
  return { user };
};
export default Create;
