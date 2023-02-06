import s from "./Search.module.scss";
import search from "../../Assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsSerching, setSearchValue } from "../../store/cinemaSlise";
import { fetchCinemaByName } from "../../store/asyncThunk";
function Search() {
  const dispatch = useDispatch();
  const { searchValue, status } = useSelector((state) => state.cinema);
  const onChange = (e) => {
    if (e.target.value.length > 0) {
      dispatch(setSearchValue(e.target.value));
      dispatch(fetchCinemaByName());
      dispatch(setIsSerching(true));
    } else {
      dispatch(setSearchValue(e.target.value));
      dispatch(setIsSerching(false));
    }
  };

  return (
    <>
      <input
        disabled={status === "rejected" ? true : false}
        onChange={(e) => onChange(e)}
        value={searchValue}
        className={s.search}
        type="text"
        placeholder="Search  for movies by title"
      />
      <img className={s.search__icon} src={search} alt="search" />
    </>
  );
}

export default Search;
