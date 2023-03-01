import React, { useState } from "react";
import "./Form.css"; // CSS to style the form and inputs
import PasswordStrengthBar from "react-password-strength-bar";
import Swal from "sweetalert2";

function Form() {
  // Using Hooks to manage State and log the data on Console
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));

    // console.log(name + " = " + value);
  }

  //Shows Password Strength Meter on Click
  const [isShown, setIsShown] = useState(false);
  function handleClick() {
    setIsShown((current) => !current);
  }

  const submitForm = (event) => {
    // prevent default form behavior
    event.preventDefault();

    // form validation to ensure all fields are filled out before submission
    if (
      !inputValue.username ||
      !inputValue.email ||
      !inputValue.password ||
      !inputValue.message
    ) {
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
          inputValue.username +
          "\nEmail: " +
          inputValue.email +
          "\nPassword: " +
          inputValue.password +
          "\nMessage: " +
          inputValue.message
      );
      setInputValue({
        username: "",
        email: "",
        password: "",
        message: "",
      });
      setIsShown(false); //Hides Password Strength Meter
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
                name="username"
                className="form-control"
                onChange={handleChange}
                value={inputValue.username}
              />
            </div>
            <div className="form-group">
              <label>
                Email <span style={{ color: "#e15563" }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                value={inputValue.email}
              />
            </div>
            <div className="form-group">
              <label>
                Password <span style={{ color: "#e15563" }}>*</span>
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleChange}
                value={inputValue.password}
                onClick={handleClick}
              />{" "}
              {isShown && (
                <PasswordStrengthBar
                  password={inputValue.password}
                  style={{ width: "50%", margin: "auto" }}
                />
              )}
            </div>
            <div className="form-group">
              <label>
                Message <span style={{ color: "#e15563" }}>*</span>
              </label>
              <textarea
                name="message"
                className="form-control"
                style={{ width: "50%", height: "190px" }}
                onChange={handleChange}
                value={inputValue.message}
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
