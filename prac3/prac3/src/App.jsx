import { useState } from 'react';

function App() {
  const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const futureDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString();
const [time, setTime] = useState(new Date().toLocaleTimeString());

setInterval(() => {
  setTime(new Date().toLocaleTimeString());
},1000);

  return (
    <div className='w-full h-screen bg-gray-200 content-center text-center text-5xl'>
      <div>
        <div className='heading-1 p-5'>Welcome to Charusat</div>
        <div className='content p-5'>The date is: {currDate}</div>
        <div className='content p-5 '>The time is: {time}</div>
        <div className='content p-5'>The date after 5 days will be: {futureDate}</div>
      </div>
      
    </div>
  )
}

export default App