import { useEffect, useState } from "react"

export default function FetchPage(){

    const [dataUsers, setDataUsers] = useState(null)

    const fetchData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((bebas) => {
            return bebas.json()
        }).then(res =>{
            console.log(res)
            setDataUsers(res)
        })
        .catch((error) => {
            console.log('>>>')
            console.log(error)
        })
    }

    const mapDataUsers = () => {
        return dataUsers.map((value, index) => {
            return(
                <h1 key={index}>
                    {value.name}
                </h1>
            )
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(dataUsers === null) return <div>Loading</div>

    return(
        <>
            <h1>
                Fetch Page 
            </h1>
            {
                mapDataUsers()
            }
        </>
    )
}