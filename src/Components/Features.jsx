import React from 'react'
import "../App.css"

const Features = () => {
  return (
    <div className='flex justify-between items-center text px-24 flex-col   '>
      <div className="infz rounded-xl p-3 cursor-pointer md:w-[800px] w-[350px] sm:w-[700px]">
      <div className="flex justify-center items-center gap-7 m-5 bg2 p-4 rounded-xl flex-col">
        <div className="flex justify-center items-center gap-7 text-center">
        <img src="Companies.svg" alt="Company" />
        <h3 className='font-bold text-xl w-[169px]'>3500+ Companies</h3>
        </div>
        <div className="info lg:block text-center hidden sm:block">You can choose for which Client or Company you want to work</div>
      </div>
      </div>
      <div className="infz rounded-xl p-3 cursor-pointer md:w-[800px] w-[350px] sm:w-[700px]">
      <div className="flex justify-center items-center gap-7 m-5 bg2 p-4 rounded-xl  flex-col">
        <div className="flex justify-center items-center gap-7 text-center">
        <img src="Categoris.svg" alt="Category" />
        <h3 className='font-bold text-xl w-[169px]'>12 Categories</h3>
        </div>
        <div className="info text-center hidden sm:block">You can choose multiple categories to work in and earn more</div>
      </div>
      </div>
      <div className="infz rounded-xl p-3 cursor-pointer  w-[350px] md:w-[800px] sm:w-[700px]">
      <div className="flex justify-center items-center gap-7 m-5 bg2 p-4 rounded-xl  flex-col">
        <div className="flex justify-center items-center gap-7 text-center">
        <img src="Teenlancers.svg" alt="Teenlancer" />
        <h3 className='font-bold text-xl w-[169px]'>40K+ Teenlancers</h3>
        </div>
        <div className="info text-center hidden sm:block">Over 40K Teenlancers are officially registered on and are earning on Funngro</div>
      </div>
      </div>
      <div className="infz rounded-xl p-3 cursor-pointer  w-[350px] md:w-[800px] sm:w-[700px]">
      <div className="flex justify-center items-center gap-7 m-5 bg2 p-4 rounded-xl  flex-col">
        <div className="flex justify-center items-center gap-7 text-center">
        <img src="LiveProjects.svg" alt="Live Projects" />
        <h3 className='font-bold text-xl w-[169px]'>1000+ Live Projects</h3>
        </div>
        <div className="info text-center hidden sm:block">You get the opportunity to work on different projects with different payment</div>
      </div>
      </div>
    </div>
  )
}

export default Features
