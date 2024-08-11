import React, { useMemo, useState } from "react";
import { findNthPrime } from "../helpers/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        isDarkTheme
          ? "m-4 p-2 w-96 border border-black bg-gray-900 text-white"
          : "m-4 p-2 w-96 border border-black"
      }
    >
      <div>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2 text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
