"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (item) => {
    item.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };
    console.log(newItem);

    setName("");
    setQuantity("1");
    setCategory("produce");
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
  };

  const handleChangeName = (item) => {
    setName(item.target.value);
  };

  const handleChangeQuantity = (item) => {
    setQuantity(item.target.value);
  };

  const handleChangeCategory = (item) => {
    setCategory(item.target.value);
  };

  return (
    <main>
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">
            Add Items to Cart
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-m font-medium text-gray-700 block mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="text-m font-medium text-gray-700 block mb-2"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="text-m font-medium text-gray-700 block mb-2"
              >
                Category:
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="px-4 py-2 border border-gray-300 rounded-md bg-slate-900 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
