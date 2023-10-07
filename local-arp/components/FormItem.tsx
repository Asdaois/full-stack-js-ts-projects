import React, { HTMLInputTypeAttribute } from 'react'

interface Props {
  label: string
  name: string
  type: HTMLInputTypeAttribute
  placeholder: string
  defaultValue?: any
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export function FormItem ({
  type,
  name,
  placeholder,
  label,
  defaultValue,
  inputProps
}: Props) {
  return (
    <div className='mb-2'>
      <label htmlFor={name} className='label'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className='input'
        defaultValue={defaultValue}
        {...inputProps}
      />
    </div>
  )
}
