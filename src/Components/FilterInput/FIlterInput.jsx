/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

// eslint-disable-next-line react/prop-types
export default function FilterInputs() {
  const { setSearchByAmount, setSearchByName } = useContext(DataContext);
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-4">
        <input
          onChange={(e) => setSearchByName(e.target.value)}
          type="search"
          name="name"
          id="name"
          placeholder="Search By Name"
          className="block w-80 py-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-maincolor focus:border-maincolor  "
        />
        <input
          onChange={(e) => setSearchByAmount(e.target.value)}
          type="number"
          name="amount"
          id="amount"
          placeholder="Search By Amount"
          className="block w-80 py-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-maincolor focus:border-maincolor"
        />
      </div>
    </>
  );
}
