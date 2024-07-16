import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  RadialLinearScale,
  Tooltip
} from "chart.js";
import { useContext } from "react";
import { PolarArea } from "react-chartjs-2";
import { DataContext } from "../../Context/DataContext";

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  LineElement,
  ArcElement
);

export default function PolarAreaChart() {
  const { selectCustomer, transactions } = useContext(DataContext);

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
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="w-full h-[400px] my-5"
      >
        <PolarArea
          data={state}
          options={options}
          className="mx-auto"
        ></PolarArea>
      </div>
    </>
  );
}
