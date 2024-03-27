import React from 'react'

const CommonButton = ({label , onclick}) => {
  return (
    <button className='bg-customBlue px-10 py-2 text-white rounded-lg w-full' onClick={onclick}>{label}</button>
  )
}

export default CommonButton
