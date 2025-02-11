import React from 'react'
import Card from './Card';
import Table from './Table';
import InputForm from './InputForm';

export default function Content() {
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <Card />
        <InputForm/>
        <Table/>
      </div>
    </div>
  );
}
