import React, { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi';
import headerIcon from "../../../assets/headerIcon.png";
import { Link } from 'react-router-dom';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => { setIsOpen(!isOpen) }

    return (
        <nav className='fixed top-0 flex w-full items-center justify-between
     bg-white/70 px-16 py-6 text-black backdrop-blur-md md:justify-evenly'>

            <Link to='/home'>
                <div className="flex items-center justify-center ">
                    <img src={headerIcon} alt="..."  className="w-[80px] hover:cursor-pointer"/>
                    <p className='bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-70 
                    text-3xl font-semibold transition-all duration-300 hover:opacity-100'>
                        Shoes.lk
                    </p>

                </div>
            </Link>

            <ul className='hidden md:flex gap-10'>
                <Link to="/home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Home</li></Link>
                <Link to='/product' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Products</li></Link>
                <Link to="/about" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>About</li></Link>
                <Link to="/contact" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Contact Us</li></Link>
            </ul>
            

            {/* to handel menu icon active or not */}
            {
                isOpen ? (
                    <BiX onClick={menuOpen} className='block md:hidden text-4xl cursor-pointer' />
                ) : (

                    <BiMenu onClick={menuOpen} className='block md:hidden text-4xl cursor-pointer' />
                )
            }

            {
                isOpen && (
                    <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 
                    flex-col items-start justify-start gap-10 border-l
                    bg-white/90 p-12 ${isOpen ? "block" : "hidden"}`}>

                        <ul className='hidden md:flex gap-10'>
                            <Link to="/home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Home</li></Link>
                            <Link to='/product' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Products</li></Link>
                            <Link to="/about" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>About</li></Link>
                            <Link to="/contact" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Contact Us</li></Link>
                        </ul>


                    </div>
                )
            }

        </nav>
    )
}

export default Header