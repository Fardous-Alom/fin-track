import React, { useState } from "react";

function TransactionForm() {
  const [type, setType] = useState("Expense"); // default value
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food & Drink");
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const [date, setDate] = useState(formatDate(new Date()));
  const [note, setNote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      type, // selected type
      amount: formData.get("amount"),
      category: formData.get("category"),
      date: formData.get("date"),
      note: formData.get("note"),
    };

    console.log("Transaction Data:", data);
    // now you can send `data` to backend / state manager
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 px-6">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Add Transaction
          </h2>
        </div>

        {/* form - start */}
        <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4">

          {/* Transaction Type Buttons */}
          
            <div className="inline-flex w-full rounded-md shadow-xs" role="group">
              {["Income", "Expense", "Transfer"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setType(option)}
                  className={`px-4 py-2 text-sm font-medium border border-gray-200 ${
                    type === option
                      ? "bg-indigo-500 text-white w-full"
                      : "bg-white text-gray-900 hover:bg-gray-100 hover:text-indigo-500 w-full"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
         

          {/* Amount */}
          <div>
            <label
              htmlFor="amount"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Amount
            </label>
            <input
              name="amount"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              type="number"
              required onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Category
            </label>
            <select
              name="category"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              required onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Food & Drink">Food & Drink</option>
              <option value="Shopping">Shopping</option>
              <option value="Housing">Housing</option>
              <option value="Transportation">Transportation</option>
              <option value="Health & Fitness">Health & Fitness</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Date
            </label>
            <input
              name="date"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Note */}
          <div>
            <label
              htmlFor="note"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Note (optional)
            </label>
            <textarea
              name="note"
              className="h-24 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between">
            <button
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
        {/* form - end */}
      </div>
    </div>
  );
}

export default TransactionForm;
