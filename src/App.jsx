import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ExampleComponent from './Example'
import ExampleComponentWithHook from './ExampleWithHook'
import SchemeSelector from './SchemeSelector'
import Selector from './Selector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <SchemeSelector />
    {/* <p> Without hook</p>
      <ExampleComponent />
      <p> With hook</p>
      <ExampleComponentWithHook  /> */}
    </div>
    
  )
}

export default App
