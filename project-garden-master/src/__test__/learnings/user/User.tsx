import React from "react";

interface Props {
  name: string;
}

export const User = ({ name }: Props) => {
  return <div>Hello, {name}</div>;
};
