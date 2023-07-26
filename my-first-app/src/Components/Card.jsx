export default function Card(props){
    return(
        <div className="card">
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ac141360-dc12-492d-8cda-92690e2b2bc6/tiempo-legend-9-academy-mg-multi-ground-football-boot-8Vvl8G.png' width={'100%'} />
            </div>
            <div>
                <h1>
                    {props.product.name}
                </h1>
                <h3 style={{marginTop: '-20px'}}>
                    Rp. {props.product.price}
                </h3>
                <h3 style={{marginTop: '-20px'}}>
                    {props.product.stock} Stocks Available
                </h3>
            </div>
            <div>
                <button style={{width: '100%'}}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}