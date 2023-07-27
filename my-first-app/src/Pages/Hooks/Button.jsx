import React from 'react';

function Button(props){
    console.log(`Button ${props.children} Running`)
    return(
        <button onClick={props.handleFunction}>
            {props.children}
        </button>
    )
}

export default React.memo(Button)