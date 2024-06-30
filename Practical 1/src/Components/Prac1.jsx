import React,{useState} from 'react';

const Prac1 = () => {
    const [jscount,setjscount]=useState(0);
    const[pycount,setpycount]=useState(0);
    const[javacount,setjavacount]=useState(0);

    const handleclick = (language) =>{
        if(language === 'javascript'){
            setjscount(jscount+1);
        }
        if(language == 'python'){
            setpycount(pycount+1);
        }
        if(language == 'java'){
            setjavacount(javacount+1);
        }
    };

    const handleclear =() => {
        setjscount(0);
        setpycount(0);
        setjavacount(0);
    };
    return (
        <div>
            <div className='flex h-screen w-full items-center justify-center bg-center bg-cover   ' style={{backgroundImage:`url('https://res.cloudinary.com/dgwtgr6do/image/upload/v1719752108/hpkvfiw48wobp0iye9zl.jpg')`}}>
                <div className='h-4/5 w-4/5 bg-gray-400 bg-opacity-80 rounded-2xl'>
                    <div className='text-center p-10'>
                        <p className='font-bold text-6xl'> Vote For Your favourite Language </p>
                    </div>
                    <div className='flex p-8 justify-evenly'>
                        <button onClick={()=> handleclick('javascript')} id='javascript' className='w-40 border rounded-xl h-12 font-bold hover:border-4 hover:text-xl'>
                            Javascript
                        </button>
                        <button onClick={()=> handleclick('python')} id='python' className='w-40 border rounded-xl h-12 font-bold hover:border-4 hover:text-xl'>
                            Python
                        </button>
                        <button onClick={()=> handleclick('java')} id='java' className='w-40 border rounded-xl h-12 font-bold hover:border-4 hover:text-xl'>
                            Java
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={handleclear} id='clear' className='w-40 border rounded-xl h-12 font-bold hover:border-4 hover:text-xl'>
                            Clear All
                        </button> 
                    </div>
                    <div className='text-center font-bold text-xl p-9'>
                        <p>Java Script : {jscount}</p>
                        <p>Python : {pycount}</p>
                        <p>Java : {javacount} </p>
                    </div>
                    <div className='text-center font-bold p-19'>
                        <p>Developed By Jay Patel</p>
                        <p>22DCS061</p>
                    </div>

                </div>

            </div>
        </div>
    )
    }

export default Prac1;