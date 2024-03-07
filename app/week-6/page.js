'use client';
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items.json";

import { useState } from "react";

export default function Page() {
  // Initialize state variable for items with data from items.json
  const [items, setItems] = useState(ItemData); 

  
  const handleAddItem = (newItem) => {
  
    setItems([...items, newItem]);
  };

  
  return (
    <div className="bg-gradient-to-b from-black to-blue-600 min-h-screen">
      <main className="ml-4 text-white p-3">
        <h1 className="text-3xl font-bold mt-2">Shopping List</h1>
        <div className="my-2 ml-2 mt-8">
        
          <NewItem onAddItem={handleAddItem} />
          
          <ItemList items={items} />
        </div>
      </main>
    </div>
  );
}