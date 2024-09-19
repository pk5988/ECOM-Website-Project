import React from 'react'
import Breadcrum from './Partials/Breadcrum'
import AboutContents from './Partials/AboutContents'
import Features from './Partials/Features'
import Faqs from './Partials/Faqs'

export default function About() {
  return (
    <>
     <Breadcrum title ="About Us" />
     <AboutContents/> 
     <Features/> 
     <Faqs/>
    </>
  )
}
