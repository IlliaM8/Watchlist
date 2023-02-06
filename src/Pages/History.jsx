import { useDispatch, useSelector } from "react-redux";
import CinemaPlate from "../Components/CinemaPlate/CinemaPlate";
import { clearHistory } from "../store/cinemaSlise";

import "./Pages.scss";
function History() {
  const dispatch = useDispatch();
  const { status, history } = useSelector((state) => state.cinema);

  return (
    <main className="history">
      <div className="history__container container">
        <div
          className="history__clear-button"
          onClick={() => dispatch(clearHistory())}
        >
          Clear Hitory
        </div>
        <CinemaPlate movieQuary={history} status={status} />
      </div>
    </main>
  );
}

export default History;
