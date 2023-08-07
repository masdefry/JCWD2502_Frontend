export default function Checkbox(props){
    return(
        <div className="flex items-center gap-3">
            <input type="checkbox" className="bg-white-300" 
            onChange={() => props.handleFunction(props.typeId)}
            />
            {props.typeName}      
        </div>
    )
}