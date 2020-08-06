import React from "react";

const LoginPage = (props) => {
  console.log(props.handleChange);
  return (
    <>
      <div className="admin-login-box">
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            value={props.userLogin}
            onChange={props.handleChange}
          />
          <input
            type="password"
            value={props.userPassword}
            onChange={props.handleChange}
          />
          <button>Zaloguj się</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
