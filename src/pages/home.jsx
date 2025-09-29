import React from 'react'
import { HeroSection } from '../components/Home/HeroSection'
import Advertiser from '../components/Home/Advertiser'
import { Navbar } from '../shared/NavBar'
import { Works } from '../components/Home/Works'
import { User } from '../components/Home/User'
import { Faq } from '../components/Home/Faq'
import { Footer } from '../shared/Footer'
import ContactForm from '../components/Home/ContactForm'


function Home() {
  return (
    <div>
       <Navbar/>
      <HeroSection/>
      <Advertiser/>
      <Works/>
      <User/>
     <Faq/>
     <ContactForm/>
     <Footer/>
    </div>
  )
}

export default Home
