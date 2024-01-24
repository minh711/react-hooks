import { useState } from 'react'

const HookCounterThree = () => {
  const [name, setName] = useState({firstName: '', lastName: ''})
  
  return (
    <form>
      <div className='flex flex-wrap gap-1'>
        <input
        type='text'
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type='text'
          value={name.lastName}
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />
      </div>
      
      <p>Your first name is - {name.firstName}</p>
      <p>Your last name is - {name.lastName}</p>
    </form>
  )
}

export default HookCounterThree