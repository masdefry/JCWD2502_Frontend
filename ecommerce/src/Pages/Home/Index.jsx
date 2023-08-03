import { Accordion } from 'flowbite-react';
import Logo from './../../logo.svg';
import Card from '../../Components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home(){

    const [products, setProducts] = useState(null)

    const onFetchData = async() => {
        try {
            const {data} = await axios.get('http://localhost:5000/products')
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
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
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="bg-white-300" />
                                T-Shirt                    
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="bg-white-300" />
                                Shirt                    
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="bg-white-300" />
                                Pants                    
                            </div>
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
                                    <Card item={value} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}