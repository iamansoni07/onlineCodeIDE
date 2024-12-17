import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import image from "../images/authPageSide.webp";
import { api_base_url } from "../helper";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/signUp", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        name: name,
        email: email,
        password: pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          alert("Account created successfully");
          navigate("/login");
        } else {
          setError(data.message);
        }
      });
  };

  return (
    <>
      <div className=" container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[35%]">
          <img className="w-[200px]" src={logo} alt="" />
          <form onSubmit={submitForm} className="w-full mt-[60px]" action="">
            <div className="inputBox">
              <input
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                type="text"
                placeholder="Username"
              />
            </div>

            <div className="inputBox">
              <input
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="inputBox">
              <input
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="inputBox">
              <input
                required
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
                value={pwd}
                type="password"
                placeholder="Password"
              />
            </div>

            <p className="text-[gray]">
              Already have an account{" "}
              <Link to="/login" className="text-[#00AEEF]">
                login
              </Link>
            </p>

            <p className="text-red-500 text-[14px] my-2">{error}</p>

            <button className="btnBlue w-full mt-[20px]">Sign Up</button>
          </form>
        </div>

        <div className="relative w-[55%] h-screen flex flex-col text-white font-poppins">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={image}
            alt=""
          />

          <div className="relative z-10 h-full w-full">
            <div className="absolute top-[30%] w-full text-center px-6">
              <h1 className="text-5xl font-bold font-inter tracking-wide leading-snug">
                Build <span className="text-[#00AEEF]">software</span>, better
              </h1>
            </div>

            <div className="absolute top-[40%] w-full text-center px-6">
              <p className="text-lg font-medium leading-relaxed font-poppins">
                On-demand coding assistance for self-guided projects
              </p>
            </div>

            <div className="absolute top-[45%] w-full text-center px-6">
              <p className="text-lg font-medium leading-relaxed font-poppins">
                by amansoni0713
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default SignUp;



