import React from "react";
import { T } from "./T";

export const S = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "royalblue", fontWeight: "bold" }}>S</span> and
        my parent is R.js
      </div>
      <T />
    </>
  );
};
