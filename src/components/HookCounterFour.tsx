import { useState } from 'react'

interface Item {
  id: number;
  value: number;
}

const HookCounterFour = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }]);
  }

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounterFour