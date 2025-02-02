import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import type { Schema } from "../amplify/data/resource";
// import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
// import outputs from "../amplify_outputs.json";

// Amplify.configure(outputs);
const client = generateClient<Schema>();
console.log("client", client);
// client.queries.helloWorld();

function App() {
  // const [count, setCount] = useState(0);

  const [message, setMessage] = useState<string>("");

  const fetchData = async () => {
    try {
      const response = await client.queries.helloWorld();
      console.log("response", response);

      setMessage(response?.data ?? ""); // APIのレスポンス構造に合わせる
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <p>{message}</p>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
