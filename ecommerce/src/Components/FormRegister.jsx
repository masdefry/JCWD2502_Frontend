export default function FormRegister(){
    return(
        <div>
          <div className='flex justify-center items-center bg-slate-100 w-full h-10'>
            <h1 className='text-xl font-bold'>
              NEW CUSTOMER
            </h1>
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
              Complete Name
            </h1>
            <input type='text' placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
              Username or Email
            </h1>
            <input type='text' placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
              Password
            </h1>
            <input type='text' placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
        </div>
    )
}