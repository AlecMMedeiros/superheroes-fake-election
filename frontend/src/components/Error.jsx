import React from 'react'

export default function Error({error}) {
  return (
    <div className='flex flex-col mx-auto h-screen w-screen justify-center items-center bg-[#262626] text-5xl  text-gray-200'>
      <p>{error}</p>
      <p>Sorry for the inconvenience. Please, check your connection and try again.</p>
    </div>
  )
}
