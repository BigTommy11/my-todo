import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = (props) => {
  return (
    <input
      {...props}
      className={`border rounded px-3 py-2 focus:outline-none focus:ring ${props.className ? props.className : ""}`}
    />
  );
};
