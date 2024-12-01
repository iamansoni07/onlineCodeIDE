import React, { useState } from 'react'
import img from "../images/code.png"
import deleteImg from "../images/delete.png"
import { api_base_url } from '../helper';
import { useNavigate } from 'react-router-dom';

const ListCard = ({item}) => {
  const navigate = useNavigate();
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);
  
  const deleteProj = (id) => {
    fetch(api_base_url + "/deleteProject",{
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        progId: id,
        userId: localStorage.getItem("userId")
      })
    }).then(res=>res.json()).then(data=>{
      if(data.success){
        setIsDeleteModelShow(false)
        window.location.reload()
      }else{
        alert(data.message)
        setIsDeleteModelShow(false)
      }
    })
  }
  return (
    <>
      <div className="listCard mb-2 w-[full] flex items-center justify-between p-[10px] bg-[#040916] cursor-pointer rounded-lg hover:bg-[#111b34]">
        <div onClick={()=>{navigate(`/editior/${item._id}`)}} className='flex items-center gap-2'>
          <img className='w-[80px]' src={img} alt="" />

        </div>

      </div>


    </>
  )
}

export default ListCard