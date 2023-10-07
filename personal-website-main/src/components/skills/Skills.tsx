import React from 'react'
import Container from '../container'

type Props = {
  displayName: string,
  children: React.ReactNode
}

const Skills = ({ displayName, children }: Props) => {
  return (
    <Container className='gap-4 items-center md:flex text-slate-300'>
      <div className='min-w-[200px] flex flex-col items-center text-6xl md:text-4xl h-full'>
        <span className='flex-grow grow-full'>{displayName}</span>
      </div>
      <div className='flex flex-wrap gap-8 justify-center p-4 md:justify-start'>
        {children}
      </div>
    </Container>
  )
}

export default Skills
