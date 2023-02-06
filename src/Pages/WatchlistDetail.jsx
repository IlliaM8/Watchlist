import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CinemaPlate from "../Components/CinemaPlate/CinemaPlate";
import Box from "../Components/UI/Box/Box";
import useRuntime from "../Hooks/useRuntime";

function WatchlistDetail() {
  const { status } = useSelector((state) => state.cinema);
  const lists = useSelector((state) => state.lists.myLists);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const descr = searchParams.get("description");
  const quary = lists.find((l) => l.id === id);
  const { isRuntime } = useRuntime(
    quary.list.reduce((acc, l) => acc + l.runtime, 0)
  );
  const computeScore = (
    quary.list.reduce((acc, l) => {
      return l.vote_average + acc;
    }, 0) / quary.list.length
  ).toFixed(2);
  return (
    <main className="watclist">
      <div className="watchlist__container container">
        <h1 className="watchlist__title">{name}</h1>
        <h2>About this watchlist</h2>
        <p className="watchlist__descr">{descr}</p>
        <div className="watchlist__row">
          <div className="row__item-qnt">
            <Box name="ITEMS ON LIST" value={quary.list.length} />
          </div>
          <div className="row__runtime">
            <Box name="UNWATCHED RUNTIME" value={isRuntime} />
          </div>
          <div className="row__score">
            <Box name="AVERAGE SCORE" value={computeScore} />
          </div>
        </div>
        <CinemaPlate movieQuary={quary.list} status={status} />
      </div>
    </main>
  );
}

export default WatchlistDetail;
