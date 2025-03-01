import { createContext } from "react";
// import Component from "./ComponentsA";
// import ReducerLearning from "./ReducerLearning";
// import Counter from "./CounterReducer";
import Todo from "./components/Todo";

export const Data = createContext();
function App() {
  const name = "Manikanta";
  return (
    <Data.Provider value={name}>
      {/* <Counter /> */}

      <Todo />
    </Data.Provider>
  );
}

export default App;
