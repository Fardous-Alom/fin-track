import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import {
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  collection,
  doc,
} from "firebase/firestore";

export default function Dashboard() {
  const [formData, setFormData] = useState({ fname: "", lname: "" });
  const [records, setRecords] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const valueCollection = collection(db, "transactions");
        const querySnapshot = await getDocs(valueCollection);
        const transactions = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecords(transactions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.fname || !formData.lname) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const valueCollection = collection(db, "transactions");
      const docRef = await addDoc(valueCollection, {
        name1: formData.fname,
        name2: formData.lname,
      });

      setRecords((prev) => [...prev, { id: docRef.id, ...formData }]);
      setFormData({ fname: "", lname: "" });
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const handleEdit = (id, name1, name2) => {
    setFormData({ fname: name1, lname: name2 });
    setEditingId(id);
  };

  const handleUpdate = async () => {
    if (!editingId) return;

    try {
      const docRef = doc(db, "transactions", editingId);
      await updateDoc(docRef, {
        name1: formData.fname,
        name2: formData.lname,
      });

      setRecords((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { id: editingId, name1: formData.fname, name2: formData.lname }
            : item
        )
      );

      setFormData({ fname: "", lname: "" });
      setEditingId(null);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "transactions", id));
      setRecords((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lname"
        value={formData.lname}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <button onClick={editingId ? handleUpdate : handleSubmit}>
        {editingId ? "Update" : "Submit"}
      </button>

      {records.map((item) => (
        <div key={item.id}>
          <p>{item.name1}</p>
          <p>{item.name2}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          <button onClick={() => handleEdit(item.id, item.name1, item.name2)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
