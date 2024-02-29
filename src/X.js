import React from "react";
import { Y } from "./Y";

export const X = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "navy", fontWeight: "bold" }}>X</span> and
        my parent is W.js
      </div>
      <Y />
    </>
  );
};
