import React, { useState } from "react";
import SubCounter from "./SubCounter";

const CounterProject = () => {
    const [cardNumber, setCardNumber] = useState(0);
  return (
    <>
      <div className="flex flex-col gap-4">
        <label htmlFor="">Enter Number of cards to render</label>
        <input
          type="number"
          value={cardNumber}
          className="border p-4"
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 gap-12">
        {Array.from({ length: cardNumber }).map((id) => (
          <SubCounter key={id} />
        ))}
      </div>
    </>
  );
};

export default CounterProject;
