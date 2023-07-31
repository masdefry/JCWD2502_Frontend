// import { useEffect, useState } from "react"

// export default function FetchPage(){

//     const [dataUsers, setDataUsers] = useState(null)

//     const fetchData = () => {
//         fetch(`https://jsonplaceholder.typicode.com/users`)
//         .then((bebas) => {
//             return bebas.json()
//         }).then(res =>{
//             console.log(res)
//             setDataUsers(res)
//         })
//         .catch((error) => {
//             console.log('>>>')
//             console.log(error)
//         })
//     }

//     const mapDataUsers = () => {
//         return dataUsers.map((value, index) => {
//             return(
//                 <h1 key={index}>
//                     {value.name}
//                 </h1>
//             )
//         })
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     if(dataUsers === null) return <div>Loading</div>

//     return(
//         <>
//             <h1>
//                 Fetch Page 
//             </h1>
//             {
//                 mapDataUsers()
//             }
//         </>
//     )
// }

import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function FetchPage(){

    const [dataUsers, setDataUsers] = useState([])
    const [idToEdit, setIdToEdit] = useState(0)

    const _inputUsername = useRef()
    const _inputEmail = useRef()
    const _inputPassword = useRef()

    const fetchData = async() => {
        try {
            const response = await axios.get(`http://localhost:5000/users`)
            // const response1 = await axios.get(``)
            console.log(response)
            setDataUsers(response.data)            
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async() => {
        try {
            // 1. Ambil value dari inputan
            const dataToSend = {
                username: _inputUsername.current.value,
                email: _inputEmail.current.value, 
                password: _inputPassword.current.value
            }

            // 2. Validasi setiap inputan
            // 3. Simpan data ke db.json
            const response = await axios.post(`http://localhost:5000/users`, dataToSend)
            alert('Register Success')
            fetchData()
        } catch (error) {
            alert('Register Failed')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
            <h1>
                Fetch Data Using Axios
            </h1>
            {
                dataUsers.map((value, index) => {
                    return(
                        <>
                            <div className="py-3 px-3">
                                {
                                    idToEdit === value.id?
                                        <input type="text" value={value.username} className="border" />
                                    :
                                        <span key={value.id}>
                                            {value.username}
                                        </span>
                                }
                                <span>
                                    <button onClick={() => setIdToEdit(value.id)} className="bg-blue-300 mx-3">
                                        Edit
                                    </button>
                                </span>
                            </div>
                        </>
                    )
                })
            }

            <input type="text" ref={_inputUsername} placeholder="Input your username " className="border" />
            <input type="email" ref={_inputEmail} placeholder="Input your email " className="border" />
            <input type="password" ref={_inputPassword} placeholder="Input your password " className="border" />
            <button onClick={onSubmit} className="bg-slate-300">
                Register 
            </button>
        </>
    )
}