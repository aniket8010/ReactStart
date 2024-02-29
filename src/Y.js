import React from "react";
import { Z } from "./Z";

export const Y = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "orangered", fontWeight: "bold" }}>Y</span> and
        my parent is X.js
      </div>
      <Z />
    </>
  );
};
