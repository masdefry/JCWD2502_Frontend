import { Accordion } from 'flowbite-react';
import Logo from './../../logo.svg';

export default function Home(){
    return(
        <div className='pt-0 mt-0'>
            {/* 
                Section-01: Jumbotron
            */}
            <img
                alt='...'
                src='https://erigostore.co.id/cdn/shop/files/Banner_Website_Desktop_Flannel_copy_86f53171-bedf-4dbf-abd8-3088f6e246cc.jpg?v=1690213542'
                className='h-full rounded-none'
            />

            {/* 
                Section-02: Content
            */}
            <div className="flex gap-52 px-32 py-20">
                {/* 
                    Sidebar
                */}
                <div>
                    <div>
                        <div className='font-bold text-lg'>
                            COLLECTION
                        </div>
                        <div className='pt-3 flex flex-col gap-3'>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="bg-white-300" />
                                T-Shirt                    
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="bg-white-300" />
                                Shirt                    
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="bg-white-300" />
                                Pants                    
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                    Main Content
                */}
                <div className='w-full'>
                    <div className='px-5'>
                        <div>
                            <input type='text' className='w-full border-gray-300' placeholder='Search Products' />
                        </div>
                        <div className='flex justify-between py-3'>
                            <div className='flex gap-1'>
                                <span className='font-bold'>
                                    987 
                                </span>
                                <span>
                                    Products
                                </span>
                            </div>
                            <div>
                                Sorting Menu
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 py-2'>
                        <div className='py-3'>
                            <div>
                                <img
                                    src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/ee269d434259d07456f83fa8d1fb6ee7_882b76a1-2d4a-45c1-bdc5-d1d53aca45ce_360x.jpg?v=1688640658'
                                />
                            </div>
                            <div className='px-6 py-3 font-bold'>
                                Erigo Denim Pants Tea
                            </div>
                            <div className='px-6 flex gap-3'>
                                <del>
                                    Rp. 100.000
                                </del>
                                <span className='text-red-600 font-bold'>
                                    Rp. 85.000
                                </span>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div>
                                <img
                                    src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/ee269d434259d07456f83fa8d1fb6ee7_882b76a1-2d4a-45c1-bdc5-d1d53aca45ce_360x.jpg?v=1688640658'
                                />
                            </div>
                            <div className='px-6 py-3 font-bold'>
                                Erigo Denim Pants Tea
                            </div>
                            <div className='px-6 flex gap-3'>
                                <del>
                                    Rp. 100.000
                                </del>
                                <span className='text-red-600 font-bold'>
                                    Rp. 85.000
                                </span>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div>
                                <img
                                    src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/ee269d434259d07456f83fa8d1fb6ee7_882b76a1-2d4a-45c1-bdc5-d1d53aca45ce_360x.jpg?v=1688640658'
                                />
                            </div>
                            <div className='px-6 py-3 font-bold'>
                                Erigo Denim Pants Tea
                            </div>
                            <div className='px-6 flex gap-3'>
                                <del>
                                    Rp. 100.000
                                </del>
                                <span className='text-red-600 font-bold'>
                                    Rp. 85.000
                                </span>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div>
                                <img
                                    src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/ee269d434259d07456f83fa8d1fb6ee7_882b76a1-2d4a-45c1-bdc5-d1d53aca45ce_360x.jpg?v=1688640658'
                                />
                            </div>
                            <div className='px-6 py-3 font-bold'>
                                Erigo Denim Pants Tea
                            </div>
                            <div className='px-6 flex gap-3'>
                                <del>
                                    Rp. 100.000
                                </del>
                                <span className='text-red-600 font-bold'>
                                    Rp. 85.000
                                </span>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div>
                                <img
                                    src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/ee269d434259d07456f83fa8d1fb6ee7_882b76a1-2d4a-45c1-bdc5-d1d53aca45ce_360x.jpg?v=1688640658'
                                />
                            </div>
                            <div className='px-6 py-3 font-bold'>
                                Erigo Denim Pants Tea
                            </div>
                            <div className='px-6 flex gap-3'>
                                <del>
                                    Rp. 100.000
                                </del>
                                <span className='text-red-600 font-bold'>
                                    Rp. 85.000
                                </span>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div>
                                <img
                                    src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/ee269d434259d07456f83fa8d1fb6ee7_882b76a1-2d4a-45c1-bdc5-d1d53aca45ce_360x.jpg?v=1688640658'
                                />
                            </div>
                            <div className='px-6 py-3 font-bold'>
                                Erigo Denim Pants Tea
                            </div>
                            <div className='px-6 flex gap-3'>
                                <del>
                                    Rp. 100.000
                                </del>
                                <span className='text-red-600 font-bold'>
                                    Rp. 85.000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}