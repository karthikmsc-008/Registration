import React, { useState } from "react";
import "./Registration.css";
const alpha = [
  { id: "a" },
  { id: "b" },
  { id: "c" },
  { id: "d" },
  { id: "e" },
  { id: "f" },
  { id: "g" },
  { id: "h" },
  { id: "i" },
  { id: "j" },
  { id: "k" },
  { id: "l" },
  { id: "m" },
  { id: "n" },
  { id: "o" },
  { id: "p" },
  { id: "q" },
  { id: "r" },
  { id: "s" },
  { id: "t" },
  { id: "u" },
  { id: "v" },
  { id: "w" },
  { id: "x" },
  { id: "y" },
  { id: "z" },
];
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [mountry, setCountry] = useState("");
  const [statename, setStatename] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [welcome, setWelcome] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr1, setEmailErr1] = useState("");
  let check = "";
  const validation = () => {
    if (name.length == 0) {
      setNameErr("* User name is required");
    }
    if (email.length == 0) {
      setEmailErr("* E-mail is required");
    }
    if ((email.length !== 0 && !email.includes("@")) || !email.includes(".")) {
      console.log("Inside the function");
      setEmailErr1("*Invalid e-mail");
    }
  };
  return (
    <div>
      {!welcome && (
        <div className="registration">
          <div style={{ color: "#0596b0", fontWeight: "bold" }}>
            {" "}
            REGISTRATION
          </div>
          <div>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              type={"text"}
              required
            ></input>
            <span>
              {" "}
              {name.length == 0 && (
                <p
                  style={{
                    color: "red",
                    marginTop: "1px",
                    fontSize: "13px",
                    marginLeft: "-30px",
                  }}
                >
                  {nameErr}
                </p>
              )}
            </span>
          </div>
          <div>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="E-Mail"
              type={"email"}
              required
            ></input>
            {email.length == 0 ? (
              <p
                style={{
                  marginTop: "1px",
                  color: "red",
                  fontSize: "13px",
                  marginLeft: "-55px",
                }}
              >
                {emailErr}
              </p>
            ) : (email.length !== 0 && !email.includes("@")) ||
              !email.includes(".") ? (
              <p
                style={{
                  marginTop: "1px",
                  color: "red",
                  fontSize: "13px",
                  marginLeft: "-55px",
                }}
              >
                {emailErr1}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div>
            <input
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              placeholder="Mobile"
              type={"tel"}
            ></input>
          </div>
          <div>
            <input
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              type={"text"}
            ></input>
          </div>
          <div>
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder="City"
              type={"text"}
            ></input>
          </div>
          <div>
            <input
              onChange={(e) => {
                setStatename(e.target.value);
              }}
              placeholder="State"
              type={"text"}
            ></input>
          </div>
          <div>
            <input
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Message"
              type={"text"}
            ></input>
          </div>
          {/* {name.length !== 0 && email.length !== 0 && email.includes("@") ? ( */}
          <div>
            <button
              className="afterclick"
              onClick={() => {
                validation();

                alpha.map((data, index) => {
                  if (
                    email.startsWith(data.id) &&
                    name.length !== 0 &&
                    email.length !== 0 &&
                    email.includes("@") &&
                    email.includes(".")
                  ) {
                    setWelcome(true);
                    alert("Registered Successfully");
                  }
                });
              }}
            >
              Register Now
            </button>
          </div>
        </div>
      )}
      {welcome && (
        <div className="registration1">
          <h2
            style={{
              paddingTop: "50px",
              textAlign: "center",
              color: "#0596b0",
            }}
          >
            Welcome to Angel Investor
          </h2>
        </div>
      )}
    </div>
  );
}
export default Registration;
