import { Accordion } from 'flowbite-react';
import Logo from './../../logo.svg';
import Card from '../../Components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Checkbox from '../../Components/Checkbox';
import { Link } from 'react-router-dom';

export default function Home(){
    const [backupProducts, setBackupProducts] = useState(null)
    const [products, setProducts] = useState(null)
    const [type, setType] = useState(null)
    const [selectedType, setSelectedType] = useState([])

    const onFetchData = async() => {
        try {
            const products = await axios.get('http://localhost:5000/products')
            const type = await axios.get('http://localhost:5000/type')
            console.log(products.data)
            console.log(type.data)

            setBackupProducts(products.data)
            setProducts(products.data)
            setType(type.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCheckbox = (_typeId) => {
        
        const tempSelectedType = [...selectedType] // [1]
        const tempProducts = [...backupProducts]
        
        if(tempSelectedType.includes(_typeId)){
            tempSelectedType.splice(tempSelectedType.indexOf(_typeId), 1) // []
        }else{
            tempSelectedType.push(_typeId)
        }
        
        const filtered = tempProducts.filter((value) => {
            return tempSelectedType.includes(value.typeId)
        })

        setSelectedType(tempSelectedType) // setState [1]
        filtered.length? setProducts(filtered) : setProducts(tempProducts)
    }

    useEffect(() => {
        onFetchData()
    }, [])

    if(!products){
        return <div>Loading...</div>
    }

    return(
        <div className='pt-0 mt-0'>
            {/* 
                Section-01: Jumbotron
            */}
            <img
                alt='...'
                src='https://erigostore.co.id/cdn/shop/files/Banner_Website_Desktop_Flannel_copy_86f53171-bedf-4dbf-abd8-3088f6e246cc.jpg?v=1690213542'
                className='h-full rounded-none'
            />

            {/* 
                Section-02: Content
            */}
            <div className="flex gap-52 px-32 py-20">
                {/* 
                    Sidebar
                */}
                <div>
                    <div>
                        <div className='font-bold text-lg'>
                            COLLECTION
                        </div>
                        <div className='pt-3 flex flex-col gap-3'>
                            {
                                type.map((value, index) => {
                                    return(
                                        <Checkbox 
                                            typeName={value.name} 
                                            typeId={
                                                value.id
                                            }
                                            handleFunction={
                                                handleCheckbox
                                            }
                                        />
                                    )
                                })
                            }   
                        </div>
                    </div>
                </div>
                {/* 
                    Main Content
                */}
                <div className='w-full'>
                    <div className='px-5'>
                        <div>
                            <input type='text' className='w-full border-gray-300' placeholder='Search Products' />
                        </div>
                        <div className='flex justify-between py-3'>
                            <div className='flex gap-1'>
                                <span className='font-bold'>
                                    987 
                                </span>
                                <span>
                                    Products
                                </span>
                            </div>
                            <div>
                                Sorting Menu
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 py-2'>
                        {
                            products.map((value, index) => {
                                return(
                                    <>
                                        <Link to={`/products/${value.id}`}>
                                            <Card item={value} />
                                        </Link>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}