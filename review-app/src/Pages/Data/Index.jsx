import axios from "axios";
import { useEffect, useState } from "react";

export default function Data(){
    const [data, setData] = useState([])
    const [dataToEdit, setDataToEdit] = useState(null)

    const onFetchData = async() => {
        try {
            const response = await axios.get('http://localhost:3001/products')
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        onFetchData()
        // console.log('UseEffect Running')
    }, [])

    useEffect(() => {

    }, []) // [State]

    useEffect(() => {
        return() => {

        }
    }, [])

    return(
        <>
            {
                console.log('Render 1x')
            }
            <h1>
                Network Call & CRUD
            </h1>
            {
                data.map((value, index) => {
                    return(
                        <div>
                            {
                                dataToEdit?.id === value.id?
                                    <input type="text" onChange={(e) => setDataToEdit({...dataToEdit, name: e.target.value})} value={dataToEdit?.name} />
                                :
                                    <span style={{marginRight: '30px'}}>
                                        {value.id}. {value.name}
                                    </span>
                            }
                            <button onClick={() => setDataToEdit({id: value.id, name: value.name})}>
                                {dataToEdit?.id === value.id? 'Save' : 'Edit'}
                            </button>
                        </div>
                    )
                })
            }
        </>
    )
}