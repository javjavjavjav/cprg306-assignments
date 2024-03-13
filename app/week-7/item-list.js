"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <label> Sort by:</label>
      <button
        onClick={() => setSortBy("name")}
        className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded m-2 w-24"
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className="bg-blue-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded m-2 w-24"
      >
        Category
      </button>

      <div>
        {sortedItems.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
            />
          );
        })}
      </div>
    </div>
  );
}
