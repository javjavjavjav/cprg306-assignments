import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <div className="bg-slate-900 w-full max-w-xs m-2 p-1 w-full md:w-2/3">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
