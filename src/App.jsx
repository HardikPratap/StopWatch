import { useRef, useState } from 'react'

import './App.css'

function App() {
  const intervalRef= useRef(null);
  const [count, setCount]= useState(0);

  return <div>
  <Counter count={count} setCount={setCount} intervalRef={intervalRef} />
  </div>
}

function Counter({count,setCount,intervalRef}){

  function startCounter(){

    const intervalId= setInterval(() => {
      setCount(count =>count+1)
    }, 1000);

    intervalRef.current = intervalId
  }

  function stopCounter(){
    if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current=null
    }
  }

  return <div>
    <h1>
    {count}
    </h1>
    <button onClick={startCounter}>Start</button>
    <button onClick={stopCounter}>Stop</button>
  </div>  

}

export default App
