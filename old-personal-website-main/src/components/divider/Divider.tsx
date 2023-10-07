import React from 'react'

type Props = {
  children: React.ReactNode
}

const Divider = ({ children }: Props) => {
  return <div >{children}</div>
}

export default Divider
