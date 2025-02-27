import { useReducer } from "react";

const initialState = {
  count: 0,
  value: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ince":
      return { ...state, count: state.count + Number(state.value) };
    case "updateValue":
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <input
        type="number"
        value={state.value}
        onChange={(e) =>
          dispatch({ type: "updateValue", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "ince" })}>Submit</button>
    </div>
  );
}

export default Counter;
