export default function Button(props){
    return <button onClick={props.handleFunction} className={`border border-gray-600 ${props.handleClass}`}>
        {props.children}
    </button> 
}