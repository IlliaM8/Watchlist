import "./Pages.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCastById, fetchMovieById } from "../store/asyncThunk";
import notFound from "../Assets/notFound.png";
import MyLoader from "../Components/Skeletons/BigPoster";
import DetailMain from "../Components/Skeletons/DetailMain";
import { setHistory } from "../store/cinemaSlise";
import { useEffect } from "react";
import { setAddCinemaActive } from "../store/modalSlice";
import useRuntime from "../Hooks/useRuntime";
import RedButton from "../Components/UI/RedButton/RedButton";
import Box from "../Components/UI/Box/Box";
import ActorCard from "../Components/UI/ActorCard/ActorCard";

function MovieDetail() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { currentMovie, status } = useSelector((state) => state.cinema);
  const movieCast = useSelector((state) => state.cast.movieCast);
  const { id } = useParams();
  const dispath = useDispatch();
  const { isRuntime } = useRuntime(currentMovie.runtime);
  useEffect(() => {
    async function callMovie() {
      dispath(fetchMovieById(id.slice(1))).then(() => {
        dispath(setHistory(id.slice(1)));
      });
    }
    dispath(fetchCastById(id.slice(1)));
    callMovie();
  }, [id, dispath]);

  return (
    <div className="movieDetail ">
      <div className="movieDetail__container container">
        <div className="movieDetail__main">
          <div className="main__poster">
            {status !== "pending" ? (
              <img
                src={
                  currentMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`
                    : notFound
                }
                alt="poster"
              />
            ) : (
              <MyLoader />
            )}
          </div>
          {status !== "pending" ? (
            <div className="main__overview">
              <div onClick={goBack}>awdawd</div>
              <div className="main__title">
                <p>{currentMovie.original_title}</p>
              </div>
              <div className="main__genres-runtime">
                <p className="main__genres">
                  {currentMovie
                    ? currentMovie.genres.map((g) => `  ${g.name}`).join()
                    : "loading"}
                </p>
                <p>.</p>
                <p className="main__runtime">{isRuntime}</p>
              </div>
              <h1 className="main__overview-subtitle">Overview</h1>
              <p className="main__overview-text">{currentMovie.overview}</p>
              <div className="main__row">
                <div className="main__raiting">
                  <Box name="Raiting" value={currentMovie.vote_average} />
                </div>
                <div
                  onClick={() => dispath(setAddCinemaActive())}
                  className="main__button"
                >
                  <RedButton>Add to Watchlist</RedButton>
                </div>
              </div>
            </div>
          ) : (
            <DetailMain />
          )}
        </div>
        <h2 className="movieDetail__cast-subtitle">Cast</h2>
        <div className="movieDetail__cast-container">
          {movieCast.map(
            (actor, index) =>
              index < 10 && <ActorCard key={index} actor={actor} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
