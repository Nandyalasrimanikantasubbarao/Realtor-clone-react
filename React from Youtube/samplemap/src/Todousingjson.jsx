import { useEffect, useState } from "react";

function Todousingjson() {
  const [getdata, setGetData] = useState([]);
  useEffect(() => {
    async function getiingData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = await response.json();
      if (data && data.length) setGetData(data);
    }
    getiingData();
  }, []);
  return (
    <div>
      {getdata.map((val) => (
        <div key={val.id}>
          <ul>
            <li>{val.userId}</li>
            <li>{val.title}</li>
            <li>{String(val.completed)}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Todousingjson;
