import React from 'react'
import Table from '../components/Table'
import Overview from '../components/Overview'
import TransactionForm from '../components/TransactionForm'

function Dashboard() {
  return (
    <>
      <Overview />
      <TransactionForm />
      <Table />
    </>
  )
}

export default Dashboard
