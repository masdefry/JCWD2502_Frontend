import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {BsCart2} from "react-icons/bs";

export default function Navbar(props){
    const {email} = useSelector((state) => state.users)
    return(
        <div className='grid grid-cols-3 justify-between px-32 h-[50px]'>
            <div className='flex items-center'>
                <Link to='/'>
                    <img src='https://erigostore.co.id/cdn/shop/files/LOGO_ERIGO_FIT.jpg?v=1677643716' width={'120px'} />
                </Link>
            </div>
            <div className='flex items-center justify-between font-bold'>
                <span>
                Erigo 
                </span>
                <span>
                Collaboration
                </span>
                <span>
                Erigo Tour
                </span>
                <span>
                Track Order
                </span>
            </div>
            <div className='flex justify-end items-center font-bold'>
                {
                    email?
                        <span className="flex items-center gap-3">
                            {email}
                            <div className="relative">
                                <BsCart2 className="text-xl" />
                                <span className="text-xs bg-red-600 rounded-full w-[20px] h-[20px] absolute top-[-10px] left-[10px] flex justify-center items-center">
                                    1
                                </span>
                            </div>
                        </span>
                    :
                            <Link to='/register'>
                            Signin
                        </Link>
                }
                
            </div>
        </div>
    )
}