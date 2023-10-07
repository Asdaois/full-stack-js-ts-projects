import React from 'react'
import useTelegram from '../hooks/useTelegram'

const ContactMe = () => {
  const { message, handleSubmit, handleChange } = useTelegram()

  return (
    <section id='contact-me' className='md:w-1/2 hover:drop-shadow-lg hover:shadow-white bg-gray-800 rounded-lg'>
      <h1 className='p-4 text-4xl text-gray-100 text-center'>Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        autoComplete='off'
        className='flex flex-col gap-2 p-2 px-4 tracking-widest text-gray-100'
      >
        <div className='flex gap-2'>
          <input
            className='block p-5 w-full bg-gray-900 rounded-lg focus-visible:ring focus-visible:ring-white focus-visible:outline-none'
            type='text'
            name='name'
            placeholder='Name'
            value={message?.name}
            onChange={handleChange}
          />
          <input
            className='block p-5 w-full bg-gray-900 rounded-lg focus-visible:ring focus-visible:ring-white focus-visible:outline-none'
            type='email'
            name='email'
            placeholder='Email'
            value={message?.email}
            onChange={handleChange}
          />
        </div>
        <input
          className='block p-5 bg-gray-900 rounded-lg focus-visible:ring focus-visible:ring-white focus-visible:outline-none'
          type='text'
          name='subject'
          value={message?.subject}
          onChange={handleChange}
          placeholder='Subject'
        />
        <textarea
          className='block p-5 bg-gray-900 rounded-lg focus-visible:ring focus-visible:ring-white focus-visible:outline-none'
          name='message'
          value={message?.message}
          onChange={handleChange}
          placeholder='Message'
        ></textarea>

        <input type='submit' value='Send Message' className='px-4 py-2 bg-blue-700 rounded-lg hover:cursor-pointer hover:bg-blue-600 ' />
      </form>
    </section>
  )
}

export default ContactMe
