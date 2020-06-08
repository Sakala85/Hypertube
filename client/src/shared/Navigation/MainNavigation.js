import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/Backdrop";
import Switch from "@material-ui/core/Switch";
import hyperLogo from "../../logo/LogoHyper.png";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const OpenDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const CloseDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      <div className="main_navigation">
        {drawerIsOpen && <BackDrop onClick={CloseDrawerHandler} />}
        <SideDrawer show={drawerIsOpen} onClick={CloseDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks notifNumber={props.notifNumber} />
          </nav>
        </SideDrawer>
        <MainHeader>
          Fr
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          En
          <button
            className="main-navigation__menu-btn"
            onClick={OpenDrawerHandler}
          >
            <span />
            <span />
            <span />
          </button>
          <h1 className="main-navigation__title">
            <Link to="/">
              <img className="logo" src={hyperLogo} alt="Hyper logo" />
            </Link>
          </h1>
          <nav className="main-navigation__header-nav">
            <NavLinks />
          </nav>
        </MainHeader>
      </div>
    </React.Fragment>
  );
};

export default MainNavigation;
