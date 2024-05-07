import React from 'react'
import Navbar from './Navbar'
import RoadMap from './RoadMap'
import Features from './Features'
import "../App.css"

const Body = () => {
  return (
   <div className='bg lg:w-screen overflow-hidden'>
    <Navbar />
    <div className='first flex justify-center items-center gap-6 sm:gap-12 lg:gap-32 px-10 flex-col lg:flex-row '>
      <div className="text text-center mt-10">
        <h1 className='text-4xl font-bold'>Generate Your First Income</h1>
        <h1 className='text-4xl font-bold'>Gain Experience in Your Faviourite Hobby</h1>
        <p className=' mt-10'>Real Companies offers you a great value with projects</p>
        <p className=' my-5'>You can not only generate income but also get your first passion job</p>
      </div>
      <div className="image">
        <img className='' src="download.png" alt="Sharks" />
      </div>
    </div>
    <Features />
    <RoadMap />
   </div>
     
   
   

  )
}

export default Body
