import React from "react";
import { G } from "./G";

export const F = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "unset", fontWeight: "bold" }}>F</span> and
        my parent is E.js
      </div>
      <G />
    </>
  );
};
