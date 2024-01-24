import { useState } from 'react'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'

import './globals.css'

function App() {
  return (
    <>
      <div className='card'>
        <h1>🎣 useState Hook</h1>

        <h3>Class based Counter</h3>
        <ClassCounter />

        <hr></hr>

        <h3>useState hook Counter</h3>
        <HookCounter />

        <hr></hr>

        <h2>📐 Rules of Hooks</h2>
        <p><strong>"Only Call Hooks at the Top Level"</strong></p>
        <p>
          Don't call Hooks inside loops, conditions, or nested functions.
        </p>
        <p><strong>"Only Call Hooks from React Functions"</strong></p>
        <p>Call them from within React functional components and not just any regular JavaScript function.</p>
      </div>
    </>
  )
}

export default App
