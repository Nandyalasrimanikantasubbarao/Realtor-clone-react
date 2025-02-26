import { createContext } from "react";
import Component from "./ComponentsA";

export const Data = createContext();
function App() {
  const name = "Manikanta";
  return (
    <Data.Provider value={name}>
      <Component />
    </Data.Provider>
  );
}

export default App;
