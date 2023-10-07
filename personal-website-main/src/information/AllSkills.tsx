import React from 'react'

import { backendImages, frontendImages, otherImages } from '../assets'
import Skill from '../components/skill'
import Skills from '../components/skills'

const AllSkills = () => {
  return (
    <div className='flex flex-col gap-12' id='skills'>
      <Skills displayName='Frontend'>
        <Skill displayName='html' imageUrl={frontendImages.html} />
        <Skill displayName='css' imageUrl={frontendImages.css} />
        <Skill displayName='js' imageUrl={frontendImages.js} />
        <Skill displayName='tailwind' imageUrl={frontendImages.tailwind} />
        <Skill displayName='react' imageUrl={frontendImages.react} />
        <Skill displayName='redux' imageUrl={frontendImages.redux} />
        <Skill displayName='nextjs' imageUrl={frontendImages.nextjs} />
      </Skills>
      <Skills displayName='Backend'>
        <Skill displayName='express' imageUrl={backendImages.express} />
        <Skill displayName='mongodb' imageUrl={backendImages.mongodb} />
        <Skill displayName='mongoose' imageUrl={backendImages.mongoose} />
        <Skill displayName='nodejs' imageUrl={backendImages.nodejs} />
        <Skill displayName='firebase' imageUrl={backendImages.firebase} />
        <Skill displayName='passportjs' imageUrl={backendImages.passportjs} />
      </Skills>
      <Skills displayName='Others'>
        <Skill displayName='git' imageUrl={otherImages.git} />
        <Skill displayName='github' imageUrl={otherImages.github} />
        <Skill displayName='heroku' imageUrl={otherImages.heroku} />
        <Skill displayName='jest' imageUrl={otherImages.jest} />
        <Skill displayName='npm' imageUrl={otherImages.npm} />
        <Skill displayName='webpack' imageUrl={otherImages.webpack} />
        <Skill displayName='typescript' imageUrl={otherImages.typescript} />
      </Skills>
    </div>
  )
}

export default AllSkills
