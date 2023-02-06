import s from "./AddCinema.module.scss";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBuffer,
  removeBuffer,
  removeList,
  addList,
} from "../../store/listSlice";
import { useEffect } from "react";
import { setModalClose, setNewWatchlistActive } from "../../store/modalSlice";
import List from "../UI/List/List";
import RedButton from "../UI/RedButton/RedButton";

function AddCinema() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.modal.modalAddCimena);
  const lists = useSelector((state) => state.lists.myLists);
  const movie = useSelector((state) => state.cinema.currentMovie);
  const remove = (e, id) => {
    e.preventDefault();
    dispatch(removeList(id));
  };
  useEffect(() => {
    if (state && movie) {
      dispatch(addToBuffer(movie));
    } else {
      dispatch(removeBuffer());
    }
  }, [state, movie, dispatch]);
  const addCinema = (id) => {
    dispatch(addList({ movie, id }));
    dispatch(setModalClose());
  };
  return (
    <Modal state={state}>
      <main onClick={(e) => e.stopPropagation()} className={s.content}>
        <div className={s.row}>
          <p>Add Movie:</p>
          <h1>{movie && movie.original_title}</h1>
        </div>
        <ul className={s.listContainer}>
          {lists.map((list) => (
            <li
              key={list.id}
              className={s.list}
              onClick={() => addCinema(list.id)}
            >
              <List id={list.id} remove={remove} name={list.name} />
            </li>
          ))}
        </ul>
        <div
          className={s.button}
          onClick={() => {
            dispatch(setNewWatchlistActive());
          }}
        >
          <RedButton>New watchlist </RedButton>
          <span>✚</span>
        </div>
      </main>
    </Modal>
  );
}

export default AddCinema;
