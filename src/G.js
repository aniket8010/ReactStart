import React from "react";
import { H } from "./H";

export const G = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "turquoise", fontWeight: "bold" }}>G</span> and
        my parent is F.js
      </div>
      <H />
    </>
  );
};
