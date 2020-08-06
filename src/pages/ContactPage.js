import React from "react";
import { Prompt } from "react-router-dom";
import "../styles/ContactPage.css";

class ContactPage extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <>
        <h2>Napisz do nas</h2>
        <div className="contact-containers">
          <form onSubmit={this.handleSubmit}>
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
            ></textarea>
            <button>Wyślij</button>
          </form>
          <Prompt
            when={this.state.value.length > 0 ? true : false}
            message="Masz wypełniony formularz, ale go nie wysłałeś, jeśli opuścisz stronę wszystko zostanieutracone. Czy chcesz to zrobić?"
          />
        </div>
      </>
    );
  }
}

export default ContactPage;
