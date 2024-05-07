import React from 'react'
import "../App.css"
import Navbar2 from './Navbar2'

const About = () => {

  return (
    <>
      <Navbar2 />
      <div className='bg flex flex-col justify-center items-center sm:w-screen'>
        <h1 className=' text-xl sm:text-3xl text font-bold text-center mt-10 '>About <img src="/Logo.png" width='75px' className='inline' alt="Funngro" /> Funngro</h1>

        <div className=' text my-10 mx-5 '>
          <h2 className='underline my-10 text-center text-2xl font-semibold '>Origin of Funngro</h2>
          <p className='text-center'>Funngro is a Mumbai-based startup that connects teenagers with companies that need specific skills. Teenagers can complete assigned tasks and earn money, while companies can outsource work conveniently</p>
        </div>
        <div className=" text my-10 mx-5">
          <h2 className='underline my-10 text-center text-2xl font-semibold '>Revenue by Funngro</h2>
          <p className='text-center'>Funngro earns revenue by charging a commission on teenagers' earnings. The company has secured 50 lakhs rupeed investment from Shark Tank India for 4.16% equity. This funding will help Funngro expand its operaions and partnerships</p>
        </div>
        <div className=" text my-10 mx-5">
          <h2 className='underline my-10 text-center text-2xl font-semibold '>Features offered to Teenagers by Funngro</h2>
          <p className='text-center'>Funngro offers a wide variety for teenagers to earn money as well as gain experience about jobs and enhance their skills.</p>
          <p className='text-center'>Funngro offers some features for parents also like what their child is doing etc.</p>
          <p className='text-center'>As Funngro calls their users "Teenlancers", they offer them to choose on which project they want to work or not. </p>
          <p className='text-center'>Funngrow also provides a rupay based physical card </p>
        </div>
        <div className=" text my-10 mx-5 flex flex-col justify-center items-center">
          <h2 className='text-2xl text-center font-bold underline mb-10'>Conclusion</h2>
          <p className=' text-center w-3/4'>Therefore, considering the innovative approach and promising market potential of Funngro, investors may find it a lucrative opportunity to support and fuel its growth trajectory. Also teenagers and companies are also attracted towards Funngro.</p>
        </div>
      </div>



    </>
  )
}

export default About
