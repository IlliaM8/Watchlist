import s from "./RedButton.module.scss";
function RedButton({ children }) {
  return <div className={s.button}>{children}</div>;
}

export default RedButton;
