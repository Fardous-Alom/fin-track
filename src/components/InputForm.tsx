"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/config/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

// Define TypeScript interface for transaction data
interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  category: string;
  type: string;
}

export default function InputForm() {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const transactionsCollection = collection(db, "transactions");

  // Form Submission Handler
  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    if (!name || !amount || !date || !category || !type) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      if (editId) {
        // Update existing transaction
        const transactionRef = doc(db, "transactions", editId);
        await updateDoc(transactionRef, {
          name,
          amount,
          date,
          category,
          type,
        });

        alert("Transaction updated successfully!");
      } else {
        // Add new transaction
        await addDoc(transactionsCollection, {
          name,
          amount,
          date,
          category,
          type,
        });

        alert("Transaction added successfully!");
      }

      // Reset form fields
      setName("");
      setAmount(0);
      setDate("");
      setCategory("");
      setType("");
      setEditId(null);

      // Refresh transaction list
      fetchTransactions();
    } catch (error) {
      console.error("Error saving transaction: ", error);
    }
  };

  // Fetch transactions from Firestore
  const fetchTransactions = async () => {
    try {
      const querySnapshot = await getDocs(transactionsCollection);
      const transactionsData: Transaction[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Transaction[];

      setTransactions(transactionsData);
    } catch (error) {
      console.error("Error fetching transactions: ", error);
    }
  };

  // Fetch transactions on component mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Delete a transaction
  // const handleDelete = async (id: string) => {
  //   try {
  //     const transactionRef = doc(db, "transactions", id);
  //     await deleteDoc(transactionRef);

  //     // Remove deleted transaction from UI
  //     setTransactions(
  //       transactions.filter((transaction) => transaction.id !== id)
  //     );
  //   } catch (error) {
  //     console.error("Error deleting document:", error);
  //   }
  // };

  // Populate form fields for editing
  // const handleEdit = (transaction: Transaction) => {
  //   setName(transaction.name);
  //   setAmount(transaction.amount);
  //   setDate(transaction.date);
  //   setCategory(transaction.category);
  //   setType(transaction.type);
  //   setEditId(transaction.id);
  // };

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="p-4 md:p-5">
        <div className="mt-1 flex items-center gap-x-2 px-5">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
            Add transaction
          </h3>
        </div>
        <form className="px-5" onSubmit={formSubmitHandler}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Type
                  </label>
                  <div className="mt-2 grid">
                    <select
                      id="type"
                      name="type"
                      autoComplete="type"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 border border-g focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="">Select type</option>
                      <option value="Income" className="bg-green-200">
                        Income
                      </option>
                      <option value="Expense" className="bg-red-200">
                        Expense
                      </option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Category
                  </label>
                  <div className="mt-2">
                    <div className="mt-2 grid">
                      <select
                        id="category"
                        name="category"
                        autoComplete="category"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 border border-g focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">Select category</option>
                        <option value="Housing">Housing</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Debt payments">Debt payments</option>
                        <option value="Savings">Savings</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Date
                  </label>
                  <div className="mt-2">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      autoComplete="date"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 border border-gray-300placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Amount
                  </label>
                  <div className="mt-2">
                    <input
                      id="amount"
                      name="amount"
                      type="number"
                      autoComplete="address-level1"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
              
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {editId ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
