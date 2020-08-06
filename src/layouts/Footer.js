import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <h1>Footer</h1>
      <Route path="/" exact render={(props) => <p>Strona główna</p>} />
      <Route
        path="/:page"
        exact
        render={(props) => {
          console.log(props);
          return (
            <div className="footer-details">
              <p>{props.match.params.page}</p>
              <p>{props.match.path}</p>
              <p>{props.match.url}</p>
            </div>
          );
        }}
      />
      <Route
        path="/:page/:product"
        render={(props) => {
          return (
            <div className="footer-details">
              <p>{props.match.params.product}</p>
              <p>{props.match.path}</p>
              <p>{props.match.url}</p>
            </div>
          );
        }}
      />
    </>
  );
};

export default Footer;
