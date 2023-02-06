import { useState } from "react";
import { Outlet } from "react-router-dom";
import AddCinema from "../Components/AddCinema/AddCinema";
import NewWatchList from "../Components/NewWatchLict/NewWatchList";
import "../style/App.scss";
import SideMenu from "./SideMenu";

function Layout() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="wrapper">
      <SideMenu visible={visible} setVisible={setVisible} />
      <div
        onClick={() => {
          setVisible(!visible);
        }}
        className={!visible ? `sideMenu__toogler` : `sideMenu__toogler open`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Outlet /> <AddCinema />
      <NewWatchList />
    </div>
  );
}

export default Layout;
