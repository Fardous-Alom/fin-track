import React, { useState, useEffect, useRef } from "react";

function TransactionForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    type: "Expense",
    amount: "",
    category: "Food & Drink",
    date: new Date().toISOString().split('T')[0],
    note: ""
  });
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transaction Data:", formData);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <span aria-hidden="true">×</span>
        </button>

        <h2 
          id="modal-title"
          className="mb-6 text-center text-2xl font-bold text-gray-800"
        >
          Add Transaction
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Transaction Type Buttons */}
          <fieldset className="space-y-2">
            <legend className="sr-only">Transaction Type</legend>
            <div className="inline-flex w-full rounded-md shadow-sm" role="group">
              {["Income", "Expense", "Transfer"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleChange({ target: { name: 'type', value: option } })}
                  className={`px-4 py-2 text-sm font-medium border ${
                    formData.type === option
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  } flex-1 first:rounded-l-lg last:rounded-r-lg focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Amount */}
          <div>
            <label
              htmlFor="amount"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Amount
              <span className="ml-1 text-red-500">*</span>
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                min="0"
                required
                value={formData.amount}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 py-2 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 text-md"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label 
              htmlFor="category"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Category
              <span className="ml-1 text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 pl-3 pr-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-md"
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
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Date
              <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-md py-2 pl-3"
            />
          </div>

          {/* Note */}
          <div>
            <label
              htmlFor="note"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Note (optional)
            </label>
            <textarea
              id="note"
              name="note"
              rows={3}
              value={formData.note}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-md pt-2 pl-3"
              placeholder="Add any additional details..."
            />
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionForm;
