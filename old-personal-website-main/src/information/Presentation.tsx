import React from 'react'
import { profile } from '../assets'

const Presentation = () => {
  return (
    <header className='flex top-4 flex-col gap-4 justify-center p-4 font-bold leading-relaxed align-middle bg-gray-900 rounded-xl shadow-md transition-all xl:flex-row text-slate-400 font-display hover:drop-shadow-2xl hover:shadow-white' id='presentation'>
      <div className='flex flex-col justify-center text-center sm:text-left lg:w-full lg:text-center xl:items-center xl:text-left 2xl:pl-14'>
        <h2 className='text-3xl leading-tight text-gray-300 sm:text-5xl md:text-6xl xl:my-2'>Full Stack Developer</h2>
        <p className='text-2xl leading-relaxed sm:text-4xl'>Specialized in MERN Stack</p>
        <ul className='hidden text-xs list-none list-inside text-left sm:block sm:text-xl sm:list-disc lg:list-none lg:text-center xl:list-disc xl:text-left text-slate-500'>
          <li>Self-taught software developer</li>
          <li>Improving day by day</li>
          <li>Interested in building complex systems</li>
          <li>Interested in participating in open-source projects</li>
        </ul>
      </div>
      <img className='rounded-xl object-contain h-96 w-96 mx-auto' src={profile.pic} />
    </header>
  )
}

export default Presentation
