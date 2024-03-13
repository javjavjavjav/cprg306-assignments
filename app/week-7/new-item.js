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
    <div className="flex justify-center items-center h-">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Item Name
          </label>
          <input
            type="text"
            value={name}
            placeholder="Enter item name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
