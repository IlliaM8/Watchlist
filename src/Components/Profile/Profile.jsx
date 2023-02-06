import s from "./Profile.module.scss";
import img from "../../Assets/port.svg";
function Profile() {
  return (
    <div className={s.profile}>
      <img src={img} alt="" className={s.profile__icon} />
      <div className={s.profile__name}>GUEST</div>
      <div className={s.profile__more}>...</div>
    </div>
  );
}

export default Profile;
