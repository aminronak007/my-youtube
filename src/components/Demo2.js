import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const z = useRef(0);
  const interval = useRef(null);
  //   let interval = {
  //     current: null,
  //   };

  useEffect(() => {
    if (interval.current) return;
    interval.current = setInterval(() => {
      console.log("Hello", Math.random());
    }, 1000);

    return () => clearInterval(interval.current);
  }, []);

  return (
    <div className="p-2 m-4 border border-black bg-slate-100 w-96 ">
      <div className="my-2">
        <span className="font-bold text-xl px-2">Let X = {x};</span>
        <button
          className="border border-black p-2 bg-green-100"
          onClick={() => {
            x = x + 1;
            console.log("x=", x);
          }}
        >
          Increase X
        </button>
      </div>
      <div className="my-2">
        <span className="font-bold text-xl px-2">State Y = {y};</span>
        <button
          className="border border-black p-2 bg-green-100"
          onClick={() => {
            setY(y + 1);
            console.log("y=", y);
          }}
        >
          Increase Y
        </button>
      </div>
      <div>
        <span className="font-bold text-xl px-2">Ref Z = {z.current};</span>
        <button
          className="border border-black p-2 bg-green-100"
          onClick={() => {
            z.current = z.current + 1;
            console.log("z=", z.current);
          }}
        >
          Increase Z
        </button>
      </div>
      <div>
        <button
          onClick={() => clearInterval(interval.current)}
          className="bg-red-500 p-2 my-2 text-white font-bold rounded-lg"
        >
          Stop Printing
        </button>
      </div>
    </div>
  );
};

export default Demo2;
