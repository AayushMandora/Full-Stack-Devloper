import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(incrementByAmount(2))}}>+2</button>
      <button onClick={()=>{dispatch(multiply(2))}}>*2</button>
      <Navbar />
    </>
  )
}

export default App
