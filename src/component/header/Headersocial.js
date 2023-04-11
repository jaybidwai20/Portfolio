import React from 'react'
import { AiFillLinkedin} from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";


function Headersocial() {
  return (
    <div className='social'>
        <a  href="https://www.linkedin.com/in/jay-bidwai-16b245223/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/jaybidwai20" target="_blank"><AiFillGithub/></a>
        <a href="https://dribbble.com/" target="_blank"><AiFillDribbbleCircle/></a>

    </div>
  )
}

export default Headersocial
