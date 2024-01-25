import { useEffect, useState } from 'react'

const UseEffectConditional = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `You clicked ${count} times ${name}`;
  }, [count]) // to make it to be executed only when the [count] value changes

  return (
    <div className='flex flex-wrap gap-1'>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default UseEffectConditional