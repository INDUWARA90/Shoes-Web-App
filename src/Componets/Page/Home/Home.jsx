import React from 'react'
import Footer from '../../common/footer/Footer'
import Header from '../../common/header/Header'
import Carousel from '../../Carousel/Carousel'

function Home() {


  return (
    <div className=''>
        <Header />

      <div className="mt-48" >

        <Carousel />

      </div>
    

        <Footer />
    </div>
  )
}

export default Home