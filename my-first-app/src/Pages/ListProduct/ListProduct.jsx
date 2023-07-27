import React from 'react';
import { Link } from 'react-router-dom';

var color = 'red'

class ListProduct extends React.Component{

    // State
    // - Digunakan untuk menyimpan data
    // - Sifatnya isolated
    // - Ketika terjadi perubahan data, component nya akan di render ulang
    state = {
        number: 1,
        color: 'Biru',
        listStudent: ["Raka", "Andre", "..."],
        student: {name: "Raka"}
    }

    // Lifecycle Method
    // ComponentDidMount: Proses ketika component pertama kali di render
    componentDidMount(){
        console.log('ComponentDidMount Running')
    }

    // ComponentDidUpdate: Proses ketika component di render ulang tiap kali terjadi perubahan
    //                     value pada state
    componentDidUpdate(){
        console.log('ComponentDidUpdate')
    }
    // ComponentWillUnmount: Proses ketika component akan dihapus (akan terjadi perpindahan page)
    // componentWillUnmount(){
    //     alert('Are you sure want to exit?')
    // }

    render(){
        
        console.log('Render Running')
        return(
            <div>
                <h1>
                    List Product Page 
                </h1>
                <h1>
                    {this.state.number}
                </h1>
                <button onClick={() => this.setState({number: this.state.number})}>
                    Change Number 
                </button>

                <h3>{color}</h3>
                <button onClick={() => color = 'blue'}>
                    Change Color 
                </button>
                <button onClick={() => console.log(color)}>
                    Check Color 
                </button>
                <Link to='/'>
                    Go to Home Page 
                </Link>
            </div>
        )
    }
}

export default ListProduct