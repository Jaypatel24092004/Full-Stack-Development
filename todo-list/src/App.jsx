import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todolist from './Components/To-do-list';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todolist />
    </>
  )
}

export default App
