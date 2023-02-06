import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import s from "./NewWatchList.module.scss";
import { setModalClose } from "../../store/modalSlice";
import { useState } from "react";
import { createList } from "../../store/listSlice";
import RedButton from "../UI/RedButton/RedButton";

function NewWatchList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.modal.modalNewWatchlist);
  const [isName, setName] = useState("");
  const [isDescription, setDescription] = useState("");
  const create = () => {
    const id = (Date.now() + Math.random()).toFixed(0);
    dispatch(
      createList({
        name: isName,
        description: isDescription,
        id,
        list: [],
      })
    );
    dispatch(setModalClose());
  };
  return (
    <Modal state={state}>
      <main onClick={(e) => e.stopPropagation()} className={s.content}>
        <h1 className={s.title}>Create new watchlist</h1>
        <div className={s.col}>
          <label>Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={isName}
            type="text"
            className={s.input}
          />
        </div>
        <div className={s.col}>
          <label>Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={isDescription}
            type="text"
            className={s.input}
          />
        </div>
        <div className={s.row}>
          <div onClick={create} className={s.save}>
            <RedButton>Save</RedButton>
          </div>
          <div onClick={() => dispatch(setModalClose())} className={s.cancel}>
            Cancel
          </div>
        </div>
      </main>
    </Modal>
  );
}

export default NewWatchList;
