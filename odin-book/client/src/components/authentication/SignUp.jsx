import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { signUpUser } from '../../features/user/user.thunks'
import Form from './Form'
import FormTitle from './FormTitle'
import InputText from './InputText'

const SignUp = () => {
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: undefined,
    gender: 'Other'
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (newUser.password !== newUser.confirmPassword) {
      // TODO: provisional...
      alert('The password are differents')
      return
    }
    dispatch(signUpUser(newUser))
  }

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  return (
    <div
      className='max-w-sm mx-auto rounded-lg drop-shadow-xl overflow-hidden p-6 space-y-10 h-[420px] w-1/2'
    >
      <Form onSubmit={handleSubmit}>
        <FormTitle title='Sign-up' />
        <InputText
          value={newUser.displayName}
          handleChange={handleChange}
          displayText='Display Name'
          name='displayName'
        />
        <InputText
          value={newUser.email}
          handleChange={handleChange}
          displayText='Email'
          name='email'
          type='email'
        />
        <InputText
          value={newUser.password}
          handleChange={handleChange}
          displayText='Password'
          name='password'
          type='password'
        />
        <InputText
          value={newUser.confirmPassword}
          handleChange={handleChange}
          displayText='Confirm Password'
          name='confirmPassword'
          type='password'
        />
        <div className='flex items-center justify-between'>
          <label htmlFor='' className=''>
            Gender
          </label>
          <div className='block relative w-64'>
            <select
              className='block appearance-none w-full bg-white border
         border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow
          leading-tight focus:outline-none focus:shadow-outline'
              name='gender'
              onChange={handleChange}
              value={newUser.gender}
            >
              {['Other', 'Female', 'Male'].map((gender, index) => (
                <option key={index}>{gender}</option>
              ))}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='relative flex justify-between mt-3'>
          <label htmlFor='dateBirth'>Date of Birth</label>
          <input
            type='date'
            name='dateOfBirth'
            className='block bg-white border border-gray-400 hover:border-gray-500  rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            onChange={handleChange}
            value={newUser.dateOfBirth}
          />
        </div>
        <button type='submit' className='btn btn-green '>Sign Up</button>
      </Form>
    </div>
  )
}

export default SignUp
