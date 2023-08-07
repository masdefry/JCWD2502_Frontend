import { useState } from 'react';
import Button from './../../Components/Button';

export default function Products(){
    // useState/State: Untuk menyimpan data di local component. Setiap kali terjadi perubahan data, 
    //                 nge-trigger untuk re-render
    const [number, setNumber] = useState(0)

    const onChangeNumber = (operator) => {
        if(operator === '-'){
            setNumber(number-1)
        }else{
            setNumber(number+1)
        }
        
    }

    return(
        <>
            <h1>
                Products Page
            </h1>
            <h3>
                {number}
            </h3>
            <Button text='-' handleFunction={() => onChangeNumber('-')} handleStyle={{color: 'red'}} customClass='bg-red-600 text-xs' />
            <Button text='+' handleFunction={() => onChangeNumber('+')} handleStyle={{color: 'red'}} customClass='bg-red-600 text-xs' />
        </>
    )
}