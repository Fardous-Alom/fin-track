import React,{useState} from "react";
import TransactionForm from "./TransactionForm";

function Overview() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Our Team by the numbers
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* text - end */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          {/* stat - start */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              200
            </div>
            <div className="text-sm font-semibold sm:text-base">People</div>
          </div>
          {/* stat - end */}

          {/* stat - start */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              500+
            </div>
            <div className="text-sm font-semibold sm:text-base">People</div>
          </div>

          {/* stat - start */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              1000+
            </div>
            <div className="text-sm font-semibold sm:text-base">Customers</div>
          </div>
          {/* stat - end */}

          {/* stat - start */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
            <button onClick={() => setShowModal(true)}>Add Transaction</button>
          </div>
          {showModal && <TransactionForm isOpen={showModal} onClose={() => setShowModal(false)} />}
          {/* stat - end */}
        </div>
      </div>
    </div>
  );
}

export default Overview;
