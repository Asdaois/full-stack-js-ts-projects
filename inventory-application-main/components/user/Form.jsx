import { ButtonSubmit, InputFullName, InputText } from "../form/index";

import React, { useState } from "react";
import axios from "axios";

function Form({ user, method = "post", action, children }) {
  const [newUser, setNewUser] = useState(user);

  const onSubmit = async (e) => {};

  const handleChange = (e) => {
    setNewUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form
        className="w-full max-w-sm"
        method="post"
        action={`/api/users/${action}`}
        onSubmit={onSubmit}
      >
        <InputFullName
          firstName={user.first_name}
          lastName={user.last_name}
          handleChange={handleChange}
        />
        <InputText
          displayName="Company Name"
          name="company"
          required={true}
          value={user.company}
          handleChange={handleChange}
        />
        <InputText
          displayName="Phone Number"
          name="phone_number"
          required={true}
          value={user.phone_number}
          handleChange={handleChange}
        />
        <InputText
          displayName="Direction"
          name="direction"
          value={user.direction}
          handleChange={handleChange}
        />
        {children}
      </form>
    </div>
  );
}

export default Form;
