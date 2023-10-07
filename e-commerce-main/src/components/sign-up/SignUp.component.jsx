import React, { useState } from "react";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custon-buttom/CustomButton.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp(props) {
  const [state, setState] = useState({ ...initialState });

  const handleSubmit = async (e = new Event()) => {
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      alert("Password don't match!");
      return;
    }
    const user = {};
    user.email = state.email;
    user.password = state.password;
    user.displayName = state.displayName;
    const { signUpStart } = props;
    signUpStart(user);
    setState({ ...initialState });
  };

  const handleChange = (e = new Event()) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="flex flex-col sign-up w-1/3-vw ">
      <h2 className="my-3 text-2xl font-extrabold">I do not have a account</h2>
      <span className="">Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={state.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (newUser) => dispatch(signUpStart(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
