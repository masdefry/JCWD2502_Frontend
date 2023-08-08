import { useSelector } from "react-redux";

export default function Counter(){
    const counter = useSelector((state) => state.counter.value)
    return(
        <>
            <h1 className='text-5xl'>
                Counter Redux 
            </h1>
            <h3 className='text-3xl'>
                {counter}
            </h3>
        </>
    )
}