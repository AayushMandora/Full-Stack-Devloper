import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [btnshow, setBtnshow] = useState(false);
  const [todos, settodos] = useState([
    {
      title:"1st todo",
      desc:"This is 1st Todo"
    },
    {
      title:"2nd todo",
      desc:"This is 2nd Todo"
    },
    {
      title:"3rd todo",
      desc:"This is 3rd Todo"
    }
  ])

  const Todo=({todo})=>{
    return <>
      <div>
        <div className='todo'>{todo.title}</div>
        <div className='todo'>{todo.desc}</div>
      </div>
    </>
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {btnshow?<button>This is True Button</button>:<button>This is False Button</button>}
      {/* {btnshow && <button>This is True Button</button>} */}

      <h1>Vite + React</h1>

      {/* <Todo title="1st Todo" desc="This is 1st Todo"/> */}
      {todos.map(todoo=>{
        return <Todo todo={todoo}/>
      })}


      <div className="card">
        <button onClick={() => setBtnshow(!btnshow)}>
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
