import { useState } from 'react'

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    // for(let i = 0; i < 5; i++) {
    //   setCount(count + 1); // will not working
    // }

    for (let i = 0; i < 5; i++) {
      // here we set the name of the previous state to `prevCount`
      setCount(prevCount => prevCount + 1); 
    }
  }

  return (
    <div>
      Count: {count}
      <div className='flex flex-wrap gap-1 mt-1'>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
      </div>
    </div>
  )
}

export default HookCounterTwo