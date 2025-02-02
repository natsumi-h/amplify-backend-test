import { useEffect, useState } from "react";
import "./App.css";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/api";

function App() {
  const [message, setMessage] = useState<string>("");
  const client = generateClient<Schema>();
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
      </div>
    </>
  );
}

export default App;
