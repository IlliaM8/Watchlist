import { useDispatch, useSelector } from "react-redux";
import { removeList } from "../../store/listSlice";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import s from "./MyLists.module.scss";
import { Link, NavLink } from "react-router-dom";
import List from "../UI/List/List";

function MyLists() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists.myLists);
  const remove = (e, id) => {
    e.preventDefault();
    dispatch(removeList(id));
  };
  return (
    <div className={s.myList}>
      <div className={s.myList__title}>My Lists</div>

      <TransitionGroup className={s.myList__lists} component="ul">
        {lists.map((list) => (
          <CSSTransition
            timeout={500}
            key={list.id}
            classNames={{
              enter: s.list__enter,
              enterActive: s.list__enterActive,
              exit: s.list__exist,
              exitActive: s.list__existActive,
            }}
          >
            <NavLink
              to={`watchlist/:id${list.id}?id=${list.id}&name=${list.name}&description=${list.description}`}
              className={({ isActive }) => (isActive ? s.activeList : s.list)}
            >
              <List id={list.id} remove={remove} name={list.name} />
            </NavLink>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default MyLists;
