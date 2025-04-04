import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'
import Report from './pages/Report'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import AddTransaction from './pages/AddTransaction'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
