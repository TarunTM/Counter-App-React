import { useState } from 'react'

function App() {

  const[count,setCount] = useState(0);
  
  function decrementHandler(){
    setCount(count - 1);
  }

  function incrementHandler(){
    setCount(count + 1);
  }

  return(

        <div className = " w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#344151] gap-10 ">
            <div className="text-[#0398d4] font-medium text-2xl ">
              <h2>Increment & Decrement</h2>
            </div>

            <div className="flex bg-white gap-10 py-3 rounded-sm text-[25px] text-[#344151] ">
              <button onClick={decrementHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl " > - </button>

              <div className="text-4xl font-bold gap-12 flex items-center "> {count} </div>

              <button onClick={incrementHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl "> + </button>
            </div>

            <div>
              <button onClick={() => setCount(0)} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg "> Reset </button>
            </div>

            
        </div>
  )
}

export default App;
