import React from "react";

function Contact() {
  return (
    <>
      <div class="flex2">
        <div class="form-floating">
          <h2 style={{ textAlign: "center" }}>Contact Us</h2>
          <hr />
          <form ngNativeValidate id="form">
            <div class="form-floating mb-3">
              <input
                type="text"
                placeholder="name"
                class="form-control"
                name="Name"
                id="Name"
              />
              <label id="lab2" style={{ color: "black" }} for="input2">
                Name
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="Email"
                name="Email"
                placeholder="name@example.com"
              />
              <label id="lab1" style={{ color: "black" }} for="input1">
                Email address
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                placeholder="Phone"
                type="number"
                class="form-control"
                id="Number"
                name="Phone"
              />
              <label id="lab3" style={{ color: "black" }} for="input3">
                Phone
              </label>
            </div>

            <textarea
              name="Disc"
              id="Disc"
              cols="26"
              placeholder="Your Message"
              rows="5"
            ></textarea>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                id="btn2"
                mat-button
                style={{ backgroundColor: "BLACK", color: "white" }}
                class="btn btn-dark"
              >
                Submit
              </button>
            </div>
          </form>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              id="btn"
              mat-button
              style={{
                backgroundColor: "rgb(251, 195, 41)",
                color: " rgb(0, 0, 0)",
              }}
              class="btn btn-dark"
            >
              Update
            </button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
export default Contact;
