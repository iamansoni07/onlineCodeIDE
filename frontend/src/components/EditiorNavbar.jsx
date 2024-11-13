import React from 'react'
import logo from "../images/logo.png"
import { FiDownload } from "react-icons/fi";


const EditiorNavbar = () => {
  return (
    <>
      <div className="EditiorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#040916]">
        <div className="logo">
          <img className='w-[150px] cursor-pointer' src={logo} alt="" />
        </div>
      </div>
    </>
  )
}

export default EditiorNavbar