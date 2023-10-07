import React from 'react'

type Props = {
  children: React.ReactNode
  className: string
}

const Container = ({ children, className }: Props) => {
  return (
    <section className={'w-full py-2 h-full bg-gray-900 rounded-xl shadow-md text-slate-300 hover:drop-shadow-2xl hover:shadow-white transition-all ' + className}>
      {children}
    </section>
  )
}
export default Container
