import React from 'react'
import '../index.css';
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div>
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center '>
                <h2 className='text-white mx-1  text-2xl font-bold'>Priyanshu</h2>
            </div>
            {/* <div className='m-8 flex items-center  justify-right gap-4 text-2xl '>
            <a href="https://www.linkedin.com/in/priyanshu-panda/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-white transition ease-in-out delay-100 hover:-translate-y-1'></FaLinkedin>
              </a>
              <a href="https://leetcode.com/u/its_priyanshu/" target="_blank" rel="noopener noreferrer"> 
                <LiaExternalLinkAltSolid className='text-white transition ease-in-out delay-100 hover:-translate-y-1 '></LiaExternalLinkAltSolid>
                </a>
                <a href="https://www.instagram.com/priyanshuupanda__" target="_blank" rel="noopener noreferrer"> 
                <FaInstagram className='text-white transition ease-in-out delay-100 hover:-translate-y-1'></FaInstagram></a>
                <a href="https://github.com/thegeek36" target="_blank" rel="noopener noreferrer"> 
                <FaGithub className='text-white transition ease-in-out delay-100 hover:-translate-y-1'></FaGithub> </a>
                <a href="https://x.com/that_tallguy_1" target="_blank" rel="noopener noreferrer"> 
                <BsTwitterX className='text-white transition ease-in-out delay-100 hover:-translate-y-2'></BsTwitterX> </a>

            </div> */}
        </nav>
    </div>
  )
}

export default Navbar