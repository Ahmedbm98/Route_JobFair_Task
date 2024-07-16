import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { dateFormat } from "../../FormateDate/FormateDate";
import FilterInputs from "../FilterInput/FIlterInput";
export default function Table() {
  const { setSelectCustomer, DataFiltered, filterTransactions } =
    useContext(DataContext);

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="my-7"
      >
        {/* Search Inputs */}
        <FilterInputs />

        {/* Table */}
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg my-5 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
              <tr>
                <th scope="col" className="p-4">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Display Data */}
              {DataFiltered.map((customer) => {
                return (
                  <tr
                    onClick={() => setSelectCustomer(customer.id)}
                    key={customer.id}
                    className="bg-white border-b  hover:bg-gray-100 cursor-pointer my-5 text-center"
                  >
                    <td className="w-4 p-4">{customer.id}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-simebold text-gray-900 whitespace-nowrap"
                    >
                      {customer.name}
                    </th>
                    <td className="py-3">
                      <div className="flex flex-col gap-1">
                        {filterTransactions.map(
                          (transaction) =>
                            transaction.customerId === customer.id && (
                              <span key={transaction.id}>
                                {transaction.amount}{" "}
                                <span className="text-maincolor">EGP</span>
                              </span>
                            )
                        )}
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex flex-col gap-1">
                        {filterTransactions.map(
                          (transaction) =>
                            transaction.customerId === customer.id && (
                              <span key={transaction.id}>
                                {dateFormat(transaction.date)}
                              </span>
                            )
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
