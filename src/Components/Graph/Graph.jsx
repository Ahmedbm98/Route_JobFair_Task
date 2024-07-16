import BarCharts from "../BarCharts/BarCharts";
import PolarAreaChart from "../PolarAreaChart/PolarAreaChart";

export default function Graph() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-10">
        <BarCharts />
        <PolarAreaChart />
      </div>
    </>
  );
}
