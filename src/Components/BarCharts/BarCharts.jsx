import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from "chart.js";
import { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { DataContext } from "../../Context/DataContext";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

export default function BarCharts() {
  const { selectCustomer, transactions } = useContext(DataContext);
  // console.log(transactions);
  // console.log(selectCustomer);

  const transactionsData = transactions.filter((transaction) => {
    return transaction.customerId === selectCustomer;
  });

  const state = {
    labels: transactionsData.map((transaction) => transaction.date),
    datasets: [
      {
        label: "Total Transaction Amount per Day",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 2,
        data: transactionsData.map((transaction) => transaction.amount)
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      }
    }
  };

  return (
    <>
      <div
        // data-aos="fade-right"
        // data-aos-offset="300"
        // data-aos-easing="ease-in-sine"
        className="w-full my-5 rounded-md border py-3"
      >
        <Bar data={state} options={options}></Bar>
      </div>
    </>
  );
}
