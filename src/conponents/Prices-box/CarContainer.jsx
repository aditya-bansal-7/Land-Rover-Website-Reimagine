import React from 'react'
import ModelName from './ModelName'
import CartComp from './CartComp'
import PriceCart from './PriceCart'


const carsModel = [
    {
        name:"Range Rover Evoque",
        id:0,
        img:"https://jlr.scene7.com/is/image/jlr/L55124GL_303101952_001_DX_ENTRY?wid=1500",
    },
    {
        name:"Range Rover Velar",
        id:1,
        img:"https://jlr.scene7.com/is/image/jlr/L56024GL_303101279_010?wid=1500",
    },
    {
        name:"Range Rover Sport",
        id:2,
        img:"https://jlr.scene7.com/is/image/jlr/L46125GL_303103154_019?wid=1500",
    },
    {
        name:"Range Rover",
        id:3,
        img:"https://jlr.scene7.com/is/image/jlr/L460_22MY_117_GLHD_DX?wid=1500",
    },
    {
        name:"Defender 130",
        id:4,
        img:"https://jlr.scene7.com/is/image/jlr/L66325GL_303103289_012?wid=1500",
    },
    {
        name:"Defender 110",
        id:5,
        img:"https://jlr.scene7.com/is/image/jlr/L66325GL_303103289_027?wid=1500",
    },
    {
        name:"Defender 90",
        id:6,
        img:"https://jlr.scene7.com/is/image/jlr/L66325GL_303103289_010?wid=1500",
    },
    {
        name:"Discovery Sport",
        id:7,
        img:"https://jlr.scene7.com/is/image/jlr/L55024GL_303101775_021_NAV_ENTRY-2?wid=1500",
    },
    {
        name:"Discovery",
        id:8,
        img:"https://jlr.scene7.com/is/image/jlr/L46224GL_303101655_001_ENTRY-2?wid=1500",
    },
    {
        name:"Land Rover Electric",
        id:9,
        img:"https://jlr.scene7.com/is/image/jlr/L56024GL_303101279_037_DC_DX?wid=1500",
    },
    {
        name:"Range Rover By SV",
        id:10,
        img:"https://jlr.scene7.com/is/image/jlr/L460_22MY_SV_002_GLHD_DX_2560x1440?wid=1500",
    }
];
const CarContainer = () => {
  return (
    <div className="flex w-full items-start gap-20">
          <div className="w-1/4 py-[50vh]">
            <ul>
              {carsModel.map((carModel) => (
                <li key={carModel.id}>
                  <ModelName id={carModel.id}>{carModel.name}</ModelName>
                </li>
              ))} 
            </ul>
          </div>
          <div className="sticky top-0 flex flex-col h-screen w-3/4 items-center">
            <div className="lg:relative absolute lg:top-[20%] top-[5%] mr-[145%] lg:mr-[0%] aspect-video lg:w-full w-[80vw] rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
                {carsModel.map((car) => (
                  <CartComp id={car.id} img={car.img}/>
                ))}
                
            </div>
            <div className='lg:visible hidden relative w-full top-[40%]'>
                 <PriceCart />
            </div>
          </div>
        </div>
  )
}

export default CarContainer