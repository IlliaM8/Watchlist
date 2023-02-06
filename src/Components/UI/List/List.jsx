import Cross from "../Cross/Cross";
import s from "./List.module.scss";
function List({ id, name, remove }) {
  return (
    <div className={s.list}>
      <div className={s.icon}>
        <h1>{name && name.trim().charAt(0).toUpperCase()}</h1>
      </div>
      <p className={s.name}>{name}</p>
      <div onClick={(e) => remove(e, id)} className={s.cross}>
        <Cross top={10} right={10} height={20} />
      </div>
    </div>
  );
}

export default List;
