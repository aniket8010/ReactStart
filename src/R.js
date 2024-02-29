import React from "react";
import { S } from "./S";

export const R = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>
        I am <span style={{ color: "salmon", fontWeight: "bold" }}>R</span> and
        my parent is Q.js
      </div>
      <S />
    </>
  );
};
