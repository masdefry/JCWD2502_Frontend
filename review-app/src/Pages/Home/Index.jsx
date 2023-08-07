// function Home(){
//     return(
//         <h1>
//             Ini Home Page 
//         </h1>
//     )
// }

import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
            <h1>
                Ini Home Page
            </h1>
            <Link to='/profile'>
                <div>
                    Go to Profile Page 
                </div>  
            </Link>
        </>
    )
}

export default Home