import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums=new Array(100_000_00).fill(0).map((_,i)=>{
  return {
    index:i,
    isMagical:i===99_000_00
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setnumbers] = useState(nums);

  // const magical=numbers.find(item=>item.isMagical===true) // Expensive Computation
  const magical=useMemo(() => numbers.find(item=>item.isMagical===true), [numbers])

  return (
    <>
      <div>{magical.index}</div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          if(count===5){
            setnumbers(new Array(10_000_00).fill(0).map((_,i)=>{
              return {
                index:i,
                isMagical:i===9_000_00
              }
            }))
          }
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
