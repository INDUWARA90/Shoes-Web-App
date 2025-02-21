import React from 'react'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'

function ContactUs() {
    return (
        <div className=''>
            <Header />

            <div className="mt-40 flex items-center justify-center gap-20" >

                <div className="border-solid border-4 border-gray-600 w-[400px] rounded-md p-5">

                    <h1 className='text-center text-2xl mb-4'>Contact Us</h1>
                    
                        <div className="flex items-center justify-center flex-col gap-8">
                            <input type="text" className='border-solid border-2 border-gray-600 h-10 rounded-md p-6' placeholder='Enter Name' required />
                            <input type="text" className='border-solid border-2 border-gray-600 h-10 rounded-md p-6' placeholder='Enter Email' required />
                            <textarea name="" id="" className='border-solid border-2 border-gray-600 rounded-md resize-none p-2 h-36' placeholder='Enter Email' required />
                            <button className='border-solid border-2 p-2 w-[150px]' >Submit</button>
                        </div>

                </div>

                <div className="grid gap-3">
                        <div className="border-solid border-4 p-5 rounded-md max-w-16:">
                            feddddddddddddddddddddddddddddfdddddd <br />
                            feddddddddddddddddddddddddddddfdddddd
                        </div>    
                        <div className="border-solid border-4 p-5 rounded-md max-w-16:">
                            feddddddddddddddddddddddddddddfdddddd <br />
                            feddddddddddddddddddddddddddddfdddddd
                        </div>    
                        <div className="border-solid border-4 p-5 rounded-md max-w-16:">
                            feddddddddddddddddddddddddddddfdddddd <br />
                            feddddddddddddddddddddddddddddfdddddd
                        </div>    
                        <div className="border-solid border-4 p-5 rounded-md max-w-16:">
                            feddddddddddddddddddddddddddddfdddddd <br />
                            feddddddddddddddddddddddddddddfdddddd
                        </div>    
                </div>

            </div>

            <div className="flex items-center justify-center  mx-40 mt-16">
                <p className='text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora magnam quasi cum? Veniam esse cum consequuntur dolorum, quod eligendi itaque ex, cupiditate labore ea harum tenetur dolores amet dolor.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora magnam quasi cum? Veniam esse cum consequuntur dolorum, quod eligendi itaque ex, cupiditate labore ea harum tenetur dolores amet dolor.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora magnam quasi cum? Veniam esse cum consequuntur dolorum, quod eligendi itaque ex, cupiditate labore ea harum tenetur dolores amet dolor.
                </p>
            </div>


            <div className="flex items-center justify-center  mx-40 mt-12">
                <p className='text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora magnam quasi cum? Veniam esse cum consequuntur dolorum, quod eligendi itaque ex, cupiditate labore ea harum tenetur dolores amet dolor.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora magnam quasi cum? Veniam esse cum consequuntur dolorum, quod eligendi itaque ex, cupiditate labore ea harum tenetur dolores amet dolor.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora magnam quasi cum? Veniam esse cum consequuntur dolorum, quod eligendi itaque ex, cupiditate labore ea harum tenetur dolores amet dolor.
                </p>
            </div>

            <div className="flex items-center justify-center gap-16 mt-16">
                <img src="" alt="..." />
                <img src="" alt="..." />
            </div>
            

            <Footer />
        </div>
    )
}

export default ContactUs