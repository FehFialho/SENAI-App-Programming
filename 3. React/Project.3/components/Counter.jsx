import { useState } from "react";
import { Title } from "./Title";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Send Props to Title Component */}
      <Title count={count} />

      <h3>Number of Tasks - {count}</h3>
      <section>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
      </section>
    </div>
  );
};
