import React from "react";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col pt-12">
      <h1 className="text-4xl font-bold text-left">Shopping List</h1>
      <div>
        <ItemList />
      </div>
    </main>
  );
}
