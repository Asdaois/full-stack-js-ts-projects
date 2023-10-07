import React from 'react'

type Props = {
  displayName: string,
  imageUrl: string
}

const Skill = ({ displayName, imageUrl }: Props) => {
  return (
    <article className='flex relative justify-center w-24 h-24 group'>
      <div className='z-10 self-center text-transparent transition-all ease-in group-hover:text-white group-hover:scale-125'>
        <strong className='uppercase'>{displayName}</strong>
      </div>
      <img className='object-contain object-center absolute h-24 rounded transition-all ease-in group-hover:opacity-50 group-hover:blur-sm' src={imageUrl} />
    </article>
  )
}

export default Skill
