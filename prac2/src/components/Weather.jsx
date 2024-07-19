import React from 'react';

const Weather = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-center bg-cover' style={{backgroundImage:`url('https://res.cloudinary.com/dgwtgr6do/image/upload/v1719762617/folbwzv1jfp8vxs33ewf.jpg')`}}>
        <div className='rounded-xl bg-white shadow-lg w-4/5 h-4/5 opacity-70'>
            <div className='text-6xl font-bold text-center flex items-center justify-center '>
                <p> WEATHER APP </p>
            </div>
            <form>
                <label>Choose your city
                </label>
            </form>
        </div>

    </div>
  )
}

export default Weather;