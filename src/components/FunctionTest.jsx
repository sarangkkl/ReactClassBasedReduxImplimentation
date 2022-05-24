import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../features/counterSlice'
const FunctionTest = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count)
  const incrementHandle = ()=>{
    dispatch(increment())
  }
  const decrementtHandle = ()=>{
    dispatch(decrement())
  }
  return (
    <div>
      <h1>The count is {count}</h1>

      <button onClick={()=>{incrementHandle()}}>Increase</button>
      <button onClick={()=>{decrementtHandle()}}>Increase</button>
    </div>
  )
}

export default FunctionTest