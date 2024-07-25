import React from 'react'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
const Visual = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}


export const RREvoque = () => {
    return(
        <Visual>
            <div className='w-full h-screen flex '>
                <div className='border-white w-full h-full '>
                    
                </div>
                <div className='text-white w-full h-full '>

                    <p>Range Rover Evoque</p>
                    <p>Description</p>
                    <p>Price $12345</p>

                    <ul>
                        <li className='flex-row'><p></p></li>
                    </ul>
                </div>
            </div>
        </Visual>
    )
}