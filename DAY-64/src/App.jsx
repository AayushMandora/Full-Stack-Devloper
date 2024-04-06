import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setform] = useState({email:"",phone:"",pass:""})
  const [show, setshow] = useState("text")

  const clickhandle=()=>{
    alert("You Click Button");
  }
  const handlemouse=()=>{
    alert("You Hover mouse on H1 component");
  }
  const changetext=(e)=>{
    setform({...form,[e.target.name]:e.target.value});
  }
  const showpass=(e)=>{
    setshow((show=="text")?"password":"text")
  }
  
  return (
    <>
      <div className="button">
        <button onClick={clickhandle}>Click me</button>
      </div>
      <h1 style={{backgroundColor:"red"}} onMouseOver={handlemouse}>Hover on Me</h1>

      <input type="text" name='email' value={form.email} onChange={changetext}/><br/>
      <input type="number" name='phone' value={form.phone} onChange={changetext}/><br />
      <input type={show} name='pass' value={form.pass} onChange={changetext}/><br />
      <button onClick={showpass} style={{margin:"20px"}}>Change Type</button><br />
    </>
  )
}

export default App
