import React from 'react'
import { data } from '../assets'

const About = () => {
  return (
    <article id='about' className='p-4 md:flex md:flex-col md:w-1/2 text-gray-100 lg:flex drop-shadow-lg shadow-white bg-gray-800 rounded-lg text-lg'>
      <h1 className='p-4 text-4xl text-center'>About me</h1>
      <ul className='list-disc list-inside'>
      {data.aboutMe.map(about => <li key={about.info}>{about.info}</li>)}
      </ul>
    </article>
  )
}

export default About
