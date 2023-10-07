import React from "react";
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";

export default function Authentication() {
  return (
    <div className="max-w-[850px] flex justify-between gap-40 mx-auto my-[30px]">
      <SignIn />
      <SignUp />
    </div>
  );
}
