import { FormEvent, useState } from "react";
import { add } from "../utils/stringCalculator";
import { log } from "console";

export default function Home() {
  const [numbers, setNumbers] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setResult(null);

    try {
      const result = add(numbers);
      setResult(result);
    } catch (error: any) {
      setError(error.message);
    }
  };

  console.log("__numbers", numbers);

  return (
    <div>
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="Enter numbers"
        />
        <button type="submit">Calculate</button>
      </form>
      {result !== null && <div>Result: {result}</div>}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
    </div>
  );
}
