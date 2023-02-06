import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CinemaPlate from "../Components/CinemaPlate/CinemaPlate";
import Search from "../Components/Search/Search";
import Greeting from "../Components/UI/Greeting/Greeting";
import { fetchCinemaTopRates } from "../store/asyncThunk";

import "./Pages.scss";
function Home() {
  const { status, movieQuary, isSearching, popularMovie } = useSelector(
    (state) => state.cinema
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCinemaTopRates());
  }, [dispatch]);

  return (
    <main className="home">
      <div className="home__container container">
        <Greeting />
        <div className="home__search">
          <Search />
        </div>
        <div className="home__title">
          {!isSearching ? "Popular movies right now" : "Results"}
        </div>
        <CinemaPlate
          movieQuary={!isSearching ? popularMovie : movieQuary}
          status={status}
        />
      </div>
    </main>
  );
}

export default Home;
