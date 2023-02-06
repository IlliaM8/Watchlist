import s from "./Cross.module.scss";
function Cross({ top, right, height }) {
  return (
    <div
      style={{ top: top, right: right, height: height }}
      className={s.cross}
    ></div>
  );
}

export default Cross;
