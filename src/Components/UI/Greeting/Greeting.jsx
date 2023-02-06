import s from "./Greeting.module.scss";
import ribbon from "../../../Assets/ribbon.svg";
import mark from "../../../Assets/Checkmark.svg";

function Greeting() {
  return (
    <div className={s.greeting}>
      <div className={s.greeting__title}>
        Welcome to <span>Watchlists</span>
      </div>
      <div className={s.greeting__text}>
        <span>
          Browse movies, add them to watchlists and share them with friends.
        </span>
        Just click the <img src={ribbon} alt="ribbon" /> to add a movie, the
        poster to see more details or <img src={mark} alt="ribbon" /> to mark
        the movie as watched.
      </div>
    </div>
  );
}

export default Greeting;
