"use client"


import MealIdeas from "./meal-ideas";
import {useState} from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items.json";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";



export default function Page() {
 
  const [items, setItems] = useState(ItemData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const {user} = useUserAuth();

 
  


  const handleItemSelect = (item) => {
    const cleanedName = item.split(',')[0].trim().replace(/[^\w\s]/gi, '');
    console.log("Selected item: ", item);
     setSelectedItemName(cleanedName);
  };
  

  
  const handleAddItem = (newItem) => {
  
    setItems([...items, newItem]);
  };

  if(!user){
    return <Link href="/week8">Please log in to view the shopping list.</Link>
  }

  return (
    <div className="bg-gradient-to-b from-black to-blue-600 min-h-screen flex ">
      <main className="ml-4 text-white p-3 flex">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mt-2">Shopping List</h1>
          
          <div className="my-2 ml-2 mt-8">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        <div className="flex-1 p-24 mt-24 ">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    </div>
  );
}  