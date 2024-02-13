"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = itemsData.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="">
      <button
        onClick={() => setSortBy("name")}
        style={{
          backgroundColor: sortBy === "name" ? "lightblue" : "transparent",
          border: "2px solid lightblue",
          margins: "5px",
          padding: "10px 52px",
        }}
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        style={{
          backgroundColor: sortBy === "category" ? "lightblue" : "transparent",
          border: "2px solid lightblue",
          margins: "5px",
          padding: "10px 52px",
        }}
      >
        Category
      </button>

      {sortedItems.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
