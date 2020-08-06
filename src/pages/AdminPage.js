import React from "react";
import { Route, Redirect } from "react-router-dom";

class AdminPage extends React.Component {
  adminPass = {
    correctLogin: "Admin123",
    correctPassword: "hasło123",
  };

  state = {
    userLogin: "",
    userPassword: "",
    premission: false,
  };

  handleChange = (e) => {
    if (e.target.type == "text") {
      this.setState({
        userLogin: e.target.value,
      });
    } else {
      this.setState({
        userPassword: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.userLogin == this.adminPass.correctLogin &&
      this.state.userPassword == this.adminPass.correctPassword
    ) {
      this.setState({
        premission: true,
      });
    }
  };

  render() {
    return (
      <>
        <Route
          render={() =>
            this.state.premission ? (
              <h1>Witaj adminie!</h1>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </>
    );
  }
}

export default AdminPage;
