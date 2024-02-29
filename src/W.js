import React from "react";
import { X } from "./X";

export const W = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "olive", fontWeight: "bold" }}>W</span> and
        my parent is V.js
      </div>
      <X />
    </>
  );
};
