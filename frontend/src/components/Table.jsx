import React from "react";

function Table() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-6 sm:py-8 lg:py-12 px-6">
      <table className="mx-auto max-w-screen-xl px-4 md:px-8 w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Google Pixel Phone
            </th>
            <td className="px-6 py-4">Gray</td>
            <td className="px-6 py-4">Phone</td>
            <td className="px-6 py-4">$799</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple Watch 5
            </th>
            <td className="px-6 py-4">Red</td>
            <td className="px-6 py-4">Wearables</td>
            <td className="px-6 py-4">$999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
