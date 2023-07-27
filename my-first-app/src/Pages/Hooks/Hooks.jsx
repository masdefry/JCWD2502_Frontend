// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";

// export default function Hooks(){

//     const [number, setNumber] = useState(1)
//     const [data, setData] = useState([])

//     // === ComponentDidMount
//     useEffect(() => {
//         console.log('useEffect')
//     }, [])

//     // === ComponentDidUpdate
//     useEffect(() => {
//         console.log('useEffect === DidUpdate')
//     }, [number])

//     // === ComponentWillUnmount
//     // useEffect(() => {
//     //     return() => {
//     //         alert('Bye!')
//     //     }
//     // }, [])

//     const inputName = useRef()
//     const inputHobby = useRef()

//     const onSubmit = () => {
//         console.log('Submit')
//         console.log(inputName.current.value)
//         console.log(inputHobby.current.value)
//     }

//     return(
//         <div>
//             {/* {console.log('Render')}
//             <h1>Hooks</h1>
//             <h3>
//                 {number}
//             </h3>
//             <button onClick={() => setNumber(number + 1)}>
//                 Change Number 
//             </button>
//             <Link to='/'>
//                 Go to Homepage
//             </Link> */}

//             <input type="text" ref={inputName} />
//             <input type="text" ref={inputHobby} />
//             <button onClick={onSubmit}>
//                 Submit
//             </button>
//         </div>
//     )
// }

// useCallback
import { useState, useCallback } from "react";

import Display from "./Display";
import Button from "./Button";

export default function Hooks(){
    const [umur, setUmur] = useState(0)
    const [salary, setSalary] = useState(10000000)

    const incrementUmur = useCallback(() => {
        setUmur(umur+1)
    }, [umur])

    const incrementSalary = useCallback(() => {
        setSalary(salary+100000)
    }, [salary])
    return(
        <>
            <Display data={'Umur'} number={umur} />
            <Button handleFunction={incrementUmur}>
                Increment Umur 
            </Button>

            <Display data={'Salary'} number={salary} />
            <Button handleFunction={incrementSalary}>
                Increment Salary 
            </Button>
        </>
    )
}