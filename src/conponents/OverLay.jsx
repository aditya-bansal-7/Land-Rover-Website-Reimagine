import React from 'react'
import Navbar from './Navbar/Navbar'

const OverLay = () => {
  return (
    <div className=' pointer-events-none z-20' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Navbar />
    </div>
  )
}

export default OverLay