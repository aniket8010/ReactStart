import React from "react";
import { D } from "./D";

export const C = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "yellow", fontWeight: "bold" }}>C</span>{" "}
        and my parent is B.js
      </div>
      <D />
    </>
  );
};
