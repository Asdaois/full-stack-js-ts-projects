import About from './information/About'
import AllSkills from './information/AllSkills'
import ContactMe from './information/ContactMe'
import NavBarInfo from './information/NavBarInfo'
import Presentation from './information/Presentation'
import React from 'react'

const App = () => {
  return (
    <div className='pt-4 bg-gray-700 overflow-clip flex flex-col'>
      <NavBarInfo />
      <div className='flex flex-col  gap-12 p-8 font-sans container mx-auto'>
        <Presentation />
        <AllSkills />
      </div>
      <footer className='bg-gray-900 flex flex-col md:flex-row gap-2 p-4'>
        <About />
        <ContactMe />
      </footer>
    </div>
  )
}

export default App
