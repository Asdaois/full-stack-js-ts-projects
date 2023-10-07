import React from 'react'

function InputText ({ handleChange, name, displayText, type, value }) {
  return (
    <div className='relative my-6 border-b-2 focus-within:border-blue-500'>
      <input
        type={type || 'text'}
        name={name}
        onChange={handleChange}
        value={value}
        className='block w-full appearance-none focus:outline-none bg-transparent peer'
        autoComplete='off'
        required
      />
      <label
        htmlFor='displayName'
        className={`absolute top-0 -z-1 peer-focus-within:scale-75 duration-500
        peer-focus-within:text-blue-500 peer-focus-within:-translate-y-6
        origin-[0%] pointer-events-none
        ${value.length > 0 ? '-translate-y-6 text-gray-500' : ''}
        `}
      >
        {displayText}
      </label>
      {/* <div className='text-red-500'>{handlers?.errors[name] || null}</div> */}
    </div>
  )
}

export default InputText
