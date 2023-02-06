import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import History from "./Pages/History";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail";
import WatchlistDetail from "./Pages/WatchlistDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movie-detail/:id" element={<MovieDetail />} />
        <Route path="history" element={<History />} />
        <Route path="watchlist/:id" element={<WatchlistDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
