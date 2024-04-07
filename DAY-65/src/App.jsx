import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [check, setcheck] = useState();

  useEffect(() => {
    let todostring=localStorage.getItem("todos");
    if(todostring)
    {
      let todos=JSON.parse(localStorage.getItem("todos"));
      settodos(todos);
  }
  }, [])
  

  const savetoLoc=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const changehandle=(e)=>{
    settodo(e.target.value)
  }

  const addtodo=()=>{
    let data=todo;
    settodos([...todos,{id:uuidv4(),todo,check:false}])
    settodo("");
    console.log(todos);
    savetoLoc();
  }

  const checked=(e)=>{
    setcheck(!check);
    let id=e.target.name;
    let index=todos.findIndex(item=>{
      return item.id === id;
    });
    let newtodos=[...todos];
    newtodos[index].check = !newtodos[index].check;
    settodos(newtodos);
    savetoLoc();
  }

  const Delete=(e)=>{
    let id=e.target.name;
    let newtodos=todos.filter(item=>{
      return item.id!==id;
    });
    settodos(newtodos);
    savetoLoc();
  }

  const edit=(e)=>{
    let id=e.target.name;
    let index=todos.findIndex(item=>{
      return item.id === id;
    });
    settodo(todos[index].todo);
    Delete(e);
    savetoLoc();
  }
  return (
    <>
      <nav className='bg-black/85 w-full h-11 flex justify-evenly items-center'>
        <h1 className='font-bold text-2xl'>AM</h1>
        <ul className='flex gap-5 font-bold text-2xl'>
        <li>Home</li>
        <li>About us</li>
        </ul>
      </nav>
      <div className="todo bg-black/50 h-20 w-[80vw] m-auto mt-6 flex items-center justify-evenly">
        <input type="text" className='w-[40vw] text-black p-1' value={todo} onChange={changehandle}/>
        <button className='font-bold text-2xl border-2 border-black px-4 hover:bg-black/50' onClick={addtodo}>ADD</button>
      </div>
      <div className='todos bg-black/75 h-[70vh] w-[80vw] m-auto mt-3 p-4'>
          <h1 className='text-2xl font-bold'>Your Todos</h1>
          {todos.map(item=>{
          return <div key={item.id} className='mt-4 flex justify-between w-[30vw] items-center'>
            <input type="checkbox" name={item.id} className='size-4' checked={item.check} onChange={checked}/>
            <h3 className={item.check?"line-through":""}>{item.todo}</h3>
            <div className="buttons flex gap-2">
              <button name={item.id} className='bg-black/50 rounded-md px-5 font-semibold' onClick={edit}>Edit</button>
              <button name={item.id} className='bg-black/50 rounded-md px-5 font-semibold' onClick={Delete}>Delete</button>
            </div>
          </div>
          })}
      </div>
    </>
  )
}

export default App
