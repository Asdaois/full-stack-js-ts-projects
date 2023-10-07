import React from "react";

type Props = {
  title: string;
};

export const ButtonWrapper: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    Props
> = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};
