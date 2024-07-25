import React from "react";
import './Messages.css';

export default function Messages() {
  return (
    <div className='pages'>
      <div className='pages_wrapper'>
        <div
          id='page-1'
          className='page page--welcome page--intro'>
          <h1 className= ' message ml-[45%]'>Defender</h1>
        </div>
        <div
          id='page-2'
          className='page page--headband page--hidden'>
          <h1 className='message w-[70vw] mt-10 ml-32'>Land Rover</h1>
        </div>
        <div
          id='page-3'
          className='page page--sounds page--hidden'>
          <h1 className='message'>BOLD PRESENCE</h1>
          <p className='message--sub'>
            Enjoy Extreme perfomance and unmatched capability
          </p>
        </div>
        <div
          id='page-4'
          className='page page--battery page--hidden'>
          <h1 className='message mr-[50vw]'>Powerfull</h1>
          <p className='message--sub mr-[50vw]'>
            The master of extreme performance.
          </p>
        </div>
        <div
          id='page-5'
          className='page page--construction page--hidden'>
          <h1 className='message ml-10 mb-10 left-0 w-full '>GET <br /> Yours</h1>
          <p className='message--sub ml-10 mb-10 left-0 w-full'>
          <button className='comprar font-secondary'>Buy now</button>
          </p>
        </div>
        {/* <div
          id='page-6'
          className='page page--brandlogo page--hidden'>
          <h1 className='message'>Get yours!</h1>
          <button className='comprar'>Buy now</button>
        </div> */}
      </div>
    </div>
  );
}