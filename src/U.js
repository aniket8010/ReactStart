import React from "react";
import { V } from "./V";

export const U = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "pink", fontWeight: "bold" }}>U</span> and
        my parent is T.js
      </div>
      <V />
    </>
  );
};
