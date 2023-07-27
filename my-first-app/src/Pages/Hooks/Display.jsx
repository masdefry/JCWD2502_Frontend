import React from 'react';

function Display(props){
    console.log(`Display ${props.data} Running`)
    return(
        <h1>
            {props.data} Saya Adalah {props.number}
        </h1>
    )
}

export default React.memo(Display)