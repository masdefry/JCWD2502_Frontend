import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, fetchProductsAsync} from './../../Redux/Features/Counter/Index';
import { useEffect } from "react";

export default function Counter(){
    const counter = useSelector((state) => state.bebas.number)
    const products = useSelector((state) => state.bebas.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsAsync())
    }, [])

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
            {
                products.map((value, index) => {
                    return(
                        <div>
                            {value.name}
                        </div>
                    )
                })
            }
        </>
    )
}