import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute flex h-1/5 w-full top-8 '>
        <div className='flex justify-between'>
            <ul className='m-2 p-2 flex flex-row gap-20 text-xl text-white'>
              <li className='ml-20'>Home</li>
              <li>About</li>
              <li>Gallery</li>
              <li>Shop</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar