import React from "react";
import { B } from "./B";

export const A = () => {
  return (
    <>
      <div style={{fontSize:"40px"}}>
        I am <span style={{color:"red",fontWeight:"bold"}}>A</span> and my parent is App.js
      </div>
      <B/>
    </>
  );
};
export default A;
