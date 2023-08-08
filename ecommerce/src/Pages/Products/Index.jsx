import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Products(){
    const [details, setDetails] = useState({})
    const {id} = useParams()
    
    const onFetchData = async() => {
        try {
            const response = await axios.get(`http://localhost:5000/products/${id}`)
            console.log(response)
            setDetails(response.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        onFetchData()
    }, [])

    return(
        <>
            <h1>
                Detail Product
            </h1>
            <h1>
                {details?.name}
            </h1>
            <span>
                {details?.price}
            </span>
        </>
    )
}