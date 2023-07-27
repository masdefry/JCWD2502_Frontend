import { useRef, useState } from "react";

import ComponentTodo from './ComponentTodo';

export default function Todo(){

    const [todo, setTodo] = useState([
        {todo: 'Makan', date:'2023-07-28'},
    ])

    const inputTodo = useRef()
    const inputDate = useRef()

    const onSubmit = () => {
        let currentData = [...todo]

        let obj = {todo: inputTodo.current.value, date: inputDate.current.value}
        currentData.push(obj)
        setTodo(currentData)
    }

    return(
        <div style={{width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

            
                <ComponentTodo data={todo} />
       


            <input ref={inputTodo} type='text' placeholder="Enter your activity" style={{marginTop: '50px'}} />
            <input ref={inputDate} type='date' placeholder="Enter date" />
        
            <button onClick={onSubmit} >
                Submit
            </button>
        </div>
    )
}