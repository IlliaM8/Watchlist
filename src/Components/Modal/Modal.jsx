import { useDispatch } from "react-redux";
import { setModalClose } from "../../store/modalSlice";
import s from "./Modal.module.scss";
function Modal({ children, state }) {
  const dispatch = useDispatch();
  const rootClasses = [s.modal];
  if (state) {
    rootClasses.push(s.active);
  }
  return (
    <div
      onClick={() => dispatch(setModalClose())}
      className={rootClasses.join(" ")}
    >
      {children}
    </div>
  );
}

export default Modal;
