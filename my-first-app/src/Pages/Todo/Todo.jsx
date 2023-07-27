import { useRef, useState } from "react";

export default function Todo(){

    const [todos, setTodos] = useState([])
    
    const inputActivity = useRef()
    const inputDate = useRef()

    const onSubmit = () => {
        // const data = {
        //     activity: inputActivity.current.value, 
        //     date: inputDate.current.value 
        // }

        const data = [ inputActivity.current.value, inputDate.current.value ]

        const currentTodos = [...todos]
        currentTodos.push(data)

        setTodos(currentTodos)
    }

    return(
        <div>
            {console.log(todos)}
            {
                todos.map((value, index) => {
                    return(
                        <div key={index}>
                            <span>
                                {value[0]} 
                            </span>
                            <span>
                                {value[1]}
                            </span>
                        </div>
                    )
                })
            }

            <input type="text" ref={inputActivity} placeholder="Enter your activity" />
            <input type="date" ref={inputDate} placeholder="Enter date" />
            <button onClick={onSubmit}>
                Submit
            </button>
        </div>
    )
}