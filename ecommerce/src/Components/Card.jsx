export default function Card(props){
    return(
        <div className='py-3'>
            <div>
                <img
                    src={props.item.images[0]}
                />
            </div>
            <div className='px-6 py-3 font-bold'>
                {props.item.name}
            </div>
            <div className='px-6 flex gap-3'>
                <del>
                    {props.item.price}
                </del>
                <span className='text-red-600 font-bold'>
                    {props.item.price.toLocaleString()}
                </span>
            </div>
        </div>
    )
}