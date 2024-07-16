import "./App.css";
import DataJsonServerProvider from "./Context/DataContext";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <DataJsonServerProvider>
        <Home />
      </DataJsonServerProvider>
    </>
  );
}

export default App;
