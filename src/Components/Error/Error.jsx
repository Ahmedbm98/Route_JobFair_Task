import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import "./Error.scss";
export default function Error() {
  const { error } = useContext(DataContext);
  return (
    <>
      <div id="main">
        <div className="fof">
          <h1>{error}</h1>
        </div>
      </div>
    </>
  );
}
