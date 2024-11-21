import React, { useState } from 'react'
import deleteImg from "../images/delete.png"
import codeImg from "../images/code.png" 
import { useNavigate } from 'react-router-dom';

const GridCard = ({item}) => {


  return (
    <>
      <div className="gridCard bg-[#040916] w-[270px] p-[10px] h-[180px] cursor-pointer hover:bg-[#111b34] rounded-lg shadow-lg shadow-black/50">
       <div onClick={()=>{navigate(`/editior/${item._id}`)}}>
        <img className="w-[90px]" src={codeImg} alt="" />
        <h3 className='text-[20px] w-[90%] line-clamp-1'>{item.title}</h3>
       </div>
        <div className='flex items-center justify-between'>
          <p className='text-[14px] text-[gray]'>Created in {new Date(item.date).toDateString()}</p>
          <img onClick={()=>{setIsDeleteModelShow(true)}} className='w-[30px] cursor-pointer' src={deleteImg} alt="" />
        </div>
      </div>


    </>
  )
}

export default GridCard