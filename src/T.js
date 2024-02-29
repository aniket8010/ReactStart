import React from "react";
import { U } from "./U";

export const T = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "purple", fontWeight: "bold" }}>T</span> and
        my parent is S.js
      </div>
      <U />
    </>
  );
};
