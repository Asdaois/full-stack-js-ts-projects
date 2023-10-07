import React from 'react'

const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className=''
      autoComplete='off'
    >
      {children}
    </form>
  )
}

export default Form
