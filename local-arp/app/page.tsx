import FerromineraTren from '../public/ferrominera-tren.jpg'
import Image from 'next/image'
import React from 'react'
import { Servicio } from '../components/Servicio'
import { servicios } from 'data/servicios'

export default async function page () {
  return (
    <div className='container relative'>
      <div className='w-full h-96 relative'>
        <div className='float-left absolute left-0 top-0 z-10 p-5 flex flex-col justify-center items-center w-full h-96'>
          <h2 className='text-white text-center text-4xl font-bold'>
            CVG Ferrominera Orinoco C.A
          </h2>
          <div className='flex flex-row items-end'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='text-white'
              width='88'
              height='88'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#FFC107'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' />
              <circle cx='12' cy='11' r='3' />
              <path d='M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z' />
            </svg>
            <p className='text-sm text-white font-bold'>
              Puerto Ordaz, Estado Bolivar
            </p>
          </div>
        </div>
        <Image
          className='relative w-full object-cover object-left h-96 brightness-75'
          alt='logo de ferrominera'
          src={FerromineraTren}
        />
      </div>
      <section className='flex flex-col justify-center items-center w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 text-white mt-6'>
        <header>
          <h3 className='text-2xl'>Servicios</h3>
        </header>
        <div className='flex gap-3'>
          {servicios.map(servicio => (
            <Servicio key={servicio.title + '1'} servicio={servicio} />
          ))}
        </div>
      </section>
    </div>
  )
}
