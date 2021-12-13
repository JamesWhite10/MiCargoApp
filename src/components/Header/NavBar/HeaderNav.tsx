import React from "react";
import style from "./HeaderNav.module.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/image/MIKARGO_Flat Color Logo_JPEG.jpg";
import { PATH } from "../../../app/App";
import { NavLink } from "react-router-dom";
import AuthenticationNav from "../AuthenticationNav/AuthenticationNav";
import { Turn as Hamburger } from "hamburger-react";

const HeaderNav: React.FC = () => {
  const expandValue = "xxl" as any;
  // a workaround for expand, since it does not have "xxl" in its type
  return (
    <div className={style.navBlock}>
      <Navbar sticky={"top"} className={"lh-lg"} expand={expandValue} collapseOnSelect>
        <Navbar.Brand>
          <NavLink to={PATH.HOME}>
            <img className={style.logo} src={logo} alt={"MiKargo Logo"} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle className={"border border-white"}>
          <Hamburger direction="right" color={"#005eb8"} />
        </Navbar.Toggle>
        <Navbar.Collapse className={"text-center"}>
          <Nav className={style.navBlock}>
            <NavLink to={PATH.HOME} className={style.nav}>
              Home
            </NavLink>
            <NavLink to={PATH.ABOUT_US} className={style.nav} activeClassName={style.active}>
              About Us
            </NavLink>
            <NavLink to={PATH.SUPPORT_FAQ} className={style.nav} activeClassName={style.active}>
              Support/FAQ
            </NavLink>
            <NavLink to={PATH.REPORT_A_CLAIM} className={style.nav} activeClassName={style.active}>
              Report a Claim
            </NavLink>
            <NavLink
              to={PATH.CANCEL_A_PURCHASE}
              className={style.nav}
              activeClassName={style.active}
            >
              Cancel a Purchase
            </NavLink>
          </Nav>
          <AuthenticationNav />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
