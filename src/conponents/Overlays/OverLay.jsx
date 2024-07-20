import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Overlays.css';

const OverLay = () => {
  return (

    <>

    {/* first page  */}
    <section className='fixed w-screen flex items-center justify-start p-4 lg:p-6 m-2' >
        
    </section>
    {/* second page  */}
    <section className='h-screen w-screen flex items-center p-8 lg:p-20 select-none mx-auto'>
      <div className='h-full w-full flex justify-center items-center' style={{marginTop:"200vh"}}>
        <h1 className='text-white justify-center flex w-full h-full items-center border'>Range Rover Sport !</h1>
      </div>
    </section>

    {/* ring Gallery */}
    <section className='h-screen w-screen flex items-center p-8 lg:p-20 select-none mx-auto'>
      <div className='h-full w-full flex justify-center items-center' style={{marginTop:"200vh"}}>
        <h1 className='text-white justify-start text-5xl flex w-full h-full p-10 '>Image Gallery</h1>
        <h1 className='text-white justify-end items-end text-5xl flex w-full h-full p-10 '>Image Gallery</h1>
      </div>
    </section>

      {/* new html  */}

      <h1 className='text flex justify-center items-center'>
        Hello World
      </h1>

    </>
  )
}

export default OverLay