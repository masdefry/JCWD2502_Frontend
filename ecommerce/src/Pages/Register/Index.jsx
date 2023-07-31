import FormLogin from "../../Components/FormLogin";
import FormRegister from './../../Components/FormRegister';

export default function Register(){
    return(
        <div className='grid grid-cols-2 mt-24 px-32'>
            <FormLogin />
            <FormRegister />
        </div>
    )
}