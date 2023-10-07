import ButtonSubmit from "../../components/form/ButtonSubmit";
import InputFullName from "../../components/form/InputFullName";
import InputText from "../../components/form/InputText ";
import Layout from "../../components/Layout";
import React from "react";

function Create() {
  return (
    <Layout>
      <form className="w-full max-w-sm" method="post" action="/api/users/">
        <InputFullName />
        <InputText displayName="Company Name" name="company" required={true} />
        <InputText
          displayName="Phone Number"
          name="phone_number"
          required={true}
        />
        <InputText displayName="Direction" name="direction" />
        <ButtonSubmit value="Create User" />
      </form>
    </Layout>
  );
}

export default Create;
