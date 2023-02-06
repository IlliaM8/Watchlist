import { Link } from "react-router-dom";
import CardLoader from "../Skeletons/CardLoader";
import CinemaCard from "../UI/CinemaCard/CinemaCard";
import s from "./CinemaPlate.module.scss";
function CinemaPlate({ movieQuary, status }) {
  return (
    <div className={s.container}>
      {status === "pending" || status === "rejected" || !movieQuary
        ? Array(10)
            .fill(0)
            .map((item, index) => {
              return <CardLoader key={index} />;
            })
        : movieQuary.map((cinema) => {
            return (
              <Link key={cinema.id} to={`/movie-detail/:${cinema.id}`}>
                <CinemaCard
                  title={cinema.original_title}
                  poster={cinema.poster_path}
                  rate={cinema.vote_average}
                  year={cinema.release_date}
                />
              </Link>
            );
          })}
    </div>
  );
}

export default CinemaPlate;
