import './LandingPage.css';

import Card from '../../Components/Card';

import { Link } from 'react-router-dom';

export default function LandingPage(){

    const products = [
        { id: 1, name: 'Nike Tiempo', price: 1000000, stock: 20 },
        { id: 2, name: 'Adidas', price: 1000000, stock: 120 },
        { id: 3, name: 'Specs', price: 1000000, stock: 120 },
    ]

    return(
        <div className='wrapperCard'>
            {/* data={{id:1, name: ..., price: ..., }} */}
            
            {
                products.map((value, index) => {
                    return(
                        <Card product={value} />
                    )
                })
            }

            <Link to='/profile'>
                <span style={{backgroundColor: 'red'}}>
                    Go to Profile
                </span>
            </Link>
        {/* 
            <Card product={value} />
            <Card product={value} />
            <Card product={value} />
        */}
        </div>
    )
}