import { Link, NavLink } from "react-router-dom";
import Profile from "../Components/Profile/Profile";
import homeImg from "../Assets/Home.svg";
import historyImg from "../Assets/history.svg";

import "./SideMenu.scss";
import { useDispatch } from "react-redux";
import { setNewWatchlistActive } from "../store/modalSlice";
import MyLists from "../Components/MyLists/MyLists";
import { useState } from "react";
import RedButton from "../Components/UI/RedButton/RedButton";
import { CSSTransition } from "react-transition-group";
function SideMenu({ visible, setVisible }) {
  const dispatch = useDispatch();
  return (
    <CSSTransition
      in={visible}
      timeout={500}
      classNames="sideMenu"
      unmountOnExit
      mountOnEnter
    >
      <aside onClick={() => setVisible(false)} className={"sideMenu"}>
        <div onClick={(e) => e.stopPropagation()} className="sideMenu__content">
          <CSSTransition
            in={visible}
            timeout={500}
            classNames="sideMenu__container"
            mountOnEnter
            unmountOnExit
          >
            <div className="sideMenu__container">
              <Link to="/">
                <div className="sideMenu__titel">Watchlists</div>
              </Link>
              <NavLink className="navButton" to="/">
                <img src={homeImg} alt="" />
                <span>Home</span>
              </NavLink>
              <NavLink className="navButton" to="/history">
                <img src={historyImg} alt="" />
                <span>History</span>
              </NavLink>
              <div
                onClick={() => {
                  dispatch(setNewWatchlistActive());
                }}
                className="createNewList"
              >
                <RedButton>+ Create new watchlist</RedButton>
              </div>
              <div className="sideMenu__line"></div>
              <MyLists />
              <div className="sideMenu__profile">
                <Profile />
              </div>
            </div>
          </CSSTransition>
        </div>
      </aside>
    </CSSTransition>
  );
}

export default SideMenu;
