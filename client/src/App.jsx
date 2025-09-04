import React from 'react'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/transaction' element={<Transaction/>} />
      </Routes>
      {/* <Header /> */}
    </div>
  )
}

export default App
