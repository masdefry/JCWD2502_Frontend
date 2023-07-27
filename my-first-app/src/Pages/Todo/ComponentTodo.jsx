export default function ComponentTodo(props){
    return(
        <> 
            {
                props.data.map(value => {
                    return(
                        <div style={{display: 'flex'}}>
                            <div style={{marginRight: '10px'}}>
                            {value.todo}: 
                            </div>
                            <div>
                            {value.date}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}