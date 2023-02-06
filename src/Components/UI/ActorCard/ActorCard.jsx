import s from "./ActorCard.module.scss";
import noFound from "../../../Assets/notFound.png";
function ActorCard({ actor }) {
  return (
    <div className={s.container}>
      <div className={s.photo}>
        <img
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
              : noFound
          }
          alt=""
        />
      </div>
      <main>
        <h1 className={s.name}>{actor.name}</h1>
        <p className={s.character}>{actor.character}</p>
      </main>
    </div>
  );
}

export default ActorCard;
