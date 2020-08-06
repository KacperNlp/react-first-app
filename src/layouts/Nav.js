import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const menuList = [
  {
    name: "Start",
    path: "/",
    exact: true,
  },
  {
    name: "Newsy",
    path: "/news",
  },
  {
    name: "Kontakt",
    path: "/contact",
  },
  {
    name: "Admin",
    path: "/admin",
  },
];
const Nav = () => {
  const menu = menuList.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? true : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <ul className="nav">{menu}</ul>
    </nav>
  );
};

export default Nav;
