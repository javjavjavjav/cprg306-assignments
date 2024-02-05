import React from "react";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col pt-12">
      <h1 className="text-4xl font-bold mb-8 text-left">Shopping List</h1>
      <div className="w-full sm:w-2/3 md:w-1/2">
      <ItemList />
      </div>
    </main>
  );
}

