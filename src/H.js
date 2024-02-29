import React from "react";
import { I } from "./I";

export const H = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "tomato", fontWeight: "bold" }}>H</span> and
        my parent is G.js
      </div>
      <I />
    </>
  );
};
