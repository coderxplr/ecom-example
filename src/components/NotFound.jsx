import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100" style={{ fontFamily: 'lexand' }}>
      <div className="w-2/3 md:w-1/2 lg:w-1/3 overflow-hidden rounded-full shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-center text-gold-700">
          PAGE NOT FOUND
        </h1>
      </div>
      <a href='/'>
      <br/>
      <h3  className="text-4xl font-bold text-center text-gold-700">Click Here to Go To Home</h3>
      </a>
    </div>
  )
}

export default NotFound
