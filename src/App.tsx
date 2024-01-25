import ClassCounter from './components/ClassCounter'
import UseStateCounter from './components/UseStateCounter'
import UseStatePreviousState from './components/UseStatePreviousState'
import UseStateWithObject from './components/UseStateWithObject'
import UseStateArray from './components/UseStateArray'
import UseEffectCounter from './components/UseEffectCounter'
import UseEffectConditional from './components/UseEffectConditional'
import './globals.css'

function App() {
  return (
    <>
      <div className='card'>
        <h1>⏳ Class based Counter</h1>
        <ClassCounter />
      </div>

      <div className='card'>
        <h1>🎣 useState Hook</h1>
        <h3>useState hook Counter</h3>
        <UseStateCounter />
      </div>

      <div className='card'>
        <h1>📐 <span className='text-rainbow'>Rules of Hooks</span></h1>
        <ul>
          <li>
            <p><strong>"Only Call Hooks at the Top Level"</strong></p>
            <p> Don't call Hooks inside loops, conditions, or nested functions. </p>
          </li>
          <li>
            <p><strong>"Only Call Hooks from React Functions"</strong></p>
            <p>Call them from within React functional components and not just any regular JavaScript function.</p>
          </li>
        </ul>
      </div>

      <div className='card'>
        <h1>🎈 useState with previous state</h1>
        <UseStatePreviousState />
      </div>

      <div className='card'>
        <h1>📦 useState with object</h1>
        <UseStateWithObject />
      </div>

      <div className='card'>
        <h1>🎹 useState with array</h1>
        <UseStateArray />
      </div>

      <div className='card'>
        <h1>⭐ <span className='text-rainbow'>Summary - useState</span></h1>
        <ul>
          <li> The useState hook lets you add state to functional components. </li>
          <li>In classes, the state is always an object.</li>
          <li>With an useState hook, the state doesn't have to be an object.</li>
          <li>The useState hook returns an array with 2 elements.</li>
          <li> The first element is the current value of the state, and the second element is a state setter function. </li>
          <li> New state value depends on the previous state value? You can pass a function to the setter function. </li>
          <li> When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function. </li>
        </ul>
      </div>

      <div className='card'>
        <h1>💥 <span className='text-rainbow'>useEffect</span></h1>
        <ul>
          <li> The Effect Hook lets you perform <strong>side effects</strong> in <strong>functional components</strong>. </li>
          <li> It is a close replacement for <strong>componentDidMount</strong>, <strong>componentDidUpdate</strong> and <strong>componentWillUnmount</strong>. </li>
        </ul>
      </div>

      <div className='card'>
        <h1>🚙 useEffect after render</h1>
        <UseEffectCounter />
      </div>

      <div className='card'>
        <h1>💣 <span className='text-rainbow'>Explanation</span></h1>
        <ul>
          <li> When we specify useEffect, we are basically requesting React to execute the function that is passed as an argument every time the component renders. </li>
          <li> useEffect runs after every render of the component. </li>
        </ul>
      </div>

      <div className='card'>
        <h1>❔ useEffect with condition</h1>
        <UseEffectConditional />
      </div>
    </>
  )
}

export default App
