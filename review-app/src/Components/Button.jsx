export default function Button(props){
    return(
        <button onClick={props.handleFunction} className={`w-[100px] h-[30px] ${props.customClass}`} style={props.handleStyle}>
           {props.text}
        </button>
    )
}