import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <nav className='w-screen flex-col sm:flex-row bg text flex justify-around items-center'>
        <div className="logo flex justify-center items-center gap-8"><img className='w-[100px] sm:w-[150px]' src="/Icons/Logo.png" alt="Logo" /><span className='sm:hidden inline text-xl font-bold'>Funngro</span></div>
        <ul className='flex justify-center items-center gap-10 '>
            <li className='flex justify-center items-center gap-0'><img src="Icons/instagram.webp" width={70} alt='Instagram' /><span className='text-xl font-bold'>@funngro</span></li>
            <li className='text-xl font-bold'><Link to='/'>Home</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar2
