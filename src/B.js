import React from "react";
import { C } from "./C";

export const B = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "yellowgreen", fontWeight: "bold" }}>B</span>{" "}
        and my parent is A.js
      </div>
      <C />
    </>
  );
};
