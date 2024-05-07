import React from 'react'
import "../App.css"
const RoadMap = () => {
  return (
    
   <div className='  overflow-hidden text bg flex items-center flex-col'>
    <h1 className='text-4xl font-bold text-center my-10'>Stepwise guide to earn on Funngro</h1>
     <div className="step bg2 w-[350px] p-3 sm:w-[700px] md:w-[800px] rounded-lg">
    <h2 className='text-3xl my-3 cursor-pointer hover:text-white'>Step 1: log In to Funngro</h2>
    <p className='cursor-pointer hover:text-white'><a href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro&hl=en_IN&gl=US" target='_blank'>Download the App</a></p>
    <p className='cursor-pointer hover:text-white'>Set up your profile and select your field of interests</p>
  </div>
  
  <div className="step bg2 w-[350px] sm:w-[700px] md:w-[800px]  rounded-lg p-3">
    <h2 className='text-3xl my-3 cursor-pointer hover:text-white'>Step 2: Complete Evaluation Projects</h2>
    <p className='cursor-pointer hover:text-white'>Evaluation Projects are small scaled projects that will help you to grow</p>
  </div>
  
  <div className="step bg2 w-[350px] p-3 sm:w-[700px] md:w-[800px] rounded-lg">
    <h2 className='text-3xl my-3 cursor-pointer hover:text-white'>Step 3: Apply To Companies</h2>
    <p className='cursor-pointer hover:text-white'>Now you can apply to companies and earn money</p>
    <p className='cursor-pointer hover:text-white'>Remember that you have to complete projects on given time</p>
  </div>
  
  <div className="step bg2 w-[350px] p-3 sm:w-[700px] md:w-[800px] rounded-lg">
    <h2 className='text-3xl my-3 cursor-pointer hover:text-white'>Step 4: Withdraw your earned money</h2>
    <p className='cursor-pointer hover:text-white'>You can withdraw money from wallet tab</p>
    <p className='cursor-pointer hover:text-white'>Money can only be withdrawn when you have earned ₹100</p>
  </div>
  
   </div>
  )
}

export default RoadMap
