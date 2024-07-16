/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Error from "../Components/Error/Error";
import Footer from "../Components/Footer/Footer";
import Graph from "../Components/Graph/Graph";
import Header from "../Components/Header/Header";
import Loading from "../Components/Loading/Loading";
import Table from "../Components/Table/Table";
import { DataContext } from "../Context/DataContext";

function Home() {
  const { fetchData, loading, error } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <main>
          <Header />
          <section className="container p-5 ">
            <Graph />
            <Table />
          </section>
          <Footer />
        </main>
      )}
    </>
  );
}

export default Home;
