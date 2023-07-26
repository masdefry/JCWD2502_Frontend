import './LandingPage.css';

import Card from '../../Components/Card';

export default function LandingPage(){

    const products = [
        { id: 1, name: 'Nike Tiempo', price: 1000000, stock: 20 },
        { id: 2, name: 'Adidas', price: 1000000, stock: 120 },
    ]

    return(
        <div className='wrapperCard'>
            {/* data={{id:1, name: ..., price: ..., }} */}
            <Card product={products[0]} />
            <Card product={products[1]} /> 
        </div>
    )
}