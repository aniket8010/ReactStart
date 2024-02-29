import React from "react";
import { O } from "./O";

export const N = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "slateblue", fontWeight: "bold" }}>N</span> and
        my parent is M.js
      </div>
      <O />
    </>
  );
};
