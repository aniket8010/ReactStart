//this is a root file of react project

import { createRoot } from "react-dom/client";
import "./index.css";

import { Letters } from "./Header";
import { List } from "./List";

const Data = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const list=["Home","About us","cap","Search","Download","Contact","Events"]

createRoot(document.getElementById("root")).render(
  <>
    {Data.map((ele) => {
      return <Letters name={ele} key={ele}/>;
    })}
    {
      list.map((value)=>{
        return <List list={value} key={value}/>
      })
    }
    
  </>
);
