import React from 'react'
import '../index.css';
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center '>
                <h2 className='text-white mx-2 px-3 text-2xl font-extrabold'>Priyanshu Panda.</h2>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
                <FaLinkedin color="white"></FaLinkedin>
                <FaInstagram color="white"></FaInstagram>
                <FaGithub color="white"></FaGithub>
                <BsTwitterX color="white"></BsTwitterX>
            </div>
        </nav>
    </div>
  )
}

export default Navbar