import React from "react";
import { F } from "./F";

export const E = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "violet", fontWeight: "bold" }}>E</span> and
        my parent is D.js
      </div>
      <F />
    </>
  );
};
