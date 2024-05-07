import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <nav className='w-screen flex-col sm:flex-row bg text flex justify-around items-center'>
       <div className="logo flex justify-center items-center gap-8"><img className='w-[100px] sm:w-[150px]' src="/Icons/Logo.png" alt="Logo" /><span className='sm:hidden inline text-xl font-bold'>Funngro</span></div>
        <ul className='flex justify-center items-center gap-10 '>
            <li className='flex justify-center items-center gap-0'><img src="Icons/instagram.webp" className='md:w-[70px] w-[50px]'  alt='Instagram' /><span className='md:text-xl font-bold'>@funngro</span></li>
            <li className='md:text-xl font-bold'><Link to='/about'>About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
