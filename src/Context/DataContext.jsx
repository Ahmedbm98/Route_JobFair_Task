/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext("");

export default function DataContextProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [SearchByName, setSearchByName] = useState("");
  // const [SearchByAmount, setSearchByAmount] = useState("");
  const [selectCustomer, setSelectCustomer] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function To Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://ahmedbm98.github.io/api-routetask/db.json"
      );
      // console.log(data);
      setCustomers(data.customers);
      setTransactions(data.transactions);
      setError(false);
      setLoading(false);
    } catch (error) {
      // console.log(error.message);
      setLoading(false);
      setError(error.message);
      return error;
    }
  };

  // Filter Data For Input search By Name
  const DataFiltered = customers.filter((customer) => {
    return SearchByName.toLowerCase() === ""
      ? customer
      : customer.name.toLowerCase().includes(SearchByName.toLowerCase());
  });
  // console.log(DataFiltered);

  // // Filter Data For Input search By Amount
  // const filterTransactions = transactions.filter((transaction) => {
  //   return SearchByAmount === ""
  //     ? transaction
  //     : transaction.amount === parseInt(SearchByAmount);
  // });
  // console.log(filterTransactions);

  return (
    <>
      <DataContext.Provider
        value={{
          fetchData,
          setSearchByName,
          setSelectCustomer,
          transactions,
          customers,
          loading,
          error,
          selectCustomer,
          DataFiltered
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}
