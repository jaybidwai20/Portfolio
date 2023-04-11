import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";


import { MdOutlineContactPage } from "react-icons/md";


function Nav() {
  const [call,setcall]=useState("#")
  return (
    <div className='navb'>
      <div className='navc'>
      <a href="" onClick={()=>setcall("#")} className={call==="#"?'active2':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setcall("#about")} className={call==="#about"?'active2':''}><BiUser/></a>
      <a href="#experience"  onClick={()=>setcall("#experience")} className={call==="#experience"?'active2':''}><BiBookBookmark/></a>
      <a href="#services" onClick={()=>setcall("#services")} className={call==="#services"?'active2':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setcall("#contact")} className={call==="#contact"?'active2':''}><MdOutlineContactPage/></a>
      </div>
    </div>
  )
}

export default Nav
