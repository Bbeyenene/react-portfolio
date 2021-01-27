import React from "react";
import "./contact.css";

function contact() {
  var handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="mydiv">
      <div className="personal">
        <div id="mydivheader">
          <p> Contact Information </p>
        </div>
        <h3>Berhane Beyene</h3>
        <h3>Chicago, IL</h3>
        <p>
          Phone: <span>(708) 427-2105</span>
        </p>
        <p>
          {" "}
          Email:{" "}
          <a href="mailto:monoxica2004@yahoo.com">monoxica2004@yahoo.com</a>
        </p>
      </div>
      {/* <form
        id="my-form-id"
        method="post"
        action="https://api.formcake.com/api/form/33a2c74d-f5f2-4615-928b-4de2ed9bf362/submission"
      > */}
      <form
        name="contact-form"
        id="my-form-id"
        method="post"
        action="https://api.formcake.com/api/form/e2ccce6c-6bcd-481b-b043-7db7b60f5d2f/submission"
      >
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            type="name"
            className="form-control"
            id="nameInput"
            aria-describedby="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="messageInput">Message</label>
          <textarea
            className="form-control"
            id="messageInput"
            rows="3"
          ></textarea>
        </div>
        <button
          onSubmit={handleFormSubmit}
          type="submit"
          className="btn btn-dark"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default contact;
