import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from './../../Redux/Features/Counter/Index';

export default function Counter(){
    const counter = useSelector((state) => state.bebas.number)
    const dispatch = useDispatch()
    return(
        <>
            <h1 className='text-5xl'>
                Counter Redux 
            </h1>
            <h3 className='text-3xl'>
                {counter}
            </h3>
            <button className='bg-slate-500 px-5 py-6' onClick={() => dispatch(decrement())}>
                -
            </button>
            <button className='bg-slate-500 px-5 py-6' onClick={() => dispatch(increment())}>
                +
            </button>
        </>
    )
}