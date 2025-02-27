import { createContext } from "react";
import Component from "./ComponentsA";
import ReducerLearning from "./ReducerLearning";
import Counter from "./CounterReducer";

export const Data = createContext();
function App() {
  const name = "Manikanta";
  return (
    <Data.Provider value={name}>
      <Counter />
    </Data.Provider>
  );
}

export default App;
