import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
    selectCount
} from "../features/counterSlice";

const Counter = () => {

    const count=useSelector(selectCount);
    const dispatch=useDispatch();

    const [amount,setAmount]=useState("0");

  return (

    <div className='flex flex-col h-[100vh] bg-gray-200 gap-y-32'>

        <div className='text-center my-16 bg-white w-16 ml-[47.5vw] rounded-2xl'>{count}</div>

        <div className='flex justify-evenly'>
            <button onClick={()=>dispatch(increment())} className='bg-white px-2 py-1 rounded-full'>+</button>
            <button onClick={()=>dispatch(decrement())} className='bg-white px-2 py-1 rounded-full'>-</button>
        </div>

        <div className='flex justify-center'>
            <input className='text-center rounded-full outline-none py-2' placeholder='Amount To Add' value={amount} onChange={e=>setAmount(e.target.value)}/>
        </div>

        <div className='flex justify-around'>
            <button onClick={()=>dispatch(incrementByAmount(Number(amount) || 0))} className='bg-white px-2 py-1 rounded-full'>Add Amount</button>
            <button onClick={()=>dispatch(incrementAsync(Number(amount) || 0))} className='bg-white px-2 py-1 rounded-full'>Add Async</button>
        </div>
        
    </div>

  )
}

export default Counter