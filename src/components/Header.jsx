import React from 'react'

const Header = ({category,title}) => {
  return (
    <div>
      <p className='text-3xl text-bold'>{category}</p>
      <p className='text-3xl text-semibold text-gray-400 m-3 ml-0'>{title}</p>
    </div>
  )
}

export default Header