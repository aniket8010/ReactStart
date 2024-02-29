import React from "react";
import { W } from "./W";

export const V = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "peru", fontWeight: "bold" }}>V</span> and
        my parent is U.js
      </div>
      <W />
    </>
  );
};
