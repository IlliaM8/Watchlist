import s from "./Box.module.scss";
function Box({ name, value }) {
  return (
    <div className={s.box}>
      <h1>{name}</h1>
      <p>{value}</p>
    </div>
  );
}

export default Box;
