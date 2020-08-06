import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../img/header1.jpg";
import img2 from "../img/header2.jpg";
import img3 from "../img/header3.jpg";

const Header = () => {
  const headerImgs = [img1, img2, img3];
  const index = Math.floor(Math.random() * headerImgs.length);
  const img = headerImgs[index];
  console.log(index);
  return <img src={img} alt="header background city" />;
  /* return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="miasto" />} />
        <Route path="/news" render={() => <img src={img2} alt="miasto" />} />
        <Route path="/admin" render={() => <img src={img3} alt="miasto" />} />
        <Route path="/contact" render={() => <img src={img1} alt="miasto" />} />
      </Switch>
    </>
  );*/
};

export default Header;
