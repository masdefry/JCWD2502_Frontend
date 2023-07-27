import React from 'react';
import { Link } from 'react-router-dom';

class ListProduct extends React.Component{

    // Lifecycle Method
    // ComponentDidMount: Proses ketika component pertama kali di render
    componentDidMount(){
        console.log('ComponentDidMount Running')
    }

    // ComponentDidUpdate: Proses ketika component di render ulang tiap kali terjadi perubahan
    //                     value pada state
    // ComponentWillUnmount: Proses ketika component akan dihapus (akan terjadi perpindahan page)
    componentWillUnmount(){
        alert('Are you sure want to exit?')
    }

    render(){
        console.log('Render Running')
        return(
            <div>
                <h1>
                    List Product Page 
                </h1>
                <Link to='/'>
                    Go to Home Page 
                </Link>
            </div>
        )
    }
}

export default ListProduct