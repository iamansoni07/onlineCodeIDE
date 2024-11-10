import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { MdLightMode } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { api_base_url, toggleClass } from "../helper";

const Navbar = ({ isGridLayout, setIsGridLayout }) => {

  useEffect(() => {
    fetch(api_base_url + "/getUserDetails", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.user);
        } else {
          setError(data.message);
        }
      });
  }, []);



  return (
    <>
      <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#040916]">
        <div className="logo">
          <img className="w-[150px] cursor-pointer" src={logo} alt="" />
        </div>



      </div>
    </>
  );
};

export default Navbar;
