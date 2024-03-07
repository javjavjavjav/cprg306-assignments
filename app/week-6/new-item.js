"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: generateId(),
      name: name,
      quantity: quantity,
      category: category,
    };
    onAddItem(newItem);
  };

  return (
    <div className="flex justify-center w-full text-center  flex-col items-start">
      <h1></h1>
      <form
        onSubmit={handleSubmit}
        className=" m-4 border-transparent p-2 rounded-1g focus:border-transparent focus:ring-0 text-black max-w-sm w-full text-white-900"
      >
        <label className="text-black p-6">
          <input
            type="text"
            value={name}
            placeholder="Item Name"
            className="mt-1 border-2 border rounded text-black"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <div className="flex w-fit">
          <label className="block text-sm font-medium text-gray-700 p-6 h-1">
            <input
              type="number"
              value={quantity}
              className="text-black border rounded"
              onChange={(event) => setQuantity(event.target.value)}
            />
          </label>
          <label className="">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Pantry">Frozen</option>
              <option value="Frozen">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Canned">Canned</option>
              <option value="Alcohol">Alcohol</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-1g shadow-md hover:bg-blue-700 focus:outline-none focus:ring-blue-700 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
