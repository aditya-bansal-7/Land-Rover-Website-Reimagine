import React from 'react'
import Navbar from './Navbar/Navbar'

const OverLay = () => {
  return (
    // <div className=' pointer-events-none z-20' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
    //     <Navbar />
    // </div>
    <>
    <section className='h-screen w-screen flex items-center justify-start p-8 lg:p-20 select-none fixed' >
        <Navbar />
    </section>
    <section className='h-screen w-screen flex items-center p-8 lg:p-20 select-none mx-auto'>
      <div className='h-full w-full flex justify-center items-center' style={{marginTop:"200vh"}}>
        <h1 className='text-white justify-center flex w-full h-full items-center border'>Range Rover Sport !</h1>
      </div>
    </section>
    <section className='h-screen w-screen flex items-center p-8 lg:p-20 select-none mx-auto'>
      <div className='h-full w-full flex justify-center items-center' style={{marginTop:"200vh"}}>
        <h1 className='text-white justify-center flex w-full h-full items-center border'> Jai Bhole Baba ki !</h1>
      </div>
    </section>
    </>
  )
}

export default OverLay