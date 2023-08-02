import Button from "./Button";

export default function FormLogin(){
    return(
        <div>
          <div className='flex justify-center items-center bg-slate-100 w-full h-10'>
            <h1 className='text-xl font-bold'>
              RETURNING CUSTOMER
            </h1>
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
             Email
            </h1>
            <input type='text' placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
              Password
            </h1>
            <input type='password' placeholder='Password' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='px-20 py-3'>
            <Button handleClass={'px-10 py-5 hover:bg-cyan-600 font-bold'}>
              Login
            </Button>
          </div>
        </div>
    )
}