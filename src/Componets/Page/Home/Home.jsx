import React from 'react'
import Footer from '../../common/footer/Footer'
import Header from '../../common/header/Header'
import Carousel from '../../Carousel/Carousel'
import HCard from '../../H-Card/HCard'

import home01 from '../../../assets/home01.png'


function Home() {


  return (
    <div className=''>
      <Header />

      <div className="mt-48" >

        <Carousel />

        <h1 className='text-center mt-28 mb-10 text-4xl font-semibold'>These Days Trending Iteams</h1>
        <div className="flex justify-center mt-2">
          <div className="grid grid-cols-3 gap-4">
            <HCard />
            <HCard />
            <HCard />
          </div>
        </div>


        <div className="flex justify-center mt-32 mb-40">
          <div className="grid grid-cols-2 gap-40">
            <img src={home01} alt="..."  className='w-[550px]'/>
            <img src={home01} alt="..."  className='w-[550px]'/>
          </div>
        </div>


        <div className="px-32">

        <div className="flex justify-center mt-32">
          <div className="grid grid-cols-2 gap-40">
            <img src={home01} alt="..." />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eos quaerat similique ullam odit sit temporibus quidem. Modi laborum dolorum accusamus, cumque molestias quidem, eaque atque nisi quo id ex?</p>
          </div>
        </div>

        <div className="flex justify-center mt-32">
          <div className="grid grid-cols-2 gap-40">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eos quaerat similique ullam odit sit temporibus quidem. Modi laborum dolorum accusamus, cumque molestias quidem, eaque atque nisi quo id ex?</p>
            <img src={home01} alt="..." />
          </div>
        </div>


        </div>

        <h1 className='text-center mt-28 mb-10 text-4xl font-semibold'>These Day Most Rare Items</h1>
      
        <div className="flex justify-center mt-20">
          <div className="grid grid-cols-2 gap-4">
            <HCard />
            <HCard />
          </div>
        </div>

        <div className="mt-32">
          <div className="bg-yellow-300 w-full p-24 flex items-center justify-center gap-10">
            <h1 className='uppercase text-center text-4xl font-semibold'>Become a Member & get 10% off</h1>
            <button className='p-7 bg-black rounded-md text-white hover:text-black hover:bg-white '>Sign Up for free</button>
          </div>

        </div>


      </div>


      <Footer />
    </div>
  )
}

export default Home