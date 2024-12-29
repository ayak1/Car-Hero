import React from 'react'
import Logo from '../../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
        <motion.nav
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{
                delay:0.1
            }}
        >
           <div className='container py-5 px-3 text-white flex justify-between items-center'>
                {/* logo section */}
                <div>
                    <img className='invert w-[80px]' src={Logo} alt="" />
                </div>
                {/* list nav menu section */}
                <ul className='hidden md:flex justify-center text-center uppercase '>
                    <li className='hover:bg-primary hover:shadow-[0px_0px_20px_8px_#d2e6ff] rounded-md duration-200 px-6 py-2'><a href="#">Home</a></li>
                    <li className='hover:bg-primary hover:shadow-[0px_0px_20px_8px_#d2e6ff] rounded-md duration-200 px-6 py-2'><a href="#">About us</a></li>
                    <li className='hover:bg-primary hover:shadow-[0px_0px_20px_8px_#d2e6ff] rounded-md duration-200 px-6 py-2'><a href="#">Bikes</a></li>
                    <li className='hover:bg-primary hover:shadow-[0px_0px_20px_8px_#d2e6ff] rounded-md duration-200 px-6 py-2'><a href="#">Cars</a></li>
                </ul>
                <div className='flex justify-center space-x-4'>
                    {/* side menu icon section*/}
                    <div className='rounded_icon '>
                        <IoMenu className='text-xl' />
                    </div>
                    {/* search icon section */}
                    <div className='rounded_icon'>
                        <IoSearch className='text-xl'  />
                    </div>
                </div>
           </div>
        </motion.nav>
  )
}

export default Navbar