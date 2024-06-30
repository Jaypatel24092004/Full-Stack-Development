import React from 'react'

const Prac1 = () => {
  return (
    <div>
        <div className='flex h-screen w-full items-center justify-center bg-center bg-cover   ' style={{backgroundImage:`url('https://res.cloudinary.com/dgwtgr6do/image/upload/v1719752108/hpkvfiw48wobp0iye9zl.jpg')`}}>
            <div className='h-4/5 w-4/5 bg-gray-400 bg-opacity-80 rounded-2xl'>
                <div className='text-center p-10'>
                    <h1 className='font-bold text-6xl'> Vote For Your favourite Language </h1>
                </div>
                <div className='flex p-8 justify-evenly'>
                    <button className='w-40 border rounded-xl h-12 font-bold hover:border-4 hover:text-xl'>
                        Javascript
                    </button>
                    <button className='w-40 border rounded-xl h-12 font-bold hover:border-4 hover:text-xl'>
                        Python
                    </button>
                    <button className='w-40 border rounded-xl h-12 font-bold hover:border-4 hover:text-xl'>
                        Java
                    </button>
                </div>
                <div>
                    <h1>Java Script</h1>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Prac1