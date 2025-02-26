import { useContext } from "react";
import { Data } from "./App";

function ComponentsA() {
  const value = useContext(Data);
  return <div>{value}</div>;
}

export default ComponentsA;
