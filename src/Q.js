import React from "react";
import { R } from "./R";

export const Q = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "seagreen", fontWeight: "bold" }}>Q</span> and
        my parent is P.js
      </div>
      <R />
    </>
  );
};
