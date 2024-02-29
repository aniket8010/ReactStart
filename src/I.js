import React from "react";
import { J } from "./J";

export const I = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "teal", fontWeight: "bold" }}>I</span> and
        my parent is H.js
      </div>
      <J />
    </>
  );
};
