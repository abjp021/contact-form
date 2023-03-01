import React, { useState } from "react";
import "./Form.css"; // CSS to style the form and inputs
import Swal from "sweetalert2";

function Form() {

// Using Hooks to manage State and log the data on Console
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const submitForm = (event) => {

    // prevent default form behavior
    event.preventDefault();

    // form validation to ensure all fields are filled out before submission
    if (!name || !email || !password || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Fill all the Fields",
      });
    } 
    // Confirmation message after successful submission.
    else {
      Swal.fire({
        title: "Success",
        text: "Message Sent Successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      console.log(
        "Name: " +
          name +
          "\nEmail: " +
          email +
          "\nPassword: " +
          password +
          "\nMessage: " +
          message
      );
      setName("");
      setEmail("");
      setPassword("");
      setMessage("");
    }
  };

  return (
    // Form Component with Name, Email, Password, & Message
    <div className="container contact-form">
      <div className="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form onSubmit={submitForm}>
        <h3>Tell us What's on your Mind!</h3>
        <div className="">
          <div className="">
            <div className="form-group">
              <label>
                Name <span style={{ color: "#e15563" }}>*</span>
              </label>
              <input
                type="text"
                name="txtName"
                className="form-control"
                onChange={onNameChange}
                value={name}
              />
            </div>
            <div className="form-group">
              <label>
                Email <span style={{ color: "#e15563" }}>*</span>
              </label>
              <input
                type="email"
                name="txtEmail"
                className="form-control"
                onChange={onEmailChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>
                Password <span style={{ color: "#e15563" }}>*</span>
              </label>
              <input
                type="password"
                name="txtPassword"
                className="form-control"
                onChange={onPasswordChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>
                Message <span style={{ color: "#e15563" }}>*</span>
              </label>
              <textarea
                name="txtMsg"
                className="form-control"
                style={{ width: "50%", height: "190px" }}
                onChange={onMessageChange}
                value={message}
                // aria-label="Tell us what's on your mind"
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <button className="btnContact">Send!</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
