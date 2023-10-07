import { ButtonSubmit, InputText } from "../../components/form/index";

import Layout from "../../components/Layout";
import React from "react";

function Create() {
  return (
    <Layout>
      <form
        className="w-full max-w-sm"
        method="post"
        action="/api/machine-types/"
      >
        <InputText
          displayName="Machine Type name"
          name="name"
          required={true}
        />
        <ButtonSubmit value="Create new Machine Type" />
      </form>
    </Layout>
  );
}

export default Create;
