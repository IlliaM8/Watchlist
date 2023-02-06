import s from "./CinemaCard.module.scss";
import ribbon from "../../../Assets/ribbon2.svg";
import notFound from "../../../Assets/notFound.png";

function CinemaCard({ title, poster, rate, year }) {
  return (
    <div className={s.container}>
      <div className={s.poster}>
        <img
          src={poster ? `https://image.tmdb.org/t/p/w200/${poster}` : notFound}
          alt={`${title} poster`}
        />
      </div>

      {/* <img onClick={func} src={ribbon} alt="ribbon" className={s.ribbon} /> */}
      <div className={s.rate}>
        {/* <img className={s.rate__icon} src="" alt="" /> */}
        {rate}
      </div>
      <div className={s.title}>
        {title}
        <span className={s.year}>({year})</span>
      </div>
    </div>
  );
}

export default CinemaCard;
