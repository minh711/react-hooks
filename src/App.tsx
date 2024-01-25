import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'

import './globals.css'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'

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
      </div>

      <div className='card'>
        <h1>📐 <span className='text-rainbow'>Rules of Hooks</span></h1>
        <ul>
          <li>
            <p><strong>"Only Call Hooks at the Top Level"</strong></p>
            <p>
              Don't call Hooks inside loops, conditions, or nested functions.
            </p>
          </li>
          <li>
            <p><strong>"Only Call Hooks from React Functions"</strong></p>
            <p>Call them from within React functional components and not just any regular JavaScript function.</p>
          </li>
        </ul>
      </div>

      <div className='card'>
        <h1>🎈 useState with previous state</h1>
        
        <HookCounterTwo />
      </div>

      <div className='card'>
        <h1>📦 useState with object</h1>

        <HookCounterThree />
      </div>

      <div className='card'>
        <h1>🎹 useState with array</h1>

        <HookCounterFour />
      </div>

      <div className='card'>
        <h1>⭐ <span className='text-rainbow'>Summary - useState</span></h1>

        <ul>
          <li>
            The useState hook lets you add state to functional components.
          </li>
          <li>In classes, the state is always an object.</li>
          <li>With an useState hook, the state doesn't have to be an object.</li>
          <li>The useState hook returns an array with 2 elements.</li>
          <li>
            The first element is the current value of the state, and the second
            element is a state setter function.
          </li>
          <li>
            New state value depends on the previous state value? You can pass a
            function to the setter function.
          </li>
          <li>
            When dealing with objects or arrays, always make sure to spread your
            state variable and then call the setter function.
          </li>
        </ul>
      </div>

      <div className='card'>
        <h1>💥 <span className='text-rainbow'>useEffect</span></h1>
        <ul>
          <li>
            The Effect Hook lets you perform <strong>side effects</strong> in <strong>functional components</strong>.
          </li>
          <li>
            It is a close replacement for <strong>componentDidMount</strong>, <strong>componentDidUpdate</strong> and <strong>componentWillUnmount</strong>.
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
